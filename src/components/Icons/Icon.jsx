import css from "./Icons.module.scss";

// size variants: medium, large

export const Icon = ({ iconPath, link, size }) => {
    function handleClick() {
        window.location.href = link;
    }
    return <img onClick={handleClick} className={`${css.icon} ${css[`icon__${size}`]}`} src={iconPath} alt="icon" />;
};
