import React from "react";
import { useContext, useEffect } from "react";
import { AnimatedCross } from "../AnimatedCross/AnimatedCross";
import css from "./ProductModal.module.scss";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { ProductModalBtn } from "../ProductModalBtn/ProductModalBtn";

interface ProductModalProps {
    how: string[];
    setModal: () => void;
    modal: boolean;
    type: string;
    term: string;
    title: string;
    price: string;
    forWho: string;
}

export const ProductModal = ({ how, setModal, modal, type, term, title, price, forWho }: ProductModalProps) => {
    const handleBackButton = (event) => {
        //Close the modal window when the "Back" button is pressed
        if (modal) {
            event.preventDefault();
            setModal(false);
        }
    };

    useEffect(() => {
        // Lockable scroll when opening a modal window
        if (modal) {
            document.body.style.overflow = "hidden";
            window.addEventListener("popstate", handleBackButton);
        } else {
            document.body.style.overflow = "unset";
        }
        // Clear the effect when the component is unmounted
        return () => {
            document.body.style.overflow = "unset"; // Reset scrolling
            window.removeEventListener("popstate", handleBackButton); // Removing the eventListener
        };
    }, [modal]);

    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`${css.modal}  ${darkMode ? "bg-black text-white dark" : "bg-white text-black"}`}>
            <div className={css.modal__top}>
                <AnimatedCross setModal={setModal} />
                <div className={`${css.modal__term} ${css[`modal__term_${type}`]} text-white dark:text-black`}>{term}</div>
            </div>

            <h2 className={`${css.modal__name} text-black dark:text-white`}>{title}</h2>

            <div className={`${css["modal-wrapper"]} ${css[`modal-wrapper_${type}`]}`}>
                <span className={css["modal-wrapper__label"]}>Для кого?</span>
                <span className={css["modal-wrapper__text"]}>{forWho}</span>
            </div>

            <div className={`${css["modal-wrapper"]} ${css[`modal-wrapper_${type}`]}`}>
                <span className={css["modal-wrapper__label"]}>Как проходит?</span>
                <span className={css["modal-wrapper__text"]}>{how}</span>
            </div>

            <div className={css.modal__bottom}>
                <span className={`${css.modal__price} text-black dark:text-white`}>{price}</span>
                <ProductModalBtn buttonText="Перейти" btnBG={type} link="https://t.me/babyfox_sleep" />
            </div>
        </div>
    );
};
