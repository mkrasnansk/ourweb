import React, { useState } from "react";
import logo from "../../assets/images/logo/vCamp_12.png";
import { Link } from "react-router-dom";
import MegaMenuOne from "../common/header/mega-menu/MegaMenuOne";
import MobileMenuContent from "../common/header/mega-menu/MobileMenuContent";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-seven white-vr ${
        navbar ? "fixed" : ""
      } `}
    >
      <div className="inner-content">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="brand" width="127" />
            </Link>
          </div>
          {/* End .logo */}

          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler d-block d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
            {/* End navbar-toggler */}

            <div className="collapse dark-style navbar-collapse" id="navbarNav">
              <MegaMenuOne />
              {/* End MegaMenuOne */}
              <div className="mobile-content d-block d-lg-none">
                <MobileMenuContent />
                {/* <!-- /.mobile-content --> */}
              </div>
            </div>
            {/* End .collapse */}
          </nav>
          {/* End .navbar */}

          <div className="right-widget d-flex align-items-center">
            <Link to="/sign-in" className="d-flex align-items-center login-btn">
              <img
                src={require("../../assets/images/icon/icon_44.svg").default}
                alt="icon"
              />
              <span className="font-zen">login</span>
            </Link>
            <Link
              to="/sign-up"
              className="d-none d-lg-block sign-up-btn font-zen"
            >
              Sign Up
            </Link>
          </div>
          {/* <!-- /.right-widget --> */}
        </div>
      </div>
      {/* <!-- /.inner-content --> */}
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
