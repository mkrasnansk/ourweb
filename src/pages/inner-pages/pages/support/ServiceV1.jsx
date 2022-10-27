import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import FeatureSection from "../../../../components/creative-agency/FeatureSection";
import Service from "./components/Service";
import FeedbackSliderFour from "../../../../components/creative-agency/FeedbackSliderFour";
import { Link } from "react-router-dom";
import Seo from "../../../../components/common/seo/Seo";

const ServiceV1 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Service V1" />
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
      <div className="inside-hero-three bg-color">
        <img
          src={require("../../../../assets/images/shape/shape_35.svg").default}
          alt="shpae"
          className="shapes shape-one"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="page-title font-recoleta">
                <span>Solutions</span> we provide.
              </h2>
            </div>
            <div className="col-xxl-5 col-md-6 ms-auto">
              <p>
                Our founders Dustin Moskovitz and Justin Rosenstein met while
                leading Engineering teams at Facebook.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.inside-hero-one --> */}

      {/* <!--
        =====================================================
        Vcamp Feature Section Three
        =====================================================
        --> */}
      <div className="vcamp-feature-section-three mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <FeatureSection />
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-feature-section-three --> */}

      {/* <!--
			=====================================================
				Vcamp Feature Section Seven
			=====================================================
			--> */}
      <div className="vcamp-feature-section-seven mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-xl-8 col-lg-6 col-md-8 m-auto"
              data-aos="fade-up"
            >
              <div className="title-style-one text-center">
                <h2 className="title">
                  We provide <span>industrial</span> solution also
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="box-layout mt-40 lg-mt-10">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row">
                <Service />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.box-layout --> */}

        <img
          src={require("../../../../assets/images/shape/shape_36.svg").default}
          alt="shapes"
          className="shapes shape-one"
        />
        <img
          src={require("../../../../assets/images/shape/shape_37.svg").default}
          alt="shapes"
          className="shapes shape-two"
        />
      </div>
      {/* <!-- /.vcamp-feature-section-seven --> */}

      {/* <!--
			=====================================================
				Feedback Slider Four
			=====================================================
			--> */}
      <div className="feedback-section-four bg-white mt-30">
        <div className="container">
          <div className="feedback_slider_four position-relative">
            <FeedbackSliderFour />
            <img
              src={
                require("../../../../assets/images/shape/shape_08.svg").default
              }
              alt="shape"
              className="shapes shape-one bottom-0"
            />
          </div>
          {/* <!-- /.feedback_slider_four --> */}
        </div>
      </div>
      {/* <!-- /.feedback-section-four --> */}

      {/* <!--
			=====================================================
				Vcamp Fancy Banner Seven
			=====================================================
			--> */}
      <div
        className="fancy-banner-seven mt-20 mb-100 lg-mb-60"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="inner-content position-relative">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-9 text-center text-lg-start">
                <h3 className="font-recoleta">Have any project in mind?</h3>
                <p>
                  Call <a href="#">+88 2734 677 12</a> or email us at{" "}
                  <a href="#">support@vcamp.com</a>
                </p>
              </div>
              <div className="col-xl-4 col-lg-3 text-center text-lg-end">
                <Link to="/contact-v1" className="theme-btn-four ripple-btn">
                  Let’s Discuss
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-banner-seven --> */}

      {/* <!--
        =====================================================
         Footer
        =====================================================
        --> */}
      <div className="vcamp-footer-one">
        <div className="bg-wrapper bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="subscribe-area">
                  <FooterSubscribe className="title-black" />
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

export default ServiceV1;
