import { RatingStars } from "../RatingStars/RatingStars";

export const ReviewCard = ({ author, date, rating, reviewText }) => {
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
                <p className="text-gray-700">{reviewText}</p>
            </div>
        </div>
    );
};
