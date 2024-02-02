import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css'; // Import a CSS file for additional styling

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <div className="slick-arrow slick-prev">Previous</div>,
    nextArrow: <div className="slick-arrow slick-next">Next</div>,
    adaptiveHeight: true, // Automatically adjust slider height based on content
  };

  const images = [
    'https://wallpaperbat.com/img/830009-psychology-wallpaper.jpg',
    'https://wallpaperbat.com/img/829993-social-psychology-wallpaper-top-free-social-psychology-background.jpg',
    'https://wallpaperbat.com/img/829869-psychology-laptop-wallpaper-top-free-psychology-laptop-background.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div className="slider-container">
     
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-image-container">
            <img src={image} alt={`Slide ${index + 1}`}  className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
