import React from "react";
import img1 from "../../../../../assets/images/logo/logo-16.png";
import img2 from "../../../../../assets/images/logo/logo-17.png";
import img3 from "../../../../../assets/images/logo/logo-14.png";
import img4 from "../../../../../assets/images/logo/logo-15.png";

const Testimonial = () => {
  const feedbackContent = [
    {
      id: 1,
      img: img1,
      descriptions: `Certainly from my perspective been great success with lore giving that enterprises level magna assured quality due issue.`,
      name: "Bostami H.",
      country: "KSA",
    },
    {
      id: 2,
      img: img2,
      descriptions: `Certainly from my perspective been great success with lore giving that enterprises level magna assured quality due issue.`,
      name: "Jannatul E.",
      country: "USA",
    },
    {
      id: 3,
      img: img3,
      descriptions: `Certainly from my perspective been great success with lore giving that enterprises level magna assured quality due issue.`,
      name: "Bostami H.",
      country: "KSA",
    },
    {
      id: 4,
      img: img4,
      descriptions: `Certainly from my perspective been great success with lore giving that enterprises level magna assured quality due issue.`,
      name: "Jannatul E.",
      country: "USA",
    },
  ];
  return (
    <>
      {feedbackContent.map((item) => (
        <div className="col-md-6" key={item.id}>
          <div className="testimonial-block-two">
            <div className="logo d-flex align-items-end">
              <img src={item.img} alt="" />
            </div>
            <p>{item.descriptions}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="name">
                {item.name} <span>{item.country}</span>
              </div>
              <img
                src={
                  require("../../../../../assets/images/icon/icon_64.svg")
                    .default
                }
                alt="icon"
                className="icon"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Testimonial;
