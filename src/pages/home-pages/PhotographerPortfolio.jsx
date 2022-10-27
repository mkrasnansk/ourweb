import React from "react";
import Sidebar from "../../components/common/header/sidebar/Sidebar";
import Seo from "../../components/common/seo/Seo";
import FancyTextBlock from "../../components/photographer-portfolio/FancyTextBlock";
import FeatureSection from "../../components/photographer-portfolio/FeatureSection";
import FooterBg from "../../components/photographer-portfolio/footer/FooterBg";
import FooterBottom from "../../components/photographer-portfolio/footer/FooterBottom";
import FooterTop from "../../components/photographer-portfolio/footer/FooterTop";
import Header from "../../components/photographer-portfolio/Header";
import Hero from "../../components/photographer-portfolio/Hero";
import ImageTooltipGallery from "../../components/photographer-portfolio/ImageTooltipGallery";
import PortfolioGallery from "../../components/photographer-portfolio/PortfolioGallery";
import PortfolioGallerySlider from "../../components/photographer-portfolio/PortfolioGallerySlider";
import Testimonial from "../../components/photographer-portfolio/Testimonial";

const PhotographerPortfolio = () => {
  return (
    <div className="main-page-wrapper dark-bg">
      <Seo title="Photographer Portfolio" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Sidebar Nav
      ============================================== 
        --> */}
      <Sidebar className="dark-style" />
      {/* End Sidebar */}

      {/* <!-- 
			=============================================
				Theme Main Menu
			============================================== 
			--> */}
      <Header />
      {/* End Header */}

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}
      <div className="hero-banner-eleven">
        <Hero />
        {/* <!-- /.banner-intro --> */}

        <img
          src={require("../../assets/images/shape/shape_57.svg").default}
          alt="shape"
          className="shapes shape-one"
        />
      </div>
      {/* <!-- /.hero-banner-eleven --> */}

      {/* <!-- 
			=============================================
				Portfolio Gallery One
			============================================== 
			--> */}
      <div className="portfolio-gallery-one pb-140 md-pb-80">
        <div className="wrapper m-auto">
          <PortfolioGallerySlider />
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.wrapper --> */}

        <a
          href="#services"
          className="scroll-btn d-flex align-items-center justify-content-center tran3s ripple-btn"
        >
          <img
            src={require("../../assets/images/icon/icon_73.svg").default}
            alt="icon"
            width="26"
          />
        </a>
        <img
          src={require("../../assets/images/shape/shape_58.svg").default}
          alt="shape"
          className="shapes shape-one"
        />
      </div>
      {/* <!-- /.portfolio-gallery-one --> */}

      {/* <!-- 
			=============================================
				Vcamp Text Block Fifteen
			============================================== 
			--> */}
      <div className="vcamp-text-block-fifteen" data-aos="fade-up">
        <h2 className="font-recoleta d-flex flex-wrap justify-content-center d-lg-block">
          <ImageTooltipGallery />
        </h2>
      </div>
      {/* <!-- /.vcamp-text-block-fifteen --> */}

      {/* <!-- 
			=============================================
				Vcamp Text Block Sixteen
			============================================== 
			--> */}
      <div className="vcamp-text-block-sixteen mt-225 pb-140 lg-mt-100 md-p0">
        <div className="container">
          <FancyTextBlock />
        </div>
        <img
          src={require("../../assets/images/shape/shape_60.svg").default}
          alt=""
          className="shapes shape-two"
        />
      </div>
      {/* <!-- /.vcamp-text-block-sixteen --> */}

      {/* <!-- 
			=============================================
				Vcamp Feature Section Thirteen
			============================================== 
			--> */}
      <div
        className="vcamp-feature-section-thirteen pt-130 mb-225 lg-mb-120"
        id="services"
      >
        <div className="box-layout">
          <div className="container">
            <div className="title-style-eleven mb-55">
              <div className="upper-title">MY Services</div>
            </div>
          </div>
          {/* End .container */}

          <FeatureSection />
          {/* <!-- /.card-style-thirteen --> */}
        </div>
        {/* <!-- /.box-layout --> */}
      </div>
      {/* <!-- /.vcamp-feature-section-thirteen --> */}

      {/* <!-- 
			=============================================
				Portfolio Gallery Two
			============================================== 
			--> */}
      <div className="portfolio-gallery-two pb-100 mb-100 sm-mb-40 md-pb-10">
        <div className="main-wrapper">
          <div className="row">
            <PortfolioGallery />
          </div>
        </div>
        {/* <!-- /.main-wrapper --> */}
        <img
          src="images/shape/shape_61.svg"
          alt=""
          className="shapes shape-one"
        />
      </div>
      {/* <!-- /.portfolio-gallery-two --> */}

      {/* <!-- 
			=============================================
				Feedback Section Twelve
			============================================== 
			--> */}
      <div className="feedback-section-twelve">
        <div className="slider-wrapper">
          <div className="feedback_slider_eight">
            <Testimonial />
          </div>
          {/* <!-- /.feedback_slider_eight --> */}
        </div>
        {/* <!-- /.slider-wrapper --> */}
      </div>
      {/* <!-- /.feedback-section-twelve --> */}

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <footer className="vcamp-footer-five pt-300 lg-pt-100 pb-20">
        <div className="container">
          <FooterTop />
        </div>
        {/* End .container */}

        <div className="bottom-footer text-center text-sm-start mt-300 lg-mt-130">
          <div className="container">
            <FooterBottom />
          </div>
        </div>
        {/* End .bottom-footer */}

        <div className="bg"></div>

        <FooterBg />
      </footer>
      {/* <!-- /.vcamp-footer-five --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default PhotographerPortfolio;
