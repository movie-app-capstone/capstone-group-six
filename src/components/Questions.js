import Answers from './Answers';
import Questions_module from './Questions.module.scss';
function QuestionComp(props) {
    return (React.createElement("div", null,
        React.createElement("h3", { className: Questions_module.question }, props.question.question),
        React.createElement(Answers, { question: props.question, onSubmit: props.onSubmit })));
}
export default QuestionComp;
