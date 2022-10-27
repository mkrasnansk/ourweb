import React from "react";

const VideoBanner = () => {
  return (
    <video muted="muted" autoPlay={"autoplay"} loop>
      <source
        src="https://creativegigstf.com/video/intro_3.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default VideoBanner;
