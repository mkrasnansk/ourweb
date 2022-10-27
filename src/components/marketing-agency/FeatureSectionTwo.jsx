import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const counterUpContent = [
  {
    id: 1,
    startCount: "0",
    endCount: "10",
    endPointText: "+",
    title: "Years Expereince",
    text: (
      <>
        We’v experience more than <span>10+ years</span> with success.
      </>
    ),
  },
  {
    id: 2,
    startCount: "0",
    endCount: "3",
    endPointText: "+",
    title: "Award Winner",
    text: <>We achive lot for our work from top certified agency.</>,
  },
  {
    id: 3,
    startCount: "0",
    endCount: "3",
    endPointText: "k+",
    title: "Successfull Job",
    text: (
      <>
        We’v more than happy <span>3000+ client</span> all over the world.
      </>
    ),
  },
];

const FeatureSectionTwo = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      {counterUpContent.map((val, i) => (
        <div className="col-lg-4" key={val.id}>
          <div className="card-style-fifteen text-center">
            <div className="main-count font-zen">
              {" "}
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

            <h4 className="font-zen">{val.title}</h4>
            <p>{val.text}</p>
            <a href="#" className="arrow tran3s">
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
          {/* <!-- /.counter-block-one --> */}
        </div>
      ))}
    </>
  );
};

export default FeatureSectionTwo;
