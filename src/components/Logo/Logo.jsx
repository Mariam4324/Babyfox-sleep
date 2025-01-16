import css from "./Logo.module.scss";
import logo from "../../assets/header_logo.webp";

export const Logo = () => {
  return <img className={css.logo} src={logo} alt="babyfox.sleep" />;
};
