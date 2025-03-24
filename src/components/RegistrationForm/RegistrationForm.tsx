import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";

export const RegistrationForm = () => {
    const navigate = useNavigate();

    const handleLoginNavigate = () => {
        navigate("/login");
    };

    return (
        <section className="h-screen overflow-hidden">
            <Breadcrumbs />
            <div className="login__wrapper px-[15px] py-0 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-[600px] w-full bg-white rounded-lg  shadow dark:border md:mt-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Регистрация</h1>
                        <form className="space-y-4 md:space-y-6" action="#" noValidate>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />

                            <input autoComplete="current-password" type="password" placeholder="Пароль" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                            <input type="password" name="password" id="password" placeholder="Повторите пароль" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                            <div className="flex items-center justify-between">
                                <div className="flex items-start"></div>

                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Забыли пароль?
                                </a>
                            </div>

                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Зарегистрироваться
                            </button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Уже есть аккаунт?
                                <button onClick={handleLoginNavigate} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Войти
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
