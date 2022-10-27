import React from "react";
import icon1 from "../../assets/images/icon/icon_12.svg";
import icon2 from "../../assets/images/icon/icon_13.svg";
import icon3 from "../../assets/images/icon/icon_14.svg";

const FeatureSectionTwo = () => {
  const featureContent = [
    {
      id: 1,
      icon: icon1,
      title: "Friendly Interface",
      descriptions: `quis nostrud exercit ullamo ea laboris nisi ut aliqui duis aut iru.`,
      delayAnimationTime: 0,
    },
    {
      id: 2,
      icon: icon2,
      title: "Quality Supprot",
      descriptions: `quis nostrud exercit ullamo laboris nisi aliqui com dolorq. Duis aut iru qui nostrud exercit ullamo`,
      delayAnimationTime: 100,
    },
    {
      id: 3,
      icon: icon3,
      title: "Great Pricing",
      descriptions: `quis nostrud exercit ullamo ea laboris nisi ut aliqui com dolorq. Duis aut iru.`,
      delayAnimationTime: 200,
    },
  ];

  return (
    <>
      {featureContent.map((item) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimationTime}
          key={item.id}
        >
          <div className="card-style-two">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={item.icon} alt="" className="tran3s" />
            </div>
            <h4 className="title">{item.title}</h4>
            <p className="pe-xxl-5">{item.descriptions}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureSectionTwo;
