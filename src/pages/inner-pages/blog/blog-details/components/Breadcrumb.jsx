import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ className = "" }) => {
  return (
    <ol className={`breadcrumb ${className}`}>
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/blog-v4">Personal</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Designer’s Checklist for Every UX/UI Project.
      </li>
    </ol>
  );
};

export default Breadcrumb;
