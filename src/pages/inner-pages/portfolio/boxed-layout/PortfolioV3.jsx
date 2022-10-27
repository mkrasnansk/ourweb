import React from "react";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import { Link } from "react-router-dom";
import PortfolioMasonry from "../../../../components/designer-portfolio/PortfolioMasonry";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV3 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V3" />
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
                    <h3 className="title">Portfolio Modern</h3>
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

      <div className="portfolio-gallery-three pt-10 pb-150 lg-pt-30 lg-pb-60">
        <div className="container">
          <PortfolioMasonry />
        </div>
      </div>
      {/* <!-- /.case-study-three --> */}

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <footer className="vcamp-footer-two dark-footer pt-150 lg-pt-100">
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
                    alt="logo"
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

export default PortfolioV3;
