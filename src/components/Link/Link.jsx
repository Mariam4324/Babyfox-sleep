import css from "./Link.module.scss";

export const Link = ({ linkText, pathTo }) => {
    return (
        <li>
            <a href={`#${pathTo}`} className={css.link}>
                {linkText}
            </a>
        </li>
    );
};
