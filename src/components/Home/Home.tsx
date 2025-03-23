import React from "react";
import css from "./Home.module.scss";
import homePhoto from "./../../assets/home_pic.webp";
import { Container } from "../../layout/Container/Container";
import { Icon } from "../Icons/Icon";
import instIcon from "../../assets/inst.svg";
import telegramIcon from "../../assets/telegram.svg";
import whatsappIcon from "../../assets/whatsApp.svg";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";

export const Home = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <main className={`${css.home} ${darkMode ? "bg-black text-white dark" : "bg-white text-black"}`}>
            <h1 className="text-error">!!!сайт находится в стадии внутренней доработки которая пока никак не повлияет на видимый функционал, происходит подготовка к видимым результамам за кулисами!!!</h1>
            <Container>
                <div className={css.home__wrapper}>
                    <img className={css.home__photo} src={homePhoto} alt="Виктория Симонова" />
                    <div className={css.home__info}>
                        <h1 className={`${css.home__title} text-black dark:text-white`}>Виктория Симонова</h1>
                        <h2 className={`${css.home__article} text-black dark:text-white`}>Основатель Babyfox.sleep</h2>
                        <div className={css.home__contacts}>
                            <p className={`${css.home__subtitle} text-black dark:text-white`}>Контакты</p>
                            <div className={css.home__icons}>
                                <Icon iconPath={instIcon} link="https://www.instagram.com/babyfox.sleep?igsh=MXZxdDk4Y2RtOGIxZQ==" size="large" />
                                <Icon iconPath={telegramIcon} link="https://t.me/babyfox_sleep" size="large" />
                                <Icon iconPath={whatsappIcon} link="https://wa.me/79654041234" size="large" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <ThemeToggle />
        </main>
    );
};
