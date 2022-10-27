import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogContent = [
    {
      id: 1,
      tag: "Event",
      title: "Speaking remotely at WordCamp US.",
      meta: "Trending",
      date: "18 July 22",
      postClass: "featured-post",
    },
    {
      id: 2,
      tag: " Plugin",
      title: "Ultimate uide to be a smart founder.",
      meta: "Fetured",
      date: "18 July 22",
      postClass: "",
    },
    {
      id: 3,
      tag: "Wordpress",
      title: "Monthly Roundup event December 2021.",
      meta: "Featured",
      date: "18 July 22",
      postClass: "",
    },
  ];

  return (
    <>
      {blogContent.map((blog) => (
        <div className="col-lg-4 col-md-6 lg-mt-40" key={blog.id}>
          <article className={`blog-meta-three ${blog.postClass}`}>
            <Link to="blog-details-v1" className="tag">
              {blog.tag}
            </Link>
            <Link to="blog-details-v1" className="title">
              {blog.title}
            </Link>
            <div className="d-flex align-items-center justify-content-between">
              <div className="post-info">
                {blog.meta} - <span className="date">{blog.date}</span>
              </div>
              <Link to="blog-details-v1" className="read-more tran3s">
                <img
                  src={require("../../assets/images/icon/icon_74.svg").default}
                  alt="icn"
                />
              </Link>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
