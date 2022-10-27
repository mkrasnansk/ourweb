import React from "react";
import icon1 from "../../assets/images/icon/icon_24.svg";
import icon2 from "../../assets/images/icon/icon_25.svg";
import icon3 from "../../assets/images/icon/icon_26.svg";
import icon4 from "../../assets/images/icon/icon_27.svg";

const FeatureSection = () => {
  const featureContent = [
    {
      id: 1,
      icon: icon1,
      title: "Core WordPress",
      featureList: [
        "Personalization",
        "Third-Party Integrations",
        "First-Party Analytics",
        "Hosting Setup",
        "Securty",
      ],
      delayAnimation: 0,
    },
    {
      id: 2,
      icon: icon2,
      title: "Platform Audit",
      featureList: [
        "Full Consultation",
        "Code Review",
        "Staff Augmentation",
        "Support",
        "Securty",
      ],
      delayAnimation: 100,
    },
    {
      id: 3,
      icon: icon3,
      title: "e-Commerce",
      featureList: [
        "Custom Checkout Flow",
        "Customer identity",
        "Conversion Rate Optimization",
        "Security Checkup",
        "Data enrty",
      ],
      delayAnimation: 200,
    },
    {
      id: 4,
      icon: icon4,
      title: "Marketing",
      featureList: [
        "Microsites",
        "Marketing Automation",
        "SEO & SMM",
        "Hosting Setup",
        "Lead Generation",
      ],
      delayAnimation: 300,
    },
  ];
  return (
    <>
      {featureContent.map((feature) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={feature.delayAnimation}
          key={feature.id}
        >
          <div className="card-style-three mt-50">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={feature.icon} alt="icon" className="tran3s" />
            </div>
            <h4 className="title">{feature.title}</h4>
            <ul className="style-none">
              {feature.featureList.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          </div>
          {/* <!-- /.card-style-three --> */}
        </div>
      ))}
    </>
  );
};

export default FeatureSection;
