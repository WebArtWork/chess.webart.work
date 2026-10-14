import { inject, Service, signal } from '@angular/core';
import type { User } from 'firebase/auth';
import { AccountService } from '../account/account.service';
import { FirebaseService } from '../firebase/firebase.service';

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
