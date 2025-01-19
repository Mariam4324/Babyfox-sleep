import { Container } from "../../layout/Container/Container";
import { Burger } from "../Burger/Burger";
import { Link } from "../Link/Link";
import { Logo } from "../Logo/Logo";
import css from "./Header.module.scss";

export const Header = () => {
    return (
        <header id="home" className={css.header}>
            <Container>
                <div className={css.header__wrapper}>
                    <Logo />

                    <ul className={css["header-nav"]}>
                        <Link pathTo={"home"} linkText={"Главная"} />
                        <Link pathTo={"services"} linkText={"Услуги"} />
                        <Link pathTo={"reviews"} linkText={"Отзывы"} />
                        <Link pathTo={"about"} linkText={"О нас"} />
                    </ul>

                    <Burger />
                </div>
            </Container>
        </header>
    );
};
