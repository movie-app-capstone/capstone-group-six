import { createBoard } from '@wixc3/react-board';
import Answer from '../../../components/Answer';
import React from 'react';

export default createBoard({
    name: 'AnswerRed',
    Board: () => <Answer text="Forrest Gump" color="red" disabled={undefined} onPress={function (): void {
        throw new Error('Function not implemented.');
    } } />,
    isSnippet: true,
});
