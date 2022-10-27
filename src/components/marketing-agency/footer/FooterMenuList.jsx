import React from "react";
import { Link } from "react-router-dom";

const FooterMenuList = () => {
  const footerMenuContent = [
    {
      id: 1,
      title: "Links",
      colClass: "col-lg-2 col-md-3",
      list: [
        { name: "Home", routeLink: "/" },
        { name: "Pricing", routeLink: "/" },
        { name: "About Us", routeLink: "/" },
        { name: "Service", routeLink: "/" },
        { name: "Features", routeLink: "/" },
        { name: "Blog", routeLink: "/" },
      ],
    },
    {
      id: 2,
      title: "Legal",
      colClass: "col-xxl-2 col-lg-3 col-md-4",
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
        <div
          className={`${menuItem.colClass} col-sm-6 mb-40`}
          key={menuItem.id}
        >
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
    </>
  );
};

export default FooterMenuList;
