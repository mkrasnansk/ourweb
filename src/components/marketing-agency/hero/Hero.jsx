import React from "react";
import HeroContent from "./HeroContent";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <div className="container">
      <div className="row align-items-end justify-content-between">
        <div className="col-xxl-7 col-lg-6 col-md-8">
          <HeroContent />
        </div>
      </div>
      {/* End .row */}

      <div className="right-content-wrapper">
        <img
          className="circle-text shapes"
          src={require("../../../assets/images/shape/shape_73.svg").default}
          alt="shape"
        />
        <img
          className="circle-shape shapes"
          src={require("../../../assets/images/shape/shape_74.svg").default}
          alt="shape"
        />

        <div className="hero_slider_four">
          <HeroSlider />
        </div>
        {/* End hero_slider_four */}

        <div className="rating-box">
          <img
            src={require("../../../assets/images/shape/shape_72.svg").default}
            alt="shape"
          />
          <div className="rate font-zen">
            9.3 <br />
            <span>Rating</span>
          </div>
        </div>
        {/* <!-- /.rating-box --> */}
      </div>
      {/* <!-- /.right-content-wrapper --> */}
    </div>
  );
};

export default Hero;
