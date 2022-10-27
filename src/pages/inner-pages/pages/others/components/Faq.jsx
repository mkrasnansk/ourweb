import React from "react";
import ScrollspyNav from "react-scrollspy-nav";

const Faq = () => {
  return (
    <>
      <div className="col-xxl-3 col-lg-4 faq-sidebar">
        <div className="faq-nav-one">
          <ScrollspyNav
            scrollTargetIds={[
              "list-item-1",
              "list-item-2",
              "list-item-3",
              "list-item-4",
              "list-item-5",
              "list-item-6",
            ]}
            offset={0}
            activeNavClass="active"
            scrollDuration="100"
            headerBackground="true"
          >
            <ul id="faq-list-nav" className="list-group">
              <li>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-1"
                >
                  1. Makreting
                </a>
              </li>
              <li>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-2"
                >
                  2. Buying
                </a>
              </li>
              <li>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-3"
                >
                  3. User Manual
                </a>
              </li>
              <li>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-4"
                >
                  4. Payments
                </a>
              </li>
              <li>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-5"
                >
                  5. Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  className="list-group-item list-group-item-action"
                  href="#list-item-6"
                >
                  6. Account
                </a>
              </li>
            </ul>
          </ScrollspyNav>
        </div>
        {/* <!-- /.faq-nav-one --> */}
      </div>
      {/* End .col */}

      <div className="col-xl-7 col-lg-8 ms-auto faq-main-body">
        <div className="clearfix">
          <div className="accordion accordion-style-two" id="accordionTwo">
            <div className="accordion-tag md-pt-80" id="list-item-1">
              Makreting
            </div>
            {/* End .accordion-tag */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  How does the free trial work?
                </button>
              </div>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  How do you weigh different criteria in your process?
                </button>
              </div>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  What does First Round look for in an idea?
                </button>
              </div>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  What do you look for in a founding team?
                </button>
              </div>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                >
                  Do you recommend Pay as you go or Pre pay?
                </button>
              </div>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}
          </div>
          {/* <!-- /.accordion-style-two --> */}

          <div className="accordion accordion-style-two" id="accordionThree">
            <div className="accordion-tag pt-90 lg-pt-80" id="list-item-2">
              Buying
            </div>
            {/* End .accordion-tag */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingOneA">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOneA"
                >
                  How does the free trial work?
                </button>
              </div>
              <div
                id="collapseOneA"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionThree"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingTwoA">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwoA"
                >
                  How do you weigh different criteria in your process?
                </button>
              </div>
              <div
                id="collapseTwoA"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionThree"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingThreeA">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThreeA"
                >
                  What does First Round look for in an idea?
                </button>
              </div>
              <div
                id="collapseThreeA"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionThree"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingFourA">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFourA"
                >
                  What do you look for in a founding team?
                </button>
              </div>
              <div
                id="collapseFourA"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionThree"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}
          </div>
          {/* <!-- /.accordion-style-two --> */}

          <div className="accordion accordion-style-two" id="accordionFour">
            <div className="accordion-tag pt-90 lg-pt-80" id="list-item-3">
              User Manual
            </div>
            {/* End .accordion-tag */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingOneB">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOneB"
                >
                  How does the free trial work?
                </button>
              </div>
              <div
                id="collapseOneB"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFour"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingTwoB">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwoB"
                >
                  How do you weigh different criteria in your process?
                </button>
              </div>
              <div
                id="collapseTwoB"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFour"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingThreeB">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThreeB"
                >
                  What does First Round look for in an idea?
                </button>
              </div>
              <div
                id="collapseThreeB"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFour"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}
          </div>
          {/* <!-- /.accordion-style-two --> */}

          <div className="accordion accordion-style-two" id="accordionFive">
            <div className="accordion-tag pt-90 lg-pt-80" id="list-item-4">
              Payments
            </div>
            {/* End .accordion-tag */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingOneC">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOneC"
                >
                  How does the free trial work?
                </button>
              </div>
              <div
                id="collapseOneC"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFive"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingTwoC">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwoC"
                >
                  How do you weigh different criteria in your process?
                </button>
              </div>
              <div
                id="collapseTwoC"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFive"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingThreeC">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThreeC"
                >
                  What does First Round look for in an idea?
                </button>
              </div>
              <div
                id="collapseThreeC"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFive"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}
          </div>
          {/* <!-- /.accordion-style-two --> */}

          <div className="accordion accordion-style-two" id="accordionSix">
            <div className="accordion-tag pt-90 lg-pt-80" id="list-item-5">
              Terms & Conditions
            </div>
            {/* End .accordion-tag */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingOneD">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOneD"
                >
                  How does the free trial work?
                </button>
              </div>
              <div
                id="collapseOneD"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionSix"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingTwoD">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwoD"
                >
                  How do you weigh different criteria in your process?
                </button>
              </div>
              <div
                id="collapseTwoD"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionSix"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingThreeD">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThreeD"
                >
                  What does First Round look for in an idea?
                </button>
              </div>
              <div
                id="collapseThreeD"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionSix"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}
          </div>
          {/* <!-- /.accordion-style-two --> */}

          <div className="accordion accordion-style-two" id="accordionSeven">
            <div className="accordion-tag pt-90 lg-pt-80" id="list-item-6">
              Account
            </div>
            {/* End .accordion-tag */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingOneE">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOneE"
                >
                  How does the free trial work?
                </button>
              </div>
              <div
                id="collapseOneE"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionSeven"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingTwoE">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwoE"
                >
                  How do you weigh different criteria in your process?
                </button>
              </div>
              <div
                id="collapseTwoE"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionSeven"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}

            <div className="accordion-item">
              <div className="accordion-header" id="headingThreeE">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThreeE"
                >
                  What does First Round look for in an idea?
                </button>
              </div>
              <div
                id="collapseThreeE"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionSeven"
              >
                <div className="accordion-body">
                  <p>
                    Certainly from my perspective, WordPress has been a great
                    success—with WordPress VIP giving us that enterprise-level
                    of assured quality on top.
                  </p>
                </div>
              </div>
            </div>
            {/* ENd .accordion-item */}
          </div>
          {/* <!-- /.accordion-style-two --> */}
        </div>
      </div>
    </>
  );
};

export default Faq;
