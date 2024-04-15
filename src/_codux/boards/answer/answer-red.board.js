import { createBoard } from '@wixc3/react-board';
import Answer from '../../../components/Answer';
export default createBoard({
    name: 'AnswerRed',
    Board: () => React.createElement(Answer, { text: "Forrest Gump", color: "red", disabled: undefined, onPress: function () {
            throw new Error('Function not implemented.');
        } }),
    isSnippet: true,
});
