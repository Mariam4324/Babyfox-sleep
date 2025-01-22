import { Container } from "../../layout/Container/Container";
import { Card } from "../Card/Card";
import { Title } from "../Title/Title";
import data from "../../assets/data.js";
import css from "./Services.module.scss";
import { Button } from "../Button/Button.jsx";

export const Services = () => {
    return (
        <section id="services">
            <div className={css.services}>
                <Container>
                    <Title titleText={"Услуги"} />

                    <p className={css.services__subtitle}>Мы предлагаем широкий спектр услуг, направленных на помощь родителям в организации сна их детей. Каждый малыш уникален, и наши программы адаптируются под индивидуальные потребности.</p>

                    <div className={css.services__wrapper}>
                        {data.map((product, index) => {
                            const uniqueKey = `item-${index}-${new Date().getTime()}`;

                            return <Card key={uniqueKey} how={product.how} forWho={product.for} type={product.type} photoPath={product.icon} term={product.term} title={product.title} price={product.price} />;
                        })}
                    </div>

                    <div className={css.services__btn}>
                        <Button btnBG={"standart"} buttonText={"написать консультанту по сну"} link={"https://wa.me/79654041234"} />
                    </div>
                </Container>
            </div>
        </section>
    );
};
