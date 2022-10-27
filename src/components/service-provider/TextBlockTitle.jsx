import React from "react";
import { Link } from "react-router-dom";

const TextBlockTitle = () => {
  return (
    <>
      <div className="col-lg-5 col-md-6 col-sm-8" data-aos="fade-right">
        <div className="title-style-four">
          <h2 className="title">Our included service.</h2>
        </div>
      </div>
      {/* End .col */}

      <div
        className="col-md-6 col-sm-4 me-auto text-sm-end text-start"
        data-aos="fade-left"
      >
        <Link
          to="/service-v1"
          className="theme-btn-five position-relative xs-mt-30"
        >
          See all Services
        </Link>
      </div>
    </>
  );
};

export default TextBlockTitle;
