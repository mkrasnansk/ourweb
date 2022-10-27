import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FancyBanner from "../../../../components/designer-portfolio/FancyBanner";

// images
import imgLarge from "../../../../assets/images/gallery/img_110.jpg";
import img1 from "../../../../assets/images/media/img_56.jpg";
import img2 from "../../../../assets/images/media/img_57.jpg";
import img3 from "../../../../assets/images/media/img_58.jpg";
import { Link } from "react-router-dom";
import FooterMenuListTwo from "../../../../components/common/footer/FooterMenuListTwo";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioDetailsV2 = () => {
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
    <div className="main-page-wrapper dark-bg">
      <Seo title="Portfolio Details V2" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Sidebar Nav
      ============================================== 
        --> */}
      <Sidebar className="dark-style" />

      {/* <!--
      =============================================
      Theme Main Menu
      ==============================================
      --> */}
      <Header className="white-vr dark-bg dark-dropdown" />

      {/* <!-- 
        =============================================
        Inside Page Banner
        ============================================== 
		 --> */}
      <div className="inside-hero-four dark-bg text-center border-top mt-140 md-mt-90">
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
      <div className="case-details-one dark-bg border-top">
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
				Vcamp Fancy Banner Nine
			=====================================================
			--> */}
      <div className="fancy-banner-nine dark-bg pb-20">
        <div className="container">
          <FancyBanner />
        </div>
      </div>
      {/* <!-- /.fancy-banner-nine --> */}

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <footer className="vcamp-footer-two dark-footer pt-150 lg-pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-2 mb-40">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      require("../../../../assets/images/logo/vCamp_03.svg")
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

export default PortfolioDetailsV2;
