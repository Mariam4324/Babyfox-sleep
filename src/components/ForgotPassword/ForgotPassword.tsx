import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../validationSchemas/loginSchema.js";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const ForgotPassword = () => {
    const navigate = useNavigate();

    const handleRegisterNavigate = () => {
        navigate("/registration");
    };

    const {
        register,
        formState: { errors, isSubmitting },
        setError,
        reset,
        handleSubmit,
    } = useForm({
        defaultValues: {
            email: "",
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
                message: "аккаунта с таким email не существует",
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
                            <CardTitle className="text-2xl dark:text-white">Востановление пароля</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col space-y-0">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" {...register("email")} placeholder="Ваш email" />
                                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                                </div>

                                <Button type="submit" className="w-full mt-[30px]" disabled={isSubmitting}>
                                    {isSubmitting ? "Загрузка..." : "Получить код"}
                                </Button>

                                {errors.root && <p className="text-sm text-destructive text-center">{errors.root.message}</p>}

                                <p className="text-sm text-muted-foreground mt-[5px]">
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
        </>
    );
};
