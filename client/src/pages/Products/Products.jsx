import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Products.scss";
import all08 from "./../../assets/image/all08.jpg";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const { id } = useParams();
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");

  // Map category names from URL to category titles in the database
  useEffect(() => {
    if (id) {
      const categoryMap = {
        'queen': 'Queen',
        'king': 'King',
        'toto': 'Toto'
      };
      setCategoryFilter(categoryMap[id.toLowerCase()] || "");
    }
  }, [id]);

  const { data: subCategories, loading: subCategoriesLoading, error: subCategoriesError } = useFetch(`/sub-categories?populate=*`);

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
          {subCategoriesError ? "Something went wrong!" : subCategoriesLoading ? "loading" : subCategories?.map((item) => (
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
        <List 
          subCategories={selectedSubcategories} 
          category={categoryFilter}
          maxPrice={maxPrice} 
          sort={sort} 
        />
      </div>
    </div>
  );
};

export default Products;
