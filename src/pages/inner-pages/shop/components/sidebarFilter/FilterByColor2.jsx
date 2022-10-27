import React from "react";

const FilterByColor2 = () => {
  const prodcutColor = [
    { id: 1, value: "color01", bg: "#9CD2FF" },
    { id: 2, value: "color02", bg: "#FF9153" },
    { id: 3, value: "color03", bg: "#5FF2BE" },
    { id: 4, value: "color04", bg: "#9A82FF" },
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

export default FilterByColor2;
