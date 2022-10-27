import React from "react";
import UserFeedback from "./UserFeedback";

const ProductDescriptions = () => {
  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#item1"
            type="button"
            role="tab"
            aria-selected="true"
          >
            Description
          </button>
        </li>
        {/* End li */}

        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#item2"
            type="button"
            role="tab"
            aria-selected="false"
          >
            Technical Info
          </button>
        </li>
        {/* End li */}

        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#item3"
            type="button"
            role="tab"
            aria-selected="false"
          >
            Feedback
          </button>
        </li>
        {/* End li */}
      </ul>

      <div className="tab-content mt-50 lg-mt-20">
        <div className="tab-pane fade show active" id="item1" role="tabpanel">
          <div className="row gx-5">
            <div className="col-xl-6">
              <h5>Specifications:</h5>
              <p>
                One touch of a red-hot stove is usually all we need to avoid
                that . The same is true as we experience in emotional sensation
                of stress from our first instances of social rejection ridicule.
              </p>
            </div>
            <div className="col-xl-6">
              <h5>Check product main features:</h5>
              <ul className="style-none product-feature">
                <li>
                  Lorem ipsum best lightweight bra cool rejection avoid text
                </li>
                <li>Lightweight bras cool rejection quickly quis.</li>
                <li>
                  We quickly learn to fear and automatically avoid potentially
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End tab */}

        <div className="tab-pane fade" id="item2" role="tabpanel">
          <div className="row gx-5">
            <div className="col-xl-6">
              <h5>Check product main features:</h5>
              <ul className="style-none product-feature">
                <li>
                  Lorem ipsum best lightweight bra cool rejection avoid text
                </li>
                <li>Lightweight bras cool rejection quickly quis.</li>
                <li>
                  We quickly learn to fear and automatically avoid potentially
                </li>
              </ul>
            </div>
            <div className="col-xl-6">
              <h5>Specifications:</h5>
              <p>
                One touch of a red-hot stove is usually all we need to avoid
                that . The same is true as we experience in emotional sensation
                of stress from our first instances of social rejection ridicule.
              </p>
            </div>
          </div>
        </div>
        {/* End tab */}

        <div className="tab-pane fade" id="item3" role="tabpanel">
          <div className="user-comment-area">
            <UserFeedback />
          </div>
        </div>
        {/* End tab */}
      </div>
    </>
  );
};

export default ProductDescriptions;
