import React from "react";
import banner from "../../../../assets/images/media/img_61.jpg";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import Portfolio6 from "../../../../components/portfolio/Portfolio6";
import FancyBanner from "../../../../components/designer-portfolio/FancyBanner";
import FooterThree from "../../../../components/common/footer/FooterThree";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV28 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V28" />
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
       Case Study Section Three
        =====================================================
        --> */}
      <div className="portfolio-gallery-six dark-bg pt-130 pb-120 lg-pt-80 lg-pb-90">
        <div className="container ">
          <Portfolio6 />
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

export default PortfolioV28;
