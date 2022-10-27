import React from "react";
import FilterByCategorie from "./FilterByCategorie";
import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import FilterBySize from "./FilterBySize";
import SearchBox from "./SearchBox";

const ShopSidebar = () => {
  return (
    <div className="shop-filter-sidebar mt-110 md-mt-10 md-mb-70">
      <div className="search-area">
        <SearchBox />
      </div>
      {/* <!-- /.search-area --> */}

      <div className="accordion shop-filter-accordion">
        <div className="accordion-item">
          <div className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              Categories
            </button>
          </div>
          {/* End categorie header */}

          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <ul className="style-none category-filter">
                <FilterByCategorie />
              </ul>
              {/* <!-- /.category-filter --> */}
            </div>
          </div>
        </div>
        {/* End Categories Filter */}

        <div className="accordion-item">
          <div className="accordion-header">
            <button
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              Filter by Price
            </button>
          </div>
          {/* End categorie header */}

          <div id="collapseTwo" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <ul className="style-none price-filter-input">
                <FilterByPrice />
              </ul>
            </div>
          </div>
        </div>
        {/* End Filter by Price */}

        <div className="accordion-item">
          <div className="accordion-header">
            <button
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              Color
            </button>
          </div>
          {/* End categorie header */}

          <div id="collapseThree" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <ul className="style-none d-flex align-items-center color-custome-input">
                <FilterByColor />
              </ul>
            </div>
          </div>
        </div>
        {/* End Filter by Color */}

        <div className="accordion-item">
          <div className="accordion-header">
            <button
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
            >
              Size
            </button>
          </div>
          {/* End categorie header */}

          <div id="collapseFour" className="accordion-collapse collapse show">
            <div className="accordion-body">
              <ul className="style-none d-flex align-items-center size-custome-input">
                <FilterBySize />
              </ul>
            </div>
          </div>
        </div>
        {/* End  Filter by Size */}
      </div>
      {/* <!-- /.shop-filter-accordion --> */}
    </div>
  );
};

export default ShopSidebar;
