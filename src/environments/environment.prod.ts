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
	defaultLanguage: 'ua',
	languages: [
		{
			code: 'ua',
			name: 'Ukrainian',
			nativeName: 'Українська',
			flagSrc: 'flags/ukraine.svg',
			htmlLang: 'uk',
			population: 35,
		},
		{
			code: 'en',
			name: 'English',
			nativeName: 'English',
			flagSrc: 'flags/united-kingdom.svg',
			htmlLang: 'en',
			population: 280,
		},
		{
			code: 'de',
			name: 'German',
			nativeName: 'Deutsch',
			flagSrc: 'flags/germany.svg',
			htmlLang: 'de',
			population: 130,
		},
		{
			code: 'fr',
			name: 'French',
			nativeName: 'Français',
			flagSrc: 'flags/france.svg',
			htmlLang: 'fr',
			population: 110,
		},
		{
			code: 'pl',
			name: 'Polish',
			nativeName: 'Polski',
			flagSrc: 'flags/poland.svg',
			htmlLang: 'pl',
			population: 45,
		},
		{
			code: 'ro',
			name: 'Romanian',
			nativeName: 'Română',
			flagSrc: 'flags/romania.svg',
			htmlLang: 'ro',
			population: 28,
		},
		{
			code: 'hu',
			name: 'Hungarian',
			nativeName: 'Magyar',
			flagSrc: 'flags/hungary.svg',
			htmlLang: 'hu',
			population: 13,
		},
		{
			code: 'el',
			name: 'Greek',
			nativeName: 'Ελληνικά',
			flagSrc: 'flags/greece.svg',
			htmlLang: 'el',
			population: 13,
		},
		{
			code: 'cs',
			name: 'Czech',
			nativeName: 'Čeština',
			flagSrc: 'flags/czechia.svg',
			htmlLang: 'cs',
			population: 12,
		},
		{
			code: 'it',
			name: 'Italian',
			nativeName: 'Italiano',
			flagSrc: 'flags/italy.svg',
			htmlLang: 'it',
			population: 70,
		},
		{
			code: 'es',
			name: 'Spanish',
			nativeName: 'Español',
			flagSrc: 'flags/spain.svg',
			htmlLang: 'es',
			population: 75,
		},
		{
			code: 'nl',
			name: 'Dutch',
			nativeName: 'Nederlands',
			flagSrc: 'flags/netherlands.svg',
			htmlLang: 'nl',
			population: 25,
		},
		{
			code: 'pt',
			name: 'Portuguese',
			nativeName: 'Português',
			flagSrc: 'flags/portugal.svg',
			htmlLang: 'pt',
			population: 15,
		},
		{
			code: 'sv',
			name: 'Swedish',
			nativeName: 'Svenska',
			flagSrc: 'flags/sweden.svg',
			htmlLang: 'sv',
			population: 12,
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
