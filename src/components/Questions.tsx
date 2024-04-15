import { Question } from '../types';
import Answers from './Answers';
import Questions_module from './Questions.module.scss';
import Answer from './Answer';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};

function QuestionComp(props: Props) {
    return (
        <div>
            <h3 className={Questions_module.question}>{props.question.question}</h3>
            <Answers question={props.question} onSubmit={props.onSubmit} />
        </div>
    );
}

export default QuestionComp;
