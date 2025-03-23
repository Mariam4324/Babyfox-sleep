import React from "react";
import { useState } from "react";
import { ProductModal } from "../ProductModal/ProductModal";
import css from "./ProductCard.module.scss";

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
            <div onClick={() => setModal(true)} className={css.card}>
                <div className={`${css.card__overlay} ${css[`card__overlay_${type}`]}`}>
                    <img className={css.card__icon} src={photoPath} alt="child" />
                </div>

                <div className={css.card__info}>
                    <div className={css.card__top}>
                        <span className={`${css.card__term} ${css[`card__term_${type}`]} text-white`}>{term}</span>
                        <h2 className={`${css.card__title} text-black`}>{title}</h2>
                    </div>

                    <div className={css.card__bottom}>
                        <span className={`${css.card__price} ${css[`card__price_${type}`]} text-black`}>{price}</span>

                        <svg className={css.card__arrow} xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
                            <path d="M0 5.5H17M17 5.5L13.5081 1M17 5.5L13.5081 10" stroke="black" />
                        </svg>
                    </div>
                </div>
            </div>

            {modal ? <ProductModal setModal={setModal} modal={modal} how={how} forWho={forWho} type={type} term={term} title={title} price={price} /> : ""}
        </>
    );
};
