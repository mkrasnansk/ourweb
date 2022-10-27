import React from "react";

const AccordionTwo = () => {
  const accordionContent = [
    {
      id: 1,
      title: "Buying",
      collaspeId: "accordionTwo",
      marginClass: "",
      itemContent: [
        {
          id: "1",
          dataBsTarget: "#collapseOne",
          dataBsTargetId: "collapseOne",
          arialExpand: "false",
          itemShow: "",
          collapseItem: "collapsed",
          title: "How does the free trial work?",
          descriptions: `Certainly from my perspective, WordPress has been a great success—with WordPress VIP giving us that enterprise-level of assured quality on top.`,
        },
        {
          id: "2",
          dataBsTarget: "#collapseTwo",
          dataBsTargetId: "collapseTwo",
          arialExpand: "false",
          itemShow: "",
          collapseItem: "collapsed",
          title: "How do you weigh different criteria in your process?",
          descriptions: `Certainly from my perspective, WordPress has been a great success—with WordPress VIP giving us that enterprise-level of assured quality on top.`,
        },
        {
          id: "3",
          dataBsTarget: "#collapseThree",
          dataBsTargetId: "collapseThree",
          arialExpand: "false",
          collapseItem: "collapsed",
          itemShow: "",
          title: "What does First Round look for in an idea?",
          descriptions: `Certainly from my perspective, WordPress has been a great success—with WordPress VIP giving us that enterprise-level of assured quality on top.`,
        },
      ],
    },
    {
      id: 2,
      title: "Using",
      collaspeId: "accordionThree",
      marginClass: "mt-85",
      itemContent: [
        {
          id: "1",
          dataBsTarget: "#collapseFour",
          dataBsTargetId: "collapseFour",
          arialExpand: "false",
          itemShow: "",
          collapseItem: "collapsed",
          title: "What do you look for in a founding team?",
          descriptions: `Certainly from my perspective, WordPress has been a great success—with WordPress VIP giving us that enterprise-level of assured quality on top.`,
        },
        {
          id: "2",
          dataBsTarget: "#collapseFive",
          dataBsTargetId: "collapseFive",
          arialExpand: "false",
          itemShow: "",
          collapseItem: "collapsed",
          title: "Do you recommend Pay as you go or Pre pay?",
          descriptions: `Certainly from my perspective, WordPress has been a great success—with WordPress VIP giving us that enterprise-level of assured quality on top.`,
        },
        {
          id: "3",
          dataBsTarget: "#collapseSix",
          dataBsTargetId: "collapseSix",
          arialExpand: "false",
          collapseItem: "collapsed",
          itemShow: "",
          title: "What does First Round look for in an idea?",
          descriptions: `Certainly from my perspective, WordPress has been a great success—with WordPress VIP giving us that enterprise-level of assured quality on top.`,
        },
      ],
    },
  ];
  return (
    <>
      {accordionContent.map((item) => (
        <div
          className={`accordion accordion-style-two lg-mt-60 ${item.marginClass}`}
          key={item.id}
          id={item.collaspeId}
        >
          <div className="accordion-tag">{item.title}</div>
          {item.itemContent.map((single) => (
            <div className="accordion-item" key={single.id}>
              <div className="accordion-header">
                <button
                  className={`accordion-button ${single.collapseItem}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={single.dataBsTarget}
                  aria-expanded={single.arialExpand}
                >
                  {single.title}
                </button>
              </div>
              <div
                id={single.dataBsTargetId}
                className={`accordion-collapse collapse ${single.itemShow}`}
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>{single.descriptions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default AccordionTwo;
