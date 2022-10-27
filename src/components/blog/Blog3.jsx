import React from "react";
import { Link } from "react-router-dom";
import blog_data from "../../data/blog-data";

const Blog3 = () => {
  const blogContent = blog_data.filter(b => b.blog_3);
  return (
    <>
      {blogContent.map((item) => (
        <article className={`blog-meta-five  ${item.classStyle}`} key={item.id}>
          <div className="img-meta position-relative">
            <img src={item.img} alt="blog post" className="w-100" />
            <Link to={`/blog-details/${item.id}`} className="tag">
              {" "}
              {item.tag}
            </Link>
          </div>
          <div className="post-info">
            {item.featured} - <span className="date">{item.date}</span>
          </div>
          <Link to={`/blog-details/${item.id}`} className="title">
            {" "}
            {item.title}
          </Link>
          <Link to={`/blog-details/${item.id}`} className="theme-btn-three">
            Continue reading <i className="fas fa-angle-right"></i>
          </Link>
        </article>
      ))}
    </>
  );
};

export default Blog3;
