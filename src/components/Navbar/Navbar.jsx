import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Flag from "./../../assets/image/Kenya-Flag-icon.png";
import { Link } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={Flag} alt="flag" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>KES</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/product/1">Queen</Link>
          </div>
          <div className="item">
            <Link className="link" to="/product/2">King</Link>
          </div>
          <div className="item">
            <Link className="link" to="/product/3">Toto</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">AfriVazi</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
                <ShoppingCartOutlinedIcon />
                <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
