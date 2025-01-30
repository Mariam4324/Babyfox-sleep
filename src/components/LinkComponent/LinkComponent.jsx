import css from "./Link.module.scss";

export const LinkComponent = ({ linkText, pathTo }) => {
    return (
        <li>
            <a href={`#${pathTo}`} className={`${css.link} text-black dark:text-white`}>
                {linkText}
            </a>
        </li>
    );
};
