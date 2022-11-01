import React from "react";

const CopyrightSocial = () => {
   const socialContent = [
      {
         id: 1,
         iconName: "fa-facebook-f",
         socialLink: "https://www.facebook.com/",
      },
      {
         id: 2,
         iconName: "fa-twitter",
         socialLink: "https://twitter.com/",
      },
      {
         id: 3,
         iconName: "fa-linkedin-in",
         socialLink: "https://www.linkedin.com/feed/",
      },
   ];

   return (
      <ul className="d-flex justify-content-center justify-content-lg-end style-none">
         {socialContent.map((social) => (
            <li className="px-2 text-primary" key={social.id}>
               <a href={social.socialLink} target="_blank" rel="noopener noreferrer">
                  <i className={`fab ${social.iconName}`}></i>
               </a>
            </li>
         ))}
      </ul>
   );
};

export default CopyrightSocial;
