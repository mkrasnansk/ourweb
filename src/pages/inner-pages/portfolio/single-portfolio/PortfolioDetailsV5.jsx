import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import FancyBanner from "../../../../components/designer-portfolio/FancyBanner";
import FooterThree from "../../../../components/common/footer/FooterThree";
import PopupThree from "../../../../components/common/video-popup/PopupThree";

// images
import img1 from "../../../../assets/images/gallery/img_47.jpg";
import img2 from "../../../../assets/images/gallery/img_48.jpg";
import img3 from "../../../../assets/images/gallery/img_49.jpg";
import Seo from "../../../../components/common/seo/Seo";

const PortfolioDetailsV5 = () => {
  const popupGallery = [
    {
      id: 1,
      img: img2,
      width: 600,
      height: 580,
    },
    {
      id: 2,
      img: img3,
      width: 600,
      height: 580,
    },
  ];

  return (
    <div className="main-page-wrapper ">
      <Seo title="Portfolio Details V5" />
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
      <div className="pr-details-one border-top mt-130 md-mt-90 pt-110 md-pt-80 mb-170 lg-mb-100">
        <div className="container">
          <div className="wrapper ps-xxl-4 pe-xxl-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="title-style-ten">
                  <div className="upper-title">Redesign, Branding</div>
                  <h2 className="title">
                    vCamp website page design with Branding
                  </h2>
                </div>
                <div className="text-wrapper pt-35">
                  <p>
                    We’ve created a unique visual system and strategy across the
                    wide existing spectrum of visible mobile applications &
                    found yourself in a wide, straggling with.{" "}
                  </p>
                </div>
              </div>
              {/* End .col */}

              <div className="col-lg-6">
                <div className="project-info ps-xl-5">
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

                  <ul className="d-flex social-icon-two style-none mt-20">
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest"></i>
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
                </div>
                {/* <!-- /.project-info --> */}
              </div>
              {/* End .col */}
            </div>
            {/* End row */}

            <div className="portfolio-gallery-four pt-40">
              <div className="row">
                <div className="col-12">
                  <div className="img-meta mb-50 lg-mb-30">
                    <div className="img-holder">
                      <img
                        src={img1}
                        alt="img"
                        className="img-meta w-100 tran6s"
                      />
                      <PopupThree />
                    </div>
                  </div>
                  {/* <!-- /.img-meta --> */}
                </div>

                <Gallery>
                  {popupGallery.map((item) => (
                    <div className="col-sm-6" key={item.id}>
                      <div className="img-meta mb-55 lg-mb-30">
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
                      </div>{" "}
                    </div>
                  ))}
                </Gallery>
              </div>
            </div>
            {/* <!-- /.portfolio-gallery-four --> */}

            <div className="pr-pagination-one mt-30">
              <ul className="style-none d-flex justify-content-between">
                <li>
                  <a href="#">
                    <span className="d-flex align-items-end">
                      <i className="bi bi-arrow-left"></i>
                      <span className="ms-3">
                        <span className="pr-dir d-block">Previous</span>
                        <span className="pr-name">Uber App Redesign</span>
                      </span>
                    </span>
                  </a>
                </li>
                <li>
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
          {/* <!-- /.wrapper --> */}
        </div>
      </div>
      {/* <!-- /.pr-details-one --> */}

      {/* <!--
			=====================================================
				Vcamp Fancy Banner Nine
			=====================================================
			--> */}
      <div className="fancy-banner-nine pb-50">
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
      <div className="vcamp-footer-four">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-xxl-10 m-auto">
                <FooterThree />
              </div>
            </div>
          </div>
          {/* <!-- /.inner-content --> */}
        </div>
      </div>
      {/* <!-- /.vcamp-footer-four --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default PortfolioDetailsV5;
