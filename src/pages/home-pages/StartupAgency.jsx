import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/assets/ils_11.png";
import img2 from "../../assets/images/assets/ils_12.png";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuListTwo from "../../components/common/footer/FooterMenuListTwo";
import Seo from "../../components/common/seo/Seo";
import Blog from "../../components/startup-agency/Blog";
import Feature from "../../components/startup-agency/Feature";
import Header from "../../components/startup-agency/Header";
import Hero from "../../components/startup-agency/Hero";
import Team from "../../components/startup-agency/Team";
import TextBlock from "../../components/startup-agency/TextBlock";
import TextBlockList from "../../components/startup-agency/TextBlockList";

const StartupAgency = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Startup Agency" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Theme Main Menu
      ============================================== 
      --> */}
      <Header />
      {/* <!-- /.theme-main-menu --> */}

      {/* <!-- 
        =============================================
        Theme Hero Banner
        ============================================== 
	  --> */}
      <div className="hero-banner-seven">
        <div className="main-content">
          <Hero />
        </div>
        {/* <!-- /.main-content --> */}
        <a href="#about" className="scroll-btn">
          <img
            src={require("../../assets/images/icon/icon_73.svg").default}
            alt="icon"
          />
        </a>
      </div>
      {/* <!-- /.hero-banner-seven --> */}

      {/* <!-- 
        =============================================
        Vcamp Feature Section Nine
        ============================================== 
		--> */}
      <div className="vcamp-feature-section-nine pt-170 lg-pt-120" id="about">
        <div className="container">
          <div className="title-style-seven text-center pb-60 lg-pb-20">
            <h2 className="title">
              We help shape your ideas and turn them into{" "}
              <span>
                real businesses.{" "}
                <img
                  src={
                    require("../../assets/images/shape/shape_53.svg").default
                  }
                  alt="shape"
                />
              </span>
            </h2>
            <p>We turn bold ideas into market-leading companies.</p>
          </div>
          {/* <!-- /.title-style-seven --> */}

          <div className="row">
            <Feature />
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-feature-section-nine --> */}

      {/* <!-- 
      =============================================
      Vcamp Text Block Seven
      ============================================== 
      --> */}
      <div className="vcamp-text-block-seven pt-180 lg-pt-120">
        <div className="container">
          <div className="row gx-xl-5">
            <TextBlock />
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-text-block-seven --> */}

      {/* <!-- 
        =============================================
        Vcamp Text Block Eight
        ============================================== 
        --> */}
      <div className="vcamp-text-block-eight dark-bg mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6 ms-auto">
              <div className="text-wrapper">
                <h6>Over 250k+ Clients</h6>
                <h2>A company is product of quality, tact, & heart.</h2>
              </div>
              {/* <!-- /.text-wrapper --> */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <img src={img1} alt="illustration" className="illustration shapes" />
      </div>
      {/* <!-- /.vcamp-text-block-eight --> */}

      {/* <!-- 
        =============================================
        Vcamp Text Block Nine
        ============================================== 
        --> */}
      <div
        className="vcamp-text-block-nine pt-180 pb-180 lg-pt-120 lg-pb-100"
        id="join-us"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-11">
              <div className="text-wrapper">
                <h2>Join 1 million+ entrepreneurs that love what we do.</h2>
                <p className="text-lg">
                  We are the startup studio with a mission to partner with the
                  best founders connecting them with ideas and placing lorem.
                </p>
                <Link to="/contact-v2" className="theme-btn-nine">
                  JOIN OUR FAMILY
                </Link>
              </div>
              {/* <!-- /.text-wrapper --> */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <img
          src={img2}
          alt="illustration"
          className="illustration shapes"
          data-aos="fade-left"
        />
      </div>
      {/* <!-- /.vcamp-text-block-nine --> */}

      {/* <!-- 
        =============================================
        Vcamp Text Block Ten
        ============================================== 
        --> */}
      <div className="vcamp-text-block-ten dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-8 ms-auto">
              <div
                className="title-style-seven white-vr text-end text-md-start"
                data-aos="fade-left"
              >
                <h2 className="title">
                  <span className="bg-shape">20 cities</span> <b />
                  and growing.
                </h2>
              </div>
              {/* <!-- /.title-style-seven --> */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <ul className="city-list style-none">
          <TextBlockList />
        </ul>
      </div>
      {/* <!-- /.vcamp-text-block-ten --> */}

      {/* <!-- 
        =============================================
        Team Section Three
        ============================================== 
        --> */}
      <div className="team-section-three pt-180 lg-pt-120" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto">
              <div className="title-style-seven text-center pb-20 lg-p0">
                <h2 className="title">
                  We’re our own Biggest{" "}
                  <span>
                    Investors{" "}
                    <img
                      src={
                        require("../../assets/images/shape/shape_53.svg")
                          .default
                      }
                      alt=""
                    />
                  </span>
                </h2>
                <p>
                  Our mission is to most aligned fund for funders at the seed
                  stage. Everyone on the investment team has started a company.
                </p>
              </div>
              {/* <!-- /.title-style-seven --> */}
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row">
                <Team />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* <!-- /.team-section-three --> */}

      {/* <!--
        =====================================================
        Blog Section Six
        =====================================================
        --> */}
      <div className="blog-section-six dark-bg mt-180 lg-mt-120" id="news">
        <div className="container">
          <div className="title-style-eight text-center white-vr mb-160 lg-mb-100 md-mb-40">
            <h2 className="title">
              <span>
                Company News{" "}
                <img
                  src={
                    require("../../assets/images/shape/shape_56.svg").default
                  }
                  alt="shape"
                />
              </span>
            </h2>
          </div>
          {/* <!-- /.title-style-eight --> */}

          <div className="row gx-xl-5">
            <Blog />
          </div>
          {/* End .row */}

          <div className="text-center mt-110 lg-mt-80">
            <Link to="/blog-v1" className="theme-btn-ten">
              READ MORE
            </Link>
          </div>
          {/* End text-center */}
        </div>
      </div>
      {/* <!-- /.blog-section-six --> */}

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
                      require("../../assets/images/logo/vCamp_01.svg").default
                    }
                    alt="brand"
                  />
                </Link>
              </div>
            </div>
            {/* End .col */}

            <FooterMenuListTwo />
          </div>
          {/* End .row */}
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

export default StartupAgency;
