import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";

// portfolio image
import img1 from "../../assets/images/gallery/img_69.jpg";
import img2 from "../../assets/images/gallery/img_70.jpg";
import img3 from "../../assets/images/gallery/img_71.jpg";
import img4 from "../../assets/images/gallery/img_72.jpg";
import img5 from "../../assets/images/gallery/img_73.jpg";
import img6 from "../../assets/images/gallery/img_74.jpg";
import img7 from "../../assets/images/gallery/img_75.jpg";
import img8 from "../../assets/images/gallery/img_76.jpg";
import img9 from "../../assets/images/gallery/img_77.jpg";
const Portfolio6 = () => {
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
          title: "Anaylsis Application.",
          meta: "PRINT",
          width: 425,
          height: 560,
        },
        {
          img: img2,
          title: "Weather App.",
          meta: "MOBILE",
          width: 425,
          height: 375,
        },
        {
          img: img3,
          title: "e-Commerce App.",
          meta: "BRANDING",
          width: 425,
          height: 560,
        },
        {
          img: img4,
          title: "Anaylsis Application.",
          meta: "UI/UX",
          width: 425,
          height: 360,
        },
        {
          img: img5,
          title: "Anaylsis Application.",
          meta: "WEB DESIGN",
          width: 425,
          height: 718,
        },
        {
          img: img6,
          title: "Product Branding",
          meta: "ILLUSTRATION",
          width: 425,
          height: 360,
        },
        {
          img: img7,
          title: "The Organic Sac",
          meta: "BRANDING",
          width: 425,
          height: 560,
        },
        {
          img: img8,
          title: "Efficient Team Mobile",
          meta: "MOBILE APP",
          width: 425,
          height: 389,
        },
        {
          img: img9,
          title: "Product Branding",
          meta: "ILLUSTRATION",
          width: 425,
          height: 560,
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
          width: 425,
          height: 375,
        },
        {
          img: img3,
          title: "e-Commerce App.",
          meta: "BRANDING",
          width: 425,
          height: 560,
        },
        {
          img: img4,
          title: "Anaylsis Application.",
          meta: "UI/UX",
          width: 425,
          height: 360,
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
          width: 425,
          height: 560,
        },
        {
          img: img3,
          title: "e-Commerce App.",
          meta: "BRANDING",
          width: 425,
          height: 560,
        },
        {
          img: img8,
          title: "Efficient Team Mobile",
          meta: "MOBILE APP",
          width: 425,
          height: 389,
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
          width: 425,
          height: 375,
        },
        {
          img: img6,
          title: "Product Branding",
          meta: "ILLUSTRATION",
          width: 425,
          height: 360,
        },
        {
          img: img7,
          title: "The Organic Sac",
          meta: "BRANDING",
          width: 425,
          height: 560,
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
          width: 425,
          height: 560,
        },
        {
          img: img4,
          title: "Anaylsis Application.",
          meta: "UI/UX",
          width: 425,
          height: 360,
        },
        {
          img: img8,
          title: "Efficient Team Mobile",
          meta: "MOBILE APP",
          width: 425,
          height: 389,
        },
      ],
    },
  ];

  return (
    <>
      <Tabs>
        <TabList className="style-none text-center isotop-menu-wrapper control-nav-five pb-75 lg-pb-30">
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
                className="my-masonry-grid hvr-overlay-right galley-item-wrapper"
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
                        <div className="caption d-flex justify-content-end align-items-center flex-column">
                          <div className="icon-group d-flex align-items-center justify-content-center">
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
                                  className="bi bi-plus cursor-pointer  tran3s ms-2"
                                  title="Click for large view"
                                ></i>
                              )}
                            </Item>
                          </div>

                          <h6>
                            <Link
                              to="/portfolio-details-v5"
                              className="pj-title"
                            >
                              {singleItem.title}
                            </Link>
                          </h6>
                          <span className="tag">{singleItem.meta}</span>
                        </div>
                      </div>
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

export default Portfolio6;
