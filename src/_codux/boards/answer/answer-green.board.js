import { createBoard } from '@wixc3/react-board';
import Answer from '../../../components/Answer';
export default createBoard({
    name: 'AnswerGreen',
    Board: () => React.createElement(Answer, { text: "Forrest Gump", color: "Green" }),
    isSnippet: true,
});
