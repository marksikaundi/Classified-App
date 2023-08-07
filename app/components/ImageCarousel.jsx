"use client";
import React, { useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const images = [
  "https://corporate.workapp.world/wp-content/uploads/2016/04/banners-4.jpg",
  "https://corporate.workapp.world/wp-content/uploads/2017/08/slider.jpg",
  "https://corporate.workapp.world/wp-content/uploads/2017/08/banners-7.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative items-center justify-center">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full"
      />
      <div className="bg-gradient-to-r from-gray-500 absolute md:h-60 h-20 left-0 bottom-0 text-white font-bold md:text-3xl text-sm block">
        <h1 className="md:pt-6 pt-3 md:ml-20 ml-10">BUY, SELL,</h1>
        <p className="md:ml-20 ml-10">RENT or SWAP</p>
        <div className="md:ml-20 ml-10 md:pt-14 hidden md:flex">
          <img
            src="https://corporate.workapp.world/wp-content/uploads/2017/08/workapp_btn.png"
            alt="..."
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-500 p-2 md:h-10 md:w-10 border"
      >
        <GrPrevious />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-500 p-2 md:h-10 md:w-10 border"
      >
        <GrNext />
      </button>
    </div>
  );
};

export default ImageCarousel;
