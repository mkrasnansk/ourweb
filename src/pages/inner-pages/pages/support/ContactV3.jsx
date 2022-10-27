import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import banner from "../../../../assets/images/media/img_63.jpg";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import Address from "../../../../components/common/address/Address";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import FromStyleThree from "../../../../components/common/contact/FromStyleThree";
import Seo from "../../../../components/common/seo/Seo";
import { Link } from "react-router-dom";

const ContactV3 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Contact V2" />
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
          <h2 className="page-title">Contact Us</h2>
          <p>Get our all info and also can message us directly from here</p>
        </div>
        <img
          src={require("../../../../assets/images/shape/shape_24.svg").default}
          alt="shape"
          className="shapes shape-one"
        />
      </div>
      {/* <!-- /.inside-hero-seven --> */}

      {/* <!--
        =====================================================
        Contact Section One
        =====================================================
        --> */}
      <div className="contact-section-six mt-160 mb-60 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="form-style-three light-bg ps-0 sm-pb-80">
                <FromStyleThree />
              </div>
              {/* <!-- /.form-style-three --> */}
            </div>
            {/* End .col */}
            <div className="col-lg-5 col-md-6 ms-auto">
              <Address />
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* End .container */}

        <div className="map-area-one mt-150 lg-mt-100">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                title="map"
                className="gmap_iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359537.0372323226!2d-75.8002569!3d45.25015655000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1660284753489!5m2!1sen!2sbd"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.contact-section-one --> */}

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

export default ContactV3;
