import React from "react";
import Slider from "react-slick";
import img1 from "../../../assets/images/media/img_128.jpg";
import img2 from "../../../assets/images/media/img_129.jpg";
import img3 from "../../../assets/images/media/img_130.jpg";

const HeroSlider = () => {
  // slider settings
  const settings = {
    dots: true,
    arrows: false,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
  };

  const sliderContent = [
    {
      id: 1,
      img: img1,
      title: "Slider Image 01",
    },
    {
      id: 2,
      img: img2,
      title: "Slider Image 02",
    },
    {
      id: 3,
      img: img3,
      title: "Slider Image 03",
    },
  ];

  return (
    <>
      <Slider {...settings} arrows={false}>
        {sliderContent.map((item) => (
          <div className="item" key={item.id}>
            <div className="img-meta">
              <img src={item.img} alt="media" className="main-img" />
              <div className="slide-count font-zen">{item.title}</div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default HeroSlider;
