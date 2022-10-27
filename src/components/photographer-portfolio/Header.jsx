import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/vCamp_10.png";

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
      className={`theme-main-menu sticky-menu theme-menu-one dark-bg ${
        navbar ? "fixed" : ""
      } `}
    >
      <div className="inner-content">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="brand" width="37" />
            </Link>
          </div>
          {/* End .logo */}

          <div className="right-widget d-flex align-items-center">
            <button
              className="sidebar-nav-button"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <img
                src={require("../../assets/images/icon/icon_70.svg").default}
                alt="icon"
              />
            </button>
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
