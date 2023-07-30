import React from "react";
import "./Category.css";
import Input from "../../components/Input";

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
          value="sneakers"
          title="Children"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Teens"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Mother"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Father"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
