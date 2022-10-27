import React from "react";
import { Link } from "react-router-dom";
import imgMedia from "../../assets/images/media/img_29.jpg";
import Header from "../../components/business/Header";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuListTwo from "../../components/common/footer/FooterMenuListTwo";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import FeatureSection from "../../components/creative-agency/FeatureSection";
import AccordionOne from "../../components/service-provider/AccordionOne";
import Blog from "../../components/service-provider/Blog";
import CaseSliderOne from "../../components/service-provider/CaseSliderOne";
import Counter from "../../components/service-provider/Counter";
import FancyBanner from "../../components/service-provider/FancyBanner";
import FeedbackSlider from "../../components/service-provider/FeedbackSlider";
import HeroSlider from "../../components/service-provider/HeroSlider";
import TeamSlider from "../../components/service-provider/TeamSlider";
import TextBlock from "../../components/service-provider/TextBlock";
import TextBlockTitle from "../../components/service-provider/TextBlockTitle";
import TextBlockTwo from "../../components/service-provider/TextBlockTwo";

const ServiceProvider = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Service Provider" />
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
      <div className="box-layout">
        <div className="hero-banner-four">
          <div className="hero_slider_two">
            <HeroSlider />
          </div>
        </div>
        {/* <!-- /.hero-banner-four --> */}
      </div>
      {/* <!-- /.box-layout --> */}

      {/* <!-- 
			=============================================
				Vcamp Text Block Three
			============================================== 
			--> */}
      <div className="vcamp-text-block-three dark-bg">
        <div className="container">
          <TextBlock />
        </div>
        <img
          src={require("../../assets/images/shape/shape_22.svg").default}
          alt=""
          className="shapes shape-one"
        />
      </div>
      {/* <!-- /.vcamp-text-block-three --> */}

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
				Vcamp Text Block Four
			=====================================================
			--> */}
      <div className="vcamp-text-block-four mt-200 lg-mt-120">
        <div className="row g-0">
          <TextBlockTwo />
        </div>
      </div>
      {/* <!-- /.vcamp-text-block-four --> */}

      {/* <!--
			=====================================================
				Case Study Section One
			=====================================================
			--> */}
      <div className="case-study-one dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-5 col-xl-6 col-lg-5 col-md-7 col-sm-9">
              <div className="title-style-five white-vr text-center text-sm-start">
                <h2 className="title">Let’s check our case study.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="slider-wrapper">
          <div className="case_slider_one slick-rounded-arrow arrow-top-right ripple-btn is_dark">
            <CaseSliderOne />
          </div>
          {/* <!-- /.case_slider_one --> */}
        </div>
        {/* <!-- /.slider-wrapper --> */}
        <img
          src={require("../../assets/images/shape/shape_23.svg").default}
          alt="shape"
          className="shapes shape-one"
        />
      </div>
      {/* <!-- /.case-study-one --> */}

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
				Feedback Section Seven
			=====================================================
			--> */}
      <div className="feedback-section-seven mt-180 lg-mt-110">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ms-auto">
              <div className="ps-xl-5">
                <div className="title-style-five">
                  <div className="upper-title">Testimonials</div>
                  <h2 className="title">Customer say about us.</h2>
                </div>
                <div className="feedback_slider_six mt-80 lg-mt-40">
                  <FeedbackSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .row */}

        <div className="counter-section-two" data-aos="fade-right">
          <img src={imgMedia} alt="media" className="img-meta w-100" />
          <div className="counter-container">
            <div className="row g-0">
              <Counter />
            </div>
          </div>
          {/* <!-- /.counter-container --> */}
        </div>
        {/* <!-- /.counter-section-two --> */}
      </div>
      {/* <!-- /.feedback-section-seven --> */}

      {/* <!--
			=====================================================
				Team Section One
			=====================================================
			--> */}
      <div className="team-section-one mt-200 lg-mt-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 col-sm-8">
              <div className="title-style-five text-center text-sm-start">
                <h2 className="title">We’ve Expert to help you.</h2>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* <!-- /.container --> */}

        <div className="team_slider_one box-layout lg-mt-50 slick-rounded-arrow arrow-top-right ripple-btn is_light">
          <TeamSlider />
        </div>
        {/* End .team_slider_one */}
      </div>
      {/* <!-- /.team-section-one --> */}

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
      <footer className="vcamp-footer-two dark-footer pt-150 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      require("../../assets/images/logo/vCamp_03.svg").default
                    }
                    alt=""
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

export default ServiceProvider;
