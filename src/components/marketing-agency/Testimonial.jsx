import React from "react";
import img1 from "../../assets/images/icon/icon_117.svg";
import Slider from "react-slick";

const Testimonial = () => {
  //   slider settings
  const settings = {
    dots: true,
    arrows: false,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    centerMode: true,
    autoplaySpeed: 3000,
  };
  const testimonialContent = [
    {
      id: 1,
      img: img1,
      name: "Rashed Kabir",
      reviewText: `  Having a home based business is wonderful asset to your life. The
        problem still stands comes time your business . I know you have
        looked .`,
    },
    {
      id: 2,
      img: img1,
      name: "Rashed Kabir",
      reviewText: `  Having a home based business is wonderful asset to your life. The
        problem still stands comes time your business . I know you have
        looked .`,
    },
    {
      id: 3,
      img: img1,
      name: "Rashed Kabir",
      reviewText: `  Having a home based business is wonderful asset to your life. The
        problem still stands comes time your business . I know you have
        looked .`,
    },
    {
      id: 4,
      img: img1,
      name: "Rashed Kabir",
      reviewText: `  Having a home based business is wonderful asset to your life. The
        problem still stands comes time your business . I know you have
        looked .`,
    },
  ];
  return (
    <>
      <Slider {...settings} arrows={false}>
        {testimonialContent.map((review) => (
          <div className="item" key={review.id}>
            <div className="testimonial-block-five text-center tran3s">
              <div className="icon d-flex align-items-center justify-content-center mb-40 lg-mb-20">
                <img src={review.img} alt="icon" />
              </div>
              <p className="font-zen">{review.reviewText}</p>
              <h6>{review.name}</h6>
            </div>
            {/* <!-- /.testimonial-block-three --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
