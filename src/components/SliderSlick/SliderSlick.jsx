import Slider from "react-slick";

export const SliderSlick = ({ children }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return <Slider {...settings}>{children}</Slider>;
};
