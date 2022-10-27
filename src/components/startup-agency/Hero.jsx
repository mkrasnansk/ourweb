import React from "react";
import img1 from "../../assets/images/media/img_67.png";
import img2 from "../../assets/images/media/img_68.png";

const Hero = () => {
  const heroContent = [
    {
      id: 1,
      img: img1,
      text: (
        <>
          We are Bams Founders <span>VC firm</span> & building companies in
          Emerging markets.
        </>
      ),
      orderClass: "order-xl-1",
      diffClass: "",
    },
    {
      id: 2,
      img: img2,
      text: (
        <>
          We are Bams Founders lorem <span>a vCamp firm</span> Backing iq and
          building companies dsu in Emerging markets.
        </>
      ),
      orderClass: "order-xl-3",
      diffClass: "flex-sm-column-reverse ",
    },
  ];

  return (
    <div className="row justify-content-between align-items-start">
      <div className="col-xl-6 col-lg-8 col-md-8 ms-auto me-auto order-xl-2">
        <h1 className="title cd-headline rotate-1 lg-mb-60">
          <span>
            Being <span className="line-shape">founder</span> takes
          </span>{" "}
          guts.
          <span className="cd-words-wrapper">
            <b className="is-visible">guts.</b>
            <b>risk.</b>
          </span>
        </h1>
      </div>
      {/* End .col */}

      {heroContent.map((val) => (
        <div
          className={`col-xl-3 col-lg-5 col-sm-6 ${val.orderClass}`}
          key={val.id}
        >
          <div className={`img-meta-card d-flex flex-column ${val.diffClass}`}>
            <img src={val.img} alt="media" />
            <p>{val.text}</p>
          </div>
        </div>
        // {/* End .col */}
      ))}
    </div>
  );
};

export default Hero;
