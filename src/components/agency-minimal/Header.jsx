import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      className={`theme-main-menu sticky-menu theme-menu-three ${
        navbar ? "fixed" : ""
      } `}
    >
      <div className="inner-content">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img
                src={require("../../assets/images/logo/vCamp_02.svg").default}
                alt="brand"
                width="127"
              />
            </Link>
          </div>
          <div className="right-widget d-flex align-items-center">
            <ul className="d-flex lang-select style-none">
              <li>
                <a href="#">En.</a>
              </li>
              <li>
                <a href="#">Ru</a>
              </li>
            </ul>
            <button
              className="sidebar-nav-button"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <img
                src={require("../../assets/images/icon/icon_36.svg").default}
                alt="icon"
              />
            </button>
          </div>
          {/* <!-- /.right-widget --> */}
        </div>
      </div>
      {/* <!-- /.inner-content --> */}
    </header>
    //   <!-- /.theme-main-menu -->
  );
};

export default Header;
