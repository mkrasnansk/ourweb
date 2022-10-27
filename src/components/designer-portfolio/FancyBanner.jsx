import React from "react";
import { Link } from "react-router-dom";

const FancyBanner = () => {
  return (
    <div className="inner-content position-relative">
      <img
        src={require("../../assets/images/shape/shape_71.svg").default}
        alt="shape"
        className="shapes shape-one"
      />
      <div className="row">
        <div className="col-md-11 m-auto">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-7 col-md-9">
              <h2 className="title font-recoleta text-center text-md-start">
                Any <span>project</span> in mind? Let’s chat.
              </h2>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-3 d-flex justify-content-md-end justify-content-center">
              <Link
                to="/contact-v1"
                className="arrow-btn  ripple-btn tran3s sm-mt-30"
              >
                <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBanner;
