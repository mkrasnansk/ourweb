import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/team/img_01.jpg";
import img2 from "../../assets/images/team/img_02.jpg";
import img3 from "../../assets/images/team/img_03.jpg";
import img4 from "../../assets/images/team/img_04.jpg";
import img5 from "../../assets/images/team/img_05.jpg";

const TeamSlider = () => {
  //   slider settings
  const settings = {
    dots: false,
    arrows: true,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const teamContent = [
    {
      id: 1,
      img: img1,
      name: "Bostami Hasan",
      designation: "Developer",
      socialList: [
        { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
        { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
        { icon: "fa-pinterest-p", profileLink: "https://www.pinterest.com/" },
        {
          icon: "fab fa-linkedin-in",
          profileLink: "https://www.linkedin.com/feed/",
        },
      ],
    },
    {
      id: 2,
      img: img2,
      name: "Jannat Ferdaus",
      designation: "Marketing Lead",
      socialList: [
        { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
        { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
        { icon: "fa-pinterest-p", profileLink: "https://www.pinterest.com/" },
        {
          icon: "fab fa-linkedin-in",
          profileLink: "https://www.linkedin.com/feed/",
        },
      ],
    },
    {
      id: 3,
      img: img3,
      name: "Jubayer Hasan",
      designation: "Developer",
      socialList: [
        { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
        { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
        { icon: "fa-pinterest-p", profileLink: "https://www.pinterest.com/" },
        {
          icon: "fab fa-linkedin-in",
          profileLink: "https://www.linkedin.com/feed/",
        },
      ],
    },
    {
      id: 4,
      img: img4,
      name: "Martin James",
      designation: "Team Lead",
      socialList: [
        { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
        { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
        { icon: "fa-pinterest-p", profileLink: "https://www.pinterest.com/" },
        {
          icon: "fab fa-linkedin-in",
          profileLink: "https://www.linkedin.com/feed/",
        },
      ],
    },
    {
      id: 5,
      img: img5,
      name: "Jenelia Ra.",
      designation: "Designer",
      socialList: [
        { icon: "fa-facebook-f", profileLink: "https://www.facebook.com/" },
        { icon: "fa-instagram", profileLink: "https://www.instagram.com/" },
        { icon: "fa-pinterest-p", profileLink: "https://www.pinterest.com/" },
        {
          icon: "fab fa-linkedin-in",
          profileLink: "https://www.linkedin.com/feed/",
        },
      ],
    },
  ];
  return (
    <>
      <Slider {...settings}>
        {teamContent.map((author) => (
          <div className="item" key={author.id}>
            <div className="team-block-one position-relative">
              <img
                src={author.img}
                alt="team avatar"
                className="team-img w-100"
              />
              <div className="overlay-bg d-flex align-items-end">
                <div className="hover-content tran3s">
                  <h6 className="name">{author.name}</h6>
                  <div className="position">{author.designation}</div>
                  <ul className="social-icon d-flex style-none">
                    {author.socialList.map((list, i) => (
                      <li key={i}>
                        <a
                          href={list.profileLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={`fab ${list.icon}`}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* End hover-content */}
              </div>
              {/* <!-- /.overlay-bg --> */}
            </div>
            {/* <!-- /.team-block-one --> */}
          </div>
          //   <!-- /.item -->
        ))}
      </Slider>
    </>
  );
};

export default TeamSlider;
