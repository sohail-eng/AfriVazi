import React, { useState } from "react";
import accessories02 from "./../../assets/image/accessories02.jpg";
import all01 from "./../../assets/image/all01.jpg";
import all03 from "./../../assets/image/all03.jpg";
import kids06 from "./../../assets/image/kids06.jpg";
import king06 from "./../../assets/image/king06.jpg";
import kingnqueen01 from "./../../assets/image/kingnqueen01.jpg";
import kingnqueen05 from "./../../assets/image/kingnqueen05.jpg";
import queen01 from "./../../assets/image/queen01.jpg";
import queen07 from "./../../assets/image/queen07.jpg";
import queen13 from "./../../assets/image/queen13.jpg";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Data = [
    queen01,
    accessories02,
    all01,
    kingnqueen01,
    all03,
    queen07,
    kids06,
    king06,
    kingnqueen05,
    queen13,
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Data.map((image, index) => (
          <img src={image} alt={`Slide ${index}`} key={index} />
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
