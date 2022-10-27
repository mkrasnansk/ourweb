import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="row justify-content-between align-items-center">
      <div className="col-lg-6">
        <h1 className="hero-heading font-recoleta md-pb-40">
          Provide Solution to your Business.
        </h1>
      </div>
      {/* End .col */}

      <div className="col-xl-5 col-lg-6">
        <h3 className="d-inline-block sub-heading">
          Hello, We’r vCamp <span className="d-inline-block"></span>
        </h3>
        <p className="hero-sub-heading">
          We helping enterprises to create great WordPress websites perfectly.
        </p>

        <ul className="button-group d-sm-flex align-items-center style-none">
          <li>
            <Link to="/contact-v3" className="mt-15 me-5 theme-btn-four">
              Let’s Talk
            </Link>
          </li>
          {/* End li */}

          <li>
            <Link
              to="/portfolio-v2"
              className="mt-15 case-study-button d-flex align-items-center"
            >
              <span>View Case Stidues</span>{" "}
              <img
                src={require("../../assets/images/icon/icon_37.svg").default}
                alt="icon"
                className="ms-3"
              />
            </Link>
          </li>
          {/* End li */}
        </ul>
        {/* List */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default HeroBanner;
