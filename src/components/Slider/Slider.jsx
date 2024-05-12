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
    setCurrentSlide(currentSlide === 0 ? 8 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 8 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={Data[0]} alt="" />
        <img src={Data[1]} alt="" />
        <img src={Data[2]} alt="" />
        <img src={Data[3]} alt="" />
        <img src={Data[4]} alt="" />
        <img src={Data[5]} alt="" />
        <img src={Data[6]} alt="" />
        <img src={Data[7]} alt="" />
        <img src={Data[8]} alt="" />
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
