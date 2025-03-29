import React from 'react'
import styles from "./MaterialsCard.module.scss";

interface MaterialsCardProps {
    title: string;
    date: string;
    text: string;
    link: string;
    picture: string;
}

export const MaterialsCard = ({ title, date, text, link, picture }: MaterialsCardProps) => {
    return (
        <a href={link}>
            <div className={`${styles.materials__card}`}>
                <div className={styles.materials__img}>
                    <div className={styles.materials__blackout}></div>
                    <img className={styles.materials__picture} src={picture} alt="фотография статьи" />
                </div>
                <div className={styles.materials__bottom}>
                    <div className={`${styles.materials__subtitle} ${["title-extra"]} text-black dark:text-white`}>{title}</div>
                    <div className={styles.materials__separator}>
                        <time className={`${styles.materials__date} ${["text-comment"]} text-black dark:text-white`}>{date}</time>
                        <div className={styles.materials__subline}></div>
                    </div>
                    <div className={`${styles.materials__text} ${"text"} text-black dark:text-white`}>{text}</div>
                </div>
            </div>
        </a>
    );
};
