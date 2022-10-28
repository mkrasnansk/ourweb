import React from "react";
import Social from "../components/coming-soon/Social";
import SubscribeForm from "../components/coming-soon/SubscribeForm";

// import shape image

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

       
      </div>
      {/* //.full-height-layout */}
    </>
  );
};

export default ComingSoon;
