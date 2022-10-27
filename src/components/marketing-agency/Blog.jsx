import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/blog/blog_img_22.jpg";
import img2 from "../../assets/images/blog/blog_img_23.jpg";

const Blog = () => {
  const blogContent = [
    {
      id: 1,
      img: img1,
      tag: "Solution",
      featured: "Featured - ",
      date: "18 Jul 2022",
      title: " Print, publishing qui visual ux layout mockups.",
      delayAnimation: 0,
    },
    {
      id: 2,
      img: img2,
      tag: "MARKETING",
      featured: "",
      date: "22 Jul 2022",
      title: " Designer’s Checklist for Every UX/UI Project.",
      delayAnimation: 100,
    },
  ];
  return (
    <>
      {blogContent.map((item) => (
        <div
          className="col-sm-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <article className="blog-meta-six mt-40">
            <div className="img-meta position-relative">
              <img src={item.img} alt="" className="w-100" />
              <Link to="/blog-details-v3" className="tag">
                {item.tag}
              </Link>
            </div>
            <div className="post-info">
              {item.featured} <span className="date">{item.date}</span>
            </div>
            <Link to="/blog-details-v3" className="title">
              {item.title}
            </Link>
            <Link to="/blog-details-v3" className="read-more font-zen tran3s">
              Continue reading <i className="fas fa-angle-right"></i>
            </Link>
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
