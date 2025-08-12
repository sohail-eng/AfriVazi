import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import accessories10 from "./../../assets/image/accessories10.jpg";
import kids01 from './../../assets/image/kids01.jpg';
import queen02 from './../../assets/image/queen02.jpg';
import king08 from './../../assets/image/king08.jpg';
import queen13 from './../../assets/image/queen13.jpg';
import all05 from './../../assets/image/all05.jpg';



const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src={accessories10} alt="" />
          <button>
            <Link to={"/products/sale"} className="link">Sale</Link>
          </button>
        </div>
        <div className="row">
          <img src={kids01} alt="" />
          <button>
            <Link to={"/products/toto"} className="link">Toto</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={queen02} alt="" />
          <button>
            <Link to={"/products/accessories"} className="link">Accessories</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src={king08} alt="" />
              <button>
                <Link to={"/products/king"} className="link">King</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={queen13} alt="" />
              <button>
                <Link to={"/products/queen"} className="link">Queen</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <img src={all05} alt="" />
            <button>
              <Link to={"/products/sale"} className="link">Sale</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
