import React from "react";
import { Link } from "react-router-dom";
import shapeImg from "../../../../assets/images/shape/shape_12.svg";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import ContactMeta from "../../../../components/common/contact/ContactMeta";
import FromStyleOne from "../../../../components/common/contact/FromStyleOne";
import FromStyleThree from "../../../../components/common/contact/FromStyleThree";
import Address from "../../../../components/common/address/Address";
import ContactForm from "../../../../components/common/form/ContactForm";
import Seo from "../../../../components/common/seo/Seo";

const UiContact = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Ui Contact" />
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
      <div className="vcamp-text-block-one pt-180 md-pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-8 m-auto">
              <div className="text-wrapper text-center ps-0">
                <div className="title-style-two">
                  <h3 className="title">
                    Contact <span>Form</span>
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
      {/* <!-- /.vcamp-text-block-one --> */}

      {/* <!--
			=====================================================
				Contact Section Two
			=====================================================
			--> */}
      <div className="contact-section-two light-bg pt-130 pb-170 lg-pt-100 lg-pb-100">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 me-auto">
                <ContactMeta />
                {/* <!-- /.contact-meta-one --> */}
              </div>
              {/* End .col */}

              <div className="col-lg-6">
                <div className="form-style-one with-border md-mt-40">
                  <FromStyleOne />
                  {/* <!-- /.form-style-one --> */}
                  <img
                    src={shapeImg}
                    alt="shape"
                    className="shapes shape-one"
                  />
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
      {/* <!-- /.contact-section-two --> */}

      {/* <!--
        =====================================================
        Contact Section Three
        =====================================================
        --> */}
      <div className="contact-section-three image-bg pt-150 pb-150 lg-pt-100 lg-pb-100">
        <div className="container">
          <div className="bg-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 order-lg-last ms-auto">
                <ContactMeta />
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="form-style-two md-mt-40">
                  <FromStyleOne />
                </div>
                {/* <!-- /.form-style-two --> */}
              </div>
            </div>
          </div>
          {/* <!-- /.bg-wrapper --> */}
        </div>
      </div>
      {/* <!-- /.contact-section-three --> */}

      {/* <!--
        =====================================================
        Contact Section One
        =====================================================
        --> */}
      <div className="contact-section-five">
        <div className="contact-meta ">
          <div className="row gx-0">
            <div className="col-xl-6 order-xl-last d-flex">
              <div className="form-wrapper dark-bg w-100">
                <div className="form-style-three">
                  <h3 className="form-title font-recoleta pb-30 lg-pb-20">
                    Send Message.
                  </h3>
                  <FromStyleThree className="theme-btn-four " />
                </div>
                {/* <!-- /.form-style-three --> */}
              </div>
              {/* <!-- /.form-wrapper --> */}
            </div>
            {/* End .col */}

            <div className="col-xl-6 order-xl-first d-flex">
              <div className="map-area-two h-100 w-100">
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
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* <!-- /.contact-meta --> */}
      </div>
      {/* <!-- /.contact-section-one --> */}

      {/* <!--
        =====================================================
        Contact Section One
        =====================================================
        --> */}
      <div className="contact-section-six mt-140 mb-120 lg-mt-120">
        <div className="container">
          <div className="title-style-two text-center pb-100 lg-pb-70">
            <h2 className="title">Get in Touch</h2>
            <p className="pt-10">
              Get our all info and also can message us directly from here
            </p>
          </div>
          {/* End .title */}

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
      </div>
      {/* <!-- /.contact-section-one --> */}

      {/* <!--
        =====================================================
        Contact Section One
        =====================================================
        --> */}
      <div className="contact-section-four pt-100 pb-120 border-top">
        <div className="container">
          <div className="title-style-two text-center">
            <h2 className="title">Get in Touch</h2>
            <p className="pt-10">
              Get our all info and also can message us directly from here
            </p>
          </div>
          {/* End .title */}

          <div className="row">
            <div className="col-xl-11 m-auto">
              <ContactForm className="m0 border0" />
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>
      {/* <!-- /.contact-section-one --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default UiContact;
