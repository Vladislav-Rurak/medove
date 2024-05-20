import React from 'react';
import SliderBottom from './SliderBottom';

const SliderBottomItems = () => {
  const images = [
    '/images/slider-bottom/slider-bottom-1.webp',
    '/images/slider-bottom/slider-bottom-2.webp',
    '/images/slider-bottom/slider-bottom-3.webp',
    '/images/slider-bottom/slider-bottom-4.webp',
    '/images/slider-bottom/slider-bottom-5.webp',
    '/images/slider-bottom/slider-bottom-6.webp',
    '/images/slider-bottom/slider-bottom-7.webp',
    '/images/slider-bottom/slider-bottom-8.webp',
    '/images/slider-bottom/slider-bottom-9.webp',
    '/images/slider-bottom/slider-bottom-10.webp',
  ];

  return (
    <div className="SliderBottomItems">
      <SliderBottom images={images} />
    </div>
  );
};

export default SliderBottomItems;
