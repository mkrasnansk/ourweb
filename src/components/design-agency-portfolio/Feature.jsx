import React from "react";

const Feature = () => {
  const featureContent = [
    {
      id: 1,
      title: "Designing",
      list: [
        "Personalization",
        "Third-Party Integrations",
        "First-Party Analytics",
        "Hosting Setup",
        "Securty",
      ],
    },
    {
      id: 2,
      title: "Print/Brand",
      list: [
        "Full Consultation",
        "Code Review",
        "Staff Augmentation",
        "Support",
      ],
    },
    {
      id: 3,
      title: "Art/Illustration",
      list: [
        "Personalization",
        "Third-Party Integrations",
        "First-Party Analytics",
        "Hosting Setup",
        "Securty",
      ],
    },
  ];
  return (
    <>
      {featureContent.map((item) => (
        <div className="col-xl-3 col-md-4" key={item.id}>
          <div className="card-style-sixteen mb-40">
            <div className="card-title mb-40 lg-mb-20">{item.title}</div>
            <ul className="style-none">
              {item.list.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          </div>
          {/* <!-- /.card-style-sixteen --> */}
        </div>
      ))}
    </>
  );
};

export default Feature;
