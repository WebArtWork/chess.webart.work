import { TheoryLessonBody } from '../theory.interface';
import { analyzingYourGames } from './analyzing-your-games';
import { blockadeAndOutposts } from './blockade-and-outposts';
import { boardVisualization } from './board-visualization';
import { calculateCriticalLines } from './calculate-critical-lines';
import { calculationDiscipline } from './calculation-discipline';
import { candidateMoves } from './candidate-moves';
import { ccto } from './ccto';
import { chessBasics } from './chess-basics';
import { chessPsychology } from './chess-psychology';
import { clearEndgameThinking } from './clear-endgame-thinking';
import { decisionMaking } from './decision-making';
import { explainEveryMove } from './explain-every-move';
import { initiativeAndSacrifice } from './initiative-and-sacrifice';
import { openingPrinciples } from './opening-principles';
import { pawnStructures } from './pawn-structures';
import { pieceManeuvering } from './piece-maneuvering';
import { positionImbalances } from './position-imbalances';
import { positionsWithoutHints } from './positions-without-hints';
import { practicalEndgames } from './practical-endgames';
import { practicalImprovement } from './practical-improvement';
import { prophylaxis } from './prophylaxis';
import { sacrificeCompensation } from './sacrifice-compensation';
import { stepByStepTraining } from './step-by-step-training';
import { stopRepeatingMistakes } from './stop-repeating-mistakes';
import { strategicPlans } from './strategic-plans';
import { structuredImprovement } from './structured-improvement';
import { tournamentRules } from './tournament-rules';
import { howOpeningsWork } from './how-openings-work';
import { kingsGambit } from './kings-gambit';
import { nimzoIndianDefense } from './nimzo-indian-defense';
import { pircDefense } from './pirc-defense';
import { scandinavianDefense } from './scandinavian-defense';
import { slavDefense } from './slav-defense';
import { viennaGame } from './vienna-game';
import { caroKannDefense } from './caro-kann-defense';
import { englishOpening } from './english-opening';
import { frenchDefense } from './french-defense';
import { italianGame } from './italian-game';
import { kingsIndianDefense } from './kings-indian-defense';
import { londonSystem } from './london-system';
import { queensGambit } from './queens-gambit';
import { ruyLopez } from './ruy-lopez';
import { scotchGame } from './scotch-game';
import { sicilianDefense } from './sicilian-defense';

/** Every lesson's text. Only the lesson page imports this, so the texts stay out of the main bundle. */
export const THEORY_LESSONS: TheoryLessonBody[] = [
	chessBasics,
	tournamentRules,
	openingPrinciples,
	pawnStructures,
	ccto,
	decisionMaking,
	chessPsychology,
	analyzingYourGames,
	candidateMoves,
	explainEveryMove,
	stepByStepTraining,
	structuredImprovement,
	positionImbalances,
	prophylaxis,
	blockadeAndOutposts,
	clearEndgameThinking,
	practicalEndgames,
	calculateCriticalLines,
	initiativeAndSacrifice,
	boardVisualization,
	practicalImprovement,
	strategicPlans,
	positionsWithoutHints,
	sacrificeCompensation,
	pieceManeuvering,
	calculationDiscipline,
	stopRepeatingMistakes,
	howOpeningsWork,
	italianGame,
	ruyLopez,
	scotchGame,
	sicilianDefense,
	frenchDefense,
	caroKannDefense,
	queensGambit,
	londonSystem,
	kingsIndianDefense,
	englishOpening,
	viennaGame,
	kingsGambit,
	pircDefense,
	scandinavianDefense,
	slavDefense,
	nimzoIndianDefense,
];
