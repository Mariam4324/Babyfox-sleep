import React from "react";
import css from "./PointHow.module.scss";

interface PointHowProps {
    pointText: string;
}

export const PointHow = ({ pointText }: PointHowProps) => {
    return <li className={css.point}>{pointText}</li>;
};
