import React from "react";
import { Container } from "../../layout/Container/Container";
import { Button } from "../Button/Button";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import { Title } from "../Title/Title";
import css from "./Reviews.module.scss";
import { testimonials } from "../../assets/data";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";

export const Reviews = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section id="reviews" className={`${css.reviews} ${darkMode ? "bg-black text-white dark" : "bg-white text-black"}`}>
            <Container>
                <Title titleText={"Что о нас говорят клиенты"} />
                <p className={`${css.reviews__text} text-black dark:text-white`}>Я горжусь тем, что моя работа приносит пользу родителям и их детям! Если вы тоже хотите поделиться своим опытом или задать вопрос, не стесняйтесь связаться с нами.</p>

                <div className={css.reviews__wrapper}>
                    {testimonials.map((testimonial) => (
                        <ReviewCard key={testimonial.id} author={testimonial.author} rating={testimonial.rating} date={testimonial.date} reviewText={testimonial.text} />
                    ))}
                </div>

                <div className={css.reviews__btn}>
                    <Button buttonText={"больше отзывов"} btnBG={"standart"} link={"https://www.instagram.com/babyfox.sleep?igsh=MXZxdDk4Y2RtOGIxZQ=="} />
                </div>
            </Container>
        </section>
    );
};
