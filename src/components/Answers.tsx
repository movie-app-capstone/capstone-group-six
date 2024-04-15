import { useState, useEffect } from 'react';
import { Question } from '../types';
import Answer from './Answer';
import Answers_module from './Answers.module.scss';
import React from 'react';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};

function Answers(props: Props) {
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        setShowAnswer(false);
    }, [props.question])

    const onPress = (idx: number) => {
        setShowAnswer(true);
        props.onSubmit(props.question.correctAnswerIdx === idx);
    };

    return (
        <div className={Answers_module.answers}>
            {props.question.answers.map((answer, idx) => {
                let color = '';

                if (showAnswer) {
                    if (props.question.correctAnswerIdx === idx) color = 'green';
                    else color = 'red';
                }

                return (
                    <Answer
                        text={answer}
                        onPress={() => onPress(idx)}
                        color={color}
                        disabled={showAnswer}
                        key={idx}
                    />
                );
            })}
        </div>
    );
}

export default Answers;