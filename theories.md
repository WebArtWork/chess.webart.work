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

### 1. Chess basics: moves, values and notation

`slug: chess-basics`

Category: Rules and notation · Skill: Moving the pieces and writing a game down · Rating: 0–1000 · Time: 20 min

#### About the notation in this app

This app writes moves in English algebraic notation in every language: K king, Q queen, R rook, B bishop, N knight. Ukrainian books often use other letters (Кр, Ф, Т, С, К), but the system is the same. Learn one set of letters and use it everywhere here.

#### Main idea

Before tactics and plans, you need three things to be automatic: how each piece moves, roughly what each piece is worth, and how to read and write a move.

Notation is how chess players talk to each other. It lets you replay any game from a book, record your own games and find your mistakes later.

#### The board

The board has 64 squares. Place it so that each player has a light square in the right-hand corner.

Files are the columns, named a to h from White’s left to right. Ranks are the rows, numbered 1 to 8 from White’s side. Every square has a name: file first, then rank, like e4 or g7.

White’s pieces start on ranks 1 and 2, Black’s on ranks 7 and 8. The queen starts on a square of her own color: the white queen on d1, the black queen on d8. White moves first.

#### How each piece moves

No piece may move onto a square taken by one of its own pieces. A piece captures by moving onto an enemy piece’s square, which removes that piece from the board.

##### King (K)

One square in any direction. The king may never move onto a square the opponent attacks.

##### Queen (Q)

Any number of squares in a straight line: along a rank, a file or a diagonal. She cannot jump over pieces.

##### Rook (R)

Any number of squares along a rank or a file, until a piece is in the way.

##### Bishop (B)

Any number of squares diagonally. A bishop stays on squares of one color for the whole game, so each side has a light-squared and a dark-squared bishop.

##### Knight (N)

In an L: two squares in one direction, then one square to the side. The knight is the only piece that jumps over other pieces. It always lands on a square of the other color.

##### Pawn (no letter)

One square straight forward; from its starting square it may move one or two. It captures one square diagonally forward. A piece right in front of a pawn blocks it. Pawns never move backward.

#### Special moves

##### Castling

The king moves two squares toward a rook, and that rook jumps to the square the king crossed. Kingside castling (with the h-rook) is short, queenside castling (with the a-rook) is long.

- Neither the king nor that rook has moved yet.
- The squares between them are empty.
- The king is not in check, and it does not cross or land on a square the opponent attacks.

##### Promotion

A pawn that reaches the last rank becomes a queen, rook, bishop or knight of the same color, as you choose. Almost always a queen. You may have two queens or more.

##### En passant

If an enemy pawn moves two squares from its starting square and lands right beside your pawn, your pawn may capture it as if it had moved only one square. You may do this only on the very next move.

#### Check, checkmate and stalemate

- Check: the king is attacked. You must get out of check at once: move the king, capture the attacker or block the line.
- Checkmate: the king is in check and there is no way out. The game is over; the side that gave mate wins.
- Stalemate: the side to move is not in check but has no legal move. The game is a draw, even if one side has far more material.

#### What the pieces are worth

Points help you judge a trade. Count what you give and what you get.

- Pawn: 1
- Knight: 3
- Bishop: 3
- Rook: 5
- Queen: 9
- King: no points. It is never traded; losing it means losing the game.

So giving a rook (5) for a knight (3) loses 2 points, and a knight and a bishop together (6) are usually worth more than a rook (5).

Points are a guide, not a law. An active piece is worth more than a passive one, two bishops work well together, and checkmate counts more than any material.

#### How a move is written

A move is written as the piece letter and the square it goes to: Nf3 means a knight moves to f3. Then a few signs are added when needed:

- Pawn moves have no letter, just the square: e4.
- x is a capture: Bxc6. A pawn capture starts with the file the pawn came from: exd5.
- + is check: Qh5+. # is checkmate: Qxf7#.
- O-O is kingside castling, O-O-O is queenside castling.
- =Q is promotion: e8=Q means the pawn reaches e8 and becomes a queen.

#### When two pieces can go to the same square

Sometimes two pieces of the same kind can reach the same square. Then Rd1 is not enough: we add just enough to show which one moves.

1. If they stand on different files, add the file of the piece that moves. Rooks on a1 and f1, the a1-rook goes to d1: Rad1. Knights on b1 and f3, the b1-knight goes to d2: Nbd2.
2. If they stand on the same file, add the rank instead. Rooks on a1 and a5, the a1-rook goes to a3: R1a3. Knights on g1 and g5, the g5-knight goes to f3: N5f3.
3. Only if neither the file nor the rank alone is enough, write the whole starting square. With queens on e4, h4 and h1, the h4-queen to e1 is Qh4e1. This is rare.
4. Captures and checks keep their signs: Raxd8# means the a-file rook captures on d8 with checkmate.

Add the extra letter or number only when it is needed. If only one rook can reach d1, write Rd1.

#### Writing down a game

Each move number covers one move by White and one by Black. Three dots after the number mean a move by Black written on its own. A result closes the record: 1-0 White won, 0-1 Black won, ½-½ a draw.

Here is the shortest common trap, the Scholar’s Mate, written down and explained:

- 1.e4 e5: both players move the king’s pawn two squares.
- 2.Bc4 Nc6: White’s bishop aims at f7; Black develops a knight.
- 3.Qh5 Nf6??: the queen also aims at f7. Black attacks the queen but misses the threat. ?? marks a blunder.
- 4.Qxf7#: the queen captures on f7, protected by the bishop. Checkmate, 1-0.

Comments after a move: ! a good move, !! a brilliant one, ? a mistake, ?? a blunder, !? interesting, ?! dubious.

3...g6 instead of 3...Nf6?? would have blocked the queen’s path to f7.

#### Common mistakes

- Writing the knight as K. K is the king; the knight is N.
- Adding P for pawn moves (Pe4). Pawn moves have no letter.
- Writing the square a piece comes from instead of the square it goes to.
- Writing Rd1 when both rooks can reach d1, or adding the file when only one can.
- Forgetting x, + or #. They help you read your own game later.
- Counting the king as material, or trading a rook for a knight because both are “just pieces”.
- Reading the board from the wrong side: from Black’s side, a1 is in the top-right corner.

#### Check yourself

**Question:** White has rooks on a1 and f1 and plays the f1-rook to d1. How is the move written?

**Answer:** Rfd1. Both rooks can reach d1 and they are on different files, so the file of the rook that moves is added.

#### Exercise: Exercise

Set up a board, or open the analysis board, and play through 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O.

Say every move aloud as you play it: which piece, from where, to where, and what each sign means.

Then play a short game against a friend or the app and write down every move on paper. Afterwards, replay it from your notes. If you cannot, find where the record went wrong.

#### Questions to check yourself

1. **Which piece can jump over other pieces?**
   Answer: Only the knight.
2. **You give a bishop and get a rook. Did you win or lose material?**
   Answer: You won about 2 points: a rook is 5, a bishop 3.
3. **What is the difference between O-O and O-O-O?**
   Answer: O-O is castling kingside (short, with the h-rook). O-O-O is castling queenside (long, with the a-rook).
4. **Two knights stand on g1 and g5, and the g1-knight goes to f3. How is it written?**
   Answer: N1f3. Both knights are on the g-file, so the rank of the moving knight is added.
5. **What does 15...Qxe4+ mean?**
   Answer: On Black’s 15th move, the queen captures on e4 with check.

#### Key takeaway

> Know how each piece moves and what it is worth, and write every game down: piece letter, square, and only the extra signs that are needed.

#### Practice it

- **Chess basics** (`/practice/chess-basics`): Multiple choice: how the pieces move, what they are worth and how moves are written, including two rooks on one line.
- **Try the exercise game** (`/library/board`): Open the analysis board, play 1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Bxc6 dxc6 5.O-O and watch how each move is written.
- **Mate in 1** (`/practice/mate-in-one`): Once the moves are easy: find the checkmate in one move.

#### Further reading

- *FIDE Laws of Chess, Appendix C: Algebraic notation*, FIDE, FIDE Handbook: https://handbook.fide.com/chapter/E012023

---

### 2. Tournament rules: formats, tiebreaks and the board

`slug: tournament-rules`

Category: Rules and notation · Skill: Knowing what to expect at a tournament · Rating: 0–1400 · Time: 20 min

#### About these rules

This lesson follows the FIDE Laws of Chess, which most tournaments use. Every event publishes its own regulations, and they can change details such as the time control, the tiebreak order and how late you may arrive. Read them before round 1: on the day, the regulations decide.

#### Main idea

A tournament is more than playing chess. You need to know how opponents are chosen, how the winner is decided, how the clock works and what you may and may not do at the board.

Most of the surprises in a first tournament come from small rules: a touched piece, a clock pressed with the wrong hand, a late arrival or a tiebreak nobody explained. This lesson covers the rules you will meet most often, so none of them costs you a game.

#### How to prepare for a tournament

1. Read the regulations: format, number of rounds, time control, tiebreak order and the late-arrival limit.
2. Check how pairings are published, and find your board and your color each round.
3. Practice your time control at home with a real clock, until pressing it is automatic.
4. Bring a pen, and a scoresheet if the organizers do not provide one. Switch your phone off completely and leave it in your bag.
5. Learn the board rules in this lesson, so that you never have to guess.

#### Example

Eight players, seeded 1 to 8 by rating, play three rounds of a Swiss tournament. In round 1 the top half meets the bottom half: 1 plays 5, 2 plays 6, 3 plays 7 and 4 plays 8. Seeds 1, 2, 7 and 4 win. Seed 7 beat the favorite, seed 3.

Now four players have 1 point (seeds 1, 2, 4 and 7) and four have 0 (seeds 3, 5, 6 and 8). In round 2 each group plays within itself: 1 plays 4, 2 plays 7, 3 plays 6 and 5 plays 8. Nobody meets an old opponent.

Say seed 1 beats seed 4 and seed 2 draws with seed 7. Seed 1 now has 2 points and nobody else does, so in round 3 they play someone with 1.5 points, a player who has not met them. This is called a float. With only three rounds, draws leave several players close to the lead, which is why tiebreaks matter.

#### 1. Tournament formats

The format decides who plays whom, and how many games you get.

##### Swiss system

The most common format for large events. The number of rounds is fixed in advance, and everyone plays every round, win or lose. Nobody is eliminated.

- Round 1: players are ordered by rating, and the top half plays the bottom half.
- Every later round: you are paired with someone who has the same score, or a close one. Strong players meet strong players as the event goes on.
- You never play the same opponent twice.
- Colors alternate as far as possible. Normally you do not get the same color three times in a row.
- If the number of players is odd, one player gets a bye, which counts as a point. Nobody gets two byes.

How many rounds? To be able to find one winner with a perfect score, you need enough rounds to cut the number of unbeaten players in half each time: 3 rounds for 8 players, 4 for 16, 7 for 100. Most real tournaments play 5 to 9 rounds.

##### Round robin

Everyone plays everyone once. With 10 players that is 9 rounds and 45 games. It is the fairest format, but it is slow, so it is used for small groups and invitational events. A double round robin gives each pair two games, one with each color.

##### Knockout

The loser of each match is out. Sixteen players need four rounds. A match usually has more than one game, for example two, one with each color. If the match is tied, a playoff with shorter games decides who goes through.

##### Team events and online arenas

In a team match, each player has a board number and plays the opponent on the same board. The result counts in two ways: game points for each board and match points for the whole team. Check which one decides the standings.

Online you will often find arena tournaments: play as many games as you can in a fixed time, and earn points for wins and winning streaks. They reward activity, not careful play.

#### 2. Scoring and tiebreaks

A win is 1 point, a draw is ½ and a loss is 0. If your opponent does not show up, you get a forfeit win, which also counts as 1.

At the end of a Swiss tournament, several players often share the same score. A tiebreak is a second number that separates them. The organizers announce the order in advance. The common ones:

- Buchholz: the sum of your opponents’ final scores. Playing stronger opponents counts for more. Some events use Buchholz Cut 1, which drops the lowest opponent score.
- Sonneborn-Berger: the scores of the opponents you beat, plus half the scores of those you drew with. It rewards wins over strong opponents.
- Direct encounter: the result of the game between the tied players.
- Number of wins: more wins ranks higher, because a win is harder to get than a draw.

Here is a Buchholz example. Anna and Bohdan both finish with 3 out of 5. Anna’s opponents scored 2, 3, 3, 4 and 1, so her Buchholz is 13. Bohdan’s opponents scored 1, 2, 2, 3 and 2, so his is 10. Anna ranks higher: she played the stronger field.

For Sonneborn-Berger, say Anna beat the opponents with 2 and 1 points and drew with the two with 3 points. Her score is 2 + 1 + 1.5 + 1.5 = 6.

If a title or a prize still needs a single winner, a playoff decides it, usually with blitz games. Armageddon is the last resort: White gets more time, for example 5 minutes against 4, but Black wins a draw. Details vary, so check the regulations.

#### 3. Time controls and the clock

Each player has their own clock, and the clock runs only on their turn. Time controls are named by the base time per player and the increment, so 10+5 means 10 minutes plus 5 seconds added after every move.

- Bullet: about 1 to 2 minutes per player. Mostly online.
- Blitz: up to 10 minutes per player.
- Rapid: more than 10 and up to 60 minutes per player.
- Classical: 60 minutes or more per player, often with an increment. Classical games can last four to six hours.

Increment and delay both give extra time, but in different ways. With an increment, a fixed number of seconds is added to your clock after you move, so time you do not use is saved. With a delay, the clock waits a few seconds at the start of each turn and only then starts running. Unused delay is lost.

Press the clock with the same hand that moved the piece. Do not hover over it or press it hard. If your time runs out, you lose, unless your opponent has only a bare king and cannot ever checkmate, in which case the game is a draw.

Practice with a real clock at home. A lot of games are lost by players who knew the position but not their time.

#### 4. Rules at the board

##### Touch-move

If you deliberately touch one of your pieces when it is your turn, you must move that piece, if it has a legal move. If you touch an opponent’s piece, you must capture it, if you can. If you touch several, you must move or capture the first one that can be moved or captured. A move is made when you release the piece on a legal square. Until then, you may still choose another square for that piece.

To fix a piece that is not centered on its square, say “J’adoube” or “I adjust” first, and only on your own turn. Touching a piece without saying it counts as touching it deliberately.

##### Draws

To offer a draw, make your move first, then say “Draw?” before you press the clock. The offer cannot be taken back. Your opponent may accept it, or decline it by saying no or by simply making a move. Do not offer again and again. Some events do not allow draw offers before a set move number, for example move 30.

A draw can also come from the position, with a claim or automatically:

- Threefold repetition: the same position, with the same player to move, appears three times. The moves do not have to be in a row. You must claim it: stop, and call the arbiter. Five times is an automatic draw.
- The 50-move rule: 50 moves by each player pass without a capture or a pawn move. You claim it. At 75 moves it is automatic.
- Insufficient material: neither side can checkmate with any legal moves, for example a bare king against a king and a knight. The game ends at once.
- Stalemate: the player to move has no legal move and is not in check.

##### Penalties and the arbiter

In classical and rapid games, the first illegal move gives your opponent 2 extra minutes. A second illegal move by the same player loses the game. In blitz, if your opponent notices an illegal move, they can claim a win. If you see a problem, do not argue and do not fix the position yourself. Stop the clock and call the arbiter.

Many tournaments use zero tolerance for late arrival. If you are not at the board when the round starts, you may lose by forfeit. Others allow 15 or 30 minutes. Read the regulations and arrive early.

In classical games you must write down every move, and your opponent’s. You may stop if you have less than 5 minutes left and no increment of 30 seconds or more. Blitz and rapid events often do not require a scoresheet.

##### Fair play and etiquette

Chess is based on trust, so tournaments take these rules seriously.

- Switch your phone off completely. In many tournaments a ringing phone loses the game.
- Never use an engine, notes or help from other people during a game. This includes your coach, a friend and a spectator.
- Do not talk to your opponent about the game, and keep quiet in the playing hall.
- Shake hands before the game and after it. When a game ends by resignation or an agreed draw, stop both clocks.
- After the game, report the result to the arbiter and sign the scoresheet. Analyze outside the playing hall.

#### 5. Ratings and titles

A rating is a number that estimates your strength, which the Elo system adjusts after every rated game. If you beat a stronger player, you gain more than you would for beating a weaker one, and you lose more for a loss against a weaker one. New players receive their first rating after several games against rated opponents. National and FIDE ratings are separate lists.

Titles such as Candidate Master, FIDE Master, International Master and Grandmaster need a rating and results called norms, which are strong performances in tournaments with enough rated opponents. A title, once earned, stays for life.

#### Common mistakes

- Not reading the regulations: the tiebreak order, the time control or the late-arrival limit surprise you on the day.
- Touching a piece while thinking, and then trying to move another one.
- Offering a draw before making your move, or after pressing the clock.
- Pressing the clock with the other hand, or forgetting to press it at all.
- Making a move that repeats the position and only then claiming a draw. Call the arbiter before you move.
- Using a phone in the playing hall, even to check the time.
- Arguing with your opponent about a rule instead of calling the arbiter.
- Thinking a Swiss tournament eliminates players. Everyone plays all the rounds.

#### Check yourself

**Question:** Two players in a Swiss tournament both score 4 out of 6. Whom does Buchholz rank higher?

**Answer:** The one whose opponents scored more in total. Buchholz adds up your opponents’ final scores, so it rewards a stronger field.

#### Exercise: Exercise

Find the regulations of a tournament in your area, or a past one. Write down the format, the number of rounds, the time control, the tiebreak order and the late-arrival limit.

Then play a game at home with a real clock at 10+5. Practice every board rule from this lesson: touch-move, offering a draw after your move and pressing the clock with the right hand. Write the game down as you play.

#### Questions to check yourself

1. **In a Swiss tournament, can you play the same opponent twice?**
   Answer: No. You are paired with players of the same or a close score whom you have not met.
2. **How many rounds does a round robin with 8 players need?**
   Answer: 7 rounds. Everyone plays every other player once.
3. **You touch your knight, then see it loses a piece. Can you move something else?**
   Answer: No. If the knight has a legal move, you must move it. Say “J’adoube” before touching a piece you only want to adjust.
4. **When do you offer a draw?**
   Answer: After you make your move and before you press the clock. Once made, the offer cannot be withdrawn.
5. **Your opponent’s illegal move: what do you do in a classical game?**
   Answer: Stop the clock and call the arbiter. The first illegal move gives you 2 extra minutes; a second one loses the game.

#### Key takeaway

> Read the regulations, know how pairings and tiebreaks work, practice with a real clock, and when something goes wrong at the board, stop the clock and call the arbiter.

#### Practice it

- **Write a game down** (`/library/board`): Play a game on the analysis board and record it move by move, as you would on a scoresheet.
- **Chess basics** (`/practice/chess-basics`): Review how the pieces move and how moves are written before your first tournament.

#### Further reading

- *FIDE Laws of Chess*, FIDE, FIDE Handbook: https://handbook.fide.com/chapter/E012023
- *Swiss-system tournament*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Swiss-system_tournament

---

### 3. Opening principles

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

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the exercise position** (`/library/board?fen=r1bqk1nr%2Fpppp1ppp%2F2n5%2F2b1p3%2F2B1P3%2F5N2%2FPPPP1PPP%2FRNBQK2R+w+KQkq+-+4+4`): Open the position after 3...Bc5 and compare 4.O-O, 4.c3 and 4.Nc3 yourself.

---

### 4. Pawn structures

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

- **Spot the feature** (`/practice/spot-the-feature`): Tap the isolated, doubled, backward and passed pawns, the outposts and the half-open files.
- **Games with an isolated queen pawn** (`/library/games?structure=iqp`): Replay games with an isolated d-pawn and see how both sides play around it.
- **Positional games** (`/library/games?category=positional`): See how strong players build their plans around the pawns.

---

### 5. CCTO: four places to look for a move

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

- **What’s the threat?** (`/practice/threats`): Before your own checks and captures, name what the opponent threatens, then stop it.
- **Mate in 1** (`/practice/mate-in-one`): Start with the checks: look at every check before anything else.
- **Tactics** (`/practice/tactics`): Go through checks, captures and threats before you pick a move.
- **Good moves** (`/practice/good-moves`): Collect candidates from all four places, including one quiet move.

#### Further reading

- *CCTO Rule in Chess: Checks. Captures. Threats. Optimization.*, Darko Polimac, Chess.com forum: https://www.chess.com/forum/view/chess-lessons/ccto-rule-in-chess-checks-captures-threats-optimization

---

### 6. Making decisions during a game

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

- **What’s the threat?** (`/practice/threats`): Start every decision with the opponent’s last move: what does it threaten?
- **Is it safe?** (`/practice/is-it-safe`): A tempting capture or check: decide whether it works before you play it.
- **Critical decisions** (`/practice/good-moves?category=criticalDecision`): Positions where one decision matters: go through all six steps before you move.
- **Look Ahead** (`/practice/look-ahead`): Calculate your opponent’s strongest replies, not the ones you hope for.

---

### 7. Chess psychology and focus

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

- **What’s the threat?** (`/practice/threats`): Many blunders come from not asking what the last move threatens. Make the question a habit.
- **Review** (`/practice/review`): Meet your missed puzzles again a few days later, when the answer is no longer fresh.
- **Daily puzzle** (`/practice/daily`): One puzzle a day: go through the full pre-move routine before you answer.
- **Tactics** (`/practice/tactics`): You get one try per puzzle, so practice the routine: threats, candidates, blunder check, then move.

---

### 8. Analyzing your own games

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

- **Review** (`/practice/review`): Let the engine find the mistakes in your saved games and bring them back as puzzles.
- **Analysis board** (`/library/board`): Paste your game as PGN, name your candidates, then compare them with the engine.
- **My games** (`/library/saved`): Pick a recent game, ideally a loss, and go through it without the engine first.

---

## Masters’ approaches

How famous players and coaches think, as our own lessons.

### 9. Find your candidate moves

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
- **See it in your head** (`/practice/see-it`): Keep the position in your head while you check each candidate.

#### Further reading

- *Think Like a Grandmaster*, Alexander Kotov, Batsford Books: https://www.batsfordbooks.com/book/think-like-a-grandmaster/

---

### 10. Explain every move

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

- **Spot the feature** (`/practice/spot-the-feature`): Name the structure behind a move: weak pawns, outposts and open files.
- **Games** (`/library/games`): Pick a game, stop at the key moves and say why each one was played.

#### Further reading

- *Understanding Chess Move by Move*, John Nunn, WorldCat: https://search.worldcat.org/title/Understanding-chess-move-by-move/oclc/50497051

---

### 11. Train in small steps

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

- **Review** (`/practice/review`): Missed puzzles come back after 1, 3 and 7 days, so each step sticks.
- **Mate in 1** (`/practice/mate-in-one`): Start with the simplest step: spot the mate in one move.
- **Games with forks** (`/library/games?theme=fork`): See the fork in real games, on different squares and with different pieces.
- **Tactics** (`/practice/tactics`): Then apply the motifs in mixed puzzles and check that they really work.

#### Further reading

- *Chess Steps (Stappenmethode)*, Rob Brunia and Cor van Wijgerden, Official website: https://www.stappenmethode.nl/en/index.php

---

### 12. Learn, then check yourself

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

- **Review** (`/practice/review`): Repeat what you missed on a schedule: after 1, 3 and 7 days.
- **Daily puzzle** (`/practice/daily`): One puzzle a day, without hints. If you miss it, write down why.
- **Tactics** (`/practice/tactics`): Solve a short set without hints, then go back over every mistake.
- **Weekly plan** (`/`): Plan your week: one goal per session, and time to review your weak spots.

#### Further reading

- *Build Up Your Chess 1: The Fundamentals*, Artur Yusupov, Quality Chess (sample PDF): https://qualitychess.co.uk/ebooks/Build-up-Your-Chess-1-exceprt.pdf

---

### 13. What is unequal in the position?

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

- **Who is better?** (`/practice/who-is-better`): Judge a quiet position, then compare with the engine’s score and the main imbalance.
- **Spot the feature** (`/practice/spot-the-feature`): Find the imbalances on the board: weak pawns, passed pawns, outposts, open files.
- **Positional games** (`/library/games?category=positional`): Before a key move, name one advantage for each side, then guess the plan.

#### Further reading

- *How to Reassess Your Chess (4th edition)*, Jeremy Silman, WorldCat: https://search.worldcat.org/search?q=How+to+Reassess+Your+Chess+Jeremy+Silman

---

### 14. Foresee your opponent’s plan

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

- **What’s the threat?** (`/practice/threats`): Prophylaxis starts here: see what the opponent wants, then take it away.
- **Critical decisions** (`/practice/good-moves?category=criticalDecision`): Before you choose your move, name your opponent’s best plan.
- **Defensive games** (`/library/games?category=defense`): Before each key move, name the opponent’s plan, then see how it was stopped, or not.

#### Further reading

- *Python Strategy*, Tigran Petrosian, Simon & Schuster: https://www.simonandschuster.com/books/Python-Strategy/Tigran-Petrosian/Chess-Classics/9781784830021

---

### 15. Blockade and strengthen your pieces

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

- **Spot the feature** (`/practice/spot-the-feature`): Find the outposts and passed pawns: the squares to blockade and the pieces to put there.
- **Games with passed pawns** (`/library/games?structure=passedPawn`): Watch how passed pawns are pushed, and how they are stopped.
- **Positional games** (`/library/games?category=positional`): Look for blockading pieces and outposts, and ask why they stand there.

#### Further reading

- *My System*, Aron Nimzowitsch, Simon & Schuster: https://www.simonandschuster.com/books/My-System/Aron-Nimzowitsch/Chess-Classics/9789197600538

---

### 16. Simplify to win

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

- **Endgame technique** (`/practice/endgames`): Endgame puzzles by type, plus the stalemate traps in won endings.
- **Endgame games** (`/library/games?category=endgame`): At each trade, judge whether the endgame after it is really better.
- **Rook endgames** (`/library/games?endgame=rook`): Replay games that came down to rooks and pawns.

#### Further reading

- *Chess Fundamentals*, José Raúl Capablanca, Project Gutenberg: https://www.gutenberg.org/ebooks/33870

---

### 17. A plan beats haste

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

- **Endgame technique** (`/practice/endgames`): Train one endgame family at a time: pawn, rook, minor piece or queen.
- **Endgame games** (`/library/games?category=endgame`): Replay endgames and ask at each step: where is the second weakness?
- **Endgame puzzles** (`/practice/good-moves?category=endgame`): Before you pick a move, decide on your plan for the next few moves.

#### Further reading

- *Endgame Strategy*, Mikhail Shereshevsky, New In Chess: https://www.newinchess.com/chess-endgame-strategy-shereshevsky

---

### 18. Check the critical line

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
- **Is it safe?** (`/practice/is-it-safe`): Check the opponent’s best reply before you capture or check.
- **See it in your head** (`/practice/see-it`): Play a few moves in your head, then answer a question about the position.
- **Critical decisions** (`/practice/good-moves?category=criticalDecision`): Positions where one move changes the evaluation. Check the forcing moves for both sides.

#### Further reading

- *Dvoretsky’s Endgame Manual*, Mark Dvoretsky, New In Chess: https://www.newinchess.com/dvoretsky-s-endgame-manual-6270

---

### 19. Initiative and sacrifice

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

- **Sound sacrifice?** (`/practice/sound-sacrifice`): Judge sacrifices from real games, then play the critical reply.
- **Games with sound sacrifices** (`/library/games?sacrifice=sound`): Replay games where a sacrifice held up under the engine’s check.
- **Attacking games** (`/library/games?category=attack`): Count the pieces in each attack, then check the defender’s best reply.
- **Tactics** (`/practice/tactics`): Before you play a sacrifice, check the calmest defense.

#### Further reading

- *The Life and Games of Mikhail Tal*, Mikhail Tal, New In Chess: https://www.newinchess.com/life-and-games-of-mikhail-tal

---

### 20. See the board in your head

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

- **See it in your head** (`/practice/see-it`): Moves given as text while the board stays still: where do the pieces stand now?
- **Look Ahead** (`/practice/look-ahead`): Hold the position in your head as the tree grows move by move.
- **Mate in 3** (`/practice/mate-in-three`): Calculate the whole mating line before you move.

#### Further reading

- *Blindfold Chess: History, Psychology, Techniques, Champions, World Records, and Important Games*, Eliot Hearst and John Knott, blindfoldchess.net: https://www.blindfoldchess.net/
- *Blindfold Chess – history, psychology, champions, records*, ChessBase, ChessBase news: https://en.chessbase.com/post/blindfold-che-history-psychology-champions-records/1

---

### 21. Practical chess improvement

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

- **Review** (`/practice/review`): Your missed puzzles and the mistakes in your saved games, on a schedule.
- **My games** (`/library/saved`): Go through your last five games and look for the mistake that keeps coming back.
- **Tactics** (`/practice/tactics`): If the weakness you found is tactical, train it here with a threat check before every move.

#### Further reading

- *Journey to Grandmaster*, IM Yevhenii Yelisieiev, Official website: https://www.journeytograndmaster.com/

---

## Ukrainian chess school

Lessons inspired by players and coaches of the Ukrainian chess school.

### 22. How to find a strategic plan

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

- **Who is better?** (`/practice/who-is-better`): Judge the position first: a plan follows from who is better and why.
- **Spot the feature** (`/practice/spot-the-feature`): Find the targets a plan aims at: weak pawns, outposts, open files.
- **Positional games** (`/library/games?category=positional`): Stop before a quiet move, name the weak squares and the worst piece, then guess the plan.

#### Further reading

- *400 Chess Strategy Puzzles*, Martyn Kravtsiv, Google Books (Gambit, 2024): https://books.google.com/books/about/400_Chess_Strategy_Puzzles.html?id=zNFW0AEACAAJ

---

### 23. Find the best move without a hint

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

- **Who is better?** (`/practice/who-is-better`): No hint, no task: just judge the position, then see the engine’s view.
- **Good moves** (`/practice/good-moves`): Random positions with no theme shown: name the kind of decision before you choose a move.
- **Critical decisions** (`/practice/good-moves?category=criticalDecision`): Positions where one decision matters: attack, defend, improve or simplify?
- **Daily puzzle** (`/practice/daily`): Before you solve, decide whether the position needs an attack, a defense or a quiet move.

#### Further reading

- *Perfect Your Chess*, Andrei Volokitin and Vladimir Grabinsky, Google Books (Gambit, 2007): https://books.google.com/books/about/Perfect_Your_Chess.html?id=X9eIGAAACAAJ
- *Vladimir Grabinsky: biography*, Vladimir Grabinsky, Coach’s website: https://www.grandcoach.com/en/coach/biography/

---

### 24. When is a sacrifice justified?

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

- **Sound sacrifice?** (`/practice/sound-sacrifice`): Sound, unsound or unclear? Judge the compensation, then play the critical reply.
- **Games with sacrifices** (`/library/games?sacrifice=sound%2Cunclear`): Replay games with a sacrifice the engine called sound or unclear.
- **Who is better?** (`/practice/who-is-better`): Weigh material against activity in quiet positions.
- **Look Ahead** (`/practice/look-ahead`): Calculate to the point where the forcing moves run out, then judge the position there.

#### Further reading

- *Perfect Your Chess*, Andrei Volokitin and Vladimir Grabinsky, Google Books (Gambit, 2007): https://books.google.com/books/about/Perfect_Your_Chess.html?id=X9eIGAAACAAJ

---

### 25. The art of maneuvering

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

- **Spot the feature** (`/practice/spot-the-feature`): Find the outposts and open files your pieces should head for.
- **Positional games** (`/library/games?category=positional`): Follow one piece through a game: where did it start, where did it go, and why?
- **Endgame games** (`/library/games?category=endgame`): Watch how the winner brings the king and pieces closer and creates a second weakness.

#### Further reading

- *Adrian Mikhalchishin*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Adrian_Mikhalchishin

---

### 26. Disciplined calculation

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
- **Is it safe?** (`/practice/is-it-safe`): Before a capture or check, check the reply. If it fails, show the refutation.
- **See it in your head** (`/practice/see-it`): Calculate without moving the pieces, then answer about the new position.
- **Tactics** (`/practice/tactics`): Before you move, look for the strongest defense against your idea.

#### Further reading

- *Mykhaylo Oleksiyenko*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Mykhaylo_Oleksiyenko

---

### 27. How to stop repeating mistakes

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

- **Review** (`/practice/review`): What you missed comes back after 1, 3 and 7 days, until you get it right.
- **What’s the threat?** (`/practice/threats`): The most repeated mistake: missing what the opponent threatens.
- **Is it safe?** (`/practice/is-it-safe`): The second one: grabbing material that is not really free.
- **Tactics** (`/practice/tactics`): One try per puzzle: run the pre-move check before every answer.

#### Further reading

- *GM Igor Smirnov: biography*, Remote Chess Academy, Remote Chess Academy: https://chess-teacher.com/gm-smirnov/

---

## Openings

The most common openings: the first moves, the plans for both sides and a trap to know.

### 28. How openings work: names, families and how to choose

`slug: how-openings-work`

Category: Opening · Skill: Choosing your first openings · Rating: 0–1500 · Time: 10 min

#### Main idea

An opening is the first 10 to 15 moves of a game, when both sides develop their pieces and fight for the center. Thousands of opening lines exist, but you only need a few, and a clear idea behind each one.

This lesson explains how openings are named and grouped, what the code letters A to E mean and how to choose your first openings.

#### How to choose your first openings

1. As White, choose one first move (1.e4 or 1.d4) and one or two setups.
2. As Black, choose one reply to 1.e4 and one reply to 1.d4.
3. Learn the plans and the typical pawn structures first. Moves come from plans.
4. Play the opening in at least ten games before you change it.
5. After each game, check where you left your preparation and what you learned.

#### Example

Say you like solid, clear positions. As White you choose 1.e4 and the Italian Game. As Black you answer 1.e4 with the Caro-Kann and 1.d4 with the Slav. That is only three openings, and a few weeks of games and study are enough to learn them well.

#### How openings get their names

Most names come from places, people or pieces: the Italian Game, the Sicilian Defense, the Ruy Lopez (named after a Spanish priest) and the Queen’s Gambit. A few words in the name tell you what kind of opening it is:

- Game or Opening: a general name for the first moves, such as the Italian Game or the English Opening.
- Gambit: a player offers material, usually a pawn, for faster development or the initiative, such as the King’s Gambit.
- Defense: a name for Black’s reply to White’s first move, such as the Sicilian Defense or the Caro-Kann Defense. A defense can still be very active.
- System or Attack: a setup that you can play against many replies, such as the London System.

A name like “Sicilian Defense: Najdorf Variation” gives the main opening and then the exact line.

#### The families, by first moves

- 1.e4 e5: open games. Both sides play in the center and the position opens quickly. Examples: the Italian Game, the Ruy Lopez, the Scotch Game and the King’s Gambit.
- 1.e4 with another reply: semi-open games. Black avoids 1...e5. Examples: the Sicilian, French, Caro-Kann, Pirc and Scandinavian.
- 1.d4 d5: closed or semi-closed games. Examples: the Queen’s Gambit, the Slav and the London System.
- 1.d4 Nf6: Indian defenses. Black controls the center with pieces first. Examples: the King’s Indian and the Nimzo-Indian.
- 1.c4, 1.Nf3 and others: flank openings, such as the English Opening.

#### The ECO codes

The Encyclopaedia of Chess Openings (ECO) gives every opening a code from A00 to E99, about 500 codes in all. You will see these codes in databases and on game sites. The first letter shows the family:

- A: flank and irregular openings, such as the English Opening, plus some 1.d4 lines.
- B: semi-open games, such as the Sicilian, Caro-Kann, Pirc and Scandinavian.
- C: open games after 1.e4 e5, and the French Defense.
- D: closed and semi-closed games after 1.d4 d5, such as the Queen’s Gambit and the Slav.
- E: Indian defenses, such as the King’s Indian and the Nimzo-Indian.

You do not need to learn the numbers. The letter tells you the family.

#### What to know about each opening

Below 2000, understanding is worth more than memory. You do not need 20 moves of memorized theory. For each opening, learn:

- The first 6 to 10 moves and why they are played.
- The plan for both sides and the typical pawn structure.
- Two or three traps and tactical ideas.
- The usual ways the opponent can leave the main line.

#### Common mistakes

- Memorizing long lines without knowing the plan behind them.
- Changing your opening after every lost game.
- Trying to learn too many openings at once.
- Playing a gambit or a sharp line that you cannot calculate.
- Forgetting the opening principles when the opponent leaves the book.

#### Check yourself

**Question:** In which ECO group is the Sicilian Defense?

**Answer:** B, the semi-open games: 1.e4 with a reply other than 1...e5.

#### Exercise: Exercise

Write down your repertoire: your first move as White, and your replies to 1.e4 and 1.d4 as Black.

Then open the lessons for those openings in this section and read their plans. Play each opening in your next ten games and write down what happened.

#### Questions to check yourself

1. **What is a gambit?**
   Answer: An opening in which a player offers material, usually a pawn, for faster development or the initiative.
2. **Which letter groups the open games after 1.e4 e5?**
   Answer: C.
3. **Why is a plan more useful than memorized moves?**
   Answer: When the opponent leaves the book, a plan still tells you what to do, but memorized moves do not.
4. **How many openings should a beginner start with?**
   Answer: Three or four: one as White, and one reply each to 1.e4 and 1.d4 as Black.

#### Key takeaway

> Choose a few openings, learn their plans and typical structures before the moves, and give each one enough games to judge it.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Start with the Italian Game** (`/theory/italian-game`): A classic first opening for White after 1.e4 e5.
- **Browse real games** (`/library/games`): See which openings are played in real games, and filter by opening.

#### Further reading

- *Encyclopaedia of Chess Openings*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Encyclopaedia_of_Chess_Openings
- *List of chess openings*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/List_of_chess_openings

---

### 29. Italian Game: simple development, quick attack

`slug: italian-game`

Category: Opening · Skill: Learning a classic 1.e4 e5 opening · Rating: 800–1700 · Time: 8 min

#### Main idea

The Italian Game starts with 1.e4 e5 2.Nf3 Nc6 3.Bc4. White develops quickly and aims the bishop at f7, the weakest square near Black’s king. It is one of the oldest openings and one of the best for learning how to start a game.

It suits players who like clear plans: develop the pieces, castle, then take the center with c3 and d4.

#### The first moves

1. 1.e4 e5: both sides take the center with a king’s pawn.
2. 2.Nf3 Nc6: White develops a knight and attacks e5. Black defends it and develops.
3. 3.Bc4 Bc5: both bishops go to an active diagonal. White’s bishop looks at f7.
4. 4.c3 Nf6: White prepares d4. Black develops and attacks e4.
5. 5.d3 d6: White keeps the center solid and opens the c1-bishop. Black supports e5.
6. 6.O-O O-O: both kings are safe. This slow, solid setup is called the Giuoco Pianissimo, the “very quiet game”.

#### Example

After 6...O-O, White usually plays Re1, a3 or h3 and Nbd2-f1-g3, while Black plays ...a6 and ...Ba7 to keep the bishop, then ...Re8 and ...Be6. The game stays tense. Whoever makes the central break, d4 or ...d5, at the right moment gets the better pieces.

#### Plans for White

- Castle early and keep the bishop on the diagonal aimed at f7.
- Prepare the break d4 with c3 and d3, then play it when it wins space.
- Reroute the b1-knight with Nbd2-f1-g3 to support e4 and join the kingside.
- Do not rush an attack on f7. It needs more pieces than you have in the first ten moves.

#### Plans for Black

- Develop with ...Nf6, ...d6 and ...O-O, and keep the e5 pawn solid.
- Play ...a6 and ...Ba7 so the bishop keeps its diagonal when White prepares d4.
- Prepare the break ...d5 to free your position.
- Look out for tricks on f7 and e5, especially if you pin a knight.

#### A trap to know: Légal’s Mate

1.e4 e5 2.Nf3 d6 3.Bc4 Bg4 4.Nc3 g6? 5.Nxe5! Bxd1 6.Bxf7+ Ke7 7.Nd5#. The knight on f3 looks pinned to the queen, but White sacrifices the queen and mates with three minor pieces.

After 4.Nc3, Black should develop with 4...Nf6 or 4...Nc6 instead of weakening the kingside.

#### Common mistakes

- Attacking f7 too early with Ng5 or Qf3, before the other pieces are developed.
- Moving the bishop again and again instead of finishing development.
- Leaving the king in the center after the center opens.
- Pinning a knight with ...Bg4 and then ignoring the tactic Nxe5 (Légal’s Mate).

#### Check yourself

**Question:** After 1.e4 e5 2.Nf3 Nc6 3.Bc4, which Black square is the main target of White’s bishop?

**Answer:** f7. Only the king protects it, so the bishop and the knights keep an eye on it.

#### Questions to check yourself

1. **What do c3 and d3 prepare in the quiet Italian setup?**
   Answer: c3 prepares d4 to build a big center. d3 supports e4 and opens the c1-bishop.
2. **Why does Black often play ...a6 and ...Ba7?**
   Answer: To keep the bishop on the a7-g1 diagonal when White’s pawn comes to d4, instead of having to trade it.
3. **In Légal’s Mate, what does White sacrifice?**
   Answer: The queen, with 5.Nxe5! Bxd1. Then 6.Bxf7+ Ke7 7.Nd5# is checkmate.

#### Key takeaway

> Develop quickly, castle, aim at f7, and then build the center with c3 and d4.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 6...O-O** (`/library/board?fen=r1bq1rk1%2Fppp2ppp%2F2np1n2%2F2b1p3%2F2B1P3%2F2PP1N2%2FPP3PPP%2FRNBQ1RK1+w+-+-+2+7`): Open the board and test White’s ideas: Re1, h3, Nbd2 or the break d4.
- **Italian Game games** (`/library/games?opening=Italian+Game`): Replay real games that began with the Italian Game.

#### Further reading

- *Italian Game*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Italian_Game

---

### 30. Ruy Lopez: the classic fight for the center

`slug: ruy-lopez`

Category: Opening · Skill: Building long-term pressure in 1.e4 e5 · Rating: 1200–2000 · Time: 9 min

#### Main idea

The Ruy Lopez, also called the Spanish Game, starts with 1.e4 e5 2.Nf3 Nc6 3.Bb5. The bishop does not threaten e5 at once, but it attacks the knight that defends it. This builds long-term pressure on Black’s center.

It is played at every level, from club games to world championship matches. It rewards patience: the plans are clear, but the positions stay rich for many moves.

#### The first moves

1. 1.e4 e5: both sides take the center.
2. 2.Nf3 Nc6: White attacks e5. Black defends it with the knight.
3. 3.Bb5 a6: the bishop attacks the knight that defends e5. Black asks the bishop what it wants to do.
4. 4.Ba4 Nf6: White keeps the pressure. Black develops and attacks e4.
5. 5.O-O Be7: White castles. Black develops the bishop and prepares to castle.
6. 6.Re1 b5: the rook defends e4. Black drives the bishop back.
7. 7.Bb3 d6: the bishop keeps its diagonal toward f7. Black supports e5.
8. 8.c3 O-O: White prepares d4. Black castles. This is the Closed Ruy Lopez.

#### Example

White’s idea is to play d4 and build a big center. Black’s ideas are ...Na5 to trade White’s strong bishop, and ...c5 or ...d5 to challenge the center.

In the Exchange Variation, 4.Bxc6 dxc6 5.O-O, White damages Black’s pawns and aims for a better ending with a healthy kingside pawn majority. Black has the two bishops in return.

#### Plans for White

- Prepare d4 with c3 and h3, then open the center when your pieces are ready.
- Keep the bishop on b3 (or c2), where it supports the center.
- Reroute the knight with Nbd2-f1-g3 to reach the kingside.
- In the Exchange Variation, aim for an endgame where your pawn majority counts.

#### Plans for Black

- Develop with ...Nf6, ...Be7 and ...O-O, then support e5 with ...d6.
- Play ...Na5 to challenge the bishop, then ...c5 to fight for d4.
- Look for ...d5 when it equalizes in the center.
- Keep e5 protected. It is the key pawn of the whole structure.

#### A trap to know: Noah’s Ark Trap

1.e4 e5 2.Nf3 Nc6 3.Bb5 a6 4.Ba4 d6 5.d4 b5 6.Bb3 Nxd4 7.Nxd4 exd4 8.Qxd4? c5 9.Qd5 Be6 10.Qc6+ Bd7 11.Qd5 c4. The pawns on c5 and c4 attack the bishop on b3, and White loses it for two pawns.

After 7...exd4, White should not grab the pawn with the queen.

#### Common mistakes

- Thinking that 4.Bxc6 dxc6 5.Nxe5 wins a pawn. Black plays ...Qd4, attacks the knight and the pawn on e4, and regains the pawn.
- Forgetting to defend e4 before Black can play ...Nxe4.
- Opening the center with d4 before the king is safe.
- Pushing ...a6 and ...b5 without a plan, which leaves the queenside weaker.

#### Check yourself

**Question:** In the Ruy Lopez, which piece does the bishop on b5 attack?

**Answer:** The knight on c6. It defends the pawn on e5, so the bishop attacks e5 indirectly.

#### Questions to check yourself

1. **What does 6.Re1 defend?**
   Answer: The e4 pawn, so Black cannot win it with ...Nxe4.
2. **What is the main idea of the Exchange Variation?**
   Answer: White trades the bishop for the knight on c6 to damage Black’s pawns, and aims for a better ending with a kingside pawn majority.
3. **What happens in Noah’s Ark Trap?**
   Answer: Black plays ...c5 and ...c4 and traps the bishop on b3, winning it for two pawns.

#### Key takeaway

> Pressure the defender of e5, castle, defend e4 and prepare d4.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 8...O-O** (`/library/board?fen=r1bq1rk1%2F2p1bppp%2Fp1np1n2%2F1p2p3%2F4P3%2F1BP2N2%2FPP1P1PPP%2FRNBQR1K1+w+-+-+1+9`): Open the board and test White’s ideas: h3, d4 or Nbd2.
- **Ruy Lopez games** (`/library/games?opening=Ruy+Lopez`): Replay real games that began with the Ruy Lopez.

#### Further reading

- *Ruy Lopez*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Ruy_Lopez

---

### 31. Scotch Game: open the center at once

`slug: scotch-game`

Category: Opening · Skill: Developing fast in open positions · Rating: 1000–1800 · Time: 8 min

#### Main idea

The Scotch Game starts with 1.e4 e5 2.Nf3 Nc6 3.d4. White opens the center at once and gets active pieces instead of waiting. The main ideas are direct, so it is easy to learn.

It suits players who like open positions and quick development. It also avoids the long theory of the Ruy Lopez.

#### The first moves

1. 1.e4 e5: both sides take the center.
2. 2.Nf3 Nc6: White attacks e5. Black defends it.
3. 3.d4 exd4: White challenges the center. Black takes the pawn.
4. 4.Nxd4 Nf6: White recaptures with the knight, which now stands in the center. Black develops and attacks e4.
5. 5.Nxc6 bxc6: White trades the knight and damages Black’s pawn structure.
6. 6.e5 Qe7: White attacks the knight on f6. Black’s queen attacks e5 and keeps the knight from coming back.
7. 7.Qe2 Nd5: White defends e5. Black puts the knight on a good central square.
8. 8.c4 Ba6: White attacks the knight again. Black’s bishop attacks the pawn on c4, which is in front of White’s queen.

#### Example

White has more space and a lead in development. Black has doubled pawns on the c-file, but also the two bishops and an open b-file. Both sides have chances, and the position stays sharp for many moves.

#### Plans for White

- Recapture on d4 with the knight and use the open center for fast development.
- Develop the bishops to active squares, castle, and put the rooks in the center.
- Against 4...Bc5, protect the knight with Be3 and follow with c3 and Bc4.
- Use the space advantage, but keep the king safe.

#### Plans for Black

- Develop quickly with ...Nf6 or ...Bc5 and castle.
- After a trade on c6, use the open b-file and the bishop pair.
- Challenge the center with ...d6 or ...d5.
- Do not take too many pawns: development matters more.

#### A pitfall to avoid: the early queen

After 4.Nxd4, the move 4...Qh4 attacks e4, but White simply defends with 5.Nc3 and develops while Black’s queen is exposed. Bring the queen out only after your minor pieces are developed.

#### Common mistakes

- Recapturing on d4 with the queen. After 4.Qxd4? Nxd4, White loses the queen for a knight.
- Bringing the queen out early, so the opponent gains time attacking it.
- Moving the same piece several times without a reason.
- Forgetting to castle before the center fully opens.

#### Check yourself

**Question:** After 3.d4 exd4, why must White recapture with the knight and not the queen?

**Answer:** After 4.Qxd4? Nxd4 5.Nxd4, White has lost the queen for a knight. The knight is the safe recapture.

#### Questions to check yourself

1. **What does 3.d4 do?**
   Answer: It opens the center at once, so White’s pieces become active.
2. **What pawn structure does Black get after 5.Nxc6 bxc6?**
   Answer: Doubled pawns on the c-file, but the open b-file and the two bishops in return.
3. **What does White play against 4...Bc5?**
   Answer: 5.Be3, defending the knight on d4, then c3 and Bc4.

#### Key takeaway

> Open the center, recapture with the knight, develop fast and castle.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 8...Ba6** (`/library/board?fen=r3kb1r%2Fp1ppqppp%2Fb1p5%2F3nP3%2F2P5%2F8%2FPP2QPPP%2FRNB1KB1R+w+KQkq+-+1+9`): Open the board and look for White’s best way to deal with the pin on c4.
- **Scotch Game games** (`/library/games?opening=Scotch+Game`): Replay real games that began with the Scotch Game.

#### Further reading

- *Scotch Game*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Scotch_Game

---

### 32. Vienna Game: a flexible way to attack with f4

`slug: vienna-game`

Category: Opening · Skill: Attacking with the f-pawn · Rating: 1000–1800 · Time: 8 min

#### Main idea

The Vienna Game starts with 1.e4 e5 2.Nc3. White develops the knight first and keeps the option of f4, a pawn break that opens the f-file and attacks Black’s center. Unlike the Italian Game or the Ruy Lopez, it does not commit the bishop yet.

It suits players who like to attack and want an opening with less theory than the Ruy Lopez. Black must be careful, because White’s ideas are direct.

#### The first moves

1. 1.e4 e5: both sides take the center.
2. 2.Nc3 Nf6: White develops the knight and guards e4. Black develops and attacks e4.
3. 3.f4 d5: this is the Vienna Gambit. White prepares to attack the center. Black strikes back in the center at once.
4. 4.fxe5 Nxe4: White takes the pawn. Black takes the pawn on e4 with the knight.
5. 5.Nf3 Be7: White develops. Black prepares to castle.
6. 6.d4 O-O: White builds a big center. Black castles.
7. 7.Bd3 f5: White attacks the knight on e4. Black defends it with ...f5.

#### Example

After 8.exf6 the game becomes sharp: White has more space, and Black has active pieces. If you want a quieter game, play 3.Bc4 or 3.g3 instead of 3.f4.

#### Plans for White

- Use the break f4 at the right moment to open the f-file and attack e5.
- Build a big center with d4 and develop quickly.
- Castle early and keep the king safe before you attack.
- Trade off Black’s active knight on e4 with Bd3 and Qe2.

#### Plans for Black

- Strike back in the center with ...d5 as soon as White plays f4.
- Develop quickly with ...Nc6 and ...Be7, and castle.
- Pin or trade the knight on c3 with ...Bb4 when it helps.
- Keep your king safe and do not open the f-file for White without a reason.

#### A pitfall to avoid: taking the pawn on f4

After 3.f4, the move 3...exf4? is too greedy: 4.e5 Qe7 5.Qe2 Ng8 6.Nf3 pushes Black’s knight back and gives White a big lead in development. Answer 3.f4 with 3...d5 instead.

#### Common mistakes

- Playing f4 and then leaving the king in the center.
- Taking the pawn with ...exf4 and falling behind in development.
- Forgetting ...d5. It is Black’s main way to equalize against f4.
- Leaving the knight on e4 unsupported after ...Nxe4.

#### Check yourself

**Question:** What is the idea of 2.Nc3 in the Vienna Game?

**Answer:** It defends e4 and prepares f4 without committing the king’s knight or the bishops yet.

#### Questions to check yourself

1. **What is the Vienna Gambit?**
   Answer: 3.f4 after 2.Nc3 Nf6. White offers to open the f-file, and Black replies ...d5.
2. **Which quiet alternatives to 3.f4 does White have?**
   Answer: 3.Bc4 and 3.g3.
3. **Why is 3...exf4 risky for Black?**
   Answer: After 4.e5 the knight is chased back, and White develops with tempo.

#### Key takeaway

> Develop with Nc3, play f4 when it is well prepared, and meet ...d5 with a fight for the center.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 7...f5** (`/library/board?fen=rnbq1rk1%2Fppp1b1pp%2F8%2F3pPp2%2F3Pn3%2F2NB1N2%2FPPP3PP%2FR1BQK2R+w+KQ+f6+0+8`): Open the board and compare 8.exf6 with other moves for White.
- **Vienna Game games** (`/library/games?opening=Vienna+Game`): Replay real games that began with the Vienna Game.

#### Further reading

- *Vienna Game*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Vienna_Game

---

### 33. King’s Gambit: offer a pawn, attack fast

`slug: kings-gambit`

Category: Opening · Skill: Playing for the initiative · Rating: 900–1700 · Time: 8 min

#### Main idea

The King’s Gambit starts with 1.e4 e5 2.f4. White offers the f-pawn to open the f-file and pull away Black’s e5 pawn, in order to build a big center and attack. It was the most popular opening of the 19th century, and it is still great fun to play.

It suits players who love open, tactical positions. It is risky for both sides, because White’s king is exposed, so accuracy matters.

#### The first moves

1. 1.e4 e5: both sides take the center.
2. 2.f4 exf4: White offers a pawn. Black accepts it. This is the King’s Gambit Accepted.
3. 3.Nf3 g5: White develops and stops ...Qh4+. Black holds the extra pawn with ...g5.
4. 4.h4 g4: White attacks the pawn on g5. Black pushes it and attacks the knight.
5. 5.Ne5 Nf6: the knight lands on e5. Black develops and attacks e4.

#### Example

The usual continuation is 6.Bc4 d5 7.exd5 Bd6. Black has an extra pawn, and White has the initiative and open lines. Both sides need exact play, and a single slip can lose quickly.

#### Plans for White

- Develop fast and use the open f-file. Castle early.
- Support e4 and build a center with d4 and Nc3.
- Aim the bishop at f7 with Bc4, and attack the weak king.
- Win back the pawn on f4 when it is safe.

#### Plans for Black

- Keep the extra pawn only if it is safe. A quick ...d5 gives the pawn back and frees your game.
- Develop your pieces and castle quickly.
- Know what ...g5 and ...g4 do: they weaken your own king.
- If you do not know the theory, decline with 2...Bc5 or 2...d5.

#### A famous idea: the Muzio Gambit

1.e4 e5 2.f4 exf4 3.Nf3 g5 4.Bc4 g4 5.O-O gxf3 6.Qxf3. White gives a whole knight for a big lead in development and open lines against the black king. It is a famous attacking idea, and it is dangerous to face without knowing the theory.

As Black, you can avoid it by declining the gambit (2...Bc5 or 2...d5) or by playing 3...Be7 or 3...d6.

#### Common mistakes

- Playing the King’s Gambit and not castling: the king is exposed.
- As White, forgetting that ...Qh4+ is possible after ...exf4 if you do not develop the knight to f3 in time.
- As Black, holding every pawn instead of developing the pieces.
- Pushing pawns on the kingside without calculating the consequences.

#### Check yourself

**Question:** What does White offer with 2.f4, and what does White get in return?

**Answer:** The f-pawn. After 2...exf4 White gets an open f-file, a chance for the center with d4, and fast development.

#### Questions to check yourself

1. **What does 3.Nf3 prevent?**
   Answer: 3...Qh4+, a check on the e1-h4 diagonal.
2. **What is the Muzio Gambit?**
   Answer: 4.Bc4 g4 5.O-O, where White sacrifices a knight for a fast attack.
3. **Name two ways for Black to decline the gambit.**
   Answer: 2...Bc5, and 2...d5 (the Falkbeer Counter-Gambit).

#### Key takeaway

> Offer the f-pawn, develop fast and castle. As Black, accept only if you can keep your king safe.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 5...Nf6** (`/library/board?fen=rnbqkb1r%2Fpppp1p1p%2F5n2%2F4N3%2F4PppP%2F8%2FPPPP2P1%2FRNBQKB1R+w+KQkq+-+2+6`): Open the board and look at White’s options: Bc4, d4 and Nc3.
- **King’s Gambit games** (`/library/games?search=King%27s+Gambit`): Replay real games that began with the King’s Gambit.

#### Further reading

- *King’s Gambit*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/King%27s_Gambit

---

### 34. Sicilian Defense: fight for the center from the side

`slug: sicilian-defense`

Category: Opening · Skill: Playing for a win as Black · Rating: 1200–2000 · Time: 9 min

#### Main idea

The Sicilian Defense starts with 1.e4 c5. Black does not copy White. The c-pawn attacks the d4 square from the side, so the game is unbalanced from the start: White gets more space, Black gets the open c-file and a healthy central pawn.

It is the most popular reply to 1.e4 and the choice of many strong players who want to play for a win with Black.

#### The first moves

1. 1.e4 c5: Black attacks d4 with a flank pawn.
2. 2.Nf3 d6: White develops and prepares d4. Black opens the bishop and controls e5.
3. 3.d4 cxd4: White opens the center. Black trades the c-pawn for the d-pawn.
4. 4.Nxd4 Nf6: White recaptures with the knight. Black develops and attacks e4.
5. 5.Nc3 a6: White defends e4. Black plays the Najdorf move: ...a6 stops Nb5 and prepares ...b5.

#### Example

This is called the Open Sicilian, because the center opens after d4. White often attacks the kingside with Be3, f3, Qd2 and long castling, or plays calmly with Be2 and short castling. Black plays on the queenside and in the center with ...e5 or ...e6, ...b5 and ...Bb7, using the open c-file.

Black has other fifth moves: 5...Nc6 (Classical), 5...g6 (Dragon) and 5...e6 (Scheveningen). When the kings castle on opposite sides, the game becomes a race, so speed matters.

#### Plans for White

- Use your extra space and development, and keep the knight on d4 strong.
- Choose a setup: Be3, f3, Qd2 and O-O-O for a fast kingside attack, or Be2 and O-O for a calm plan.
- Watch Black’s break ...d5. It can free Black’s game at once.

#### Plans for Black

- Use the open c-file: put a rook on c8 and a knight on c6.
- Play on the queenside with ...b5 and ...Bb7.
- Aim for ...d5 or ...e5 to challenge the center.
- Develop first. Do not fall behind in development while White attacks.

#### A pitfall to avoid: the Poisoned Pawn

In the Najdorf, the line 6.Bg5 e6 7.f4 Qb6 8.Qd2 Qxb2 is famous. Black’s queen takes a pawn far from home while White’s pieces come into play. It is very sharp and needs exact knowledge.

If you are not sure of the theory, do not grab pawns early. Develop with ...Qc7 and ...Nbd7 instead.

#### Common mistakes

- Capturing pawns with the queen while your pieces are still at home.
- Leaving the king in the center while White opens lines with f4 or e5.
- Learning long lines by heart without knowing the plan behind them.
- Playing a Dragon or Najdorf setup against a different White system without checking the tactics.

#### Check yourself

**Question:** Why does Black play 1...c5 and not 1...e5?

**Answer:** The c-pawn attacks the d4 square from the side and unbalances the game: White gets more central space, Black gets the open c-file.

#### Questions to check yourself

1. **What is an Open Sicilian?**
   Answer: A Sicilian where White plays d4 and Black takes with ...cxd4, so the center opens.
2. **Which move on move 5 is called the Najdorf?**
   Answer: 5...a6, after 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3.
3. **Why do both sides often castle on opposite wings?**
   Answer: White attacks the kingside and Black attacks on the queenside. It becomes a race, so each side plays fast.

#### Key takeaway

> Trade the c-pawn for White’s d-pawn, develop fast, use the c-file and keep your king safe.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 5...a6** (`/library/board?fen=rnbqkb1r%2F1p2pppp%2Fp2p1n2%2F8%2F3NP3%2F2N5%2FPPP2PPP%2FR1BQKB1R+w+KQkq+-+0+6`): Open the board and test White’s sixth moves: Be3, Bg5, Be2 or f4.
- **Sicilian Defense games** (`/library/games?opening=Sicilian+Defense`): Replay real games that began with the Sicilian Defense.

#### Further reading

- *Sicilian Defence*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Sicilian_Defence

---

### 35. French Defense: a solid pawn chain

`slug: french-defense`

Category: Opening · Skill: Playing against a pawn chain · Rating: 1000–1900 · Time: 8 min

#### Main idea

The French Defense starts with 1.e4 e6 2.d4 d5. Black builds a solid pawn chain and challenges White’s center at once. The positions are often closed, so the plans are clearer than in open games.

Its main drawback is the bishop on c8, which is shut in behind the e6 pawn. Freeing it is one of the main themes of the opening.

#### The first moves

1. 1.e4 e6: Black prepares ...d5 and keeps a solid pawn chain.
2. 2.d4 d5: both sides have pawns in the center. The pawn on e4 is attacked.
3. 3.Nc3 Nf6: White defends e4. Black attacks it again.
4. 4.Bg5 Be7: White pins the knight to the queen. Black breaks the pin with the bishop.
5. 5.e5 Nfd7: White gains space and attacks the knight. Black moves it and prepares ...c5.
6. 6.Bxe7 Qxe7: White trades Black’s good dark-squared bishop. Black recaptures with the queen.
7. 7.f4 O-O: White supports e5 and builds a big center. Black castles.
8. 8.Nf3 c5: White develops. Black attacks d4, the base of White’s pawn chain.

#### Example

White has more space and can attack on the kingside. Black is a little cramped, but has a clear target: the d4 pawn. Black usually adds pressure with ...Nc6 and ...cxd4, and later plays ...f6 to attack the head of the chain on e5.

#### Plans for White

- Use your space advantage and keep e5 strong with f4 and Nf3.
- Attack on the kingside, because Black is cramped there.
- Keep d4 safe. Black will attack it again and again.
- Do not trade the pawn on e5 without a good reason.

#### Plans for Black

- Attack the base of White’s chain: d4, with ...c5, ...Nc6 and ...Qb6.
- Free the c8-bishop with ...b6 and ...Ba6, or trade it.
- Strike at the head of the chain with ...f6 when White’s pieces are not ready.
- Do not stay passive. A French that only waits is hard to hold.

#### A pitfall to avoid: the bad bishop

If Black never finds a role for the c8-bishop, it stays locked behind the e6 pawn and Black plays a piece down for the whole game. Think about it early: plan ...b6 and ...Ba6, or open the position with ...c5 and ...dxe4.

#### Common mistakes

- Leaving the c8-bishop locked up for the whole game.
- Playing quietly as Black. The French needs ...c5 and often ...f6 to break the chain.
- Attacking the head of the chain first. Attack its base on d4 before the pawn on e5.
- Putting pieces on passive squares as White and forgetting that d4 is under constant pressure.

#### Check yourself

**Question:** In the French, which pawn is the base of White’s chain, and how does Black attack it?

**Answer:** The pawn on d4. Black attacks it with ...c5, ...Nc6 and ...Qb6.

#### Questions to check yourself

1. **Which Black bishop is the problem piece in the French, and why?**
   Answer: The bishop on c8, because the pawn on e6 blocks its diagonal.
2. **What does 5.e5 do?**
   Answer: It gains space and attacks the knight on f6. It also locks the center, so both sides play on the wings.
3. **Name two plans for Black in this line.**
   Answer: ...c5 against the pawn on d4, and ...f6 against the pawn on e5.

#### Key takeaway

> Build the chain, attack d4 with ...c5, free the c8-bishop and watch White’s space on the kingside.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 8...c5** (`/library/board?fen=rnb2rk1%2Fpp1nqppp%2F4p3%2F2ppP3%2F3P1P2%2F2N2N2%2FPPP3PP%2FR2QKB1R+w+KQ+-+0+9`): Open the board and compare dxc5 with keeping the tension on d4.
- **French Defense games** (`/library/games?opening=French+Defense`): Replay real games that began with the French Defense.

#### Further reading

- *French Defence*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/French_Defence

---

### 36. Caro-Kann Defense: solid and safe

`slug: caro-kann-defense`

Category: Opening · Skill: A sound reply to 1.e4 · Rating: 900–1900 · Time: 8 min

#### Main idea

The Caro-Kann Defense starts with 1.e4 c6. Black prepares ...d5 with a pawn, so the c8-bishop can come out before ...e6 closes it in. The structure is solid and healthy.

It suits players who want a sound game with clear plans and fewer early dangers than in most replies to 1.e4.

#### The first moves

1. 1.e4 c6: Black prepares ...d5 and supports it with the c-pawn.
2. 2.d4 d5: both sides take the center.
3. 3.Nc3 dxe4: White defends e4. Black captures it.
4. 4.Nxe4 Bf5: White recaptures with the knight. Black develops the bishop outside the pawn chain, before ...e6.
5. 5.Ng3 Bg6: White attacks the bishop. Black retreats it.
6. 6.h4 h6: White threatens h5 to trap the bishop. Black plays ...h6, so the bishop can go to h7.
7. 7.Nf3 Nd7: White develops. Black develops and prepares ...Ngf6.
8. 8.h5 Bh7: White pushes the pawn. The bishop retreats to h7 and keeps an eye on the diagonal toward d3.

#### Example

White usually plays Bd3 to offer a trade of Black’s active bishop. Black accepts, finishes development with ...e6 and ...Ngf6, and gets a very solid position with no weaknesses.

Other White tries to know: the Advance Variation, 3.e5, which gains space, and the Exchange Variation, 3.exd5 cxd5, which gives a symmetrical structure.

#### Plans for White

- Develop quickly and offer a trade of Black’s active bishop with Bd3.
- Use the small space advantage and play in the center with c4 or Ne5 ideas.
- Put pieces on active squares. A knight on e5 is strong when Black’s pawns allow it.
- Against ...Bg6, play h4-h5 to gain space on the kingside.

#### Plans for Black

- Develop the light-squared bishop before closing the pawn chain with ...e6.
- Keep the pawn structure healthy: there are no weaknesses to attack.
- Counterattack in the center with ...c5 when you are ready.
- Trade pieces when White chases your bishop. Do not waste time.

#### A trap to know: the queen on e2

1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Qe2 Ngf6?? 6.Nd6#. The queen on e2 pins the pawn on e7 to the king. When the knight jumps to d6, nothing can capture it and the king has no square.

After 5.Qe2, Black should play 5...e6 first.

#### Common mistakes

- Playing ...Ngf6 against a queen on e2 when the knight can jump to d6 (Nd6#).
- Closing the c8-bishop in with ...e6 before it has come out to f5 or g4.
- Playing too passively. The Caro-Kann is solid, but you still need ...c5 or ...e5 to fight.
- Forgetting White’s plan of h4-h5 against the bishop on g6.

#### Check yourself

**Question:** Why does Black play ...Bf5 before ...e6 in the Caro-Kann?

**Answer:** The move ...e6 would block the c8-bishop. By developing the bishop first, Black keeps it active outside the pawn chain.

#### Questions to check yourself

1. **What is the Advance Variation?**
   Answer: 3.e5. White gains space, and Black attacks White’s pawn chain with ...c5.
2. **What does ...h6 do in the main line?**
   Answer: It gives the bishop the square h7, so White’s pawn on h5 cannot trap it.
3. **What is the trap after 5.Qe2?**
   Answer: 5...Ngf6?? 6.Nd6#. The pawn on e7 is pinned, so the knight on d6 cannot be captured.

#### Key takeaway

> Develop the light-squared bishop first, keep a solid pawn structure and counter with ...c5.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 8...Bh7** (`/library/board?fen=r2qkbnr%2Fpp1npppb%2F2p4p%2F7P%2F3P4%2F5NN1%2FPPP2PP1%2FR1BQKB1R+w+KQkq+-+1+9`): Open the board and look at White’s ideas: Bd3, Bf4 and Qe2.
- **Caro-Kann Defense games** (`/library/games?opening=Caro-Kann+Defense`): Replay real games that began with the Caro-Kann Defense.

#### Further reading

- *Caro–Kann Defence*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Caro%E2%80%93Kann_Defence

---

### 37. Pirc and Modern Defense: let White build the center

`slug: pirc-defense`

Category: Opening · Skill: Counterattacking as Black · Rating: 1100–1900 · Time: 9 min

#### Main idea

In the Pirc Defense (1.e4 d6 2.d4 Nf6 3.Nc3 g6) Black lets White build a big center and plans to attack it later. The bishop on g7 becomes a strong piece on the long diagonal. The Modern Defense (1...g6 first) is a similar idea with a different move order.

It suits flexible players who like to counterattack. It has more theory than it seems, and White has several sharp tries, so you must know the plan.

#### The first moves

1. 1.e4 d6: Black prepares to develop without taking the center yet.
2. 2.d4 Nf6: White takes the center. Black attacks e4.
3. 3.Nc3 g6: White defends e4 with a developing move. Black prepares the bishop on g7.
4. 4.Nf3 Bg7: White develops. The bishop looks along the long diagonal.
5. 5.Be2 O-O: White prepares to castle. Black castles.
6. 6.O-O c6: White castles. Black prepares ...Qc7 and the break ...e5, or ...b5.

#### Example

Black’s next ideas are ...Nbd7, ...Qc7 and the break ...e5 to challenge the center. White has more space, but if White does not keep the center under control, Black gets counterplay.

White’s sharpest try is the Austrian Attack, 4.f4. White gets a huge center and a quick attack, so Black must counter at once with ...Bg7, ...O-O and a break such as ...c5 or ...e5.

#### Plans for White

- Use the space of a big center: e4, d4 and later e5.
- Choose a setup: the calm Classical one with Be2 and O-O, or the sharp one with f4 and Bd3.
- Develop quickly and castle before you attack.
- Watch Black’s breaks ...e5 and ...c5 and be ready to answer them.

#### Plans for Black

- Develop quickly and castle. Your king is safe on g8 behind the bishop.
- Prepare the break ...e5 with ...Nbd7 and ...c6, or play ...c5.
- Use the bishop on g7 along the long diagonal and try not to trade it.
- Stay alert against the Austrian Attack: do not play slowly.

#### A pitfall to avoid: the Austrian Attack

After 4.f4, White has pawns on e4, d4 and f4. If Black plays slowly, the push e5 gains time and the attack on the kingside arrives first. Counter in the center right away, with ...c5 or ...e5, and keep your pieces developing.

#### Common mistakes

- Playing passively and never striking at the center with ...e5 or ...c5.
- Trading the bishop on g7, which is Black’s best piece.
- Playing without a plan against 4.f4.
- As White, pushing pawns without developing the pieces.

#### Check yourself

**Question:** What is the difference between the Pirc and the Modern Defense?

**Answer:** In the Pirc, Black plays ...Nf6 early. In the Modern, Black plays ...g6 and ...Bg7 first and keeps the knight flexible.

#### Questions to check yourself

1. **Which pawn break does Black aim for in the Classical Pirc?**
   Answer: ...e5, or sometimes ...c5.
2. **What is the Austrian Attack?**
   Answer: 4.f4. White builds a very big center and attacks.
3. **Why does Black play ...d6 and ...g6 and not ...d5?**
   Answer: Black prefers to let White build the center, then attacks it later with pieces and pawn breaks.

#### Key takeaway

> Let White build the center, put the bishop on g7 and strike with ...e5 or ...c5.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 6...c6** (`/library/board?fen=rnbq1rk1%2Fpp2ppbp%2F2pp1np1%2F8%2F3PP3%2F2N2N2%2FPPP1BPPP%2FR1BQ1RK1+w+-+-+0+7`): Open the board and compare White’s choices: a4, Re1 and Qd3.
- **Pirc Defense games** (`/library/games?opening=Pirc+Defense`): Replay real games that began with the Pirc Defense.

#### Further reading

- *Pirc Defence*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Pirc_Defence

---

### 38. Scandinavian Defense: take the center right away

`slug: scandinavian-defense`

Category: Opening · Skill: A simple reply to 1.e4 · Rating: 800–1700 · Time: 8 min

#### Main idea

The Scandinavian Defense starts with 1.e4 d5. Black challenges the center at once. After 2.exd5 Qxd5 3.Nc3 the queen has to move again, but she finds a safe square, and Black can develop calmly.

It suits beginners and club players: there is little theory, and the plans are simple. The price is that White gets some extra time and space, so Black must develop carefully.

#### The first moves

1. 1.e4 d5: Black strikes at the center at once.
2. 2.exd5 Qxd5: White takes the pawn. Black recaptures with the queen.
3. 3.Nc3 Qa5: White develops with tempo and attacks the queen. Black moves it to a safe square.
4. 4.d4 Nf6: White takes the center. Black develops a knight.
5. 5.Nf3 c6: White develops. Black supports the queen and prepares ...Bf5.
6. 6.Bc4 Bf5: White develops the bishop. Black develops the bishop outside the pawn chain, before ...e6.
7. 7.Bd2 e6: White finishes developing the minor pieces. Black builds a solid pawn center.

#### Example

Black will castle after ...Be7 or ...Bb4, and the queen goes to c7 or stays on a5. White has a small space advantage, and Black has a solid position without weak pawns.

#### Plans for White

- Develop with tempo against the queen: Nc3, d4, Nf3 and Bc4.
- Use your space advantage and castle quickly.
- Look for jumps like Nb5 or Nd5 when Black’s pieces are not ready.
- Trade Black’s active bishop on f5 if it helps, or take away its squares.

#### Plans for Black

- Develop the light-squared bishop with ...Bf5 or ...Bg4 before playing ...e6.
- Keep the queen safe on a5, d6 or d8, and be ready to trade or retreat.
- Play ...c6 to support the queen and the center, then castle.
- Strike with ...e5 or ...c5 when your pieces are ready.

#### A pitfall to avoid: the early queen

The queen comes out on move 2, so every extra queen move costs time. After 4.d4, ideas like Bd2 and Nb5 can bother a queen on a5. Check each queen move and do not leave her where a minor piece can attack her with tempo.

#### Common mistakes

- Moving the queen several times and falling behind in development.
- Taking pawns with the queen while the other pieces are still at home.
- Closing the c8-bishop in with ...e6 before it has come out to f5 or g4.
- Forgetting that the queen on a5 can be attacked by Bd2, Nb5 and b4 ideas.

#### Check yourself

**Question:** Why does White play 3.Nc3 after 2...Qxd5?

**Answer:** It develops a knight and attacks the queen, so White gains a tempo.

#### Questions to check yourself

1. **Where can the queen go after 3.Nc3?**
   Answer: Most often to a5 or d6, and d8 is also safe.
2. **Why is ...c6 a useful move for Black?**
   Answer: It supports the queen and the center, controls b5 and d5, and prepares ...Bf5 and ...e6.
3. **What should Black do with the c8-bishop?**
   Answer: Develop it outside the pawn chain with ...Bf5 or ...Bg4 before playing ...e6.

#### Key takeaway

> Take the center, move the queen with care, get the light-squared bishop out and keep a solid pawn structure.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 7...e6** (`/library/board?fen=rn2kb1r%2Fpp3ppp%2F2p1pn2%2Fq4b2%2F2BP4%2F2N2N2%2FPPPB1PPP%2FR2QK2R+w+KQkq+-+0+8`): Open the board and look at White’s ideas: Qe2, Ne5, O-O and a4.
- **Scandinavian Defense games** (`/library/games?opening=Scandinavian+Defense`): Replay real games that began with the Scandinavian Defense.

#### Further reading

- *Scandinavian Defence*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Scandinavian_Defense

---

### 39. Queen’s Gambit: the main 1.d4 opening

`slug: queens-gambit`

Category: Opening · Skill: Fighting for the center with pawns · Rating: 1000–1900 · Time: 8 min

#### Main idea

The Queen’s Gambit starts with 1.d4 d5 2.c4. White offers a pawn to pull Black’s d5 pawn away and take control of the center. It is not a true gambit: if Black takes the pawn, White can usually win it back.

It is the main opening after 1.d4, so every player meets it often. It is also a good school for pawn structure and the fight for the center.

#### The first moves

1. 1.d4 d5: both sides take the center with the queen’s pawn.
2. 2.c4 e6: White attacks d5. Black defends it solidly. This is the Queen’s Gambit Declined.
3. 3.Nc3 Nf6: White develops and adds pressure on d5. Black develops and also guards d5.
4. 4.Bg5 Be7: White pins the knight to the queen. Black breaks the pin.
5. 5.e3 O-O: White opens the f1-bishop and supports the center. Black castles.
6. 6.Nf3 Nbd7: both sides complete the kingside setup. Black develops the queen’s knight.

#### Example

White usually continues with Qc2, Bd3 and Rc1, planning the central break e4 or the pawn push c5. Black prepares the freeing break ...c5 or ...e5 and keeps the position solid.

Black has other second moves: 2...c6 (the Slav, solid, keeping the c8-bishop free) and 2...dxc4 (the Queen’s Gambit Accepted, taking the pawn and giving back the center).

#### Plans for White

- Build a strong center with e3, Nf3, Bd3 and Qc2 or Rc1.
- Aim for the break e4 to open the position when your pieces are ready.
- Use the bishop on g5 to pressure the knight on f6 and the pawn on e7.
- If Black takes on c4, win the pawn back with e3 and Bxc4.

#### Plans for Black

- Keep the d5 pawn protected and develop solidly.
- Free the position with ...c5 or ...e5, or with ...dxc4 at the right moment.
- Develop the c8-bishop with ...b6 and ...Bb7, or after ...dxc4.
- Black is slightly cramped, so trading pieces helps, especially knights.

#### A trap to know: the Elephant Trap

1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Nbd7 5.cxd5 exd5 6.Nxd5?? Nxd5! 7.Bxd8 Bb4+ 8.Qd2 Bxd2+ 9.Kxd2 Kxd8. White grabbed a pawn and took the queen, but Black wins the queen back with check and ends up a piece ahead for a pawn.

#### Common mistakes

- Taking on d5 with the knight in the Elephant Trap (6.Nxd5??).
- Trying to hold the extra pawn if you take on c4. White usually wins it back with e3, Bxc4 or a4.
- Forgetting that ...e6 closes in the c8-bishop. Plan its development.
- Playing e4 too early, before the pieces are developed.

#### Check yourself

**Question:** Why is the Queen’s Gambit not a true gambit?

**Answer:** If Black takes on c4, White can win the pawn back, for example with e3 and Bxc4.

#### Questions to check yourself

1. **What does 2.c4 attack?**
   Answer: The d5 pawn. White wants to remove it and control the center.
2. **What is the Slav Defense?**
   Answer: 2...c6. It defends d5 with a pawn and keeps the c8-bishop free.
3. **What is the Elephant Trap?**
   Answer: After ...Nbd7, 6.Nxd5?? Nxd5 7.Bxd8 Bb4+ and Black wins the queen back and ends a piece ahead.

#### Key takeaway

> Offer the c-pawn to win the center, develop with e3 and Nf3, and aim for the break e4.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 6...Nbd7** (`/library/board?fen=r1bq1rk1%2Fpppnbppp%2F4pn2%2F3p2B1%2F2PP4%2F2N1PN2%2FPP3PPP%2FR2QKB1R+w+KQ+-+3+7`): Open the board and compare Qc2, Rc1 and cxd5 for White.
- **Queen’s Gambit games** (`/library/games?opening=Queen%27s+Gambit+Declined`): Replay real games that began with the Queen’s Gambit Declined.

#### Further reading

- *Queen’s Gambit*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Queen%27s_Gambit

---

### 40. Slav Defense: solid against the Queen’s Gambit

`slug: slav-defense`

Category: Opening · Skill: A solid reply to 1.d4 · Rating: 1000–1900 · Time: 8 min

#### Main idea

The Slav Defense starts with 1.d4 d5 2.c4 c6. Black defends d5 with the c-pawn instead of the e-pawn, so the c8-bishop stays free to develop. It is a very solid reply to the Queen’s Gambit.

It suits players who want a sound structure and clear plans. It is one of the most respected defenses at every level.

#### The first moves

1. 1.d4 d5: both sides take the center.
2. 2.c4 c6: White attacks d5. Black defends it with the c-pawn and keeps the bishop free.
3. 3.Nf3 Nf6: both sides develop a knight.
4. 4.Nc3 dxc4: White adds pressure on d5. Black takes the pawn.
5. 5.a4 Bf5: White stops ...b5. Black develops the bishop outside the pawn chain.
6. 6.e3 e6: White opens the f1-bishop to win the pawn back. Black closes the center, now that the bishop is out.
7. 7.Bxc4 Bb4: White wins the pawn back. Black pins the knight on c3.

#### Example

After 8.O-O Nbd7, Black’s position is solid and has no weaknesses. White has a small lead in development and the center. Black plans ...Bg6, ...O-O and a break such as ...c5 or ...e5 to equalize.

If Black plays 4...e6 instead of 4...dxc4, the game becomes the Semi-Slav, which is sharper.

#### Plans for White

- Win back the c4 pawn and use the space it gives you.
- Develop quickly and castle, then prepare the central break e4.
- Use the bishops actively, and watch for a bishop on g5 or d3.
- Keep the queenside under control with a4 and Qc2.

#### Plans for Black

- Develop the c8-bishop to f5 or g4 before you play ...e6.
- Be ready to give the c4 pawn back instead of weakening your position.
- Free the game with ...c5 or ...e5 when your pieces are ready.
- Keep a solid pawn structure without weaknesses.

#### A pitfall to avoid: holding the pawn

The move 5.a4 stops ...b5, so Black cannot hold the extra pawn. Do not weaken your position just to keep it. Develop your pieces, and let White win the pawn back.

#### Common mistakes

- Playing ...e6 before the c8-bishop has come out, which locks it in (unless you want the Semi-Slav).
- Trying to hold the c4 pawn at all costs.
- Leaving the king in the center after White wins the pawn back.
- Ignoring White’s central break e4.

#### Check yourself

**Question:** What is the main advantage of the Slav over the Queen’s Gambit Declined?

**Answer:** The c8-bishop is not locked behind the e6 pawn. Black can develop it to f5 or g4 first.

#### Questions to check yourself

1. **What does 2...c6 do?**
   Answer: It defends d5 and prepares ...dxc4 and ...Bf5.
2. **What is the Semi-Slav?**
   Answer: The setup after 1.d4 d5 2.c4 c6 3.Nf3 Nf6 4.Nc3 e6, with pawns on c6, d5 and e6.
3. **Which move stops Black from holding the pawn with ...b5?**
   Answer: 5.a4.

#### Key takeaway

> Defend d5 with ...c6, bring out the c8-bishop first and be ready to give the pawn back.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 7...Bb4** (`/library/board?fen=rn1qk2r%2Fpp3ppp%2F2p1pn2%2F5b2%2FPbBP4%2F2N1PN2%2F1P3PPP%2FR1BQK2R+w+KQkq+-+1+8`): Open the board and look at White’s ideas: O-O, Qe2 and Bd2.
- **Slav Defense games** (`/library/games?opening=Slav+Defense`): Replay real games that began with the Slav Defense.

#### Further reading

- *Slav Defense*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Slav_Defense

---

### 41. London System: one setup against everything

`slug: london-system`

Category: Opening · Skill: A simple setup with little theory · Rating: 800–1700 · Time: 8 min

#### Main idea

The London System starts with 1.d4 and 2.Bf4. White develops the dark-squared bishop outside the pawn chain, then builds the same compact setup with e3, c3, Nf3, Nbd2 and Bd3, whatever Black plays.

It suits players who want to spend little time on theory. It is very common in club games and online.

#### The first moves

1. 1.d4 d5: both sides take the center.
2. 2.Bf4 Nf6: White puts the bishop outside the pawn chain, before playing e3. Black develops.
3. 3.e3 e6: White opens the way for the other bishop. Black builds a solid center.
4. 4.Nf3 c5: White develops. Black attacks d4.
5. 5.c3 Nc6: White supports d4. Black adds pressure on it.
6. 6.Nbd2 Bd6: White completes the setup. Black challenges White’s active bishop.
7. 7.Bg3 O-O: White keeps the bishop. If Black trades it, White recaptures with the h-pawn and opens the h-file. Black castles.

#### Example

White’s plan is to play Bd3, then Qe2 or Qc2, and finally the break e4, or the jump Ne5. The London is solid, but it is not passive: the ideas Ne5 and e4 give White real attacking chances.

#### Plans for White

- Develop the bishop to f4 before playing e3, or it gets locked in.
- Complete the setup with c3, Nbd2 and Bd3, then castle.
- Prepare the break e4 with Nbd2, Bd3 and Qe2, or jump to e5 with the knight.
- If Black attacks the bishop with ...Bd6 or ...Nh5, keep it with Bg3.

#### Plans for Black

- Hit the center from the side with ...c5 and ...Qb6.
- Attack the b2 pawn. It is the weak point of the setup.
- Challenge the bishop with ...Bd6 or ...Nh5.
- Use your own central pawns to take space. White’s setup is slow.

#### A pitfall to avoid: the b2 pawn

After 1.d4 d5 2.Bf4 c5 3.e3 Qb6, the b2 pawn is attacked and the c1-bishop is no longer there to defend it. Do not ignore the threat. Defend with 4.Qc1 or 4.b3.

#### Common mistakes

- Playing e3 before Bf4, so the bishop is shut in behind its own pawn.
- Ignoring ...Qb6 and losing the b2 pawn.
- Playing the setup on autopilot and not checking Black’s tactics.
- Forgetting the attack in the center. Ne5 and e4 are the plans that give White winning chances.

#### Check yourself

**Question:** Why does White play Bf4 before e3 in the London?

**Answer:** After e3, the c1-bishop is locked behind the pawn. Developing it first keeps it active outside the pawn chain.

#### Questions to check yourself

1. **Which pawn is the usual target for Black in the London?**
   Answer: The pawn on b2, attacked by ...Qb6.
2. **What does White do if Black plays ...Bd6 against the bishop on f4?**
   Answer: White plays Bg3. If Black trades on g3, White recaptures with hxg3 and gets an open h-file.
3. **What are White’s typical central ideas?**
   Answer: The jump Ne5 and the pawn break e4.

#### Key takeaway

> Bishop first, then e3, c3, Nf3, Nbd2 and Bd3, and look for Ne5 or e4.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 7...O-O** (`/library/board?fen=r1bq1rk1%2Fpp3ppp%2F2nbpn2%2F2pp4%2F3P4%2F2P1PNB1%2FPP1N1PPP%2FR2QKB1R+w+KQ+-+5+8`): Open the board and look for White’s ideas: Bd3, Ne5 and Qe2.
- **London System games** (`/library/games?search=London`): Replay real games that began with the London System.

#### Further reading

- *London System*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/London_System

---

### 42. King’s Indian Defense: let White build, then strike

`slug: kings-indian-defense`

Category: Opening · Skill: Counterattacking a big center · Rating: 1300–2000 · Time: 9 min

#### Main idea

In the King’s Indian Defense, Black lets White build a big center with pawns on c4, d4 and e4, then attacks it with pieces and pawn breaks. The bishop on g7 becomes a very powerful piece.

It suits fighting players who like to attack the king. It is sharp and rich in plans, but you must know the plan, not only the moves.

#### The first moves

1. 1.d4 Nf6: Black controls e4 and does not take the center with pawns yet.
2. 2.c4 g6: White grows the center. Black prepares to put the bishop on g7.
3. 3.Nc3 Bg7: White develops. The bishop looks along the long diagonal.
4. 4.e4 d6: White takes a big center. Black prepares ...e5 and opens the c8-bishop.
5. 5.Nf3 O-O: White develops. Black castles and the king is safe.
6. 6.Be2 e5: Black strikes at the center at once.

#### Example

The usual continuation is 7.O-O Nc6 8.d5 Ne7. White plays on the queenside with c5, while Black plays ...Nd7, ...f5 and ...g5 to attack the king. This is the typical King’s Indian race: both kings are castled, and each side pushes pawns on its own wing.

#### Plans for White

- Use your space: push c5 to open lines on the queenside.
- Keep the center strong with Be3 and Qd2 and close it with d5 when the moment is right.
- Keep your pieces near the king. Black’s attack with ...f5 comes quickly.
- Count the tempi. Your queenside attack must be faster than Black’s kingside attack.

#### Plans for Black

- Attack with ...f5, then ...g5 and ...f4, against the king.
- Use the bishop on g7 and the knights to hit the center.
- Break the center with ...e5 and, in some lines, ...c5.
- Keep your own king safe and support pawn pushes with pieces.

#### A pitfall to avoid: the pawn race

In the main line, both sides attack on opposite wings. If Black’s attack is too slow, White’s queenside play arrives first. Do not waste a move: every tempo counts in a pawn race.

#### Common mistakes

- Learning the moves without the plan (...f5 and the kingside attack).
- Attacking too slowly, so White’s c5 push arrives first.
- Trading the bishop on g7. It is Black’s best piece in this opening.
- Pushing kingside pawns without piece support, which only weakens your king.

#### Check yourself

**Question:** Why does Black let White build a big center in the King’s Indian?

**Answer:** Black plans to attack the center later with pieces and pawn breaks. A big center can become a target.

#### Questions to check yourself

1. **What does the bishop on g7 do?**
   Answer: It controls the long diagonal and supports the break ...e5.
2. **What is Black’s main pawn break in the classical line?**
   Answer: ...f5, followed by ...g5 and ...f4 to attack the king.
3. **What is White’s main plan after d5?**
   Answer: Push c5 and open the queenside.

#### Key takeaway

> Let White build the center, then strike with ...e5 and ...f5 and attack the king quickly.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 6...e5** (`/library/board?fen=rnbq1rk1%2Fppp2pbp%2F3p1np1%2F4p3%2F2PPP3%2F2N2N2%2FPP2BPPP%2FR1BQK2R+w+KQ+-+0+7`): Open the board and compare White’s choices: O-O, d5 and dxe5.
- **King’s Indian games** (`/library/games?search=King%27s+Indian`): Replay real games that began with the King’s Indian Defense.

#### Further reading

- *King’s Indian Defence*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/King%27s_Indian_Defence

---

### 43. Nimzo-Indian Defense: pin the knight, control e4

`slug: nimzo-indian-defense`

Category: Opening · Skill: Strategic play against 1.d4 · Rating: 1300–2000 · Time: 9 min

#### Main idea

The Nimzo-Indian Defense starts with 1.d4 Nf6 2.c4 e6 3.Nc3 Bb4. Black pins the knight on c3, which supports e4, and fights for the center with pieces instead of pawns. It is one of the most respected replies to 1.d4.

It suits players who like strategy. White often gets the two bishops, but Black gets a healthy position and good counterplay.

#### The first moves

1. 1.d4 Nf6: both sides develop, and Black controls e4.
2. 2.c4 e6: White takes more space. Black opens the f8-bishop.
3. 3.Nc3 Bb4: White develops. Black pins the knight on c3 to the king, so White cannot easily play e4.
4. 4.e3 O-O: White opens the f1-bishop and supports the center. Black castles.
5. 5.Bd3 d5: White develops. Black takes a share of the center.
6. 6.Nf3 c5: White develops. Black attacks d4.
7. 7.O-O Nc6: White castles. Black adds pressure on d4. This is the Rubinstein system.

#### Example

After 7...Nc6, White often plays a3. If Black trades on c3, White gets the two bishops but doubled pawns on the c-file, and Black can attack them.

#### Plans for White

- Get the two bishops and aim to play e4 to build a big center.
- Develop quickly and castle before Black’s counterplay starts.
- Ask the bishop a question with a3, or prevent doubled pawns with Qc2.
- If doubled pawns appear, use the open b-file and the bishops to attack.

#### Plans for Black

- Pin the knight and control e4 with pieces: ...Ne4 or ...d5.
- Trade on c3 to double White’s pawns when it helps, then attack the weak pawns on c3 and c4.
- Fight for the center with ...c5 and ...d5.
- Keep your king safe and castle early.

#### A pitfall to avoid: the bishop pair

After ...Bxc3, White gets two bishops, and in open positions they can be strong. Do not give up the bishop without a reason. Trade it when White’s pawns become a weakness, or when you can win the c-pawns.

#### Common mistakes

- Trading the bishop on c3 too early and giving White the bishop pair for nothing.
- Forgetting that the pin is not permanent: White can play a3 or Qc2, so know your plan.
- Letting White build a big center with e4 without a counter.
- Leaving the king in the center while White finishes development.

#### Check yourself

**Question:** What does 3...Bb4 do?

**Answer:** It pins the knight on c3 to the king, so White cannot easily play e4.

#### Questions to check yourself

1. **Why does White play a3?**
   Answer: To ask the bishop to decide: trade on c3, which gives White the bishop pair, or retreat.
2. **What is the Rubinstein system?**
   Answer: 4.e3 followed by Bd3 and Nf3. It is the most common setup against the Nimzo-Indian.
3. **How can Black punish doubled c-pawns?**
   Answer: By attacking them with ...dxc4 and ...Qc7, and by controlling e4.

#### Key takeaway

> Pin the knight, control e4, and be ready to trade on c3 to damage White’s pawns.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 7...Nc6** (`/library/board?fen=r1bq1rk1%2Fpp3ppp%2F2n1pn2%2F2pp4%2F1bPP4%2F2NBPN2%2FPP3PPP%2FR1BQ1RK1+w+-+-+2+8`): Open the board and compare a3, cxd5 and Qe2 for White.
- **Nimzo-Indian games** (`/library/games?search=Nimzo-Indian`): Replay real games that began with the Nimzo-Indian Defense.

#### Further reading

- *Nimzo-Indian Defence*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/Nimzo-Indian_Defence

---

### 44. English Opening: a flexible flank start

`slug: english-opening`

Category: Opening · Skill: Flexible, positional play · Rating: 1200–2000 · Time: 8 min

#### Main idea

The English Opening starts with 1.c4. White controls d5 and the center from the side and keeps its options open. The game can become a Queen’s Gambit type of position, a Sicilian with the colors reversed, or something completely new.

It suits patient players who like flexible pawn structures and positional plans. Many strong players choose it.

#### The first moves

1. 1.c4 e5: White controls d5 from the side. Black takes the center with a pawn.
2. 2.Nc3 Nf6: White develops and adds pressure on d5. Black develops and attacks e4.
3. 3.Nf3 Nc6: White attacks e5. Black defends it.
4. 4.g3 d5: White prepares to put the king’s bishop on g2. Black strikes at the center at once.
5. 5.cxd5 Nxd5: White trades pawns. Black recaptures with the knight.
6. 6.Bg2 Nb6: the bishop looks along the long diagonal. Black retreats the knight to avoid a trade or a pin.
7. 7.O-O Be7: White castles. Black develops the bishop and prepares to castle.

#### Example

White has a small lead in the center and a bishop on the long diagonal, aiming at b7 and the queenside. A typical plan is to play on the queenside with a3 and b4, while keeping an eye on d5. Black keeps the center solid and develops quickly.

#### Plans for White

- Control d5 and the long diagonal with the bishop on g2.
- Play on the queenside with a3 and b4 when it is safe.
- Keep your pawn structure flexible and choose a setup after seeing Black’s reply.
- If Black takes on c4, win the pawn back with active pieces.

#### Plans for Black

- Fight for the center with ...e5 and ...d5.
- Keep your pawn structure healthy and develop quickly.
- Use the d4 square. A knight on d4 can be very strong if White does not prevent it.
- Challenge the bishop on g2 by trading it or blocking its diagonal.

#### A pitfall to avoid: the d4 square

After 1.c4 e5, White has no pawn on d4 to control that square, so Black’s knight can jump there. If you play d3 and ignore it, Black’s knight sits on d4 and bothers you. Trade it off with Nxd4 when it helps, or keep an eye on it with e3.

#### Common mistakes

- Playing the English without a plan against ...e5.
- Trading the bishop on g2 without a good reason. It is White’s best piece in this setup.
- Forgetting that ...d5 can strike at the center at once, and answering it without a plan.
- Leaving the d4 square to Black’s knight.

#### Check yourself

**Question:** Why is the English called a “Reversed Sicilian” after 1.c4 e5?

**Answer:** White has the pawn structure of the Sicilian, but with the colors reversed and an extra move.

#### Questions to check yourself

1. **What does 1.c4 control?**
   Answer: The d5 square, from the side.
2. **Why do White’s g3 and Bg2 make sense?**
   Answer: The bishop controls the long diagonal and pressures d5 and b7, and the king gets ready to castle safely.
3. **What does Black strike with after 3.Nf3 Nc6 4.g3?**
   Answer: ...d5, attacking the center at once.

#### Key takeaway

> Control d5, put the bishop on g2, castle and choose your plan after seeing Black’s setup.

#### Practice it

- **Opening moves** (`/practice/opening-moves`): Positions from moves 4–12 of real games where a player went wrong: find the move that follows the principles, or spot the mistake.
- **Try the position after 7...Be7** (`/library/board?fen=r1bqk2r%2Fppp1bppp%2F1nn5%2F4p3%2F8%2F2N2NP1%2FPP1PPPBP%2FR1BQ1RK1+w+kq+-+4+8`): Open the board and compare White’s plans: d3, a3, Be3 and Rb1.
- **English Opening games** (`/library/games?opening=English+Opening`): Replay real games that began with the English Opening.

#### Further reading

- *English Opening*, Wikipedia, Wikipedia: https://en.wikipedia.org/wiki/English_Opening

---
