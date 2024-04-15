import Answer_module from './Answer.module.scss';
function Answer(props) {
    const style = props.color ? { color: props.color } : {};
    return (React.createElement("button", { onClick: props.onPress, disabled: props.disabled, className: Answer_module.answer },
        React.createElement("span", { style: style }, props.text)));
}
export default Answer;
