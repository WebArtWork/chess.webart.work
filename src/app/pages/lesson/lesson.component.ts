import { NgTemplateOutlet } from '@angular/common';
import { afterNextRender, Component, computed, DestroyRef, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Chess } from 'chess.js';
import { BoardComponent, BoardMove } from '../../components/board/board.component';
import { IconComponent } from '../../components/icon/icon.component';
import { AuthService } from '../../feature/auth/auth.service';
import { ClassesService } from '../../feature/classroom/classes.service';
import { environment } from '../../../environments/environment';
import { ClassItem } from '../../feature/classroom/classroom.interface';
import { GameReason, LessonGame, LessonItem, LessonPlayer, NewLessonGame, Side } from '../../feature/classroom/lesson.interface';
import {
	clockRuns,
	clocksAfterMove,
	followedCount,
	followedLine,
	outcomeOf,
	parseClock,
	remainingMs,
	replay,
	sideToMove,
	standings,
} from '../../feature/classroom/lesson-play';
import { LessonService } from '../../feature/classroom/lesson.service';
import { LessonToolbarService } from '../../feature/classroom/lesson-toolbar.service';
import { BONUS_MOVES, loadOpenings, Opening, openingById, openingName, pickOpening, resolveId } from '../../feature/classroom/openings';
import { pairRound, swissHistory, SwissPlayer } from '../../feature/classroom/swiss';
import { I18nService } from '../../feature/i18n/i18n.service';
import { TPipe } from '../../feature/i18n/t.pipe';

/** How long past zero a clock must be before a player claims the win, so device clocks that differ a little do no harm. */
const FLAG_MARGIN_MS = 1500;

type StartState = 'ok' | 'finished' | 'playing' | 'few' | 'none';

/** A finished tournament as read back: its lesson, who took part and every game. */
interface PastTournament {
	lesson: LessonItem;
	players: LessonPlayer[];
	games: LessonGame[];
}

/**
 * A class lesson, at `/lesson/{classId}`: the opening theory, a game against a class mate and the Swiss
 * tournament. Everything is in Firestore (see LessonService). The page reads once and when "Refresh" is
 * pressed; nothing updates by itself yet, live updates come with the sockets.
 */
@Component({
	imports: [BoardComponent, IconComponent, NgTemplateOutlet, RouterLink, TPipe],
	templateUrl: './lesson.component.html',
})
export class LessonComponent {
	private readonly _classId = inject(ActivatedRoute).snapshot.paramMap.get('id') ?? '';
	private readonly _i18n = inject(I18nService);
	private readonly _classes = inject(ClassesService);
	private readonly _lessons = inject(LessonService);
	private readonly _toolbar = inject(LessonToolbarService);
	private readonly _user = inject(AuthService).user;

	protected readonly loading = signal(true);
	protected readonly failed = signal(false);
	/** Something the last action could not do; shown until the next action. */
	protected readonly problem = signal('');
	protected readonly busy = signal(false);
	/** The Refresh button's own state: reading now, then briefly "updated". */
	protected readonly refreshing = signal(false);
	protected readonly refreshed = signal(false);
	/** The first press of "Finish tournament" only asks to be sure. */
	protected readonly confirmFinish = signal(false);

	protected readonly klass = signal<ClassItem | null>(null);
	protected readonly lesson = signal<LessonItem | null>(null);
	protected readonly players = signal<LessonPlayer[]>([]);
	protected readonly games = signal<LessonGame[]>([]);
	/** Openings this student already used in a class game, as lesson slugs. */
	protected readonly known = signal<string[]>([]);
	/** The Theory hub's opening lessons; empty until they are loaded. */
	protected readonly openings = signal<Opening[]>([]);

	protected readonly view = this._toolbar.view;
	/** Moves shown on the theory board. */
	protected readonly step = signal(0);
	/** Round shown on the tournament view; the latest until one is picked. */
	protected readonly pickedRound = signal<number | null>(null);
	/** For the clocks only: ticks locally while a game is on, never reads Firestore. */
	protected readonly now = signal(Date.now());

	protected readonly uid = computed(() => this._user()?.uid ?? '');
	protected readonly isOwner = computed(() => !!this.klass() && this.klass()?.ownerUid === this.uid());
	protected readonly open = computed(() => this.lesson()?.status === 'open');
	protected readonly me = computed(() => this.players().find((player) => player.uid === this.uid()) ?? null);
	protected readonly readyCount = computed(() => this.players().filter((player) => player.ready).length);

	/** The opening for this student: the one picked when they joined, else the next one they do not know. */
	protected readonly picked = computed(() => {
		const openings = this.openings();
		return openingById(openings, this.me()?.openingId ?? '') ?? pickOpening(openings, this.known())?.opening ?? null;
	});
	protected readonly isNew = computed(() => !this.known().includes(this.picked()?.id ?? ''));
	/** Titles, not names: the template translates them and cuts the name off at the colon. */
	protected readonly knownTitles = computed(() =>
		this.known()
			.map((id) => openingById(this.openings(), id)?.card.title)
			.filter((title): title is string => !!title),
	);
	protected readonly bonusMoves = BONUS_MOVES;

	protected readonly theoryFen = computed(() => {
		const game = new Chess();
		for (const move of (this.picked()?.moves ?? []).slice(0, this.step())) game.move(move);
		return game.fen();
	});
	/** The lesson's step for the move on the board: each step explains one move of both sides. */
	protected readonly note = computed(() => (this.step() ? (this.picked()?.steps[Math.ceil(this.step() / 2) - 1] ?? null) : null));

	/** This student's newest pairing. */
	protected readonly game = computed(() => {
		const uid = this.uid();
		return this.games().filter((game) => game.white === uid || game.black === uid).at(-1) ?? null;
	});
	protected readonly side = computed<Side>(() => (this.game()?.white === this.uid() ? 'white' : 'black'));
	protected readonly playing = computed(() => !!this.game() && !this.game()!.result && !!this.game()!.black);
	protected readonly myTurn = computed(() => this.playing() && sideToMove(this.game()!) === this.side());
	protected readonly opponentName = computed(() => (this.side() === 'white' ? this.game()?.blackName : this.game()?.whiteName) ?? '');

	private readonly _position = computed(() => {
		try {
			return replay(this.game()?.moves ?? []);
		} catch {
			return new Chess();
		}
	});
	protected readonly gameFen = computed(() => this._position().fen());
	protected readonly lastMove = computed(() => {
		const last = this._position().history({ verbose: true }).at(-1);
		return last ? { from: last.from, to: last.to } : null;
	});
	protected readonly moveRows = computed(() =>
		(this.game()?.moves ?? []).reduce<[number, string, string?][]>((rows, move, index) => {
			if (index % 2 === 0) rows.push([index / 2 + 1, move]);
			else rows[rows.length - 1][2] = move;
			return rows;
		}, []),
	);
	/** Time left on each clock, ticking while the game goes on. */
	protected readonly clocks = computed(() => {
		const game = this.game();
		if (!game) return { white: 0, black: 0 };
		return { white: remainingMs(game, 'white', this.now()), black: remainingMs(game, 'black', this.now()) };
	});
	protected readonly gameOpening = computed(() => {
		const game = this.game();
		return openingById(this.openings(), (this.side() === 'white' ? game?.whiteOpening : game?.blackOpening) ?? '');
	});
	/** How many of the lesson line's moves this student has played, out of the bonus. */
	protected readonly followed = computed(() => {
		const game = this.game();
		const line = this.gameOpening()?.moves;
		return game && line ? Math.min(followedCount(game.moves, this.side(), line), BONUS_MOVES) : 0;
	});

	protected readonly rounds = computed(() => [...new Set(this.games().map((game) => game.round))].sort((a, b) => a - b));
	protected readonly round = computed(() => this.pickedRound() ?? this.rounds().at(-1) ?? 0);
	protected readonly roundGames = computed(() => this.games().filter((game) => game.round === this.round()));
	protected readonly table = computed(() =>
		standings(this.players(), this.games(), (id) => openingById(this.openings(), id)?.moves),
	);

	/** The class's finished tournaments, read when the records are opened; `null` until then. */
	protected readonly past = signal<PastTournament[] | null>(null);
	protected readonly pastFailed = signal(false);
	protected readonly pastRows = computed(() =>
		(this.past() ?? []).map(({ lesson, players, games }) => {
			const table = standings(players, games, (id) => openingById(this.openings(), id)?.moves);
			const numbers = [...new Set(games.map((game) => game.round))].sort((a, b) => a - b);
			return {
				lesson,
				table,
				players: players.length,
				rounds: numbers.map((number) => ({ number, games: games.filter((game) => game.round === number) })),
				// nobody wins a tournament that never played a game
				winner: table[0]?.played ? table[0].name : '',
			};
		}),
	);

	/** What the owner can do about the next round, and the pairing it would make. */
	protected readonly next = computed<{ state: StartState; round: number; pairing: ReturnType<typeof pairRound> }>(() => {
		const games = this.games();
		const round = (this.rounds().at(-1) ?? 0) + 1;
		const none = (state: StartState) => ({ state, round, pairing: null });
		if (!this.open()) return none('finished');
		if (games.some((game) => game.round === round - 1 && !game.result)) return none('playing');
		const history = swissHistory(games);
		const ready: SwissPlayer[] = this.players()
			.filter((player) => player.ready)
			.map((player) => ({
				uid: player.uid,
				name: player.name,
				points: history.points.get(player.uid) ?? 0,
				balance: history.balance.get(player.uid) ?? 0,
			}));
		if (ready.length < 2) return none('few');
		const pairing = pairRound(ready, history.met, history.byes);
		return pairing ? { state: 'ok', round, pairing } : none('none');
	});

	private _claimed = '';

	constructor() {
		this._toolbar.active.set(true);
		const destroyRef = inject(DestroyRef);
		destroyRef.onDestroy(() => {
			this._toolbar.active.set(false);
			this._toolbar.canReady.set(false);
			this._toolbar.view.set('theory');
			this._toolbar.ready.set(false);
		});

		effect(() => {
			this._toolbar.ready.set(!!this.me()?.ready);
			this._toolbar.canReady.set(!!this.me() && this.open());
		});
		this._toolbar.toggleReady$.pipe(takeUntilDestroyed(destroyRef)).subscribe(() => void this._toggleReady());

		afterNextRender(() => {
			void this._load(true);
			// the clocks tick on the device only; a clock that ran out is the one write they can cause
			const timer = setInterval(() => {
				if (this.view() === 'game' && this.playing()) this.now.set(Date.now());
			}, 1000);
			destroyRef.onDestroy(() => clearInterval(timer));
		});
		effect(() => void this._claimFlag());

		// the opening's own lesson texts come from its page bundle, which is only known once the opening is
		effect(() => {
			const slug = this.picked()?.id;
			const language = this._i18n.language();
			if (slug) void this._i18n.loadPage(`/i18n/theory/${slug}/`, language);
		});
	}

	/** Reads the lesson again. With nothing new the screen looks the same, so the icon spins and then ticks. */
	protected async refresh() {
		if (this.refreshing()) return;
		this.refreshing.set(true);
		this.refreshed.set(false);
		// at least a moment, so a fast read is still seen
		await Promise.all([this._load(false), new Promise((resolve) => setTimeout(resolve, 600))]);
		this.refreshing.set(false);
		this.refreshed.set(true);
		setTimeout(() => this.refreshed.set(false), 1500);
	}

	/** Opens the records: reads every finished tournament of the class with its players and games. */
	protected async openRecords() {
		this.view.set('records');
		this.pastFailed.set(false);
		try {
			const finished = await this._lessons.finished(this._classId);
			this.past.set(
				await Promise.all(
					finished.map(async (lesson) => ({
						lesson,
						players: await this._lessons.players(this._classId, lesson.id),
						games: await this._lessons.games(this._classId, lesson.id),
					})),
				),
			);
		} catch (error) {
			console.error('Could not load the previous tournaments.', error);
			this.past.set([]);
			this.pastFailed.set(true);
		}
	}

	/** "2 November 2026", in the app language. */
	protected dateLabel(date: Date | null): string {
		if (!date) return '';
		const locale = environment.languages.find((item) => item.code === this._i18n.language())?.htmlLang ?? 'en';
		return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
	}

	/** "Italian Game", in the app language. */
	protected nameOf(opening: Opening): string {
		return openingName(this._i18n.t(opening.card.title));
	}

	protected titleName(title: string): string {
		return openingName(this._i18n.t(title));
	}

	protected go(step: number) {
		this.step.set(Math.min(Math.max(step, 0), this.picked()?.moves.length ?? 0));
	}

	protected label(index: number): string {
		const number = Math.floor(index / 2) + 1;
		return index % 2 === 0 ? `${number}.` : `${number}...`;
	}

	protected result(game: LessonGame): string {
		if (game.result === 'bye') return '1 - 0';
		if (!game.result) return '·';
		return game.result === 'white' ? '1 - 0' : game.result === 'black' ? '0 - 1' : '½ - ½';
	}

	/** `09:40`. */
	protected clock(ms: number): string {
		const seconds = Math.ceil(ms / 1000);
		return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
	}

	/** The words for how the finished game ended, from this student's side. */
	protected outcome(game: LessonGame): { title: string; reason: string } {
		const reasons: Record<GameReason, string> = {
			checkmate: 'Checkmate',
			stalemate: 'Stalemate',
			draw: 'Draw by rule',
			resign: 'Resigned',
			agreement: 'Draw agreed',
			time: 'Time ran out',
		};
		const title = game.result === 'draw' ? 'Draw' : game.result === this.side() ? 'You won' : 'You lost';
		return { title, reason: game.reason ? reasons[game.reason] : '' };
	}

	/** Half a point for following the lesson line, shown on a finished game. */
	protected earnedBonus(game: LessonGame): boolean {
		const line = this.gameOpening()?.moves;
		return !!line && game.result !== 'bye' && followedLine(game.moves, this.side(), line);
	}

	protected async startLesson() {
		await this._act(async () => {
			this.lesson.set(await this._lessons.start(this._classId));
			await this._load(false);
		});
	}

	protected async startRound() {
		const { state, round, pairing } = this.next();
		const klass = this.klass();
		const lesson = this.lesson();
		if (state !== 'ok' || !pairing || !klass || !lesson) return;
		const { baseMs } = parseClock(klass.timeControl);
		const opening = (uid: string) => resolveId(this.players().find((player) => player.uid === uid)?.openingId ?? '');
		const base = (white: SwissPlayer, black: SwissPlayer | null): NewLessonGame => ({
			round,
			white: white.uid,
			black: black?.uid ?? null,
			whiteName: white.name,
			blackName: black?.name ?? '',
			whiteOpening: opening(white.uid),
			blackOpening: black ? opening(black.uid) : '',
			moves: [],
			whiteMs: baseMs,
			blackMs: baseMs,
			result: black ? null : 'bye',
			reason: null,
			drawOffer: null,
		});
		const games = pairing.pairs.map(([white, black]) => base(white, black));
		if (pairing.bye) games.push(base(pairing.bye, null));
		await this._act(async () => {
			await this._lessons.startRound(this._classId, lesson.id, games);
			await this._load(false);
			this.pickedRound.set(round);
		});
	}

	protected async finishTournament() {
		const lesson = this.lesson();
		if (!lesson) return;
		if (!this.confirmFinish()) {
			this.confirmFinish.set(true);
			return;
		}
		this.confirmFinish.set(false);
		await this._act(async () => {
			await this._lessons.finish(this._classId, lesson.id);
			await this._load(false);
		});
	}

	protected async onMove(move: BoardMove) {
		const game = this.game();
		const lesson = this.lesson();
		const klass = this.klass();
		if (!game || !lesson || !klass || !this.myTurn() || this.busy()) return;

		const chess = replay(game.moves);
		let san: string;
		try {
			san = chess.move({ from: move.from, to: move.to, promotion: move.promotion }).san;
		} catch {
			return;
		}
		const end = outcomeOf(chess);
		const now = Date.now();
		const clocks = clocksAfterMove(game, now, parseClock(klass.timeControl).incrementMs);
		this._replace({ ...game, moves: [...game.moves, san], ...clocks, lastMoveAt: new Date(now), drawOffer: null, ...(end ?? {}) });
		this.now.set(now);
		await this._act(
			async () => {
				await this._lessons.move(this._classId, lesson.id, game, san, clocks, end);
				if (end) await this._remember();
			},
			() => this._replace(game),
		);
	}

	protected async resign() {
		const game = this.game();
		if (!game || !this.playing()) return;
		await this._finishGame(game, this.side() === 'white' ? 'black' : 'white', 'resign');
	}

	protected async acceptDraw() {
		const game = this.game();
		if (game && this.playing()) await this._finishGame(game, 'draw', 'agreement');
	}

	protected async offerDraw(offer: boolean) {
		const game = this.game();
		const lesson = this.lesson();
		if (!game || !lesson) return;
		await this._act(async () => {
			await this._lessons.offerDraw(this._classId, lesson.id, game.id, offer);
			this._replace({ ...game, drawOffer: offer ? this.uid() : null });
		});
	}

	private async _finishGame(game: LessonGame, result: 'white' | 'black' | 'draw', reason: GameReason) {
		const lesson = this.lesson();
		if (!lesson) return;
		await this._act(async () => {
			await this._lessons.end(this._classId, lesson.id, game.id, result, reason);
			this._replace({ ...game, result, reason, drawOffer: null });
			await this._remember();
		});
	}

	/** The opponent's clock ran out, or this one: the side to move loses. Tried once per position. */
	private async _claimFlag() {
		const game = this.game();
		if (!game || !this.lesson() || !this.playing() || !clockRuns(game) || !game.lastMoveAt) return;
		const mover = sideToMove(game);
		const stored = mover === 'white' ? game.whiteMs : game.blackMs;
		const key = `${game.id}:${game.moves.length}`;
		if (this.now() - game.lastMoveAt.getTime() < stored + FLAG_MARGIN_MS || this._claimed === key) return;
		this._claimed = key;
		await this._finishGame(game, mover === 'white' ? 'black' : 'white', 'time');
	}

	private async _toggleReady() {
		const lesson = this.lesson();
		const me = this.me();
		if (!lesson || !me || !this.open() || this.busy()) return;
		const ready = !me.ready;
		const set = (value: boolean) =>
			this.players.update((list) => list.map((player) => (player.uid === me.uid ? { ...player, ready: value } : player)));
		set(ready);
		await this._act(() => this._lessons.setReady(this._classId, lesson.id, ready), () => set(!ready));
	}

	private _replace(game: LessonGame) {
		this.games.update((list) => list.map((item) => (item.id === game.id ? game : item)));
	}

	/** Runs a write, shows when it fails and undoes what the screen assumed. */
	private async _act(run: () => Promise<void>, undo?: () => void) {
		this.problem.set('');
		this.busy.set(true);
		try {
			await run();
		} catch (error) {
			console.error('The lesson could not save that.', error);
			undo?.();
			this.problem.set('That did not save. Refresh and try again.');
		} finally {
			this.busy.set(false);
		}
	}

	/** Reads the class and its latest lesson; the first read also joins the student to an open lesson. */
	private async _load(first: boolean) {
		this.problem.set('');
		this.loading.set(first || !this.klass());
		try {
			this.openings.set(await loadOpenings());
			const klass = await this._classes.get(this._classId);
			this.klass.set(klass);
			if (!klass) {
				this.failed.set(true);
				return;
			}
			const lesson = await this._lessons.latest(this._classId);
			this.lesson.set(lesson);
			this.failed.set(false);
			if (!lesson) {
				this.players.set([]);
				this.games.set([]);
				return;
			}
			const [known, players, games] = await Promise.all([
				this._lessons.knownOpenings(),
				this._lessons.players(this._classId, lesson.id),
				this._lessons.games(this._classId, lesson.id),
			]);
			this.known.set([...new Set(known.map(resolveId))]);
			this.players.set(players);
			this.games.set(games);
			const pick = pickOpening(this.openings(), this.known());
			if (pick && lesson.status === 'open' && !players.some((player) => player.uid === this.uid())) {
				const joined = await this._lessons.join(this._classId, lesson.id, pick.opening.id);
				this.players.update((list) => [...list, joined]);
			}
			if (first && this.playing()) this.view.set('game');
			this.now.set(Date.now());
			await this._remember();
		} catch (error) {
			console.error('Could not open the lesson.', error);
			this.failed.set(true);
		} finally {
			this.loading.set(false);
		}
	}

	/** A game that followed the lesson line counts the opening as used, so the next lesson teaches another. */
	private async _remember() {
		const uid = this.uid();
		const fresh = new Set<string>();
		for (const game of this.games()) {
			if (!game.result || game.result === 'bye') continue;
			const side: Side | null = game.white === uid ? 'white' : game.black === uid ? 'black' : null;
			if (!side) continue;
			const opening = openingById(this.openings(), side === 'white' ? game.whiteOpening : game.blackOpening);
			if (opening && followedLine(game.moves, side, opening.moves) && !this.known().includes(opening.id)) fresh.add(opening.id);
		}
		for (const id of fresh) {
			try {
				await this._lessons.rememberOpening(this._classId, id);
				this.known.update((list) => [...list, id]);
			} catch (error) {
				console.error('Could not remember the opening.', error);
			}
		}
	}
}
