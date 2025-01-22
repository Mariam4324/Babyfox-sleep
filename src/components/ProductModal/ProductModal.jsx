import { useEffect } from "react";
import { AnimatedCross } from "../AnimatedCross/AnimatedCross";
import { Button } from "../Button/Button";
import css from "./ProductModal.module.scss";

export const ProductModal = ({ how, setModal, modal, type, term, title, price, forWho }) => {
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

    return (
        <div className={css.modal}>
            <div className={css.modal__top}>
                <AnimatedCross setModal={setModal} />
                <div className={`${css.modal__term} ${css[`modal__term_${type}`]}`}>{term}</div>
            </div>

            <h2 className={css.modal__name}>{title}</h2>

            <div className={`${css["modal-wrapper"]} ${css[`modal-wrapper_${type}`]}`}>
                <span className={css["modal-wrapper__label"]}>Для кого?</span>
                <span className={css["modal-wrapper__text"]}>{forWho}</span>
            </div>

            <div className={`${css["modal-wrapper"]} ${css[`modal-wrapper_${type}`]}`}>
                <span className={css["modal-wrapper__label"]}>Как проходит?</span>
                <span className={css["modal-wrapper__text"]}>{how}</span>
            </div>

            <div className={css.modal__bottom}>
                <span className={css.modal__price}>{price}</span>
                <Button buttonText={"Перейти"} btnBG={type} link={"https://t.me/babyfox_sleep"} />
            </div>
        </div>
    );
};
