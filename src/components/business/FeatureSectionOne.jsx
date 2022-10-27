import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../assets/images/icon/icon_04.svg";
import icon2 from "../../assets/images/icon/icon_05.svg";
import icon3 from "../../assets/images/icon/icon_06.svg";
import icon4 from "../../assets/images/icon/icon_07.svg";

const FeatureSectionOne = () => {
  const featureContent = [
    {
      id: 1,
      icon: icon1,
      title: "Core WP",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
    },
    {
      id: 2,
      icon: icon2,
      title: "Plugin Development",
      description: `quis nostrud exerct ullamo ea nisi ut aliqui com dolor`,
    },
    {
      id: 3,
      icon: icon3,
      title: "Installation",
      description: `Duis aute irure dolor reprehen derit in voluptat velit.`,
    },
    {
      id: 4,
      icon: icon4,
      title: "Customization",
      description: `cupidatat non proident, sunt in culpa qui officia deserunt`,
    },
  ];

  return (
    <>
      {featureContent.map((feature) => (
        <div className="col-sm-6" key={feature.id}>
          <div className="card-style-one">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={feature.icon} alt="icon" className="tran3s" />
            </div>
            <h4 className="title">{feature.title}</h4>
            <p>{feature.description}</p>
            <Link to="/service-v1" className="arrow-icon">
              <img
                src={require("../../assets/images/icon/icon_08.svg").default}
                alt="arrow icon"
                className="tran3s"
              />
            </Link>
          </div>
          {/* <!-- /.card-style-one --> */}
        </div>
      ))}
    </>
  );
};

export default FeatureSectionOne;
