import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import Seo from "../../../../components/common/seo/Seo";

const UiButtons = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Ui Buttons " />
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
        Vcamp Text Block One
        ============================================== 
        --> */}
      <div className="vcamp-text-block-one border-bottom pt-180 md-pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-8 m-auto">
              <div className="text-wrapper text-center ps-0">
                <div className="title-style-two">
                  <h3 className="title">
                    <span> Buttons</span>
                  </h3>
                </div>

                <p className="meta-info-text text-lg">
                  If you have fancy for building up your online business, you
                  must adopt a website.
                </p>
                <Link to="/ui-contact" className="theme-btn-one ripple-btn">
                  Next Element{" "}
                  <img
                    src={
                      require("../../../../assets/images/icon/icon_03.svg")
                        .default
                    }
                    alt="icon"
                  />
                </Link>
              </div>
              {/* End .text-wrapper */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* <!-- /.vcamp-text-block-one --> */}

      {/* <!--
			=====================================================
				Buttons
			=====================================================
			--> */}
      <div className="buttons-style">
        <h4 className="text-center font-recoleta fw-bold pt-80 pb-80">
          Theme Buttons
        </h4>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-100">
              <h4 className="font-recoleta fw-bold">Platform Audit</h4>
              <p className="fs-6 mb-40 mt-20 pe-xl-5 me-xl-3">
                Having a home based business makes wonderful asset to your life.
                The WordPress VIP stands it comes.
              </p>
              <button type="button" className="theme-btn-one ripple-btn">
                Primary Button
                <img
                  src={
                    require("../../../../assets/images/icon/icon_03.svg")
                      .default
                  }
                  alt="icon"
                />
              </button>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-sm-6 mb-100">
              <h4 className="font-recoleta fw-bold">Platform Audit</h4>
              <p className="fs-6 mb-40 mt-20 pe-xl-5 me-xl-3">
                Having a home based business makes wonderful asset to your life.
                The WordPress VIP stands it comes.
              </p>
              <button type="button" className="theme-btn-two">
                Primary Button
              </button>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-sm-6 mb-100">
              <h4 className="font-recoleta fw-bold">Core WordPress</h4>
              <p className="fs-6 mb-40 mt-20 pe-xl-5 me-xl-3">
                Having a home based business makes wonderful asset to your life.
                The WordPress VIP stands it comes.
              </p>
              <button type="button" className="theme-btn-three">
                Primary Button <i className="fas fa-angle-right"></i>
              </button>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-sm-6 mb-100">
              <h4 className="font-recoleta fw-bold">Marketing</h4>
              <p className="fs-6 mb-40 mt-20 pe-xl-5 me-xl-3">
                Having a home based business makes wonderful asset to your life.
                The WordPress VIP stands it comes.
              </p>
              <button type="button" className="theme-btn-four">
                Primary Button
              </button>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-sm-6 mb-100">
              <h4 className="font-recoleta fw-bold">e-Commerce</h4>
              <p className="fs-6 mb-40 mt-20 pe-xl-5 me-xl-3">
                Having a home based business makes wonderful asset to your life.
                The WordPress VIP stands it comes.
              </p>
              <button
                type="button"
                className="theme-btn-five position-relative"
              >
                Primary Button
              </button>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-sm-6 mb-100">
              <h4 className="font-recoleta fw-bold">Core WordPress</h4>
              <p className="fs-6 mb-40 mt-20 pe-xl-5 me-xl-3">
                Having a home based business makes wonderful asset to your life.
                The WordPress VIP stands it comes.
              </p>
              <button type="button" className="theme-btn-six">
                Primary Button
              </button>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-sm-6 mb-100">
              <h4 className="font-recoleta fw-bold">Platform Audit</h4>
              <p className="fs-6 mb-40 mt-20 pe-xl-5 me-xl-3">
                Having a home based business makes wonderful asset to your life.
                The WordPress VIP stands it comes.
              </p>
              <button type="button" className="theme-btn-seven">
                Primary Button
              </button>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-sm-6 mb-100">
              <h4 className="font-recoleta fw-bold">Marketing</h4>
              <p className="fs-6 mb-40 mt-20 pe-xl-5 me-xl-3">
                Having a home based business makes wonderful asset to your life.
                The WordPress VIP stands it comes.
              </p>
              <button type="button" className="theme-btn-eight">
                Primary Button
              </button>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-sm-6 mb-100">
              <h4 className="font-recoleta fw-bold">Core WordPress</h4>
              <p className="fs-6 mb-40 mt-20 pe-xl-5 me-xl-3">
                Having a home based business makes wonderful asset to your life.
                The WordPress VIP stands it comes.
              </p>
              <button type="button" className="theme-btn-nine">
                Primary Button
              </button>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-sm-6 mb-100">
              <h4 className="font-recoleta fw-bold">Platform Audit</h4>
              <p className="fs-6 mb-40 mt-20 pe-xl-5 me-xl-3">
                Having a home based business makes wonderful asset to your life.
                The WordPress VIP stands it comes.
              </p>
              <button type="button" className="theme-btn-eleven">
                Primary Button
              </button>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-sm-6 mb-100">
              <h4 className="font-recoleta fw-bold">Marketing</h4>
              <p className="fs-6 mb-40 mt-20 pe-xl-5 me-xl-3">
                Having a home based business makes wonderful asset to your life.
                The WordPress VIP stands it comes.
              </p>
              <button type="button" className="theme-btn-twelve">
                Primary Button
              </button>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-sm-6 mb-100">
              <h4 className="font-recoleta fw-bold">e-Commerce</h4>
              <p className="fs-6 mb-40 mt-20 pe-xl-5 me-xl-3">
                Having a home based business makes wonderful asset to your life.
                The WordPress VIP stands it comes.
              </p>
              <button type="button" className="theme-btn-thirteen">
                Primary Button
              </button>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* <!-- /.buttons-style --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default UiButtons;
