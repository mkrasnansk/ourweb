import React from "react";
import img1 from "../../assets/images/media/img_22.jpg";

const TextBlock = () => {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 ms-auto order-md-last" data-aos="fade-left">
        <div className="text-wrapper">
          <h6>
            Over <span className="counter">150</span>k+ Client
          </h6>
          <p>
            We created over <span>27,000+</span> stunning & quality products
            over last 5 year with satisfaction.
          </p>
          <div className="name position-relative">Hasan Ka.</div>
        </div>
      </div>
      {/* End col */}

      <div className="col-md-6 text-md-start text-center" data-aos="fade-right">
        <div className="img-container position-relative d-inline-block sm-mt-50">
          <img src={img1} alt="media" />
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default TextBlock;
