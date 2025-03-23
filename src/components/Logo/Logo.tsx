import React from "react";
import css from "./Logo.module.scss";
import logoIcon from "../../assets/header_logo.webp";

export const Logo = () => {
    return (
        <div className={css.logo}>
            <img className={css.logo__icon} src={logoIcon} alt="логотип Babyfox.sleep" />
            <div className={css.logo__descr}>
                <h1 className={`${css.logo__title} text-black dark:text-white`}>Babyfox.sleep</h1>
                <h2 className={`${css.logo__subtitle} text-black dark:text-white`}>ваш надежный консультант по детскому сну</h2>
            </div>
        </div>
    );
};
