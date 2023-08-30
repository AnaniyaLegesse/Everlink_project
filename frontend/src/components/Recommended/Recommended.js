import React from "react";
import Button from "../Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Casts" />
          <Button onClickHandler={handleClick} value="Actor" title="Actors" />
          <Button onClickHandler={handleClick} value="Writer" title="Writers" />
          <Button onClickHandler={handleClick} value="Camera" title="Camera-Crew" />
          <Button onClickHandler={handleClick} value="Producer" title="producers" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
