import React from "react";
import Social from "../components/coming-soon/Social";
import SubscribeForm from "../components/coming-soon/SubscribeForm";

// import shape image
import shape1 from "../assets/images/shape/shape_46.svg";
import shape2 from "../assets/images/shape/shape_47.svg";
import shape3 from "../assets/images/shape/shape_48.svg";
import shape4 from "../assets/images/shape/shape_49.svg";
import shape5 from "../assets/images/shape/shape_50.svg";
import shape6 from "../assets/images/shape/shape_51.svg";
import Seo from "../components/common/seo/Seo";

const ComingSoon = () => {
  return (
    <>
      <Seo title="Coming Soon" />
      {/* End Seo Related data */}

      <div className="full-height-layout d-flex align-items-center">
        <div className="coming-soon-content">
          <h6>COMING SOON</h6>
          <h1 className="font-recoleta">We’r blowing up</h1>
          <div className="row">
            <div className="col-md-9 col-sm-8 m-auto">
              <p>
                We're under construction. Check back for an update soon. Stay in
                touch!
              </p>
            </div>
          </div>
          {/* End .row */}

          <SubscribeForm />
          {/* End SubscribeForm */}

          <Social />
          {/* End Social */}
        </div>
        {/* <!-- /.coming-soon-content --> */}

        <img src={shape1} alt="shape" className="shapes shape-one" />
        <img src={shape2} alt="shape" className="shapes shape-two" />
        <img src={shape3} alt="shape" className="shapes shape-three" />
        <img src={shape4} alt="shape" className="shapes shape-four" />
        <img src={shape5} alt="shape" className="shapes shape-five" />
        <img src={shape6} alt="shape" className="shapes shape-six" />
      </div>
      {/* //.full-height-layout */}
    </>
  );
};

export default ComingSoon;
