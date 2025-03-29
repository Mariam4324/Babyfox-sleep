import React from "react";
import css from "./LinkComponent.module.scss";

interface LinkComponentProps {
    linkText: string;
    pathTo: string;
}

export const LinkComponent = ({ linkText, pathTo }: LinkComponentProps) => {
    return (
        <li>
            <a href={`${pathTo}`} className={`${css.link} dark:text-white text-black`}>
                {linkText}
            </a>
        </li>
    );
};
