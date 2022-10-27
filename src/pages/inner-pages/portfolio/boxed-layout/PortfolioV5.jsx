import React from "react";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import Portfolio4 from "../../../../components/portfolio/Portfolio4";
import { Link } from "react-router-dom";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV5 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V5" />
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
      <div className="vcamp-text-block-one pt-180 md-pt-130">
        <div className="container">
          <div className="border-bottom pb-75 md-pb-50">
            <div className="row">
              <div className="col-12 m-auto">
                <div className="text-wrapper text-center ps-0">
                  <div className="title-style-one">
                    <h3 className="title">Portfolio Video Popup</h3>
                  </div>
                  <p className="text-lg pt-35 lg-pt-30">
                    An original way to show your works in a good appearance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .inside-hero-three */}

      {/* <!--
        =====================================================
       Portfolio Gallery Three
        =====================================================
        --> */}

      <div className="portfolio-gallery-four pt-150 pb-140 lg-pt-80 lg-pb-100">
        <div className="container">
          <Portfolio4 />

          <div className="load-more-item1 text-center mt-40 lg-mt-30">
            <a href="#" className="tran3s">
              <i className="bi bi-arrow-clockwise"></i>
            </a>
            <span className="pt-10">Loading....</span>
          </div>
          {/* <!-- /.load-more-item1 --> */}
        </div>
      </div>
      {/* <!-- /.case-study-three --> */}

      {/* <!--
        =====================================================
        Footer
        =====================================================
        --> */}
      <footer className="vcamp-footer-two border-top pt-130 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      require("../../../../assets/images/logo/vCamp_01.svg")
                        .default
                    }
                    alt="brand"
                  />
                </Link>
              </div>
            </div>
            {/* End .col */}

            <FooterMenuListTwo className="dark-btn" />
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

export default PortfolioV5;
