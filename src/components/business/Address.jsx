import React from "react";
import icon1 from "../../assets/images/icon/icon_17.svg";
import icon2 from "../../assets/images/icon/icon_18.svg";
import icon3 from "../../assets/images/icon/icon_19.svg";

const Address = () => {
  const addressContent = [
    {
      id: 1,
      title: "Our Address",
      descriptions: (
        <>
          <p>
            1012 Pebda Parkway, Mirpur 2 <br />
            Dhaka, Bangladesh
          </p>
        </>
      ),
      delayAnimatinTime: 0,
      icon: icon1,
    },
    {
      id: 2,
      title: "Contact Info",
      descriptions: (
        <>
          <p>
            Open a chat or give us call at <br />
            <a href="tel:310.841.5500" className="call">
              310.841.5500
            </a>
          </p>
        </>
      ),
      delayAnimatinTime: 100,
      icon: icon2,
    },
    {
      id: 3,
      title: "Live Support",
      descriptions: (
        <>
          <p>
            live chat service <br />
            <a href="#" className="webaddress">
              www.vcamplivechat.com
            </a>
          </p>
        </>
      ),
      delayAnimatinTime: 200,
      icon: icon3,
    },
  ];
  return (
    <>
      {addressContent.map((val) => (
        <div
          className="col-md-4"
          data-aos="fade-up"
          data-aos-delay={val.delayAnimatinTime}
          key={val.id}
        >
          <div className="address-block-one text-center mb-40">
            <div className="icon d-flex align-items-center justify-content-center m-auto">
              <img src={val.icon} alt="icon" />
            </div>
            <h5 className="title">{val.title}</h5>
            {val.descriptions}
          </div>
          {/* <!-- /.address-block-one --> */}
        </div>
      ))}
    </>
  );
};

export default Address;
