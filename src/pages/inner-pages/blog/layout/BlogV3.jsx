import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import BlogSidebar from "../../../../components/blog/BlogSidebar";
import Pagination from "../Pagination";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import Blog3 from "../../../../components/blog/Blog3";
import Seo from "../../../../components/common/seo/Seo";
import { Link } from "react-router-dom";

const BlogV3 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Blog Details V3 " />
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
      <div className="inside-hero-one hero-spacing">
        <div className="container">
          <h2 className="page-title font-recoleta">Blog</h2>
          <p>Find stories from our community members</p>
        </div>
      </div>
      {/* <!-- /.inside-hero-one --> */}

      {/* <!--
        =====================================================
          Blog Section Five
        =====================================================
        --> */}
      <div className="blog-section-five mt-160 mb-150 lg-mt-100 lg-mb-120">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-8">
              <div className="blog-meta-wrapper pe-xxl-5">
                <Blog3 />
              </div>
              {/* <!-- /.blog-meta-wrapper --> */}

              <div className="page-pagination-one pt-30">
                <Pagination />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 col-md-8">
              <div className="blog-sidebar md-mt-80">
                <BlogSidebar />
              </div>
              {/* <!-- /.blog-sidebar --> */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* <!-- /.blog-section-four --> */}

      {/* <!--
        =====================================================
         Footer
        =====================================================
        --> */}
      <div className="vcamp-footer-one box-layout">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="subscribe-area">
                  <FooterSubscribe />
                </div>
                {/* <!-- /.subscribe-area --> */}

                <div className="top-footer mt-90 md-mt-70">
                  <div className="row">
                    <div className="col-lg-4 col-md-2 d-flex justify-content-between flex-column">
                      <div className="logo">
                        <Link to="/">
                          <img
                            src={
                              require("../../../../assets/images/logo/vCamp_01.svg")
                                .default
                            }
                            alt="brand"
                            style={{ width: "127px" }}
                          />
                        </Link>
                      </div>
                    </div>
                    {/* End .col */}

                    <FooterMenuList />
                    {/* End Footer Menu list */}
                  </div>
                </div>
                {/* <!-- /.top-footer --> */}
              </div>
            </div>
          </div>
          {/* End .container */}
          <img src={footerImg} alt="shape" className="shapes illustration" />
        </div>
        {/* <!-- /.bg-wrapper --> */}

        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="bottom-footer">
                <CopyrightFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-footer-one --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default BlogV3;
