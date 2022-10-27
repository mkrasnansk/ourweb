import React from "react";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import { Gallery, Item } from "react-photoswipe-gallery";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";

// images
import imgLarge from "../../../../assets/images/media/img_54.jpg";
import img1 from "../../../../assets/images/media/img_56.jpg";
import img2 from "../../../../assets/images/media/img_57.jpg";
import img3 from "../../../../assets/images/media/img_58.jpg";
import Seo from "../../../../components/common/seo/Seo";
import { Link } from "react-router-dom";

const PortfolioDetailsV1 = () => {
  const popupGallery = [
    {
      id: 1,
      img: img1,
      animation: "fade-right",
      width: 460,
      height: 400,
    },
    {
      id: 2,
      img: img2,
      animation: "fade-left",
      width: 460,
      height: 400,
    },
  ];
  return (
    <div className="main-page-wrapper">
      <Seo title="Portfolio Details V1" />
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
        =============================================
        Inside Page Banner
        ============================================== 
		--> */}
      <div className="inside-hero-four bg-color hero-spacing">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-md-10 m-auto">
              <h6>Case study</h6>
              <h2 className="page-title font-recoleta">
                Building <span>slack</span> with decoupled WordPress & Gatsby
              </h2>
              <p>
                vCamp delivered blazing fast performance, striking visual design
                & soludtion
              </p>
            </div>
          </div>
          {/* End .row */}

          <img
            src={imgLarge}
            alt="portfolio details banner"
            className="screen"
          />
        </div>
      </div>
      {/* <!-- /.inside-hero-four --> */}

      {/* <!--
        =====================================================
            Case Study Details
        =====================================================
        --> */}
      <div className="case-details-one">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-10 m-auto">
              <h6 className="sub-heading">overview</h6>
              <h3 className="title font-recoleta">About Rodpen</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullaum laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit volupta velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum magna quis
                nostured.
              </p>
              <div className="border-block">
                <h6 className="sub-heading">Project Process</h6>
                <h3 className="title font-recoleta">
                  Find out the design <br /> solution.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <p>
                  Enim eu turpis egestas pretium aenean pharetra. Dui accumsan
                  sit amet nulla facilisi morbi tempus iaculis. Eu ultrices
                  vitae auctor eu augue. Sed turpis tincidunt id aliquet risus
                  Purus in massa tempor nec feugiat nisl pretium fusce. Feugiat
                  vivamus at augue eget arcu dictum. Gravida quis blandit turpis
                  cursus in hac habitasse platea dictumst.{" "}
                </p>
                <Gallery>
                  <div className="row">
                    {popupGallery.map((item) => (
                      <div
                        className="col-sm-6"
                        data-aos={item.animation}
                        key={item.id}
                      >
                        <div className="img-meta">
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
                      </div>
                    ))}
                  </div>
                </Gallery>

                <h3 className="title font-recoleta">Finalize the project</h3>
                <p>
                  Id nibh tortor id aliquet lectus proin nibh nisl condimentum.
                  Habitant morbi tristique senectus et. Lectus urna duis
                  convallis convallis tellus id interdum velit laoreet.
                </p>
                <p>
                  Enim eu turpis egestas pretium aenean pharetra. Dui accumsan
                  sit amet nulla facilisi mor tempu iaculis. Eu ultrices vitae
                  auctor eu augue. Sed turpis tincidunt id aliquet risus Purus
                  in massa tempor nec feugiat nisl pretium fusce. Feugiat
                  vivamus at augue eget arcu dictum. Gravida quis blandit turpis
                  cursus in hac habitasse platea dictumst.{" "}
                </p>
              </div>
              {/* <!-- /.border-block --> */}
              <h6 className="sub-heading">Result</h6>
              <h3 className="title font-recoleta">Final Result</h3>
              <p>
                Id nibh tortor id aliquet lectus proin nibh nisl condimentum.
                Habitant morbi tristique senectus et. Lectus urna duis convallis
                convallis tellus id interdum velit laoreet.
              </p>
              <div className="img-meta" data-aos="fade-up">
                <Gallery>
                  <Item
                    original={img3}
                    thumbnail={img3}
                    width="960"
                    height="510"
                  >
                    {({ ref, open }) => (
                      <img
                        className="cursor-pointer w-100"
                        ref={ref}
                        onClick={open}
                        src={img3}
                        alt="popup"
                        title="Click for large view"
                      />
                    )}
                  </Item>
                </Gallery>
              </div>
              <p>
                Content creators and human resources personnel are able to
                seamlessly update the website through graphical interfaces, and
                the site simply rebuilds itself along with search engine indexes
                as the OpenWeb team continues to create.
              </p>
              <p>
                Enim eu turpis egestas pretium aenean pharetra. Dui accumsan sit
                amet nulla facilisi mor tempu iaculis. Eu ultrices vitae auctor
                eu augue. Sed turpis tincidunt id aliquet risus Purus in massa
                tempor nec feugiat nisl pretium fusce. Feugiat vivamus at augue
                eget arcu dictum. Gravida quis blandit turpis cursus in hac
                habitasse platea dictumst.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.case-details-one --> */}

      {/* <!--
        =====================================================
         Footer
        =====================================================
        --> */}
      <div className="vcamp-footer-one box-layout">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="subscribe-area">
                  <FooterSubscribe />
                </div>
                {/* <!-- /.subscribe-area --> */}

                <div className="top-footer mt-90 md-mt-70">
                  <div className="row">
                    <div className="col-lg-4 col-md-2 d-flex justify-content-between flex-column">
                      <div className="logo">
                        <Link to="/">
                          <img
                            src={
                              require("../../../../assets/images/logo/vCamp_01.svg")
                                .default
                            }
                            alt="brand"
                            style={{ width: "127px" }}
                          />
                        </Link>
                      </div>
                    </div>
                    {/* End .col */}

                    <FooterMenuList />
                    {/* End Footer Menu list */}
                  </div>
                </div>
                {/* <!-- /.top-footer --> */}
              </div>
            </div>
          </div>
          {/* End .container */}
          <img src={footerImg} alt="shape" className="shapes illustration" />
        </div>
        {/* <!-- /.bg-wrapper --> */}

        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="bottom-footer">
                <CopyrightFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-footer-one --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default PortfolioDetailsV1;
