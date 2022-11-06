import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actualUrl, initialize_url } from "../../redux/oweFeatures/url-slice";
import { OldWwwC } from "./OldWwwC";

const Hero = () => {
   const [url, setUrl] = useState({ oldTitle: "", oldPath: "" });

   const dispatch = useDispatch();
   dispatch(initialize_url(window.location.href));
   const actUrl = useSelector(actualUrl);
   useEffect(() => {
      let cutStr = actUrl.includes("https://") ? "https://" : "http://";
      let clearPath = actUrl.replace(cutStr, "");
      clearPath = clearPath.slice(0, -1);
      setUrl({ oldTitle: clearPath, oldPath: actUrl });
   }, [actUrl]);

   return (
      <div className="bg-deep-cyan">
         <div className="main-content h-100">
            <div className="vcamp-feature-section-nine pt-170 lg-pt-120 h-100" id="about">
               <div className="container h-100 d-flex align-items-center">
                  <div className="title-style-seven text-center pb-60 lg-pb-20 w-100">
                     {url.oldPath.includes("tiendapepe") ? <OldWwwC data={url} /> : null}
                     {/* <div className="w-100 d-flex d-lg-none justify-content-center">{<img className="img-fluid " src={require("../../assets/images/svg/arrDown.svg").default} alt="shape" />}</div> */}
                     <h2 className="title">We help shape your ideas and turn them into </h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
