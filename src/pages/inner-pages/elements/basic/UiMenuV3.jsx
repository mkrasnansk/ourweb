import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import { Link } from "react-router-dom";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CounterUp from "../../../../components/business/CounterUp";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import Seo from "../../../../components/common/seo/Seo";

const UiMenuV3 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Ui Menu V3" />
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
      <Header className="dark-dropdown" />

      {/* <!-- 
        =============================================
        Vcamp Text Block One
        ============================================== 
        --> */}
      <div className="vcamp-text-block-one pt-180 md-pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-8 m-auto">
              <div className="text-wrapper text-center ps-0">
                <div className="title-style-two">
                  <h3 className="title">
                    Dark Dropdown <span> Menu</span>
                  </h3>
                </div>

                <p className="meta-info-text text-lg">
                  If you have fancy for building up your online business, you
                  must adopt a website.
                </p>
                <Link to="/ui-menu-v4" className="theme-btn-one ripple-btn">
                  Next Element{" "}
                  <img
                    src={
                      require("../../../../assets/images/icon/icon_03.svg")
                        .default
                    }
                    alt="icon"
                  />
                </Link>
              </div>
              {/* End .text-wrapper */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* <!-- /.vcamp-text-block-one --> */}

      {/* <!--
        =====================================================
        Counter Section One
        =====================================================
        --> */}
      <div className="counter-section-one mt-170 md-mt-120 mb-70">
        <div className="inner-container">
          <div className="row">
            <CounterUp />
          </div>
        </div>
      </div>
      {/* End .counter-section */}

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

export default UiMenuV3;
