import styles from './App.module.scss';
import questions from './questions.json';
import { useState } from 'react';
import { Questions } from './types';
import StatBar from './components/StatBar';
import QuestionComp from './components/Questions';
import Answer from './components/Answer';
import Reset from './components/Rest';
import Answer_module from './components/Answer.module.scss';
import Classnames from 'classnames';

function App() {
    const allQuestions = questions as Questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);

    const [waitingToAdvance, setWaitingToAdvance] = useState(false);

    const onSubmit = (correct: boolean) => {
        if (correct) setCorrectAnswers(correctAnswers + 1);
        else setIncorrectAnswers(incorrectAnswers + 1);

        setWaitingToAdvance(true);
    };

    const advance = () => {
        setWaitingToAdvance(false);
        setCurrentQuestionIdx(currentQuestionIdx + 1);
    };

    const reset = () => {
        setCurrentQuestionIdx(0);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setWaitingToAdvance(false);
    };

    if (currentQuestionIdx >= allQuestions.questions.length)
        return (
            <Reset
                totalQuestions={allQuestions.questions.length}
                correctQuestions={correctAnswers}
                onPress={reset}
            />
        );

    return (
        <div>
            <div className={styles.app}>
                <StatBar
                    currentQuestion={currentQuestionIdx + 1}
                    totalQuestions={allQuestions.questions.length}
                    correct={correctAnswers}
                    incorrect={incorrectAnswers}
                />
                <QuestionComp
                    question={allQuestions.questions[currentQuestionIdx]}
                    onSubmit={onSubmit}
                />
                {true && (
                    <button
                        onClick={advance}
                        className={Classnames(Answer_module.answer, styles['next-button'])}
                    >
                        Next Question...
                    </button>
                )}
            </div>
        </div>
    );
}

export default App;
