import { inject, Service } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FirebaseService } from '../firebase/firebase.service';
import { GameReason, GameResult, LessonGame, LessonItem, LessonPlayer, NewLessonGame } from './lesson.interface';

const MAX_GAMES = 500;

/** A Firestore timestamp as a date; `null` while a server timestamp is still pending. */
const toDate = (value: unknown): Date | null => (value as { toDate?: () => Date } | null | undefined)?.toDate?.() ?? null;

/**
 * The live lesson of a class: `classes/{classId}/lessons/{lessonId}` with its `players` and `games`,
 * plus the openings a student has already used, `users/{uid}/openings/{id}`. Nothing here listens or
 * polls: the page reads once and again when asked. Rules: firestore.rules.
 */
@Service()
export class LessonService {
	private readonly _firebase = inject(FirebaseService);
	private readonly _auth = inject(AuthService);

	/** The newest lesson, or `null` before the first one. */
	async latest(classId: string): Promise<LessonItem | null> {
		const { db } = await this._context();
		const { collection, getDocs, limit, orderBy, query } = await import('firebase/firestore');
		const snapshot = await getDocs(query(collection(db, 'classes', classId, 'lessons'), orderBy('createdAt', 'desc'), limit(1)));
		const found = snapshot.docs[0];
		if (!found) return null;
		return { id: found.id, status: found.data()['status'] === 'finished' ? 'finished' : 'open', createdAt: toDate(found.data()['createdAt']) };
	}

	/** Owner only. */
	async start(classId: string): Promise<LessonItem> {
		const { db } = await this._context();
		const { addDoc, collection, serverTimestamp } = await import('firebase/firestore');
		const ref = await addDoc(collection(db, 'classes', classId, 'lessons'), { status: 'open', createdAt: serverTimestamp() });
		return { id: ref.id, status: 'open', createdAt: new Date() };
	}

	/** Owner only: ends the tournament. The lesson stays readable. */
	async finish(classId: string, lessonId: string): Promise<void> {
		const { db } = await this._context();
		const { doc, serverTimestamp, updateDoc } = await import('firebase/firestore');
		await updateDoc(doc(db, 'classes', classId, 'lessons', lessonId), { status: 'finished', finishedAt: serverTimestamp() });
	}

	async players(classId: string, lessonId: string): Promise<LessonPlayer[]> {
		const { db } = await this._context();
		const { collection, getDocs } = await import('firebase/firestore');
		const snapshot = await getDocs(collection(db, 'classes', classId, 'lessons', lessonId, 'players'));
		return snapshot.docs.map((item) => ({
			uid: item.id,
			name: String(item.data()['name'] ?? ''),
			openingId: String(item.data()['openingId'] ?? ''),
			ready: item.data()['ready'] === true,
		}));
	}

	async games(classId: string, lessonId: string): Promise<LessonGame[]> {
		const { db } = await this._context();
		const { collection, getDocs, limit, query } = await import('firebase/firestore');
		const snapshot = await getDocs(query(collection(db, 'classes', classId, 'lessons', lessonId, 'games'), limit(MAX_GAMES)));
		return snapshot.docs
			.map((item) => this._toGame(item.id, item.data()))
			.sort((a, b) => a.round - b.round || a.whiteName.localeCompare(b.whiteName));
	}

	/** The signed-in user joins the lesson with the opening picked for them. Not ready yet. */
	async join(classId: string, lessonId: string, openingId: string): Promise<LessonPlayer> {
		const { db, uid, name } = await this._context();
		const { doc, serverTimestamp, setDoc } = await import('firebase/firestore');
		await setDoc(doc(db, 'classes', classId, 'lessons', lessonId, 'players', uid), {
			uid,
			name,
			openingId,
			ready: false,
			updatedAt: serverTimestamp(),
		});
		return { uid, name, openingId, ready: false };
	}

	async setReady(classId: string, lessonId: string, ready: boolean): Promise<void> {
		const { db, uid } = await this._context();
		const { doc, serverTimestamp, updateDoc } = await import('firebase/firestore');
		await updateDoc(doc(db, 'classes', classId, 'lessons', lessonId, 'players', uid), { ready, updatedAt: serverTimestamp() });
	}

	/** Owner only: saves all the pairings of a new round in one step. */
	async startRound(classId: string, lessonId: string, games: NewLessonGame[]): Promise<void> {
		const { db } = await this._context();
		const { collection, doc, serverTimestamp, writeBatch } = await import('firebase/firestore');
		const batch = writeBatch(db);
		const target = collection(db, 'classes', classId, 'lessons', lessonId, 'games');
		for (const game of games) {
			batch.set(doc(target), { ...game, lastMoveAt: serverTimestamp(), createdAt: serverTimestamp() });
		}
		await batch.commit();
	}

	/** One move by the side to move; `end` is set when the move itself finishes the game. */
	async move(
		classId: string,
		lessonId: string,
		game: LessonGame,
		san: string,
		clocks: { whiteMs: number; blackMs: number },
		end: { result: GameResult; reason: GameReason } | null,
	): Promise<void> {
		const { db } = await this._context();
		const { doc, serverTimestamp, updateDoc } = await import('firebase/firestore');
		await updateDoc(doc(db, 'classes', classId, 'lessons', lessonId, 'games', game.id), {
			moves: [...game.moves, san],
			...clocks,
			lastMoveAt: serverTimestamp(),
			drawOffer: null,
			...(end ?? {}),
		});
	}

	/** A game ends without a move: resigning, accepting a draw, or a clock that ran out. */
	async end(classId: string, lessonId: string, gameId: string, result: GameResult, reason: GameReason): Promise<void> {
		const { db } = await this._context();
		const { doc, updateDoc } = await import('firebase/firestore');
		await updateDoc(doc(db, 'classes', classId, 'lessons', lessonId, 'games', gameId), { result, reason, drawOffer: null });
	}

	/** Offers a draw, or withdraws or declines one with `null`. */
	async offerDraw(classId: string, lessonId: string, gameId: string, offer: boolean): Promise<void> {
		const { db, uid } = await this._context();
		const { doc, updateDoc } = await import('firebase/firestore');
		await updateDoc(doc(db, 'classes', classId, 'lessons', lessonId, 'games', gameId), { drawOffer: offer ? uid : null });
	}

	/** Ids of the openings the signed-in user already used in a class game. */
	async knownOpenings(): Promise<string[]> {
		const { db, uid } = await this._context();
		const { collection, getDocs } = await import('firebase/firestore');
		return (await getDocs(collection(db, 'users', uid, 'openings'))).docs.map((item) => item.id);
	}

	async rememberOpening(classId: string, openingId: string): Promise<void> {
		const { db, uid } = await this._context();
		const { doc, serverTimestamp, setDoc } = await import('firebase/firestore');
		await setDoc(doc(db, 'users', uid, 'openings', openingId), { classId, createdAt: serverTimestamp() });
	}

	private async _context() {
		const user = await this._auth.whenReady();
		const db = await this._firebase.firestore();
		if (!user || !db) throw new Error('Sign in to use classes.');
		const name = user.displayName || user.email?.split('@')[0] || 'Player';
		return { db, uid: user.uid, name };
	}

	private _toGame(id: string, data: Record<string, unknown>): LessonGame {
		return {
			id,
			round: Number(data['round'] ?? 1),
			white: String(data['white'] ?? ''),
			black: typeof data['black'] === 'string' ? data['black'] : null,
			whiteName: String(data['whiteName'] ?? ''),
			blackName: String(data['blackName'] ?? ''),
			whiteOpening: String(data['whiteOpening'] ?? ''),
			blackOpening: String(data['blackOpening'] ?? ''),
			moves: Array.isArray(data['moves']) ? (data['moves'] as string[]) : [],
			whiteMs: Number(data['whiteMs'] ?? 0),
			blackMs: Number(data['blackMs'] ?? 0),
			lastMoveAt: toDate(data['lastMoveAt']),
			result: (data['result'] as GameResult | null | undefined) ?? null,
			reason: (data['reason'] as GameReason | null | undefined) ?? null,
			drawOffer: typeof data['drawOffer'] === 'string' ? data['drawOffer'] : null,
		};
	}
}
