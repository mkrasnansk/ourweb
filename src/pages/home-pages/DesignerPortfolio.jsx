import React from "react";
import CounterUp from "../../components/designer-portfolio/CounetrUp";
import Header from "../../components/designer-portfolio/header/Header";
import Hero from "../../components/designer-portfolio/Hero";
import PortfolioMasonry from "../../components/designer-portfolio/PortfolioMasonry";
import TestimonialGaller from "../../components/designer-portfolio/TestimonialGaller";
import Social from "../../components/photographer-portfolio/footer/Social";
import Testimonial from "../../components/designer-portfolio/Testimonial";
import ParnerSlider from "../../components/designer-portfolio/ParnerSlider";
import FancyBanner from "../../components/designer-portfolio/FancyBanner";
import Footer from "../../components/designer-portfolio/Footer";
import Seo from "../../components/common/seo/Seo";

const DesignerPortfolio = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Designer Portfolio" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
        Theme Main Menu
      ============================================== 
      --> */}
      <Header />
      {/* End Header */}

      {/* <!-- 
        =============================================
        Theme Hero Banner
        ============================================== 
        --> */}
      <div className="hero-banner-twelve box-layout mt-150 sm-mt-100">
        <div className="banner-intro position-relative">
          <div className="scroll-bar"></div>
          <div className="social-elemnet">
            <ul className="style-none d-flex align-items-center">
              <Social />
            </ul>
          </div>
          {/* End .social-elemnet */}

          <div className="container">
            <div className="row align-items-end justify-content-between">
              <Hero />
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* <!-- /.banner-intro --> */}
      </div>
      {/* <!-- /.hero-banner-twelve --> */}

      {/* <!--
        =====================================================
            Counter Section One
        =====================================================
        --> */}
      <div className="counter-section-one mt-170 md-mt-80">
        <div className="container border-bottom pb-30">
          <div className="row">
            <CounterUp />
          </div>
        </div>
      </div>
      {/* End .counter-section */}

      {/* <!--
			=====================================================
				Portfolio Gallery Three
			=====================================================
			--> */}
      <div className="portfolio-gallery-three pt-140 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-8">
              <div className="title-style-twelve text-center text-sm-start xs-mb-40">
                <h2 className="title">
                  The Work I did for <span>client</span>
                </h2>
              </div>
              {/* <!-- /.title-style-twelve --> */}
            </div>
            {/* End .col */}
            <div className="col-md-5 col-sm-4 d-flex justify-content-center justify-content-sm-end">
              <button
                type="button"
                className="theme-btn-fifteen d-flex align-items-center justify-content-center"
              >
                <img
                  src={require("../../assets/images/icon/icon_106.svg").default}
                  alt=""
                />
              </button>
            </div>
          </div>
          {/* End .row */}

          <div className="border-bottom pb-80 lg-pb-30">
            <PortfolioMasonry />
          </div>
        </div>
      </div>
      {/* <!-- /.portfolio-gallery-three --> */}

      {/* <!-- 
			=============================================
				Feedback Section Thirteen
			============================================== 
			--> */}
      <div className="feedback-section-thirteen">
        <div className="container">
          <div className="icon d-flex align-items-center justify-content-center mb-40 lg-mb-20">
            <img
              src={require("../../assets/images/icon/icon_107.svg").default}
              alt=""
            />
          </div>
          <div className="row">
            <div className="col-xxl-9 col-lg-8 m-auto">
              <div className="feedback_slider_nine">
                <Testimonial />
              </div>
              {/* <!-- /.feedback_slider_nine --> */}
            </div>
          </div>
        </div>
        {/* <!-- /.container --> */}

        <TestimonialGaller />
      </div>
      {/* <!-- /.feedback-section-thirteen --> */}

      {/* <!--
			=====================================================
				Partner Slider
			=====================================================
			--> */}
      <div className="partner-slider-one mt-150 md-mt-80">
        <div className="container">
          <div className="partnerSliderOne">
            <ParnerSlider />
          </div>
        </div>
      </div>
      {/* <!-- /.partner-slider-one --> */}

      {/* <!--
			=====================================================
				Vcamp Fancy Banner Nine
			=====================================================
			--> */}
      <div className="fancy-banner-nine fancy-designer mt-150 lg-mt-100">
        <div className="container">
          <FancyBanner />
        </div>
      </div>
      {/* <!-- /.fancy-banner-nine --> */}

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
    // {/* // End .main-page-wrapper */}
  );
};

export default DesignerPortfolio;
