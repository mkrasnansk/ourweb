import React from "react";
import img1 from "../../../../../assets/images/logo/logo-18.png";
import img2 from "../../../../../assets/images/logo/logo-19.png";
import img3 from "../../../../../assets/images/logo/logo-20.png";
import img4 from "../../../../../assets/images/logo/logo-21.png";
import img5 from "../../../../../assets/images/logo/logo-22.png";
import img6 from "../../../../../assets/images/logo/logo-23.png";

const Partners = () => {
  const partner = [
    { id: 1, img: img1, link: "https://www.google.com/" },
    { id: 2, img: img2, link: "https://www.google.com/" },
    { id: 3, img: img3, link: "https://www.google.com/" },
    { id: 4, img: img4, link: "https://www.google.com/" },
    { id: 5, img: img5, link: "https://www.google.com/" },
    { id: 6, img: img6, link: "https://www.google.com/" },
  ];
  return (
    <>
      {partner.map((item) => (
        <div className="col-sm-4 col-6" key={item.id}>
          <div className="logo d-flex align-items-center">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt="partner" className="tran3s" />
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Partners;
