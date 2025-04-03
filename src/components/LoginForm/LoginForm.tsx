import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../validationSchemas/loginSchema.js";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
    const navigate = useNavigate();

    const handleRegisterNavigate = () => {
        navigate("/registration");
    };
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { isSubmitting, errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (formData) => {
        try {
            await new Promise((res) => setTimeout(res, 1000));
            console.log(formData);
            reset();
            throw new Error();
        } catch (error) {
            setError("root", {
                message: "пользователь с таким email уже существует",
            });
        }
    };

    return (
        <>
            <div className="flex flex-col min-h-screen dark:bg-black">
                <div className="mt-[10px]">
                    <Breadcrumbs />
                </div>

                <div className="flex-1 grid place-items-center p-4">
                    <Card className="w-full max-w-md">
                        <CardHeader className="pt-[20px] pb-[10px]">
                            <CardTitle className="text-2xl dark:text-white">Вход в личный кабинет</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col space-y-0">
                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" {...register("email")} placeholder="Ваш email" />
                                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="password">Пароль</Label>
                                        <Input id="password" type="password" {...register("password")} placeholder="Ваш пароль" />
                                        {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
                                    </div>
                                </div>

                                <div className="flex justify-end mt-[10px]">
                                    <Button variant="link" size="sm" asChild>
                                        <a href="#">Забыли пароль?</a>
                                    </Button>
                                </div>

                                <Button type="submit" className="w-full mt-[5px]" disabled={isSubmitting}>
                                    {isSubmitting ? "Загрузка..." : "Войти"}
                                </Button>

                                {errors.root && <p className="text-sm text-destructive text-center">{errors.root.message}</p>}

                                <p className="text-sm text-muted-foreground text-center mt-[5px]">
                                    Ещё нет аккаунта?
                                    <Button variant="link" size="sm" className="px-1" onClick={handleRegisterNavigate}>
                                        Зарегистрироваться
                                    </Button>
                                </p>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* <div className="mt-[15px]">
                <Breadcrumbs />
            </div>
            <section className="h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="w-full max-w-[600px] px-4">
                    <div className="bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Вход в личный кабинет</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#" noValidate>
                                <input {...register("email")} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                                {errors.email && <p className="text-error">{errors.email.message}</p>}
                                <input {...register("password")} type="password" name="password" id="password" placeholder="Пароль" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                {errors.password && <p className="text-error">{errors.password?.message}</p>}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start"></div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Забыли пароль?
                                    </a>
                                </div>
                                <button disabled={isSubmitting} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    {isSubmitting ? "Загрузка..." : "Войти"}
                                </button>
                                {errors.root && <p className="text-error">{errors.root?.message}</p>}
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Ещё нет аккаунта?
                                    <button onClick={handleRegisterNavigate} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Зарегистрироваться
                                    </button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default LoginForm;
