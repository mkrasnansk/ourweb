import React from "react";
import CopyrightSocial from "../../../../components/common/footer/CopyrightSocial";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Seo from "../../../../components/common/seo/Seo";
import Header from "../../../../components/shop-standard/Header";
import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/Pagination";
import ProductFilteringV1 from "../components/ProductFilteringV1";
import ProductV3 from "../components/ProductV3";

const GridLayoutFullWidth = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Grid Layout With Sidebar" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Sidebar Nav
      ============================================== 
        --> */}
      <Sidebar />

      {/* <!--
        =============================================
        Theme Main Menu
        ==============================================
        --> */}
      <Header />
      {/* End theme header */}

      {/* <!-- 
        =============================================
        Inside Page Banner
        ============================================== 
        --> */}
      <div className="inside-hero-nine">
        <div className="container">
          <div className="main-wrapper text-center border-bottom">
            <h2 className="page-title font-recoleta">Shop</h2>
            <p>Simple and beautiful way to sell products</p>
          </div>
        </div>
        {/* End hero title */}

        <div className="breadcrumb-area">
          <div className="box-layout">
            <div className="d-flex align-items-center justify-content-between">
              <nav className="breadcrumb-style-one mt-20">
                <Breadcrumb />
              </nav>
              {/* End .breadcrumb-style-one */}

              <div className="share-dropdown mt-20">
                <button
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Share
                </button>
                {/* End .dropdown-toggle */}

                <div className="dropdown-menu dropdown-menu-end">
                  <ul className="d-flex justify-content-between social-icon style-none">
                    <CopyrightSocial />
                  </ul>
                </div>
              </div>
              {/* End .share-dropdown */}
            </div>
          </div>
          {/* End .breadcrumb */}
        </div>
        {/* <!-- /.breadcrumb-area --> */}
      </div>
      {/* <!-- /.inside-hero-nine --> */}

      {/* <!-- 
        =============================================
            Product Section Four
        ============================================== 
        --> */}
      <div className="product-section-six ">
        <div className="box-layout">
          <div className="shop-page-header d-lg-flex align-items-center justify-content-between">
            <ProductFilteringV1 />
          </div>
          {/* <!-- /.shop-page-header --> */}

          <div className="products-wrapper mt-60 lg-mt-40">
            <div className="row gx-xl-5">
              <ProductV3 />
            </div>
            <div className="page-pagination-one pt-45 lg-pt-30">
              <Pagination className="justify-content-center" />
            </div>
          </div>
          {/* <!-- /.products-wrapper --> */}
        </div>
      </div>
      {/* <!-- /.product-section-four --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default GridLayoutFullWidth;
