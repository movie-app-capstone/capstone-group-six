import { useState, useEffect } from 'react';
import Answer from './Answer';
import Answers_module from './Answers.module.scss';
function Answers(props) {
    const [showAnswer, setShowAnswer] = useState(false);
    useEffect(() => {
        setShowAnswer(false);
    }, [props.question]);
    const onPress = (idx) => {
        setShowAnswer(true);
        props.onSubmit(props.question.correctAnswerIdx === idx);
    };
    return (React.createElement("div", { className: Answers_module.answers }, props.question.answers.map((answer, idx) => {
        let color = '';
        if (showAnswer) {
            if (props.question.correctAnswerIdx === idx)
                color = 'green';
            else
                color = 'red';
        }
        return (React.createElement(Answer, { text: answer, onPress: () => onPress(idx), color: color, disabled: showAnswer, key: idx }));
    })));
}
export default Answers;
