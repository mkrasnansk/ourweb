import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/shop-standard/Header";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import CopyrightSocial from "../../../../components/common/footer/CopyrightSocial";
import Breadcrumb from "../components/Breadcrumb";
import RelatedProducts from "./components/RelatedProducts";
import FeatureSection from "./components/FeatureSection";
import ProductDescriptions from "./components/product-descriptions-tab/ProductDescriptions";
import SingleProduct from "./components/single-product/SingleProduct";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../../redux/features/product-slice";
import Seo from "../../../../components/common/seo/Seo";

const ProductDetails = () => {
  const product = useSelector(selectProducts)[0];
  return (
    <div className="main-page-wrapper">
      <Seo title="Product Details" />
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

      {/* <!-- 
        =============================================
        Inside Page Banner
        ============================================== 
        --> */}
      <div className="inside-hero-nine">
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
            Product Details One
        ============================================== 
        --> */}
      <div className="product-details-one mt-40">
        <div className="container">
          <SingleProduct product={product} />
          {/* End main product gallery view */}

          <div className="product-review-tab mt-150 lg-mt-100">
            <ProductDescriptions />
          </div>
          {/* <!-- /.product-review-tab --> */}

          <FeatureSection />
          {/* <!-- /.vcamp-feature-section-ten --> */}
        </div>
      </div>
      {/* <!-- /.product-details-one --> */}

      {/* <!-- 
        =============================================
        Product Section Two
        ============================================== 
        --> */}
      <div className="product-section-two mt-150 lg-mt-100">
        <div className="container">
          <div className="border-bottom pb-150 lg-pb-60">
            <div className="row align-items-center justify-content-between pb-50">
              <div className="col-md-6 col-sm-8">
                <div className="title-style-ten text-center text-sm-start xs-pb-30">
                  <h2 className="title">Releted Products</h2>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}

            <div className="product_slider_two product_slider_space slick-rounded-arrow arrow-top-right exact-3 ripple-btn is_light">
              <RelatedProducts />
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>
      {/* <!-- /.product-section-two --> */}

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

            <FooterMenuListTwo />
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

export default ProductDetails;
