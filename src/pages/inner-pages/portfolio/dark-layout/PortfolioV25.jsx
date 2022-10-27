import React from "react";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import Portfolio3 from "../../../../components/portfolio/Portfolio3";
import FancyBanner from "../../../../components/designer-portfolio/FancyBanner";
import FooterThree from "../../../../components/common/footer/FooterThree";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV25 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V25" />
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
                    <h3 className="title">Portfolio Standard</h3>
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
      <div className="portfolio-gallery-three dark-bg pt-100 pb-140 lg-pt-80 lg-pb-120">
        <div className="container ">
          <Portfolio3 />

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
				Vcamp Fancy Banner Nine
			=====================================================
			--> */}
      <div className="fancy-banner-nine pb-50 dark-bg">
        <div className="container">
          <FancyBanner />
        </div>
      </div>
      {/* <!-- /.fancy-banner-nine --> */}

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <div className="vcamp-footer-four dark-bg">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-xxl-10 m-auto">
                <FooterThree />
              </div>
            </div>
          </div>
          {/* <!-- /.inner-content --> */}
        </div>
      </div>
      {/* <!-- /.vcamp-footer-four --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default PortfolioV25;
