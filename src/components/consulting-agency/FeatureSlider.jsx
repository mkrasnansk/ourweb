import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import img1 from "../../assets/images/media/img_41.jpg";
import img2 from "../../assets/images/media/img_42.jpg";
import img3 from "../../assets/images/media/img_43.jpg";
import img4 from "../../assets/images/media/img_44.jpg";
import img5 from "../../assets/images/media/img_45.jpg";

const FeatureSlider = () => {
  //   slider settings
  const settings = {
    dots: false,
    arrows: true,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const featureContent = [
    {
      id: 1,
      img: img1,
      title: (
        <>
          Best Selling
          <br />
          plugin.
        </>
      ),
      text: `Lorem ipsum dolor sit amet, consu adielit, sed do eiusmod`,
    },
    {
      id: 2,
      img: img2,
      title: (
        <>
          Best Service
          <br />
          provider.
        </>
      ),
      text: `Lorem ipsum dolor sit amet, consu adielit, sed do eiusmod`,
    },
    {
      id: 3,
      img: img3,
      title: (
        <>
          Highly Train
          <br />
          expert.
        </>
      ),
      text: `Lorem ipsum dolor sit amet, consu adielit, sed do eiusmod`,
    },
    {
      id: 4,
      img: img4,
      title: (
        <>
          Award <br />
          winner.
        </>
      ),
      text: `Lorem ipsum dolor sit amet, consu adielit, sed do eiusmod`,
    },
    {
      id: 5,
      img: img5,
      title: (
        <>
          Best Service
          <br />
          provider.
        </>
      ),
      text: `Lorem ipsum dolor sit amet, consu adielit, sed do eiusmod`,
    },
  ];

  return (
    <>
      <Slider {...settings} arrows={true}>
        {featureContent.map((item) => (
          <div className="item" key={item.id}>
            <div className="card-style-five">
              <img src={item.img} alt="slider" className="img-meta" />
              <div className="hover-content">
                <h3 className="font-recoleta title">
                  <Link to="/portfolio-details-v1">{item.title}</Link>
                </h3>
                <p>{item.text}</p>
              </div>
            </div>
            {/* <!-- /.card-style-five --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeatureSlider;
