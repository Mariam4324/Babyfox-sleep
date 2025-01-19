import css from "./Logo.module.scss";
import logoIcon from "../../assets/header_logo.webp";

export const Logo = () => {
    return (
        <div className={css.logo}>
            <img className={css.logo__icon} src={logoIcon} alt="логотип Babyfox.sleep" />
            <h1 className={css.logo__title}>Babyfox.sleep</h1>
        </div>
    );
};
