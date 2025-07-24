import React from "react";
import './List.scss';
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCategories = [], category = "", maxPrice, sort = "asc" }) => {
  // Build the API query URL
  let url = "/products?populate=*";
  
  // Add subcategory filters if any
  if (subCategories.length > 0) {
    url += subCategories.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    ).join('');
  }
  
  // Add category filter if provided
  if (category) {
    url += `&[filters][categories][title][$eq]=${category}`;
  }
  
  // Add price and sort parameters
  url += `&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;

  const { data, loading, error } = useFetch(url);

  return (
    <div className="list">
      {error ? "Something went wrong!" : loading ? "loading" : data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
