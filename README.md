# waw chess

A chess training site at [chess.webart.work](https://chess.webart.work). It trains **candidate move
thinking**: before you move, name the few strong options in the position. Most exercises ask for
more than one answer, and none show hints or an evaluation bar while you solve.

Every exercise comes from a key moment of a real Lichess game (rapid and classical, both players
rated about 1200–2400), chosen and analysed offline with Stockfish. The site itself is static: no
backend except Firebase for sign-in and saved games.

## Training modes

### Exercise types

Each puzzle position gets one exercise when it is imported (`exercise()` in
`tools/chess-import/src/output/app.ts`):

| Exercise | Picked when | You do | Strikes |
| --- | --- | --- | --- |
| **Good moves** (`candidates`) | 3+ moves are within 50 centipawns of the best | Find every good move, one at a time, from the start position | 5 |
| **Play the line** (`line`) | Tactical position whose point is 3+ plies deep | Play the whole combination; the opponent's replies are played for you | 3 |
| **Best move** (`best`) | Everything else | Find the one move | 3 |

- Answers are the stored engine lines, so most moves are judged instantly. A move outside them is
  checked by the browser engine (depth 12).
- In Good moves, an unlisted move the engine rates above the weakest good move counts as a
  **hidden gem**.
- In Play the line, a different move as good as the line (win chance within 3 points) also solves it.
- When the puzzle ends, the lines are shown, and **See the game** opens the game at that moment.

### Look Ahead

Calculation three moves deep. From a position, every good move (same 50-centipawn rule) is a
branch, the opponent answers with the engine's best reply, then again the good moves, down to
three of your moves. Each path from the start to a leaf is one **line** to find.

- Play a line move by move. A whole line found, or a move that is not good at that point, ends
  the attempt: the page says which, and the board goes back to the start.
- Lines found are listed as you go. There is no strike limit; the session ends when every line is
  found or with **Show remaining lines**. Then any line can be played out on the board.
- Positions are kept only when no point in the tree has more than 3 good moves and the tree has
  2–8 lines, so positions where everything wins don't turn into chores.
- Trees are built offline (`npm run games:lookahead`); see [Data](#data).
- Not scored yet: a common score for all modes is planned.

### Quiz

Puzzle after puzzle with one try each, then the result, the rating change and **Next** (Enter).

- **Mate in 1** (default): every mate in one found in the games. Any mating move counts.
- **Tactics** (`/quiz?type=mixed`): Best move and Play the line puzzles; only the solution or
  another mate counts.
- A quiz rating starts at 1000 and changes Elo-style (K = 48 for the first 20 puzzles, then 24).
  Puzzles are picked near your rating, widening the window (±100 → ±800) when none are left. Retries
  are not rated. Rating, streak and seen puzzles are kept in `localStorage`.

### Daily and Random

- **Daily** (`/daily`): the same Good moves puzzle for everyone on a date (UTC), from a schedule
  planned 400 days ahead. Easier early in the week (Monday target ~900), harder by Saturday
  (~1450). Results and streaks are kept in `localStorage`.
- **Random** (`/random`): a random puzzle matching the filters. The URL becomes
  `/random?id=GAME-PLY`, so a puzzle can be shared, and filters stay in the URL
  (`/random?category=endgame&level=beginner`).

### Weekly plan

The dashboard (`/`) suggests a week: the daily puzzle every day, plus one focus per day (mates on
Monday, candidate moves Tuesday, tactics Wednesday, critical decisions Thursday, endgames Friday,
a whole game Saturday, your own game Sunday). It shows today's step and your last 7 days.
Signed-out visitors see labelled sample numbers. The plan lives in `src/app/feature/plan/plan.const.ts`.

### Library

Set up any position or game (move pieces, paste a FEN or PGN), pick your candidate moves, then
compare them with the engine. Moves are graded by how much win chance they lose:

| Grade | Win chance drop |
| --- | --- |
| Best | the engine's top move |
| Excellent | under 1% |
| Good | under 3% |
| Inaccuracy | under 7% |
| Mistake | under 15% |
| Blunder | 15% or more |

Signed-in users can save the game to **My games**.

## Pages

| Route | Page |
| --- | --- |
| `/` | Dashboard: weekly plan, today's step, last 7 days |
| `/daily`, `/random` | Play: one component behind two shareable URLs |
| `/quiz` | Quiz |
| `/look-ahead` | Look Ahead; `?id=GAME-PLY` opens a given position |
| `/games` | Browse games by training focus, theme, level, exercise, side to move, opening, or search players and openings |
| `/games/:id` | Replay a game (arrow keys work) and solve its puzzles; `?ply=N` opens at a move, `?solve=N` starts a puzzle. Browser-rendered only |
| `/library` | Position and game analysis (`/study` and `/analyze` redirect here) |
| `/my-games` | Saved games, signed-in only (`/saved` redirects here) |
| `/sign-in`, `/profile` | Google sign-in; profile with daily stats and sign out |

Navigation sits in the topbar on desktop (Play, Quiz, Look Ahead, Games, Library) and in a bottom
bar on phones, ordered so Play is nearest the thumb (`src/app/layouts/nav.const.ts`).

## Data

There is no game database at runtime. `tools/chess-import` (see its
[README](tools/chess-import/README.md)) streams a monthly Lichess archive, scores the games, runs
Stockfish on the promising positions and writes:

- `src/data/game/games.json`: the full dataset, used by the tools only, **not shipped**.
- `src/data/game/app/`: the app's copy, served at `/game/`:
  - `catalog.json`: every game and puzzle in brief, plus filter counts. Loaded once for lists,
    filters and random picks.
  - `g/<id>.json`: one game, its moves and its puzzles with the engine lines. Fetched when a game
    or puzzle opens.
  - `daily.json`: date → puzzle id. Past days never change.
  - `quiz.json`: self-contained quiz sets (mate in 1).
  - `lookahead.json`: Look Ahead positions with their move trees.

Engine lines are stored once in UCI; the app derives SAN with chess.js. Scores are from White's
point of view.

| Command | Does |
| --- | --- |
| `npm run games:import` | Add a batch of up to 1,000 new games (typecheck and tests first; resumable) |
| `npm run games:lookahead` | Build Look Ahead trees for positions that have none yet (~2 h for 1,000 games; resumable, saves as it goes) |
| `npm run games:refresh` | Rebuild the app's copy after editing `games.json` by hand |
| `npm run games:clear` / `games:wipe` | Remove the oldest games / all games |

Run `games:lookahead` after each import so the new games get trees. Import, clear and refresh keep
existing trees. `tools/games/` holds older extract/analyze scripts in a different format; the
importer replaces them.

### Engine in the browser

Stockfish (`stockfish` npm package, single-threaded WASM) runs in a Web Worker, browser-only so
prerendering stays safe. Library uses it for analysis; puzzles only use it for moves outside the
stored lines.

## Accounts and storage

- Sign-in is Google only, through Firebase Auth (project `chess-d92e1`; the public web config is in
  `src/environments/environment.prod.ts`). Firebase loads lazily in the browser after first paint.
- Firestore holds `users/{uid}` (name, email, photo) and `users/{uid}/games/{id}` (games saved from
  the Library). Only the owner can read, create or delete them; rules are in `firestore.rules`.
  Deploy rules with `npm run rules` (needs the Firebase CLI with access to the project).
- In Firebase, Google sign-in must be enabled and `chess.webart.work` listed under
  Authentication > Settings > Authorized domains.
- Daily results and quiz stats stay in the browser (`localStorage`), signed in or not.

## Code map

```
src/app/
  pages/            one folder per route (dashboard, play, quiz, look-ahead, games, game, library, …)
  feature/
    chess/          engine service, sessions (good moves, line, study), daily results, saved games
    game/           dataset types and loading (GameService), puzzle runs, labels and filters
    lookahead/      Look Ahead session: tree walking, verdicts, reset
    quiz/           quiz rating and picking
    plan/           the weekly plan
    account/, auth/, firebase/   sign-in and Firestore
  components/       board (chessground), panels, icons, preferences
  layouts/          topbar and footer (phone nav bar)
tools/chess-import/ Lichess archive → games.json, app data and Look Ahead trees
```

## Development

Requires Node.js 24+ (the importer uses built-in SQLite and zstd).

```bash
npm i
npm start            # dev server at http://localhost:4200
npm run build        # production build with prerendering → dist/app/browser
```

- Angular 22, standalone components, signals, zoneless, Tailwind CSS 4 plus the shared `ds-*`
  component classes. Light and dark skins live in `src/styles/`.
- Every route is prerendered except `/games/:id`, `/my-games` and `/profile`, which render in the
  browser (`src/app/app.routes.server.ts`). Data files are only fetched in the browser.
- Formatting: Prettier, tabs, single quotes.
- Conventions for AI tools and contributors are in `AGENTS.md`.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds the app and publishes `dist/app/browser`
with `CNAME` to GitHub Pages at `chess.webart.work`.

## License

MIT
