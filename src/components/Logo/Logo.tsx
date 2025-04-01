import styles from "./Logo.module.scss";
import logoIcon from "../../assets/header_logo.webp";

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <img className={styles.logo__icon} src={logoIcon} alt="логотип Babyfox.sleep" />
            <div className={styles.logo__descr}>
                <h1 className={`${styles.logo_title} dark:text-white text-black font-bold`}>Babyfox.sleep</h1>
                <h2 className={`${styles.logo__subtitle} dark:text-white text-black font-semibold`}>ваш надежный консультант по детскому сну</h2>
            </div>
        </div>
    );
};
