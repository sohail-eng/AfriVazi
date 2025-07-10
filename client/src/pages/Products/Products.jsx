import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Products.scss";
import all08 from "./../../assets/image/all08.jpg";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const { data, loading, error } = useFetch(`/sub-categories?populate=*`);

  const handleChange = (e) => {

    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubcategories(
      isChecked
        ? [...selectedSubcategories, value]
        : selectedSubcategories.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {error? "Something went wrong!" : loading? "loading" : data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
              <label htmlFor={item.id}>{item?.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>1</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="categoryImage" src={all08} alt="" />
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} subCategories={selectedSubcategories} />
      </div>
    </div>
  );
};

export default Products;
