import { inject, Service } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FirebaseService } from '../firebase/firebase.service';
import { NewSavedGame, SavedGame } from './chess.interface';

const MAX_LIST = 200;

/** The signed-in user's saved games (the My games page): `users/{uid}/games/{id}`. Rules: firestore.rules. */
@Service()
export class SavedGamesService {
	private readonly _firebase = inject(FirebaseService);
	private readonly _auth = inject(AuthService);

	async save(game: NewSavedGame): Promise<void> {
		const { db, uid } = await this._context();
		const { addDoc, collection, serverTimestamp } = await import('firebase/firestore');
		await addDoc(collection(db, 'users', uid, 'games'), { ...game, createdAt: serverTimestamp() });
	}

	async list(): Promise<SavedGame[]> {
		const { db, uid } = await this._context();
		const { collection, getDocs, limit, orderBy, query } = await import('firebase/firestore');
		const snapshot = await getDocs(
			query(collection(db, 'users', uid, 'games'), orderBy('createdAt', 'desc'), limit(MAX_LIST)),
		);
		return snapshot.docs.map((doc) => this._toGame(doc.id, doc.data()));
	}

	async get(id: string): Promise<SavedGame | null> {
		const { db, uid } = await this._context();
		const { doc, getDoc } = await import('firebase/firestore');
		const snapshot = await getDoc(doc(db, 'users', uid, 'games', id));
		return snapshot.exists() ? this._toGame(snapshot.id, snapshot.data()) : null;
	}

	async remove(id: string): Promise<void> {
		const { db, uid } = await this._context();
		const { deleteDoc, doc } = await import('firebase/firestore');
		await deleteDoc(doc(db, 'users', uid, 'games', id));
	}

	private async _context() {
		const user = await this._auth.whenReady();
		const db = await this._firebase.firestore();
		if (!user || !db) throw new Error('Sign in to use My games.');
		return { db, uid: user.uid };
	}

	private _toGame(id: string, data: Record<string, unknown>): SavedGame {
		const createdAt = data['createdAt'] as { toDate?: () => Date } | null | undefined;
		return {
			id,
			title: String(data['title'] ?? ''),
			startFen: String(data['startFen'] ?? ''),
			sans: Array.isArray(data['sans']) ? (data['sans'] as string[]) : [],
			fen: String(data['fen'] ?? ''),
			createdAt: createdAt?.toDate?.() ?? null,
		};
	}
}
