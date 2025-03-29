import React from "react";
import styles from "./AnimatedCross.module.scss"

export const AnimatedCross = ({ setModal }) => {
    return (
        <div onClick={() => setModal(false)} className={styles.outer}>
            <div className={styles.inner}>
                <label className="text-black dark:text-white">назад</label>
                <span className={`${styles.crossline} ${styles.crosslinebefore} bg-black dark:bg-white`} />
                <span className={`${styles.crossline} ${styles.crosslineafter} bg-black dark:bg-white`} />
            </div>
        </div>
    );
};
