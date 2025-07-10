import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const imgUrl = item?.img?.url
    ? import.meta.env.VITE_UPLOAD_URL + item.img.url
    : "";
  const img2Url = item?.img2?.url
    ? import.meta.env.VITE_UPLOAD_URL + item.img2.url
    : "";

  return (
    <Link className="link" to={`/product/${item.id}`} >
      <div className="card">
        <div className="image">
          {item?.isNew && <span>New Season</span>}
          {imgUrl && <img src={imgUrl} alt="" className="mainImg" />}
          {img2Url && <img src={img2Url} alt="" className="secondImg" />}
        </div>
        <h2>{item?.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || (item?.price ? item.price + 20 : "")}</h3>
          <h3>${item?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
