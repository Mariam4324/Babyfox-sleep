import React from "react";
import styles from "./PointHow.module.scss";

interface PointHowProps {
    pointText: string;
}

export const PointHow = ({ pointText }: PointHowProps) => {
    return <li className={styles.point}>{pointText}</li>;
};
