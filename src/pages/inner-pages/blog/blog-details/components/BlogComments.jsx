import React from "react";
import img1 from "../../../../../assets/images/blog/avatar_01.jpg";
import img2 from "../../../../../assets/images/blog/avatar_02.jpg";

const BlogComments = () => {
  const comments = [
    {
      id: 1,
      img: img1,
      name: "Al Hasani",
      date: "13 June, 2018",
      time: "7:30pm",
      text: ` One touch of a red-hot stove is usually all we need to avoid that
      kind of lorem discomfort in future. The same true we experience`,
    },
    {
      id: 2,
      img: img2,
      name: "Rashed Ka",
      date: "13 June, 2018",
      time: "7:30pm",
      text: ` One touch of a red-hot stove is usually all we need to avoid that
      kind of lorem discomfort in future. The same true we experience`,
    },
  ];
  return (
    <>
      {comments.map((comment) => (
        <div className="comment d-flex" key={comment.id}>
          <img src={comment.img} alt="avatar" className="user-avatar" />
          <div className="comment-text">
            <div className="name">{comment.name}.</div>
            <div className="date">
              {comment.date}, {comment.time}
            </div>
            <p>{comment.text}</p>
            <button type="button" className="reply-btn">
              Reply
            </button>
          </div>
          {/* <!-- /.comment-text --> */}
        </div>
      ))}
    </>
  );
};

export default BlogComments;
