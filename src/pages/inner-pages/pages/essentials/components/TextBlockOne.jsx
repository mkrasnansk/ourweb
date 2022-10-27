import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import heroAvatar from "../../../../../assets/images/media/img_40.jpg";

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
          <div className="text-wrapper pt-0">
            <div
              className="fancybox video-icon d-flex align-items-center justify-content-center"
              onClick={() => setOpen(true)}
              role="button"
            >
              <img
                src={
                  require("../../../../../assets/images/icon/icon_41.svg")
                    .default
                }
                alt="icon"
              />
            </div>
            {/* End Video trigger wrapper */}
            <div className="title-style-two">
              <h3 className="title">
                We’ve been helping <span>customer</span> globally.
              </h3>
            </div>
            <h6>Who we are?</h6>
            <p className="meta-info-text-two">
              Our founders Dustin Moskovitz and Justin Rosenstein met while
              leading Engineering teams at Facebook. As operations scaled, they
              grew frustrated by how difficult.
            </p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-xxl-6 col-lg-6" data-aos="fade-up">
          <div className="img-container position-relative">
            <img src={heroAvatar} alt="hero avatar" className="ceo-avatar" />
            <div className="quote-wrapper">
              <img
                src={
                  require("../../../../../assets/images/icon/icon_10.svg")
                    .default
                }
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
