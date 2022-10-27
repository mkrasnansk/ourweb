import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const counterUpContent = [
  {
    id: 1,
    startCount: "0",
    endCount: "3.5",
    endPointText: "k",
    meta: "Job done successfully",
    animationDelay: "0",
  },
  {
    id: 2,
    startCount: "0",
    endCount: "12",
    endPointText: "",
    meta: "Award winner",
    animationDelay: "100",
  },
  {
    id: 3,
    startCount: "0",
    endCount: "10",
    endPointText: "+",
    meta: "Years Experience",
    animationDelay: "200",
  },
  {
    id: 4,
    startCount: "0",
    endCount: "2",
    endPointText: "k+",
    meta: "Worldwide Client",
    animationDelay: "300",
  },
];

const CounterUp = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={val.animationDelay}
          key={val.id}
        >
          <div className="counter-block-one text-center mb-45">
            <img
              src={require("../../assets/images/shape/shape_65.svg").default}
              alt=""
              className="m-auto"
            />
            <div className="main-count text-lg fw-light pt-10 font-recoleta">
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
            <p className="theme-mb-0">{val.meta}</p>
          </div>
          {/* <!-- /.counter-block-one --> */}
        </div>
      ))}
    </>
  );
};

export default CounterUp;
