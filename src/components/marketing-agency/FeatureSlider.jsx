import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/gallery/img_111.jpg";
import img2 from "../../assets/images/gallery/img_112.jpg";
import img3 from "../../assets/images/gallery/img_113.jpg";
import img4 from "../../assets/images/gallery/img_114.jpg";
import img5 from "../../assets/images/gallery/img_112.jpg";
import { Link } from "react-router-dom";

const FeatureSlider = () => {
  //   slider settings
  const settings = {
    dots: false,
    arrows: true,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const featureContent = [
    {
      id: 1,
      img: img1,
      title: (
        <>
          Best Selling <br />
          plugin.
        </>
      ),
    },
    {
      id: 2,
      img: img2,
      title: (
        <>
          Best Service <br />
          provider.
        </>
      ),
    },
    {
      id: 3,
      img: img3,
      title: (
        <>
          Client business <br />
          Model.
        </>
      ),
    },
    {
      id: 4,
      img: img4,
      title: (
        <>
          Best Marketing <br />
          Strategy.
        </>
      ),
    },
    {
      id: 5,
      img: img5,
      title: (
        <>
          Best Service <br />
          provider.
        </>
      ),
    },
  ];

  return (
    <>
      {" "}
      <Slider {...settings} arrows={true}>
        {featureContent.map((item) => (
          <div className="item" key={item.id}>
            <div className="gallery-item">
              <div className="img-holder position-relative">
                <img src={item.img} alt="" className="w-100" />
                <div className="caption">
                  <Link to="/portfolio-details-v5" className="arrow tran3s">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                  <h6>
                    <a
                      to="/portfolio-details-v5"
                      className="pj-title font-zen tran3s"
                    >
                      {item.title}
                    </a>
                  </h6>
                </div>
                {/* <!-- /.caption --> */}
              </div>
              {/* <!-- /.img-holder --> */}
            </div>
            {/* <!-- /.gallery-item --> */}
          </div>
        ))}{" "}
      </Slider>
    </>
  );
};

export default FeatureSlider;
