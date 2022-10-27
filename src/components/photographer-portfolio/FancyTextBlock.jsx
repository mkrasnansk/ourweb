import React from "react";
import img1 from "../../assets/images/assets/sign_01.png";
import heroImg from "../../assets/images/media/img_111.jpg";
import sticker from "../../assets/images/assets/sticker_02.png";

const FancyTextBlock = () => {
  return (
    <div className="row">
      <div
        className="col-xl-6 col-lg-6 ms-auto order-lg-2"
        data-aos="fade-left"
      >
        <div className="text-wrapper ps-xxl-5">
          <div className="title-style-eleven">
            <h2 className="title">
              Hi. I’m <br />
              Rashed Reza
            </h2>
          </div>
          <div className="quote-wrapper">
            <img
              src={require("../../assets/images/icon/icon_103.svg").default}
              alt="icon"
              className="icon"
            />
            <p>
              A passionate <i>photograher</i> who are working in this field for{" "}
              <i>last 10 years.</i> I’m ready to give you my best.
            </p>
            <img src={img1} alt="" className="sign" />
          </div>
          {/* <!-- /.quote-wrapper --> */}
        </div>
        {/* <!-- /.text-wrapper --> */}
      </div>
      {/* End .col */}

      <div className="col-lg-5" data-aos="fade-right">
        <div className="img-wrapper">
          <img src={sticker} alt="" className="brand-logo" />
          <img
            src={require("../../assets/images/shape/shape_59.svg").default}
            alt="shape"
            className="shapes shape-one"
          />
          <div className="img-meta">
            <img src={heroImg} alt="media" />
          </div>
        </div>
        {/* <!-- /.img-wrapper --> */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default FancyTextBlock;
