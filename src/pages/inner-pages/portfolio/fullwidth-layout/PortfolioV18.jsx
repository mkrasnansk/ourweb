import React from "react";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import Portfolio17 from "../../../../components/portfolio/Portfolio17";
import FooterThree from "../../../../components/common/footer/FooterThree";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioV18 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio V18" />
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
        =====================================================
       Portfolio Gallery Three
        =====================================================
        --> */}

      <div className="portfolio-gallery-seven portfolio-gallery-three border-top mt-140 md-mt-90 ">
        <Portfolio17 />
      </div>
      {/* <!-- /.case-study-three --> */}

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <div className="vcamp-footer-four border-top">
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

export default PortfolioV18;
