import React from "react";
import css from "./Title.module.scss";

interface TitleProps {
  titleText: string;
}

export const Title = ({ titleText }: TitleProps) => {
  return <h2 className={`${css.title} text-black dark:text-white`}>{titleText}</h2>;
};
