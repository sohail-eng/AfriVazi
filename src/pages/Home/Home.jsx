import React from "react";
import "./Home.scss";
import Slider from "./../../components/Slider/Slider.jsx";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default Home;
