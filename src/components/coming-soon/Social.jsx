import React from "react";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      iconName: "fa-facebook-f",
      socialLink: "https://www.facebook.com/",
    },
    {
      id: 2,
      iconName: "fa-instagram",
      socialLink: "https://www.instagram.com/",
    },
    {
      id: 3,
      iconName: "fa-pinterest-p",
      socialLink: "https://www.pinterest.com/",
    },
    {
      id: 4,
      iconName: "fa-linkedin-in",
      socialLink: "https://www.linkedin.com/feed/",
    },
  ];

  return (
    <ul className="social-icon d-flex justify-content-center style-none">
      {socialContent.map((social) => (
        <li key={social.id}>
          <a href={social.socialLink} target="_blank" rel="noopener noreferrer">
            <i className={`fab ${social.iconName}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
