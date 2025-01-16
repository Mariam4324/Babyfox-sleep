import css from "./AnimatedCross.module.scss";

export const AnimatedCross = ({ setModal }) => {
  return (
    <div onClick={() => setModal(false)} className={css.outer}>
      <div className={css.inner}>
        <label>назад</label>
      </div>
    </div>
  );
};
