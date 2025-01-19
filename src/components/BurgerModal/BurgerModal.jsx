import css from "./BurgerModal.module.scss";

export const BurgerModal = ({ setBurger }) => {
    return (
        <ul className={css.burger__list}>
            <svg onClick={() => setBurger(false)} className={css.burger__close} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#222" />
        </svg>
        
        

            <li onClick={() => setBurger(false)}>
                <a className={css.burger__link} href="#services">
                    Главная
                </a>
            </li>
            <li onClick={() => setBurger(false)}>
                <a className={css.burger__link} href="#about">
                    Услуги
                </a>
            </li>
            <li onClick={() => setBurger(false)}>
                <a className={css.burger__link} href="#lawyers">
                    Отзывы
                </a>
            </li>
            <li onClick={() => setBurger(false)}>
                <a className={css.burger__link} href="#feedback">
                    О компании
                </a>
            </li>
        </ul>
    );
};
