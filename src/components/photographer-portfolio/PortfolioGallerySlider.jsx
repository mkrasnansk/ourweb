import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import img1 from "../../assets/images/media/img_92.jpg";
import img2 from "../../assets/images/media/img_96.jpg";
import img3 from "../../assets/images/media/img_93.jpg";
import img4 from "../../assets/images/media/img_97.jpg";
import img5 from "../../assets/images/media/img_94.jpg";
import img6 from "../../assets/images/media/img_98.jpg";
import img7 from "../../assets/images/media/img_95.jpg";
import img8 from "../../assets/images/media/img_99.jpg";

//   slider settings
const settings = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        pauseOnFocus: false,
      },
    },
  ],
};

const PortfolioGallerySlider = () => {
  const sliderOneContent = [
    {
      id: 1,
      speedAutoPlay: 3000,
      listSlide: [
        { img: img1, title: "The Drunken", meta: "Food, Event" },
        { img: img2, title: " Lettuce Entertain", meta: "Landscape" },
      ],
    },
    {
      id: 2,
      speedAutoPlay: 3500,
      listSlide: [
        { img: img3, title: "Leaping Lizard", meta: "Model, Fashion" },
        { img: img4, title: "Juan More Taco", meta: "Architecture, Event" },
      ],
    },
    {
      id: 3,
      speedAutoPlay: 3200,
      listSlide: [
        { img: img5, title: "Goldilox Bagels", meta: "Food, Event" },
        { img: img6, title: "People, Film", meta: "Wedding, Event" },
      ],
    },
    {
      id: 4,
      speedAutoPlay: 3300,
      listSlide: [
        { img: img7, title: "Divine Pastabilities", meta: "Wedding, Model" },
        { img: img8, title: "The Lockhart Bar", meta: "Health & Wellnes" },
      ],
    },
  ];
  return (
    <div className="row gx-xl-5">
      {sliderOneContent.map((item) => (
        <div className="col-lg-3 col-sm-6" key={item.id}>
          <div className="portfolio-slider-one mt-30">
            <Slider
              {...settings}
              autoplaySpeed={item.speedAutoPlay}
              arrows={false}
            >
              {item.listSlide.map((value, i) => (
                <div className="item" key={i}>
                  <div className="img-meta">
                    <Link
                      to="/portfolio-details-v4"
                      className="arrow tran4s d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                    <img src={value.img} alt="portfolio" className="w-100" />
                    <div className="hover-content">
                      <Link
                        to="/portfolio-details-v4"
                        className="c-name font-recoleta tran3s"
                      >
                        {value.title}
                      </Link>
                      <span className="tran3s">{value.meta}</span>
                    </div>
                    {/* <!-- /.hover-content --> */}
                  </div>
                  {/* <!-- /.img-meta --> */}
                </div>
              ))}
            </Slider>
          </div>
          {/* <!-- /.portfolio-slider-one --> */}
        </div>
      ))}
    </div>
  );
};

export default PortfolioGallerySlider;
