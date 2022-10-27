import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/media/img_112.jpg";
import img2 from "../../assets/images/media/img_113.jpg";
import img3 from "../../assets/images/media/img_114.jpg";
import img4 from "../../assets/images/media/img_115.jpg";

const FeatureSection = () => {
  const featureContent = [
    {
      id: 1,
      img: img1,
      title: "Wedding Photography",
      subTitle: "Subtitle of you services here.",
    },
    {
      id: 2,
      img: img2,
      title: "Event Organiser",
      subTitle: "Subtitle of you services here.",
    },
    {
      id: 3,
      img: img3,
      title: "Product Marketing",
      subTitle: "Subtitle of you services here.",
    },
    {
      id: 4,
      img: img4,
      title: "Subtitle of you services here.",
      subTitle: "Videography",
    },
  ];
  return (
    <>
      {featureContent.map((item) => (
        <div className="card-style-thirteen" data-aos="fade-up" key={item.id}>
          <div className="container">
            <div className="d-md-flex justify-content-between align-items-center">
              <div className="title-wrapper">
                <img
                  src={item.img}
                  alt="popup avatar"
                  className="hover-img tran3s"
                />
                <h3 className="font-recoleta">{item.title}</h3>
                <p>{item.subTitle}</p>
              </div>
              {/* <!-- /.title-wrapper --> */}
              <Link
                to="/portfolio-details-v4"
                className="arrow-icon tran3s sm-mt-10"
              >
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureSection;
