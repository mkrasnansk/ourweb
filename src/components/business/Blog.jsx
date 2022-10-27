import React from "react";
import { Link } from "react-router-dom";
// logo icon
import img1 from "../../assets/images/blog/logo_03.jpg";
import img2 from "../../assets/images/blog/logo_01.jpg";
import img3 from "../../assets/images/blog/logo_02.jpg";
import img4 from "../../assets/images/blog/logo_04.jpg";
import img5 from "../../assets/images/blog/logo_05.jpg";

const Blog = () => {
  const blogContent = [
    {
      id: 1,
      orderClass: "order-lg-3",
      tag: "Plugin",
      title: "Speaking remotely at WordCamp US.",
      meta: "Trending",
      date: "18 July 22",
      img: img1,
      postTypeClass: "feature-post",
    },
    {
      id: 2,
      orderClass: "order-lg-1",
      tag: " Soltuion",
      title: " Our experience at WordCamp in Nagpur",
      meta: "Fetured",
      date: "18 July 22",
      img: img2,
      postTypeClass: "",
    },
    {
      id: 3,
      orderClass: "order-lg-2",
      tag: "theme",
      title: " Motivation defining Moment of self Improvement",
      meta: "Featured",
      date: "18 July 22",
      img: img3,
      postTypeClass: "",
    },
    {
      id: 4,
      orderClass: "order-lg-4",
      tag: "wordpress",
      title: "Lets catch up at amd roadshow in the vegas 2021!",
      meta: "New",
      date: "18 July 22",
      img: img4,
      postTypeClass: "",
    },
    {
      id: 5,
      orderClass: "order-lg-5",
      tag: "event",
      title: "Monthly Roundup event December 2019.",
      meta: "New",
      date: "18 July 22",
      img: img5,
      postTypeClass: "",
    },
  ];

  return (
    <>
      {blogContent.map((item) => (
        <div
          className={`col-lg-4 col-md-6 d-flex ${item.orderClass}`}
          key={item.id}
        >
          <article className={`blog-meta-one ${item.postTypeClass}`}>
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
