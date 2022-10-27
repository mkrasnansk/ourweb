import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/agency-minimal/Header";
import HeroBanner from "../../components/agency-minimal/HeroBanner";
import TextBlockTwo from "../../components/agency-minimal/TextBlockTwo";
import VideoBanner from "../../components/agency-minimal/VideoBanner";
import FeatureSectionOne from "../../components/business/FeatureSectionOne";
import Partners from "../../components/business/Partners";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import CounterUp from "../../components/creative-agency/CounterUp";
import FeedbackSlider from "../../components/agency-minimal/FeedbackSlider";
import FeedbackSliderTwo from "../../components/agency-minimal/FeedbackSliderTwo";
import Blog from "../../components/agency-minimal/Blog";
import AddressBlock from "../../components/creative-agency/AddressBlock";
import FromStyleOne from "../../components/common/contact/FromStyleOne";
import ContactMeta from "../../components/common/contact/ContactMeta";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../components/creative-agency/FooterSubscribe";
import Seo from "../../components/common/seo/Seo";

const AgencyMinimal = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Agency Minimal" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Sidebar Nav
      ============================================== 
        --> */}
      <Sidebar className="dark-style" />

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
      <div className="hero-banner-three">
        <div className="container">
          <HeroBanner />
        </div>

        <div className="slider-wrapper">
          <div className="video-wrapper">
            <VideoBanner />
          </div>
          {/* <!-- /.video-wrapper --> */}
        </div>
      </div>
      {/* <!-- /.hero-banner-three --> */}

      {/* <!-- 
        =============================================
            Partner Slider One
        ============================================== 
        --> */}
      <div className="partner-slider-one-border mt-300 pt-110 xl-pt-30 md-mt-110">
        <div className="partner-slider-one">
          <div className="container">
            <p className="text-center theme-mb-0">
              Over <span>32K+</span> software businesses growing with vCamp.
            </p>
            <Partners />
          </div>
        </div>
      </div>
      {/* <!-- /.partner-slider-one --> */}

      {/* <!-- 
        =============================================
        Vcamp Feature Section One
        ============================================== 
        --> */}
      <div className="vcamp-feature-section-one mt-200 lg-mt-110">
        <div className="clearfix">
          <div className="container">
            <div className="row">
              <div className="col-xxl-4 col-lg-5" data-aos="fade-right">
                <div className="title-style-one">
                  <div className="upper-title">What we do</div>
                  <h2 className="title">
                    Our <span>included</span> service.
                  </h2>
                </div>
                <p className="meta-info-text text-lg">
                  We helping client to create with our talented expert.
                </p>
                <Link to="/service-v1" className="theme-btn-one ripple-btn">
                  Discover More{" "}
                  <img
                    src={
                      require("../../assets/images/icon/icon_03.svg").default
                    }
                    alt="icon"
                  />
                </Link>
              </div>
              {/* End .col */}

              <div className="col-lg-7 ms-auto" data-aos="fade-left">
                <div className="row">
                  <FeatureSectionOne />
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.vcamp-feature-section-one --> */}

      {/* <!-- 
        =============================================
        Vcamp Text Block Two
        ============================================== 
        --> */}
      <div className="vcamp-text-block-two mt-120 lg-mt-20 md-mt-100">
        <div className="container">
          <TextBlockTwo />
        </div>
        {/* End TextBlockTwo */}
        <img
          src={require("../../assets/images/shape/shape_17.svg").default}
          alt="shape"
          className="shapes shape-two"
        />
      </div>
      {/* <!-- /.vcamp-text-block-two --> */}

      {/* <!--
        =====================================================
        Counter Section One
        =====================================================
        --> */}
      <div className="counter-section-one border-bottom pb-50 mt-120 sm-pb-20">
        <div className="inner-container">
          <div className="row justify-content-center">
            <CounterUp />
          </div>
        </div>
      </div>
      {/* counter-section-one */}

      {/* <!--
        =====================================================
            Feedback Slider Five
        =====================================================
        --> */}
      <div className="feedback-section-five mt-150 pb-30 lg-mt-110">
        <div className="inner-content">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-8 col-sm-10 m-auto">
                <div className="title-style-two text-center">
                  <h3 className="title">
                    Let’s check our <span>client</span>case study
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* <!--  /.container --> */}

          <div className="slider-wrapper">
            <div className="feedback_slider_three">
              <FeedbackSlider />
            </div>
            {/* <!-- /.feedback_slider_three --> */}
          </div>
          {/* <!-- /.slider-wrapper --> */}

          <div className="text-center mt-40 lg-mt-20">
            <Link to="/portfolio-v2" className="theme-btn-four ripple-btn">
              View all case study
            </Link>
          </div>
        </div>
        {/* <!-- /.inner-content --> */}
      </div>
      {/* <!-- /.feedback-section-five --> */}

      {/* <!--
        =====================================================
        Feedback Slider Six
        =====================================================
        --> */}
      <div className="feedback-section-six mt-250 lg-mt-100">
        <img
          src={require("../../assets/images/icon/icon_38.svg").default}
          alt="icon"
          className="shapes quote-icon"
        />
        <div className="container">
          <div className="title-style-two text-center">
            <h3 className="title">
              Client <span>Feedback</span>
            </h3>
          </div>
        </div>

        <div className="slider-wrapper">
          <div className="feedback_slider_five slick-long-arrow arrow-bottom-center mb-80">
            <FeedbackSliderTwo />
          </div>
          {/* <!-- /.feedback_slider_five --> */}
        </div>
        {/* <!-- /.slider-wrapper --> */}
        <img
          src={require("../../assets/images/shape/shape_18.svg").default}
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src={require("../../assets/images/shape/shape_19.svg").default}
          alt="shape"
          className="shapes shape-two"
        />
      </div>
      {/* <!-- /.feedback-section-six --> */}

      {/* <!--
        =====================================================
        Blog Section Two
        =====================================================
        --> */}
      <div className="blog-section-two mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center mb-50 lg-mb-20">
                <div className="col-sm-6">
                  <div className="title-style-two">
                    <h3 className="title">
                      Our <span>News</span>
                    </h3>
                  </div>
                </div>
                <div className="col-sm-6 d-sm-flex justify-content-end">
                  <Link
                    to="/blog-v3"
                    className="theme-btn-one ripple-btn border0 xs-mt-20"
                  >
                    Go to Blog
                  </Link>
                </div>
              </div>
              {/* End .row */}

              <div className="row gx-xl-5">
                <Blog />
              </div>
              {/* End .row */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.blog-section-two --> */}

      {/* <!--
        =====================================================
        Address Section Two
        =====================================================
        --> */}
      <div className="address-section-two bg-color mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="inner-content">
                <img
                  src={
                    require("../../assets/images/shape/shape_20.svg").default
                  }
                  alt="shape"
                  className="shapes shape-one"
                />
                <AddressBlock />
              </div>
              {/* <!-- /.inner-content --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.address-section-two --> */}

      {/* <!--
        =====================================================
            Contact Section Three
        =====================================================
        --> */}
      <div className="contact-section-three mt-225 lg-mt-120">
        <div className="container">
          <div className="bg-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 order-lg-last ms-auto">
                <ContactMeta />
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="form-style-two md-mt-40">
                  <FromStyleOne />
                </div>
                {/* <!-- /.form-style-two --> */}
              </div>
            </div>
          </div>
          {/* <!-- /.bg-wrapper --> */}
        </div>
      </div>
      {/* <!-- /.contact-section-three --> */}

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <div className="vcamp-footer-one dark-bg image-bg">
        <div className="clearfix">
          <div className="container">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="subscribe-area">
                  <FooterSubscribe />
                </div>
                {/* <!-- /.subscribe-area --> */}

                <div className="top-footer mt-90 md-mt-70">
                  <div className="row">
                    <div className="col-lg-4 col-md-2 d-flex justify-content-between flex-column">
                      <div className="logo">
                        <Link to="/">
                          <img
                            src={
                              require("../../assets/images/logo/vCamp_02.svg")
                                .default
                            }
                            alt="brand"
                            style={{ width: "127px" }}
                          />
                        </Link>
                      </div>
                      <img
                        src={
                          require("../../assets/images/shape/shape_21.svg")
                            .default
                        }
                        alt="shape"
                        className="shape mt-15 d-none d-md-block"
                      />
                    </div>
                    {/* End .col */}

                    <FooterMenuList />
                    {/* End Footer Menu list */}
                  </div>
                </div>
                {/* <!-- /.top-footer --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.bg-wrapper --> */}

        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="bottom-footer">
                <CopyrightFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-footer-one --> */}
    </div>
    // {/* End .main-page-wrapper */}
  );
};

export default AgencyMinimal;
