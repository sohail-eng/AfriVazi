import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import axios from "axios";

const FeaturedProducts = ({type}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_API_URL + "/products?populate=*", {
          headers: {
            Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
          }
        });

        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
        {data.length === 0 ? (
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
