const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * The address in a scanned QR code: the plain address the app shows, or a `mailto:` link from another
 * app. Lower case, like every class mate. `null` when the code holds something else.
 */
export function emailFromScan(text: string): string | null {
	const value = text.trim().replace(/^mailto:/i, '').split('?')[0].trim().toLowerCase();
	return EMAIL.test(value) ? value : null;
}
