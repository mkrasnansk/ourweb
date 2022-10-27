import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";

// portfolio image
import img1 from "../../assets/images/media/img_80.jpg";
import img2 from "../../assets/images/media/img_81.jpg";
import img3 from "../../assets/images/media/img_82.jpg";
import img4 from "../../assets/images/media/img_83.jpg";
import img5 from "../../assets/images/media/img_84.jpg";
import img6 from "../../assets/images/media/img_85.jpg";
import img7 from "../../assets/images/media/img_86.jpg";
import img8 from "../../assets/images/media/img_87.jpg";

const Portfolio7 = () => {
  const breakpointColumnsObj = {
    default: 3,
    991: 2,
    767: 1,
  };

  const tabList = ["All", "Development", "Plugin", "Branding", "Customization"];
  const tabListContent = [
    {
      id: 1,
      porftoliItems: [
        {
          img: img1,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 747,
        },
        {
          img: img2,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 400,
        },
        {
          img: img3,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 775,
        },
        {
          img: img4,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 402,
        },
        {
          img: img5,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 750,
        },
        {
          img: img8,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 775,
        },
        {
          img: img6,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 402,
        },
        {
          img: img7,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 534,
          height: 401,
        },
      ],
    },
    {
      id: 2,
      porftoliItems: [
        {
          img: img3,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 775,
        },
        {
          img: img4,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 402,
        },
        {
          img: img8,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 775,
        },
      ],
    },
    {
      id: 3,
      porftoliItems: [
        {
          img: img1,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 747,
        },
        {
          img: img3,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 775,
        },
        {
          img: img8,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 775,
        },
      ],
    },
    {
      id: 4,
      porftoliItems: [
        {
          img: img2,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 400,
        },
        {
          img: img6,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 402,
        },
        {
          img: img7,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 534,
          height: 401,
        },
      ],
    },
    {
      id: 5,
      porftoliItems: [
        {
          img: img1,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 747,
        },
        {
          img: img4,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 402,
        },
        {
          img: img8,
          title: (
            <>
              {" "}
              Lonely <span>Steve</span>
            </>
          ),
          meta: "vCamp- Landing Page Template",
          width: 533,
          height: 775,
        },
      ],
    },
  ];

  return (
    <>
      <Tabs>
        <TabList className="style-none text-center isotop-menu-wrapper control-nav-two pb-90 lg-pb-40">
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
                className="my-masonry-grid m-0"
                data-aos="fade-right"
              >
                {item.porftoliItems.map((singleItem, i) => (
                  <div className="isotop-item" key={i}>
                    <div className="case-block-six">
                      <div className="img-box">
                        <img src={singleItem.img} alt="portfolio" />
                      </div>
                      <div className="hover-valina">
                        <div>
                          <h4 className="title font-recoleta">
                            {" "}
                            <Link to="/portfolio-details-v1">
                              {singleItem.title}
                            </Link>
                          </h4>
                          <p>{singleItem.meta}</p>
                          <Item
                            original={singleItem.img}
                            thumbnail={singleItem.img}
                            width={singleItem.width}
                            height={singleItem.height}
                          >
                            {({ ref, open }) => (
                              <div className="zoom cursor-pointer">
                                <i
                                  ref={ref}
                                  onClick={open}
                                  className="bi bi-arrows-angle-expand"
                                  title="Click for large view"
                                ></i>
                              </div>
                            )}
                          </Item>
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

export default Portfolio7;
