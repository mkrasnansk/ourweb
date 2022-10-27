import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Gallery, Item } from "react-photoswipe-gallery";
import "slick-carousel/slick/slick-theme.css";

// portfolio image
import img1 from "../../assets/images/gallery/img_69.jpg";
import img2 from "../../assets/images/gallery/img_71.jpg";
import img3 from "../../assets/images/gallery/img_87.jpg";
import img4 from "../../assets/images/gallery/img_77.jpg";
const Portfolio19 = () => {
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
      width: 425,
      height: 560,
    },
    {
      img: img2,
      title: "Weather App.",
      meta: "MOBILE",
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
      img: img4,
      title: "Anaylsis Application.",
      meta: "UI/UX",
      width: 425,
      height: 560,
    },
    {
      img: img2,
      title: "e-Commerce App.",
      meta: "UI/UX",
      width: 425,
      height: 560,
    },
  ];

  return (
    <>
      {" "}
      <Gallery>
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
                  <div className="caption d-flex justify-content-end align-items-center flex-column">
                    <div className="icon-group d-flex align-items-center justify-content-center">
                      <Link
                        to="/portfolio-details-v3"
                        className="arrow tran3s me-2"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>
                      <Item
                        original={item.img}
                        thumbnail={item.img}
                        width={item.width}
                        height={item.height}
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
                      <Link to="/portfolio-details-v5" className="pj-title">
                        {item.title}
                      </Link>
                    </h6>
                    <span className="tag">{item.meta}</span>
                  </div>
                </div>
              </div>
              {/* <!-- /.gallery-item --> */}
            </div>
          ))}
        </Slider>{" "}
      </Gallery>
    </>
  );
};

export default Portfolio19;
