import React from "react";
import { Container } from "../../layout/Container/Container.jsx";
import { Title } from "../Title/Title.jsx";
import { servicesData } from "../../assets/data.js";
import styles from "./Services.module.scss";
import { Button } from "../Button/Button.jsx";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider.jsx";
import { ProductCard } from "../ProductCard/ProductCard.js";

export const Services = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section id="services">
            <div className={`${styles.services} ${darkMode ? "bg-black text-white dark" : "bg-white text-black"}`}>
                <Container>
                    <Title titleText={"Услуги"} />

                    <p className={`${styles.services__subtitle} text-black dark:text-white`}>Я предлагаю широкий спектр услуг, направленных на помощь родителям в организации сна их детей. Каждый малыш уникален, и мои программы адаптируются под индивидуальные потребности</p>
                    <div className={styles.services__wrapper}>
                        {servicesData.map((product, index) => {
                            const uniqueKey = `item-${index}-${new Date().getTime()}`;

                            return <ProductCard key={uniqueKey} how={product.how} forWho={product.for} type={product.type} photoPath={product.icon} term={product.term} title={product.title} price={product.price} />;
                        })}
                    </div>

                    <div className={styles.services__btn}>
                        <Button btnBG={"standart"} buttonText={"написать консультанту по сну"} link={"https://wa.me/79654041234"} />
                    </div>
                </Container>
            </div>
        </section>
    );
};
