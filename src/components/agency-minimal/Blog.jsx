import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/blog/blog_img_01.jpg";
import img2 from "../../assets/images/blog/blog_img_02.jpg";
import img3 from "../../assets/images/blog/blog_img_03.jpg";

const Blog = () => {
  const blogContent = [
    {
      id: 1,
      img: img1,
      date: "23 APR, 2022",
      title: "A Discount Cartridge dsu is Better Ever.",
    },
    {
      id: 2,
      img: img2,
      date: "15 MAY, 2022",
      title: "A Discount Cartridge dsu is Better Ever.",
    },
    {
      id: 3,
      img: img3,
      date: "25 JULY, 2022",
      title: "A Discount Cartridge dsu is Better Ever.",
    },
  ];
  return (
    <>
      {blogContent.map((blog) => (
        <div className="col-md-4" key={blog.id}>
          <article className="blog-meta-two mt-40">
            <div className="img-meta">
              <img src={blog.img} alt="blog avatar" />
            </div>
            <div className="post-meta">
              <div className="date">{blog.date}</div>
              <Link to="/blog-details-v3" className="title">
                {blog.title}
              </Link>
              <Link to="/blog-details-v3" className="theme-btn-three">
                Continue reading <i className="fas fa-angle-right"></i>
              </Link>
            </div>
            {/* <!-- /.post-meta --> */}
          </article>
          {/* <!-- /.blog-meta-two --> */}
        </div>
      ))}
    </>
  );
};

export default Blog;
