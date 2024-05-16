import React from "react";
import "./Cart.scss";
import queen09 from "./../../assets/image/queen09.jpg";
import queen10 from "./../../assets/image/queen10.jpg";
import king04 from "./../../assets/image/king04.jpg";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const Data = [
    {
      id: 1,
      img: queen09,
      img2: queen10,
      title: "Queen's Yellow Ankara Dress",
      desc: "Queen's Yellow Ankara Dress",
      isNew: true,
      oldPrice: 40,
      price: 35,
    },
    {
      id: 2,
      img: king04,
      title: "King's Kaftan Black and White",
      desc: "King's Kaftan Black and White",
      isNew: true,
      oldPrice: 42,
      price: 37,
    },
  ];
  return (
    <div className="cart">
      <h1>Items in your cart</h1>
      {Data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
