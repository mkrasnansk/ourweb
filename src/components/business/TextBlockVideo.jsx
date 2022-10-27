import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/assets/ils_02.png";

const TextBlockVideo = () => {
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
      <div className="row align-items-center">
        <div className="col-xxl-5 col-lg-6 order-lg-last" data-aos="fade-left">
          <div className="text-wrapper ps-xxl-5 pt-0 md-pb-40">
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
            <div className="title-style-one">
              <h2 className="title">
                Why you should <span>choose</span> vCamp?
              </h2>
            </div>
            <p className="meta-info-text text-lg">
              So how does it work? Let’s check our Getting Started tutorial.
            </p>
            <Link to="/about-v2" className="theme-btn-two">
              Learn more
            </Link>
          </div>
        </div>
        {/* End .col */}

        <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
          <img src={img1} alt="illustration" className="illustration" />
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default TextBlockVideo;
