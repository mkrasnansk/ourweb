import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import Address from "../../../../components/business/Address";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import ContactForm from "../../../../components/common/form/ContactForm";
import Seo from "../../../../components/common/seo/Seo";
import { Link } from "react-router-dom";

const ContactV1 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Contact V1" />
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
          <h2 className="page-title font-recoleta">Get in Touch</h2>
          <p>Get our all info and also can message us directly from here</p>
        </div>
      </div>
      {/* <!-- /.inside-hero-one --> */}

      {/* <!--
        =====================================================
        Contact Section One
        =====================================================
        --> */}
      <div className="contact-section-four mt-120 lg-mt-100">
        <div className="container">
          <div className="row">
            <Address />
          </div>
        </div>
        {/* End .container */}
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <ContactForm />
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="map-area-one mt-150 mb-90 lg-mt-100 lg-mb-50">
          <div className="box-layout">
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

export default ContactV1;
