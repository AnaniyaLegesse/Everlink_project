import React from "react";
import "../../css/Bootstrap.css"
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import { Link } from "react-router-dom";


const Nav = ({ handleInputChange, query }) => {
  return (
    <>
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search."
        />
      </div>
      <div className="profile-container">
        
      <Link to="/login" className="btns">login</Link>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
       
      </div>
    </nav>
    </>



    
  );
};

export default Nav;
