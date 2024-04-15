import classNames from 'classnames';
import styles from './new-component.module.scss';
/**
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent = ({ className }) => {
    return (React.createElement("div", { className: classNames(styles.root, className) },
        React.createElement("div", null,
            React.createElement("img", { src: "https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_04 (1).jpg", alt: "", className: styles.img })),
        React.createElement("div", null,
            React.createElement("img", { src: "https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_05 (1).jpg", alt: "", className: styles.img })),
        React.createElement("div", null,
            React.createElement("img", { src: "https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_06 (1).jpg", alt: "", className: styles.img })),
        React.createElement("div", null,
            React.createElement("img", { src: "https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_03 (1).jpg", alt: "", className: styles.img }))));
};
