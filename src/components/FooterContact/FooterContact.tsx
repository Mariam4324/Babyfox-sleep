import React from "react";
import { Icon } from "../Icons/Icon";
import css from "./FooterContact.module.scss";

export const FooterContact = ({ link, icon, iconSize, title, subtitle }) => {
    return (
        <a className={css.footer__contact} href={link}>
            <div className={css.footer__box}>
                <Icon iconPath={icon} size={iconSize} />
            </div>
            <div className={css.footer__descr}>
                <div className={css.footer__caption}>{title}</div>
                <div className={css.footer__subject}>{subtitle}</div>
            </div>
        </a>
    );
};
