import React from "react";
import banner from "../../../../assets/images/media/img_46.jpg";
import Header from "../../../../components/business/Header";
import Partners from "../../../../components/business/Partners";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Popup from "../../../../components/common/video-popup/Popup";
import CounterUp from "../../../../components/consulting-agency/CounterUp";
import FeedbackSliderFour from "../../../../components/creative-agency/FeedbackSliderFour";
import FooterSubscribe from "./components/FooterSubscribe";
import TeamSlider from "../../../../components/service-provider/TeamSlider";
import AccordionOne from "./components/AccordionOne";
import Features from "./components/Features";
import Seo from "../../../../components/common/seo/Seo";
import { Link } from "react-router-dom";

const AboutUsV2 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Abut Us V2" />
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
          <h2 className="page-title">Inside Story</h2>
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
            Vcamp Text Block Five
        =====================================================
        --> */}
      <div className="vcamp-text-block-five mt-170 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-7 col-lg-5">
              <div className="text-wrapper">
                <div className="title-style-five">
                  <div className="upper-title">ABOUT US</div>
                  <h2 className="title">
                    We’ve been helping cutomer globally.
                  </h2>
                </div>
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
            {/* <!-- /.counter-section-two --> */}
          </div>
          {/* <!-- /.inner-content --> */}
        </div>
      </div>
      {/* <!-- /.fancy-banner-two --> */}

      {/* <!--
        =====================================================
        Counter Section Three
        =====================================================
        --> */}
      <div className="counter-section-three mt-120 lg-mt-100">
        <div className="container">
          <div className="row">
            <CounterUp />
          </div>
        </div>
      </div>
      {/* <!-- /.counter-section-three --> */}

      {/* <!-- 
        =============================================
        Vcamp Feature Section Six
        ============================================== 
        --> */}
      <div className="vcamp-feature-section-six mt-150 lg-mt-70">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-5">
              <div className="text-wrapper pt-15 md-pb-50">
                <div className="title-style-five">
                  <div className="upper-title">Why us?</div>
                  <h2 className="title">Why choose vCamp.</h2>
                </div>
                <p className="text-lg">
                  We helping client to create with our talented expert.
                </p>
              </div>
              {/* <!-- /.text-wrapper --> */}
            </div>
            {/* End .row */}

            <div className="col-lg-7">
              <div className="row">
                <Features />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        <img
          src={require("../../../../assets/images/shape/shape_25.svg").default}
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src={require("../../../../assets/images/shape/shape_26.svg").default}
          alt="shape"
          className="shapes shape-two"
        />
      </div>
      {/* <!-- /.vcamp-feature-section-six --> */}

      {/* <!--
        =====================================================
            Team Section One
        =====================================================
        --> */}
      <div className="team-section-one mt-200 lg-mt-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-8 col-xl-9 col-lg-7 col-md-10 m-auto">
              <div className="title-style-five text-center">
                <h2 className="title">We’ve talented expert to help you</h2>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* <!-- /.container --> */}

        <div className="team_slider_one box-layout arrow-none">
          <TeamSlider />
        </div>
        {/* End .team_slider_one */}
      </div>
      {/* <!-- /.team-section-one --> */}

      {/* <!--
			=====================================================
				Feedback Slider Four
			=====================================================
			--> */}
      <div className="feedback-section-four bg-white mt-60">
        <img
          src={require("../../../../assets/images/shape/shape_27.svg").default}
          alt="shape"
          className="shapes shape-five"
        />

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

      <div className="partner-slider-one border-top pt-60 mt-30 mb-70 lg-mt-10">
        <div className="container">
          <p className="text-center">
            Over <span>32K+</span> software businesses growing with vCamp.
          </p>
          <div className="partnerSliderOne">
            <Partners />
          </div>
        </div>
      </div>
      {/* <!-- /.partner-slider-one --> */}

      {/* <!--
        =====================================================
            Footer
        =====================================================
        --> */}
      <div className="box-layout">
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
      </div>
      {/* <!-- /.vcamp-footer-one --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default AboutUsV2;
