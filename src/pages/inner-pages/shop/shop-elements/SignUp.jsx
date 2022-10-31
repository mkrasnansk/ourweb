import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../../assets/images/assets/ils_06.png";
import SignupForm from "../../../../components/common/form/SignupForm";
import Seo from "../../../../components/common/seo/Seo";

const SignUp = () => {
  return (
    <>
      <Seo title="Sign Up" />
      {/* End Seo Related data */}

      <div className="user-data-page clearfix d-md-flex">
        <div className="form-wrapper">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link to="/">
                <img
                  src={
                    require("../../../../assets/images/logo/vCamp_01.svg")
                      .default
                  }
                  alt=""
                  width="127"
                />
              </Link>
            </div>
            <Link to="/" className="go-back-button">
              Go to home
            </Link>
          </div>
          {/* logo and hom route */}

          <div className="user-data-form mt-80 lg-mt-50">
            <h2 className="font-recoleta">
              Hi <span>buddy</span>, welcome <br /> Back!
            </h2>
            <p className="header-info pt-20 pb-50 lg-pb-30">
              Have an account? Login <Link to="/sign-in"> here</Link>
            </p>

           
         
            {/* End form */}
          </div>
          {/* End user-data-from */}
        </div>
        {/* <!-- /.form-wrapper --> */}
      </div>
      {/* <!-- /.user-data-page --> */}
    </>
  );
};

export default SignUp;
