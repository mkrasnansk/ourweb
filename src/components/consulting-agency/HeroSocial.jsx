import React from "react";

const HeroSocial = () => {
  const socialContent = [
    { name: "Fb.", link: "https://www.facebook.com/" },
    { name: "Tw.", link: "https://twitter.com/home" },
    { name: "Inst.", link: "https://www.instagram.com/" },
  ];
  return (
    <ul className="style-none d-flex align-items-center">
      {socialContent.map((social, i) => (
        <li key={i}>
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            {social.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default HeroSocial;
