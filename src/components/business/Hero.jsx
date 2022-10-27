import React from "react";
import { Link } from "react-router-dom";
import SubscribeForm from "../common/form/SubscribeForm";
import Partners from "./Partners";
import img1 from "../../assets/images/assets/ils_01.png";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <h1 className="hero-heading font-recoleta theme-mb-0">
              We’r the{" "}
              <span className="d-inline-block position-relative">
                Word<em>Press</em>
              </span>{" "}
              guru.
            </h1>
            <p className="hero-sub-heading text-lg">
              We are helping client to create WordPress websites with our
              talented expert.
            </p>
            <SubscribeForm />
            <p className="term-text theme-mb-0">
              Already a member? <Link to="/sign-in">Sign in.</Link>
            </p>
          </div>
          {/* End .col */}
        </div>
      </div>
      {/* End container */}

      <div className="illustration-container">
        <img src={img1} alt="illustration" className="m-auto" />
      </div>
      {/* <!-- /.illustration-container --> */}

      <div className="partner-slider-one mt-150 md-mt-80">
        <div className="container">
          <p className="text-center">
            Over <span>32K+</span> software businesses growing with vCamp.
          </p>
          <div className="partnerSliderOne">
            <Partners />
          </div>
        </div>
      </div>
      {/* <!-- /.partner-slider-one --> */}
    </>
  );
};

export default Hero;
