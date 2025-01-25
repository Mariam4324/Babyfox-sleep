export const ReviewCard = ({ author, date, rating, reviewText }) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-0 mx-2.5">
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">{author}</span>
                    <span className="text-sm text-gray-500">{date}</span>
                </div>
                <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-6.16 3.24 1.17-6.83L0 6.34l6.91-.99L10 0l3.09 5.35 6.91.99-4.91 4.07 1.17 6.83z" />
                    </svg>
                </div>
                <p className="text-gray-700">{reviewText}</p>
            </div>
        </div>
    );
};
