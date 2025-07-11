import React from "react";
import './List.scss';
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCategories = [], maxPrice, sort = "asc" }) => {

  const { data, loading, error } = useFetch(
    `/products?populate=*${subCategories.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  
  console.log("List data:", data);
  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Data length:", data?.length);

  return (
    <div className="list">
      {error ? "Something went wrong!" : loading ? "loading" : data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
