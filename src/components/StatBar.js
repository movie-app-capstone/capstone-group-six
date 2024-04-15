import StatBar_module from './StatBar.module.scss';
function StatBar(props) {
    return (React.createElement("div", { className: StatBar_module.statcontainer },
        React.createElement("p", null,
            "Question: ",
            props.currentQuestion,
            "/",
            props.totalQuestions),
        React.createElement("p", null,
            "Correct: ",
            props.correct),
        React.createElement("p", null,
            "Incorrect: ",
            props.incorrect)));
}
export default StatBar;
