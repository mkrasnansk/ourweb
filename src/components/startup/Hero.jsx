import React from "react";
import { Link } from "react-router-dom";
import SubscribeForm from "../common/form/SubscribeForm";
import Popup from "../common/video-popup/Popup";

const Hero = () => {
  return (
    <div className="row">
      <div className="col-lg-6 ms-auto">
        <Popup />
        <h1 className="hero-heading">We’r the WordPress guru.</h1>
        <p className="hero-sub-heading text-lg">
          We are helping client to create WordPress websites with our talented
          expert.
        </p>
        <SubscribeForm />
        <p className="term-text">
          Already a member? <Link to="/sign-in">Sign in.</Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
