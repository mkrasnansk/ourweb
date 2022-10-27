import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import img1 from "../../assets/images/shop/img_01.png";
import img2 from "../../assets/images/shop/img_02.png";

const HeroSlider = () => {
  //   slider settings
  const settings = {
    dots: false,
    arrows: false,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const sliderContent = [
    {
      id: 1,
      img: img1,
      meta: "Top Qulaity",
      title: (
        <>
          {" "}
          Summer <br /> Item.
        </>
      ),
      text: ` We helpingclient to create websites with our talented
        expert.`,
    },
    {
      id: 2,
      img: img2,
      meta: "High Qulaity",
      title: (
        <>
          {" "}
          Winter <br /> Item..
        </>
      ),
      text: ` We helpingclient to create websites with our talented
        expert.`,
    },
  ];

  return (
    <>
      <Slider {...settings} arrows={false}>
        {sliderContent.map((item) => (
          <div className="item" key={item.id}>
            <div className="container">
              <div className="row align-items-end">
                <div className="col-xl-5 col-md-6">
                  <div className="product-text">
                    <h6>{item.meta}</h6>
                    <h2 className="font-recoleta">{item.title}</h2>
                    <p className="text-lg mb-50 lg-mb-30">{item.text}</p>
                    <Link
                      to="/grid-layout"
                      className="theme-btn-seven ripple-btn"
                    >
                      SHOW NOW
                    </Link>
                  </div>
                  {/* <!-- /.product-text --> */}
                </div>
                {/* End .col */}

                <div className="col-xl-7 col-md-6">
                  <img
                    src={item.img}
                    alt="slide product"
                    className="m-auto ms-lg-auto product-img tran5s"
                  />
                </div>
                {/* End .col */}
              </div>
            </div>
            {/* End .container */}

            <div className="section-no">01.</div>
            {/* item section-no */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default HeroSlider;
