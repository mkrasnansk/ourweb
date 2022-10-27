import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/media/img_02.jpg";
import img2 from "../../assets/images/media/img_03.jpg";

const FeedbackSliderOne = () => {
  //   slider settings
  const settings = {
    dots: false,
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
      descriptions: (
        <>
          “Certainly from my perspective, WordPress has been a great
          success—with <span> WordPress VIP</span> giving us that
          enterprise-level of assured quality.”
        </>
      ),
      img: img1,
      name: "Bostami Ha.",
      designation: "VP, Technology",
    },
    {
      id: 1,
      descriptions: (
        <>
          “Having a home based business makes wonderful asset to your life. The{" "}
          <span> WordPress VIP</span> stands it advertise your business for a
          cheap.”
        </>
      ),
      img: img2,
      name: "Jannat Ekra.",
      designation: "Ux Engineer",
    },
  ];
  return (
    <>
      <Slider {...settings}>
        {feedbackContent.map((item) => (
          <div className="item" key={item.id}>
            <blockquote>{item.descriptions}</blockquote>
            <div className="d-flex align-items-center">
              <img src={item.img} alt="media" className="avatar" />
              <div className="name">
                {item.name} <span>{item.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeedbackSliderOne;
