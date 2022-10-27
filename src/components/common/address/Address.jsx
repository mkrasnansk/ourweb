import React from "react";
import icon1 from "../../../assets/images/icon/icon_17.svg";
import icon2 from "../../../assets/images/icon/icon_18.svg";
import icon3 from "../../../assets/images/icon/icon_19.svg";

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
      icon: icon1,
      margin: "mb-80 lg-mb-40",
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
      icon: icon2,
      margin: "mb-80 lg-mb-40",
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
      icon: icon3,
      margin: "mb-80 lg-mb-40",
    },
  ];
  return (
    <>
      {addressContent.map((val) => (
        <div
          className={`address-block-three d-flex ${val.margin}`}
          key={val.id}
        >
          <div className="icon ">
            <img src={val.icon} alt="icon" />
          </div>
          <div className="text">
            <h5 className="title">{val.title}</h5>
            {val.descriptions}
          </div>
        </div>
        //   {/* <!-- /.address-block-one --> */}
      ))}
    </>
  );
};

export default Address;
