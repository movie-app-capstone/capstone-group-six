import styles from './App.module.scss';
import questions from './questions.json';
import { useState } from "react";
import { Questions } from './types';
import StatBar from './components/StatBar';
import QuestionComp from './components/Questions';
import Answer from './components/Answer';

function App() {
    const allQuestions = questions as Questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [correctAnswers,  setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);

    return (
        <div>
            <StatBar 
                currentQuestion={currentQuestionIdx + 1} 
                totalQuestions={allQuestions.questions.length}
                correct={correctAnswers}
                incorrect={incorrectAnswers}
            />
            <QuestionComp 
            question={allQuestions.questions[currentQuestionIdx]} onSubmit={() => {}}
            />
        </div>
    );
}

export default App;

