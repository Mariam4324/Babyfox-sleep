import React from "react";
import styles from "./Home.module.scss";
import homePhoto from "./../../assets/home_pic.webp";
import { Container } from "../../layout/Container/Container";
import { Icon } from "../Icons/Icon";
import instIcon from "../../assets/inst.svg";
import telegramIcon from "../../assets/telegram.svg";
import whatsappIcon from "../../assets/whatsApp.svg";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export const Home = () => {
    return (
        <main className={`${styles.home} dark:bg-black bg-white`}>
            <Container>
                <div className={styles.home__wrapper}>
                    <img className={styles.home__photo} src={homePhoto} alt="Виктория Симонова" />
                    <div className={styles.home__info}>
                        <h1 className={`${styles.home__title} text-black dark:text-white`}>Виктория Симонова</h1>
                        <h2 className={`${styles.home__article} text-black dark:text-white`}>Основатель Babyfox.sleep</h2>
                        <div className={styles.home__contacts}>
                            <p className={`${styles.home__subtitle} text-black dark:text-white`}>Контакты</p>
                            <div className={styles.home__icons}>
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
