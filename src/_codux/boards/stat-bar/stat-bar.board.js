import { createBoard } from '@wixc3/react-board';
import StatBar from '../../../components/StatBar';
export default createBoard({
    name: 'StatBar',
    Board: () => React.createElement(StatBar, { totalQuestions: 1, currentQuestions: 1, correct: 1, incorrect: 0 }),
    isSnippet: true,
});
