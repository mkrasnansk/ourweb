import React from "react";
import icon1 from "../../../../../assets/images/icon/icon_61.svg";
import icon2 from "../../../../../assets/images/icon/icon_62.svg";
import icon3 from "../../../../../assets/images/icon/icon_63.svg";

const Service2 = () => {
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
  ];
  return (
    <>
      {serviceContent.map((item) => (
        <div
          className="col-md-4 col-sm-6 d-flex mt-45"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <div className="card-style-seven">
            <div className="icon d-flex align-items-center justify-content-center">
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

export default Service2;
