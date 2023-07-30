import React from "react";
import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Casts" />
          <Button onClickHandler={handleClick} value="Nike" title="Actors" />
          <Button onClickHandler={handleClick} value="Adidas" title="Writers" />
          <Button onClickHandler={handleClick} value="Puma" title="Camera-Crew" />
          <Button onClickHandler={handleClick} value="Vans" title="producers" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
