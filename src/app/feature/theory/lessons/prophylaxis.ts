import { TheoryLessonBody } from '../theory.interface';

export const prophylaxis: TheoryLessonBody = {
	slug: 'prophylaxis',
	idea: [
		'A strong move sometimes threatens nothing right away. Instead, it stops your opponent from carrying out their best plan. Prophylaxis is not passivity: you take away your opponent’s convenient options and prepare your own.',
	],
	stepsHeading: 'How to think',
	steps: [
		'Imagine it is your opponent’s move. What do they want most?',
		'Find their most active piece and the pawn break they want to make.',
		'Ask whether one useful move can take the force out of that plan.',
		'Compare the prophylactic move with your own active options.',
		'Once you have defended, look for the initiative again.',
	],
	example: [
		'Your opponent plans to put a rook on the open file. You can take the file first, or place a piece so that the rook’s entry creates no threats. You are not “doing nothing”; you are removing a specific risk.',
	],
	mistakes: ['Defending against threats that don’t exist and losing tempi for no reason.'],
	selfCheck: {
		question: 'Why look at your opponent’s plan if your pieces are more active?',
		answer: 'Activity does not cancel threats; one prepared pawn break can change the evaluation of the position.',
	},
	practice: [
		{
			title: 'What’s the threat?',
			detail: 'Prophylaxis starts here: see what the opponent wants, then take it away.',
			path: '/practice/threats',
		},
		{
			title: 'Critical decisions',
			detail: 'Before you choose your move, name your opponent’s best plan.',
			path: '/practice/good-moves',
			query: { category: 'criticalDecision' },
		},
		{
			title: 'Defensive games',
			detail: 'Before each key move, name the opponent’s plan, then see how it was stopped, or not.',
			path: '/library/games',
			query: { category: 'defense' },
		},
	],
	sources: [
		{
			title: 'Python Strategy',
			author: 'Tigran Petrosian',
			site: 'Simon & Schuster',
			url: 'https://www.simonandschuster.com/books/Python-Strategy/Tigran-Petrosian/Chess-Classics/9781784830021',
		},
	],
};
