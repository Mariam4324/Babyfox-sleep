import css from "./Button.module.scss";

export const Button = ({ buttonText, btnBG, link }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <button onClick={handleClick} className={`${css.button} ${css[`button_${btnBG}`]}`}>
      {buttonText}
    </button>
  );
};
