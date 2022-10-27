import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Slider from "react-slick";
import img1 from "../../assets/images/media/img_19.jpg";
import img2 from "../../assets/images/media/img_20.jpg";
import img3 from "../../assets/images/media/img_21.jpg";

const HeroSlider = () => {
  const [isOpen, setOpen] = useState(false);

  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  const sliderContent = [
    {
      id: 1,
      largeImg: img1,
      title: "Think Design & Start",
      descriptions: ` We helpingclient to create WordPress with our talented expert.`,
    },
    {
      id: 2,
      largeImg: img2,
      title: "Think Design & Start",
      descriptions: ` We helpingclient to create WordPress with our talented expert.`,
    },
    {
      id: 3,
      largeImg: img3,
      title: "Think Design & Start",
      descriptions: ` We helpingclient to create WordPress with our talented expert.`,
    },
  ];
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
      <Slider {...settings} arrows={false}>
        {sliderContent.map((item) => (
          <div className="item" key={item.id}>
            <div className="content-wrapper">
              <img
                src={item.largeImg}
                alt="slider avatar"
                className="hero-img"
              />
              <div className="slider-inner">
                <div className="hero-content">
                  <div
                    className="fancybox video-icon d-flex align-items-center justify-content-center"
                    onClick={() => setOpen(true)}
                    role="button"
                  >
                    <img
                      src={
                        require("../../assets/images/icon/icon_41.svg").default
                      }
                      alt="icon"
                    />
                  </div>
                  <h2 className="hero-heading position-relative">
                    {item.title}
                  </h2>
                  <p className="hero-sub-heading position-relative">
                    {item.descriptions}
                  </p>
                  <Link
                    to="/contact-v1"
                    className="theme-btn-one border0 ripple-btn"
                  >
                    Let’s Talk
                  </Link>
                </div>
                {/* <!-- /.hero-content --> */}
              </div>
              {/* <!-- /.slider-inner --> */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default HeroSlider;
