import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/media/img_14.jpg";

const TextBlockTwo = () => {
  return (
    <div className="row align-items-end">
      <div
        className="col-xxl-6 col-lg-7 ms-auto order-lg-last"
        data-aos="fade-left"
      >
        <div className="text-wrapper">
          <div className="title-style-two">
            <h3 className="title">
              We’ve been helping <span>enterprise</span> globally.
            </h3>
          </div>
          <p className="meta-info-text text-lg">
            Lorem ipsum dolor sit amet, consecte adiel sed do eiusmod tempo ut
            labore.Lorem ipsum dolor sit amet, consecte adiel sed do eiusmod
            tempor incidi ut split.
          </p>
          <Link to="/about-v2" className="theme-btn-three btn-color">
            Lear more about us <i className="fas fa-angle-right"></i>
          </Link>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xxl-6 col-lg-5" data-aos="fade-up">
        <div className="img-container position-relative">
          <img src={heroImg} alt="hero" className="ceo-avatar" />
          <img
            src={require("../../assets/images/shape/shape_16.svg").default}
            alt="shape"
            className="shapes shape-one"
          />
          <div className="quote-wrapper">
            <img
              src={require("../../assets/images/icon/icon_10.svg").default}
              alt="icon"
              className="icon"
            />
            <blockquote>
              Our partnership with vCamp Their support helped us to solve
              everything.
            </blockquote>
            <h6 className="name">
              Bostami Ha. <span>CEO vCamp</span>
            </h6>
          </div>
          {/* <!-- /.quote-wrapper --> */}
        </div>
      </div>
    </div>
  );
};

export default TextBlockTwo;
