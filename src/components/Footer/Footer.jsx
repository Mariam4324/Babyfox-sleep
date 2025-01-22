import { Container } from "../../layout/Container/Container";
import css from "./Footer.module.scss";
import telegram from "./../../assets/telegram.svg";
import whatsapp from "./../../assets/whatsApp.svg";
import founder from "./../../assets/home_pic.jpg";
import { Icon } from "../Icons/Icon";

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
                        <a className={`${css.footer__contact} ${css.footer__contact} ${css.footer_m}`} href="https://t.me/babyfox_sleep">
                            <div className={css.footer__box}>
                                {/* <img className={css.footer__icon} src={telegram} alt="telegram"></img> */}
                                <Icon iconPath={telegram} size={"medium"} />
                            </div>
                            <div className={css.footer__descr}>
                                <div className={css.footer__caption}>telegram</div>
                                <div className={css.footer__subject}>@babyfox_sleep</div>
                            </div>
                        </a>

                        <a className={`${css.footer__contact} ${css.footer__contact__flex}`} href="https://wa.me/79654041234">
                            <div className={css.footer__box}>
                                <Icon iconPath={whatsapp} size={"medium"} />
                            </div>
                            <div className={css.footer__descr}>
                                <div className={css.footer__caption}>WhatsApp</div>
                                <div className={css.footer__subject}>+7 965 404 12 34</div>
                            </div>
                        </a>
                    </div>

                    <div className={css.footer__lawyer}>
                        <div className={css.footer__contacts}>
                            <img className={css.footer__img} src={founder} alt="основатель babyfox"></img>

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
