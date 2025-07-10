import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import accessories04 from "./../../assets/image/accessories04.jpg";
import queen11 from "./../../assets/image/queen11.jpg";
import queen09 from "./../../assets/image/queen09.jpg";
import queen10 from "./../../assets/image/queen10.jpg";
import king02 from "./../../assets/image/king02.jpg";
import king04 from "./../../assets/image/king04.jpg";
import kids05 from "./../../assets/image/kids05.jpg";
import kids06 from "./../../assets/image/kids06.jpg";
import Card from "../Card/Card";
import axios from "axios";

const FeaturedProducts = ({type}) => {
  const Data = [
    {
      id: 1,
      img: queen09,
      img2: queen10,
      title: "Queen's Yellow Ankara Dress",
      isNew: true,
      oldPrice: 40,
      price: 35,
    },
    {
      id: 2,
      img: king04,
      img2: king02,
      title: "King's Kaftan Black and White",
      isNew: true,
      oldPrice: 42,
      price: 37,
    },
    {
      id: 3,
      img: accessories04,
      img2: queen11,
      title: "Queen's Headwrap",
      isNew: true,
      oldPrice: 24,
      price: 17,
    },
    {
      id: 4,
      img: kids06,
      img2: kids05,
      title: "Toto's Dashiki Shirt and Tights",
      isNew: true,
      oldPrice: 38,
      price: 33,
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(import.meta.env.VITE_API_URL + "/products", {
          headers: {
            Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
          }
        });
        console.log(data);
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
        {Data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
