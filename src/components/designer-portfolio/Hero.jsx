import React from "react";
import avatar from "../../assets/images/media/img_121.png";
import sticker from "../../assets/images/assets/sticker_03.png";
import logo from "../../assets/images/logo/logo-24.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="col-xl-9 col-lg-7 col-md-8">
        <div className="text-wrapper pt-70 md-pt-40 position-relative">
          <h1 className="hero-heading font-recoleta mb-55 lg-mb-30">
            Building digital products, brands & expereince
          </h1>
          <div className="ct-text">Contact me for hire </div>
          <div className="mt-5 mb-80 lg-mb-40">
            <a href="mailto:ibthemes21.com" className="mail-info tran3s">
              hey@vcampdesign.com
            </a>
          </div>
          <a href="#" className="theme-btn-fourteen">
            <i className="bi bi-arrow-up-right"></i>
          </a>
          <div className="avatar-holder d-none d-md-block">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-3 col-lg-5 col-md-4">
        <div className="d-flex flex-column align-items-lg-end">
          <img
            src={sticker}
            alt="sticker"
            className="brand-logo d-none d-md-block"
          />
          <div className="feature-project mt-130 lg-mt-60" />
          <div className="ft-tag">Featured project</div>
          <h6 className="ft-title">
            <Link to="/portfolio-details-v5">Cloud App Design.</Link>
          </h6>
          <img src={logo} alt="brand" className="logo" />
          <Link to="/portfolio-details-v5" className="exp-btn">
            Explore
          </Link>
        </div>
        {/* <!-- /.feature-project --> */}
      </div>
    </>
  );
};

export default Hero;
