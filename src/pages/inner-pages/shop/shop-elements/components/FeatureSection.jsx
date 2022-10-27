import React from "react";
import img1 from "../../../../../assets/images/icon/icon_84.svg";
import img2 from "../../../../../assets/images/icon/icon_85.svg";
import img3 from "../../../../../assets/images/icon/icon_86.svg";
import img4 from "../../../../../assets/images/icon/icon_87.svg";

const FeatureSection = () => {
  const featureContent = [
    {
      id: 1,
      img: img1,
      title: (
        <>
          Free Delivery within <br />3 days.
        </>
      ),
    },
    {
      id: 2,
      img: img2,
      title: (
        <>
          7 Days refund <br /> policy.
        </>
      ),
    },
    {
      id: 3,
      img: img3,
      title: (
        <>
          Secure payment <br /> methods
        </>
      ),
    },
    {
      id: 4,
      img: img4,
      title: (
        <>
          Store pickup <br />
          facility.
        </>
      ),
    },
  ];

  return (
    <div className="vcamp-feature-section-ten border-bottom mt-60 pb-50 lg-pb-20">
      <div className="row">
        {featureContent.map((item) => (
          <div className="col-lg-3 col-sm-6" key={item.id}>
            <div className="card-style-ten text-center mb-40">
              <div className="icon d-flex align-items-center justify-content-center m-auto">
                <img src={item.img} alt="feature" className="tran3s" />
              </div>
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
