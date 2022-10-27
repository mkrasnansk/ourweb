import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import FeatureSection from "../../../../components/creative-agency/FeatureSection";
import { Link } from "react-router-dom";
import Seo from "../../../../components/common/seo/Seo";

const ServiceV2 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Service V2" />
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
      <div className="vcamp-feature-section-three dark-bg">
        <div className="container">
          <div className="row">
            <FeatureSection />
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-feature-section-three --> */}

      {/* <!--
			=====================================================
				Vcamp Fancy Banner Seven
			=====================================================
			--> */}

      <div className="fancy-banner-four mt-60 mb-70 lg-mb-40 sm-mb-60">
        <div className="container position-relative">
          <img
            src={
              require("../../../../assets/images/shape/shape_41.svg").default
            }
            alt="shape"
            className="shapes shape-one"
          />
          <div className="bg-wrapper">
            <div className="col-xl-10 col-md-11 m-auto">
              <div className="row">
                <div className="row align-items-center">
                  <div className="col-xl-7 col-md-8">
                    <h2 className="title font-recoleta text-center text-md-start">
                      Have any <span>project</span> <br /> in mind?
                    </h2>
                  </div>
                  <div className="col-xl-5 col-md-4 d-flex justify-content-md-end justify-content-center">
                    <Link
                      to="/contact-v1"
                      className="theme-btn-four ripple-btn sm-mt-30"
                    >
                      Let’s Discuss
                    </Link>
                  </div>
                </div>
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

export default ServiceV2;
