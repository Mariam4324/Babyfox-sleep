import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const LatestUpdateModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Проверяем, видел ли пользователь уже модальное окно
        // const hasSeenModal = localStorage.getItem("LatestUpdateModal");

        // if (!hasSeenModal) {
        setIsOpen(true);
        // localStorage.setItem("LatestUpdaetModal", "true");
        // }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[425px] rounded-lg fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" onInteractOutside={handleClose}>
                <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Последние обновления</DialogTitle>
                    <button onClick={handleClose} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                        <span className="sr-only">Закрыть</span>
                    </button>
                </DialogHeader>

                <div className="space-y-2 py-[7px]">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <h3 className="font-semibold text-blue-600 dark:text-blue-400">Темная и светлая тема</h3>
                        <p className="text-sm mt-1 text-muted-foreground">Теперь тема работает исправно и стабильно.</p>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                        <h3 className="font-semibold text-green-600 dark:text-green-400">Пагинация отзывов</h3>
                        <p className="text-sm mt-1 text-muted-foreground">Теперь можно комфортно листать отзывы.</p>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                        <h3 className="font-semibold text-purple-600 dark:text-purple-400">Модальное окно обновлений</h3>
                        <p className="text-sm mt-1 text-muted-foreground">Добавлено уведомление о новых функциях.</p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <h3 className="font-semibold text-blue-600 dark:text-blue-400">Обновленные статьи</h3>
                        <p className="text-sm mt-1 text-muted-foreground">Новый дизайн статей и отдельная страница со статьями.</p>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                        <h3 className="font-semibold text-green-600 dark:text-green-400">Редизайн компонентов</h3>
                        <p className="text-sm mt-1 text-muted-foreground">Новый дизайн шапки сайта и страницы 404.</p>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                        <h3 className="font-semibold text-purple-600 dark:text-purple-400">Редизайн регистрации и авторизации</h3>
                        <p className="text-sm mt-1 text-muted-foreground">Новый дизайн форм регистрации и авторизации.</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
