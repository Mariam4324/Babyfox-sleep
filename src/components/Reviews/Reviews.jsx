import Slider from "react-slick";
import { Container } from "../../layout/Container/Container";
import { Button } from "../Button/Button";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import { Title } from "../Title/Title";
import css from "./Reviews.module.scss";
import { testimonials } from "../../assets/data";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";

export const Reviews = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const { darkMode } = useContext(ThemeContext);

    return (
        <section id="reviews" className={`${css.reviews} ${darkMode ? "bg-black text-white dark" : "bg-white text-black"}`}>
            <Container>
                <Title titleText={"Что о нас говорят клиенты"} />
                <p className={`${css.reviews__text} text-black dark:text-white`}>Я горжусь тем, что моя работа приносит пользу родителям и их детям! Если вы тоже хотите поделиться своим опытом или задать вопрос, не стесняйтесь связаться с нами.</p>

                <div className={css.reviews__wrapper}>
                    <Slider {...settings}>
                        {testimonials.map((testimonial) => (
                            <ReviewCard key={testimonial.id} author={testimonial.author} rating={testimonial.rating} date={testimonial.date} reviewText={testimonial.text} />
                        ))}
                    </Slider>
                </div>

                <div className={css.reviews__btn}>
                    <Button buttonText={"больше отзывов"} btnBG={"standart"} link={"https://www.instagram.com/babyfox.sleep?igsh=MXZxdDk4Y2RtOGIxZQ=="} />
                </div>
            </Container>
        </section>
    );
};
