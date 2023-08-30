import React from "react";
import "./Category.css";
import Input from "../../Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Character</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Children"
          title="Children"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Male"
          title="Male"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Female"
          title="Female"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Mother"
          title="Mother"
          name="test"
        />
         <Input
          handleChange={handleChange}
          value="Father"
          title="Father"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
