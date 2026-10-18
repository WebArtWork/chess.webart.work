# Chess Training: Theory lessons (English)

Generated from the app by `node tools/theory/export-md.mjs`. The English here is the source text of every
lesson; the Ukrainian is translated from it. Edit this file freely to improve the lessons, then ask for the
changes to be applied to the app.

Rules for edits:

- Keep each lesson’s slug line and the fixed headings (Main idea, How to think, Example, Common mistakes,
  Check yourself, Exercise, Questions to check yourself, Key takeaway, Practice it, Further reading) so changes
  can be mapped back. Other headings are free text.
- No em dashes. Plain, short sentences; American spelling; address the reader as "you".
- Chess claims must be correct; move sequences legal. Lessons are our own material "inspired by" players,
  never their official methods; book sources are for further reading only.
- "Practice it" links point to pages that exist in the app; describe a new page instead of inventing a path.

## How to use these lessons

Use these lessons actively: pause at each example, choose a move or plan, then read the explanation. Rating ranges are rough guides, not prerequisites. The listed time is a reading estimate; exercises using your own games take longer.

General rules help you find candidates. They do not prove that a move works. Check legality, your opponent’s strongest reply and the resulting position. Study without an engine first, then use analysis to test your reasoning.

The player-inspired lessons are our own teaching material, not official methods or endorsements. Further reading provides background, not proof of every claim here.

## Fundamentals

The basics every game needs.

### 1. Opening principles

`slug: opening-principles`

Category: Opening · Skill: Understanding the start of the game · Rating: 1000–1700 · Time: 15 min

#### What is a good opening?

The opening is the first stage of the game. Both players develop their pieces, fight for the center and get the king to safety.

The main goal of the opening is not necessarily to get an advantage. It is to build a position where your pieces work together.

Knowing twenty moves of a popular opening does not guarantee good play. It matters much more to understand why those moves are played.

#### Five basic principles

##### Control the center

The central squares d4, e4, d5 and e5 matter most. A piece near the center controls more squares: a knight on f3 covers eight squares, including d4 and e5, while a knight on h3 covers only four.

You can control the center with pieces, not only with pawns.

##### Develop your minor pieces

Early in the game, bring your knights and bishops out to active squares.

For example, after 1.e4 e5 2.Nf3 Nc6 3.Bc4 the knight attacks e5, the bishop aims at f7, and the kingside is clear for castling.

##### Keep your king safe

Castling early usually takes the king out of the center and helps connect the rooks.

But don’t castle automatically. If the pawns in front of the king have already moved, or files are opening on that flank, the king may walk into an attack.

##### Don’t waste tempi

Moving the same piece again and again lets your opponent finish development first.

The exception is a repeat move with a concrete tactical or positional purpose, such as winning material or meeting a threat.

##### Develop your pieces in harmony

A strong opening is more than a set of good moves. Your pieces should support each other and work toward a common goal.

#### How to think before an opening move

Before each move, ask yourself:

1. What does my opponent threaten?
2. Which piece is undeveloped or worst placed, and can I improve it?
3. How well do I control the center?
4. Is my king safe?
5. What plan does my move support?

#### Common mistakes

- Bringing the queen out early without a concrete reason: your opponent gains tempi by attacking it.
- Grabbing pawns instead of developing.
- Ignoring your opponent’s threats.
- Repeating memorized moves on autopilot, even after your opponent has left the familiar line.
- Attacking too early with too few pieces.

#### Exercise: Exercise

Look at this opening: 1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5. It is White’s move.

Compare three options: 4.O-O, 4.c3 and 4.Nc3.

Each of these moves has its own idea. Explain which plan each one supports before reading on.

Feedback: 4.O-O brings the king to safety and puts the rook on f1. 4.c3 prepares d4, but leaves development and castling to finish; Black can challenge the center with ...Nf6. 4.Nc3 develops a piece and controls d5 and e4, but it takes the c3-square from the c-pawn, so preparing d4 becomes harder. All three are reasonable. Explain a likely Black reply as well as White’s plan.

#### Key takeaway

> In the opening, understand what the position needs instead of just memorizing a sequence of moves.

#### Practice it

- **Try the exercise position** (`/library/board?fen=r1bqk1nr%2Fpppp1ppp%2F2n5%2F2b1p3%2F2B1P3%2F5N2%2FPPPP1PPP%2FRNBQK2R+w+KQkq+-+4+4`): Open the position after 3...Bc5 and compare 4.O-O, 4.c3 and 4.Nc3 yourself.
- **Games** (`/library/games`): Watch how strong players develop, castle and fight for the center in the first moves.

---

### 2. Pawn structures

`slug: pawn-structures`

Category: Strategy · Skill: Strategic planning · Rating: 1200–1900 · Time: 20 min

#### Why do pawns decide the plan?

Pawns only move forward. A pawn move can never be taken back, so each one can change the character of the position for a long time.

The placement of both sides’ pawns is called the pawn structure. It shows where your pieces have good squares, which files may open and on which flank you should play.

#### The main types of structure

##### Isolated pawn

An isolated pawn has no friendly pawns on the files next to it. The most important case is an isolated pawn in the center, for example on d4.

###### Advantages

- It gives your pieces space and activity, for example the e5 and c5 squares for the knights.
- It often makes a central break possible with the advance d5.

###### Disadvantages

- Other pawns cannot defend it.
- The square in front of it (d5) can be a strong blockading square. With no white c- or e-pawn, White cannot challenge a piece there with an adjacent pawn. Black must still check piece attacks, exchanges and tactical threats.
- In simplified positions it can become a weakness.

The right plan depends on how active the pieces are and whether the pawn can advance safely.

##### Doubled pawns

Doubled pawns are two pawns of the same color on one file.

They are sometimes weak: they cannot protect each other, and the front pawn blocks the rear one. But they can also open a file for the rooks or strengthen control of important squares.

For example, if White’s c-pawn is still on c2, bxc3 leaves doubled pawns on c2 and c3. The c3-pawn supports d4. If White has no other b-pawn and Black still has one, the b-file becomes half-open for White’s rook.

Don’t treat doubled pawns as bad automatically.

##### Backward pawn

A backward pawn lags behind neighboring friendly pawns and cannot safely advance to join them. It often lacks pawn support, and the square in front of it is controlled by the opponent. Being behind another pawn alone does not make a pawn weak.

A typical example is Black’s d6-pawn in the Sicilian after ...e5: the c-pawn is gone, the e-pawn has advanced, and White’s e4-pawn controls d5.

Such a pawn can become a long-term target, especially on a half-open file. The square in front of it becomes a good post for an enemy piece.

##### Passed pawn

A passed pawn has no enemy pawns in front of it, either on its own file or on the files next to it. For now only pieces can stop it, by blockading or capturing it, though later pawn captures can change the structure.

A passed pawn often becomes more dangerous as it approaches promotion, especially in an endgame. But support, blockade and king activity matter more than its rank alone. An unsupported advance may simply lose it.

##### Pawn chain

Pawns that protect each other along a diagonal form a chain. For example, after 1.e4 e6 2.d4 d5 3.e5 in the French Defense, White’s pawns on d4 and e5 form a chain.

The base of the chain is its rear pawn, which no other pawn protects. It is often the key target: weaken the base, and the whole chain suffers. In the French Defense, Black attacks the base d4 with ...c5.

#### How to build a plan from the structure

First, answer these questions:

1. Where are the weak pawns?
2. Which squares make good posts for knights because no enemy pawn can attack them?
3. Which files may open?
4. Who has more space, and on which flank?
5. Which pawn breaks are possible?

Then choose a plan that fits the position.

#### An example of a strategic decision

Imagine a position where White has an isolated pawn on d4, active pieces and a chance to prepare the advance d5.

Black wants to blockade the pawn, ideally with a knight on d5, trade pieces and slowly build up pressure on d4.

White usually wants to preserve active attacking pieces and prepare d5. A trade that removes a blockader or wins time can still help White. Black wants to reduce White’s activity and target d4, but should avoid exchanges that release the pawn or give White a favorable endgame.

One structure, two different strategic plans.

#### Exercise: Exercise

Take three of your own games and find in each one:

- The weakest pawn.
- The best square for a knight.
- A possible pawn break.
- One plan for each side.

Then compare your conclusions with an engine analysis of the game.

#### Key takeaway

> The pawn structure points the way, but the final plan also depends on piece activity and concrete tactics.

#### Practice it

- **Positional games** (`/library/games?category=positional`): See how strong players build their plans around the pawns.
- **Analysis board** (`/library/board`): Paste one of your games, find its weak pawns and breaks, then check your plan with the engine.

---

### 3. CCTO: four places to look for a move

`slug: ccto`

Category: Calculation · Skill: Searching for moves systematically · Rating: 800–1800 · Time: 15 min

#### Why you need an order of thinking

In a game you could consider dozens of moves. Without an order, you risk spending your time on side ideas and missing a simple tactic.

CCTO gives you four places to look for moves:

- C: Checks.
- C: Captures.
- T: Threats.
- O: Optimization, improving your position.

It is not a rule that you must play moves in this order, and it does not replace calculation. It is a simple way to search the position systematically so you don’t miss a promising option.

Before you start, check your opponent’s immediate threats.

#### Checks: look at every check

A check requires an immediate legal answer: capture the checking piece, block the line when possible, or move the king. First notice every legal check, including sacrifices. Then decide which deserve deeper calculation, especially:

- Checks that also attack another piece.
- Discovered checks.
- Double checks.
- Checks with a sacrifice.
- Checks that drive the king onto a dangerous square.

But not every check is good. A pointless check can help your opponent move the king to safety or bring a piece into play with tempo.

Example: you are attacking the king and can give check with your queen. Before you do, see whether your opponent can block the check with a piece that attacks your queen at the same time. A check is not good just because it forces a reply.

Key question: what changes after the check and your opponent’s strongest reply?

#### Captures: check every capture

Captures change the material balance and often open lines for the pieces. But whether a trade pays off depends on more than the value of the pieces. Before you capture, ask:

1. Is the piece I want to take protected?
2. What can my opponent recapture with?
3. Will there be a tactic after the trade?
4. Will I weaken my own king?
5. Which side will have the more active position after the trade?

Example: your bishop can take your opponent’s knight. It looks like an even trade. But after the recapture your opponent may get an open file for a rook or the bishop pair. An even trade in material can still be a bad trade.

Key question: will my position be better after the whole sequence of captures?

#### Threats: create threats

A threatening move creates a concrete danger: if your opponent ignores it, you win something or break through on the next move. It does not have to win anything right away. Common examples:

- Attacking an unprotected piece.
- A double attack.
- A mate threat.
- Attacking a weak pawn once more, so it can no longer be held.
- Creating a passed pawn that threatens to promote.

A strong threat can limit your opponent’s choices. But they may ignore it with a stronger check, counter-threat or favorable trade. Test the threat against those replies.

Example: your rook stands on an open file and your queen supports it. Instead of trading at once, you bring your second rook to the same file. If the entry square is accessible and the invasion creates a concrete danger, you threaten to invade on the seventh rank. Otherwise, doubling rooks is preparation rather than an immediate threat. You have not won material yet, but you have raised the pressure and given your opponent a concrete problem.

Key question: what will my opponent have to deal with after my move?

#### Optimization: improve your position

Not every position has a combination or a strong threat. In quiet positions, improve your pieces step by step. Optimization can mean:

- Rerouting your worst-placed piece.
- Strengthening your control of the center.
- Making your king safer.
- Taking an open file.
- Setting up a strong outpost for a knight.
- Preparing a good pawn break.
- Fixing a weakness in your own position.

Example: your knight stands on the edge of the board and hardly takes part in the game. There is no tactic. You can spend a few moves bringing the knight closer to the center. Such a plan can be stronger than forcing an attack that is not there.

Key question: which of my pieces works worst, and how can I make it more useful?

#### Using CCTO in a real game

A thinking routine for one move:

1. Understand your opponent’s last move. What changed? Is there a new threat, an unprotected piece, a newly opened line? If they threaten mate, deal with that first.
2. Look at the checks and calculate the replies. Don’t give a check just because you can.
3. Look at the captures: good trades, sacrifices, tactics. Calculate the replies, not only your first capture.
4. If nothing wins at once, look for a threat your opponent will have to answer.
5. Look for a positional improvement: your least active piece, weak squares, a long-term plan. Sometimes the quiet move is the strongest.
6. Pick the best candidates from all four places and compare them by concrete lines, not by the type of move.
7. Before you move, ask: what is my opponent’s strongest reply, and am I missing a simple tactic?

#### Common mistakes

- Always giving check when you can. CCTO asks you to look at checks, not to prefer them.
- Judging a capture by material alone. Weigh piece activity, king safety and the positional consequences too.
- Making threats without looking at your opponent’s plan. Your threat may be slower or weaker than theirs.
- Ignoring quiet moves. A strong defensive or positional move sometimes beats every forcing line.
- Stopping the calculation after the first reply. Evaluate the position at the end of the important line.

#### Exercise: Exercise

##### Exercise 1. Finding checks

Take any tactical position. Find every legal check, then decide which ones deserve calculating. The goal is to notice the options, not to play the first check you see.

##### Exercise 2. Analyzing captures

In a position of your choice, find every capture. For each promising one, calculate at least your opponent’s strongest reply. Decide which captures pay off and which cause you problems.

##### Exercise 3. Creating a threat

Pick a position with no obvious combination. Look for up to three moves that create concrete threats. Explain how your opponent can answer each one. If no sound threat exists, say so and choose a useful improvement instead.

##### Exercise 4. Positional improvement

Take a quiet, roughly equal position. Find the least active piece on each side. Suggest a two- or three-move plan to improve yours.

##### Exercise 5. The whole routine

In a training game, find a critical moment and write down every stage:

1. Your opponent’s threat.
2. Possible checks.
3. Promising captures.
4. Threats you can create.
5. Positional improvements.
6. Your best two or three candidates.
7. Your final decision.

Then check your evaluation with an engine.

#### Questions to check yourself

1. **What do the four letters of CCTO stand for?**
   Answer: Checks, Captures, Threats, Optimization: checks, captures, threats and improving your position.
2. **Why is a check not always the best move?**
   Answer: A pointless check can help your opponent bring the king to safety or develop a piece with tempo. What matters is the position after the check and the strongest reply.
3. **What consequences should you check before trading pieces?**
   Answer: Whether the piece is protected, how your opponent recaptures, whether a tactic follows, whether your king gets weaker and who will be more active after the trade.
4. **How is a threat different from a general improvement of your position?**
   Answer: A threat creates a specific consequence if ignored. Your opponent may defend or meet it with something stronger. A general improvement may make your position better without creating an immediate concrete threat.
5. **What should you do if there are no good checks, captures or direct threats?**
   Answer: Improve your position: reroute your worst piece, make your king safer, fix a weakness or prepare a pawn break.
6. **Why check your opponent’s last move before your own calculation?**
   Answer: It may have created a threat, even a mate threat, or left a piece unprotected. Your own ideas are worth little if you miss what changed.
7. **Can a quiet positional move be stronger than a forcing one?**
   Answer: Yes. When the forcing lines lead nowhere or your opponent’s threat must be stopped, a quiet defensive or improving move is often the strongest.

#### Key takeaway

> CCTO does not replace calculation, but it makes your search systematic: forcing moves first, then threats and quiet improvements, so you are less likely to miss an important option.

#### Practice it

- **Mate in 1** (`/practice/mate-in-one`): Start with the checks: look at every check before anything else.
- **Tactics** (`/practice/tactics`): Go through checks, captures and threats before you pick a move.
- **Good moves** (`/practice/good-moves`): Collect candidates from all four places, including one quiet move.
- **Look Ahead** (`/practice/look-ahead`): After each check or capture, calculate your opponent’s strongest reply.

#### Further reading

- *CCTO Rule in Chess: Checks. Captures. Threats. Optimization.*, Darko Polimac, Chess.com forum: https://www.chess.com/forum/view/chess-lessons/ccto-rule-in-chess-checks-captures-threats-optimization

---

### 4. Making decisions during a game

`slug: decision-making`

Category: Practical play · Skill: Calculation and time management · Rating: 1200–2000 · Time: 15 min

#### Why does a good player not always find the best move?

In a real game your time is limited. Even experienced players cannot calculate every possible line. So success depends not only on chess knowledge but also on choosing what to calculate.

A strong practical player can tell critical positions from ordinary ones.

#### Spot the critical moments

A position usually needs extra attention when:

- A material sacrifice is possible.
- A series of forcing moves begins.
- You have to decide whether to trade queens.
- One of the kings comes under threat.
- The pawn structure can be changed for good.
- You have to choose between attack and defense.

These are the moments to spend more of your time on.

#### A decision-making routine

In a critical moment, go through all six steps carefully. In a quiet position, shorten the routine: check what changed, identify a useful improvement and test the strongest reply. Keep the final blunder check. Quiet-looking positions can still contain tactics.

##### Step 1. Check the threats

Before you look for your own ideas, work out what your opponent wants to do. Look especially closely at checks, captures and direct threats.

##### Step 2. Evaluate the position

Look at material, piece activity, king safety, the pawn structure and weak squares.

##### Step 3. Find candidate moves

Choose two or three promising moves. You do not need to analyze every legal move equally deeply.

##### Step 4. Calculate your opponent’s replies

For each candidate, look for your opponent’s strongest reply, not the one you hope for.

##### Step 5. Decide

Compare the positions at the end of each line: material, king safety, activity. Choose the move that leads to the best one.

##### Step 6. Check for tactics

Before you make the move, look once more at the position after it. What checks, captures and threats will your opponent have?

#### Time management

There is no set number of seconds per move. Three principles help:

- Don’t spend too long on an obvious decision.
- Keep time in reserve for the hard moments late in the game.
- In a critical position, spend your time calculating, not going over the same thought again and again.

#### When should you simplify?

The usual rule is that the side ahead in material should trade pieces. But not every trade helps that side. Before you trade, ask yourself:

1. Will I keep my material advantage?
2. Will my king be safer?
3. Will my opponent get a dangerous passed pawn?
4. Am I heading into a known draw or a position with no realistic way through? Opposite-colored bishop endings can offer strong drawing chances, even a pawn or two down, but are not automatically drawn. With queens or rooks still present, opposite-colored bishops can also strengthen an attack.
5. Will my opponent’s pieces become more active?

#### Exercise: Exercise

In your next training game, after each of your opponent’s moves, answer three questions in your head:

- What is their main threat?
- What are my two most promising moves?
- What is the strongest reply to each?

After the game, find the three decisions you spent the most time on. Was the position really critical, and did the extra time change your choice?

#### Key takeaway

> A strong practical player does not try to calculate everything but correctly picks out the decisions that deserve the most attention.

#### Practice it

- **Critical decisions** (`/practice/good-moves?category=criticalDecision`): Positions where one decision matters: go through all six steps before you move.
- **Look Ahead** (`/practice/look-ahead`): Calculate your opponent’s strongest replies, not the ones you hope for.
- **Good moves** (`/practice/good-moves`): Find two or three candidate moves before you commit to one.

---

### 5. Chess psychology and focus

`slug: chess-psychology`

Category: Psychology · Skill: Focus and composure · Rating: 1000–2000 · Time: 15 min

#### Why doesn’t knowledge always turn into wins?

You can understand tactics well, know your openings and solve puzzles regularly, yet still make serious blunders in tournaments.

The causes may be haste, fatigue, fear of losing or a lapse in attention.

That is why mental preparation is part of chess training.

#### Play the position, not the rating

A higher-rated opponent can make you play too cautiously.

A lower-rated opponent, on the other hand, sometimes tempts you into unsound attacks.

But the right move is decided by the position, not by your opponent’s name or rating.

Rule: judge the possibilities on the board, whatever result you expect.

#### How to react to a mistake

Say you have dropped a pawn or missed a good tactical shot.

The worst reaction is to keep thinking about that mistake.

A more useful order:

1. Accept that the position has changed.
2. Assess the new balance of forces.
3. Look for practical chances.
4. Keep looking for the best moves.
5. After the game, analyze why the mistake happened.

During the game, what matters is the next decision, not justifying the last one.

#### How to stay focused

Focus does not mean constant maximum tension.

Use a short routine before each move:

1. Check the threats.
2. Name your candidate moves.
3. Calculate the most important lines.
4. Check for a tactical blunder: what does your move leave unprotected?
5. Make the move.

Repeating this routine turns it into a stable habit.

#### Staying objective in an attack

A player who has started an attack often wants to prove the decision was right.

Because of that, they may ignore the opponent’s strong defensive moves.

In every attacking position, ask yourself:

“What would I do in my opponent’s place to stop this attack?”

This helps you avoid unsound sacrifices.

#### Preparing for a tournament

A simple routine helps:

- Get enough rest before the game.
- Don’t try to learn many new openings at the last minute.
- Review a few familiar tactical patterns.
- Check the time control.
- Set a learning goal that does not depend on the result.

For example: “In every critical position I will find at least two candidate moves.”

#### Exercise: Exercise

After each of your next five games, write down:

1. Did you rush?
2. Did your opponent’s rating affect your decisions?
3. Did you lose focus after a mistake?
4. Did you check your moves for tactical threats?
5. Which mental habit do you need to improve?

Then look for patterns that repeat across the five games, rather than judging yourself by the result of a single game.

#### Key takeaway

> Mental toughness in chess is the ability to bring your attention back to the position and make sound decisions, even after a setback.

#### Practice it

- **Daily puzzle** (`/practice/daily`): One puzzle a day: go through the full pre-move routine before you answer.
- **Tactics** (`/practice/tactics`): You get one try per puzzle, so practice the routine: threats, candidates, blunder check, then move.

---

### 6. Analyzing your own games

`slug: analyzing-your-games`

Category: Self-improvement · Skill: Finding and fixing your mistakes · Rating: 1000–2000 · Time: 20 min

#### Why is analyzing your own games so important?

Every game you play shows your strengths and weaknesses.

Puzzles train specific skills. Your own games show how you use those skills when nobody tells you the theme and the clock is running.

Just looking at the engine’s evaluation is not enough. You need to understand why you made the wrong decision and how to avoid a similar mistake.

#### Analyze without the engine first

After the game, go through it on your own. Find:

- The moment you left your opening knowledge.
- The first difficult strategic choice.
- The critical tactical positions.
- Positions you may have misjudged.
- Chances you missed.
- The moment the game turned, and why.

Write down what you were thinking during the game, ideally right after it, while you still remember.

#### Identify the type of mistake

##### Tactical mistake

You missed a concrete blow, check, capture or threat.

Training: puzzles on that tactical motif.

##### Calculation mistake

You found the right candidate but calculated the line wrongly.

Training: calculation exercises where you check your opponent’s strongest replies to the end of the line.

##### Strategic mistake

You chose the wrong plan or misread the long-term features of the position.

Training: studying pawn structures and typical plans.

##### Opening mistake

You placed your pieces badly or did not understand the main ideas of the opening.

Training: studying typical positions, not just memorizing moves.

##### Endgame mistake

You did not know the standard method to defend or to convert an advantage.

Training: endgame exercises on that theme.

##### Practical mistake

You knew the right idea, or would have seen the threat, but you rushed, used your time badly or skipped the check.

Training: training games with a fixed check before every move.

#### Using a chess engine

Turn on the engine (for example, Stockfish) only after your own analysis. The engine helps you:

- Find tactical chances you missed.
- Check the lines you calculated.
- Compare your candidate moves with its choice.
- Find the turning points of the game.

But the engine’s evaluation does not explain why you made the mistake. Put the reason into your own words.

#### Training journal

For every game, write down:

- Date: when the game was played.
- Time control: rapid, blitz or classical.
- Color: White or Black.
- Opening: its name or the main pawn structure.
- Result: win, draw or loss.
- Main mistake: a short description.
- Cause: what led to the mistake.
- Lesson: what you learned.
- Next training: a specific topic.

Over time, the journal will show which problems come up most often.

#### How to build a personal training plan

After analyzing 10–20 games, sort your mistakes by type. For example:

- Tactical mistakes: 40%.
- Wrong strategic plans: 25%.
- Endgame problems: 20%.
- Other mistakes: 15%.

This is only an example, not a norm for every player.

If most of your mistakes are tactical, give tactics a bigger share of your training. If you often let an advantage slip in the endgame, work more on endgames.

Your training should match the problems you actually have.

#### Exercise: Exercise

Pick one of your lost games.

1. Go through it without the engine.
2. Find three critical moments.
3. Write down two or three candidate moves for each moment.
4. Explain why you chose the move you played.
5. Check those positions with the engine.
6. Identify the most instructive mistake and its likely cause. A loss may have several causes, and the final error may not be the most useful one to study.
7. Set one focused training task, then revisit a similar position a few days later.

#### Key takeaway

> What helps you most is not the number of games you play but the ability to turn your own mistakes into concrete training tasks.

#### Practice it

- **Analysis board** (`/library/board`): Paste your game as PGN, name your candidates, then compare them with the engine.
- **My games** (`/library/saved`): Pick a recent game, ideally a loss, and go through it without the engine first.

---

## Masters’ approaches

How famous players and coaches think, as our own lessons.

### 7. Find your candidate moves

`slug: candidate-moves`

Inspired by: Alexander Kotov · Category: Calculation · Skill: Organizing your calculation · Rating: 1200–1600 · Time: 8 min

#### Main idea

The first attractive idea is not always the strongest. Before you calculate far ahead, decide which moves are worth checking at all. Candidate moves are plausible options worth comparing. Two to four is a useful starting range in a difficult position, not a quota. Sometimes only one move works; sometimes you need to widen the search.

Soviet grandmaster Alexander Kotov described this method in Think Like a Grandmaster (1971). He noticed that many players calculate in a muddle: they look at one move, jump to another, come back to the first and in the end play something they never checked.

#### How to think

1. Look at what your opponent threatens right now. Do you need to respond at once?
2. Find the forcing ideas: checks, captures, direct threats.
3. Add one quiet move that improves your worst piece or protects a weakness.
4. Choose 2–4 moves to check; don’t calculate ten random moves.
5. For each candidate, picture your opponent’s strongest reply.
6. Compare the final positions: material, king safety, activity, weaknesses.

#### Example

You see a chance to attack your opponent’s queen. But first you notice that your back rank is weak. The candidates: attack the queen, protect the back rank, trade off your opponent’s active piece. Even without an exact line it is clear: you need to evaluate all three ideas, not play the attack at once.

#### Kotov’s tree of analysis

Each candidate is the start of a branch. For each one, find your opponent’s best reply, then your best answer to it, and so on until the position is clear enough to judge. Where the opponent has two strong replies, the branch splits.

Use the tree to organize your work: examine a candidate, summarize the result, then compare another. Avoid restarting the same line without learning anything. But do return to a branch if you discover a missed defense or a new tactical idea. Order helps, and so does revising a line when you find something new.

#### How to use it in your games

Strong players do not draw a full tree for every move. Use the whole method in critical positions: when there is a capture or a check in the air, when the position changes character, or when you are about to commit to a plan. In quiet positions, a short list of candidates and a blunder check is enough.

#### Common mistakes

- Starting a new line every few seconds, in no order.
- Stopping at the first good move. A good move is not always the best one; check the other candidates first.
- Forgetting the opponent. Every branch needs the opponent’s best reply, not the one you hope for.
- Calculating one line for too long, then playing a move you never checked because the clock is low. Kotov described this trap himself.

#### Check yourself

**Question:** You have found a beautiful sacrifice. What should you do before playing it?

**Answer:** Add at least one alternative candidate and check the strongest defense against the sacrifice.

#### Practice it

- **Good moves** (`/practice/good-moves`): Find every good move in a position before you commit.
- **Look Ahead** (`/practice/look-ahead`): Build the tree three moves deep, with the best replies.
- **Analysis board** (`/library/board`): Pick your candidates in any position, then compare them with the engine.

#### Further reading

- *Think Like a Grandmaster*, Alexander Kotov, Batsford Books: https://www.batsfordbooks.com/book/think-like-a-grandmaster/

---

### 8. Explain every move

`slug: explain-every-move`

Inspired by: John Nunn · Category: Understanding the game · Skill: Playing with purpose · Rating: 1200–1700 · Time: 8 min

#### Main idea

A move becomes a useful lesson when you can say why it was played. Even a strong computer suggestion teaches little if it is not clear what it changes in the position.

#### How to think

1. Name the concrete problem in the position: an undefended piece, a weak square, lagging development, a king in danger.
2. Say what should change after your move.
3. Ask how your opponent will reply and what changes after that reply.
4. Keep the short-term tactical goal apart from the longer strategic plan.
5. After the game, pick five key moves and explain them in your own words.

#### Example

You put a rook on a half-open file, a file with no friendly pawn but an enemy pawn still on it. A weak explanation: “rooks belong on files.” A stronger one: “the rook attacks the backward pawn on this file. I want to add a second attacker, but first I must check whether my opponent can defend the pawn in time or trade it off.” On a fully open file, there are no pawns of either color; look for entry squares and targets beyond the file itself.

#### Common mistake

- Making up a nice explanation after the engine has already shown you the answer.

#### Check yourself

**Question:** What shows understanding better: memorizing 12 opening moves or explaining the purpose of three key ones?

**Answer:** Explaining the purpose; memorizing is useful too, but it does not replace understanding.

#### Practice it

- **Games** (`/library/games`): Pick a game, stop at the key moves and say why each one was played.
- **Analysis board** (`/library/board`): Put the reason for your move into words first, then check it with the engine.

#### Further reading

- *Understanding Chess Move by Move*, John Nunn, WorldCat: https://search.worldcat.org/title/Understanding-chess-move-by-move/oclc/50497051

---

### 9. Train in small steps

`slug: step-by-step-training`

Inspired by: Rob Brunia and Cor van Wijgerden · Category: Learning method · Skill: Learning tactical motifs · Rating: 1200–1700 · Time: 7 min

#### Main idea

One motif is easier to learn in several similar but not identical positions than in a very complex combination right away. The difficulty should grow step by step: recognize → apply → combine with another motif.

#### How to train

1. Choose one theme, for example the pin.
2. Recognize the motif in a simple position.
3. Solve 3–5 new puzzles with this motif in different parts of the board.
4. Try a position where the motif is there but does not work.
5. Move on to a puzzle where you have to combine the pin with a deflection.
6. Come back to the theme next week.

#### Example

A white knight on e5 attacks c6, c4, d7, f7, g6, g4, d3 and f3. A black king on d7 and queen on f7 would both be attacked: that is a fork. Before calling it a material win, check whether Black can capture the knight or answer the check in another way that saves the queen. The next step is to find a preparatory move that creates a fork.

The two targets of a knight fork always stand on squares of the same color, so they can never be next to each other on a rank or file.

#### Common mistake

- Studying complex combinations before you can tell the basic motifs apart.

#### Check yourself

**Question:** Why is a puzzle where a familiar combination does not work also useful?

**Answer:** It teaches you to check the conditions for the motif instead of repeating a pattern automatically.

#### Practice it

- **Mate in 1** (`/practice/mate-in-one`): Start with the simplest step: spot the mate in one move.
- **Games with forks** (`/library/games?theme=fork`): See the fork in real games, on different squares and with different pieces.
- **Games with pins** (`/library/games?theme=pin`): One motif at a time: the pin in many different positions.
- **Tactics** (`/practice/tactics`): Then apply the motifs in mixed puzzles and check that they really work.

#### Further reading

- *Chess Steps (Stappenmethode)*, Rob Brunia and Cor van Wijgerden, Official website: https://www.stappenmethode.nl/en/index.php

---

### 10. Learn, then check yourself

`slug: structured-improvement`

Inspired by: Artur Yusupov · Category: Training system · Skill: Studying on your own · Rating: 1200–1800 · Time: 8 min

#### Main idea

Reading a rule does not mean you have learned to use it. A good cycle: study the topic → see an example → practice → check yourself → go back to your mistakes.

#### How to train

1. Write down the goal of one session: for example, finding the weakest piece.
2. Study one clear idea, without mixing it with five other topics.
3. Work through a demonstration example of your own.
4. Solve 5 puzzles without hints and without looking at the engine’s evaluation.
5. For each mistake, write down the cause: missed a check, mixed up the move order, overlooked a defense.
6. A few days later, retry the missed positions and solve new ones with the same ideas. Include a few mixed review positions to check that you recognize the theme without a hint.

#### Example

In a set of five puzzles, you solve three correctly. In the other two, you miss an in-between check. Review why those checks work, then practice a short set of in-between moves. Later, test the skill in mixed puzzles where the theme is hidden.

#### Common mistake

- Counting how many lessons you have finished instead of how well you have learned them.

#### Check yourself

**Question:** What helps your progress more: 30 puzzles with no review or 10 puzzles with your mistakes explained?

**Answer:** Often the second, because you find out what exactly keeps you from finding the solution.

#### Practice it

- **Daily puzzle** (`/practice/daily`): One puzzle a day, without hints. If you miss it, write down why.
- **Tactics** (`/practice/tactics`): Solve a short set without hints, then go back over every mistake.
- **Weekly plan** (`/`): Plan your week: one goal per session, and time to review your weak spots.

#### Further reading

- *Build Up Your Chess 1: The Fundamentals*, Artur Yusupov, Quality Chess (sample PDF): https://qualitychess.co.uk/ebooks/Build-up-Your-Chess-1-exceprt.pdf

---

### 11. What is unequal in the position?

`slug: position-imbalances`

Inspired by: Jeremy Silman · Category: Strategy · Skill: Making a strategic plan · Rating: 1300–1800 · Time: 9 min

#### Main idea

Not every advantage is measured in pawns. One player has the more active bishop, the other a better pawn structure; one controls an open file, the other has a protected passed pawn. A plan starts with the differences between the two sides.

#### How to think

1. Compare material and king safety.
2. Compare how active the pieces are and where their best squares are.
3. Find weak pawns, squares and files.
4. Decide which advantage can be used right now.
5. State your plan in one sentence.
6. Check that your opponent cannot wreck this plan with tactics.

#### Example

You have a knight, your opponent has a bishop, and the center is blocked. The idea is to find a strong square for the knight. But if your opponent can open the center on the next move, you have to deal with that threat first.

#### Common mistake

- Making a strategic move without first checking for checks and tactical threats.

#### Check yourself

**Question:** Are two bishops always stronger than two knights?

**Answer:** No. What matters is how open the position is, the pawn structure and the squares available.

#### Practice it

- **Positional games** (`/library/games?category=positional`): Before a key move, name one advantage for each side, then guess the plan.
- **Analysis board** (`/library/board`): Write down the imbalances and a one-sentence plan, then check it for tactics with the engine.

#### Further reading

- *How to Reassess Your Chess (4th edition)*, Jeremy Silman, WorldCat: https://search.worldcat.org/search?q=How+to+Reassess+Your+Chess+Jeremy+Silman

---

### 12. Foresee your opponent’s plan

`slug: prophylaxis`

Inspired by: Tigran Petrosian · Category: Defense · Skill: Prophylaxis and defense · Rating: 1300–1800 · Time: 8 min

#### Main idea

A strong move sometimes threatens nothing right away. Instead, it stops your opponent from carrying out their best plan. Prophylaxis is not passivity: you take away your opponent’s convenient options and prepare your own.

#### How to think

1. Imagine it is your opponent’s move. What do they want most?
2. Find their most active piece and the pawn break they want to make.
3. Ask whether one useful move can take the force out of that plan.
4. Compare the prophylactic move with your own active options.
5. Once you have defended, look for the initiative again.

#### Example

Your opponent plans to put a rook on the open file. You can take the file first, or place a piece so that the rook’s entry creates no threats. You are not “doing nothing”; you are removing a specific risk.

#### Common mistake

- Defending against threats that don’t exist and losing tempi for no reason.

#### Check yourself

**Question:** Why look at your opponent’s plan if your pieces are more active?

**Answer:** Activity does not cancel threats; one prepared pawn break can change the evaluation of the position.

#### Practice it

- **Critical decisions** (`/practice/good-moves?category=criticalDecision`): Before you choose your move, name your opponent’s best plan.
- **Defensive games** (`/library/games?category=defense`): Before each key move, name the opponent’s plan, then see how it was stopped, or not.

#### Further reading

- *Python Strategy*, Tigran Petrosian, Simon & Schuster: https://www.simonandschuster.com/books/Python-Strategy/Tigran-Petrosian/Chess-Classics/9781784830021

---

### 13. Blockade and strengthen your pieces

`slug: blockade-and-outposts`

Inspired by: Aron Nimzowitsch · Category: Strategy · Skill: Restricting the opponent · Rating: 1300–1800 · Time: 9 min

#### Main idea

Not every weakness has to be attacked at once. Sometimes it works better to stop a weak pawn from moving and put a strong piece in front of it. That square can become an outpost for a knight or a center of pressure.

#### How to think

1. Find an opponent’s pawn that could become passed or support a pawn break.
2. Pick the square in front of it where you can set up a blockade.
3. Think about which piece holds that square best.
4. Make sure the blockading piece is supported.
5. Later, attack other weaknesses: it is harder for your opponent to break free.

#### Example

Your opponent has an isolated pawn. If you cannot win it safely at once, consider putting a knight on the protected square in front of it. The pawn cannot advance, and the knight attacks the squares around it.

#### Common mistake

- Occupying a beautiful outpost that your opponent can easily chase away with a pawn.

#### Check yourself

**Question:** Why can a protected knight in front of an isolated pawn be stronger than an immediate trade?

**Answer:** It restricts the pawn’s movement and at the same time makes your pieces active.

#### Practice it

- **Positional games** (`/library/games?category=positional`): Look for blockading pieces and outposts, and ask why they stand there.
- **Analysis board** (`/library/board`): Choose the best blockade square, then explain why the other squares are less stable.

#### Further reading

- *My System*, Aron Nimzowitsch, Simon & Schuster: https://www.simonandschuster.com/books/My-System/Aron-Nimzowitsch/Chess-Classics/9789197600538

---

### 14. Simplify to win

`slug: clear-endgame-thinking`

Inspired by: José Raúl Capablanca · Category: Endgame · Skill: Simplification and technique · Rating: 1200–1700 · Time: 8 min

#### Main idea

When you have an advantage, you do not always need to attack. Sometimes the safest way is to trade active enemy pieces, activate your king and push a pawn through. But simplifying only helps when the final position is really good for you.

#### How to think

1. Name your advantage: extra material, an active king, a strong passed pawn.
2. Picture the position after the trade you are considering.
3. Ask which pawns will remain and who will create a passed pawn first.
4. Don’t trade pieces automatically: some trades turn a win into a draw.
5. Before entering a pawn endgame, calculate king routes, pawn races and whose move it will be. Opposition is a tool for reaching useful squares, not a guarantee of a win.

#### Example

You are a pawn up. Trading queens often lowers the risk of an attack on your king. But king activity, pawn structure and access to targets decide whether the extra pawn is enough.

Try this complete position: White king c6, pawn c7; Black king a7; White to move. There are no other pieces. What happens after 1.c8=Q?

Answer: it is stalemate. Black is not in check, but a8 and b8 are controlled by the queen, b7 and b6 by White’s king, and a6 by the queen. Instead, 1.c8=R avoids stalemate: Black must play 1...Ka6, and White has a winning king-and-rook ending. Check the opponent’s legal replies even when promotion looks routine.

#### Common mistake

- Rushing to trade without seeing the drawing fortress.

#### Check yourself

**Question:** Is it always good to trade pieces when you are a pawn up?

**Answer:** No. You need to evaluate the specific endgame.

#### Practice it

- **Endgame puzzles** (`/practice/good-moves?category=endgame`): Before you trade, picture the position after the trade and judge it.
- **Endgame games** (`/library/games?category=endgame`): At each trade, judge whether the endgame after it is really better.

#### Further reading

- *Chess Fundamentals*, José Raúl Capablanca, Project Gutenberg: https://www.gutenberg.org/ebooks/33870

---

### 15. A plan beats haste

`slug: practical-endgames`

Inspired by: Mikhail Shereshevsky · Category: Endgame · Skill: Practical endgames · Rating: 1400–1800 · Time: 9 min

#### Main idea

In the endgame, too much speed often does harm. When your opponent has no urgent counterplay and your advantage is stable, you can improve your king and pieces before forcing matters. But a pawn break is not the only danger: rook activity, checks, king entry and a blockade may also demand an immediate response.

#### How to think

1. Make sure your opponent has no immediate passed-pawn threat or tactical resource.
2. Activate your king if it is safe.
3. Put your pieces on squares where they defend and attack at the same time.
4. Fix one of your opponent’s weaknesses.
5. Try to create a second weakness in another part of the board.
6. Look for a favorable break or trade at each stage. Do not postpone a concrete win just to complete the plan.

#### Example

Your rook is more active, but all your opponent’s pawns are protected. If you attack one pawn right away, your opponent will have time to defend it. Try to make them defend both sides of the board at once.

#### Common mistake

- Pushing a pawn before your pieces are ready to support it.

#### Check yourself

**Question:** What does “two weaknesses” mean?

**Answer:** Two targets that are harder for your opponent to defend at the same time than one.

#### Practice it

- **Endgame games** (`/library/games?category=endgame`): Replay endgames and ask at each step: where is the second weakness?
- **Endgame puzzles** (`/practice/good-moves?category=endgame`): Before you pick a move, decide on your plan for the next few moves.

#### Further reading

- *Endgame Strategy*, Mikhail Shereshevsky, New In Chess: https://www.newinchess.com/chess-endgame-strategy-shereshevsky

---

### 16. Check the critical line

`slug: calculate-critical-lines`

Inspired by: Mark Dvoretsky · Category: Calculation · Skill: Accurate calculation · Rating: 1500–1900 · Time: 10 min

#### Main idea

There is a huge difference between “I think I’m winning” and “I checked it.” In a sharp position, you need to find the moment where everything depends on one precise move: an in-between check, a stalemate idea, a forced trade or the move order.

#### How to think

1. Decide whether the position is critical: can one move sharply change the evaluation?
2. Find the forcing candidates for both sides.
3. Don’t calculate to an arbitrary depth; calculate until you reach a clear, stable position.
4. At every step, check your opponent’s checks, captures and counter-threats.
5. At the end, look at your first move again: did you miss an alternative?
6. After you answer, compare your evaluation with checked analysis.

#### Example

Start from the normal initial position and play 1.e4 e5 2.Bc4 Nc6 3.Qh5. Black considers 3...Nf6, developing with an attack on the queen. Before making that move, find White’s strongest reply.

Answer: 3...Nf6?? 4.Qxf7#. The queen is protected by the bishop on c4. Black cannot capture it, block a check from the next square or move the king to safety. Attacking the queen did not force White to retreat.

Compare 3...g6, which blocks the queen’s path to f7 and attacks it. After 4.Qf3, White threatens mate on f7 again, so Black must reassess. The point is to check the threat again after every reply.

#### About the source

Dvoretsky’s Endgame Manual is about accuracy in endgame analysis. The practice suggested here is our own adaptation of the general principle, not a copy of the author’s exercises.

#### Common mistake

- Looking only for moves that confirm your first idea.

#### Check yourself

**Question:** Why is “I calculated five moves ahead” not always good calculation?

**Answer:** Depth is useless if you missed a stronger reply by your opponent on the second move.

#### Practice it

- **Look Ahead** (`/practice/look-ahead`): Calculate to a clear position, with your opponent’s best reply at every step.
- **Critical decisions** (`/practice/good-moves?category=criticalDecision`): Positions where one move changes the evaluation. Check the forcing moves for both sides.
- **Mate in 3** (`/practice/mate-in-three`): Calculate the forcing line to the end, against every defense.

#### Further reading

- *Dvoretsky’s Endgame Manual*, Mark Dvoretsky, New In Chess: https://www.newinchess.com/dvoretsky-s-endgame-manual-6270

---

### 17. Initiative and sacrifice

`slug: initiative-and-sacrifice`

Inspired by: Mikhail Tal · Category: Attack · Skill: Attacking and judging compensation · Rating: 1300–1800 · Time: 9 min

#### Main idea

Sometimes you can give up material and get something in return: time, open lines, an attack on the king, active pieces. But a beautiful sacrifice is not the same as a correct one. What matters is judging the real threats and whether your opponent can give the material back or defend.

#### How to think

1. Count exactly what you are giving up.
2. Name the compensation: a king in danger, development, open files, tempi.
3. Check your opponent’s calmest, most solid reply.
4. Count how many active pieces support the attack.
5. If there is no forced win, judge honestly whether the compensation is enough.

#### Example

You give up a pawn to open a line toward the king, but your bishops are not developed yet. The attack may look spectacular, but it has no support. First check whether your other pieces can join in time.

#### Common mistake

- Believing that any attack on the king justifies losing material.

#### Check yourself

**Question:** Should you sacrifice a knight just because your opponent will have to make three defensive moves?

**Answer:** Not necessarily. You need to check what happens after the best defense.

#### Practice it

- **Games with sacrifices** (`/library/games?theme=sacrifice`): For each sacrifice, name what was given up and what came back in return.
- **Attacking games** (`/library/games?category=attack`): Count the pieces in each attack, then check the defender’s best reply.
- **Tactics** (`/practice/tactics`): Before you play a sacrifice, check the calmest defense.

#### Further reading

- *The Life and Games of Mikhail Tal*, Mikhail Tal, New In Chess: https://www.newinchess.com/life-and-games-of-mikhail-tal

---

### 18. See the board in your head

`slug: board-visualization`

Inspired by: János Flesch · Category: Visualization · Skill: Picturing the position without moving pieces · Rating: 1200–1800 · Time: 7 min

#### An important note

János Flesch is known for his blindfold chess displays, but this lesson is not presented as a method he documented. It is our own original training routine on visualization, inspired by the tradition of blindfold chess.

You do not need to play blindfold games to benefit. The goal here is to track a short line accurately.

#### Main idea

To calculate lines better, it helps to keep the position of the pieces in your head after a few moves. This skill grows through small exercises, not by trying to play a whole game with your eyes closed right away.

#### How to train

1. Look at the board for 15 seconds.
2. Hide it and name the squares of two pieces you chose.
3. Picture one legal move by a knight or a rook.
4. Say which squares that piece controls after the move.
5. Show the board again and check yourself.
6. When this is easy, add a second move and another piece.

#### Example

A knight stands on e4. Without looking at the board, name every square it could go to on an empty board: c3, c5, d2, d6, f2, f6, g3, g5. In a real position, a friendly piece on a destination square prevents that move. A knight jumps over intervening pieces, but it still cannot move if doing so leaves its own king in check.

#### Common mistake

- Raising the difficulty while you still mix up squares regularly.

#### Check yourself

**Question:** Why show the board again after an imagined move?

**Answer:** So you don’t lock in a wrong mental picture of the position.

#### Practice it

- **Look Ahead** (`/practice/look-ahead`): Hold the position in your head as the tree grows move by move.
- **Mate in 3** (`/practice/mate-in-three`): Calculate the whole mating line before you move.

#### Further reading

- *Blindfold Chess: History, Psychology, Techniques, Champions, World Records, and Important Games*, Eliot Hearst and John Knott, blindfoldchess.net: https://www.blindfoldchess.net/
- *Blindfold Chess – history, psychology, champions, records*, ChessBase, ChessBase news: https://en.chessbase.com/post/blindfold-che-history-psychology-champions-records/1

---

### 19. Practical chess improvement

`slug: practical-improvement`

Inspired by: Yevhenii Yelisieiev · Category: Self-improvement · Skill: Turning your mistakes into training · Rating: 1000–1800 · Time: 20 min

#### Why do players stop improving?

Many players play regularly, solve puzzles and watch training videos, yet their rating stays about the same for a long time.

The problem is often not too little training but training that does not target their own specific weaknesses. For example, a player may study new openings every day while most of their losses come from dropping pieces in the middlegame.

To improve, find your own mistakes, understand why they happen and train the matching skill on purpose.

#### Four parts of effective training

##### Deliberate thinking

Don’t play the first attractive move on autopilot. Before you decide, ask yourself:

1. What is my opponent’s main threat?
2. Which pieces, mine and my opponent’s, are under attack?
3. Which moves would improve my position?
4. How will my opponent reply?

The goal is a habit: think before every important decision.

##### Focused calculation

Calculation is not an attempt to foresee every possible move. First find the promising candidate moves, then check your opponent’s most important replies.

For example, if you can sacrifice a bishop for an attack, don’t rush. Check whether your opponent has a defense after which the attack fades. Look hardest at the replies that break your original idea.

##### Practical understanding of the position

A good move does not have to create an immediate threat. Sometimes the best decision is:

- Moving a knight to a stronger square.
- Making your king safer.
- Protecting a weak pawn.
- Preparing a favorable trade.
- Preparing a pawn break.

Learn to say which problem each of your moves solves.

##### Analyzing your own mistakes

After a game, don’t stop at the engine’s evaluation. Find the moment your plan stopped working and ask yourself three questions:

1. What was I trying to achieve?
2. Which of my opponent’s options did I miss?
3. What knowledge or skill would have helped me avoid the mistake?

Your answers should decide what you train next.

#### How to build your own training cycle

Organize your improvement in five stages:

1. Play a few serious games. Choose a time control that gives you time to think, for example 15+10 or longer.
2. Analyze the games on your own. Mark the positions where you hesitated, went wrong or did not understand the plan.
3. Check your analysis with an engine. Find the chances you missed.
4. Name the weakness that keeps coming back, for example shallow calculation, weak endgame technique or a poor grasp of pawn structures.
5. Do targeted training on it. Then play new games and check whether mistakes of this type have become rarer.

Keep stages 2 and 3 in that order. Your own analysis shows what you saw and thought at the board; seeing the engine’s line can color your memory of what you originally considered. Record your thoughts first so you can compare them honestly.

#### A practical example

Imagine you have lost three games in a row. In the first, you missed your opponent’s knight fork. In the second, you lost a rook to a pin. In the third, you overlooked a mate threat.

At first glance these are different mistakes. But they may share one cause: you did not check your opponent’s threats carefully enough.

In that case it is more useful to train a tactical check before every move (what checks, captures and threats will my opponent have?) than to add a new opening to your repertoire.

#### Exercise: Exercise

Analyze your last five games. For each one, find:

- The most important mistake.
- Why it happened.
- The skill you were missing.
- An exercise that would help fix the problem.

Then pick one skill to train over the next week. Don’t try to fix every weakness at once: work steadily on the most important one.

#### Questions to check yourself

1. **Why does playing a lot of games not always bring progress?**
   Answer: Without analysis, more games often just repeat the same mistakes. Progress comes when you find your specific weaknesses and train them on purpose.
2. **Why should you analyze on your own before looking at the engine?**
   Answer: Your own analysis shows what you saw and thought during the game. Seeing the engine’s line can color your memory. Writing down your original reasoning first makes the comparison more reliable.
3. **What matters more in calculation: finding many moves or carefully checking the promising ones?**
   Answer: Carefully checking the promising ones, especially the replies that break your idea. Calculation is not an attempt to foresee every possible move.
4. **How do you know which topic to train next?**
   Answer: Look for the weakness that keeps coming back across several of your games. The three questions you ask after each game point to it.
5. **Why look for the causes of repeated mistakes?**
   Answer: Mistakes that look different, like a missed fork, a pin and a mate threat, can share one cause. Training against that cause helps with all of them at once.

#### Key takeaway

> Chess progress begins when every game becomes a source of information and every training session targets one specific weakness.

#### Practice it

- **Analysis board** (`/library/board`): Analyze your own game first, then turn on the engine and compare.
- **My games** (`/library/saved`): Go through your last five games and look for the mistake that keeps coming back.
- **Tactics** (`/practice/tactics`): If the weakness you found is tactical, train it here with a threat check before every move.

#### Further reading

- *Journey to Grandmaster*, IM Yevhenii Yelisieiev, Official website: https://www.journeytograndmaster.com/

---

## Ukrainian chess school

Lessons inspired by players and coaches of the Ukrainian chess school.

### 20. How to find a strategic plan

`slug: strategic-plans`

Inspired by: Martyn Kravtsiv · Category: Strategy · Skill: Choosing a plan when no tactic is in sight · Rating: 1300–2000 · Time: 15 min

#### Why is a plan hard to find?

A puzzle often tells you “mate in two”, so you already know what to look for. In a game nobody tells you whether a tactic exists. Sometimes the best move is a quiet knight reroute or the preparation of a pawn break.

Strategy starts with the question “What in this position matters for a long time?”, not “What can I attack right now?”. Weak squares, open files, bad bishops and strong knights point the way.

#### Five features to look at

##### Weak squares

A strategically weak square is one the defending side cannot easily control with pawns and the opponent may be able to use. For example, with Black’s c- and e-pawns on c5 and e5, neither can attack d5. That makes d5 a potential white outpost. Still check whether Black has another pawn on c6 or e6, can change the structure through captures, or can exchange a piece occupying d5. A square without pawn protection is not automatically usable or decisive.

A weak square only matters if one of your pieces can use it.

##### Piece activity

Compare not only material but how many useful squares each piece controls. A bishop shut in by its own pawns can be worth less than a knight on a central outpost.

##### Pawn breaks

A pawn advance can open a file or change the structure so that passive pieces come to life. Don’t push a pawn just to do something: first ask which line or square it will open, for you and for your opponent.

##### Where the kings are

A plan against a king safely castled behind intact pawns is different from a plan against a king still stuck in the center.

##### Possible trades

Judge a trade by what the pieces do, not by their nominal value. A bishop and a knight are both worth about three pawns, but if you give your active bishop for your opponent’s passive knight, you can lose important pressure.

#### How to choose a plan

1. Safety: is there a check, a capture or a tactical threat for either side? If so, calculate it first.
2. Read the structure: which pawns are backward, isolated or weak, and where is a pawn break possible?
3. Find your worst piece: which piece has no useful job?
4. Form two plans, for example taking an open file or preparing a pawn break.
5. Choose the plan your opponent will find hardest to stop: check their strongest reply.
6. Find the first concrete move. A plan is made of real moves, not of the words “improve the position”.

#### An example of thinking

Imagine a quiet position. White has two rooks, one of them on the half-open c-file. Black has a weak pawn on c6. There is no immediate combination.

Poor reasoning: “I must attack the pawn at any cost.”

Better reasoning: “Can I double my rooks on the c-file? How many times is c6 defended, and can I attack it once more? Will my maneuver give Black’s knight a strong square?” If direct pressure gives nothing, first improve your worst-placed piece.

A plan is worth something when you can explain how it improves your position and what your opponent will do in reply.

#### Exercise: Exercises

##### Exercise A: Two plans

Take a quiet position from one of your own games. Write down two realistic plans, the advantage of each and your opponent’s best reply to each.

##### Exercise B: Trade or not?

Find a position where you can trade a bishop for a knight. Explain whose piece is more active, which squares the trade will weaken and what happens to the pawns.

##### Exercise C: A weakness and how to use it

Find a weak pawn or square. Name two or three possible moves that increase the pressure on it, then check them on the analysis board.

#### Questions to check yourself

1. **Why, in a quiet position, is it often more important to assess weak squares than to look for an immediate attack?**
   Answer: A sound attack needs useful lines, targets and enough active pieces. Weak squares and pawns can suggest how to build those conditions even when no immediate combination exists.
2. **Why is not every trade that is even in material a good one?**
   Answer: Pieces of equal value can do very different jobs. Trading your active piece for a passive one can cost you pressure the material count does not show.
3. **What does “a plan must have a first concrete move” mean?**
   Answer: You should be able to name the move that starts the plan now. “Improve the position” without a move is a wish, not a plan.
4. **When should a strategic decision wait for tactical calculation?**
   Answer: Whenever either side has a check, a capture or a direct threat. Calculate it first: a good plan is worth nothing if you lose material on the next move.

#### Key takeaway

> First understand the features of the position, then choose a goal, and only then look for the move.

#### Practice it

- **Positional games** (`/library/games?category=positional`): Stop before a quiet move, name the weak squares and the worst piece, then guess the plan.
- **Analysis board** (`/library/board`): Set up a quiet position from your game, write two plans and check the first move of each with the engine.

#### Further reading

- *400 Chess Strategy Puzzles*, Martyn Kravtsiv, Google Books (Gambit, 2024): https://books.google.com/books/about/400_Chess_Strategy_Puzzles.html?id=zNFW0AEACAAJ

---

### 21. Find the best move without a hint

`slug: positions-without-hints`

Inspired by: Vladimir Grabinsky · Category: Practical play · Skill: Recognizing what kind of decision a position needs · Rating: 1400–2200 · Time: 15 min

#### The trap of themed puzzles

If the diagram says “find the queen sacrifice”, half the work is done for you: your brain starts looking for sacrifices. A real game may have no combination at all. You have to decide for yourself whether to attack, defend, simplify or play positionally.

That is why it pays to solve positions without a theme: no “tactics”, “endgame” or “mate” label. The goal is to make training closer to making decisions at the board.

#### The first question: what has changed?

Your opponent has just moved. Before you suggest your own move, find out:

- What did the move start to attack or defend?
- Which lines did it open or close?
- Is anything left unprotected?
- Has a tactical resource appeared?
- Have the possible pawn breaks changed?

Even a quiet move can change the plans of both sides.

#### Tell four kinds of decision apart

Tactical: find a concrete sequence of checks, captures and threats. One mistake in the line can lose material at once.

Defensive: stop the most important threat, bring a piece back into play, trade your opponent’s attacking piece or create a counter-threat.

Positional: find a better route for a piece, take an open file, improve the pawn structure.

Technical: convert an advantage, often in the endgame: choose the right trade, activate the king, create a passed pawn.

A position does not always need just one kind: a strong defensive move can create a tactical threat at the same time.

#### A working routine

1. Establish the material balance and how safe both kings are.
2. Name your opponent’s most dangerous idea.
3. Make a short list of candidates: one forcing move and one defensive or positional move, if they really exist.
4. Calculate concrete lines for the most promising candidates.
5. Evaluate the final positions: material, activity, kings, pawns.
6. State your conclusion in your own words: “I play X because…; on Y I answer Z.”

#### An example of thinking

Your opponent has just offered a queen trade. You have a small space advantage but a backward pawn.

Don’t decline the trade automatically because “attacking with queens is more fun”. And don’t accept it automatically because “the endgame is simpler”.

First compare the two outcomes. Will your weak pawn be easier to attack after the trade? Will your king become more active? Who will control the open files? The decision comes from the concrete position.

#### Exercise: Exercises

##### Exercise A: No theme

Pick 5 positions at random from different stages of your own games. Don’t look at the analysis. For each one, first name the kind of decision it needs, then choose a move.

##### Exercise B: Defense or counterattack?

In a position where your opponent threatens to win material, compare a direct defense with an active counter-threat. Find your opponent’s strongest reply to both.

##### Exercise C: Explain your answer

Choose a move and explain it in no more than two sentences. Then check with an engine that you have not missed a tactical refutation.

#### Questions to check yourself

1. **Why does the word “mate” above a puzzle help you solve it but make the training less like a game?**
   Answer: It tells you what kind of solution to look for, so you skip the hardest step: deciding what the position needs. In a game nobody tells you whether a combination exists.
2. **When can declining a queen trade be a mistake?**
   Answer: When the endgame suits you: your king becomes active, you control the open files and your weak pawn is no easier to attack. Declining only to keep attacking chances ignores the position.
3. **Why do positional problems sometimes have several acceptable moves?**
   Answer: In a quiet position no forced line decides the game, and several moves can serve the same sound plan equally well. What matters is the idea and that the move allows no tactic.
4. **What should you evaluate when a calculated line ends?**
   Answer: The final position: material, piece activity, king safety and pawns. Stopping at the last capture without judging the position is not a finished calculation.

#### Key takeaway

> In a real position, first understand the problem, and only then look for its solution.

#### Practice it

- **Good moves** (`/practice/good-moves`): Random positions with no theme shown: name the kind of decision before you choose a move.
- **Daily puzzle** (`/practice/daily`): Before you solve, decide whether the position needs an attack, a defense or a quiet move.
- **Critical decisions** (`/practice/good-moves?category=criticalDecision`): Positions where one decision matters: attack, defend, improve or simplify?

#### Further reading

- *Perfect Your Chess*, Andrei Volokitin and Vladimir Grabinsky, Google Books (Gambit, 2007): https://books.google.com/books/about/Perfect_Your_Chess.html?id=X9eIGAAACAAJ
- *Vladimir Grabinsky: biography*, Vladimir Grabinsky, Coach’s website: https://www.grandcoach.com/en/coach/biography/

---

### 22. When is a sacrifice justified?

`slug: sacrifice-compensation`

Inspired by: Andrei Volokitin · Category: Attack · Skill: Judging concrete and positional compensation · Rating: 1500–2200 · Time: 18 min

#### Material is not the only value

The queen, rooks, bishops, knights and pawns have rough values, but chess is not just counting points. A sacrifice can be justified if you get something real in return: a mating attack, time, strong passed pawns, active pieces.

Still, the words “initiative” and “pressure” do not make every sacrifice correct. Giving up material without a convincing follow-up is usually dangerous.

#### Tell three kinds of sacrifice apart

Use these descriptions to explain your idea. Tactical and positional describe the compensation; speculative describes your uncertainty about it. They can overlap.

##### Tactical sacrifice

The justification is a concrete forcing sequence: checkmate, a material gain, a favorable resulting position or a forced draw when you need one. Here exact calculation decides. Recovering the sacrificed material alone does not prove the resulting position is good.

##### Positional sacrifice

You give up material for long-term advantages, such as a strong outpost, active pieces or a broken pawn shield around the enemy king. There may be no forcing sequence that recovers the material or settles the result. You still need concrete calculation, then an assessment of what lasts and how the opponent can defend.

##### Speculative sacrifice

You give up material without being certain that the compensation is sufficient. The sacrifice may turn out to be sound or unsound. Practical difficulty for the defender is a factor, but hoping for a mistake is not evidence that the sacrifice works.

#### Four signs of real compensation

- Activity: do your pieces get more useful squares and gain tempi after the sacrifice?
- The enemy king’s safety: can you calculate concrete, dangerous threats, rather than just point at an exposed king?
- Time: does your opponent have to answer your threats for several moves, with no chance to finish development?
- Durability: does the compensation remain if your opponent plays the strongest defensive moves, offers trades or gives material back?

The last question matters most. If one calm defensive move leaves you without the material and without an attack, the sacrifice is probably a mistake.

#### How to test a sacrifice

1. Name the concrete goal of the sacrifice: mate, gaining time, creating a passed pawn, taking an open file.
2. Look not only at accepting the sacrifice but also at declining it.
3. After it is accepted, calculate the strongest defensive replies.
4. Find the position where the forcing moves run out. Is the compensation enough there?
5. Check whether a simpler move without a sacrifice keeps your advantage.

#### An example of thinking

A training situation: you can give up a pawn to open a file toward the enemy king, but your opponent can bring one piece back to defend.

Weak reasoning: “Open files are always strong.”

Better reasoning: “After the pawn is taken, my rook gets the g-file and my bishop controls an important diagonal. But can my opponent cover the entry square in time? What happens if the knight goes back to the king?”

Judge the concrete speed of the attack against the speed of the defense: count how many moves each side needs. The beauty of the sacrifice is not an argument.

#### Exercise: Exercises

##### Exercise A: Material against initiative

Find a position in your own games where you could give up a pawn. Write down two lines: the sacrifice accepted and the sacrifice declined. In each, name the compensation that is left.

##### Exercise B: The best defense

Before you analyze any sacrifice, take your opponent’s side. Name three defensive ideas yourself, then check them with an engine.

##### Exercise C: Is the sacrifice needed?

Compare the sacrifice with a quiet alternative. Calculate the forcing replies before judging either option. Stop at a position you can reasonably evaluate, not after a fixed number of moves. If the position remains unclear, name the uncertainty instead of claiming the sacrifice works.

#### Questions to check yourself

1. **How is a tactical sacrifice different from a positional one?**
   Answer: A tactical sacrifice has a concrete forcing justification, which may also be a forced draw. A positional sacrifice relies on lasting compensation without a forcing sequence that settles the outcome. Both require calculation; positional sacrifices also require an evaluation of the remaining imbalance.
2. **Why should you check your opponent declining the material?**
   Answer: Your opponent does not have to accept. Declining may avoid the attack, but may also concede space or time. Evaluate both choices. A sound offer need not win when declined; it must still leave an acceptable result for the goal of the sacrifice.
3. **Which sign shows that the compensation may not last?**
   Answer: One calm defensive move, a trade of your attacking pieces or giving the material back leaves you with neither the material nor an attack.
4. **Can you call a sacrifice objectively correct just because your opponent did not refute it?**
   Answer: No. Your opponent may simply have missed the defense. A sacrifice is correct only if it holds against the strongest defense.

#### Key takeaway

> A good sacrifice has a concrete justification that holds up against the strongest defense.

#### Practice it

- **Games with sacrifices** (`/library/games?theme=sacrifice`): For each sacrifice, identify the tactical or positional compensation and explain whether its justification was clear or speculative.
- **Look Ahead** (`/practice/look-ahead`): Calculate to the point where the forcing moves run out, then judge the position there.
- **Analysis board** (`/library/board`): Set up a sacrifice from your own game and test it against your opponent’s three best defenses.

#### Further reading

- *Perfect Your Chess*, Andrei Volokitin and Vladimir Grabinsky, Google Books (Gambit, 2007): https://books.google.com/books/about/Perfect_Your_Chess.html?id=X9eIGAAACAAJ

---

### 23. The art of maneuvering

`slug: piece-maneuvering`

Inspired by: Adrian Mikhalchishin · Category: Strategy · Skill: Improving how your pieces work together · Rating: 1300–2000 · Time: 15 min

#### What a maneuver is

A maneuver is a purposeful series of moves that brings a piece to a better square or helps another piece do its job.

Not every win starts with a combination. Often a strong player frees their pieces step by step until the opponent runs out of comfortable ways to defend.

#### Start with your worst-placed piece

Your queen and rook may be active while a knight stands on the edge of the board with no real target. Ask:

- Which of my pieces takes the least part in the game?
- Which square would make it more useful?
- Is there a safe route to that square?
- Can I afford the time to get it there?

Don’t improve a piece while your opponent threatens mate or to win material. Always check the tactics first.

#### Typical strategic maneuvers

##### Rerouting a knight

A knight is often effective on an outpost: a useful advanced square that enemy pawns cannot readily challenge, ideally supported by your pawn. Check whether an enemy piece can exchange it and whether it has useful targets. In closed positions it often needs three or four moves to get there, so plan the whole route. A classic example is the Ruy Lopez regrouping Nb1–d2–f1–g3.

##### Opening a diagonal for a bishop

A bishop often looks passive not because it is weak, but because pawns block its diagonal. Before you look for a bishop move, consider preparing a pawn advance or a trade that opens the diagonal, or bringing the bishop outside its pawn chain.

##### Taking an open file

A rook is usually more active on an open file. But occupying the file is not enough: you need to know where the rook can invade, often the seventh rank, and what exactly it will attack there.

##### Creating a second weakness

If your opponent has reliably defended one weak point, move the fight to the other flank. Then the defenders have to split their forces between two tasks.

#### How to judge a maneuver

Check four things:

1. Goal: what does the piece gain on its new square?
2. Route: how many moves does it take, and which squares must the piece pass?
3. Cost in time: what can your opponent do meanwhile?
4. Stability: can your opponent easily drive the piece away from its new square?

If tactical threats appear along the way, change the maneuver.

#### An example of thinking

A training position: White has a knight on a3, and the central square d5 could become an outpost. The route a3–c4–e3–d5 looks attractive, but check it square by square. A black pawn already on b5 attacks c4, so the knight may be captured there. A black pawn able to reach c6 or e6 could challenge d5. Also check whether a threat appears on the other flank during those three moves. If c4 is unsafe, the route a3–c2–e3–d5 takes just as long. It is an alternative only if every landing square is available and safe when the knight reaches it.

A plan with a beautiful end square does not work if its route is tactically impossible. A strong maneuver is a real path, not just a desired square. Maneuvering is a steady fight for useful squares, not moving pieces around at random.

#### Exercise: Exercises

##### Exercise A: The worst piece

In three quiet positions from your own games, find your least active piece. Suggest one concrete route to improve it.

##### Exercise B: Two weaknesses

Find a position where your opponent has one obvious weakness. Explain how creating a second weakness could increase the pressure.

##### Exercise C: Time matters

Compare a short maneuver with a long one. Which keeps the initiative better? Does your opponent have a forcing reply that ruins the plan?

#### Questions to check yourself

1. **Why can a piece on an active square matter more than a pawn advance?**
   Answer: A pawn move cannot be taken back and may leave weak squares behind, while a better piece adds pressure and keeps your structure flexible. A pawn break often works only once the pieces are ready.
2. **How is a good outpost for a knight different from a temporary square?**
   Answer: A useful outpost is difficult for enemy pawns to challenge and ideally has friendly pawn support. That makes it stable against pawn attacks, but an enemy piece may still exchange the knight. Check its targets and the consequences of that exchange.
3. **Why create a second weakness?**
   Answer: A second target can stretch defenders, especially if your pieces can switch between targets faster than theirs. It creates chances to break through, not a guaranteed win. Both targets must be accessible.
4. **What makes a maneuver too slow?**
   Answer: Too many moves on the route, an opponent who uses that time for a break or an attack, or a target square they can take away before your piece arrives.

#### Key takeaway

> Improve your pieces with a concrete goal, and count the time it takes.

#### Practice it

- **Positional games** (`/library/games?category=positional`): Follow one piece through a game: where did it start, where did it go, and why?
- **Endgame games** (`/library/games?category=endgame`): Watch how the winner brings the king and pieces closer and creates a second weakness.
- **Analysis board** (`/library/board`): Pick your worst piece, choose a target square, and check the route square by square.

#### Further reading

- *Adrian Mikhalchishin*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Adrian_Mikhalchishin

---

### 24. Disciplined calculation

`slug: calculation-discipline`

Inspired by: Mykhaylo Oleksiyenko · Category: Calculation · Skill: Calculating lines without confusion or wishful thinking · Rating: 1400–2200 · Time: 20 min

#### Why “I saw everything” is not a reliable answer

A player often says: “I calculated this line.” Then the analysis shows they only pictured their own strong moves. They missed the opponent’s best reply, and by the end of the line some pieces stood on the wrong squares in their head.

Calculation is not quickly imagining a combination. It is a disciplined check of a concrete sequence of moves.

#### Separate choosing candidates from calculating

Before you go deep into a line, make a short list of promising moves. Otherwise you can spend a lot of time on the first attractive idea and forget a better alternative.

A rough order:

1. Check your opponent’s immediate threat.
2. Note the checks, captures and other forcing moves for both sides.
3. Choose 2–3 candidates, if the position gives you a choice.
4. For each one, look for your opponent’s best reply.
5. Compare the final positions.

In a forced situation there may be only one legal or acceptable move. Don’t invent alternatives for the sake of it.

#### Keep the board in your head accurate

When you calculate without moving the pieces, check with special care:

- Which pieces have already been traded.
- Which lines the pawns have opened or closed.
- Which pieces are left unprotected after each capture.
- Which squares a piece that has moved no longer guards.
- In-between moves, especially checks.
- Whose move it is in the final position.

If you lose the thread, go back to the last position you remember for certain. A short line calculated correctly is worth more than a long one with a mistake in it.

#### A tree of lines without chaos

Don’t try to calculate ten random branches at once.

For each candidate, pick your opponent’s most important replies: checks, captures, strong defensive moves. If one reply refutes your idea and you have no adequate answer, you can drop the candidate. In a worse position, keep it for comparison if the alternatives may be worse still. If the line stays promising, check it deeper.

Aim to reach a stable position you can evaluate, after checking forcing replies and important quiet defenses. Sometimes your clock or the complexity prevents that. Mark the line as uncertain and compare its risks with the alternatives rather than pretending it is settled.

The most dangerous mistake is to stop the moment your own move looks good, before you have checked your opponent’s reply.

#### Evaluate the final position

Calculation does not end with “I win a pawn.” Find out:

- Is my king in danger?
- Has one of my pieces been left defenseless?
- Who has the initiative?
- Can the extra material actually be converted?
- Does my opponent have counterplay: passed pawns or a perpetual check?

Only then compare the candidates.

#### A sample training routine

Take a complex position from a real game that you have not analyzed yet.

- 2 minutes: write down the candidates.
- 5 minutes: calculate the most important branches without moving the pieces.
- 2 minutes: write down your final evaluations and choose a move.
- After you decide: check the lines on a board and with an engine.

The times are an example, not a universal norm. For harder positions, give yourself more.

#### Exercise: Exercises

##### Exercise A: Write the line down

Pick a position with two plausible candidates. Write down both branches move by move without moving the pieces. Then play them out on a board: check that every move is legal and that the final position is the one you pictured.

##### Exercise B: The strongest defense

Find a tactical position with a tempting check or sacrifice. Take your opponent’s side and look for the most accurate defense.

##### Exercise C: Evaluate the end

After each branch you write down, give a short verdict: White is better, roughly equal or Black is better. Then explain why.

#### Questions to check yourself

1. **Why find candidates before you calculate deeply?**
   Answer: Otherwise you can spend your time on the first attractive idea and never look at a better alternative. A short list keeps the calculation focused.
2. **What does it mean to calculate “for your opponent”?**
   Answer: At every step, look for your opponent’s best reply, as if they knew your idea and wanted to refute it, not the reply you hope for.
3. **When can a line be considered checked well enough?**
   Answer: When you have answered your opponent’s checks, captures and strong defenses and reached a quiet position you can evaluate, not just a moment where your own move looks good.
4. **Why does winning a pawn not always mean a better position?**
   Answer: Your king may be in danger, a piece may be left defenseless, or your opponent may get the initiative, passed pawns or a perpetual check. Evaluate the whole final position, not just the material.

#### Key takeaway

> Good calculation means accuracy, checking the strongest defense and a reasoned evaluation of the final position.

#### Practice it

- **Look Ahead** (`/practice/look-ahead`): Build the tree with your opponent’s best reply at every step, then evaluate the final position.
- **Mate in 3** (`/practice/mate-in-three`): Calculate the whole line against every defense before your first move.
- **Tactics** (`/practice/tactics`): Before you move, look for the strongest defense against your idea.

#### Further reading

- *Mykhaylo Oleksiyenko*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Mykhaylo_Oleksiyenko

---

### 25. How to stop repeating mistakes

`slug: stop-repeating-mistakes`

Inspired by: Igor Smirnov · Category: Practical play · Skill: Cutting repeated mistakes with a short pre-move check · Rating: 900–1700 · Time: 15 min

#### Why mistakes repeat

Many players have knowledge they don’t use at the board. They easily solve a simple double attack in a puzzle but miss the same motif in their own game.

The cause is sometimes not a lack of knowledge but inconsistent thinking: the player starts carrying out their own plan without checking what their opponent’s last move changed.

To make fewer mistakes, you need a simple habit that you can really repeat throughout the game.

#### The pre-move check

1. Look at your opponent’s threats. Is there a check, a capture, a mating idea or an attack on an unprotected piece?
2. Find your own options. Do you have a check, a good capture, a threat or a useful positional move?
3. Check the most dangerous reply. Imagine that your opponent knows your idea and wants to refute it.
4. Look at unprotected pieces. After the move you have chosen, will a piece or pawn be left open to a favorable capture or tactic? An undefended piece is not necessarily hanging, and a defended piece may still be lost if its defender is pinned or overloaded. Remember that the piece you move stops guarding its old squares.
5. Only then make the move.

A short check that you actually do beats a long list you run through mechanically. It does not guarantee that you won’t make mistakes, but it helps you notice obvious threats earlier.

#### The most common causes of blunders

##### “I only saw my own idea”

You wanted to attack the queen, but your opponent had an in-between check. Fix: before you move, find the strongest reply.

##### “I forgot about an unprotected piece”

The piece stood unprotected for several moves and you got used to it. Fix: keep track of which of your pieces are unprotected, and look again every time a pawn move or a trade opens a diagonal or a file.

##### “I rushed because of the clock”

In time trouble you can’t calculate everything. Fix: even when time is short, keep a minimum check: checks, captures, direct threats.

##### “I stopped thinking after a mistake”

After losing a pawn, you want to win it back at once. Fix: evaluate the position afresh and play the best move available, not the most emotional one.

#### Analyze the cause, not just the result

After the game, the engine shows you the mistake. Your next question is: “Why exactly did I make it?”

Write down one of the causes:

- I missed a threat.
- I calculated a line wrongly.
- I misjudged the position.
- I lost focus.
- I managed my time badly.

The same drop in the engine’s evaluation can come from different causes, so the way to train will be different too.

#### Build a correction cycle

1. Play a few games with enough time to think.
2. From each one, pick the single most instructive mistake.
3. Find the cause that repeats.
4. Do a short block of training on exactly that problem.
5. Play new games and check whether mistakes of that kind have become rarer.

Don’t judge success by results alone. You can lose to a strong opponent yet play more carefully and make fewer blunders.

#### Exercise: Exercises

##### Exercise A: Threat check

Take ten positions from your games or puzzles, each one right after your opponent’s move. In each, first write down your opponent’s most dangerous idea. Only then look for your move.

##### Exercise B: Think for your opponent

In your games, before you make the move you have chosen, identify the reply you think is strongest. After the game, compare it with the analysis.

##### Exercise C: A log of repeats

For one week, tag every blunder with one type: threat, calculation, evaluation, focus or time. At the end of the week, pick one topic for the next.

#### Questions to check yourself

1. **How is missing a threat different from a mistake in a complex calculation?**
   Answer: Missing an immediate threat may mean you skipped a safety check or did not recognize the pattern. A calculation mistake may involve a missed reply, a wrong move order or an inaccurate mental position. These can overlap. Train the actual cause, not just the label.
2. **Why put yourself in your opponent’s place before you move?**
   Answer: To find the reply that refutes your idea. If you look only at your own plan, it is easy to miss an in-between check or a counterattack.
3. **Why doesn’t the engine’s evaluation alone explain the cause of a mistake?**
   Answer: It shows how much the move cost, not why you played it. The same drop can come from a missed threat, a wrong calculation, a misjudgment, a lapse in focus or time trouble.
4. **How can you tell whether your training has helped?**
   Answer: Play new games and see whether mistakes of the type you trained have become rarer. The result of a single game is not the measure.

#### Key takeaway

> Steady progress begins with checking your own decisions the same way, move after move.

#### Practice it

- **Tactics** (`/practice/tactics`): One try per puzzle: run the pre-move check before every answer.
- **Daily puzzle** (`/practice/daily`): One puzzle a day: first name your opponent’s most dangerous idea, then find your move.
- **My games** (`/library/saved`): For each recent game, write down the cause of the main blunder and look for the one that repeats.

#### Further reading

- *GM Igor Smirnov: biography*, Remote Chess Academy, Remote Chess Academy: https://chess-teacher.com/gm-smirnov/

---
