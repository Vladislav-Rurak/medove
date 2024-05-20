import React, { useState } from 'react';
import './SliderTop.css';

function SliderTop() {
    const [fullSizeImage, setFullSizeImage] = useState(null);

    const toggleFullScreen = (src) => {
        if (fullSizeImage === src) {
            setFullSizeImage(null);
        } else {
            setFullSizeImage(src);
        }
    };

    return (
        <div className='imgContainer'>
            <div className='imgContainerItem'>
                <img src='./images/slider-top/slider-top-1.webp' alt='slider-top-1' onClick={() => toggleFullScreen('./images/slider-top/slider-top-1.webp')} />
                <img src='./images/slider-top/slider-top-2.webp' alt='slider-top-2' onClick={() => toggleFullScreen('./images/slider-top/slider-top-2.webp')} />
                <img src='./images/slider-top/slider-top-3.webp' alt='slider-top-3' onClick={() => toggleFullScreen('./images/slider-top/slider-top-3.webp')} />
                <img src='./images/slider-top/slider-top-4.webp' alt='slider-top-4' onClick={() => toggleFullScreen('./images/slider-top/slider-top-4.webp')} />
            </div>
            <div className='sideContainer'>
                <img src='./images/slider-top/slider-top-5.webp' alt='slider-top-5' onClick={() => toggleFullScreen('./images/slider-top/slider-top-5.webp')} />
            </div>
            {fullSizeImage && (
                <div>
                <div className="overlay"></div>
                <div className="modal" onClick={() => toggleFullScreen(fullSizeImage)}>
                    <div className="modal-content">
                        <span className="close" onClick={() => toggleFullScreen(fullSizeImage)}>&times;</span>
                        <img src={fullSizeImage} alt="fullScreenImage" />
                    </div>
                </div>
                </div>
            )}
        </div>  
    );
}

export default SliderTop;
