import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import HeroSocial from "../../components/consulting-agency/HeroSocial";
import AllCollection from "../../components/shop-standard/AllCollection";
import Banner from "../../components/shop-standard/Banner";
import BestSelling from "../../components/shop-standard/BestSelling";
import Header from "../../components/shop-standard/Header";
import HeroSlider from "../../components/shop-standard/HeroSlider";
import Trending from "../../components/shop-standard/Trending";
import Blog from "../../components/consulting-agency/Blog";
import FooterMenuListTwo from "../../components/common/footer/FooterMenuListTwo";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import Seo from "../../components/common/seo/Seo";

const ShopStandard = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Shop Standard" />
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
				Theme Hero Banner
			============================================== 
			--> */}
      <div className="hero-banner-six">
        <div className="social-elemnet">
          <HeroSocial />
        </div>
        {/* End .social-elemnet */}

        <div className="scroll-bar">
          <span>Scroll</span>
        </div>
        {/* End .sroll-bar */}

        <div className="shop-hero-slider-one">
          <HeroSlider />
        </div>
        {/* <!-- /.shop-hero-slider-one --> */}
      </div>
      {/* <!-- /.hero-banner-six --> */}

      {/* <!-- 
			=============================================
				Product Section One
			============================================== 
			--> */}
      <div className="product-section-one mt-180 lg-mt-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-sm-8">
              <div className="title-style-six text-center text-sm-start xs-pb-20">
                <h2 className="title">All Collection</h2>
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* End .container */}

        <div className="box-layout mt-90 lg-mt-40">
          <div className="product_slider_one product_slider_space slick-rounded-arrow arrow-top-right exact ripple-btn is_light">
            <AllCollection />
          </div>
        </div>
        {/* <!-- /.box-layout --> */}
      </div>
      {/* <!-- /.product-section-one --> */}

      {/* <!-- 
			=============================================
				Shop New Collection Section
			============================================== 
			--> */}
      <div className="shop-new-collection-section mt-180 lg-mt-100">
        <div className="box-layout">
          <div className="row gx-xl-5">
            <Banner />
          </div>
        </div>
        {/* <!-- /.box-layout --> */}
      </div>
      {/* <!-- /.shop-new-collection-section --> */}

      {/* <!-- 
			=============================================
				Product Section Two
			============================================== 
			--> */}
      <div className="product-section-two mt-170 lg-mt-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-sm-8">
              <div className="title-style-six text-center text-sm-start xs-pb-20">
                <h2 className="title">Trending</h2>
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* End .container */}

        <div className="box-layout mt-90 lg-mt-40">
          <div className="product_slider_two product_slider_space slick-rounded-arrow arrow-top-right exact-2 ripple-btn is_light">
            <Trending />
          </div>
        </div>
        {/* <!-- /.box-layout --> */}
      </div>
      {/* <!-- /.product-section-two --> */}

      {/* <!-- 
			=============================================
				Product Section Three
			============================================== 
			--> */}
      <div className="product-section-three mt-130 pt-130 pb-150 lg-mt-100 lg-pt-80 lg-pb-70">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-sm-8">
              <div className="title-style-six text-center text-sm-start xs-pb-20">
                <h2 className="title">Best Selling</h2>
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* End .container */}

        <div className="box-layout mt-90 lg-mt-40">
          <div className="product_slider_three product_slider_space slick-rounded-arrow arrow-top-right exact-2 ripple-btn is_light">
            <BestSelling />
          </div>
        </div>
        {/* <!-- /.box-layout --> */}
      </div>
      {/* <!-- /.product-section-three --> */}

      {/* <!--
			=====================================================
				Blog Section One
			=====================================================
			--> */}
      <div className="blog-section-one mt-150 lg-mt-100">
        <div className="container">
          <div className="border-bottom pb-150 lg-pb-70">
            <div className="row">
              <div className="col-xxl-12">
                <div className="row align-items-center">
                  <div className="col-sm-6">
                    <div className="title-style-six xs-pb-20">
                      <h2 className="title">Our Blog</h2>
                    </div>
                  </div>
                  {/* End .col */}
                  <div className="col-sm-6 text-sm-end text-start">
                    <Link to="blog-v2" className="theme-btn-three">
                      Check our all news <i className="fas fa-angle-right"></i>
                    </Link>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}

                <div className="mt-100 lg-mt-60">
                  <div className="row gx-xl-5">
                    <Blog className="lg-mt-40" />
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .col */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.blog-section-one --> */}

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
                      require("../../assets/images/logo/vCamp_01.svg").default
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

export default ShopStandard;
