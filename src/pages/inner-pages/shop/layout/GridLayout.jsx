import React from "react";
import { Link } from "react-router-dom";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import CopyrightSocial from "../../../../components/common/footer/CopyrightSocial";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Banner from "../../../../components/shop-standard/Banner";
import Header from "../../../../components/shop-standard/Header";
import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/Pagination";
import ProductV1 from "../components/ProductV1";
import ProductFilteringV1 from "../components/ProductFilteringV1";
import Seo from "../../../../components/common/seo/Seo";

const GridLayout = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Grid Layout" />
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
          <div className="container">
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
      <div className="product-section-four mt-150 lg-mt-90">
        <div className="container">
          <div className="shop-page-header d-lg-flex align-items-center justify-content-between">
            <ProductFilteringV1 />
          </div>
          {/* <!-- /.shop-page-header --> */}

          <div className="products-wrapper mt-60 lg-mt-40">
            <div className="row gx-xl-5">
              <ProductV1 />
            </div>
            <div className="page-pagination-one pt-45 lg-pt-30">
              <Pagination className="justify-content-center" />
            </div>
          </div>
          {/* <!-- /.products-wrapper --> */}
        </div>
      </div>
      {/* <!-- /.product-section-four --> */}

      {/* <!-- 
        =============================================
        Shop New Collection Section
        ============================================== 
        --> */}
      <div className="shop-new-collection-section mt-180 mb-20 lg-mt-100">
        <div className="box-layout">
          <div className="row gx-xl-5">
            <Banner />
          </div>
        </div>
        {/* <!-- /.box-layout --> */}
      </div>
      {/* <!-- /.shop-new-collection-section --> */}

      {/* <!--
        =====================================================
        Footer
        =====================================================
        --> */}
      <footer className="vcamp-footer-two pt-130 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      require("../../../../assets/images/logo/vCamp_01.svg")
                        .default
                    }
                    alt="brand"
                  />
                </Link>
              </div>
            </div>
            {/* End .col */}

            <FooterMenuListTwo className="dark-btn" />
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="bottom-footer">
            <CopyrightFooter />
          </div>
        </div>
        {/* End .container */}
      </footer>
      {/* <!-- /.vcamp-footer-two --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default GridLayout;
