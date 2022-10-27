import React from "react";
import img1 from "../../assets/images/icon/icon_108.svg";
import img2 from "../../assets/images/icon/icon_109.svg";
import img3 from "../../assets/images/icon/icon_110.svg";
import img4 from "../../assets/images/icon/icon_111.svg";

const FooterSocial = () => {
  const socialContent = [
    {
      id: 1,
      img: img1,
      socialLink: "https://www.facebook.com/",
    },
    {
      id: 2,
      img: img2,
      socialLink: "https://twitter.com/",
    },
    {
      id: 3,
      img: img3,
      socialLink: "https://www.youtube.com/",
    },
    {
      id: 4,
      img: img4,
      socialLink: "https://www.dribbble.com/",
    },
  ];

  return (
    <>
      {socialContent.map((social) => (
        <li key={social.id}>
          <a href={social.socialLink} target="_blank" rel="noopener noreferrer">
            <img src={social.img} alt="social icon" className="tran3s" />
          </a>
        </li>
      ))}
    </>
  );
};

export default FooterSocial;
