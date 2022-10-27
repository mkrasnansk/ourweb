import React from "react";

const FilterByPrice = () => {
  return (
    <>
      <li>
        <input
          type="checkbox"
          name="price"
          value="lowTohigh"
          className="price-check-btn"
        />
        <label>Price (Low {">"} High)</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="price"
          value="highTolow"
          className="price-check-btn"
        />
        <label>Price (High {">"} Low)</label>
      </li>
    </>
  );
};

export default FilterByPrice;
