import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

export const NotFound = () => {
    return (
        <section>
            <div className="bg-white dark:bg-black">
                <div className="flex h-screen">
                    <div className="m-auto text-center text-black font-bold text-2xl">
                        <div className="dark:text-white">404</div>
                        <p className="font-bold text-2xl dark:text-white">Такой страницы не существует</p>

                        <div className="flex items-center justify-center mt-[30px]">
                            <Link to="/">
                                <Button buttonText="Вернуться на главную" btnBG="standart" link={null} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
