import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Gallery, Item } from "react-photoswipe-gallery";
import "slick-carousel/slick/slick-theme.css";

// portfolio image
import img1 from "../../assets/images/gallery/img_29.jpg";
import img2 from "../../assets/images/gallery/img_31.jpg";
import img3 from "../../assets/images/gallery/img_33.jpg";
import img4 from "../../assets/images/gallery/img_36.jpg";
const Portfolio10 = () => {
  //   slider settings
  const settings = {
    dots: false,
    arrows: true,
    centerPadding: "0px",
    slidesToShow: 3,
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
      width: 636,
      height: 675,
    },
    {
      img: img2,
      title: "Weather App.",
      meta: "MOBILE",
      width: 636,
      height: 675,
    },
    {
      img: img3,
      title: "e-Commerce App.",
      meta: "BRANDING",
      width: 636,
      height: 675,
    },
    {
      img: img4,
      title: "Anaylsis Application.",
      meta: "UI/UX",
      width: 636,
      height: 675,
    },
  ];

  return (
    <>
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
                  <Item
                    original={item.img}
                    thumbnail={item.img}
                    width={item.width}
                    height={item.height}
                  >
                    {({ ref, open }) => (
                      <span className="fancybox expend d-flex align-items-center justify-content-center tran3s">
                        {" "}
                        <i
                          ref={ref}
                          onClick={open}
                          className="bi bi-plus cursor-pointer  "
                          title="Click for large view"
                        ></i>
                      </span>
                    )}
                  </Item>
                </div>

                <div className="caption pe-xl-3 pt-30 lg-pt-20">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <span className="tag">{item.meta}</span>
                      <h6>
                        <Link
                          to="/portfolio-details-v1"
                          className="arrow tran3s"
                        >
                          {item.title}
                        </Link>
                      </h6>
                    </div>
                    {/* End div */}

                    <div>
                      <Link to="/portfolio-details-v1" className="arrow tran3">
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                  {/* End .d-felx */}
                </div>
                {/* <!-- /.caption --> */}
              </div>
              {/* <!-- /.gallery-item --> */}
            </div>
          ))}
        </Slider>
      </Gallery>
    </>
  );
};

export default Portfolio10;
