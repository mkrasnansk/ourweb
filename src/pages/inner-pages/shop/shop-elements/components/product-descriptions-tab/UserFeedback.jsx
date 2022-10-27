import React from "react";
import avtar1 from "../../../../../../assets/images/blog/avatar_01.jpg";
import avtar2 from "../../../../../../assets/images/blog/avatar_02.jpg";

const UserFeedback = () => {
  const feedbackContent = [
    {
      id: 1,
      img: avtar1,
      name: "Hasan ka",
      ratings: (
        <>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </>
      ),
      descriptions: ` One touch of a red-hot stove is usually all we need to avoid that
      kind of discomfort in future. The same true we experience the
      emotional sensation.`,
    },
    {
      id: 2,
      img: avtar2,
      name: "Jannat Na",
      ratings: (
        <>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star"></i>
          </li>
        </>
      ),
      descriptions: ` One touch of a red-hot stove is usually all we need to avoid that
      kind of discomfort in future. The same true we experience the
      emotional sensation.`,
    },
  ];

  return (
    <>
      {feedbackContent.map((item) => (
        <div className="single-comment d-flex align-items-top" key={item.id}>
          <img src={item.img} alt="avatar" className="user-img" />
          <div className="user-comment-data">
            <h6 className="name">{item.name}.</h6>
            <ul className="style-none d-flex rating">{item.ratings}</ul>
            <p>{item.descriptions}</p>
          </div>
          {/* <!-- /.user-comment-data --> */}
        </div>
      ))}
    </>
  );
};

export default UserFeedback;
