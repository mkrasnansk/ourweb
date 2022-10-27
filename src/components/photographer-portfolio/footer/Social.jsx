import React from "react";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      iconName: "Fa.",
      socialLink: "https://www.facebook.com/",
    },
    {
      id: 2,
      iconName: "Insta.",
      socialLink: "https://www.instagram.com/",
    },
    {
      id: 3,
      iconName: "Tw.",
      socialLink: "https://twitter.com/",
    },
  ];
  return (
    <>
      {socialContent.map((social) => (
        <li key={social.id}>
          <a href={social.socialLink} target="_blank" rel="noopener noreferrer">
            {social.iconName}
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
