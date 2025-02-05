import css from "./Button.module.scss";

export const Button = ({ buttonText, btnBG, link }) => {
    const handleClick = () => {
        if (link) {
            window.location.href = link;
        }
    };

    return (
        <button onClick={handleClick} className={`${css.button} ${css[`button_${btnBG}`]} bg-transparent border border-black hover:bg-[#222] hover:text-white hover:border-white dark:border-white dark:text-white dark:hover:border-white dark:hover:text-black dark:hover:bg-white`}>
            {buttonText}
        </button>
    );
};
