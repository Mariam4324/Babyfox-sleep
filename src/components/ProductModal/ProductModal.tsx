import React from "react";
import { useContext, useEffect } from "react";
import { AnimatedCross } from "../AnimatedCross/AnimatedCross";
import styles from "./ProductModal.module.scss";
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
        <div className={`${styles.modal}  ${darkMode ? "bg-black text-white dark" : "bg-white text-black"}`}>
            <div className={styles.modal__top}>
                <AnimatedCross setModal={setModal} />
                <div className={`${styles.modal__term} ${styles[`modal__term_${type}`]} text-white dark:text-black`}>{term}</div>
            </div>

            <h2 className={`${styles.modal__name} text-black dark:text-white`}>{title}</h2>

            <div className={`${styles["modal-wrapper"]} ${styles[`modal-wrapper_${type}`]}`}>
                <span className={styles["modal-wrapper__label"]}>Для кого?</span>
                <span className={styles["modal-wrapper__text"]}>{forWho}</span>
            </div>

            <div className={`${styles["modal-wrapper"]} ${styles[`modal-wrapper_${type}`]}`}>
                <span className={styles["modal-wrapper__label"]}>Как проходит?</span>
                <span className={styles["modal-wrapper__text"]}>{how}</span>
            </div>

            <div className={styles.modal__bottom}>
                <span className={`${styles.modal__price} text-black dark:text-white`}>{price}</span>
                <ProductModalBtn buttonText="Перейти" btnBG={type} link="https://t.me/babyfox_sleep" />
            </div>
        </div>
    );
};
