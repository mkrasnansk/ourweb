import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import heroAvatar from "../../assets/images/media/img_01.jpg";

const TextBlockOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />
      {/* End ModalVideo */}

      <div className="row">
        <div
          className="col-xxl-5 col-lg-6 ms-auto order-lg-last"
          data-aos="fade-left"
        >
          <div className="text-wrapper">
            <div
              className="fancybox video-icon d-flex align-items-center justify-content-center"
              onClick={() => setOpen(true)}
              role="button"
            >
              <img
                src={require("../../assets/images/icon/icon_41.svg").default}
                alt="icon"
              />
            </div>
            {/* End Video trigger wrapper */}
            <div className="title-style-two">
              <h3 className="title">
                We’ve been helping <span>customer</span> globally.
              </h3>
            </div>
            <p className="meta-info-text text-lg">
              Lorem ipsum dolor sit amet, consecte adiel sed do eiusmod tempor
              incidi ut labore split.
            </p>
            <Link to="/about-v1" className="theme-btn-two">
              More about us
            </Link>
          </div>
        </div>
        {/* End .col */}

        <div className="col-xxl-6 col-lg-6" data-aos="fade-up">
          <div className="img-container position-relative">
            <img src={heroAvatar} alt="hero avatar" className="ceo-avatar" />
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
                Jannatul Era. <span>CEO vCamp</span>
              </h6>
            </div>
            {/* <!-- /.quote-wrapper --> */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default TextBlockOne;
