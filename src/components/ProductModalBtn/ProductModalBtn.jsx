import css from "./ProductModalBtn.module.scss";

export const ProductModalBtn = ({ link, buttonText, btnBG }) => {
    const handleClick = () => {
        window.location.href = link;
    };

    return (
        <button onClick={handleClick} className={`${css.button} ${css[`button_${btnBG}`]} dark:hover:border-white`}>
            {buttonText}
        </button>
    );
};
