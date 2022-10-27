import React from "react";
import Slider from "react-slick";

const FeedbackSlider = () => {
  //   slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true,
  };

  const feedbackContent = [
    {
      id: 1,
      descriptions: ` We’v 9,000 agents around the io country, Find agents near your
        neighborhood graphic, print, and publishing industries for
        previewing layouts .`,
      name: "Martin Jonas",
      country: "USA",
    },
    {
      id: 2,
      descriptions: `Certainly from my perspective, WordPress has been a great success—with WordPress VIP giving us that enterprise-level of assured quality on top.`,
      name: "Martin Jonas",
      country: "USA",
    },
    {
      id: 3,
      descriptions: `Having a home based business makes wonderful asset to your life. The
        WordPress VIP stands it comes advertise your business at cheap cost.`,
      name: "Martin Jonas",
      country: "USA",
    },
  ];

  return (
    <>
      <Slider {...settings} arrows={false}>
        {feedbackContent.map((review) => (
          <div className="item" key={review.id}>
            <div className="feedback-wrapper">
              <div className="icon d-flex align-items-center justify-content-center">
                <img
                  src={require("../../assets/images/icon/icon_33.svg").default}
                  alt="icon"
                />
              </div>
              <blockquote>{review.descriptions}</blockquote>
              <h6 className="name">
                {review.name} <span>{review.country}</span>
              </h6>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeedbackSlider;
