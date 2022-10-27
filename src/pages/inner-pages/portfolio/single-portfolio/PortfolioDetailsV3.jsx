import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import { Link } from "react-router-dom";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";

// images

import img1 from "../../../../assets/images/gallery/img_104.jpg";
import img2 from "../../../../assets/images/gallery/img_105.jpg";
import img3 from "../../../../assets/images/gallery/img_106.jpg";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioDetailsV3 = () => {
  const popupGallery = [
    {
      id: 1,
      img: img1,
      width: 690,
      height: 480,
    },
    {
      id: 2,
      img: img2,
      width: 690,
      height: 480,
    },
    {
      id: 3,
      img: img3,
      width: 690,
      height: 480,
    },
  ];

  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio Details V3" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Sidebar Nav
      ============================================== 
        --> */}
      <Sidebar />

      {/* <!--
        =============================================
        Theme Main Menu
        ==============================================
        --> */}
      <Header />

      {/* <!--
			=====================================================
				Portfolio Details One
			=====================================================
			--> */}
      <div className="pr-details-one border-top mt-130 md-mt-90 pt-110 mb-150 lg-mb-100 md-pt-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-10 col-lg-8 m-auto">
              <div className="title-style-six text-center">
                <div className="upper-title">Redesign, Branding</div>
                <h2 className="title">
                  vCamp- Landing page design with Branding
                </h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <ul className="d-flex justify-content-center social-icon style-none mt-40">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>

          <div className="mt-130 lg-mt-60 main-content position-relative">
            <div className="row">
              <div className="col-xl-5 col-lg-6 ms-auto order-lg-last">
                <div className="d-flex flex-column">
                  <div className="project-info border-top pt-75 lg-pt-50 order-lg-2 md-pb-30">
                    <div className="row gx-xxl-5">
                      <div className="col-sm-6 mb-35">
                        <div className="pt-title">DATe</div>
                        <div className="pt-text">23 July, 2020</div>
                      </div>

                      <div className="col-sm-6 mb-35">
                        <div className="pt-title">Client</div>
                        <div className="pt-text">
                          17 Riverwood Drive, Central Califirnia, USA
                        </div>
                      </div>

                      <div className="col-sm-6 mb-35">
                        <div className="pt-title">Project Type</div>
                        <div className="pt-text">
                          Branding, Interface Design & User Exprience
                        </div>
                      </div>

                      <div className="col-sm-6 mb-35">
                        <div className="pt-title">Duration</div>
                        <div className="pt-text">2 Months 18 Days</div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /.project-info --> */}

                  <div className="text-wrapper pb-65 lg-pb-50 order-lg-1">
                    <h4>Overviwe</h4>
                    <p>
                      Commonly used in the graphic, prit quis due & publishing
                      indust for previewing lightly visual mockups.
                    </p>
                    <h4>Task</h4>
                    <p className="pb-20">
                      We’ve created a unique visual system and strategy across
                      the wide existing spectrum of visible mobile applications
                      & found yourself in a wide, straggling with. Rebuild a
                      unified visual system for the advertising agency, made of
                      steel which can change the world in a while.
                    </p>
                    <a
                      href="https://themeforest.net/user/ib-themes"
                      className="theme-btn-one ripple-btn"
                      target="_blank"
                    >
                      Live Link{" "}
                      <img
                        src={
                          require("../../../../assets/images/icon/icon_03.svg")
                            .default
                        }
                        alt="icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* End .col */}

              <Gallery>
                <div className="col-sm-6">
                  {popupGallery.map((item) => (
                    <div
                      className="img-meta mb-55 lg-mb-30"
                      data-aos={item.animation}
                      key={item.id}
                    >
                      <Item
                        original={item.img}
                        thumbnail={item.img}
                        width={item.width}
                        height={item.height}
                      >
                        {({ ref, open }) => (
                          <img
                            className="w-100 cursor-pointer"
                            ref={ref}
                            onClick={open}
                            src={item.img}
                            alt="popup"
                            title="Click for large view"
                          />
                        )}
                      </Item>
                    </div>
                  ))}
                </div>
              </Gallery>
            </div>

            <div className="pr-pagination-one ps-absolute lg-mt-40">
              <ul className="style-none d-flex justify-content-between">
                <li className="ms-auto">
                  <a href="#">
                    <span className="d-flex align-items-end">
                      <span className="me-3">
                        <span className="pr-dir d-block">Next</span>
                        <span className="pr-name">Rentloop Branding</span>
                      </span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- /.pr-pagination-one --> */}
          </div>
        </div>
      </div>
      {/* <!-- /.pr-details-one --> */}

      {/* <!--
			=====================================================
				Vcamp Fancy Banner Seven
			=====================================================
			--> */}
      <div className="fancy-banner-seven">
        <div className="container">
          <div className="inner-content position-relative">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-9 text-center text-lg-start">
                <h3 className="font-recoleta">Have any project in mind?</h3>
                <p>
                  Call <a href="tel:+6494461709">+88 2734 677 12</a> or email us
                  at <a href="mailto:someone@example.com">support@vcamp.com</a>
                </p>
              </div>
              {/* End .col */}
              <div className="col-xl-4 col-lg-3 text-center text-lg-end">
                <Link to="/contact-v1" className="theme-btn-four ripple-btn">
                  Let’s Discuss
                </Link>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-banner-seven --> */}

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <footer className="vcamp-footer-two pt-150 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      require("../../../../assets/images/logo/vCamp_01.svg")
                        .default
                    }
                    alt="brand"
                  />
                </Link>
              </div>
            </div>
            {/* End .col */}

            <FooterMenuListTwo />
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="bottom-footer">
            <CopyrightFooter />
          </div>
        </div>
        {/* End .container */}
      </footer>
      {/* <!-- /.vcamp-footer-two --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default PortfolioDetailsV3;
