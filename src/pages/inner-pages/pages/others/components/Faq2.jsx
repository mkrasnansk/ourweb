import React from "react";
import { Link } from "react-router-dom";

const Faq2 = () => {
  const menuList = [
    { id: 1, name: "All", isActive: "active", targetNav: "#all" },
    { id: 2, name: "User Manual", isActive: "", targetNav: "#userManual" },
    { id: 3, name: "Payment", isActive: "", targetNav: "#paymnet" },
    { id: 4, name: "Account", isActive: "", targetNav: "#account" },
    {
      id: 5,
      name: "Terms & Conditions",
      isActive: "",
      targetNav: "#terms-conditions",
    },
  ];
  return (
    <div className="col-xxl-9 col-xl-10 m-auto">
      <ul className="nav nav-tabs justify-content-center" role="tablist">
        {menuList.map((menu) => (
          <li className="nav-item" key={menu.id}>
            <button
              className={`nav-link ${menu.isActive}`}
              data-bs-toggle="tab"
              data-bs-target={menu.targetNav}
              role="tab"
            >
              {menu.name}
            </button>
          </li>
        ))}
      </ul>
      {/* End nav-item */}

      <div className="tab-content mt-110 lg-mt-60">
        <div className="tab-pane fade show active" id="all" role="tabpanel">
          <div className="accordion accordion-style-three" id="accordionTwo">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip visual sed.
                  </p>
                </div>
              </div>
            </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip visual sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header" id="headingThree">
                <button
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  What does First Round look for in an idea?
                </button>
              </div>
              <div
                id="collapseThree"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip visual sed.
                  </p>
                </div>
              </div>
            </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip visual sed.
                  </p>
                </div>
              </div>
            </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip visual sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                >
                  How does the free trial work?
                </button>
              </div>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip visual sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                >
                  How do you weigh different criteria in your process?
                </button>
              </div>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip visual sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                >
                  What does First Round look for in an idea?
                </button>
              </div>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionTwo"
              >
                <div className="accordion-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip visual sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /.accordion-style-three --> */}
        </div>
        <div className="tab-pane fade" id="userManual" role="tabpanel">
          <div className="accordion accordion-style-three" id="accordionThree">
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
          </div>
          {/* <!-- /.accordion-style-three --> */}
        </div>
        <div className="tab-pane fade" id="paymnet" role="tabpanel">
          <div className="accordion accordion-style-three" id="accordionFour">
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
          </div>
          {/* <!-- /.accordion-style-three --> */}
        </div>
        <div className="tab-pane fade" id="account" role="tabpanel">
          <div className="accordion accordion-style-three" id="accordionFive">
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
          </div>
          {/* <!-- /.accordion-style-three --> */}
        </div>
        <div className="tab-pane fade" id="terms-conditions" role="tabpanel">
          <div className="accordion accordion-style-three" id="accordionSix">
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
          </div>
          {/* <!-- /.accordion-style-three --> */}
        </div>
      </div>
      {/* <!-- /.tab-content --> */}

      <div className="request-faq text-center pt-90 lg-pt-70">
        <h2 className="font-recoleta">Don’t get your answer?</h2>
        <Link to="/contact-v3" className="theme-btn-four ripple-btn">
          CONTACT US
        </Link>
      </div>
      {/* <!-- /.request-faq --> */}
    </div>
  );
};

export default Faq2;
