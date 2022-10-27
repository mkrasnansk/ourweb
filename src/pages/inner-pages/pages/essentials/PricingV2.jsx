import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import Pricing from "../../../../components/common/pricing/Pricing";
import { Link } from "react-router-dom";
import Seo from "../../../../components/common/seo/Seo";

const PricingV2 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Pricing V2" />
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
      <div className="inside-hero-five">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-lg-6 col-md-8">
              <div className="title-style-one">
                <div className="upper-title mb-25 lg-m0">Pricing</div>
                <h2 className="title">
                  We have <br />
                  varied <span>packages</span> for you.
                </h2>
              </div>
              <p className="text-lg pt-50 lg-pt-30">
                vCamp delivered blazing fast performance, striking wordPress
                soludtion
              </p>
            </div>
            <div className="col-xxl-7 col-lg-6 col-md-4">
              <img
                src={
                  require("../../../../assets/images/assets/ils_02.png").default
                }
                alt=""
                className="illustration sm-mt-30"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.inside-hero-five --> */}

      {/* <!--
			=====================================================
				Pricing Section One
			=====================================================
			--> */}
      <div className="pricing-section-one dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-10 col-lg-8 col-md-10 m-auto">
              <div className="title-style-one white-vr text-center">
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
      <div className="fancy-banner-six reverse-space mb-70">
        <div className="container position-relative">
          <img
            src={
              require("../../../../assets/images/shape/shape_34.svg").default
            }
            alt="shape"
            className="shapes shape-one"
          />
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
         Footer
        =====================================================
        --> */}
      <div className="vcamp-footer-one ">
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

export default PricingV2;
