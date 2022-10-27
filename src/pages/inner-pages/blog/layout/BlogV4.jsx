import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import Pagination from "../Pagination";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import Blog2 from "../../../../components/blog/Blog2";
import Seo from "../../../../components/common/seo/Seo";
import { Link } from "react-router-dom";

const BlogV4 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Blog Details V4 " />
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
      <div className="inside-hero-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <h2 className="page-title font-recoleta">
                Our <span>Inside</span> News.
              </h2>
            </div>
            {/* End .col */}

            <div className="col-xl-5 col-md-6 ms-auto">
              <p>
                Our founders Dustin Moskovitz and Justin Rosenstein met while
                leading Engineering teams at Facebook.
              </p>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* <!-- /.inside-hero-three --> */}

      {/* <!--
        =====================================================
        Blog Section Four
        =====================================================
        --> */}
      <div className="blog-section-five dark-bg mb-70">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-lg-10 m-auto">
              <Blog2 />

              <div className="page-pagination-one pt-30">
                <Pagination />
              </div>
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
      <div className="vcamp-footer-one">
        <div className="bg-wrapper bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="subscribe-area">
                  <FooterSubscribe className="title-black" />
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

export default BlogV4;
