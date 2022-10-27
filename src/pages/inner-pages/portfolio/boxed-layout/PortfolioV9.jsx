import React from "react";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import { Link } from "react-router-dom";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";
import Portfolio8 from "../../../../components/portfolio/Portfolio8";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV9 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V9" />
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
          <div className="pb-75 md-pb-50">
            <div className="row">
              <div className="col-12 m-auto">
                <div className="text-wrapper text-center ps-0">
                  <div className="title-style-one">
                    <h3 className="title">Portfolio carousel</h3>
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
      {/* <!-- /.Inside Page Banner --> */}

      {/* <!--
			=====================================================
				Portfolio Gallery Five
			=====================================================
			--> */}
      <div className="portfolio-gallery-eight border-top pt-130 pb-150 lg-pt-80 lg-pb-80">
        <div className="container">
          <div className="slider-wrapper position-relative">
            <div className="portfolio-slider-two hvr-overlay-right galley-item-wrapper gap15 slick-rounded-arrow arrow-center ripple-btn is_light">
              <Portfolio8 />
            </div>
            {/* <!-- /.portfolio-slider-two --> */}
          </div>
          {/* <!-- /.slider-wrapper --> */}
        </div>
      </div>
      {/* <!-- /.portfolio-gallery-eight --> */}

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

export default PortfolioV9;
