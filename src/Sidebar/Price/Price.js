import React from "react";
import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Expirance</h2>

        <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="0-years"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="1-year"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="2-5 years"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over 5 years"
          name="test2"
        />
        
        </div>
      </div>
    </>
  );
};

export default Price;
