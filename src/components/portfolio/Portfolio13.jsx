import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import img1 from "../../assets/images/gallery/img_11.jpg";
import img2 from "../../assets/images/gallery/img_12.jpg";
import img3 from "../../assets/images/gallery/img_13.jpg";
import img4 from "../../assets/images/gallery/img_14.jpg";
import img5 from "../../assets/images/gallery/img_15.jpg";
import img6 from "../../assets/images/gallery/img_16.jpg";
import img7 from "../../assets/images/gallery/img_17.jpg";
import img8 from "../../assets/images/gallery/img_18.jpg";
import img9 from "../../assets/images/gallery/img_19.jpg";

import { Link } from "react-router-dom";

const Portfolio13 = () => {
  const TabListContent = [
    "All",
    "Development",
    "Plugin",
    "Branding",
    "Customization",
  ];
  const portfolioContent = [
    {
      id: 1,
      items: [
        {
          id: 1,
          img: img1,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
        {
          id: 2,
          img: img2,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
        {
          id: 3,
          img: img3,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
        {
          id: 4,
          img: img4,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
        {
          id: 5,
          img: img5,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
        {
          id: 6,
          img: img6,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
        {
          id: 7,
          img: img7,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
        {
          id: 8,
          img: img8,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
        {
          id: 9,
          img: img9,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          id: 7,
          img: img7,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
        {
          id: 8,
          img: img8,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
      ],
    },
    {
      id: 3,
      items: [
        {
          id: 1,
          img: img1,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
        {
          id: 2,
          img: img2,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
      ],
    },
    {
      id: 4,
      items: [
        {
          id: 5,
          img: img5,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
        {
          id: 6,
          img: img6,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
      ],
    },
    {
      id: 5,
      items: [
        {
          id: 3,
          img: img3,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
        {
          id: 4,
          img: img4,
          blockquote: (
            <>
              “Certainly from my perspective, WordPress has been a great
              success—with <span>WordPress VIP</span> giving us that
              enterprise-level of assured quality.”
            </>
          ),
          metaTitle: "www.eventjio.com",
        },
      ],
    },
  ];

  return (
    <>
      <Tabs>
        <TabList className="controls control-nav-three text-center pb-50 lg-pb-10">
          {TabListContent.map((tab, i) => (
            <Tab className="control" key={i}>
              {tab}
            </Tab>
          ))}
        </TabList>

        {portfolioContent.map((item) => (
          <TabPanel key={item.id}>
            <div className="mixitUp-container clearfix">
              {item.items.map((value) => (
                <div className="mix" key={value.id} data-aos="fade-right">
                  <div className="case-block-one position-relative mt-45 lg-mt-30">
                    <img
                      src={value.img}
                      alt="portfolio"
                      className="img-meta w-100"
                    />

                    <div className="hover-content d-flex flex-column">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <img
                          src={
                            require("../../assets/images/icon/icon_11.svg")
                              .default
                          }
                          alt="icon"
                        />
                      </div>
                      <blockquote>{value.blockquote}</blockquote>
                      <Link
                        to="/portfolio-details-v3"
                        className="w-100 d-flex align-items-center justify-content-between mt-auto"
                      >
                        <span className="web">{value.metaTitle}</span>
                        <span className="arrow">
                          <i className="bi bi-chevron-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- /.case-block-one --> */}
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default Portfolio13;
