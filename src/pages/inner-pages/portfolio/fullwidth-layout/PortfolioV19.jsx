import React from "react";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import { Link } from "react-router-dom";
import Portfolio18 from "../../../../components/portfolio/Portfolio18";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV19 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V19" />
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
                    <h3 className="title">Portfolio Masonry</h3>
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
      <div className="case-study-seven  border-top pt-130 lg-pt-80">
        <div className="contianer-fluid box-layout">
          <Portfolio18 />
        </div>
      </div>
      {/* <!-- /.portfolio-gallery-five --> */}

      {/* <!--
        =====================================================
        Vcamp Fancy Banner Five
        =====================================================
        --> */}
      <div className="fancy-banner-five mt-150 mb-150 lg-mt-100 lg-mb-100">
        <div className="container text-center">
          <div className="row">
            <div className="col-xl-9 col-lg-7 col-md-10 m-auto">
              <h2 className="title font-recoleta">
                Do you have any projects? Contact us.
              </h2>
            </div>
          </div>
          <Link to="/contact-v1" className="theme-btn-four ripple-btn">
            Contact us.
          </Link>
        </div>
      </div>
      {/* <!-- /.fancy-banner-five --> */}

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

export default PortfolioV19;
