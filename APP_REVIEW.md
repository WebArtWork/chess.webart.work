# App Store review: reply to Guideline 2.1 (Information Needed)

Paste the **Reply** below into App Store Connect (Resolution Center), and the **Notes** section into
*App Review Information → Notes*. Both are in English because the reviewers read English.

Before replying, record the screen recording (item 1). Apple cannot accept text for that item.

## Screen recording (you record this)

Record on a **physical iPhone** with the build you submit (QuickTime on a Mac, or Control Center → Screen Recording).
Start from the home screen, then:

1. Launch the app, open **Practice → Daily puzzle**, solve one puzzle; open **Theory** and one lesson; open **Library → Analysis board**.
2. Open **Profile / Sign in** → **Continue with Apple** → finish sign-in (this is the account registration / login flow).
3. Show **Profile**: rating and pawns.
4. Open **Classes → create a class** (name, add one class mate email) and open the class page. Show the **Report this class** link at the bottom of a class you joined (or point at it on a second account).
5. Go back to **Profile → Delete account** → confirm → Apple sign-in sheet → account is deleted and the app returns to the start.

There is no paid content and no in-app purchase, so nothing to show for that.

## Reply (Resolution Center)

Hello, thank you for the review. Here is the information requested.

1. **Screen recording:** attached. It was captured on a physical iPhone, starting with the app launch, and shows
   training without an account, Sign in with Apple, creating a class, and account deletion.

2. **Purpose and audience:** Chess training teaches chess players (beginners to club level, ages 13+) to think
   in candidate moves, following Alexander Kotov's method: find every good move, calculate the tree of lines,
   then choose. It offers puzzles from real Lichess games, mate in 1 and 3, tactics, a 3-move "Look Ahead"
   trainer, theory lessons with Stockfish analysis, and "Classes", where a teacher runs a weekly class and plays
   a tournament with invited students. It solves the problem that most puzzle apps train pattern spotting but
   not the habit of calculating before moving. The app is free, with no ads and no purchases.

3. **How to access the main features:** No account is needed. Every training mode works as soon as the app opens.
   Signing in is optional (Profile → Sign in → Continue with Apple) and only syncs progress, saves games and
   enables Classes. Use your own Apple ID; no password or demo credentials are needed, and the app never asks
   for a password of its own. To try Classes alone, sign in with Apple, tap **Classes → Create class**, enter a
   name and save. Joining someone else's class needs an invitation by email, so a reviewer can test everything
   as the class owner.

4. **External services:** Firebase Authentication and Cloud Firestore (Google) for sign-in and stored data;
   Sign in with Apple; the Stockfish chess engine, which runs on the device (no server);
   puzzle data from the public Lichess game database, bundled inside the app (no Lichess account or network call).
   No analytics, advertising or payment services, and no AI services.

5. **Regional differences:** None. The app works the same in every region. The interface is available in
   English and Ukrainian, chosen in the app's settings.

6. **Regulated industry / protected material:** The app is not in a regulated industry. Third-party material:
   the Lichess game database is released under CC0 (public domain); Stockfish, Chessground and the piece images are
   open source (GPL), and the app's own source code is published under GPL-3.0 at
   https://github.com/WebArtWork/chess.webart.work. Credits and licenses are listed in the app under
   Profile → Licenses and credits.

**Account deletion:** Profile → Delete account permanently deletes the account, its data in Firestore and the
local data, and revokes the Sign in with Apple token.

**User-generated content:** The app has no public feed, chat or profiles. The only user-entered content is a class
name and invited email addresses. A class is private: it can be read only by its owner and the people the owner
invited by email, and it is never listed or searchable. Members can use **Report this class** on the class page
(it writes to ceo@webart.work); we answer reports within 24 hours and delete abusive classes and accounts.
Contact details are in the app (Support and Privacy policy pages).

## Notes (App Review Information → Notes)

Chess training app. No account is required: all training modes work immediately. Optional sign-in is
Sign in with Apple only on iOS (use any Apple ID). After signing in you can create a class under Classes.
Account deletion: Profile → Delete account. Report a class: open a class you were invited to → Report this class.
No in-app purchases, ads or analytics. Support: https://chess.webart.work/support , Privacy: https://chess.webart.work/privacy .
Third-party services: Firebase Auth/Firestore, Sign in with Apple. Chess engine (Stockfish) runs on device.
The app works the same in all regions and is not in a regulated industry.

## App Store Connect settings to check

- **App Privacy (nutrition label):** match `ios/App/App/PrivacyInfo.xcprivacy`: Name, Email Address, User ID,
  Gameplay Content, Other User Content; all linked to the user, used for *App Functionality* only; **not** used for tracking.
- **Age rating questionnaire:** no user-generated content that is public, no chat, no purchases. If asked about
  user-generated content, answer that it is private/invite-only.
- **Privacy Policy URL:** https://chess.webart.work/privacy . **Support URL:** https://chess.webart.work/support .
- **Screenshots:** must show the real app in use (a puzzle, a lesson, the board), not the splash or sign-in screen.
- **Sign in with Apple:** the capability must be enabled for `work.webart.chess` in the Apple Developer portal.
- **Build:** increase the build number (`CURRENT_PROJECT_VERSION`) before archiving.
- **Firebase console:** Authentication → Sign-in method → Apple must be enabled with your Services ID, Team ID, key ID and private key.
- **Firestore rules:** deploy with `npm run rules` if you changed `firestore.rules` (this change did not).
