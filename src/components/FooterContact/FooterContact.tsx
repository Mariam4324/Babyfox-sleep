import React from "react";
import { Icon } from "../Icons/Icon";
import styles from "./FooterContact.module.scss";

export const FooterContact = ({ link, icon, iconSize, title, subtitle }) => {
    return (
        <a className={styles.footer__contact} href={link}>
            <div className={styles.footer__box}>
                <Icon iconPath={icon} size={iconSize} />
            </div>
            <div className={styles.footer__descr}>
                <div className={styles.footer__caption}>{title}</div>
                <div className={styles.footer__subject}>{subtitle}</div>
            </div>
        </a>
    );
};
