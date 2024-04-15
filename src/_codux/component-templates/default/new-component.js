import classNames from 'classnames';
import styles from './new-component.module.scss';
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent = ({ className }) => {
    return React.createElement("div", { className: classNames(styles.root, className) }, "NewComponent");
};
