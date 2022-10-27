import React from "react";

const Service = () => {
  const serviceContent = [
    {
      id: 1,
      delayAnimation: 0,
      title: "Media & Publishing",
      text: (
        <>
          <p>
            Placeholder text commonly used in print, & <span>publishing</span>{" "}
            industries for <span>previewing</span> layouts and visual{" "}
            <span>mockups</span>
          </p>
        </>
      ),
    },
    {
      id: 2,
      delayAnimation: 100,
      title: "Technology",
      text: (
        <>
          <p>
            eiusmod tempor <span>incididunt</span> ut labore et dolore{" "}
            <span>magnaliq</span>. Ut enim ad minimveniam
          </p>
        </>
      ),
    },
    {
      id: 3,
      delayAnimation: 200,
      title: "Enterprise Service",
      text: (
        <>
          <p>
            Take a deep dive and try our <span>listof over 40</span> unique{" "}
            <span>generators</span>, find placeholder images for your next
          </p>
        </>
      ),
    },
  ];
  return (
    <>
      {serviceContent.map((item) => (
        <div
          className="col-md-4 col-sm-6 d-flex mt-45"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <div className="card-style-seven">
            <h4>{item.title}</h4>
            {item.text}
          </div>
        </div>
      ))}
    </>
  );
};

export default Service;
