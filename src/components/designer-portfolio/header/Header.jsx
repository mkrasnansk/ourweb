import React, { useState } from "react";
import HeaderModal from "./HeaderModal";
import logo from "../../../assets/images/logo/vCamp_13.png";
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
    <>
      <header
        className={`theme-main-menu sticky-menu theme-menu-one ${
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
            {/* End logo */}

            <div className="right-widget d-flex align-items-center">
              <button
                className="contact-fancy-btn"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                <em>Contact</em> <span>Me</span>{" "}
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
            {/* <!-- /.right-widget --> */}
          </div>
        </div>
        {/* <!-- /.inner-content --> */}
      </header>
      {/* <!-- /.theme-main-menu --> */}

      <div
        className="modal fade"
        id="contactModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <HeaderModal />
        </div>
      </div>
      {/* <!-- /.modal-dialog --> */}
    </>
  );
};

export default Header;
