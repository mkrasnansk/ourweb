import React from "react";

const TextBlock = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="title-style-seven md-pb-10">
          <h2 className="title">
            We Invest in{" "}
            <span>
              Founders.
              <img
                src={require("../../assets/images/shape/shape_54.svg").default}
                alt=""
              />
            </span>
          </h2>
        </div>
        {/* <!-- /.title-style-seven --> */}
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <div className="text-wrapper">
          <p className="text-lg">
            We are the startup studio with a mission to partner with the best
            founders connecting them with ideas & placing them in unparalleled
            eco system of company builders and resources for growth.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt{" "}
          </p>
          <h6 className="name">
            Hasan Ka. <span>CEO vCamp</span>
          </h6>
        </div>
        {/* <!-- /.text-wrapper --> */}
      </div>
    </>
  );
};

export default TextBlock;
