import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

// portfolio image
import img1 from "../../assets/images/gallery/img_78.jpg";
import img2 from "../../assets/images/gallery/img_79.jpg";
import img3 from "../../assets/images/gallery/img_80.jpg";
import img4 from "../../assets/images/gallery/img_81.jpg";
import img5 from "../../assets/images/gallery/img_82.jpg";
import img6 from "../../assets/images/gallery/img_83.jpg";
import img7 from "../../assets/images/gallery/img_84.jpg";
import img8 from "../../assets/images/gallery/img_85.jpg";
import img9 from "../../assets/images/gallery/img_86.jpg";

const Portfolio17 = () => {
  const tabList = ["All", "Development", "Plugin", "Branding", "Customization"];
  const tabListContent = [
    {
      id: 1,
      porftoliItems: [
        {
          img: img1,
          title: "Anaylsis Application.",
          meta: "PRINT",
          width: 650,
          height: 480,
        },
        {
          img: img2,
          title: "Weather App.",
          meta: "MOBILE",
          width: 650,
          height: 480,
        },
        {
          img: img3,
          title: "e-Commerce App.",
          meta: "BRANDING",
          width: 650,
          height: 480,
        },
        {
          img: img4,
          title: "Anaylsis Application.",
          meta: "UI/UX",
          width: 650,
          height: 480,
        },
        {
          img: img5,
          title: "Anaylsis Application.",
          meta: "WEB DESIGN",
          width: 650,
          height: 480,
        },
        {
          img: img6,
          title: "Product Branding",
          meta: "ILLUSTRATION",
          width: 650,
          height: 480,
        },
        {
          img: img7,
          title: "The Organic Sac",
          meta: "BRANDING",
          width: 650,
          height: 509,
        },
        {
          img: img8,
          title: "Efficient Team Mobile",
          meta: "MOBILE APP",
          width: 650,
          height: 480,
        },
        {
          img: img9,
          title: "Product Branding",
          meta: "ILLUSTRATION",
          width: 650,
          height: 480,
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
          width: 650,
          height: 480,
        },
        {
          img: img4,
          title: "Anaylsis Application.",
          meta: "UI/UX",
          width: 650,
          height: 480,
        },
        {
          img: img5,
          title: "Anaylsis Application.",
          meta: "WEB DESIGN",
          width: 650,
          height: 480,
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
          width: 650,
          height: 480,
        },
        {
          img: img3,
          title: "e-Commerce App.",
          meta: "BRANDING",
          width: 650,
          height: 480,
        },
        {
          img: img8,
          title: "Efficient Team Mobile",
          meta: "MOBILE APP",
          width: 650,
          height: 480,
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
          width: 650,
          height: 480,
        },
        {
          img: img3,
          title: "Product Branding",
          meta: "ILLUSTRATION",
          width: 650,
          height: 480,
        },
        {
          img: img7,
          title: "The Organic Sac",
          meta: "BRANDING",
          width: 650,
          height: 480,
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
          width: 650,
          height: 480,
        },
        {
          img: img4,
          title: "Anaylsis Application.",
          meta: "UI/UX",
          width: 650,
          height: 480,
        },

        {
          img: img8,
          title: "Efficient Team Mobile",
          meta: "MOBILE APP",
          width: 650,
          height: 480,
        },
      ],
    },
  ];

  return (
    <>
      {" "}
      <Tabs className="d-sm-flex">
        <div className="portfolio-sidebar">
          <h4 className="title mb-30 lg-mb-20">Categories</h4>
          <TabList className="style-none isotop-menu-wrapper control-nav-five d-sm-flex flex-column pb-40">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList>
          {/* End tablist */}
          <h4 className="title mb-20">Share it.</h4>
          <ul className="d-flex social-icon style-none">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- /.portfolio-sidebar --> */}

        <div className="main-gallery-wrapper border-left grid-3column">
          <h2 className="title2 mb-70 lg-mb-40">Portfolio All</h2>
          <Gallery>
            {tabListContent.map((item) => (
              <TabPanel key={item.id}>
                {item.porftoliItems.map((singleItem, i) => (
                  <div className="isotop-item" key={i}>
                    <div className="gallery-item mb-60 lg-mb-40">
                      <div className="img-holder">
                        <img
                          src={singleItem.img}
                          alt="portfolio"
                          className="img-meta w-100 tran5s"
                        />
                        <div className="expend tran3s d-flex align-items-center justify-content-center">
                          <Link
                            to="/portfolio-details-v3"
                            className="arrow tran3s me-2"
                          >
                            <i className="bi bi-arrow-up-right"></i>
                          </Link>
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
                                className="bi bi-plus cursor-pointer"
                                title="Click for large view"
                              ></i>
                            )}
                          </Item>
                        </div>
                      </div>
                      <div className="caption pt-30 lg-pt-20">
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
                        </div>
                      </div>
                      {/* <!-- /.caption --> */}
                    </div>
                    {/* <!-- /.gallery-item --> */}
                  </div>
                ))}
              </TabPanel>
            ))}
          </Gallery>
        </div>
      </Tabs>
    </>
  );
};

export default Portfolio17;
