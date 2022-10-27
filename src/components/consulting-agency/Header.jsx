import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../common/form/SearchForm";
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
      className={`theme-main-menu sticky-menu theme-menu-six ${
        navbar ? "fixed" : ""
      } `}
    >
      <div className="inner-content">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img
                src={require("../../assets/images/logo/vCamp_09.svg").default}
                alt="brand"
                style={{ height: "40px" }}
              />
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

            <div className="collapse navbar-collapse" id="navbarNav">
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
            <SearchForm />
            {/* End search-form */}

            <Link to="sign-in" className="d-flex align-items-center login-btn">
              <img
                src={require("../../assets/images/icon/icon_01.svg").default}
                alt="icon"
              />
              <span>login</span>
            </Link>

            <button
              className="sidebar-nav-button d-none d-lg-block"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <img
                src={require("../../assets/images/icon/icon_02.svg").default}
                alt="icon"
              />
            </button>
            {/* End .sidebar-nav-button */}
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
