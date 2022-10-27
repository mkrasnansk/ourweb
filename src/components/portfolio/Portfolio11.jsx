import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Gallery, Item } from "react-photoswipe-gallery";
import "slick-carousel/slick/slick-theme.css";

// portfolio image
import img1 from "../../assets/images/gallery/img_38.jpg";
import img2 from "../../assets/images/gallery/img_39.jpg";
import img3 from "../../assets/images/gallery/img_40.jpg";
import img4 from "../../assets/images/gallery/img_41.jpg";

const Portfolio11 = () => {
  //   slider settings
  const settings = {
    dots: false,
    arrows: true,
    centerPadding: "0px",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const portflioContent = [
    {
      img: img1,
      title: "Anaylsis Application.",
      meta: "PRINT",
      width: 800,
      height: 640,
    },
    {
      img: img2,
      title: "Weather App.",
      meta: "MOBILE",
      width: 800,
      height: 640,
    },
    {
      img: img3,
      title: "e-Commerce App.",
      meta: "BRANDING",
      width: 800,
      height: 640,
    },
    {
      img: img4,
      title: "Anaylsis Application.",
      meta: "UI/UX",
      width: 800,
      height: 640,
    },
  ];

  return (
    <>
      <Gallery>
        <Slider {...settings} arrows={true}>
          {portflioContent.map((singleItem, i) => (
            <div className="item" key={i}>
              <div className="gallery-item">
                <div className="img-holder">
                  <img
                    src={singleItem.img}
                    alt="portfolio"
                    className="img-meta w-100 tran5s"
                  />
                  <div className="expend tran3s d-flex align-items-center justify-content-center">
                    <Link
                      to="/portfolio-details-v1"
                      className="arrow tran3s me-2"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                    <Item
                      original={singleItem.img}
                      thumbnail={singleItem.img}
                      width={singleItem.width}
                      height={singleItem.height}
                    >
                      {({ ref, open }) => (
                        <i
                          ref={ref}
                          onClick={open}
                          className="bi bi-plus cursor-pointer"
                          title="Click for large view"
                        ></i>
                      )}
                    </Item>
                  </div>
                </div>
              </div>
              {/* <!-- /.gallery-item --> */}
            </div>
          ))}
        </Slider>
      </Gallery>
    </>
  );
};

export default Portfolio11;
