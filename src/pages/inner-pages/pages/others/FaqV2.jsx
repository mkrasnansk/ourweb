import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import Faq2 from "./components/Faq2";
import Seo from "../../../../components/common/seo/Seo";
import { Link } from "react-router-dom";

const FaqV2 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Faq V2" />
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
            <div className="col-xl-5 col-md-6">
              <h2 className="page-title font-recoleta">
                Find <span>Answers</span> here.
              </h2>
            </div>
            <div className="col-xxl-5 col-md-6 ms-auto">
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for layouts and visual.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.inside-hero-one --> */}

      {/* <!--
        =====================================================
            FAQ Section Two
        =====================================================
        --> */}
      <div className="faq-section-two dark-bg mb-70">
        <div className="container">
          <div className="row">
            <Faq2 />
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.faq-section-two --> */}

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

export default FaqV2;
