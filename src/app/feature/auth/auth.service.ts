import { inject, Service, signal } from '@angular/core';
import type { User } from 'firebase/auth';
import { AccountService } from '../account/account.service';
import { FirebaseService } from '../firebase/firebase.service';

/** Progress kept in the browser (daily, rating and pawns, quiz, theory lessons); removed with the account. */
const LOCAL_PROGRESS_KEYS = ['wawchess_daily', 'wawchess_progress', 'wawchess_quiz', 'wawchess_theory'];

/** Google sign-in through Firebase Auth. */
@Service()
export class AuthService {
	private readonly _firebase = inject(FirebaseService);
	private readonly _account = inject(AccountService);

	/** `undefined` until Firebase restores the session; `null` when signed out. */
	readonly user = signal<User | null | undefined>(undefined);

	private _ready: Promise<void> | null = null;

	/**
	 * Resolves with the current user once Firebase has checked the persisted session.
	 * Only the first check is awaited; later calls read the live `user` signal.
	 */
	async whenReady(): Promise<User | null> {
		this._ready ??= this._restore();
		await this._ready;
		return this.user() ?? null;
	}

	async signInWithGoogle(): Promise<User> {
		const auth = await this._firebase.auth();
		if (!auth) throw new Error('Sign-in is only available in the browser.');

		const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
		const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
		this.user.set(user);
		await this._account.saveIdentity(user);
		return user;
	}

	async signOut(): Promise<void> {
		const auth = await this._firebase.auth();
		if (auth) {
			const { signOut } = await import('firebase/auth');
			await signOut(auth);
		}
		this.user.set(null);
	}

	/**
	 * Deletes the account and everything stored for it, then the progress kept on this device.
	 * Firebase only deletes a user who signed in recently, so this asks for Google sign-in again first;
	 * that also confirms it is really the owner.
	 */
	async deleteAccount(): Promise<void> {
		const auth = await this._firebase.auth();
		const user = auth?.currentUser;
		if (!user) throw new Error('Not signed in.');

		const { deleteUser, GoogleAuthProvider, reauthenticateWithPopup } = await import('firebase/auth');
		await reauthenticateWithPopup(user, new GoogleAuthProvider());
		await this._account.deleteData(user.uid);
		await deleteUser(user);
		for (const key of LOCAL_PROGRESS_KEYS) localStorage.removeItem(key);
		this.user.set(null);
	}

	private async _restore(): Promise<void> {
		const auth = await this._firebase.auth();
		if (!auth) {
			this.user.set(null);
			return;
		}

		const { onAuthStateChanged } = await import('firebase/auth');
		await new Promise<void>((resolve) => {
			let resolved = false;
			onAuthStateChanged(auth, (user) => {
				this.user.set(user);
				if (!resolved) {
					resolved = true;
					resolve();
				}
			});
		});
	}
}
