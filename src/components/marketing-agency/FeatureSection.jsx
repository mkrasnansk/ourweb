import React from "react";
import img1 from "../../assets/images/icon/icon_113.svg";
import img2 from "../../assets/images/icon/icon_114.svg";
import img3 from "../../assets/images/icon/icon_115.svg";
import img4 from "../../assets/images/icon/icon_116.svg";

const FeatureSection = () => {
  const featureContent = [
    {
      id: 1,
      img: img1,
      title: "Market Analysis.",
      text: `Elit esse cillum dolore eu fugiat nulla pariatur lorem dui.`,
    },
    {
      id: 2,
      img: img2,
      title: "Expert Consulting.",
      text: `Elit esse cillum dolore eu fugiat nulla pariatur lorem dui.`,
    },
    {
      id: 3,
      img: img3,
      title: "Digital Marketing.",
      text: `Elit esse cillum dolore eu fugiat nulla pariatur lorem dui.`,
    },
    {
      id: 4,
      img: img4,
      title: "Advance Digital solution.",
      text: `Elit esse cillum dolore eu fugiat nulla pariatur lorem dui.`,
    },
  ];
  return (
    <>
      {featureContent.map((feature) => (
        <div
          className="card-style-fourteen d-md-flex align-items-center"
          data-aos="fade-up"
          key={feature.id}
        >
          <div className="icon">
            <img src={feature.img} alt="icon" />
          </div>
          <div className="title-wrapper">
            <h4>
              <a href="#">{feature.title}</a>
            </h4>
            <p>{feature.text}</p>
          </div>
          {/* <!-- /.title-wrapper --> */}

          <a href="#" className="arrow tran3s">
            <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      ))}
    </>
  );
};

export default FeatureSection;
