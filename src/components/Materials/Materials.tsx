import React, { useEffect, useState } from "react";
import styles from "./Materials.module.scss";
import { Container } from "../../layout/Container/Container";
import { MaterialsCard } from "../MaterialsCard/MaterialsCard";
import { articles } from "../../assets/data";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const Materials = () => {
    return (
        <section id="materials" className={`${styles.materials} bg-white dark:bg-black`}>
            <Container>
                <div className={`${styles.materials__title} ${"title"} text-black dark:text-white`}>Полезные материалы</div>
                <div className={`${styles.materials__descr} ${"text"} text-black dark:text-white`}>В своем блоге я делюсь полезной информацией о детском сне, чтобы сделать ваши ночи более спокойными, а дни — радостными. Здесь вы найдете полезные советы, статьи и исследования, которые помогут разобраться в вопросах сна вашего малыша.</div>

                <div className={styles.materials__cards}>
                    {articles.map((article) => (
                        <MaterialsCard key={article.id} title={article.title} date={article.date} text={article.description} link={article.link} picture={article.img} />
                    ))}
                </div>

                <Link to="/articles" className={styles.materials__btn}>
                    <Button buttonText="Больше статей" btnBG="standart" link={null} />
                </Link>
            </Container>
        </section>
    );
};
