import React from "react";

const TextBlockList = () => {
  const list = [
    "Egypt,",
    "Nigeria,",
    "DR Congo,",
    "Pakistan,",
    "South Africa,",
    "Poland,",
    "DR Congo,",
    "Pakistan,",
    "Turkey,",
    "South Africa,",
  ];
  return (
    <>
      {list.map((val, i) => (
        <li key={i}>{val}</li>
      ))}
    </>
  );
};

export default TextBlockList;
