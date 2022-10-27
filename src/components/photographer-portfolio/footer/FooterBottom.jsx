import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/vCamp_10.png";
import Social from "./Social";

const FooterBottom = () => {
  return (
    <div className="row align-items-center">
      <div className="col-sm-4 order-sm-0 mb-15">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="brand" width="37" />
          </Link>
        </div>
      </div>
      {/* End col */}

      <div className="col-sm-4 order-sm-2 mb-15">
        <ul className="d-flex justify-content-center justify-content-sm-end style-none social-site">
          <Social />
        </ul>
      </div>
      {/* End .col */}

      <div className="col-sm-4 order-sm-1 mb-15">
        <p className="text-center m0">
          Made with love{" "}
          <a
            href="https://themeforest.net/user/ib-themes"
            target="_blank"
            rel="noopener noreferrer"
          >
            ib-themes
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
