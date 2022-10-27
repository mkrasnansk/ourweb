import React from "react";
import screen01 from "../../assets/images/assets/screen_01.jpg";
import footerImage from "../../assets/images/assets/ils_03.png";
import { Link } from "react-router-dom";
import CounterUp from "../../components/business/CounterUp";
import FeatureSectionOne from "../../components/business/FeatureSectionOne";
import FeedbackSliderOne from "../../components/business/FeedbackSliderOne";
import Header from "../../components/business/Header";
import Hero from "../../components/business/Hero";
import TextBlockOne from "../../components/business/TextBlockOne";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import TextBlockVideo from "../../components/business/TextBlockVideo";
import FeatureSectionTwo from "../../components/business/FeatureSectionTwo";
import FeedbackSliderTwo from "../../components/business/FeedbackSliderTwo";
import Blog from "../../components/business/Blog";
import ContactMeta from "../../components/common/contact/ContactMeta";
import FromStyleOne from "../../components/common/contact/FromStyleOne";
import Address from "../../components/business/Address";
import FooterSubscribe from "../../components/creative-agency/FooterSubscribe";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../components/common/footer/FooterMenuList";
import Seo from "../../components/common/seo/Seo";

const Business = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Business" />
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
      <div className="hero-banner-one mt-225 md-mt-140">
        <Hero />
      </div>
      {/* <!-- /.hero-banner-one --> */}

      {/* <!-- 
			=============================================
				Vcamp Feature Section One
			============================================== 
			--> */}
      <div className="vcamp-feature-section-one box-layout mt-75">
        <div className="bg-wrapper">
          <img
            src={require("../../assets/images/shape/shape_01.svg").default}
            alt="shape"
            className="shapes shape-one"
          />
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
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.vcamp-feature-section-one --> */}

      {/* <!-- 
			=============================================
				Vcamp Text Block One
			============================================== 
			--> */}
      <div className="vcamp-text-block-one mt-150 md-mt-80 position-static">
        <div className="container">
          <TextBlockOne />
        </div>
        {/* End TextBlockOne */}
        <div className="position-relative">
          <img
            src={require("../../assets/images/shape/shape_05.svg").default}
            alt="shape"
            className="shapes shape-two"
          />
        </div>
      </div>
      {/* <!-- /.vcamp-text-block-one --> */}

      {/* <!--
			=====================================================
				Counter Section One
			=====================================================
			--> */}
      <div className="counter-section-one mt-170 md-mt-120">
        <div className="inner-container">
          <div className="row">
            <CounterUp />
          </div>
        </div>
      </div>
      {/* End .counter-section-one */}

      {/* <!--
			=====================================================
				Feedback Slider One
			=====================================================
			--> */}
      <div className="feedback-section-one box-layout mt-140 lg-mt-80">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 col-md-9" data-aos="fade-right">
                <div className="inner-content position-relative">
                  <div className="icon d-flex align-items-center justify-content-center mb-20">
                    <img
                      src={
                        require("../../assets/images/icon/icon_11.svg").default
                      }
                      alt="icon"
                    />
                  </div>
                  <div className="feedback_slider_one slick-long-arrow">
                    <FeedbackSliderOne />
                  </div>
                  {/* <!-- /.feedback_slider_one --> */}
                </div>
                {/* <!-- /.inner-content --> */}
              </div>
            </div>
          </div>
          {/* <!-- /.container --> */}
          <img
            src={screen01}
            alt="screen"
            className="shapes screen-one"
            data-aos="fade-left"
          />
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.feedback-section-one --> */}

      {/* <!-- 
			=============================================
				Vcamp Text Block One
			============================================== 
			--> */}
      <div className="vcamp-text-block-one mt-200 lg-mt-120 position-static">
        <div className="container">
          <TextBlockVideo />
        </div>
      </div>
      {/* <!-- /.vcamp-text-block-one --> */}

      {/* <!-- 
			=============================================
				Vcamp Feature Section Two
			============================================== 
			--> */}
      <div className="vcamp-feature-section-two mt-130 md-mt-110">
        <div className="container">
          <div className="row gx-5">
            <div className="col-xxl-11 m-auto">
              <div className="row gx-5">
                <FeatureSectionTwo />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-feature-section-two --> */}

      {/* <!--
			=====================================================
				Feedback Slider Two
			=====================================================
			--> */}
      <div className="feedback-section-two box-layout mt-110 lg-mt-50">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-7 col-md-6">
                <div className="title-style-one text-center text-md-start">
                  <h2 className="title">
                    What’s our <span>client</span> say about us.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.container --> */}

          <div className="feedback_slider_two slick-rounded-arrow arrow-top-right">
            <FeedbackSliderTwo />
          </div>
          {/* <!-- /.feedback_slider_two --> */}
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.feedback-section-two --> */}

      {/* <!--
			=====================================================
				Blog Section One
			=====================================================
			--> */}
      <div className="blog-section-one mt-130 lg-mt-40">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-4 d-flex order-lg-0">
              <div className="mt-75 md-mb-40">
                <div className="title-style-one">
                  <h2 className="title">
                    Our <span>inside</span> News
                  </h2>
                </div>
                <Link to="/blog-v1" className="theme-btn-three mt-50 md-mt-30">
                  Check our all news <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
            {/* End .col */}

            <Blog />
            {/* End Blog */}
          </div>
        </div>
      </div>
      {/* <!-- /.blog-section-one --> */}

      {/* <!--
			=====================================================
			Contact Section One
			=====================================================
			--> */}
      <div className="contact-section-one box-layout mt-200 mb-80 lg-mt-130 sm-mb-40">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-5 col-lg-6 order-lg-last ms-auto"
                data-aos="fade-left"
              >
                <ContactMeta />
              </div>
              {/* End .col */}

              <div className="col-lg-6 order-lg-first" data-aos="fade-right">
                <div className="form-style-one with-border md-mt-40">
                  <FromStyleOne />
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
        </div>
        {/* <!-- /.bg-wrapper --> */}

        <div className="container mt-100 sm-mt-80">
          <div className="row">
            <Address />
          </div>
        </div>
      </div>
      {/* <!-- /.contact-section-one --> */}

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <div className="vcamp-footer-one box-layout">
        <div className="bg-wrapper">
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
                              require("../../assets/images/logo/vCamp_01.svg")
                                .default
                            }
                            alt="brand"
                            style={{ width: "127px" }}
                          />
                        </Link>
                      </div>
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
          {/* End .container */}
          <img src={footerImage} alt="shape" className="shapes illustration" />
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
    // End .main-page-wrapper
  );
};

export default Business;
