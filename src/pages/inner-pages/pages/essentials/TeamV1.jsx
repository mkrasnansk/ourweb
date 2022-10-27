import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import { Link } from "react-router-dom";
import Team from "../../../../components/common/team/Team";
import Seo from "../../../../components/common/seo/Seo";

const TeamV1 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Team V1" />
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
          <h2 className="page-title font-recoleta">Our Team</h2>
          <p>We’re empowering WordPress to do great things together</p>
        </div>
      </div>
      {/* <!-- /.inside-hero-one --> */}

      {/*       
        <!--
        =====================================================
        Team Section Two
        =====================================================
        --> */}
      <div className="team-section-two mt-160 lg-mt-120">
        <div className="container">
          <Team />
        </div>
      </div>
      {/* <!-- /.team-section-two --> */}

      {/* <!--
        =====================================================
        Vcamp Fancy Banner Five
        =====================================================
        --> */}
      <div className="fancy-banner-five mt-150 mb-80 lg-mt-120 lg-mb-40">
        <div className="container">
          <div className="row">
            <div className="col-12 m-auto">
              <div className="bg-wrapper">
                <div className="row">
                  <div className="col-xxl-7 col-lg-8 col-md-10 m-auto">
                    <h2 className="title font-recoleta">
                      Want to be a part of our talented team?
                    </h2>
                  </div>
                </div>
                <Link to="/contact-v1" className="theme-btn-four ripple-btn">
                  Send your CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-banner-five --> */}

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

export default TeamV1;
