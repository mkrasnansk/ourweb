import React from "react";
import CopyrightSocial from "../../common/footer/CopyrightSocial";
import Copyright from "./Copyright";
import FooterAddress from "./FooterAddress";
import FooterMenuList from "./FooterMenuList";

const Footer = () => {
  return (
    <footer className="vcamp-footer-seven">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-3 mb-40">
            <h2 className="intro font-zen">
              vCamp <br />
              Say <span>Hi to All!</span>
            </h2>
            <ul className="d-flex social-icon style-none">
              <CopyrightSocial />
            </ul>
          </div>
          <FooterMenuList />
          <div className="col-xxl-4 col-xl-3 col-lg-4 col-md-5 mb-40">
            <FooterAddress />
            {/* <!-- /.address --> */}
          </div>
        </div>
      </div>
      <div className="container">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
