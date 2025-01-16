import { Container } from "../../layout/Container/Container";
import { Burger } from "../Burger/Burger";
import { Link } from "../Link/Link";
import { Logo } from "../Logo/Logo";
import css from "./Header.module.scss";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  return (
    <header id="home" className={css.header}>
      <Container>
        <div className={css.header__wrapper}>
          <Logo />

          <ul className={css["header-nav"]}>
            <ScrollLink to="home" smooth="true" duration="500">
              <Link linkText={"Главная"} />
            </ScrollLink>

            <Link linkText={"Услуги"} />
            <Link linkText={"Отзывы"} />
            <Link linkText={"О компании"} />
          </ul>

          <Burger />
        </div>
      </Container>
    </header>
  );
};
