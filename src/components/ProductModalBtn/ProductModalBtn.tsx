import React from "react";
import css from "./ProductModalBtn.module.scss";

interface ProductModalBtnProps {
    link: string;
    buttonText: string;
    btnBG: string;
}

export const ProductModalBtn = ({ link, buttonText, btnBG }: ProductModalBtnProps) => {
    const handleClick = () => {
        window.location.href = link;
    };

    return (
        <button onClick={handleClick} className={`${css.button} ${css[`button_${btnBG}`]} dark:hover:border-white`}>
            {buttonText}
        </button>
    );
};
