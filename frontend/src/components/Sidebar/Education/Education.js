import React from "react";
import "./Education.css";
import Input from "../../Input";

const Education = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title Education-title">Education</h2>
        <div>
        <Input
          handleChange={handleChange}
          value="Primary"
          title="Primary"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="Secondary"
          title="Secondary"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="Deploma"
          title="Deploma"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="Degree"
          title="Degree"
          name="test1"
        />
          <Input
            handleChange={handleChange}
            value="Higher"
            title="Higher"
            name="test1"
          />
         
          
         </div>
      </div>
    </>
  );
};

export default Education;
