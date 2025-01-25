export const RatingStars = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <>
            {stars.map((star, index) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${index < rating ? "text-yellow-500" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-6.16 3.24 1.17-6.83L0 6.34l6.91-.99L10 0l3.09 5.35 6.91.99-4.91 4.07 1.17 6.83z" />
                </svg>
            ))}
        </>
    );
};
