import { Container } from "../../layout/Container/Container";
import css from "./Footer.module.scss";
import telegramIcon from "./../../assets/telegram.svg";
import whatsappIcon from "./../../assets/whatsApp.svg";
import founderIcon from "./../../assets/home_pic.jpg";
import supportIcon from "./../../assets/support_icon.png";
import { Icon } from "../Icons/Icon";
import { FooterContact } from "../FooterContact/FooterContact";

export const Footer = () => {
    return (
        <section id="footer" className={css.footer__top}>
            <Container>
                <div className={css.footer__info}>
                    <div className={css.footer__titles}>
                        <a href="">
                            <h2 className={`${css.footer__title} title`}>Babyfox sleep</h2>
                        </a>
                    </div>
                    <div className={`${css.footer__text} text`}>ваш надежный консультант по детскому сну</div>
                </div>
                <hr className={css.footer__line}></hr>
                <div className={css.footer__group}>
                    <div className={css.footer__contacts__aside}>
                        <FooterContact link={"https://t.me/babyfox_sleep"} icon={telegramIcon} iconSize={"medium"} title={"Telegram"} subtitle={"@babyfox_sleep"} />

                        <FooterContact link={"https://wa.me/79654041234"} icon={whatsappIcon} iconSize={"medium"} title={"WhatsApp"} subtitle={"+7 965 404 12 34"} />

                        <FooterContact link={"https://t.me/m/AuElmiscYWMy"} icon={supportIcon} iconSize={"small"} title={"Технический отдел"} subtitle={"Проблемы с сайтом?"} />
                    </div>

                    <div className={css.footer__lawyer}>
                        <div className={css.footer__contacts}>
                            <img className={css.footer__img} src={founderIcon} alt="основатель babyfox"></img>

                            <div className={css.footer__descr}>
                                <div className={`${css.footer__name} ${["title-extra"]}`}>Виктория Симонова</div>
                                <div className={`${css.footer__post} ${["text-comment"]}`}>основатель Babyfox.sleep</div>
                            </div>
                        </div>

                        <div className={`${css.footer__post__name} text`}>Мы ценим мнение наших клиентов и открыты для предложений по улучшению наших услуг. Ваши отзывы помогают нам расти и улучшать качество консультаций. Пожалуйста, оставляйте комментарии и делитесь своим опытом, это поможет другим родителям найти ответы на волнующие их вопросы.</div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
