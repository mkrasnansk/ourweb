import React from "react";
import { Link } from "react-router-dom";

const FancyBanner = () => {
  return (
    <>
      <div className="col-md-6">
        <div className="title-style-five white-vr">
          <h2 className="title">
            Join our <br />
            team be a great skills elite.
          </h2>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-5 col-md-6 ms-auto">
        <p className="sm-pt-20">
          We’re a team of creatives who are excited about unique ideas & help.
        </p>
        <Link to="/contact-v2" className="theme-btn-one ripple-btn">
          Send you CV{" "}
          <img
            src={require("../../assets/images/icon/icon_42.svg").default}
            alt="icon"
          />
        </Link>
      </div>
    </>
  );
};

export default FancyBanner;
