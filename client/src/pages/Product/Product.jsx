import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch =useDispatch();

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][id][$eq]=${id}`
  );

  return (
    <div className="product">
      {error ? (
        "Something went wrong!"
      ) : loading ? (
        "loading"
      ) : !data || data.length === 0 ? (
        "No product found"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={data[0]?.img?.url?.startsWith('http') ? data[0]?.img?.url : import.meta.env.VITE_UPLOAD_URL + data[0]?.img?.url}
                alt=""
                onClick={() => setSelectedImg("img")}
              />
              <img
                src={data[0]?.img2?.url?.startsWith('http') ? data[0]?.img2?.url : import.meta.env.VITE_UPLOAD_URL + data[0]?.img2?.url}
                alt=""
                onClick={() => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  data[0]?.[selectedImg]?.url?.startsWith('http') ? data[0]?.[selectedImg]?.url : import.meta.env.VITE_UPLOAD_URL + data[0]?.[selectedImg]?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data[0]?.title}</h1>
            <span className="price">${data[0]?.price}</span>
            <p>{data[0]?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add" onClick={() => dispatch(addToCart({
              id: Number(data[0].id),
              title: data[0].title,
              desc: data[0].desc,
              price: data[0].price,
              img: data[0].img.url,
              quantity
            }))} >
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
              <span>Vendor: {data[0]?.vendor || "VaziAfrique"}</span>
              <span>Product Type: {data[0]?.productType || "Bag"}</span>
              <span>Tag: {data[0]?.tag || "Accessories, Bag, Unisex"}</span>
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
        </>
      )}
    </div>
  );
};

export default Product;
