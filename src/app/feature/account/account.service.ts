import { inject, Service } from '@angular/core';
import type { User } from 'firebase/auth';
import { FirebaseService } from '../firebase/firebase.service';

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
}
