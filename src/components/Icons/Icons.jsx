import css from "./Icons.module.scss";

export const Icons = ({ iconPath }) => {
    return <img className={ css.icon} src={iconPath} alt="social media icon" />;
};
