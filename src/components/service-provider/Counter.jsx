import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Counter = () => {
  const [focus, setFocus] = React.useState(false);
  const counterUpContent = [
    {
      id: 1,
      startCount: "0",
      endCount: "3.5",
      endPointText: "k",
      meta: "Using vCamp",
      class: "",
    },
    {
      id: 2,
      startCount: "0",
      endCount: "50",
      endPointText: "k+",
      meta: "Successfull Project",
      class: "bg-color",
    },
  ];
  return (
    <>
      {counterUpContent.map((val) => (
        <div className="col-6" key={val.id}>
          <div className={`counter-block-two text-center ${val.class}`}>
            <div className="main-count font-recoleta">
              <span className="counter">
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={5}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <InView
                      as="span"
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </InView>
                  )}
                </CountUp>
              </span>
              {val.endPointText}
            </div>
            <p>{val.meta}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Counter;
