import css from "./Button.module.scss";

export const Button = ({ buttonText, btnBG }) => {
  const handleClick = () => {
    window.location.href = "https://wa.me/79654041234";
  };

  return (
    <button onClick={handleClick} className={`${css.button} ${css[`button_${btnBG}`]}`}>
      {buttonText}
    </button>
  );
};
