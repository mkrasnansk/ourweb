import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import TextBlockOne from "../../../inner-pages/pages/essentials/components/TextBlockOne";
import CounterUp from "../../../../components/business/CounterUp";
import FeatureSlider from "../../../../components/consulting-agency/FeatureSlider";
import FeedbackSliderTwo from "../../../../components/business/FeedbackSliderTwo";
import Partners from "./components/Partners";
import { Link } from "react-router-dom";
import Blog from "../../../../components/service-provider/Blog";
import FancyBanner from "../../../../components/startup/FancyBanner";
import Address from "../../../../components/business/Address";
import Seo from "../../../../components/common/seo/Seo";

const AboutUsV1 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Abut Us V1" />
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
      <div className="inside-hero-one hero-spacing">
        <div className="container">
          <h2 className="page-title font-recoleta">Inside Story</h2>
          <p>We’re empowering WordPress to do great things together</p>
        </div>
      </div>
      {/* <!-- /.inside-hero-one --> */}

      {/* <!-- 
			=============================================
				Vcamp Text Block One
			============================================== 
			--> */}
      <div className="vcamp-text-block-one mt-200 lg-mt-120 position-static">
        <div className="container">
          <TextBlockOne />
        </div>
        {/* End TextBlockOne */}
        <div className="position-relative">
          <img
            src={
              require("../../../../assets/images/shape/shape_05.svg").default
            }
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
			=============================================
				Vcamp Feature Section Five
			============================================== 
			--> */}
      <div className="vcamp-feature-section-five mt-100 lg-mt-80">
        {/* End .container */}
        <div className="arrow-none">
          <FeatureSlider />
        </div>
        {/* End .feature_slider_one */}
      </div>
      {/* <!-- /.vcamp-feature-section-five --> */}

      {/* <!--
			=====================================================
				Partner Section Three
			=====================================================
			--> */}
      <div className="partner-section-three mt-200 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-4 col-md-8">
              <div className="title-style-one">
                <h2 className="title">
                  Our best <span>partners</span> for the long run.
                </h2>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-6 col-lg-7 ms-auto">
              <p className="info-text">
                Over <span>32K+</span> software businesses growing with vCamp.
              </p>
              <div className="row">
                <Partners />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* <!-- /.partner-section-three --> */}

      {/* <!--
			=====================================================
				Feedback Slider Two
			=====================================================
			--> */}
      <div className="feedback-section-two box-layout mt-110 lg-mt-50">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-7 col-lg-6 col-md-8 m-auto">
                <div className="title-style-one text-center ">
                  <h2 className="title">
                    What’s our <span>client</span> say about us.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.container --> */}

          <div className="feedback_slider_seven arrow-none">
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
      <div className="blog-section-one mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center">
                <div className="col-xl-5 col-md-6 col-sm-7">
                  <div className="title-style-five">
                    <div className="upper-title">Latest News</div>
                    <h2 className="title">Our Blog</h2>
                  </div>
                </div>
                {/* End .col */}
                <div className="col-xl-7 col-md-6 col-sm-5 text-sm-end text-start">
                  <Link to="/blog-v2" className="theme-btn-three xs-mt-30">
                    Check our all news <i className="fas fa-angle-right"></i>
                  </Link>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="mt-100 lg-mt-60">
                <div className="row">
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
				Vcamp Fancy Banner Three
			=====================================================
			--> */}
      <div className="box-layout mt-200 lg-mt-120">
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
      </div>
      {/* <!-- /.fancy-banner-three --> */}

      {/* <!--
			=====================================================
			Contact Section One
			=====================================================
			--> */}
      <div className="contact-section-one mt-120 mb-80 lg-mt-80 lg-mb-40">
        <div className="container">
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
                              require("../../../../assets/images/logo/vCamp_01.svg")
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
          <img src={footerImg} alt="shape" className="shapes illustration" />
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

export default AboutUsV1;
