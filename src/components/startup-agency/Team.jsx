import React from "react";
import teamContent from "./teamContent.js";

const Team = () => {
  return (
    <>
      {teamContent.map((team) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={team.dealyAnimTime}
          key={team.id}
        >
          <div className="team-block-three">
            <div className="img-meta">
              <img src={team.img} alt="team smiling" className="w-100" />
            </div>
            <h3 className="name">{team.name}</h3>
            <div className="designation">{team.designation}</div>
            <ul className="d-flex justify-content-center social-icon style-none">
              {team.socialList.map((list, i) => (
                <li key={i}>
                  <a href={list.link} target="_blank" rel="noopener noreferrer">
                    <i className={`fab ${list.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.team-block-three --> */}
        </div>
      ))}
    </>
  );
};

export default Team;
