import React from "react";
import Slider from "react-slick";
// slider imag
import img1 from "../../assets/images/logo/logo-14.png";
import img2 from "../../assets/images/logo/logo-15.png";
import img3 from "../../assets/images/logo/logo-16.png";
import img4 from "../../assets/images/logo/logo-17.png";
// avatar
import avatar1 from "../../assets/images/media/img_02.jpg";
import avatar2 from "../../assets/images/media/img_03.jpg";

const FeedbackSliderTwo = () => {
  //  slider settings
  const settings = {
    dots: false,
    arrows: true,
    speed: 900,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
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

  const feedbackContent = [
    {
      id: 1,
      img: img1,
      descriptions: ` We’v 9,000 agents around the country, Find agents near your
        neighborhood.`,
      avatar: avatar1,
      name: "Bostami H.",
      country: "KSA",
    },
    {
      id: 2,
      img: img2,
      descriptions: ` We’v 9,000 agents around the country, Find agents near your
        neighborhood.`,
      avatar: avatar2,
      name: "Jannatul E.",
      country: "USA",
    },
    {
      id: 3,
      img: img3,
      descriptions: ` We’v 9,000 agents around the country, Find agents near your
        neighborhood.`,
      avatar: avatar1,
      name: "Bostami H.",
      country: "KSA",
    },
    {
      id: 4,
      img: img4,
      descriptions: ` We’v 9,000 agents around the country, Find agents near your
        neighborhood.`,
      avatar: avatar2,
      name: "Jannatul E.",
      country: "USA",
    },
    {
      id: 5,
      img: img3,
      descriptions: ` We’v 9,000 agents around the country, Find agents near your
        neighborhood.`,
      avatar: avatar1,
      name: "Bostami H.",
      country: "KSA",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {feedbackContent.map((feedback) => (
          <div className="item" key={feedback.id}>
            <div className="block-wrapper">
              <div className="icon d-flex align-items-end">
                <img src={feedback.img} alt="brand" />
              </div>
              <p>{feedback.descriptions}</p>
              <div className="d-flex align-items-center">
                <img src={feedback.avatar} alt="" className="avatar" />
                <div className="name">
                  {feedback.name} <span>{feedback.country}</span>
                </div>
              </div>
            </div>
            {/* <!-- /.block-wrapper --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeedbackSliderTwo;
