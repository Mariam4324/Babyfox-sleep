import css from "./PointHow.module.scss";

export const PointHow = ({ pointText }) => {
  return <li className={css.point}>{pointText}</li>;
};
