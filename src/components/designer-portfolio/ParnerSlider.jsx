import React from "react";
import Slider from "react-slick";
import logo1 from "../../assets/images/logo/logo-25.png";
import logo2 from "../../assets/images/logo/logo-26.png";
import logo3 from "../../assets/images/logo/logo-29.png";
import logo4 from "../../assets/images/logo/logo-28.png";
import logo5 from "../../assets/images/logo/logo-29.png";
import logo6 from "../../assets/images/logo/logo-26.png";
import logo7 from "../../assets/images/logo/logo-29.png";

const partnersImg = [
  { id: 1, img: logo1 },
  { id: 2, img: logo2 },
  { id: 3, img: logo3 },
  { id: 4, img: logo4 },
  { id: 5, img: logo5 },
  { id: 6, img: logo6 },
  { id: 7, img: logo7 },
];

// slider settings
const settings = {
  centerMode: true,
  centerPadding: "0px",
  arrows: false,
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        centerMode: true,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 2,
      },
    },
  ],
};

const PartnerSlider = () => {
  return (
    <>
      <Slider {...settings} arrows={false}>
        {partnersImg.map((partner) => (
          <div className="item" key={partner.id}>
            <div
              className="img-meta d-flex align-items-center justify-content-center"
              style={{ height: "48px" }}
            >
              <img src={partner.img} alt="brand" />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default PartnerSlider;
