import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/vCamp_14.png";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <div className="d-lg-flex align-items-center justify-content-between text-center">
      <div className="logo pb-30 order-lg-1">
        <Link to="/">
          <img src={logo} alt="brand" width="90" />
        </Link>
      </div>
      {/* End .logo */}

      <p className="d-flex align-items-center justify-content-center mail-info theme-mb-0 pb-30 order-lg-3">
        <img
          src={require("../../assets/images/icon/icon_112.svg").default}
          alt=""
          className="me-2"
        />
        <a href="mailto:askreza@vcamp.com">askreza@vcamp.com</a>
      </p>
      {/* End copyright */}

      <ul className="style-none d-flex align-items-center justify-content-center social-icon pb-30 order-lg-2">
        <FooterSocial />
      </ul>
      {/* End social */}
    </div>
  );
};

export default Footer;
