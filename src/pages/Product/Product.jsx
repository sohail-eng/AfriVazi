import React, { useState } from "react";
import "./Product.scss";
import accessories06 from "./../../assets/image/accessories06.jpg";
import accessories07 from "./../../assets/image/accessories07.jpg";

const Product = () => {

  const [selectedImg,setSelectedImg] = useState(0)

  const Images = [accessories06, accessories07];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={Images[0]} alt="" onClick={e=>setSelectedImg(0)} />
          <img src={Images[1]} alt="" onClick={e=>setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={Images[setSelectedImg]} alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Product;
