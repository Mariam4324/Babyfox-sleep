import css from "./MaterialsCard.module.scss";


export const MaterialsCard = ({ title, date, text, link, picture }) => {
    return (
        <a href={link}>
            <div className={`${css.materials__card}`}>
                <div className={css.materials__img}>
                    <div className={css.materials__blackout}></div>
                    <img className={css.materials__picture} src={picture} alt="фотография статьи" />
                </div>
                <div className={css.materials__bottom}>
                    <div className={`${css.materials__subtitle} ${["title-extra"]} text-black dark:text-white`}>{title}</div>
                    <div className={css.materials__separator}>
                        <time className={`${css.materials__date} ${["text-comment"]} text-black dark:text-white`}>{date}</time>
                        <div className={css.materials__subline}></div>
                    </div>
                    <div className={`${css.materials__text} ${"text"} text-black dark:text-white`}>{text}</div>
                </div>
            </div>
        </a>
    );
};
