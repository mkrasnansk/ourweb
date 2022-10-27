import React from "react";

const FilterBySize = () => {
  const prodcutSize = [
    { id: 1, value: "small", size: "S" },
    { id: 2, value: "medium", size: "M" },
    { id: 3, value: "large", size: "L" },
    { id: 4, value: "extra large", size: "XL" },
  ];

  return (
    <>
      {prodcutSize.map((item) => (
        <li key={item.id}>
          <input
            type="radio"
            name="size"
            value={item.value}
            className="size-check-btn"
          />
          <label>{item.size}</label>
        </li>
      ))}
    </>
  );
};

export default FilterBySize;
