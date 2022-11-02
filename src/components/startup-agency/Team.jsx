import React from "react";
import { Link } from "react-router-dom";
import teamContent from "./teamContent.js";

const Team = () => {
   const listRender = (team) => {
      console.log(team);
      if (team.id === 999) {
         return <Link to="/gallery" className="theme-btn-nine ">{team.btnText}</Link>;
      } else {
         return team.socialList.map((list, i) => (
            <li key={i}>
               <a href={list.link} target="_blank" rel="noopener noreferrer">
                  <i className={`fab ${list.icon}`}></i>
               </a>
            </li>
         ));
      }
   };
   const contentRender = () => {
      let content = [];
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i)) {
         console.log("mobil");
         content = teamContent.slice(0, 2);
         content.push({ id: 999, btnText: "More preview" });
      } else {
         content = teamContent;
      }
      console.log(content);

      return content.map((team) => (
         <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay={team.dealyAnimTime} key={team.id}>
            <div className="team-block-three">
               <div className="img-meta">
                  <img src={team.img} alt="team smiling" className={team.img ? "w-100" : "d-none"} />
               </div>
               <h3 className="name">{team.name}</h3>
               <div className="designation">{team.designation}</div>
               <ul className="d-flex justify-content-center social-icon style-none">{listRender(team)}</ul>
            </div>
         </div>
      ));
   };

   return <>{contentRender()}</>;
};

export default Team;
