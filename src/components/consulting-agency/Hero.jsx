import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/media/img_69.png";

const Hero = () => {
  return (
    <div className="banner-content h-100 d-md-flex align-items-center justify-content-between">
      <div className="text-wrapper">
        <h1 className="hero-heading">Boston Consulting Group.</h1>
        <p className="hero-sub-heading text-lg">
          We are helping client to create WordPress websites with our talented
          expert.
        </p>
        <Link to="/contact-v3" className="theme-btn-eleven ripple-btn">
          Consult with an exprt now!
        </Link>
        <p className="term-text">
          Already a member? <Link to="/sign-in">Sign in.</Link>
        </p>
      </div>
      {/* <!-- /.text-wrapper --> */}

      <div className="img-wrapper position-relative">
        <img src={img1} alt="media" />
      </div>
      {/* End .img-wrapper */}
    </div>
  );
};

export default Hero;
