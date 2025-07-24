import React from "react";
import "./About.scss";
import aboutImage from "../../assets/image/all08.jpg";

const About = () => {
  return (
    <div className="about container">
      <div className="about-content">
        <h1>About AfriVazi</h1>
        <div className="about-image">
          <img src={aboutImage} alt="African Fashion" />
        </div>
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            AfriVazi was born from a passion for authentic African fashion and craftsmanship. 
            We believe in celebrating the rich cultural heritage of Africa through contemporary 
            designs that blend tradition with modern aesthetics.
          </p>
          <h2>Our Mission</h2>
          <p>
            To bring the vibrant colors, unique patterns, and exceptional quality of African 
            fashion to a global audience while supporting local artisans and sustainable practices.
          </p>
          <h2>Our Values</h2>
          <ul className="value-list">
            <li>Quality craftsmanship</li>
            <li>Ethical production</li>
            <li>Sustainable materials</li>
            <li>Cultural preservation</li>
            <li>Community support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
