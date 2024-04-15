import Answer_module from './Answer.module.scss';
import Rest_module from './Rest.module.scss';
import Classnames from 'classnames';
function Reset(props) {
    return (React.createElement("div", null,
        React.createElement("h1", null,
            "You scored: ",
            (props.correctQuestions / props.totalQuestions) * 100,
            "%"),
        React.createElement("button", { onClick: props.onPress, className: Classnames(Answer_module.answer, Rest_module['reset-button']) }, "Press to Try Again")));
}
export default Reset;
