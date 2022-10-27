import React from "react";

const ProductFilteringV1 = () => {
  return (
    <>
      <p>Showing 1–6 of 10 results</p>
      {/* End item show based on filtering */}

      <ul className="shop-filter-one style-none d-md-flex align-items-center">
        <li className="me-md-3">
          <select className="form-select">
            <option value="Price">Price</option>
            <option value="Price: low to high">Price: low to high</option>
            <option value="Price: high to low">Price: high to low</option>
          </select>
        </li>
        {/* End price filtering */}

        <li className="me-md-3">
          <select className="form-select">
            <option value="Category">Category</option>
            <option value="Mens items">Mens items</option>
            <option value="Womens items">Womens items</option>
          </select>
        </li>
        {/* End Category filtering */}

        <li>
          <select className="form-select">
            <option value="Popularity">Popularity</option>
            <option value="Trending items">Trending items</option>
            <option value="Newest items">Newest items</option>
          </select>
        </li>
        {/* End popularity filtering */}
      </ul>
    </>
  );
};

export default ProductFilteringV1;
