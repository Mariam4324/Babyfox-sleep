import css from "./Materials.module.scss";
import { Container } from "../../layout/Container/Container";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { MaterialsCard } from "../MaterialsCard/MaterialsCard";
import { articles } from "../../assets/data";
import { SliderSlick } from "../SliderSlick/SliderSlick";

export const Materials = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section id="materials" className={`${css.materials} ${darkMode ? "bg-black text-white dark" : "bg-white text-black"}`}>
            <Container>
                <div className={`${css.materials__title} ${"title"} text-black dark:text-white`}>Полезные материалы</div>
                <div className={`${css.materials__descr} ${"text"} text-black dark:text-white`}>В своем блоге я делюсь полезной информацией о детском сне, чтобы сделать ваши ночи более спокойными, а дни — радостными. Здесь вы найдете полезные советы, статьи и исследования, которые помогут разобраться в вопросах сна вашего малыша.</div>

                <div className={css.materials__cards}>
                    <SliderSlick>
                        {articles.map((article) => (
                            <MaterialsCard key={article.id} title={article.title} date={article.date} text={article.description} link={article.link} picture={article.img} />
                        ))}
                    </SliderSlick>
                </div>
            </Container>
        </section>
    );
};
