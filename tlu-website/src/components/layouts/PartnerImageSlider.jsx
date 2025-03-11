import React, { useState, useEffect, useRef } from "react";

const images = [
  "/assets/partner_image_slider/fpt.png",
  "/assets/partner_image_slider/samsung.png",
  "/assets/partner_image_slider/alibaba.png",
  "/assets/partner_image_slider/usol.png",
  "/assets/partner_image_slider/lachong.png",
  "/assets/partner_image_slider/vncert.png",
  "/assets/partner_image_slider/meisei.png",
  "/assets/partner_image_slider/gem.png",
];

function PartnerImageSlider() {
  const [visibleImages, setVisibleImages] = useState(5);
  const [displayImages, setDisplayImages] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  // Determine visible images based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(2); // Mobile
      } else if (window.innerWidth < 768) {
        setVisibleImages(3); // Small tablet
      } else if (window.innerWidth < 1024) {
        setVisibleImages(4); // Tablet
      } else {
        setVisibleImages(5); // Desktop
      }
    };

    // Set initial visible images
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize display images whenever visibleImages changes
  useEffect(() => {
    setDisplayImages([...images.slice(0, visibleImages + 1)]);
  }, [visibleImages]);

  useEffect(() => {
    if (!displayImages.length) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true); // Activate slide effect

      setTimeout(() => {
        setDisplayImages((prevImages) => {
          if (!prevImages.length) return [...images.slice(0, visibleImages + 1)];
          
          const lastImage = prevImages[prevImages.length - 1];
          const nextIndex = (images.indexOf(lastImage) + 1) % images.length;
          return [...prevImages.slice(1), images[nextIndex]]; // Remove first image, add new image to end
        });

        setIsTransitioning(false); // Reset effect immediately
      }, 500); // Animation time = 500ms
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [displayImages, visibleImages]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full mx-auto overflow-hidden"
      style={{ height: '80px' }}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: isTransitioning ? `translateX(-${100 / (visibleImages + 1)}%)` : "translateX(0)",
          width: `${displayImages.length * 100 / visibleImages}%`, // Dynamically calculate width
        }}
      >
        {displayImages.map((image, index) => (
          <div 
            key={index}
            className="flex justify-center items-center px-2 sm:px-4 md:px-6"
            style={{ width: `${100 / displayImages.length}%` }} // Each image gets equal width
          >
            <img
              src={image}
              alt={`Partner ${index + 1}`}
              className="w-full h-auto max-h-[60px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnerImageSlider;