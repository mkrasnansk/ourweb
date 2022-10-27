import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import img1 from "../../assets/images/gallery/img_01.jpg";
import img2 from "../../assets/images/gallery/img_03.jpg";
import img3 from "../../assets/images/gallery/img_02.jpg";
import img4 from "../../assets/images/gallery/img_04.jpg";
import { Link } from "react-router-dom";

const PortfolioGallery = () => {
  const portfolioContent = [
    {
      id: 1,
      bigTittle: "My Recent Work.",
      class: "",
      portfolioItem: [
        {
          img: img1,
          title: "Shoe Promo",
          meta: "Product",
          width: 701,
          height: 605,
        },
        {
          img: img2,
          title: "Wedding Shot",
          meta: "Wedding",
          width: 701,
          height: 1092,
        },
      ],
    },
    {
      id: 2,
      bigTittle: "My Recent Work.",
      class: "d-none",
      portfolioItem: [
        {
          img: img3,
          title: " Fashion Show",
          meta: "Fashio, Model",
          width: 701,
          height: 1001,
        },
        {
          img: img4,
          title: "Jumbo Barger",
          meta: "Food",
          width: 701,
          height: 851,
        },
      ],
    },
  ];
  return (
    <>
      <Gallery>
        {portfolioContent.map((item) => (
          <div className="col-sm-6" key={item.id}>
            <div
              className={`title-style-eleven mb-60 ${item.class}`}
              data-aos="fade-up"
            >
              <h2 className="title">{item.bigTittle}</h2>
            </div>
            {/* End title */}

            {item.portfolioItem.map((single, i) => (
              <div
                className="gallery-item mb-100 sm-mb-50"
                data-aos="fade-up"
                key={i}
              >
                <img src={single.img} alt="portfolio" className="w-100" />
                <div className="hover-content">
                  <Link
                    to="/portfolio-details-v4"
                    className="c-name font-recoleta tran3s"
                  >
                    Shoe Promo
                  </Link>
                  <span className="tran3s">Product</span>
                </div>
                {/* <!-- /.hover-content --> */}
                <Item
                  original={single.img}
                  thumbnail={single.img}
                  width={single.width}
                  height={single.height}
                >
                  {({ ref, open }) => (
                    <div className="cursor-pointer arrow tran4s">
                      <span ref={ref} onClick={open}>
                        {" "}
                        +
                      </span>
                    </div>
                  )}
                </Item>
              </div>
            ))}

            {/* <!-- /.gallery-item --> */}
          </div>
        ))}
      </Gallery>
    </>
  );
};

export default PortfolioGallery;
