import React, { useEffect, useState } from "react";
import { Container } from "../../layout/Container/Container";
import { Button } from "../Button/Button";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import { Title } from "../Title/Title";
import styles from "./Reviews.module.scss";
import { testimonials } from "../../assets/data";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

export const Reviews = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    
    // Количество карточек на странице: 2 для мобильных, 3 для десктопа
    const cardsPerPage = isMobile ? 2 : 3;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Вычисляем текущие карточки
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = testimonials.slice(indexOfFirstCard, indexOfLastCard);
    const totalPages = Math.ceil(testimonials.length / cardsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Функция для отображения 3 видимых страниц пагинации
    const getVisiblePages = () => {
        const visiblePages = [];
        const pagesToShow = 3; // Всегда показываем 3 кнопки

        if (totalPages <= pagesToShow) {
            // Если страниц меньше или равно 3, показываем все
            for (let i = 1; i <= totalPages; i++) {
                visiblePages.push(i);
            }
        } else {
            // Определяем диапазон отображаемых страниц
            let startPage = currentPage - 1;
            let endPage = currentPage + 1;

            // Корректируем диапазон у границ
            if (currentPage === 1) {
                startPage = 1;
                endPage = 3;
            } else if (currentPage === totalPages) {
                startPage = totalPages - 2;
                endPage = totalPages;
            }

            // Заполняем массив видимых страниц
            for (let i = startPage; i <= endPage; i++) {
                visiblePages.push(i);
            }
        }

        return visiblePages;
    };

    return (
        <section id="reviews" className={`${styles.reviews} dark:bg-black dark:text-white bg-white text-black`}>
            <Container>
                <Title titleText={"Что о нас говорят клиенты"} />
                <p className={`${styles.reviews__text} text-black dark:text-white`}>
                    Я горжусь тем, что моя работа приносит пользу родителям и их детям!
                </p>

                <div className={styles.reviews__wrapper}>
                    {currentCards.map((testimonial) => (
                        <ReviewCard 
                            key={testimonial.id} 
                            author={testimonial.author} 
                            rating={testimonial.rating} 
                            date={testimonial.date} 
                            reviewText={testimonial.text} 
                        />
                    ))}
                </div>

                {/* Пагинация с "скользящими" кнопками */}
                <div className="mt-6 flex flex-col items-center gap-4">
                    {/* Индикатор страницы для мобильных */}
                    {isMobile && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Страница {currentPage} из {totalPages}
                        </div>
                    )}

                    <Pagination>
                        <PaginationContent>
                            {/* Кнопка "Назад" */}
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handlePrev();
                                    }}
                                    className={`${currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"} min-h-10 min-w-10`}
                                />
                            </PaginationItem>

                            {/* Номера страниц - всегда 3 кнопки */}
                            {getVisiblePages().map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        isActive={currentPage === page}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            paginate(page);
                                        }}
                                        className="cursor-pointer min-h-10 min-w-10"
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            {/* Кнопка "Вперед" */}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNext();
                                    }}
                                    className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"} min-h-10 min-w-10`}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>

                <div className={styles.reviews__btn}>
                    <Button 
                        buttonText={"больше отзывов"} 
                        btnBG={"standart"} 
                        link={"https://www.instagram.com/babyfox.sleep"} 
                    />
                </div>
            </Container>
        </section>
    );
};