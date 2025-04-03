import { Link, useLocation } from "react-router-dom";

const pathTranslation = {
    home: "главная",
    registration: "регистрация",
    login: "войти",
    ForgotPassword: "восстановление пароля",
};

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((value) => value);

    return (
        <nav className="dark:bg-black p-4">
            <ul className="flex space-x-2">
                <li>
                    <Link to="/" className="text-gray-500 hover:text-orange-500">
                        {pathTranslation.home}
                    </Link>
                </li>
                {pathnames.map((path, index) => {
                    const lastPath = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const currentPath = pathTranslation[path];

                    return (
                        <li key={to} className="flex items-center gap-2">
                            {lastPath ? (
                                <>
                                    <div className="text-gray-500 font-bold w-max-content">/</div>
                                    <span className="text-gray-500 font-bold">{currentPath}</span>
                                </>
                            ) : (
                                <Link to={to} className="text-gray-500 font-semibold hover:text-orange-500">
                                    {currentPath}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
