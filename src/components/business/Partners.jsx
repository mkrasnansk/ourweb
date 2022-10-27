import React from "react";
import Slider from "react-slick";
import logo1 from "../../assets/images/logo/logo-1.png";
import logo2 from "../../assets/images/logo/logo-2.png";
import logo3 from "../../assets/images/logo/logo-3.png";
import logo4 from "../../assets/images/logo/logo-4.png";
import logo5 from "../../assets/images/logo/logo-5.png";

const partnersImg = [
  { id: 1, img: logo1 },
  { id: 2, img: logo2 },
  { id: 3, img: logo3 },
  { id: 4, img: logo4 },
  { id: 5, img: logo5 },
  { id: 6, img: logo2 },
  { id: 7, img: logo4 },
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

const Partners = () => {
  return (
    <>
      <Slider {...settings} arrows={false}>
        {partnersImg.map((partner) => (
          <div className="item" key={partner.id}>
            <div className="img-meta d-flex align-items-center justify-content-center">
              <img src={partner.img} alt="brand" />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Partners;
