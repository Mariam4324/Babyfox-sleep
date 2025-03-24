import React from "react";
import css from "./AnimatedCross.module.scss"

export const AnimatedCross = ({ setModal }) => {
    return (
        <div onClick={() => setModal(false)} className={css.outer}>
            <div className={css.inner}>
                <label className="text-black dark:text-white">назад</label>
                <span className={`${css.crossline} ${css.crosslinebefore} bg-black dark:bg-white`} />
                <span className={`${css.crossline} ${css.crosslineafter} bg-black dark:bg-white`} />
            </div>
        </div>
    );
};
