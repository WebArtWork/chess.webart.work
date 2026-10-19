# Quiz plan: practice for the Theory lessons

The Theory hub has 25 lessons, but Practice covers mostly tactics and calculation. This plan lists the
quizzes that would support the rest of the lessons, and the changes the games importer and the games
library need for them.

## Where we stand

- **Practice modes today:** Daily puzzle, Good moves, Mate in 1, Mate in 3, Tactics, Look Ahead.
- **Data:** 1,000 Lichess games with 2,987 training positions.
- **Lesson links:** the "Practice it" links point mostly to Tactics, Look Ahead and the Analysis
  board. Ten lessons fall back to "use the analysis board" because no matching quiz exists.

| Practice it link | Lessons |
| --- | --- |
| Analysis board (`/library/board`) | 10 |
| Tactics | 8 |
| Look Ahead | 7 |
| Positional games (`/library/games?category=positional`) | 5 |
| Good moves, Daily puzzle, Critical decisions | 4 each |
| My games, Mate in 3, Endgame games | 3 each |

### Data gaps

- **Positional labels are unreliable.** The 351 "positional" positions are mostly the label a
  position gets when no other category matched, not real positional tasks.
- **No opening positions.** The importer skips the first plies (`OPENING_PLIES` in
  `tools/chess-import/src/analysis/signals.ts`), so lesson 1 has no practice.
- **Missing tags:** pawn structures, opponent threats, endgame types, and whether a sacrifice was
  sound.
- **No personal practice.** Nothing comes from the player's own games, and missed puzzles are never
  repeated.

## Quizzes to add

| # | Quiz | What the player does | Lessons it supports |
| --- | --- | --- | --- |
| 1 | **What's the threat?** | After the opponent's move, show their threat, then find a move that stops it. | 3 CCTO, 4 Decisions, 5 Psychology, 12 Petrosian, 25 Smirnov |
| 2 | **Is it safe?** | A tempting move is shown: play it or not? If not, find the refutation. | 16 Dvoretsky, 24 Oleksiyenko, 25 Smirnov, 4 Decisions |
| 3 | **Who is better?** | Rate the position (White better, equal, Black better), then see the evaluation and the main imbalance. | 11 Silman, 20 Kravtsiv, 21 Grabinsky, 22 Volokitin |
| 4 | **Spot the feature** | Tap the isolated pawn, the outpost, the weak square or the half-open file. | 2 Pawn structures, 8 Nunn, 11 Silman, 13 Nimzowitsch, 20 Kravtsiv, 23 Mikhalchishin |
| 5 | **See it in your head** | 2–4 moves are given as text while the board stays still, then a question such as "is e5 attacked?" or "where can the knight go?". | 7 Kotov, 16 Dvoretsky, 18 Flesch, 24 Oleksiyenko |
| 6 | **Endgame technique** | Endgame puzzles by type (pawn, rook, minor piece, queen), plus a stalemate trap theme. | 14 Capablanca, 15 Shereshevsky |
| 7 | **Opening moves** | Positions from moves 4–12: find the move that follows the principles, or spot the mistake. | 1 Opening principles |
| 8 | **Sound sacrifice?** | A sacrifice from a real game: sound, unsound or unclear? Then play the critical reply. | 17 Tal, 22 Volokitin |
| 9 | **Review queue** | Missed puzzles from every mode come back after 1, 3 and 7 days. Later: mistakes found automatically in saved games. | 6 Own games, 9 Chess Steps, 10 Yusupov, 19 Yelisieiev, 25 Smirnov |

Candidate moves (lesson 7) is already covered by the `candidates` mode in Good moves (338
positions). It needs more supply, not a new mode.

### Why quizzes 1, 3, 4, 5 and 9 come first

- **Correct by construction:** quizzes 4 and 5 are pure board facts computed by chess.js, so their
  answers cannot be wrong.
- **Quick to generate:** quizzes 1 and 3 need one extra engine query per position the importer
  already analyses.
- **No import needed:** quiz 9 uses results the app already records.

## Importer changes (`tools/chess-import`)

1. **New fields per position:**
   - `threat`: the opponent's best move if it were their turn again (a null-move search at depth
     12), with how much it wins.
   - `tempting`: the importer already flags a tempting second move (`temptingSecond`); it will now
     also store the refutation line.
   - `evalBand`: White better, equal or Black better, kept only for quiet positions where the best
     and second-best moves are close.
   - `features`: isolated, doubled, backward and passed pawns, holes and outposts, open and
     half-open files, bishop pair, opposite-colored bishops. Computed from the board, no engine.
   - `endgameType`: from the material on the board.
   - A sacrifice check on the move actually played: did the evaluation hold or collapse afterwards?
2. **Opening positions:** allow plies 6–24 for the opening quiz only, prefer lower-rated games, and
   add an `opening` category.
3. **A mix per quiz type:** like today's `--difficulty-mix`, so each batch fills every quiz type
   instead of mostly tactics.
4. **`npm run games:enrich`:** imports only add, never rewrite. Enrich adds the new fields to the
   games already in `games.json`, the same way `games:lookahead` adds Look Ahead trees.
5. **Smaller app files per quiz:** `threats.json`, `features.json`, `eval.json`, like the existing
   `quiz.json` and `lookahead.json`, so a quiz never loads whole game files.

## Games library changes

- **New filters:** pawn structure (isolated pawn, hanging pawns, opposite-colored bishops), endgame
  type, and sound vs unsound sacrifice.
- **Fix the "positional" category:** base it on the board features above, not on "nothing else
  matched".
- **Lesson links:** each lesson's "Practice it" points to its own quiz and a filtered games list,
  replacing the 10 "Analysis board" fallbacks.

## Suggested order

1. **Phase 1:** Review queue, What's the threat?, Who is better?, Spot the feature, plus
   `games:enrich`.
2. **Phase 2:** Is it safe?, See it in your head, Endgame technique, the new games filters.
3. **Phase 3:** Opening moves, Sound sacrifice?, mistakes from saved games.

## Open questions

- Add 8 new Practice entries, or fewer entries with sub-modes (for example one "Strategy" entry
  holding quizzes 3 and 4)?
- Start Phase 1 with `games:enrich` and quiz 4 (Spot the feature)?
