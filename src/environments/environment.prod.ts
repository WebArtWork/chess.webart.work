export const environment: {
	apiUrl: string;
	appVersion: string;
	production: boolean;
	companyId: string;
	defaultLanguage: string;
	languages: AppLanguage[];
	/** Public web config: safe to ship. Access is enforced by Firebase Auth and Firestore rules. */
	firebase: {
		apiKey: string;
		authDomain: string;
		projectId: string;
		storageBucket: string;
		messagingSenderId: string;
		appId: string;
		measurementId: string;
	};
} = {
	apiUrl: '',
	appVersion: '1.0.0',
	production: true,
	companyId: '',
	firebase: {
		apiKey: 'AIzaSyAWI487GgQW1Qy5K0rxzmXDq4zTBckRMo4',
		authDomain: 'chess-d92e1.firebaseapp.com',
		projectId: 'chess-d92e1',
		storageBucket: 'chess-d92e1.firebasestorage.app',
		messagingSenderId: '217823458694',
		appId: '1:217823458694:web:32589b191ba9389b896807',
		measurementId: 'G-X4FXFT28L4',
	},
	defaultLanguage: 'en',
	languages: [
		{
			code: 'en',
			name: 'English',
			nativeName: 'English',
			flagSrc: 'flags/united-kingdom.svg',
			htmlLang: 'en',
			population: 280,
		},
		{
			code: 'ua',
			name: 'Ukrainian',
			nativeName: 'Українська',
			flagSrc: 'flags/ukraine.svg',
			htmlLang: 'uk',
			population: 35,
		},
	],
};

export interface AppLanguage {
	code: string;
	name: string;
	nativeName: string;
	flagSrc: string;
	htmlLang: string;
	population: number;
}
