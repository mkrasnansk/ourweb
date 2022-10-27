import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import Pricing from "../../../../components/common/pricing/Pricing";
import { Link } from "react-router-dom";
import AccordionTwo from "./components/AccordionTwo";
import Seo from "../../../../components/common/seo/Seo";

const PricingV1 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Pricing V1" />
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
          <h2 className="page-title font-recoleta">Pricing</h2>
          <p>We’ve varity package for our client based on your business</p>
        </div>
      </div>
      {/* <!-- /.inside-hero-one --> */}

      {/* <!--
			=====================================================
				Pricing Section One
			=====================================================
			--> */}
      <div className="pricing-section-one mt-150 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-10 col-lg-8 col-md-10 m-auto">
              <div className="title-style-one text-center">
                <h2 className="title">
                  Solo, agency or team? We’ve got you <span>covered</span>
                </h2>
              </div>
              {/* <!-- /.title-style-six --> */}
            </div>
          </div>
          {/* End .row */}

          <Pricing />
          {/* <!-- /.pricing-table-area-one --> */}
        </div>
      </div>
      {/* <!-- /.pricing-section-one --> */}

      {/* <!--
        =====================================================
            Vcamp Fancy Banner Six
        =====================================================
        --> */}
      <div className="fancy-banner-six mt-140 lg-mt-120">
        <div className="container">
          <div className="inner-content position-relative">
            <div className="row align-items-center">
              <div className="col-xxl-8 col-lg-9">
                <div className="d-flex align-items-center text-center text-lg-start">
                  <div className="icon d-xl-flex d-none align-items-center justify-content-center">
                    <img
                      src={
                        require("../../../../assets/images/icon/icon_52.svg")
                          .default
                      }
                      alt="icon"
                    />
                  </div>
                  <div className="text ps-xl-4">
                    <h3 className="font-recoleta">
                      Looking for a <span>Custom</span> license?
                    </h3>
                    <p className="theme-mb-0">
                      Get the Mac app only. No Workspace, webapp real-time
                      collaboration. Includes updates for 12 months and optional
                      renewal.
                    </p>
                  </div>
                  {/* <!-- /.text --> */}
                </div>
              </div>
              {/* End .col */}
              <div className="col-xxl-4 col-lg-3 text-center text-lg-end">
                <Link
                  to="/contact-v2"
                  className="theme-btn-two ripple-btn md-mt-30"
                >
                  Contact us
                </Link>
              </div>{" "}
              {/* End .col */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-banner-six --> */}

      {/* <!--
        =====================================================
            Vcamp Text Block Six
        =====================================================
        --> */}
      <div className="vcamp-text-block-six mt-225 mb-200 lg-mt-120 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-lg-5">
              <div className="text-wrapper">
                <div className="title-style-two">
                  <h2 className="title">
                    Find <span>common</span> questions
                  </h2>
                </div>
                <p className="text-lg mt-25 mb-60 lg-mt-20 lg-mb-40">
                  Don’t find your answer here? just send us message.
                </p>
                <Link to="/contact-v2" className="theme-btn-one ripple-btn">
                  Contact us
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 ms-auto">
              <AccordionTwo />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-text-block-six --> */}

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

export default PricingV1;
