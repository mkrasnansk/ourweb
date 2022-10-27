import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import img1 from "../../assets/images/shop/img_03.png";
import img2 from "../../assets/images/shop/img_04.png";
import img3 from "../../assets/images/shop/img_05.png";
import img4 from "../../assets/images/shop/img_06.png";
import img5 from "../../assets/images/shop/img_09.png";

const AllCollection = () => {
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
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          arrows: false,
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

  const allCollection = [
    {
      id: 1,
      img: img1,
      categorie: "WOMAN",
    },
    {
      id: 2,
      img: img2,
      categorie: "Accessories",
    },
    {
      id: 3,
      img: img3,
      categorie: "FURNITURE",
    },
    {
      id: 4,
      img: img4,
      categorie: "SHOE",
    },
    {
      id: 5,
      img: img5,
      categorie: "Clothe",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {allCollection.map((item) => (
          <div className="item" key={item.id}>
            <div className="product-block-one">
              <Link
                to="/grid-sidebar"
                className="d-flex align-items-center justify-content-center h-100"
              >
                <img
                  src={item.img}
                  alt="product"
                  className="product-img tran4s"
                />
              </Link>
              <Link to="/grid-sidebar" className="category-tag">
                {item.categorie}
              </Link>
            </div>
            {/* <!-- /.product-block-one --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default AllCollection;
