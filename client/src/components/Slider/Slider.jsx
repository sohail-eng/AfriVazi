import React, { useState, useEffect, useCallback } from "react";
import all01 from "./../../assets/image/all01.jpg";
import accessories13 from "./../../assets/image/accessories13.jpg";
import all05 from "./../../assets/image/all05.jpg";
import all10 from "./../../assets/image/all10.jpg";
import king06 from "./../../assets/image/king06.jpg";
import familia03 from "./../../assets/image/familia03.jpg";
import king07 from "./../../assets/image/king07.jpg";
import accessories17 from "./../../assets/image/accessories17.jpg";
import queen13 from "./../../assets/image/queen13.jpg";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Data = [
    all01,
    accessories13,
    all05,
    all10,
    king06,
    familia03,
    king07,
    accessories17,
    queen13,
  ];

  const prevSlide = useCallback(() => {
    setCurrentSlide(current => 
      current === 0 ? Data.length - 1 : current - 1
    );
  }, [Data.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide(current => 
      current === Data.length - 1 ? 0 : current + 1
    );
  }, [Data.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="slider">
      <div
        className="container"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
          transition:
            currentSlide === 0 || currentSlide === Data.length - 1
              ? "none"
              : "transform 1s ease",
        }}
      >
        {Data.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
