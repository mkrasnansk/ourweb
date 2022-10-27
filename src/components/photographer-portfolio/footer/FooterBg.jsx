import React from "react";
import img1 from "../../../assets/images/media/img_117.jpg";
import img2 from "../../../assets/images/media/img_118.jpg";
import img3 from "../../../assets/images/media/img_119.jpg";
import img4 from "../../../assets/images/media/img_120.jpg";
import img5 from "../../../assets/images/shape/shape_62.svg";

const FooterBg = () => {
  return (
    <>
      <img
        src={img1}
        alt="shape"
        className="shapes shape-one"
        data-aos="fade-up"
        data-aos-delay="100"
      />
      <img
        src={img2}
        alt="shape"
        className="shapes shape-two"
        data-aos="fade-up"
        data-aos-delay="100"
      />
      <img
        src={img3}
        alt="shape"
        className="shapes shape-three"
        data-aos="fade-up"
      />
      <img
        src={img4}
        alt="shape"
        className="shapes shape-four"
        data-aos="fade-up"
      />
      <img src={img5} alt="shape" className="shapes shape-five" />
    </>
  );
};

export default FooterBg;
