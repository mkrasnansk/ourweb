import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import Blog from "../../../../components/business/Blog";
import Blog2 from "../../../../components/agency-minimal/Blog";
import Blog3 from "../../../../components/startup-agency/Blog";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";
import Seo from "../../../../components/common/seo/Seo";

const UiBlogPost = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Ui Blog Post " />
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
                    Blog <span> Post</span>
                  </h3>
                </div>

                <p className="meta-info-text text-lg">
                  If you have fancy for building up your online business, you
                  must adopt a website.
                </p>
                <Link to="/ui-buttons" className="theme-btn-one ripple-btn">
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
				Blog Section One
			=====================================================
			--> */}
      <div className="blog-section-one mt-100 lg-mt-40">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-4 d-flex order-lg-0">
              <div className="mt-75 md-mb-40">
                <div className="title-style-one">
                  <h2 className="title">
                    Our <span>inside</span> News
                  </h2>
                </div>
                <Link to="/blog-v1" className="theme-btn-three mt-50 md-mt-30">
                  Check our all news <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
            {/* End .col */}

            <Blog />
            {/* End Blog */}
          </div>
        </div>
      </div>
      {/* <!-- /.blog-section-one --> */}

      {/* <!--
        =====================================================
        Blog Section Two
        =====================================================
        --> */}
      <div className="blog-section-one mt-100 lg-mt-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="row align-items-center mb-50 lg-mb-20">
                <div className="col-sm-6">
                  <div className="title-style-two">
                    <h3 className="title">
                      Our <span>News</span>
                    </h3>
                  </div>
                </div>
                <div className="col-sm-6 d-sm-flex justify-content-end">
                  <Link
                    to="blog-v3"
                    className="theme-btn-one ripple-btn border0 xs-mt-20"
                  >
                    Go to Blog
                  </Link>
                </div>
              </div>
              {/* End .row */}

              <div className="row gx-xl-5">
                <Blog2 />
              </div>
              {/* End .row */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.blog-section-two --> */}

      {/* <!--
        =====================================================
        Blog Section Six
        =====================================================
        --> */}
      <div className="blog-section-six dark-bg mt-120">
        <div className="container">
          <div className="title-style-eight text-center white-vr mb-160 lg-mb-100 md-mb-40">
            <h2 className="title">
              <span>
                Company News{" "}
                <img
                  src={
                    require("../../../../assets/images/shape/shape_56.svg")
                      .default
                  }
                  alt="shape"
                />
              </span>
            </h2>
          </div>
          {/* <!-- /.title-style-eight --> */}

          <div className="row gx-xl-5">
            <Blog3 />
          </div>
          {/* End .row */}

          <div className="text-center mt-110 lg-mt-80">
            <Link to="blog-v1" className="theme-btn-ten">
              READ MORE
            </Link>
          </div>
          {/* End text-center */}
        </div>
      </div>
      {/* <!-- /.blog-section-six --> */}

      {/* <!--
        =====================================================
        Footer
        =====================================================
        --> */}
      <footer className="vcamp-footer-two pt-150 lg-pt-100">
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
          {/* End .row */}
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

export default UiBlogPost;
