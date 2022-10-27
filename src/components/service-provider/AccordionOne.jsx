import React from "react";

const AccordionOne = () => {
  const accordionContent = [
    {
      id: "1",
      dataBsTarget: "#collapseOne",
      dataBsTargetId: "collapseOne",
      arialExpand: "true",
      title: "Secure & Trsuted",
      descriptions: `Our founders Dustin Moskovitz and Justin quis Rosenstein met while leading Engineering team at Facebook.`,
      itemShow: "show",
      collapseItem: "",
    },
    {
      id: "2",
      dataBsTarget: "#collapseTwo",
      dataBsTargetId: "collapseTwo",
      arialExpand: "false",
      title: "Expert Members",
      descriptions: `Our founders Dustin Moskovitz and Justin quis Rosenstein met while leading Engineering team at Facebook.`,
      itemShow: "",
      collapseItem: "collapsed",
    },
    {
      id: "3",
      dataBsTarget: "#collapseThree",
      dataBsTargetId: "collapseThree",
      arialExpand: "false",
      title: "Big Resoruces",
      descriptions: `Our founders Dustin Moskovitz and Justin quis Rosenstein met while leading Engineering team at Facebook.`,
      itemShow: "",
      collapseItem: "collapsed",
    },
  ];
  return (
    <>
      {accordionContent.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header">
            <button
              className={`accordion-button ${item.collapseItem}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={item.dataBsTarget}
              aria-expanded={item.arialExpand}
            >
              {item.title}
            </button>
          </div>
          <div
            id={item.dataBsTargetId}
            className={`accordion-collapse collapse ${item.itemShow}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AccordionOne;
