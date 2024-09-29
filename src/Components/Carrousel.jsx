import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    if (images.length === 1) {
        return (
            <div className="Carrousel">
                <img src={images[0]} alt={`Slide 1`} className="CarrouselImg" />
            </div>
        );
    }
    return (
        <div className="Carrousel">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className='CarrouselImg' />

            <i className="fa-solid fa-chevron-left" onClick={prevSlide}></i>
            <i className="fa-solid fa-chevron-right" onClick={nextSlide}></i>
            <p>{currentIndex + 1}/{images.length}</p>

        </div>
    );
};

export default Carousel;