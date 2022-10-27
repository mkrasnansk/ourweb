import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Masonry from "react-masonry-css";

// portfolio image
import img1 from "../../assets/images/gallery/img_59.jpg";
import img2 from "../../assets/images/gallery/img_60.jpg";
import img3 from "../../assets/images/gallery/img_61.jpg";
import img4 from "../../assets/images/gallery/img_62.jpg";
import img5 from "../../assets/images/gallery/img_71.jpg";
import img6 from "../../assets/images/gallery/img_68.jpg";
import img7 from "../../assets/images/gallery/img_65.jpg";
import img8 from "../../assets/images/gallery/img_66.jpg";
import img9 from "../../assets/images/gallery/img_67.jpg";

const Portfolio5 = () => {
  const breakpointColumnsObj = {
    default: 3,
    767: 1,
  };

  const tabList = ["All", "Development", "Plugin", "Branding", "Customization"];
  const tabListContent = [
    {
      id: 1,
      porftoliItems: [
        {
          img: img1,
          title: "Weather App.",
          meta: "MOBILE",
        },
        {
          img: img2,
          title: "e-Commerce App.",
          meta: "MOBIDevelopmentLE",
        },
        {
          img: img3,
          title: "Anaylsis Application.",
          meta: "BRANDING",
        },
        {
          img: img4,
          title: "Product Branding.",
          meta: "ILLUSTRATION",
        },
        {
          img: img5,
          title: "Product Branding.",
          meta: "ILLUSTRATION",
        },
        {
          img: img6,
          title: "Anaylsis Application.",
          meta: "Branding",
        },
        { img: img7, title: "Weather App.", meta: "MOBILE" },
        {
          img: img8,
          title: "e-Commerce App.",
          meta: "Development",
        },
        {
          img: img9,
          title: "Product Branding.",
          meta: "ILLUSTRATION",
        },
      ],
    },
    {
      id: 2,
      porftoliItems: [
        {
          img: img1,
          title: "Weather App.",
          meta: "MOBILE",
        },
        {
          img: img2,
          title: "e-Commerce App.",
          meta: "MOBIDevelopmentLE",
        },
        {
          img: img9,
          title: "Analysis.",
          meta: "BRANDING",
        },
      ],
    },
    {
      id: 3,
      porftoliItems: [
        {
          img: img3,
          title: "Anaylsis Application.",
          meta: "BRANDING",
        },
        {
          img: img4,
          title: "Product Branding.",
          meta: "ILLUSTRATION",
        },
        {
          img: img5,
          title: "Product Branding.",
          meta: "ILLUSTRATION",
        },
        {
          img: img6,
          title: "Anaylsis Application.",
          meta: "Branding",
        },
      ],
    },
    {
      id: 4,
      porftoliItems: [
        {
          img: img1,
          title: "Weather App.",
          meta: "MOBILE",
        },
        {
          img: img2,
          title: "e-Commerce App.",
          meta: "MOBIDevelopmentLE",
        },
        {
          img: img3,
          title: "Anaylsis Application.",
          meta: "BRANDING",
        },
      ],
    },
    {
      id: 5,
      porftoliItems: [
        {
          img: img2,
          title: "e-Commerce App.",
          meta: "MOBIDevelopmentLE",
        },
        {
          img: img3,
          title: "Anaylsis Application.",
          meta: "BRANDING",
        },
        {
          img: img4,
          title: "Product Branding.",
          meta: "ILLUSTRATION",
        },
        {
          img: img5,
          title: "Product Branding.",
          meta: "ILLUSTRATION",
        },
        {
          img: img6,
          title: "Anaylsis Application.",
          meta: "Branding",
        },
        {
          img: img7,
          title: "Weather App.",
          meta: "MOBILE",
        },
      ],
    },
  ];

  return (
    <>
      <Tabs>
        <TabList className="style-none text-center isotop-menu-wrapper control-nav-six pb-75 lg-pb-40">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}

        <div className="hvr-shutter-out">
          {tabListContent.map((item) => (
            <TabPanel key={item.id}>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {item.porftoliItems.map((singleItem, i) => (
                  <div className="isotop-item" key={i} data-aos="fade-right">
                    <div className="gallery-item mb-40 lg-mb-30">
                      <div className="img-holder">
                        <img
                          src={singleItem.img}
                          alt="portfolio"
                          className="img-meta w-100 tran5s"
                        />
                        <div className="caption d-flex justify-content-center align-items-center flex-column">
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
                        {/* <!-- /.caption --> */}
                      </div>
                    </div>
                    {/* <!-- /.gallery-item --> */}
                  </div>
                ))}
              </Masonry>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </>
  );
};

export default Portfolio5;
