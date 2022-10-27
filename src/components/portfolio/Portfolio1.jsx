import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import img1 from "../../assets/images/media/img_15.jpg";
import img2 from "../../assets/images/media/img_16.jpg";
import img3 from "../../assets/images/media/img_17.jpg";
import img4 from "../../assets/images/media/img_47.jpg";
import img5 from "../../assets/images/media/img_48.jpg";
import img6 from "../../assets/images/gallery/img_06.jpg";
import img7 from "../../assets/images/gallery/img_07.jpg";
import img8 from "../../assets/images/gallery/img_08.jpg";
import img9 from "../../assets/images/gallery/img_09.jpg";
import img10 from "../../assets/images/gallery/img_10.jpg";
import { Link } from "react-router-dom";

const Portfolio1 = () => {
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
          title: "www.uiart.com",
        },
        {
          id: 2,
          img: img2,
          title: "www.todo.com",
        },
        {
          id: 3,
          img: img3,
          title: "www.icon8.com",
        },
        {
          id: 4,
          img: img4,
          title: "www.todo.com",
        },
        {
          id: 5,
          img: img5,
          title: "www.icon8.com",
        },
        {
          id: 6,
          img: img6,
          title: "www.todo.com",
        },
        {
          id: 7,
          img: img7,
          title: "www.icon8.com",
        },
        {
          id: 8,
          img: img8,
          title: "www.todo.com",
        },
        {
          id: 9,
          img: img9,
          title: "www.icon8.com",
        },
        {
          id: 10,
          img: img10,
          title: "www.todo.com",
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          id: 4,
          img: img4,
          title: "www.todo.com",
        },
        {
          id: 5,
          img: img5,
          title: "www.icon8.com",
        },
        {
          id: 6,
          img: img6,
          title: "www.todo.com",
        },
        {
          id: 7,
          img: img7,
          title: "www.icon8.com",
        },
      ],
    },
    {
      id: 3,
      items: [
        {
          id: 7,
          img: img7,
          title: "www.icon8.com",
        },
        {
          id: 8,
          img: img8,
          title: "www.todo.com",
        },
        {
          id: 9,
          img: img9,
          title: "www.icon8.com",
        },
        {
          id: 10,
          img: img10,
          title: "www.todo.com",
        },
      ],
    },
    {
      id: 4,
      items: [
        {
          id: 3,
          img: img3,
          title: "www.icon8.com",
        },
        {
          id: 4,
          img: img4,
          title: "www.todo.com",
        },
        {
          id: 5,
          img: img5,
          title: "www.icon8.com",
        },
        {
          id: 6,
          img: img6,
          title: "www.todo.com",
        },
      ],
    },
    {
      id: 5,
      items: [
        {
          id: 7,
          img: img7,
          title: "www.icon8.com",
        },
        {
          id: 8,
          img: img8,
          title: "www.todo.com",
        },
        {
          id: 9,
          img: img9,
          title: "www.icon8.com",
        },
        {
          id: 10,
          img: img10,
          title: "www.todo.com",
        },
      ],
    },
  ];

  return (
    <>
      <Tabs>
        <TabList className="controls control-nav-one text-center mb-50 lg-mb-30">
          {TabListContent.map((tab, i) => (
            <Tab className="control" key={i}>
              {tab}
            </Tab>
          ))}
        </TabList>

        {portfolioContent.map((item) => (
          <TabPanel key={item.id}>
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="mixitUp-container clearfix">
                  {item.items.map((value) => (
                    <div className="mix" key={value.id} data-aos="fade-right">
                      <div className="case-block-three position-relative">
                        <img
                          src={value.img}
                          alt="portfolio"
                          className="screen"
                        />
                        <div className="overlay-content d-flex align-items-end">
                          <Link
                            to="/portfolio-details-v1"
                            className="d-flex justify-content-between align-items-center"
                          >
                            <span>{value.title}</span>
                            <img
                              src={
                                require("../../assets/images/icon/icon_28.svg")
                                  .default
                              }
                              alt="icon"
                            />
                          </Link>
                        </div>
                        {/* <!-- /.overlay-content --> */}
                      </div>
                      {/* <!-- /.case-block-three --> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default Portfolio1;
