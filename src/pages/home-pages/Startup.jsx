import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/assets/ils_04.png";
import Header from "../../components/business/Header";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import TextBlockTitle from "../../components/service-provider/TextBlockTitle";
import FeatureSection from "../../components/creative-agency/FeatureSection";
import Portfolio from "../../components/startup/Portfolio";
import Hero from "../../components/startup/Hero";
import AccordionOne from "../../components/service-provider/AccordionOne";
import Popup from "../../components/common/video-popup/Popup";
import Counter from "../../components/service-provider/Counter";
import FeedbackSliderFour from "../../components/creative-agency/FeedbackSliderFour";
import Blog from "../../components/startup/Blog";
import FancyBanner from "../../components/startup/FancyBanner";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuListTwo from "../../components/common/footer/FooterMenuListTwo";
import Seo from "../../components/common/seo/Seo";

const Startup = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Startup" />
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
      <div className="hero-banner-five mt-225 md-mt-150">
        <div className="container">
          <Hero />
        </div>
        {/* End .container */}

        <div className="illustration-container">
          <img src={img1} alt="illustration" />
        </div>
        {/* <!-- /.illustration-container --> */}
      </div>
      {/* <!-- /.hero-banner-five --> */}

      {/* <!-- 
			=============================================
				Vcamp Feature Section Three
			============================================== 
			--> */}
      <div className="vcamp-feature-section-three mt-200 lg-mt-120">
        <div className="container">
          <div className="row align-items-center mb-50 md-mb-20">
            <TextBlockTitle />
          </div>
          <div className="row">
            <FeatureSection />
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-feature-section-three --> */}

      {/* <!--
			=====================================================
				Case Study Section Two
			=====================================================
			--> */}
      <div className="case-study-two mt-200 lg-mt-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-6">
              <div className="title-style-five text-center text-md-start md-pb-30">
                <h2 className="title">Our selected work.</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 d-flex justify-content-center justify-content-md-end">
              <Link to="/portfolio-v1" className="theme-btn-six ripple-btn">
                See all Portfolio
              </Link>
            </div>
          </div>

          <div className="row gx-xl-5 mt-20">
            <Portfolio />
          </div>
        </div>
      </div>
      {/* <!-- /.case-study-two --> */}

      {/* <!--
			=====================================================
				Vcamp Text Block Five
			=====================================================
			--> */}
      <div className="vcamp-text-block-five mt-170 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-lg-6">
              <div className="text-wrapper">
                <div className="title-style-five">
                  <div className="upper-title">Why choose us</div>
                  <h2 className="title">
                    Create <br /> visual strategy lorem.
                  </h2>
                </div>
                <p className="text-lg">Lorem ipsum dolor sit amet cons qui</p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-lg-6 ms-auto">
              <div
                className="accordion accordion-style-one md-mt-30"
                id="accordionOne"
              >
                <AccordionOne />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-text-block-five --> */}

      {/* <!--
			=====================================================
				Vcamp Fancy Banner Two
			=====================================================
			--> */}
      <div className="fancy-banner-two mt-200 lg-mt-110">
        <div className="container p0 h-100">
          <div className="inner-content h-100 position-relative d-flex align-items-center justify-content-center">
            <Popup />
            <div className="counter-section-two">
              <div className="counter-container">
                <div className="row g-0">
                  <Counter />
                </div>
              </div>
              {/* <!-- /.counter-container --> */}
            </div>
            {/* <!-- /.counter-section-two --> */}
          </div>
          {/* <!-- /.inner-content --> */}
        </div>
      </div>
      {/* <!-- /.fancy-banner-two --> */}

      {/* <!--
			=====================================================
				Feedback Slider Eight
			=====================================================
			--> */}
      <div className="feedback-section-eight mt-225 lg-mt-120">
        <div className="container">
          <div className="feedback_slider_four">
            <FeedbackSliderFour />
          </div>
          {/* <!-- /.feedback_slider_four --> */}
        </div>
      </div>
      {/* <!-- /.feedback-section-four --> */}

      {/* <!--
			=====================================================
				Blog Section Three
			=====================================================
			--> */}
      <div className="blog-section-three mt-180 lg-mt-100">
        <div className="container">
          <div className="row align-items-center mb-70 md-mb-20">
            <div className="col-sm-6">
              <div className="title-style-five">
                <div className="upper-title">News</div>
                <h2 className="title">Our Blog.</h2>
              </div>
            </div>
            <div className="col-sm-6 d-sm-flex justify-content-end">
              <Link to="/blog-v2" className="theme-btn-six ripple-btn xs-mt-30">
                Go to Blog
              </Link>
            </div>
          </div>
          {/* End .row */}
          <div className="row gx-xl-5">
            <Blog />
          </div>
        </div>
      </div>
      {/* <!-- /.blog-section-three --> */}

      {/* <!--
			=====================================================
				Vcamp Fancy Banner Three
			=====================================================
			--> */}
      <div className="fancy-banner-three">
        <div className="inner-content position-relative">
          <div className="container">
            <div className="row align-items-center">
              <FancyBanner />
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
      </div>
      {/* <!-- /.fancy-banner-three --> */}

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <footer className="vcamp-footer-two pt-150 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      require("../../assets/images/logo/vCamp_01.svg").default
                    }
                    alt=""
                  />
                </Link>
              </div>
            </div>
            {/* End .col */}

            <FooterMenuListTwo />
          </div>
          {/* End .row */}
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

export default Startup;
