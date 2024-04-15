import Answer_module from './Answer.module.scss';
import Rest_module from './Rest.module.scss';
import Classnames from 'classnames';
type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
};

function Reset(props: Props) {
    return (
        <div>
            <h1>You scored: {(props.correctQuestions / props.totalQuestions) * 100}%</h1>
            <button
                onClick={props.onPress}
                className={Classnames(Answer_module.answer, Rest_module['reset-button'])}
            >
                Press to Try Again
            </button>
        </div>
    );
}

export default Reset;
