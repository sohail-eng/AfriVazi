import React, { useState } from "react";
import "./Product.scss";
import accessories06 from "./../../assets/image/accessories06.jpg";
import accessories07 from "./../../assets/image/accessories07.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const Images = [accessories06, accessories07];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={Images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={Images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={Images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$19.90</span>
        <p>
          Elevate your look with our handcrafted African bag, featuring vibrant
          Ankara prints and durable materials. Perfect for any occasion, this
          unique accessory combines traditional artistry with modern style. Shop
          now to add a touch of African elegance to your wardrobe.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: VaziAfrique</span>
          <span>Product Type: Bag</span>
          <span>Tag: Accessories, Bag, Unisex</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
