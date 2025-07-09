import React from "react";
import PaymentImage from './../../assets/image/payment.png';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Category</h1>
          <span>Queens</span>
          <span>Kings</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Discover authentic African wear at Afrivazi. Explore our curated
            collection of vibrant Ankara prints, elegant dashikis, and stunning
            kente cloth. Each piece celebrates the rich heritage and
            craftsmanship of Africa. Shop now and embrace the beauty of African
            fashion.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            AfriVazi <br /> 
            Spectrum Business Park, <br />
            No. 73 Baba Dogo Road, Nairobi KE. <br />
            <br />
            Phone: +254 712 345 678 <br />
            Email: support@afrivazi.com <br />
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">AfriVazi</div>
          <div className="copyright"> © Copyright 2024. All Rights Reserved.</div>
        </div>
        <div className="right">
          <img src={PaymentImage} alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
