import React from "react";
import styles from "./Title.module.scss";

interface TitleProps {
    titleText: string;
}

export const Title = ({ titleText }: TitleProps) => {
    return <h2 className={`${styles.title} text-black dark:text-white`}>{titleText}</h2>;
};
