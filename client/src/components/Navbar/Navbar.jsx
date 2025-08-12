import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Flag from "./../../assets/image/Kenya-Flag-icon.png";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle window resize to update isMobile state
  useEffect(() => {
    const checkIfMobile = () => window.innerWidth < 768;
    
    const handleResize = () => {
      const mobile = checkIfMobile();
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    // Set initial value
    setIsMobile(checkIfMobile());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
  ];

  const categoryItems = [
    { to: "/products/queen", text: "Queen" },
    { to: "/products/king", text: "King" },
    { to: "/products/toto", text: "Toto" },
  ];

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={Flag} alt="flag" />
            <KeyboardArrowDownIcon className="dropdown-icon" />
          </div>
          <div className="item">
            <span>KES</span>
            <KeyboardArrowDownIcon className="dropdown-icon" />
          </div>
          {!isMobile &&
            categoryItems.map((item, index) => (
              <div key={`cat-${index}`} className="item">
                <Link className="link" to={item.to}>
                  {item.text}
                </Link>
              </div>
            ))}
        </div>
        
        <div className="center">
          <Link className="link" to="/">
            AfriVazi
          </Link>
        </div>

        <div className="right">
          {!isMobile ? (
            <>
              {navItems.map((item, index) => (
                <div key={`nav-${index}`} className="item">
                  <Link className="link" to={item.to}>
                    {item.text}
                  </Link>
                </div>
              ))}
              <div className="icons">
                <SearchIcon className="icon" />
                <PersonOutlineOutlinedIcon className="icon" />
                <FavoriteBorderOutlinedIcon className="icon" />
                <div className="cartIcon" onClick={() => setOpen(!open)}>
                  <ShoppingCartOutlinedIcon className="icon" />
                  {products.length > 0 && <span>{products.length}</span>}
                </div>
              </div>
            </>
          ) : (
            <div className="mobile-icons">
              <div className="cartIcon" onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon className="icon" />
                {products.length > 0 && <span>{products.length}</span>}
              </div>
              <button 
                className="menu-toggle" 
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <div className="mobile-nav-items">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  className="mobile-nav-item"
                  to={item.to}
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              ))}
              <div className="mobile-categories">
                <h3>Categories</h3>
                {categoryItems.map((item, index) => (
                  <Link
                    key={`cat-${index}`}
                    className="mobile-category-item"
                    to={item.to}
                    onClick={toggleMenu}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
              <div className="mobile-account-actions">
                <Link to="/account" className="mobile-account-item" onClick={toggleMenu}>
                  <PersonOutlineOutlinedIcon />
                  <span>My Account</span>
                </Link>
                <Link to="/wishlist" className="mobile-account-item" onClick={toggleMenu}>
                  <FavoriteBorderOutlinedIcon />
                  <span>Wishlist</span>
                </Link>
                <div className="mobile-search">
                  <SearchIcon />
                  <input type="text" placeholder="Search products..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {open && <Cart />}
    </div>
  );
};

export default Navbar;
