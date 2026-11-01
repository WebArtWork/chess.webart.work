import { inject, Service } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FirebaseService } from '../firebase/firebase.service';
import { DEFAULT_TIME_CONTROL } from './classroom.const';
import { ClassInput, ClassItem } from './classroom.interface';

const MAX_LIST = 100;

/** The classes the signed-in user owns or was invited to by email: `classes/{id}`. Rules: firestore.rules. */
@Service()
export class ClassesService {
	private readonly _firebase = inject(FirebaseService);
	private readonly _auth = inject(AuthService);

	/** Newest first. */
	async list(): Promise<ClassItem[]> {
		const { db, uid, email } = await this._context();
		const { collection, getDocs, limit, or, query, where } = await import('firebase/firestore');
		const classes = collection(db, 'classes');
		const owned = where('ownerUid', '==', uid);
		const snapshot = await getDocs(
			email
				? query(classes, or(owned, where('emails', 'array-contains', email)), limit(MAX_LIST))
				: query(classes, owned, limit(MAX_LIST)),
		);
		return snapshot.docs
			.map((doc) => this._toClass(doc.id, doc.data()))
			.sort((a, b) => (b.createdAt?.getTime() ?? Infinity) - (a.createdAt?.getTime() ?? Infinity));
	}

	async get(id: string): Promise<ClassItem | null> {
		const { db } = await this._context();
		const { doc, getDoc } = await import('firebase/firestore');
		const snapshot = await getDoc(doc(db, 'classes', id));
		return snapshot.exists() ? this._toClass(snapshot.id, snapshot.data()) : null;
	}

	/** Returns the id of the new class. */
	async create(input: ClassInput): Promise<string> {
		const { db, uid, owner } = await this._context();
		const { addDoc, collection, serverTimestamp } = await import('firebase/firestore');
		const ref = await addDoc(collection(db, 'classes'), {
			...input,
			ownerUid: uid,
			...owner,
			createdAt: serverTimestamp(),
			updatedAt: serverTimestamp(),
		});
		return ref.id;
	}

	/** Only the owner saves, so this also refreshes the creator's name and email on the class. */
	async update(id: string, input: ClassInput): Promise<void> {
		const { db, owner } = await this._context();
		const { doc, serverTimestamp, updateDoc } = await import('firebase/firestore');
		await updateDoc(doc(db, 'classes', id), { ...input, ...owner, updatedAt: serverTimestamp() });
	}

	private async _context() {
		const user = await this._auth.whenReady();
		const db = await this._firebase.firestore();
		if (!user || !db) throw new Error('Sign in to use classes.');
		// the rules only match invitations to a verified email
		const email = user.emailVerified ? user.email?.toLowerCase() : undefined;
		const owner = { ownerName: user.displayName ?? '', ownerEmail: user.email?.toLowerCase() ?? '' };
		return { db, uid: user.uid, email, owner };
	}

	private _toClass(id: string, data: Record<string, unknown>): ClassItem {
		const createdAt = data['createdAt'] as { toDate?: () => Date } | null | undefined;
		return {
			id,
			ownerUid: String(data['ownerUid'] ?? ''),
			ownerName: String(data['ownerName'] ?? ''),
			ownerEmail: String(data['ownerEmail'] ?? ''),
			title: String(data['title'] ?? ''),
			days: Array.isArray(data['days']) ? (data['days'] as number[]) : [],
			time: String(data['time'] ?? ''),
			duration: Number(data['duration'] ?? 60),
			timeControl: String(data['timeControl'] ?? DEFAULT_TIME_CONTROL),
			isPublic: data['isPublic'] === true,
			emails: Array.isArray(data['emails']) ? (data['emails'] as string[]) : [],
			createdAt: createdAt?.toDate?.() ?? null,
		};
	}
}
