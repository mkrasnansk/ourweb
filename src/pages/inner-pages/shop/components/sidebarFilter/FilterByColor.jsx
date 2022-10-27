import React from "react";

const FilterByColor = () => {
  const prodcutColor = [
    { id: 1, value: "color01", bg: "#C3D2D2" },
    { id: 2, value: "color02", bg: "#E9DCC8" },
    { id: 3, value: "color03", bg: "#D5C9F8" },
  ];
  return (
    <>
      {prodcutColor.map((item) => (
        <li key={item.id}>
          <input
            type="radio"
            name="color"
            value={item.value}
            className="color-check-btn"
          />
          <label style={{ background: item.bg }}></label>
        </li>
      ))}
    </>
  );
};

export default FilterByColor;
