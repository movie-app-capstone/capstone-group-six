import classNames from 'classnames';
import styles from './new-component.module.scss';
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent = ({ className }) => {
    return (React.createElement("div", { className: classNames(className, styles.root) },
        React.createElement("div", null,
            React.createElement("img", { src: "https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_01 (1).jpg", alt: "", className: styles.img })),
        React.createElement("div", { className: styles.section },
            React.createElement("img", { src: "https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_06 (1).jpg", alt: "", className: styles.img }),
            React.createElement("img", { src: "https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_03 (1).jpg", alt: "", className: styles.img }))));
};
