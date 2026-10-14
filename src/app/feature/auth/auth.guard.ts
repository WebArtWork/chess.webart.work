import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

/** Signed-in users only; everyone else goes to the sign-in page. */
export const authGuard: CanActivateFn = async () => {
	const auth = inject(AuthService);
	const router = inject(Router);
	return (await auth.whenReady()) ? true : router.parseUrl('/sign-in');
};

/** Sign-in page: signed-in users go straight to their profile. */
export const guestGuard: CanActivateFn = async () => {
	const auth = inject(AuthService);
	const router = inject(Router);
	return (await auth.whenReady()) ? router.parseUrl('/profile') : true;
};
