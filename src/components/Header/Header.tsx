import { Link } from "react-router-dom";
import { Container } from "../../layout/Container/Container";
import { Burger } from "../Burger/Burger";
import { LinkComponent } from "../LinkComponent/LinkComponent";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.scss";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export const Header = () => {
    return (
        <header className={`${styles.header} dark:bg-black bg-white`}>
            <Container>
                {/* <div className={styles.header__wrapper}> */}
                {/* <Logo /> */}
                {/* </div> */}

                <div className={styles.header__wrapper}>
                    <Logo />

                    <div className={styles.header__holder}>
                        <ul className={styles["header-nav"]}>
                            <LinkComponent pathTo={"#"} linkText={"Главная"} />
                            <LinkComponent pathTo={"#services"} linkText={"Услуги"} />
                            <LinkComponent pathTo={"#reviews"} linkText={"Отзывы"} />
                            <LinkComponent pathTo={"#materials"} linkText={"Статьи"} />
                            <LinkComponent pathTo={"#footer"} linkText={"Контакты"} />
                        </ul>
                        <Burger />
                        <Link to="login">
                            <svg className="w-[26px] h-[26px] text-black dark:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </Container>
            <ThemeToggle />
        </header>
    );
};
