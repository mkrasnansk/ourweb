import React from "react";
import icon1 from "../../assets/images/icon/icon_24.svg";
import icon2 from "../../assets/images/icon/icon_25.svg";
import icon3 from "../../assets/images/icon/icon_26.svg";

const FeatureSection = () => {
  const featureContent = [
    {
      id: 1,
      icon: icon1,
      title: "Marketing.",
      descriptions: `Creating a spacing how people move through.`,
      delayAnimationTime: 0,
    },
    {
      id: 2,
      icon: icon2,
      title: "Dev & Design.",
      descriptions: `Creating a higher spacing how people move through. From its mel origins to the digital era.`,
      delayAnimationTime: 100,
    },
    {
      id: 3,
      icon: icon3,
      title: "Creativity.",
      descriptions: `Get a full cRontrol of debts in the dsu digital world simplesity. labore et dolore magna aliqua`,
      delayAnimationTime: 200,
    },
  ];

  return (
    <>
      {featureContent.map((item) => (
        <div
          className="col-md-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimationTime}
          key={item.id}
        >
          <div className="card-style-three mt-50">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={item.icon} alt="icon" className="tran3s" />
            </div>
            <h4 className="title">{item.title}.</h4>
            <p>{item.descriptions}</p>
          </div>
          {/* <!-- /.card-style-three --> */}
        </div>
      ))}
    </>
  );
};

export default FeatureSection;
