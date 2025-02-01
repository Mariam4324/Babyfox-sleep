import css from "./Materials.module.scss";
import { Container } from "../../layout/Container/Container";

import materialPicture1 from "./../../assets/materials_pic1.jpg";
// import materialPicture2 from "./../../assets/materials_pic2.jpg";
// import materialPicture3 from "./../../assets/materials_pic3.jpg";
// import materialPicture4 from "./../../assets/materials_pic4.jpeg";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";

export const Materials = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section id="materials" className={`${css.materials} ${darkMode ? "bg-black text-white dark" : "bg-white text-black"}`}>
            <Container>
                <div className={`${css.materials__title} ${"title"} text-black dark:text-white`}>Полезные материалы</div>
                <div className={`${css.materials__descr} ${"text"} text-black dark:text-white`}>В своем блоге я делюсь полезной информацией о детском сне, чтобы сделать ваши ночи более спокойными, а дни — радостными. Здесь вы найдете полезные советы, статьи и исследования, которые помогут разобраться в вопросах сна вашего малыша.</div>

                <div className={css.materials__cards}>
                    <a href="https://www.specialmagazine.ru/stil-zhizni/viktoriya-simonova/">
                        <div className={`${css.materials__card}`}>
                            <div className={css.materials__img}>
                                <div className={css.materials__blackout}></div>
                                <img className={css.materials__picture} src={materialPicture1} alt="фотография статьи" />
                            </div>
                            <div className={css.materials__bottom}>
                                <div className={`${css.materials__subtitle} ${["title-extra"]} text-black dark:text-white`}>«Не все дети плохо спят!»: консультант Виктория Симонова рассказала, как наладить сон малыша</div>
                                <div className={css.materials__separator}>
                                    <time className={`${css.materials__date} ${["text-comment"]} text-black dark:text-white`}>29 янв. 2024 г.</time>
                                    <div className={css.materials__subline}></div>
                                </div>
                                <div className={`${css.materials__text} ${"text"} text-black dark:text-white`}>Дипломированный консультант по детскому сну, основатель собственного бренда BABYFOX.SLEEP и автор обучающих курсов для родителей Виктория Симонова готова поделилась своими знаниями и опытом, чтобы все дети могли наслаждаться спокойным и здоровым сном, а взрослые — забыть о проблемах и испытать настоящее счастье быть родителями.</div>
                            </div>
                        </div>
                    </a>

                    
                </div>
            </Container>
        </section>
    );
};
