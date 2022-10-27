import React from "react";
import img1 from "../../assets/images/team/img_26.jpg";
import img2 from "../../assets/images/team/img_27.jpg";
import img3 from "../../assets/images/team/img_28.jpg";
import img4 from "../../assets/images/team/img_29.jpg";

const Team = () => {
  const teamContent = [
    {
      id: 1,
      img: img1,
      name: "Bostami Hasan",
      designation: "Developer",
      animDelayTime: 0,
    },
    {
      id: 2,
      img: img2,
      name: "Jannat Ferdaus",
      designation: "Marketing Lead",
      animDelayTime: 100,
    },
    {
      id: 3,
      img: img3,
      name: "Jubayer Hasan",
      designation: "Developer",
      animDelayTime: 200,
    },
    {
      id: 4,
      img: img4,
      name: "Martin James",
      designation: "Team Lead",
      animDelayTime: 300,
    },
  ];

  return (
    <>
      {teamContent.map((team) => (
        <div className="col-lg-3 col-sm-6" key={team.id}>
          <div
            className="team-block-five mt-30"
            data-aos="fade-up"
            data-aos-delay={team.animDelayTime}
          >
            <div className="img-holder">
              <img src={team.img} alt="team member" className="w-100" />
            </div>
            <div className="text tran3s">
              <h6 className="name tran3">{team.name}</h6>
              <div className="info tran3">{team.designation}</div>
            </div>
            {/* <!-- /.text --> */}
          </div>
          {/* <!-- /.team-block-five --> */}
        </div>
      ))}
    </>
  );
};

export default Team;
