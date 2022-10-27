import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/images/blog/add-bg.jpg";

const BlogSidebar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="blog-sidebar-search mb-60">
        <form onClick={handleSubmit}>
          <input type="text" placeholder="Search.." />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
      {/* <!-- /.blog-sidebar-search --> */}

      <div className="blog-sidebar-category mb-80 md-mb-50">
        <h4 className="sidebar-title">Category</h4>
        <ul className="style-none">
          <li>
            <Link to="/blog-v2">Digital (3)</Link>
          </li>
          <li>
            <Link to="/blog-v3">Marketing (4)</Link>
          </li>
          <li>
            <Link to="/blog-v4">Digital (2)</Link>
          </li>
          <li>
            <Link to="/blog-v1">WordPress (8)</Link>
          </li>
          <li>
            <Link to="/blog-v2">Plugin (5)</Link>
          </li>
        </ul>
      </div>
      {/* <!-- /.blog-sidebar-category --> */}

      <div
        className="sidebar-banner-add"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="banner-content">
          <h4>
            Banner Advertise <br />
            Heading
          </h4>
          <p>From its medieval origins digital</p>
          <a href="#" className="ripple-btn">
            Download
          </a>
        </div>
      </div>
      {/* <!-- /.sidebar-banner-add -->  */}
    </>
  );
};

export default BlogSidebar;
