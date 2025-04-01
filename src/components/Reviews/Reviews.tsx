import React from "react";
import { Container } from "../../layout/Container/Container";
import { Button } from "../Button/Button";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import { Title } from "../Title/Title";
import styles from "./Reviews.module.scss";
import { testimonials } from "../../assets/data";

export const Reviews = () => {
    return (
        <section id="reviews" className={`${styles.reviews} dark:bg-black dark:text-white bg-white text-black`}>
            <Container>
                <Title titleText={"Что о нас говорят клиенты"} />
                <p className={`${styles.reviews__text} text-black dark:text-white`}>Я горжусь тем, что моя работа приносит пользу родителям и их детям!</p>

                <div className={styles.reviews__wrapper}>
                    {testimonials.map((testimonial) => (
                        <ReviewCard key={testimonial.id} author={testimonial.author} rating={testimonial.rating} date={testimonial.date} reviewText={testimonial.text} />
                    ))}
                </div>

                <div className={styles.reviews__btn}>
                    <Button buttonText={"больше отзывов"} btnBG={"standart"} link={"https://www.instagram.com/babyfox.sleep"} />
                </div>
            </Container>
        </section>
    );
};
