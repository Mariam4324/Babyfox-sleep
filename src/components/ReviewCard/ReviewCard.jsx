import css from "./ReviewCard.module.scss";

export const ReviewCard = ({ name, reviewText}) => {
  return (
    <div className={css["reviews-card"]}>
      <span className={css["reviews-card__name"]}>{name}</span>
      <p className={css["reviews-card__text"]}>{reviewText}</p>
    </div>
  );
}
