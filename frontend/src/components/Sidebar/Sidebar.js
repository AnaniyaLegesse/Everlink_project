import React from "react";
import Category from "./Category/Category";
import Expriance from "./Expirance/Expirance"
import Education from "./Education/Education"
import "../../css/Bootstrap.css"
import "../../css/responsive.css"
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
        <Link to="/" className="navbar-brand"><span>CastSite</span> </Link>
        </div>
        <Category handleChange={handleChange} />
        <Expriance handleChange={handleChange} />
        <Education handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
