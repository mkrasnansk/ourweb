import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/team/img_06.jpg";
import img2 from "../../assets/images/team/img_07.jpg";
import img3 from "../../assets/images/team/img_08.jpg";
import img4 from "../../assets/images/team/img_09.jpg";
import img5 from "../../assets/images/team/img_10.jpg";

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
    },
    {
      id: 2,
      img: img2,
      name: "Jannat Ferdaus",
      designation: "Marketing Lead",
    },
    {
      id: 3,
      img: img3,
      name: "Jubayer Hasan",
      designation: "Developer",
    },
    {
      id: 4,
      img: img4,
      name: "Martin James",
      designation: "Team Lead",
    },
    {
      id: 5,
      img: img5,
      name: "Jenelia Ra.",
      designation: "Designer",
    },
  ];
  return (
    <>
      <Slider {...settings}>
        {teamContent.map((author) => (
          <div className="item" key={author.id}>
            <div className="team-block-two text-center">
              <div className="img-meta ">
                <img className="w-100" src={author.img} alt="team" />
              </div>
              <h4 className="name">{author.name}</h4>
              <p>{author.designation}</p>
            </div>
            {/* <!-- /.team-block-two --> */}
          </div>
          //   <!-- /.item -->
        ))}
      </Slider>
    </>
  );
};

export default TeamSlider;
