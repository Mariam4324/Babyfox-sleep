import Slider from "react-slick";
import { Container } from "../../layout/Container/Container";
import { Button } from "../Button/Button";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import { Title } from "../Title/Title";
import css from "./Reviews.module.scss";
import { testimonials } from "../../assets/data";

export const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <section id="reviews" className={css.reviews}>
            <Container>
                <Title titleText={"Что о нас говорят клиенты"} />
                <p className={css.reviews__text}>Мы гордимся тем, что наша работа приносит пользу родителям и их детям! Если вы тоже хотите поделиться своим опытом или задать вопрос, не стесняйтесь связаться с нами. Вот что говорят о нас наши клиенты:</p>

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
