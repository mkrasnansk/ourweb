import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../../assets/images/media/img_61.jpg";
import Header from "../../../../components/business/Header";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Portfolio6 from "../../../../components/portfolio/Portfolio6";
import FancyBanner from "../../../../components/service-provider/FancyBanner";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV7 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V7" />
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
      <Header className="white-vr responsive-white-vr" />

      {/* <!-- 
        =============================================
            Inside Page Banner
        ============================================== 
        --> */}
      <div
        className="inside-hero-two"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="container">
          <h2 className="page-title">Portfolio Masonry</h2>
          <p>An original way to show your works in a good appearance.</p>
        </div>
        <img
          src={require("../../../../assets/images/shape/shape_24.svg").default}
          alt=""
          className="shapes shape-one"
        />
      </div>
      {/* <!-- /.inside-hero-two --> */}

      {/* <!--
        =====================================================
        Portfolio Gallery Six
        =====================================================
        --> */}
      <div className="portfolio-gallery-six pt-120 pb-100 lg-pt-80 lg-pb-30">
        <div className="container">
          <Portfolio6 />
        </div>
      </div>
      {/* <!-- /.portfolio-gallery-six --> */}

      {/* <!--
			=====================================================
				Vcamp Fancy Banner One
			=====================================================
			--> */}
      <div className="fancy-banner-one mt-50">
        <div className="inner-content position-relative">
          <div className="container">
            <div className="row align-items-center">
              <FancyBanner />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-banner-one --> */}

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
                    alt="brand"
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

export default PortfolioV7;
