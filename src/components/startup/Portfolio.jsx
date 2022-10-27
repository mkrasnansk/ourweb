import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import img1 from "../../assets/images/media/img_31.jpg";
import img2 from "../../assets/images/media/img_32.jpg";
import img3 from "../../assets/images/media/img_33.jpg";
import img4 from "../../assets/images/media/img_34.jpg";

const Portfolio = () => {
  const portfolioContent = [
    {
      id: 1,
      animDelayTime: 0,
      img: img1,
    },
    {
      id: 2,
      animDelayTime: 100,
      img: img2,
    },
    {
      id: 3,
      animDelayTime: 0,
      img: img3,
    },
    {
      id: 4,
      animDelayTime: 100,
      img: img4,
    },
  ];

  return (
    <>
      {" "}
      <Gallery>
        {portfolioContent.map((item) => (
          <div
            className="col-md-6"
            data-aos="fade-up"
            key={item.id}
            data-aos-delay={item.animDelayTime}
          >
            <div className="case-block-two position-relative mt-50 lg-mt-30">
              <Item
                original={item.img}
                thumbnail={item.img}
                width="620"
                height="672"
              >
                {({ ref, open }) => (
                  <>
                    <img
                      src={item.img}
                      alt="portfolio images"
                      className="img-meta w-100"
                    />

                    <div className="hover-content d-flex align-items-center justify-content-center">
                      <div className="cursor-pointer" ref={ref} onClick={open}>
                        <i className="bi bi-arrows-angle-expand"></i>
                      </div>
                    </div>
                  </>
                )}
              </Item>
            </div>
            {/* <!-- /.case-block-two --> */}
          </div>
        ))}{" "}
      </Gallery>
    </>
  );
};

export default Portfolio;
