import React from "react";
import { useState } from "react";
import { ProductModal } from "../ProductModal/ProductModal";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
    photoPath: string;
    type: string;
    term: string;
    title: string;
    price: string;
    forWho: string;
    how: string[];
}

export const ProductCard = ({ photoPath, type, term, title, price, forWho, how }: ProductCardProps) => {
    const [modal, setModal] = useState(false);

    return (
        <>
            <div onClick={() => setModal(true)} className={styles.card}>
                <div className={`${styles.card__overlay} ${styles[`card__overlay_${type}`]}`}>
                    <img className={styles.card__icon} src={photoPath} alt="child" />
                </div>

                <div className={styles.card__info}>
                    <div className={styles.card__top}>
                        <span className={`${styles.card__term} ${styles[`card__term_${type}`]} text-white`}>{term}</span>
                        <h2 className={`${styles.card__title} text-black`}>{title}</h2>
                    </div>

                    <div className={styles.card__bottom}>
                        <span className={`${styles.card__price} ${styles[`card__price_${type}`]} text-black`}>{price}</span>

                        <svg className={styles.card__arrow} xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
                            <path d="M0 5.5H17M17 5.5L13.5081 1M17 5.5L13.5081 10" stroke="black" />
                        </svg>
                    </div>
                </div>
            </div>

            {modal ? <ProductModal setModal={setModal} modal={modal} how={how} forWho={forWho} type={type} term={term} title={title} price={price} /> : ""}
        </>
    );
};
