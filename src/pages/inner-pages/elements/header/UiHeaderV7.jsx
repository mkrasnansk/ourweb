import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../../components/creative-agency/Header";
import CounterUp from "../../../../components/business/CounterUp";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";
import Seo from "../../../../components/common/seo/Seo";

const UiHeaderV7 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Ui Header V7" />
      {/* End Seo Related data */}

      {/* <!--
        =============================================
        Theme Main Menu
        ==============================================
        --> */}
      <Header />

      {/* <!-- 
        =============================================
        Vcamp Text Block One
        ============================================== 
        --> */}
      <div className="hero-banner-two h-100">
        <div className="vcamp-text-block-one pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-lg-8 m-auto">
                <div className=" text-center ps-0">
                  <div className="title-style-two">
                    <h3 className="title">
                      Basic <span>Header</span>
                    </h3>
                  </div>

                  <p className="meta-info-text text-lg">
                    If you have fancy for building up your online business, you
                    must adopt a website.
                  </p>
                </div>
                {/* End .text-wrapper */}
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
        </div>
      </div>

      {/* <!-- /.vcamp-text-block-one --> */}

      {/* <!--
        =====================================================
        Counter Section One
        =====================================================
        --> */}
      <div className="counter-section-one mt-120 md-mt-120 mb-70">
        <div className="inner-container">
          <div className="row">
            <CounterUp />
          </div>
        </div>
      </div>
      {/* End .counter-section */}

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

export default UiHeaderV7;
