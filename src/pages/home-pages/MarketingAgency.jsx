import React from "react";
import { Link } from "react-router-dom";
import AccordionOne from "../../components/service-provider/AccordionOne";
import FeatureSection from "../../components/marketing-agency/FeatureSection";
import FeatureSectionTwo from "../../components/marketing-agency/FeatureSectionTwo";
import FeatureSlider from "../../components/marketing-agency/FeatureSlider";
import Header from "../../components/marketing-agency/Header";
import Hero from "../../components/marketing-agency/hero/Hero";
import PopupTwo from "../../components/common/video-popup/PopupTwo";
import Testimonial from "../../components/marketing-agency/Testimonial";
import HeaderModal from "../../components/designer-portfolio/header/HeaderModal";
import Team from "../../components/marketing-agency/Team";
import Blog from "../../components/marketing-agency/Blog";
import SubscribeForm from "../../components/marketing-agency/SubscribeForm";
import Footer from "../../components/marketing-agency/footer/Footer";
import Seo from "../../components/common/seo/Seo";

const MarketingAgency = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Marketing Agency" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Theme Main Menu
      ============================================== 
      --> */}
      <Header />
      {/* End header */}

      {/* <!-- 
        =============================================
        Theme Hero Banner
        ============================================== 
        --> */}
      <div className="hero-wrapper">
        <div className="hero-banner-thirteen">
          <Hero />
        </div>
        {/* // <!-- Modal --> */}
        <div
          className="modal fade"
          id="contactModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <HeaderModal />
          </div>
          {/* <!-- /.modal-dialog --> */}
        </div>
      </div>

      {/* <!-- /.hero-banner-thirteen --> */}

      {/* <!-- 
     =============================================
     Vcamp Feature Section Fourteen
     ============================================== 
     --> */}
      <div className="vcamp-feature-section-fourteen mt-160 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5" data-aos="fade-right">
              <div className="title-style-thirteen">
                <div className="upper-title">What We Do</div>
                <h2 className="title">Experties Field.</h2>
              </div>
              {/* <!-- /.title-style-thirteen --> */}
              <p className="pt-25 pb-30">
                Elit esse cillum dolore eu fugiat nulla pariatur lorem dui.
              </p>
              <Link to="/about-us-v2" className="theme-btn-seventeen">
                Learn more
              </Link>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ms-auto md-mt-60">
              <FeatureSection />
              {/* <!-- /.card-style-fourteen --> */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-feature-section-fourteen --> */}

      {/* <!-- 
        =============================================
        Vcamp Feature Section Fifteen
        ============================================== 
        --> */}
      <div className="vcamp-feature-section-fifteen mt-150 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="title-style-thirteen md-mb-20">
                <h2 className="title">Grow your business through vCamp.</h2>
              </div>
              {/* <!-- /.title-style-thirteen --> */}
            </div>
            <div className="col-xxl-5 col-lg-6 ms-auto" data-aos="fade-left">
              <p className="sub-text">
                Top 10 digital agencies. We get international awards for
                projects we complete for our clients. The most awarded marketing
                agency.
              </p>
              <Link to="/about-us-v1" className="theme-btn-eighteen font-zen">
                More About us
              </Link>
            </div>
          </div>
          {/* End .row */}

          <div
            className="inner-wrapper position-relative mt-80 lg-mt-50"
            data-aos="fade-up"
          >
            <div className="row gx-0">
              <FeatureSectionTwo />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-feature-section-fifteen --> */}

      {/* <!--
        =====================================================
        Portfolio Gallery Nine
        =====================================================
        --> */}
      <div
        className="portfolio-gallery-nine mt-150 lg-mt-100"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-5 col-xl-6 col-lg-5 col-md-7 col-sm-9">
              <div className="title-style-thirteen text-center text-sm-start">
                <h2 className="title">
                  Our Latest <br /> Projects.
                </h2>
              </div>
              {/* <!-- /.title-style-thirteen --> */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="portfolio-slider-five pt-80 lg-pt-40 slick-rounded-arrow exact arrow-top-right ripple-btn is_light">
          <FeatureSlider />
        </div>
      </div>
      {/* <!-- /.portfolio-gallery-nine --> */}

      {/* <!--
        =====================================================
        Vcamp Text Block Eighteen
        =====================================================
        --> */}
      <div className="vcamp-text-block-eighteen mt-130 lg-mt-100">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xxl-6 col-xl-7 col-lg-5" data-aos="fade-right">
              <div className="title-style-thirteen">
                <div className="upper-title">WHY CHOOSE US</div>
                <h2 className="title">We’ve been helping cutomer globally.</h2>
              </div>
              {/* <!-- /.title-style-thirteen --> */}
            </div>
            {/* End .col */}
            <div className="col-xl-5 col-lg-6 ms-auto" data-aos="fade-left">
              <div
                className="accordion accordion-style-five md-mt-30"
                id="accordionOne"
              >
                <AccordionOne />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* End .container */}
      </div>
      {/* <!-- /.vcamp-text-block-eighteen --> */}

      {/* <!--
        =====================================================
        Vcamp Fancy Banner Two
        =====================================================
        --> */}
      <div className="container">
        <div className="fancy-banner-ten mt-140 lg-mt-100">
          <div className="inner-content h-100 d-flex align-items-center justify-content-center">
            <PopupTwo />
          </div>
          {/* <!-- /.inner-content --> */}
        </div>
      </div>
      {/* <!-- /.fancy-banner-ten --> */}

      {/* <!-- 
        =============================================
        Feedback Section Fourteen
        ============================================== 
        --> */}
      <div className="feedback-section-fourteen" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-9 m-auto">
              <div className="feedback_slider_nine">
                <Testimonial />
              </div>
              {/* <!-- /.feedback_slider_nine --> */}
            </div>
          </div>
        </div>
        {/* <!-- /.container --> */}

        <div className="rating-box">
          <img
            src={require("../../assets/images/shape/shape_72.svg").default}
            alt="shape"
          />
          <div className="rate font-zen">
            9.3 <br />
            <span>Rating</span>
          </div>
        </div>
        {/* End rating-box */}
      </div>
      {/* <!-- /.feedback-section-fourteen --> */}

      {/* <!--
        =====================================================
        Team Section Six
        =====================================================
        --> */}
      <div className="team-section-six pt-120 pb-150 lg-pt-80 lg-pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-8 col-md-9 text-center text-md-start"
              data-aos="fade-right"
            >
              <div className="title-style-thirteen">
                <h2 className="title">Our Team</h2>
              </div>
              {/* <!-- /.title-style-thirteen --> */}
              <p className="text-lg pt-15 m0 lg-pt-10 sm-pb-30">
                We’ve skilled team to provide you qulaity services.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-3 text-center text-md-end"
              data-aos="fade-left"
            >
              <a href="#" className="theme-btn-seventeen">
                Join Now
              </a>
            </div>
          </div>
          {/* End .row */}

          <div className="row pt-35 lg-pt-20">
            <Team />
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* <!-- /.team-section-six --> */}

      {/* <!--
        =====================================================
        Blog Section Seven
        =====================================================
        --> */}
      <div className="blog-section-seven mt-110 lg-mt-80">
        <div className="container">
          <div
            className="title-style-thirteen text-center pb-35 lg-pb-10"
            data-aos="fade-up"
          >
            <h2 className="title">Recent News</h2>
          </div>
          {/* <!-- /.title-style-thirteen --> */}

          <div className="row gx-xl-5">
            <Blog />
          </div>
        </div>
      </div>
      {/* <!-- /.blog-section-seven --> */}

      {/* <!--
        =====================================================
        Vcamp Fancy Banner Eleven
        =====================================================
        --> */}
      <div className="fancy-banner-eleven dark-style mt-150 lg-mt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-thirteen white-vr">
                <div className="upper-title">Subscirbe Now</div>
                <h2 className="title">Subscribe to Our newsletter.</h2>
              </div>
              {/* <!-- /.title-style-thirteen --> */}
            </div>
            {/* End .col */}

            <div className="col-lg-5" data-aos="fade-left">
              <SubscribeForm />
              {/* <!-- /.form-wrapper --> */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-banner-eleven --> */}

      {/* <!--
        =====================================================
        Footer
        =====================================================
        --> */}
      <Footer />
      {/* <!-- /.vcamp-footer-seven --> */}
    </div>
    // End .'main-page-wrapper
  );
};

export default MarketingAgency;
