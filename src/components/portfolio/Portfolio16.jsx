import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// portfolio image
import img1 from "../../assets/images/gallery/img_47.jpg";
import img2 from "../../assets/images/gallery/img_53.jpg";
import img3 from "../../assets/images/gallery/img_50.jpg";
import img4 from "../../assets/images/gallery/img_56.jpg";
import img5 from "../../assets/images/gallery/img_88.jpg";

const Portfolio16 = () => {
  const [isOpen, setOpen] = useState(false);

  const tabList = ["All", "Development", "Plugin", "Branding", "Customization"];
  const tabListContent = [
    {
      id: 1,
      videoItem: [
        {
          id: 1,
          img: img1,
          tag: "UI/UX",
          title: "Anaylsis Application.",
          videoIdCode: "7e90gBu4pas",
        },
        {
          id: 2,
          img: img2,
          tag: "App",
          title: "The Bomb Squad",
          videoIdCode: "7e90gBu4pas",
        },
        {
          id: 3,
          img: img3,
          tag: "Mobile",
          title: "Weekend Warriors",
          videoIdCode: "7e90gBu4pas",
        },
        {
          id: 4,
          img: img4,
          tag: "Branding",
          title: "  Associations Now",
          videoIdCode: "7e90gBu4pas",
        },
        {
          id: 5,
          img: img5,
          tag: "Code",
          title: "  The code Honors",
          videoIdCode: "7e90gBu4pas",
        },
        {
          id: 6,
          img: img1,
          tag: "Branding",
          title: "  The code Honors",
          videoIdCode: "7e90gBu4pas",
        },
      ],
    },
    {
      id: 2,
      videoItem: [
        {
          id: 4,
          img: img4,
          tag: "Branding",
          title: "  Associations Now",
          videoIdCode: "7e90gBu4pas",
        },
        {
          id: 5,
          img: img5,
          tag: "Code",
          title: "  The code Honors",
          videoIdCode: "7e90gBu4pas",
        },
      ],
    },
    {
      id: 3,
      videoItem: [
        {
          id: 2,
          img: img2,
          tag: "App",
          title: "The Bomb Squad",
          videoIdCode: "7e90gBu4pas",
        },
        {
          id: 3,
          img: img3,
          tag: "Mobile",
          title: "Weekend Warriors",
          videoIdCode: "7e90gBu4pas",
        },
      ],
    },
    {
      id: 4,
      videoItem: [
        {
          id: 1,
          img: img1,
          tag: "UI/UX",
          title: "Anaylsis Application.",
          videoIdCode: "7e90gBu4pas",
        },
        {
          id: 2,
          img: img2,
          tag: "App",
          title: "The Bomb Squad",
          videoIdCode: "7e90gBu4pas",
        },
      ],
    },
    {
      id: 5,
      videoItem: [
        {
          id: 3,
          img: img3,
          tag: "Mobile",
          title: "Weekend Warriors",
          videoIdCode: "7e90gBu4pas",
        },
        {
          id: 4,
          img: img4,
          tag: "Branding",
          title: "  Associations Now",
          videoIdCode: "7e90gBu4pas",
        },
      ],
    },
  ];

  return (
    <>
      <Tabs>
        <TabList className="style-none text-center isotop-menu-wrapper control-nav-five pb-75 lg-pb-40">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}

        {tabListContent.map((item) => (
          <TabPanel key={item.id}>
            {item.videoItem.map((item) => (
              <div key={item.id}>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId={item.videoIdCode}
                  onClose={() => setOpen(false)}
                />

                <div className="isotop-item item-xl">
                  <div className="gallery-item mb-55 lg-mb-30">
                    <div className="img-holder">
                      <img
                        src={item.img}
                        alt=""
                        className="img-meta w-100 tran6s"
                      />
                      <div
                        onClick={() => setOpen(true)}
                        role="button"
                        className="fancybox video-icon tran3s overlay-icon"
                      >
                        <i className="bi bi-play-fill"></i>
                      </div>
                      <div className="caption tran3s d-flex justify-content-end flex-column">
                        <span className="tag">{item.tag}</span>
                        <h6>
                          <Link to="/portfolio-details-v5" className="pj-title">
                            {item.title}
                          </Link>
                        </h6>
                      </div>
                      {/* <!-- /.caption --> */}
                    </div>
                  </div>
                  {/* <!-- /.gallery-item --> */}
                </div>
                {/* <!-- /.isotop-item --> */}
              </div>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default Portfolio16;
