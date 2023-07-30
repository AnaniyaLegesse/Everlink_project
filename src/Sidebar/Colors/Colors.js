import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Education</h2>

        <div>
          
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Pirmary"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Secondary"
          name="test1"
          // color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Deploma"
          name="test1"
          // color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Degree"
          name="test1"
          // color="green"
        />

        
          <Input
            handleChange={handleChange}
            value="white"
            title="Higher"
            name="test1"
          />
         
          
         </div>
      </div>
    </>
  );
};

export default Colors;
