import css from "./Materials.module.scss";
import { Container } from "../../layout/Container/Container";

import materialPicture1 from "./../../assets/materials_pic1.jpg";
import materialPicture2 from "./../../assets/materials_pic2.jpg";
import materialPicture3 from "./../../assets/materials_pic3.jpg";
import materialPicture4 from "./../../assets/materials_pic4.jpeg";

export const Materials = () => {
    return (
        <section className={css.materials}>
            <Container>
                <div className={`${css.materials__title} ${"title"}`}>Полезные материалы</div>
                <div className={`${css.materials__descr} ${"text"}`}>В нашем блоге мы собираем и делимся с вами знаниями и опытом в области детского сна, чтобы сделать ваши ночи более спокойными, а дни — радостными. Здесь вы найдете полезные советы, статьи и исследования, которые помогут разобраться в вопросах сна вашего малыша.</div>

                <div className={css.materials__cards}>
                    <a href="https://www.specialmagazine.ru/stil-zhizni/viktoriya-simonova/">
                        <div className={css.materials__card}>
                            <div className={css.materials__img}>
                                <div className={css.materials__blackout}></div>
                                <img className={css.materials__picture} src={materialPicture1} alt="гипноз" />
                            </div>
                            <div className={css.materials__bottom}>
                                <div className={`${css.materials__subtitle} ${["title-extra"]}`}>«Не все дети плохо спят!»: консультант Виктория Симонова рассказала, как наладить сон малыша</div>
                                <div className={css.materials__separator}>
                                    <time className={`${css.materials__date} ${["text-comment"]}`}>29 янв. 2024 г.</time>
                                    <div className={css.materials__subline}></div>
                                </div>
                                <div className={`${css.materials__text} ${"text"}`}>Дипломированный консультант по детскому сну, основатель собственного бренда BABYFOX.SLEEP и автор обучающих курсов для родителей Виктория Симонова готова поделилась своими знаниями и опытом, чтобы все дети могли наслаждаться спокойным и здоровым сном, а взрослые — забыть о проблемах и испытать настоящее счастье быть родителями.</div>
                            </div>
                        </div>
                    </a>

                    <a href="https://followmemagazine.ru/%D1%81%D0%BF%D0%BE%D0%BA%D0%BE%D0%B9%D0%BD%D0%BE%D0%B9-%D0%BD%D0%BE%D1%87%D0%B8-%D1%82%D0%BE%D0%BF-3-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%BE%D0%B2-%D0%BF%D1%80%D0%BE%D0%B4%D0%BB%D0%B5%D0%BD%D0%B8/">
                        <div className={css.materials__card}>
                            <div className={css.materials__img}>
                                <div className={css.materials__blackout}></div>
                                <img className={css.materials__picture} src={materialPicture3} alt="гипноз" />
                            </div>
                            <div className={css.materials__bottom}>
                                <div className={`${css.materials__subtitle} ${["title-extra"]}`}>Спокойной ночи: топ-3 способов продления детского сна от опытного эксперта</div>
                                <div className={css.materials__separator}>
                                    <time className={`${css.materials__date} ${["text-comment"]}`}>-</time>
                                    <div className={css.materials__subline}></div>
                                </div>
                                <div className={`${css.materials__text} ${"text"}`}>Проблемы со сном малыша — актуальная проблема для многих молодых родителей. Дипломированный консультант по детскому сну, автор курсов и основатель собственного бренда BABYFOX.SLEEP Виктория Симонова назвала топ-3 способов продления детского сна</div>
                            </div>
                        </div>
                    </a>

                    <a href="https://dzen.ru/a/YoDMrm8ReXDvvD7U">
                        <div className={css.materials__card}>
                            <div className={css.materials__img}>
                                <div className={css.materials__blackout}></div>
                                <img className={css.materials__picture} src={materialPicture2} alt="5 причин плохого сна у детей до 4 месяцев" />
                            </div>
                            <div className={css.materials__bottom}>
                                <div className={`${css.materials__subtitle} ${["title-extra"]}`}>5 причин плохого сна у детей до 4 месяцев</div>
                                <div className={css.materials__separator}>
                                    <time className={`${css.materials__date} ${["text-comment"]}`}>15 мая 2022 г.</time>
                                    <div className={css.materials__subline}></div>
                                </div>
                                <div className={`${css.materials__text} ${"text"}`}>В последнее время все чаще и чаще пишут мамы детей до 4 месяцев! Можно подумать - что там исправлять? Вот регресс сна 4 мес и происходящее с малышом после него - вот это да! А новорожденный только ест-спит-ест-спит.. Именно так думают многие</div>
                            </div>
                        </div>
                    </a>

                    <a href="https://fajna.clinic/ru/blog/uk-mify-pro-dytiachyj-son-pro-iaki-varto-znaty-batkam-ru-myfy-o-detskom-sne-o-kotorykh-stoyt-znat-rodyteliam">
                        <div className={css.materials__card}>
                            <div className={css.materials__img}>
                                <div className={css.materials__blackout}></div>
                                <img className={css.materials__picture} src={materialPicture4} alt="гипноз" />
                            </div>
                            <div className={css.materials__bottom}>
                                <div className={`${css.materials__subtitle} ${["title-extra"]}`}>Мифы о детском сне, которые стоит знать родителям</div>
                                <div className={css.materials__separator}>
                                    <time className={`${css.materials__date} ${["text-comment"]}`}>19 июля 2024 г.</time>
                                    <div className={css.materials__subline}></div>
                                </div>
                                <div className={`${css.materials__text} ${"text"}`}>Детский сон - одна из самых распространенных тем среди родителей, часто окутанная мифами и недоразумениями. Давайте рассмотрим наиболее распространенные мифы и попробуем разобраться, что же является правдой, а что стоит оставить в прошлом.</div>
                            </div>
                        </div>
                    </a>
                </div>
            </Container>
        </section>
    );
};
