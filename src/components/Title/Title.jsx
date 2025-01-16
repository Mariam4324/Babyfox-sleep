import css from "./Title.module.scss";

export const Title = ({ titleText }) => {
  return <h2 className={css.title}>{titleText}</h2>;
};
