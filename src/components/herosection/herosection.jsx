import React, { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    let slideIndex = 0;

    function showSlides() {
      const slides = document.getElementsByClassName("slides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    showSlides();
  }, []);

  return (
    <div className="slideshow-container w-full h-96 overflow-hidden relative">
      {/* Slides */}
      <div className="slides absolute w-full h-full">
        <img
          src="https://media.gettyimages.com/id/1228135478/photo/a-woman-scans-her-thumb-in-an-electronic-point-of-sale-machine-near-a-state-run-distribution.jpg?s=612x612&w=0&k=20&c=IvZpigSTfkSbnG4Cfr3YJLr8nqI6buNvQIAgszhYJ-M="
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="slides absolute w-full h-full">
        <img
          src="https://media.gettyimages.com/id/1228135526/photo/a-woman-collects-a-subsidized-ration-of-grain-from-a-state-run-distribution-store-in-a.jpg?s=612x612&w=0&k=20&c=CT7RiMoxnFSTGUGqpBaxquBYEDvyaFO81IaHRhGZIHQ="
          alt="Image 2"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="slides absolute w-full h-full">
        <img
          src="https://media.gettyimages.com/id/649190344/photo/madhya-pradesh-india-radhe-shaym-measures-ten-kilograms-of-wheat-for-a-woman-at-the-laxmi-bai.jpg?s=612x612&w=0&k=20&c=ek-_aE5x5N_BRvxub1ZvtBZwGxmRuIbbM-nEmV8WK8w="
          alt="Image 3"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="slides absolute w-full h-full">
        <img
          src="https://media.gettyimages.com/id/649189986/photo/madhya-pradesh-india-indian-men-and-women-line-up-outside-the-fair-price-shop-with-their.jpg?s=612x612&w=0&k=20&c=-F9elcBbRTG0-_erdtg9LDjj8Unhx0CXACoc6p73ahs="
          alt="Image 4"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
