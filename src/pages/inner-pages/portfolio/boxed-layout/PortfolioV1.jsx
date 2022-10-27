import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import Portfolio1 from "../../../../components/portfolio/Portfolio1";
import { Link } from "react-router-dom";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV1 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V1" />
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
      <div className="inside-hero-one hero-spacing">
        <div className="container">
          <h2 className="page-title font-recoleta">Portfolio Classic</h2>
          <p>We’re empowering WordPress to do great things together</p>
        </div>
      </div>
      {/* <!-- /.inside-hero-one --> */}

      {/* <!--
        =====================================================
       Case Study Section Three
        =====================================================
        --> */}
      <div className="case-study-three mt-150 lg-mt-120">
        <div className="container">
          <Portfolio1 />
        </div>
      </div>
      {/* <!-- /.case-study-three --> */}

      {/* <!--
        =====================================================
            Vcamp Fancy Banner Three
        =====================================================
        --> */}
      <div className="fancy-banner-three bg-white mt-40 mb-40">
        <div className="inner-content position-relative">
          <div className="container">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-8">
                    <h2 className="title font-recoleta text-center text-md-start">
                      Have any <span>project</span> in mind?
                    </h2>
                  </div>
                  {/* End .col */}
                  <div className="col-lg-6 col-md-4 d-flex justify-content-md-end justify-content-center">
                    <Link
                      to="/contact-v1"
                      className="theme-btn-four ripple-btn sm-mt-30"
                    >
                      Let’s Discuss
                    </Link>
                  </div>
                  {/* End .col */}
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-banner-three --> */}

      {/* <!--
        =====================================================
         Footer
        =====================================================
        --> */}
      <div className="vcamp-footer-one box-layout">
        <div className="bg-wrapper">
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

export default PortfolioV1;
