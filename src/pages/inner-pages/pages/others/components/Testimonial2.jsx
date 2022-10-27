import React from "react";

const Testimonial2 = () => {
  const feedbackContent = [
    {
      id: 1,
      ratings: (
        <>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </>
      ),
      descriptions: `Certainly from my perspective been great success with lore giving that enterprises level magna assured quality due issue.`,
      name: "Bostami H.",
      country: "KSA",
    },
    {
      id: 2,
      ratings: (
        <>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </>
      ),
      descriptions: `Certainly from my perspective been great success with lore giving that enterprises level magna assured quality due issue.`,
      name: "Jannatul E.",
      country: "USA",
    },
    {
      id: 3,
      ratings: (
        <>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </>
      ),
      descriptions: `Certainly from my perspective been great success with lore giving that enterprises level magna assured quality due issue.`,
      name: "Bostami H.",
      country: "KSA",
    },
    {
      id: 4,
      ratings: (
        <>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </>
      ),
      descriptions: `Certainly from my perspective been great success with lore giving that enterprises level magna assured quality due issue.`,
      name: "Jannatul E.",
      country: "USA",
    },
  ];
  return (
    <>
      {feedbackContent.map((item) => (
        <div className="col-sm-6" key={item.id}>
          <div className="testimonial-block-one mb-40">
            <div className="icon d-flex align-items-center justify-content-center">
              <img
                src={
                  require("../../../../../assets/images/icon/icon_15.svg")
                    .default
                }
                alt="icon"
              />
            </div>
            <ul className="style-none d-flex rating pb-15">{item.ratings}</ul>
            <blockquote>{item.descriptions}</blockquote>
            <div className="name">
              {" "}
              {item.name} <span>{item.country}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Testimonial2;
