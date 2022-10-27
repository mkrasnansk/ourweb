import React from "react";

const HeroContent = () => {
  return (
    <>
      <div className="text-wrapper position-relative">
        <h1 className="hero-heading font-zen">Qulaity, Experience & Brand.</h1>
        <p className="text-lg pt-15 pb-40 md-pb-30">
          We've done it carefully and simply. Combined with the ingredients
          makes for beautiful landings.
        </p>
        <button
          type="button"
          className="theme-btn-sixteen"
          data-bs-toggle="modal"
          data-bs-target="#contactModal"
        >
          Get Started
        </button>
        <div className="demo-text font-zen">
          We’r trusted parnter of giant google
        </div>
      </div>
      {/* End .text-wrapper */}
    </>
  );
};

export default HeroContent;
