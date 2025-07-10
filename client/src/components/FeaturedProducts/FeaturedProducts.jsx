import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({type}) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
  
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Explore our curated collection of featured African wear, showcasing
          the essence of vibrant cultures and timeless traditions. From
          intricately woven kente cloth to bold Ankara prints and elegant
          dashikis, each piece tells a story of craftsmanship and heritage.
          Elevate your style with our handpicked selection of statement pieces,
          celebrating the richness and diversity of African fashion. Shop now
          and embrace the beauty of authentic African wear at its finest.
        </p>
      </div>
      <div className="bottom">
        {error? "Something went wrong!" : loading? "loading" : data.length === 0 ? (
          <p>No products found.</p>
        ) : (
          data.map((item) => (
            <Card item={item} key={item.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
