import React, { useContext } from "react";
import css from "./Logo.module.scss";
import logoIcon from "../../assets/header_logo.webp";
import { ThemeContext } from "../../Providers/ThemeProvider";

export const Logo = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={css.logo}>
            <img className={css.logo__icon} src={logoIcon} alt="логотип Babyfox.sleep" />
            <div className={css.logo__descr}>
                <h1 className={`${css.logo_title} dark:text-white text-black`}>Babyfox.sleep</h1> <h2 className={`${css.logo__subtitle} ${darkMode ? "text-white" : "text-black"}`}>ваш надежный консультант по детскому сну</h2>
            </div>
        </div>
    );
};
