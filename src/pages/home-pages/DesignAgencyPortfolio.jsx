import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/common/seo/Seo";
import Feature from "../../components/design-agency-portfolio/Feature";
import Hero from "../../components/design-agency-portfolio/Hero";
import Portfolio from "../../components/design-agency-portfolio/Portfolio";
import Footer from "../../components/designer-portfolio/Footer";
import Header from "../../components/designer-portfolio/header/Header";
import Blog from "../../components/service-provider/Blog";

const DesignAgencyPortfolio = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Design Agency Portfolio" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
        heme Main Menu
      ============================================== 
      --> */}
      <Header />
      {/* End Header */}

      {/* <!-- 
        =============================================
            Theme Hero Banner
        ============================================== 
        --> */}
      <div className="hero-banner-fourteen box-layout mt-225 lg-mt-200 md-mt-150">
        <Hero />
        {/* <!-- /.banner-intro --> */}
      </div>
      {/* <!-- /.hero-banner-fourteen --> */}

      {/* <!--
        =====================================================
        Portfolio Gallery Four
        =====================================================
        --> */}
      <div className="portfolio-gallery-four pt-200 lg-pt-100">
        <div className="container">
          <div className="wrapper">
            <div id="isotop-gallery-wrapper">
              <Portfolio />
            </div>
            {/* <!-- /#isotop-gallery-wrapper --> */}

            <div className="load-more-item1 text-center mt-80 lg-mt-50">
              <a href="#" className="tran3s">
                <i className="bi bi-arrow-down"></i>
              </a>
              <span className="pt-10">Load More</span>
            </div>
            {/* <!-- /.load-more-item1 --> */}
          </div>
          {/* <!-- /.wrapper --> */}
        </div>
      </div>
      {/* <!-- /.portfolio-gallery-four --> */}

      {/* <!-- 
        =============================================
        Vcamp Feature Section Sixteen
        ============================================== 
        --> */}
      <div className="vcamp-feature-section-sixteen mt-100 lg-mt-80">
        <div className="container">
          <div className="border-top border-bottom pt-80 pb-50 lg-pt-60 lg-pb-20">
            <div className="row">
              <div className="col-xl-3">
                <div className="service-title lg-mb-50">WHAT WE DO</div>
              </div>
              {/* End .col */}
              <Feature />
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>
      {/* <!-- /.vcamp-feature-section-sixteen --> */}

      {/* <!--
        =====================================================
        Blog Section One
        =====================================================
        --> */}
      <div className="blog-section-one mt-140 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-12 m-auto">
              <div className="row align-items-center">
                <div className="col-xl-5 col-sm-6">
                  <div className="title-style-five">
                    <div className="upper-title">Latest News</div>
                    <h2 className="title">Our Blog</h2>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-xl-7 col-sm-6 text-sm-end text-start">
                  <Link to="/blog-v2" className="theme-btn-three xs-mt-30">
                    Check our all news <i className="fas fa-angle-right"></i>
                  </Link>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="mt-100 lg-mt-60">
                <div className="row gx-xxl-5">
                  <Blog />
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* <!-- /.blog-section-one --> */}

      {/* <!--
        =====================================================
        Vcamp Fancy Banner Twelve
        =====================================================
        --> */}
      <div className="fancy-banner-twelve position-relative pt-160 pb-50 mb-65 md-mb-20">
        <div className="container">
          <button
            className="contact-btn tran3s"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            <img
              src={require("../../assets/images/icon/icon_118.svg").default}
              alt=""
              className="m-auto"
            />
          </button>
        </div>
        {/* End .container */}

        <div className="floating-text font-recoleta">
          <span>
            Contact Us. Contact Us . Contact Us. Contact Us. Contact Us .
            Contact Us.
          </span>
        </div>
      </div>
      {/* <!-- /.fancy-banner-twelve --> */}

      {/* <!--
        =====================================================
            Footer
        =====================================================
        --> */}
      <div className="vcamp-footer-six">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* <!-- /.vcamp-footer-six --> */}
    </div>
    // {/* End .main-page-wrapper */}
  );
};

export default DesignAgencyPortfolio;
