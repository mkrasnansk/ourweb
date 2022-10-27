import React from "react";
import img1 from "../../assets/images/assets/ils_08.png";
import img2 from "../../assets/images/assets/ils_09.png";
import img3 from "../../assets/images/assets/ils_10.png";

const Feature = () => {
  const featureContent = [
    {
      id: 1,
      delayAnimTime: 0,
      img: img1,
      text: (
        <>
          Build like <br />a co-founder
        </>
      ),
    },
    {
      id: 2,
      delayAnimTime: 100,
      img: img2,
      text: (
        <>
          Investing <br />
          as a Partner
        </>
      ),
    },
    {
      id: 3,
      delayAnimTime: 200,
      img: img3,
      text: (
        <>
          Work for our <br />
          company
        </>
      ),
    },
  ];

  return (
    <>
      {featureContent.map((feature) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={feature.delayAnimTime}
          key={feature.id}
        >
          <div className="card-style-nine mt-40">
            <div className="img-holder d-flex align-items-center justify-content-center">
              <img src={feature.img} alt="illustration" />
            </div>
            <h3>{feature.text}</h3>
          </div>
          {/* <!-- /.card-style-nine --> */}
        </div>
      ))}
    </>
  );
};

export default Feature;
