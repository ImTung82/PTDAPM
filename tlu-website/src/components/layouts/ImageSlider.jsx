import React, { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const images = [
  "/assets/image_slider/image_slider_1.png",
  "/assets/image_slider/image_slider_2.png",
  "/assets/image_slider/image_slider_3.png",
  "/assets/image_slider/image_slider_4.png",
  "/assets/image_slider/image_slider_5.png",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Chuyển ảnh tự động
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Chuyển ảnh mỗi 5 giây

    return () => clearInterval(interval); // Cleanup khi component unmount
  }, [currentIndex]); // Lắng nghe currentIndex để reset interval

  // Chuyển đến ảnh tiếp theo
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Chuyển đến ảnh trước đó
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden z-0">
      {/* Hiển thị ảnh */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Nút Previous */}
      <button
        className="absolute left-1 sm:left-2 top-1/2 px-1 sm:px-3 text-white hover:opacity-70 transition-all duration-300 ease-out -translate-y-1/2"
        onClick={prevImage}
      >
        <SlArrowLeft size={20} className="sm:hidden" />
        <SlArrowLeft size={40} className="hidden sm:block" />
      </button>

      {/* Nút Next */}
      <button
        className="absolute right-1 sm:right-2 top-1/2 px-1 sm:px-3 text-white hover:opacity-70 transition-all duration-300 ease-out -translate-y-1/2"
        onClick={nextImage}
      >
        <SlArrowRight size={20} className="sm:hidden" />
        <SlArrowRight size={40} className="hidden sm:block" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-2 sm:bottom-4 w-full flex justify-center space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;