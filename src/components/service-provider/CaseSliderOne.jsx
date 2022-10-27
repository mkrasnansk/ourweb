import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import img1 from "../../assets/images/media/img_25.jpg";
import img2 from "../../assets/images/media/img_26.jpg";
import img3 from "../../assets/images/media/img_27.jpg";
import img4 from "../../assets/images/media/img_28.jpg";

const CaseSliderOne = () => {
  //   slider settings
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const caseStudyContent = [
    {
      id: 1,
      img: img1,
      blockquote: (
        <>
          “Certainly from my perspective, WordPress has been a great
          success—with <span>WordPress VIP</span> giving us that
          enterprise-level of assured quality.”
        </>
      ),
      metaTitle: "www.eventjio.com",
    },
    {
      id: 2,
      img: img2,
      blockquote: (
        <>
          “Certainly from my perspective, WordPress has been a great
          success—with <span>WordPress VIP</span> giving us that
          enterprise-level of assured quality.”
        </>
      ),
      metaTitle: "www.eventjio.com",
    },
    {
      id: 3,
      img: img3,
      blockquote: (
        <>
          “Certainly from my perspective, WordPress has been a great
          success—with <span>WordPress VIP</span> giving us that
          enterprise-level of assured quality.”
        </>
      ),
      metaTitle: "www.eventjio.com",
    },
    {
      id: 4,
      img: img4,
      blockquote: (
        <>
          “Certainly from my perspective, WordPress has been a great
          success—with <span>WordPress VIP</span> giving us that
          enterprise-level of assured quality.”
        </>
      ),
      metaTitle: "www.eventjio.com",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {caseStudyContent.map((caseStudy) => (
          <div className="item" key={caseStudy.id}>
            <div className="case-block-one position-relative">
              <img
                src={caseStudy.img}
                alt="xase study pic"
                className="img-meta w-100"
              />
              <div className="hover-content">
                <div className="icon d-flex align-items-center justify-content-center">
                  <img
                    src={
                      require("../../assets/images/icon/icon_11.svg").default
                    }
                    alt="icon"
                  />
                </div>
                <blockquote>{caseStudy.blockquote}</blockquote>
                <Link
                  to="/portfolio-details-v2"
                  className="w-100 d-flex align-items-center justify-content-between"
                >
                  <span className="web">{caseStudy.metaTitle}</span>
                  <span className="arrow">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </Link>
              </div>
              {/* <!-- /.hover-content --> */}
            </div>
            {/* <!-- /.case-block-one --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default CaseSliderOne;
