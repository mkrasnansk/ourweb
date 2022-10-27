import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";

// portfolio image
import img1 from "../../assets/images/gallery/img_28.jpg";
import img2 from "../../assets/images/gallery/img_29.jpg";
import img3 from "../../assets/images/gallery/img_30.jpg";
import img4 from "../../assets/images/gallery/img_32.jpg";
import img5 from "../../assets/images/gallery/img_34.jpg";
import img6 from "../../assets/images/gallery/img_31.jpg";
import img7 from "../../assets/images/gallery/img_33.jpg";
import img8 from "../../assets/images/gallery/img_36.jpg";
import img9 from "../../assets/images/gallery/img_35.jpg";
import { Link } from "react-router-dom";

const PortfolioMasonry = () => {
  const breakpointColumnsObj = {
    default: 3,
    767: 1,
  };

  const tabList = ["All", "Development", "Plugin", "BRANDING", "Customization"];
  const tabListContent = [
    {
      id: 1,
      porftoliItems: [
        {
          img: img1,
          title: "Anaylsis Application.",
          meta: "PRINT",
          width: 636,
          height: 480,
        },
        {
          img: img2,
          title: "Weather App.",
          meta: "MOBILE",
          width: 636,
          height: 675,
        },
        {
          img: img3,
          title: "e-Commerce App.",
          meta: "BRANDING",
          width: 636,
          height: 420,
        },
        {
          img: img4,
          title: "Anaylsis Application.",
          meta: "UI/UX",
          width: 636,
          height: 510,
        },
        {
          img: img5,
          title: "Anaylsis Application.",
          meta: "WEB DESIGN",
          width: 636,
          height: 420,
        },
        {
          img: img6,
          title: "Product Branding",
          meta: "ILLUSTRATION",
          width: 636,
          height: 675,
        },
        {
          img: img7,
          title: "The Organic Sac",
          meta: "BRANDING",
          width: 636,
          height: 675,
        },
        {
          img: img8,
          title: "Efficient Team Mobile",
          meta: "MOBILE APP",
          width: 636,
          height: 675,
        },
        {
          img: img9,
          title: "Weather App.",
          meta: "MOBILE",
          width: 636,
          height: 510,
        },
      ],
    },
    {
      id: 2,
      porftoliItems: [
        {
          img: img2,
          title: "Weather App.",
          meta: "MOBILE",
          width: 636,
          height: 675,
        },
        {
          img: img4,
          title: "Anaylsis Application.",
          meta: "UI/UX",
          width: 636,
          height: 510,
        },
        {
          img: img5,
          title: "Anaylsis Application.",
          meta: "WEB DESIGN",
          width: 636,
          height: 420,
        },
      ],
    },
    {
      id: 3,
      porftoliItems: [
        {
          img: img1,
          title: "Anaylsis Application.",
          meta: "PRINT",
          width: 636,
          height: 480,
        },
        {
          img: img3,
          title: "e-Commerce App.",
          meta: "BRANDING",
          width: 636,
          height: 420,
        },
        {
          img: img8,
          title: "Efficient Team Mobile",
          meta: "MOBILE APP",
          width: 636,
          height: 675,
        },
      ],
    },
    {
      id: 4,
      porftoliItems: [
        {
          img: img2,
          title: "Weather App.",
          meta: "MOBILE",
          width: 636,
          height: 675,
        },
        {
          img: img6,
          title: "Product Branding",
          meta: "ILLUSTRATION",
          width: 636,
          height: 675,
        },
        {
          img: img7,
          title: "The Organic Sac",
          meta: "BRANDING",
          width: 636,
          height: 675,
        },
      ],
    },
    {
      id: 5,
      porftoliItems: [
        {
          img: img1,
          title: "Anaylsis Application.",
          meta: "PRINT",
          width: 636,
          height: 480,
        },
        {
          img: img4,
          title: "Anaylsis Application.",
          meta: "UI/UX",
          width: 636,
          height: 510,
        },
        {
          img: img8,
          title: "Efficient Team Mobile",
          meta: "MOBILE APP",
          width: 636,
          height: 675,
        },
      ],
    },
  ];

  return (
    <>
      <Tabs>
        <TabList className="style-none text-center d-lg-flex justify-content-center isotop-menu-wrapper control-nav-seven pt-90 pb-75 lg-pb-50 xs-pt-50">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}

        <Gallery>
          {tabListContent.map((item) => (
            <TabPanel key={item.id}>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {item.porftoliItems.map((singleItem, i) => (
                  <div className="isotop-item" key={i} data-aos="fade-right">
                    <div className="gallery-item mb-60 lg-mb-50">
                      <div className="img-holder">
                        <img
                          src={singleItem.img}
                          alt="portfolio"
                          className="img-meta w-100 tran5s"
                        />
                        <div
                          className="cursor-pointer expend d-flex align-items-center justify-content-center tran3s"
                          title="Click for large view"
                        >
                          <Item
                            original={singleItem.img}
                            thumbnail={singleItem.img}
                            width={singleItem.width}
                            height={singleItem.height}
                          >
                            {({ ref, open }) => (
                              <i
                                ref={ref}
                                onClick={open}
                                className="bi bi-plus"
                              ></i>
                            )}
                          </Item>
                        </div>
                      </div>
                      <div className="caption pe-xl-3 pt-30 lg-pt-20">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <span className="tag">{singleItem.meta}</span>
                            <h6>
                              <Link
                                to="/portfolio-details-v5"
                                className="pj-title"
                              >
                                {singleItem.title}
                              </Link>
                            </h6>
                          </div>
                          <div>
                            <Link
                              to="portfolio-details-v5"
                              className="arrow tran3s"
                            >
                              <i className="bi bi-arrow-up-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /.caption --> */}
                    </div>
                    {/* <!-- /.gallery-item --> */}
                  </div>
                ))}
              </Masonry>
            </TabPanel>
          ))}
        </Gallery>
      </Tabs>
    </>
  );
};

export default PortfolioMasonry;
