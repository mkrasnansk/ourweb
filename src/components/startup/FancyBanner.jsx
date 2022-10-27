import React from "react";
import { Link } from "react-router-dom";

const FancyBanner = () => {
  return (
    <>
      <div className="col-xxl-5 col-lg-6 col-md-8">
        <h2 className="title font-recoleta text-center text-md-start">
          Have any project in mind?
        </h2>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-md-4 d-flex justify-content-md-end justify-content-center">
        <Link to="/contact-v1" className="theme-btn-six ripple-btn sm-mt-30">
          Let’s Discuss
        </Link>
      </div>
      {/* End .col */}
    </>
  );
};

export default FancyBanner;
