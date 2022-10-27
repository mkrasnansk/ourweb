import React from "react";
import icon1 from "../../../../../assets/images/icon/icon_46.svg";
import icon2 from "../../../../../assets/images/icon/icon_47.svg";
import icon3 from "../../../../../assets/images/icon/icon_48.svg";
import icon4 from "../../../../../assets/images/icon/icon_49.svg";

const Features = () => {
  const featureContent = [
    {
      id: 1,
      icon: icon1,
      title: "Friendly Interface",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
      animDelay: 0,
    },
    {
      id: 2,
      icon: icon2,
      title: "Quality Service",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
      animDelay: 0,
    },
    {
      id: 3,
      icon: icon3,
      title: "Great Pricing",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
      animDelay: 100,
    },
    {
      id: 4,
      icon: icon4,
      title: "100% Trusted",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
      animDelay: 200,
    },
  ];

  return (
    <>
      {featureContent.map((feature) => (
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={feature.animDelay}
          key={feature.id}
        >
          <div className="card-style-six">
            <div className="icon d-flex align-items-end">
              <img src={feature.icon} alt="icon" />
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
