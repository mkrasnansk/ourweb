import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/shop/img_07.png";
import img2 from "../../assets/images/shop/img_08.png";

const Banner = () => {
  const bannerContent = [
    {
      id: 1,
      img: img1,
      bg: "#FFFBE6",
      offer: "35% Off",
      title: "NEW COLLECTION",
    },
    {
      id: 2,
      img: img2,
      bg: "#EFFAFF",
      offer: "Vacations Offer",
      title: "NEW COLLECTION",
    },
  ];
  return (
    <>
      {bannerContent.map((item) => (
        <div className="col-md-6" data-aos="fade-right" key={item.id}>
          <div className="banner-text-meta" style={{ background: item.bg }}>
            <img src={item.img} alt="" className="promo-img" />
            <div className="fancy-text">{item.offer}</div>
            <h3>{item.title}</h3>
            <Link to="/grid-sidebar" className="theme-btn-eight ripple-btn">
              Shop Now
            </Link>
          </div>
          {/* <!-- /.banner-text-meta --> */}
        </div>
      ))}
    </>
  );
};

export default Banner;
