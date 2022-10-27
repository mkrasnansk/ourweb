import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import FeedbackSliderFour from "../../../../components/creative-agency/FeedbackSliderFour";
import FeedbackSliderTwo from "../../../../components/business/FeedbackSliderTwo";
import { Link } from "react-router-dom";
import Seo from "../../../../components/common/seo/Seo";

const TestimonialV1 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Testimonial V1" />
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
      <div className="inside-hero-three">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="page-title font-recoleta">
                Trusted <span>Client</span> Feedback
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
				Feedback Slider Two
			=====================================================
			--> */}
      <div className="feedback-section-two box-layout">
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

export default TestimonialV1;
