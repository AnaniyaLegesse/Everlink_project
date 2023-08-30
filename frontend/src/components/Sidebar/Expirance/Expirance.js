import React from "react";
import Input from "../../Input";
import "./Expirance.css";

const Expirance = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title expirance-title">Expirance</h2>

        <div>
        <Input
          handleChange={handleChange}
          value={0}
          title="0-years"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1}
          title="1-year"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={5}
          title="2-5 years"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={30}
          title="Over 5 years"
          name="test2"
        />
        </div>
      </div>
    </>
  );
};

export default Expirance;
