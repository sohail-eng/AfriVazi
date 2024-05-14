import React from "react";
import "./Products.scss";
import all08 from "./../../assets/image/all08.jpg";
import List from "../../components/List/List";

const Products = () => {
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Accessories</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="1">KIng</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="1">Queen</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="4" value={4} />
            <label htmlFor="1">Toto</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>1</span>
            <input type="range" min={0} max={1000} />
            <span>1000</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="categoryImage" src={all08} alt="" />
        <List />
      </div>
    </div>
  );
};

export default Products;
