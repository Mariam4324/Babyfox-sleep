import css from "./Home.module.scss";
import photo from "../../assets/home_pic.jpg";
import { Container } from "../../layout/Container/Container";
import { Icon } from "../Icons/Icon";
import instIcon from "../../assets/inst.svg";
import telegramIcon from "../../assets/telegram.svg";
import whatsappIcon from "../../assets/whatsApp.svg";

export const Home = () => {
    return (
        <main className={css.home}>
            <Container>
                <div className={css.home__wrapper}>
                    <img className={css.home__photo} src={photo} alt="Виктория Симонова" />

                    <div className={css.home__main}>
                        <h1 className={css.home__title}>Виктория Симонова</h1>
                        <h2 className={css.home__article}>Основатель Babyfox.sleep</h2>

                        <div className={css.home__contacts}>
                            <p className={css.home__subtitle}>Контакты</p>
                            <div className={css.home__icons}>
                                <Icon iconPath={instIcon} link={"https://www.instagram.com/babyfox.sleep?igsh=MXZxdDk4Y2RtOGIxZQ=="} size={"large"} />
                                <Icon iconPath={telegramIcon} link={"https://t.me/babyfox_sleep"} size={"large"} />
                                <Icon iconPath={whatsappIcon} link={"https://wa.me/79654041234"} size={"large"} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
};
