import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div className="row">
      <div className="col-xxl-11 m-auto" data-aos="fade-up">
        <div className="title-style-eleven text-center">
          <div className="upper-title pb-50 lg-pb-20">CONTACT US</div>
          <h2 className="title">
            Work inquiry, Job oportunities? Send Message.
          </h2>
        </div>
        {/* End .title  */}

        <Link
          to="/contact-v2"
          className="arrow d-flex align-items-center justify-content-center"
        >
          <img
            src={require("../../../assets/images/icon/icon_105.svg").default}
            alt="icon"
          />
        </Link>
      </div>
    </div>
  );
};

export default FooterTop;
