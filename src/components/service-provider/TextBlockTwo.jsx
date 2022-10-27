import React from "react";
import { Link } from "react-router-dom";

const TextBlockTwo = () => {
  const textBlockContent = [
    {
      id: 1,
      title: (
        <>
          Provide <br /> best solution by our expert.
        </>
      ),
      descriptions: `Client to create with our talented expert.`,
      parentClass: "left-side",
      innerClass: "ms-lg-auto",
      routeLink: "/service-v2",
      animDirection: "fade-right",
    },
    {
      id: 2,
      title: (
        <>
          Our recent <br /> digital & strategy projects.
        </>
      ),
      descriptions: `Client to create with our talented expert.`,
      parentClass: "right-side",
      innerClass: "me-auto",
      routeLink: "/service-v3",
      animDirection: "fade-left",
    },
  ];
  return (
    <>
      {textBlockContent.map((val) => (
        <div className={`col-lg-6 d-flex ${val.parentClass}`} key={val.id}>
          <div className="content-wrapper w-100 h-100 position-relative">
            <div
              className={`text-wrapper position-relative ${val.innerClass}`}
              data-aos={val.animDirection}
            >
              <h2 className="title">{val.title}</h2>
              <p>{val.descriptions}</p>
              <Link to={val.routeLink} className="more-button ripple-btn">
                <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
            {/* <!-- /.text-wrapper --> */}
          </div>
          {/* <!-- /.content-wrapper --> */}
        </div>
      ))}
    </>
  );
};

export default TextBlockTwo;
