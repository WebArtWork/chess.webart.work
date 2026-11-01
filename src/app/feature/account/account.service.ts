import { inject, Service } from '@angular/core';
import type { User } from 'firebase/auth';
import { FirebaseService } from '../firebase/firebase.service';

/** Subcollections of `users/{uid}`; see firestore.rules. */
const USER_COLLECTIONS = ['games', 'events', 'progress', 'openings'];
/** Firestore allows 500 writes per batch. */
const BATCH_SIZE = 400;

/** `users/{uid}` in Firestore. Rules: firestore.rules. */
@Service()
export class AccountService {
	private readonly _firebase = inject(FirebaseService);

	/**
	 * Keeps the signed-in user's name, email and photo on their profile document.
	 * Never blocks or fails sign-in: the profile page reads from the Auth user itself.
	 */
	async saveIdentity(user: User): Promise<void> {
		try {
			const db = await this._firebase.firestore();
			if (!db) return;

			const { doc, getDoc, serverTimestamp, setDoc, updateDoc } = await import('firebase/firestore');
			const ref = doc(db, 'users', user.uid);
			const identity = {
				displayName: user.displayName ?? '',
				email: user.email ?? '',
				photoUrl: user.photoURL ?? '',
			};

			if ((await getDoc(ref)).exists()) {
				await updateDoc(ref, { ...identity, updatedAt: serverTimestamp() });
			} else {
				await setDoc(ref, { ...identity, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
			}
		} catch (error) {
			console.error('Could not save the profile document.', error);
		}
	}

	/**
	 * Deletes everything stored for the user: saved games, rating history, progress, the classes
	 * they own and the profile document. Subcollections go first; Firestore does not delete them with their parent.
	 */
	async deleteData(uid: string): Promise<void> {
		const db = await this._firebase.firestore();
		if (!db) throw new Error('Firestore is only available in the browser.');

		const { collection, deleteDoc, doc, getDocs, query, where, writeBatch } = await import('firebase/firestore');
		// the lessons of the classes this user owns: Firestore does not delete subcollections with their parent
		const owned = await getDocs(query(collection(db, 'classes'), where('ownerUid', '==', uid)));
		const lessons = (
			await Promise.all(owned.docs.map((item) => getDocs(collection(db, 'classes', item.id, 'lessons'))))
		).flatMap((snapshot) => snapshot.docs);
		const groups = [
			...lessons.flatMap((lesson) => [collection(lesson.ref, 'games'), collection(lesson.ref, 'players')]),
			...USER_COLLECTIONS.map((name) => collection(db, 'users', uid, name)),
		];
		const remove = async (docs: { ref: Parameters<ReturnType<typeof writeBatch>['delete']>[0] }[]) => {
			for (let i = 0; i < docs.length; i += BATCH_SIZE) {
				const batch = writeBatch(db);
				for (const item of docs.slice(i, i + BATCH_SIZE)) batch.delete(item.ref);
				await batch.commit();
			}
		};
		for (const source of groups) await remove((await getDocs(source)).docs);
		// then the lessons themselves, then the classes
		await remove(lessons);
		await remove(owned.docs);
		await deleteDoc(doc(db, 'users', uid));
	}
}
