import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";

// portfolio image
import img1 from "../../assets/images/gallery/img_67.jpg";
import img2 from "../../assets/images/gallery/img_68.jpg";
import img3 from "../../assets/images/gallery/img_65.jpg";
import img4 from "../../assets/images/gallery/img_62.jpg";
import img5 from "../../assets/images/gallery/img_61.jpg";

const Portfolio9 = () => {
  //   slider settings
  const settings = {
    dots: false,
    arrows: true,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const portfolioContent = [
    {
      img: img1,
      title: "Anaylsis Application.",
      meta: "PRINT",
    },
    {
      img: img2,
      title: "Weather App.",
      meta: "MOBILE",
    },
    {
      img: img3,
      title: "e-Commerce App.",
      meta: "BRANDING",
    },
    {
      img: img4,
      title: "Anaylsis Application.",
      meta: "UI/UX",
    },
    {
      img: img5,
      title: "Weather App.",
      meta: "MOBILE",
    },
  ];

  return (
    <>
      {" "}
      <Slider {...settings} arrows={true}>
        {portfolioContent.map((item, i) => (
          <div className="item" key={i}>
            <div className="gallery-item ">
              <div className="img-holder">
                <img
                  src={item.img}
                  alt="portfolio"
                  className="img-meta w-100 tran5s"
                />
                <div className="caption d-flex justify-content-center align-items-center flex-column">
                  <span className="tag">{item.meta}</span>
                  <h6>
                    <Link to="/portfolio-details-v5" className="pj-title">
                      {item.title}
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            {/* <!-- /.gallery-item --> */}
          </div>
        ))}
      </Slider>{" "}
    </>
  );
};

export default Portfolio9;
