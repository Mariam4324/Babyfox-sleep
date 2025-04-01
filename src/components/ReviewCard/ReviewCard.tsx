import React from "react";
import { RatingStars } from "../RatingStars/RatingStars";

interface ReviewCardProps {
    author: string;
    date: string;
    rating: string;
    reviewText: string;
}

export const ReviewCard = ({ author, date, rating, reviewText }: ReviewCardProps) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-black text-lg font-semibold">{author}</span>
                    <span className="text-sm text-gray-500">{date}</span>
                </div>
                <div className="flex items-center mb-2">
                    <RatingStars rating={rating} />
                </div>
                <p
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        WebkitLineClamp: 6,
                        textOverflow: "ellipsis",
                    }}
                    className="text-gray-700"
                >
                    {reviewText}
                </p>
            </div>
        </div>
    );
};
