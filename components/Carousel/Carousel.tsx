import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images, interval = 3000 }: {images: string[], interval: number}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(autoScroll);
  }, [images.length, interval]);

  return (
    <div className='flex justify-center py-8'>
        <div className="relative overflow-hidden w-[90vw] h-96 rounded-lg shadow-lg">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((slide, index) => (
                <div
                    key={index}
                    className="relative min-w-full h-96 bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${slide})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className='flex flex-col justify-center items-center'>
                            <h2 className="text-white text-5xl font-medium">{"Get Ready for Your Next"}</h2>
                            <h2 className="text-white text-5xl font-medium mt-1">{"Exhibition with Your Vendor Expert"}</h2>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
                {images.map((_, index) => (
                <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-white' : 'bg-gray-400'
                    }`}
                ></div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ImageCarousel;
