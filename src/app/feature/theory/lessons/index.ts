import { TheoryLessonBody } from '../theory.interface';
import { analyzingYourGames } from './analyzing-your-games';
import { blockadeAndOutposts } from './blockade-and-outposts';
import { boardVisualization } from './board-visualization';
import { calculateCriticalLines } from './calculate-critical-lines';
import { calculationDiscipline } from './calculation-discipline';
import { candidateMoves } from './candidate-moves';
import { ccto } from './ccto';
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

/** Every lesson's text. Only the lesson page imports this, so the texts stay out of the main bundle. */
export const THEORY_LESSONS: TheoryLessonBody[] = [
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
];
