import React from "react";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import Portfolio8 from "../../../../components/portfolio/Portfolio8";
import FancyBanner from "../../../../components/designer-portfolio/FancyBanner";
import FooterThree from "../../../../components/common/footer/FooterThree";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV30 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V30" />
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
                    <h3 className="title">Portfolio Carousel</h3>
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
      <div className="portfolio-gallery-eight dark-bg pt-130 pb-140 lg-pt-80 lg-pb-100">
        <div className="container">
          <div className="slider-wrapper position-relative">
            <div className="portfolio-slider-two hvr-overlay-right galley-item-wrapper gap15 slick-rounded-arrow arrow-center ripple-btn is_light">
              <Portfolio8 />
            </div>
            {/* <!-- /.portfolio-slider-two --> */}
          </div>
        </div>
      </div>
      {/* <!-- /.case-study-three --> */}

      {/* <!--
			=====================================================
				Vcamp Fancy Banner Nine
			=====================================================
			--> */}
      <div className="fancy-banner-nine dark-bg pb-80 lg-pb-50">
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

export default PortfolioV30;
