import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderBottom.css';

const SliderBottom = ({ images }) => {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setSlidesToShow(getSlidesToShow());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function getSlidesToShow() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      return 1;
    } else if (windowWidth >= 768 && windowWidth <= 991) {
      return 2;
    } else {
      return 4;
    }
  }

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    sliderRef.current.slickPrev();
  };
  
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true, 
    centerMode: true,
    arrows: false
  };

  return (
    <div className="slider-container">
      <button onClick={handlePrevSlide} className="custom-arrow prev">
        <div class="slider-btn-pulsation"></div>
        <img src='/images/system/ico/arrow-left.svg' alt="prev" />
      </button>
      <div className="slider">
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className='img-container'>
              <img src={image} alt={`Слайд ${index + 1}`} className='img' />
            </div>
          ))}
        </Slider>
      </div>
      <button onClick={handleNextSlide} className="custom-arrow next">
        <div class="slider-btn-pulsation"></div>
        <img src='/images/system/ico/arrow-right.svg' alt="next" />
      </button>
    </div>
  );
};

export default SliderBottom;
