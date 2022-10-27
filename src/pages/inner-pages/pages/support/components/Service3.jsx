import React from "react";
import icon1 from "../../../../../assets/images/icon/icon_55.svg";
import icon2 from "../../../../../assets/images/icon/icon_56.svg";
import icon3 from "../../../../../assets/images/icon/icon_57.svg";
import icon4 from "../../../../../assets/images/icon/icon_58.svg";
import icon5 from "../../../../../assets/images/icon/icon_59.svg";
import icon6 from "../../../../../assets/images/icon/icon_60.svg";

const Service3 = () => {
  const serviceContent = [
    {
      id: 1,
      icon: icon1,
      delayAnimation: 0,
      title: "Media & Publishing",
      text: (
        <>
          Placeholder text commonly used in print, & <span>publishing</span>{" "}
          industries for <span>previewing</span> layouts and visual{" "}
          <span>mockups</span>
        </>
      ),
    },
    {
      id: 2,
      icon: icon2,
      delayAnimation: 100,
      title: "Technology",
      text: (
        <>
          eiusmod tempor <span>incididunt</span> ut labore et dolore{" "}
          <span>magnaliq</span>. Ut enim ad minimveniam
        </>
      ),
    },
    {
      id: 3,
      icon: icon3,
      delayAnimation: 200,
      title: "Enterprise Service",
      text: (
        <>
          Take a deep dive and try our <span>listof over 40</span> unique{" "}
          <span>generators</span>, find placeholder images for your next
        </>
      ),
    },
    {
      id: 4,
      icon: icon4,
      delayAnimation: 0,
      title: "Enterprise Service",
      text: (
        <>
          Take a deep dive and try our <span>listof over 40</span> unique{" "}
          <span>generators</span>, find placeholder images for your next
        </>
      ),
    },
    {
      id: 5,
      icon: icon5,
      delayAnimation: 100,
      title: "Enterprise Service",
      text: (
        <>
          Take a deep dive and try our <span>listof over 40</span> unique{" "}
          <span>generators</span>, find placeholder images for your next
        </>
      ),
    },
    {
      id: 6,
      icon: icon6,
      delayAnimation: 200,
      title: "Enterprise Service",
      text: (
        <>
          Take a deep dive and try our <span>listof over 40</span> unique{" "}
          <span>generators</span>, find placeholder images for your next
        </>
      ),
    },
  ];
  return (
    <>
      {serviceContent.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <div className="card-style-eight">
            <div className="icon d-flex align-items-end">
              <img src={item.icon} alt="icon" />
            </div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service3;
