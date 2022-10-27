import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import img1 from "../../assets/images/gallery/img_47.jpg";
import img2 from "../../assets/images/gallery/img_53.jpg";
import img3 from "../../assets/images/gallery/img_50.jpg";
import img4 from "../../assets/images/gallery/img_56.jpg";
import img5 from "../../assets/images/gallery/img_88.jpg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [isOpen, setOpen] = useState(false);
  const videoItem = [
    {
      id: 1,
      img: img1,
      tag: "UI/UX",
      title: "Anaylsis Application.",
      videoIdCode: "7e90gBu4pas",
    },
    {
      id: 2,
      img: img2,
      tag: "App",
      title: "The Bomb Squad",
      videoIdCode: "7e90gBu4pas",
    },
    {
      id: 3,
      img: img3,
      tag: "Mobile",
      title: "Weekend Warriors",
      videoIdCode: "7e90gBu4pas",
    },
    {
      id: 4,
      img: img4,
      tag: "Branding",
      title: "  Associations Now",
      videoIdCode: "7e90gBu4pas",
    },
    {
      id: 5,
      img: img5,
      tag: "Code",
      title: "  The code Honors",
      videoIdCode: "7e90gBu4pas",
    },
  ];

  return (
    <>
      {videoItem.map((item) => (
        <div key={item.id}>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={item.videoIdCode}
            onClose={() => setOpen(false)}
          />

          <div className="isotop-item item-xl">
            <div className="gallery-item mb-55 lg-mb-30">
              <div className="img-holder">
                <img src={item.img} alt="" className="img-meta w-100 tran6s" />
                <div
                  onClick={() => setOpen(true)}
                  role="button"
                  className="fancybox video-icon tran3s overlay-icon"
                >
                  <i className="bi bi-play-fill"></i>
                </div>
                <div className="caption tran3s d-flex justify-content-end flex-column">
                  <span className="tag">{item.tag}</span>
                  <h6>
                    <Link to="/portfolio-details-v5" className="pj-title">
                      {item.title}
                    </Link>
                  </h6>
                </div>
                {/* <!-- /.caption --> */}
              </div>
            </div>
            {/* <!-- /.gallery-item --> */}
          </div>
          {/* <!-- /.isotop-item --> */}
        </div>
      ))}
    </>
  );
};

export default Portfolio;
