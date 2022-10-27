import React from "react";
import Slider from "react-slick";

const FeedbackSliderTwo = () => {
  //   slider settings
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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

  const feebackSliderContent = [
    {
      id: 1,
      descriptions: `Certainly from my perspective been a great success with WP giving us that enterprises
      level assured quality.`,
      name: "Martin Jonas",
      country: "USA",
    },
    {
      id: 2,
      descriptions: `Certainly from my perspective been a great success with WP giving us that enterprises
      level assured quality.`,
      name: "Martin Jonas",
      country: "USA",
    },
    {
      id: 3,
      descriptions: `Certainly from my perspective been a great success with WP giving us that enterprises
      level assured quality.`,
      name: "Martin Jonas",
      country: "USA",
    },
    {
      id: 4,
      descriptions: `Certainly from my perspective been a great success with WP giving us that enterprises
      level assured quality.`,
      name: "Martin Jonas",
      country: "USA",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {feebackSliderContent.map((review) => (
          <div className="item" key={review.id}>
            <div className="testimonial-block-one">
              <div className="icon d-flex align-items-center justify-content-center">
                <img
                  src={require("../../assets/images/icon/icon_15.svg").default}
                  alt="icon"
                />
              </div>
              <blockquote>{review.descriptions}</blockquote>
              <div className="name">
                {review.name} <span>{review.country}</span>
              </div>
            </div>
            {/* <!-- /.testimonial-block-one --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeedbackSliderTwo;
