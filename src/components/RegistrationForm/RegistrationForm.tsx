import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const RegistrationForm = () => {
    const navigate = useNavigate();

    const handleLoginNavigate = () => {
        navigate("/login");
    };

    return (
        <div className="flex flex-col min-h-screen dark:bg-black">
            <div className="mt-[10px]">
                <Breadcrumbs />
            </div>

            <div className="flex-1 grid place-items-center p-4">
                <Card className="w-full max-w-md">
                    <CardHeader className="pt-[20px] pb-[10px]">
                        <CardTitle className="text-2xl dark:text-white">Регистрация</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <form>
                            <div className="space-y-0">
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Ваш email" required />
                                </div>
                                <div>
                                    <Label htmlFor="password">Пароль</Label>
                                    <Input id="password" type="password" placeholder="Ваш пароль" required />
                                </div>
                                <div>
                                    <Label htmlFor="confirmPassword">Повторите пароль</Label>
                                    <Input id="confirmPassword" type="password" placeholder="Повторите пароль" required />
                                </div>
                            </div>

                            <Button type="submit" className="w-full mt-[30px]">
                                Зарегистрироваться
                            </Button>

                            <p className="text-sm text-muted-foreground text-center mt-[5px]">
                                Уже есть аккаунт?
                                <Button variant="link" size="sm" className="px-1" onClick={handleLoginNavigate}>
                                    Войти
                                </Button>
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
