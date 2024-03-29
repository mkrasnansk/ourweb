import React from "react";
import { Link } from "react-router-dom";
import FooterNewsletter from "./FooterNewsletter";

const FooterMenuListTwo = ({ className = "" }) => {
   const footerMenuContent = [
      {
         id: 1,
         title: "Links",
         colClass: "col-lg-2",
         list: [
            { name: "About Us", routeLink: "/" },
            { name: "Join Us", routeLink: "/" },
            { name: "Gallery", routeLink: "/" },
            { name: "Contact", routeLink: "/" },
         ],
      },
      {
         id: 2,
         title: "Legal",
         colClass: "col-lg-3",
         list: [
            { name: "Terms of Use", routeLink: "/" },
            { name: "Terms & Conditions", routeLink: "/" },
            { name: "Privacy Policy", routeLink: "/" },
            { name: "Cookie Policy", routeLink: "/" },
         ],
      },
   ];

   return (
      <>
         {footerMenuContent.map((menuItem) => (
            <div className={`${menuItem.colClass} col-md-3 col-sm-6 mb-40 text-center text-md-start`} key={menuItem.id}>
               <h5 className="title">{menuItem.title}</h5>
               <ul className="footer-list style-none">
                  {menuItem.list.map((list, i) => (
                     <li key={i}>
                        <Link to={list.routeLink}>{list.name}</Link>
                     </li>
                  ))}
               </ul>
            </div>
         ))}

         <div className="col-lg-4 col-md-6 mb-40 text-center text-md-start">
            <FooterNewsletter />
         </div>
      </>
   );
};

export default FooterMenuListTwo;
