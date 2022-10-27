import React from "react";
import { Link } from "react-router-dom";
import blog_data from "../../data/blog-data";

const Blog2 = () => {
  const blogContent = blog_data.filter(b => b.blog_2);

  return (
    <>
      {blogContent.map((item) => (
        <article className="blog-meta-five" key={item.id}>
          <div className="img-meta position-relative">
            <img src={item.img} alt="blog post" className="w-100" />
          </div>
          <Link to={`/blog-details/${item.id}`} className="tag">
            {item.tag}
          </Link>
          <Link to={`/blog-details/${item.id}`} className="title">
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

export default Blog2;
