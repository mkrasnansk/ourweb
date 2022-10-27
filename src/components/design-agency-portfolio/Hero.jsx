import React from "react";
import Social from "../photographer-portfolio/footer/Social";

const Hero = () => {
  return (
    <div className="banner-intro position-relative">
      <div className="scroll-bar"></div>
      <div className="social-elemnet">
        <ul className="style-none d-flex align-items-center">
          <Social />
        </ul>
      </div>
      {/* End .social-element */}

      <div className="container">
        <div className="text-wrapper position-relative">
          <h1 className="hero-heading font-recoleta mb-65 lg-mb-30 pe-xxl-4">
            <span>Design</span>, Products, Brand In-House{" "}
            <span>development</span> & More.
          </h1>
          <div className="text-start text-lg-end">
            <div className="d-inline-block">
              <div className="ct-text text-start">Contact me for hire </div>
              <div className="mt-5">
                <a
                  href="mailto:ibthemes21@gmail.com"
                  className="mail-info tran3s"
                >
                  hey@vcampdesign.com
                </a>
              </div>
            </div>
          </div>
          <img
            src={require("../../assets/images/shape/shape_75.svg").default}
            alt=""
            className="shape-one"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
