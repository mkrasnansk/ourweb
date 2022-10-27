import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import { Link } from "react-router-dom";
import Portfolio5 from "../../../../components/portfolio/Portfolio5";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV5 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V6" />
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
          <h2 className="page-title font-recoleta">Portfolio Metro</h2>
          <p>We’re empowering WordPress to do great things together</p>
        </div>
      </div>
      {/* <!-- /.inside-hero-one --> */}

      {/* <!--
			=====================================================
				Portfolio Gallery Five
			=====================================================
			--> */}
      <div className="portfolio-gallery-five pt-120 pb-100 lg-pt-80 lg-pb-50">
        <div className="container">
          <Portfolio5 />
        </div>
      </div>
      {/* <!-- /.portfolio-gallery-five --> */}

      {/* <!--
        =====================================================
        Vcamp Fancy Banner Five
        =====================================================
        --> */}
      <div className="fancy-banner-five mb-150 lg-mb-100">
        <div className="container text-center">
          <div className="row">
            <div className="col-xl-9 col-lg-7 col-md-10 m-auto">
              <h2 className="title font-recoleta">
                Do you have any projects? Contact us.
              </h2>
            </div>
          </div>
          <Link to="/contact-v1" className="theme-btn-four ripple-btn">
            Contact us.
          </Link>
        </div>
      </div>
      {/* <!-- /.fancy-banner-five --> */}

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

export default PortfolioV5;
