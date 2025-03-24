import css from "./BurgerModal.module.scss";
import { LinkComponent } from "../LinkComponent/LinkComponent";

import React from "react";

export const BurgerModal = ({ setBurger }) => {
    return (
        <div className={`${css.burger__list} ${css.header} bg-white dark:bg-black`}>
            <svg onClick={() => setBurger(false)} className={`${css.burger__close} fill-current text-black dark:text-white`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" className="fill-current" />
            </svg>

            <ul>
                <li className={css.burger__link} onClick={() => setBurger(false)}>
                    <LinkComponent linkText="Главная" pathTo="#" />
                </li>

                <li className={css.burger__link} onClick={() => setBurger(false)}>
                    <LinkComponent linkText="Услуги" pathTo="#services" />
                </li>

                <li className={css.burger__link} onClick={() => setBurger(false)}>
                    <LinkComponent linkText="Отзывы" pathTo="#reviews" />
                </li>

                <li className={css.burger__link} onClick={() => setBurger(false)}>
                    <LinkComponent linkText="Статьи" pathTo="#materials" />
                </li>

                <li className={css.burger__link} onClick={() => setBurger(false)}>
                    <LinkComponent linkText="Контакты" pathTo="#footer" />
                </li>
            </ul>
        </div>
    );
};
