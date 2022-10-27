import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../../assets/images/media/img_46.jpg";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import FooterSubscribe from "../essentials/components/FooterSubscribe";
import FeedbackSliderFour from "../../../../components/creative-agency/FeedbackSliderFour";
import Service2 from "./components/Service2";
import Service3 from "./components/Service3";
import Seo from "../../../../components/common/seo/Seo";

const ServiceV3 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Service V3" />
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
      <Header className="white-vr responsive-white-vr" />

      {/* <!-- 
        =============================================
        Inside Page Banner
        ============================================== 
        --> */}
      <div
        className="inside-hero-two"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container">
          <h2 className="page-title">Solutions</h2>
          <p>We’re empowering WordPress to do great things together</p>
        </div>
        <img
          src={require("../../../../assets/images/shape/shape_24.svg").default}
          alt=""
          className="shapes shape-one"
        />
      </div>
      {/* <!-- /.inside-hero-two --> */}

      {/* <!--
			=====================================================
				Vcamp Feature Section Eight
			=====================================================
			--> */}
      <div className="vcamp-feature-section-eight mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center mb-80 lg-mb-20">
                <div className="col-lg-5 col-md-6">
                  <div className="title-style-four">
                    <h2 className="title">Our included service.</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 ms-auto">
                  <p className="text-lg theme-mb-0 sm-mt-20">
                    Lorem ipsum dolor sit amet, consecte adiel sed do eiusmod
                    tempor incidi ut labore split
                  </p>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <Service3 />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-feature-section-eight --> */}

      {/* <!--
			=====================================================
				Vcamp Feature Section Seven
			=====================================================
			--> */}
      <div className="vcamp-feature-section-seven style-two mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-xl-9 col-lg-7 col-md-9 m-auto"
              data-aos="fade-up"
            >
              <div className="title-style-five text-center">
                <h2 className="title">We provide industrial solution also</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="box-layout mt-40 lg-mt-10">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row">
                <Service2 />
              </div>
            </div>
          </div>
          {/* <!-- /.box-layout --> */}
          <img
            src={
              require("../../../../assets/images/shape/shape_39.svg").default
            }
            alt="shape"
            className="shapes shape-three"
          />
          <img
            src={
              require("../../../../assets/images/shape/shape_39.svg").default
            }
            alt="shape"
            className="shapes shape-two"
          />
        </div>
      </div>
      {/* <!-- /.vcamp-feature-section-seven --> */}

      {/* <!--
			=====================================================
				Feedback Slider Four
			=====================================================
			--> */}
      <div className="feedback-section-four bg-white">
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
				Vcamp Fancy Banner Four
			=====================================================
			--> */}
      <div className="fancy-banner-seven border-top">
        <div className="container">
          <div className="inner-content bg-white position-relative">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-9">
                <h3 className="font-recoleta">Have any project in mind?</h3>
                <p>
                  Call <a href="#">+88 2734 677 12</a> or email us at{" "}
                  <a href="#">support@vcamp.com</a>
                </p>
              </div>
              <div className="col-xl-4 col-lg-3 text-xl-end">
                <Link to="/contact-v1" className="theme-btn-four ripple-btn">
                  Let’s Discuss
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-banner-four --> */}

      {/* <!--
        =====================================================
          Footer
        =====================================================
        --> */}

      <div className="vcamp-footer-one dark-bg p0">
        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="subscribe-area-two">
                <FooterSubscribe />
              </div>
              {/* <!-- /.subscribe-area --> */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
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
                    <img
                      src={
                        require("../../../../assets/images/shape/shape_21.svg")
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
        {/* End .container */}

        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="bottom-footer">
                <CopyrightFooter />
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>
      {/* <!-- /.vcamp-footer-one --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default ServiceV3;
