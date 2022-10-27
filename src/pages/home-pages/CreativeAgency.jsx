import React from "react";
import { Link } from "react-router-dom";
import shapeImg from "../../assets/images/shape/shape_12.svg";
import ContactMeta from "../../components/common/contact/ContactMeta";
import FromStyleOne from "../../components/common/contact/FromStyleOne";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../components/common/footer/FooterMenuList";
import Seo from "../../components/common/seo/Seo";
import AddressBlock from "../../components/creative-agency/AddressBlock";
import CounterUp from "../../components/creative-agency/CounterUp";
import FeatureSection from "../../components/creative-agency/FeatureSection";
import FeatureSectionFour from "../../components/creative-agency/FeatureSectionFour";
import FeedbackSlider from "../../components/creative-agency/FeedbackSlider";
import FeedbackSliderFour from "../../components/creative-agency/FeedbackSliderFour";
import FooterSubscribe from "../../components/creative-agency/FooterSubscribe";
import Header from "../../components/creative-agency/Header";
import HeroBanner from "../../components/creative-agency/HeroBanner";
import PartnersLogo from "../../components/creative-agency/PartnersLogo";
import TextBlockOne from "../../components/creative-agency/TextBlockOne";

const CreativeAgency = () => {
  return (
    <div className="main-page-wrapper light-bg">
      <Seo title="Creative Agency" />
      {/* End Seo Related data */}

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
      <div className="hero-banner-two">
        <div className="container h-100">
          <HeroBanner />
        </div>
      </div>
      {/* <!-- /.hero-banner-two --> */}

      {/* <!-- 
			=============================================
				Vcamp Feature Section Three
			============================================== 
			--> */}
      <div className="vcamp-feature-section-three mt-200 lg-mt-150 md-mt-120">
        <div className="container">
          <div className="row align-items-center mb-75 lg-mb-50 md-mb-20">
            <div className="col-xl-6 col-lg-5" data-aos="fade-right">
              <div className="title-style-one">
                <h2 className="title">
                  Best <span>WordPress</span> doctor.
                </h2>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-5 ms-auto" data-aos="fade-left">
              <p className="meta-info-text text-lg ps-xxl-5 md-pt-20">
                Lorem ipsum dolor sit amet, consecte adiel sed do eiusmod tempor
                incidi ut labore split
              </p>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row">
            <FeatureSection />
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-feature-section-three --> */}

      {/* <!-- 
			=============================================
				Vcamp Text Block One
			============================================== 
			--> */}
      <TextBlockOne />

      {/* <!--
			=====================================================
				Counter Section One
			=====================================================
			--> */}
      <div className="counter-section-one mt-225 xl-mt-150 md-mt-80">
        <div className="inner-container">
          <div className="row justify-content-center">
            <CounterUp />
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* End .counter-section-one  */}

      {/* 
      <!--
			=====================================================
				Feedback Slider Three
			=====================================================
			--> */}
      <div className="feedback-section-three dark-bg mt-110 lg-mt-70">
        <img
          src="images/shape/shape_06.svg"
          alt=""
          className="shapes shape-one"
        />
        <div className="inner-content d-lg-flex align-items-center clearfix">
          <div className="text-wrapper">
            <div className="title-style-one white-vr">
              <h2 className="title">
                <span>Success</span> sotries from client.
              </h2>
            </div>
            <p>Lorem ipsum dolor sit amet cons elit adiel sed do eiusmd</p>
            <Link to="portfolio-v1" className="theme-btn-three white-vr">
              View all case study <i className="fas fa-angle-right"></i>
            </Link>
          </div>
          {/* <!--  /.text-wrapper --> */}

          <div className="slider-wrapper">
            <div className="feedback_slider_three">
              <FeedbackSlider />
            </div>
            {/* <!-- /.feedback_slider_three --> */}
          </div>
          {/* <!-- /.slider-wrapper --> */}
        </div>
        {/* <!-- /.inner-content --> */}
      </div>
      {/* <!-- /.feedback-section-three --> */}

      {/* <!-- 
			=============================================
				Vcamp Feature Section Four
			============================================== 
			--> */}
      <div className="vcamp-feature-section-four mt-250 lg-mt-150 md-mt-120">
        <FeatureSectionFour />
      </div>
      {/* <!-- /.vcamp-feature-section-four --> */}

      {/* <!--
			=====================================================
				Feedback Slider Four
			=====================================================
			--> */}
      <div className="feedback-section-four mt-130 lg-mt-80 sm-mt-40">
        <img
          src={require("../../assets/images/shape/shape_09.svg").default}
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src={require("../../assets/images/shape/shape_10.svg").default}
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src={require("../../assets/images/shape/shape_11.svg").default}
          alt="shape"
          className="shapes shape-four"
        />

        <div className="container">
          <div className="feedback_slider_four position-relative">
            <FeedbackSliderFour />
            <img
              src={require("../../assets/images/shape/shape_08.svg").default}
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
				Contact Section Two
			=====================================================
			--> */}
      <div className="contact-section-two mt-200 mb-80 lg-mt-120">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 me-auto">
                <ContactMeta />
                {/* <!-- /.contact-meta-one --> */}
              </div>
              {/* End .col */}

              <div className="col-lg-6">
                <div className="form-style-one with-border md-mt-40">
                  <FromStyleOne />
                  {/* <!-- /.form-style-one --> */}
                  <img
                    src={shapeImg}
                    alt="shape"
                    className="shapes shape-one"
                  />
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* <!-- /.contact-section-two --> */}

      {/* <!--
			=====================================================
				Partner Section Two
			=====================================================
			--> */}
      <div className="partner-section-two pt-180 mb-200 lg-pt-50 lg-mb-100">
        <img
          src={require("../../assets/images/shape/shape_13.svg").default}
          alt="shape"
          className="shapes shape-one"
        />
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-8 col-lg-6 col-md-8 col-sm-10 m-auto">
              <div className="title-style-one text-center">
                <div className="upper-title">Our partners</div>
                <h2 className="title">
                  Our <span>partners</span> support us always
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="partent-logos">
                <div className="row g-0">
                  <PartnersLogo />
                </div>
              </div>
              {/* <!-- /.partent-logos --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.partner-section-two --> */}

      {/* <!--
			=====================================================
				Address Section Two
			=====================================================
			--> */}
      <div className="address-section-two">
        <div className="container">
          <div className="inner-content">
            <AddressBlock />
          </div>
          {/* <!-- /.inner-content --> */}
        </div>
      </div>
      {/* <!-- /.address-section-two --> */}

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <div className="vcamp-footer-one dark-bg">
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
                              require("../../assets/images/logo/vCamp_01.svg")
                                .default
                            }
                            alt="brand"
                            style={{ width: "127px" }}
                          />
                        </Link>
                      </div>
                      <img
                        src={
                          require("../../assets/images/shape/shape_14.svg")
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
    // {/* // End .main-page-wrapper */}
  );
};

export default CreativeAgency;
