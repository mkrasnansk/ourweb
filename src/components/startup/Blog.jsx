import React from "react";
import { Link } from "react-router-dom";
// logo icon
import img1 from "../../assets/images/blog/logo_03.jpg";
import img2 from "../../assets/images/blog/logo_01.jpg";
import img3 from "../../assets/images/blog/logo_02.jpg";

const Blog = () => {
  const blogContent = [
    {
      id: 1,
      tag: "Plugin",
      title: "Speaking remotely at WordCamp US.",
      meta: "Trending",
      date: "18 July 22",
      img: img1,
    },
    {
      id: 2,
      tag: " Soltuion",
      title: " Our experience at WordCamp in Nagpur",
      meta: "Fetured",
      date: "18 July 22",
      img: img2,
    },
    {
      id: 3,
      tag: "theme",
      title: " Motivation defining Moment of self Improvement",
      meta: "Featured",
      date: "18 July 22",
      img: img3,
    },
  ];

  return (
    <>
      {blogContent.map((item) => (
        <div className="col-lg-4 col-md-6 d-flex" key={item.id}>
          <article className={`blog-meta-three`}>
            <Link to="/blog-details-v1" className="tag">
              {item.tag}
            </Link>
            <Link to="/blog-details-v1" className="title">
              {item.title}
            </Link>
            <div className="post-info">
              {item.meta} - <span className="date">{item.date}</span>
            </div>
            <div className="post-footer d-flex align-items-center justify-content-between">
              <img src={item.img} alt="brand" className="logo" />
              <Link to="/blog-details-v1" className="read-more tran3s">
                <img
                  src={require("../../assets/images/icon/icon_16.svg").default}
                  alt="icon"
                />
              </Link>
            </div>
            {/* <!-- /.post-footer --> */}
          </article>
          {/* <!-- /.blog-meta-one --> */}
        </div>
      ))}
    </>
  );
};

export default Blog;
