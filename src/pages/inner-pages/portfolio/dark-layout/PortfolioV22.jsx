import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";
import Portfolio1 from "../../../../components/portfolio/Portfolio1";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV22 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V22" />
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
        Vcamp Text Block One
        ============================================== 
        --> */}
      <div className="vcamp-text-block-one pt-180 md-pt-130 dark-bg">
        <div className="container">
          <div className="border-bottom pb-75 md-pb-50">
            <div className="row">
              <div className="col-12 m-auto">
                <div className="text-wrapper text-center ps-0">
                  <div className="title-style-one white-vr">
                    <h3 className="title">Portfolio Classic</h3>
                  </div>
                  <p className="text-lg text-white pt-35 lg-pt-30">
                    An original way to show your works in a good appearance in
                    dark mood
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-text-block-one --> */}

      {/* <!--
        =====================================================
       Case Study Section Three
        =====================================================
        --> */}
      <div className="case-study-three dark-bg pt-120 lg-pt-80 pb-180 lg-pb-100">
        <div className="container">
          <Portfolio1 />
        </div>
      </div>
      {/* <!-- /.case-study-three --> */}

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

export default PortfolioV22;
