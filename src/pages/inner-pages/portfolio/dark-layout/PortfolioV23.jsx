import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";
import Portfolio2 from "../../../../components/portfolio/Portfolio2";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV23 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V23" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Sidebar Nav
      ============================================== 
        --> */}
      <Sidebar className="dark-style" />

      {/* <!--
        =============================================
        Theme Main Menu
        ==============================================
        --> */}
      <Header className="white-vr dark-bg dark-dropdown" />

      {/* <!-- 
        =============================================
        Inside Page Banner
        ============================================== 
        --> */}
      <div className="inside-hero-three dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="page-title font-recoleta">
                Portfolio <span>Overlay</span> Grid
              </h2>
            </div>
            <div className="col-xl-5 col-md-6 ms-auto">
              <p>
                Our founders Dustin Moskovitz and Justin Rosenstein met while
                leading Engineering teams at Facebook.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.Inside Page Banner --> */}

      {/* <!--
        =====================================================
       Case Study Section Three
        =====================================================
        --> */}
      <div className="case-study-five border-top dark-bg pb-0">
        <div className="container">
          <Portfolio2 />
        </div>
      </div>
      {/* <!-- /.case-study-three --> */}

      {/* <!--
			=====================================================
				Vcamp Fancy Banner Five
			=====================================================
			--> */}
      <div className="fancy-banner-five dark-bg pt-150 pb-150 lg-pt-100 lg-pb-100">
        <div className="container text-center">
          <div className="row">
            <div className="col-xl-9 col-lg-7 col-md-10 m-auto">
              <h2 className="title font-recoleta">
                Do you have any projects? Contact us.
              </h2>
            </div>
          </div>
          <Link to="/contact-v1" className="theme-btn-four ripple-btn">
            Let’s Discuss
          </Link>
        </div>
      </div>
      {/* End Vcamp Fancy Banner Five */}

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <footer className="vcamp-footer-two dark-footer border-top pt-150 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      require("../../../../assets/images/logo/vCamp_03.svg")
                        .default
                    }
                    alt=""
                  />
                </Link>
              </div>
            </div>
            {/* End .col */}

            <FooterMenuListTwo />
          </div>
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

export default PortfolioV23;
