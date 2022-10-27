import React from "react";

const Pagination = () => {
  return (
    <ul className="d-flex align-items-center style-none">
      <li className="active">
        <button type="button">1</button>
      </li>
      <li>
        <button type="button">2</button>
      </li>
      <li>
        <button type="button">3</button>
      </li>
      <li>
        <button type="button">4</button>
      </li>
      <li>...</li>
      <li>
        <button type="button">Last</button>
      </li>
      <li className="arrow">
        <button type="button">
          <i className="bi bi-arrow-right"></i>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
