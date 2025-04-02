import { Link } from "react-router-dom";
import { articles } from "../../assets/data";
import { MaterialsCard } from "../../components/MaterialsCard/MaterialsCard";
import { Button } from "./../../components/Button/Button";
import styles from "./../../components/Materials/Materials.module.scss";

export const Articles = () => {
    return (
        <section className="pt-[40px] pb-[40px] bg-white dark:bg-black">
            <div className="flex justify-center flex-wrap gap-[30px]">
                {articles.map((article) => (
                    <MaterialsCard key={article.id} title={article.title} date={article.date} text={article.description} link={article.link} picture={article.img} />
                ))}
            </div>

            <Link to="/" className={styles.materials__btn}>
                <Button buttonText="Вернуться на главную" btnBG="standart" link={null} />
            </Link>
        </section>
    );
};
