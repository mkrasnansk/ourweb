import React from "react";
import { Link } from "react-router-dom";
import Popup from "../../components/common/video-popup/Popup";

const VideoFeatureList = () => {
  return (
    <div className="text-wrapper">
      <Popup />
      <div className="title-style-nine pt-40 pb-45 lg-pb-30">
        <h2 className="title">Why Choose vCamp?</h2>
      </div>
      <p className="meta-info-text">
        So how does it work? Let’s check our Getting Started tutorial pre-made
        templates.
      </p>

      <ul className="style-none">
        <li>
          Makes them <span>purchase</span> your product, service and quis
          interact website due.
        </li>
        <li>
          Holds and catches their <span>attention</span> lorem.
        </li>
        <li>Diverts them to your brand.</li>
      </ul>
      {/* End style-one */}

      <Link to="/contact-v2" className="theme-btn-twelve mt-45 lg-mt-30">
        Consult with an exprt now!
      </Link>
    </div>
  );
};

export default VideoFeatureList;
