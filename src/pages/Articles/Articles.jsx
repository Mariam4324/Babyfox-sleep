import { articles } from "../../assets/data";
import { MaterialsCard } from "../../components/MaterialsCard/MaterialsCard";

export const Articles = () => {
    return (
        <div className="materials__cards">
            {articles.map((article) => (
                <MaterialsCard key={article.id} title={article.title} date={article.date} text={article.description} link={article.link} picture={article.img} />
            ))}
        </div>
    );
};
