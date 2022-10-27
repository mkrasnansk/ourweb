import React from "react";
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
      name: "Jesica Cowdhury",
      country: "USA",
      reviewText: `  Having a home based business is wonderful asset to your life. The
        problem still stands comes time your business . I know you have
        looked .`,
    },
    {
      id: 2,
      name: "Michael Phillips",
      country: "UNorwichSA",
      reviewText: `Apart from counting words and characters, our online editor improve word choice and writing style, and, optionally, help you to detect grammar.`,
    },
    {
      id: 3,
      name: "Frances Baldwin",
      country: "Houston",
      reviewText: `Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words.`,
    },
  ];
  return (
    <>
      <Slider {...settings} arrows={false}>
        {testimonialContent.map((review) => (
          <div className="item" key={review.id}>
            <div className="testimonial-block-four text-center tran3s">
              <p className="font-recoleta">{review.reviewText}</p>
              <h6>
                {review.name}, <span>{review.country}</span>
              </h6>
            </div>
            {/* <!-- /.testimonial-block-three --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonial;
