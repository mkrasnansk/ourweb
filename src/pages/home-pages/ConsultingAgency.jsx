import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/media/img_70.png";
import img2 from "../../assets/images/media/img_71.png";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Accordion from "../../components/consulting-agency/Accordion";
import CounterUp from "../../components/consulting-agency/CounterUp";
import FeatureSection from "../../components/consulting-agency/FeatureSection";
import FeatureSlider from "../../components/consulting-agency/FeatureSlider";
import Header from "../../components/consulting-agency/Header";
import Hero from "../../components/consulting-agency/Hero";
import HeroSocial from "../../components/consulting-agency/HeroSocial";
import TeamSlider from "../../components/consulting-agency/TeamSlider";
import VideoFeatureList from "../../components/consulting-agency/VideoFeatureList";
import FeedbackSliderFour from "../../components/creative-agency/FeedbackSliderFour";
import Blog from "../../components/consulting-agency/Blog";
import FooterMenuListTwo from "../../components/common/footer/FooterMenuListTwo";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FancyBanner from "../../components/service-provider/FancyBanner";
import Seo from "../../components/common/seo/Seo";

const ConsultingAgency = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Consulting Agency" />
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
      <div className="hero-banner-eight">
        <div className="social-elemnet">
          <HeroSocial />
        </div>
        {/* End .social-elemnet */}

        <div className="scroll-bar"></div>
        {/* End .scroll-bar */}

        <Hero />
        {/* <!-- /.banner-content --> */}
      </div>
      {/* <!-- /.hero-banner-eight --> */}

      {/* <!-- 
        =============================================
        Vcamp Feature Section Three
        ============================================== 
        --> */}
      <div className="vcamp-feature-section-three border-bottom border-top pt-35 pb-60 md-pb-40 md-pt-10">
        <div className="container">
          <div className="row gx-xl-5 justify-content-between">
            <FeatureSection />
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-feature-section-three --> */}

      {/* <!-- 
        =============================================
        Vcamp Text Block Eleven
        ============================================== 
        --> */}
      <div className="vcamp-text-block-eleven mt-140 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="title-style-nine">
                <div className="upper-title">Why choose us</div>
                <h2 className="title">We solve your Problem.</h2>
              </div>
            </div>
            <div className="col-lg-5 ms-auto">
              <p className="meta-info-text md-pt-30">
                We are the startup studio with a <span>mission to partner</span>{" "}
                with the best founders.
              </p>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 ms-auto">
                <div
                  className="accordion accordion-style-one"
                  id="accordionOne"
                >
                  <Accordion />
                </div>
              </div>
            </div>
          </div>
          <div className="left-img-meta">
            <img src={img1} alt="media" className="w-100" />
          </div>
          {/* <!-- /.left-img-meta --> */}
        </div>
        {/* <!-- /.main-content --> */}
      </div>
      {/* <!-- /.vcamp-text-block-eleven --> */}

      {/* <!--
        =====================================================
        Counter Section Three
        =====================================================
        --> */}
      <div className="counter-section-three border-bottom pt-120 pb-60 lg-pt-30 lg-pb-10">
        <div className="container">
          <div className="row">
            <CounterUp />
          </div>
        </div>
      </div>
      {/* <!-- /.counter-section-three --> */}

      {/* <!-- 
			=============================================
				Vcamp Feature Section Five
			============================================== 
			--> */}
      <div className="vcamp-feature-section-five mt-90">
        <div className="container">
          <div className="row align-items-center align-items-xl-end">
            <div className="col-xl-6 col-lg-4 col-md-5 col-sm-8">
              <div className="title-style-nine text-center text-sm-start xs-pb-20">
                <h2 className="title">Our Success Story.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}
        <div className="feature_slider_one mt-70 lg-mt-50 slick-rounded-arrow arrow-top-right exact ripple-btn is_light">
          <FeatureSlider />
        </div>
        {/* End .feature_slider_one */}
      </div>
      {/* <!-- /.vcamp-feature-section-five --> */}

      {/* <!-- 
			=============================================
				Vcamp Text Block Twelve
			============================================== 
			--> */}
      <div className="vcamp-text-block-twelve mt-250 lg-mt-120 pb-20 z-index-auto">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-6 col-lg-7">
              <VideoFeatureList />
              {/* <!-- / VideoFeatureList --> */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="right-img-meta">
          <img src={img2} alt="media" className="w-100 main-img" />
        </div>
        {/* <!-- /.right-img-meta --> */}
      </div>
      {/* <!-- /.vcamp-text-block-twelve --> */}

      {/* <!--
			=====================================================
				Team Section Four
			=====================================================
			--> */}
      <div className="team-section-four mt-225 lg-mt-100">
        <div className="container">
          <div className="row align-items-center align-items-xl-end">
            <div className="col-xl-6 col-lg-4 col-md-6 col-sm-8">
              <div className="title-style-nine text-center text-sm-start xs-pb-20">
                <h2 className="title">Our Talented Players.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="team_slider_two mt-100 lg-mt-60 slick-rounded-arrow arrow-top-right ripple-btn is_light">
          <TeamSlider />
        </div>
        {/* <!-- /.team_slider_two --> */}
      </div>
      {/* <!-- /.team-section-four --> */}

      {/* <!--
			=====================================================
				Feedback Slider Four
			=====================================================
			--> */}
      <div className="feedback-section-four bg-white lg-mt-20 sm-mt-50">
        <div className="container">
          <div className="feedback_slider_four">
            <FeedbackSliderFour className="style-two" />
          </div>
          {/* <!-- /.feedback_slider_four --> */}
        </div>
      </div>
      {/* <!-- /.feedback-section-four --> */}

      {/* <!--
			=====================================================
				Blog Section One
			=====================================================
			--> */}
      <div className="blog-section-one">
        <div className="container">
          <div className="border-top pt-120 md-pt-100">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-sm-6">
                    <div className="title-style-five">
                      <div className="upper-title">Latest News</div>
                      <h2 className="title">Our Blog</h2>
                    </div>
                  </div>
                  {/* End .col */}
                  <div className="col-xl-7 col-sm-6 text-sm-end text-start">
                    <Link to="/blog-v2" className="theme-btn-three xs-mt-30">
                      Check our all news <i className="fas fa-angle-right"></i>
                    </Link>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}

                <div className="mt-100 lg-mt-60">
                  <div className="row feature-post">
                    <Blog />
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .col */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.blog-section-one --> */}

      {/* <!--
			=====================================================
				Vcamp Fancy Banner One
			=====================================================
			--> */}
      <div className="fancy-banner-one mt-200 lg-mt-120">
        <div className="inner-content position-relative">
          <div className="container">
            <div className="row align-items-center">
              <FancyBanner />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-banner-one --> */}

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
                      require("../../assets/images/logo/vCamp_03.svg").default
                    }
                    alt="brand"
                  />
                </Link>
              </div>
            </div>
            {/* End .col */}

            <FooterMenuListTwo />
          </div>
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

export default ConsultingAgency;
