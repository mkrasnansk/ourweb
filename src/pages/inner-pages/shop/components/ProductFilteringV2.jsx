import React from "react";

const ProductFilteringV2 = () => {
  return (
    <>
      <p>Showing 1–6 of 10 results</p>
      {/* End item show based on filtering */}

      <ul className="shop-filter-one style-none d-md-flex align-items-center">
        <li>
          <select className="form-select">
            <option value="Price">Price</option>
            <option value="Price: low to high">Price: low to high</option>
            <option value="Price: high to low">Price: high to low</option>
          </select>
        </li>
        {/* End price filtering */}
      </ul>
    </>
  );
};

export default ProductFilteringV2;
