type Props = {
    currentQuestion: number;
    totalQuestions: number;
    correct: number;
    incorrect: number;
}


function StatBar(props: Props) {
    return (
         <div>
        <p>Question: {props.currentQuestion}/{props.totalQuestions}</p>
        <p>Correct: {props.correct}</p>
        <p>Incorrect: {props.incorrect}</p>
    </div>
    );
}

export default StatBar;