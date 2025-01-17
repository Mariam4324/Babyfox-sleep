import css from "./Icons.module.scss";

export const Icon = ({ iconPath, link }) => {
    function handleClick() {
        window.location.href = link;
    }
    return <img onClick={handleClick} className={css.icon} src={iconPath} alt="icon" />;
};
