import React from "react";
import img1 from "../../../../assets/images/blog/blog_img_18.jpg";
import img2 from "../../../../assets/images/blog/blog_img_19.jpg";
import footerImg from "../../../../assets/images/assets/ils_03.png";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/business/Header";
import CopyrightFooter from "../../../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../../../components/common/footer/FooterMenuList";
import FooterSubscribe from "../../../../components/creative-agency/FooterSubscribe";
import Breadcrumb from "./components/Breadcrumb";
import CommentBox from "./components/CommentBox";
import BlogComments from "./components/BlogComments";
import SocialShare from "./components/SocialShare";
import Tags from "./components/Tags";
import Seo from "../../../../components/common/seo/Seo";
import { Link } from "react-router-dom";

const BlogDetailsV3 = () => {
  return (
    <div className="main-page-wrapper">
      <Seo title="Blog Details V3 " />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Sidebar Nav
      ============================================== 
        --> */}
      <Sidebar />

      {/* <!--
        =============================================
        Theme Main Menu
        ==============================================
        --> */}
      <Header />

      {/* <!-- 
			=============================================
				Inside Page Banner
			============================================== 
			--> */}

      <div className="inside-hero-eight text-center">
        <p className="blog-pubish-date">
          Digital Marketing . 2 July 2021 . By <a href="#">Hasan Ka</a>
        </p>
        <div className="row">
          <div className="col-xxl-8 col-xl-9 col-lg-8 m-auto">
            <h2 className="blog-heading-two">
              Creativo Para Jóvenes: a Designer’s UI/UX Complete Checklist.
            </h2>
          </div>
        </div>
        {/* End .row */}
        <nav className="blog-breadcrumb mt-70 lg-mt-30">
          <Breadcrumb className="justify-content-center" />
        </nav>
      </div>
      {/* <!-- /.inside-hero-seven --> */}

      {/* <!--
			=====================================================
				Blog Details One
			=====================================================
			--> */}
      <div className="blog-details-one dark-bg mb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="blog-meta-wrapper pe-xxl-5">
                <article className="blog-details-content">
                  <img
                    src={img1}
                    alt="blog post"
                    className="image-meta w-100"
                  />
                  <p>
                    Tomfoolery crikey bits and bobs brilliant bamboozled down
                    the pub amongst brolly hanky panky, cack bonnet arse over
                    tit burke bugger all mate bodge. cillum dolore eu fugiat
                    pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est
                    laborum.Suspendisse interdum consectetur libero id faucibu
                    nisl. Lacus vel facilisis volutpat est velit egestas.
                  </p>
                  <p>
                    Tempus imperdiet nulla malesuada pellentesque elit eget
                    gravida cum. Sit amet ris nullam eget felis. Enim praesent
                    elementum facilisis leo. Ultricies leo integer.
                  </p>
                  <img
                    src={img2}
                    alt="blog post"
                    className="image-meta w-100"
                  />
                  <h4>
                    This response is important for our ability to from mistakes
                    but it alsogives rise to self-criticism.
                  </h4>
                  <p>
                    One touch of a red-hot stove is usually all we need to avoid
                    that kind of discomfort in future The same is true as we
                    experienc the emotional of stress from our instances. We are
                    quickly learn to fear and thus automatically. Lorem ipsum
                    dolor sit amet, consectetur adipis elit quis extraction
                    labore.
                  </p>
                  <h2>Work Harder & Gain Succsess</h2>
                  <p>
                    One touch of a red-hot stove is usually all we need to avoid
                    that kind of discomfort in quis elit future. The same Duis
                    aute irure dolor in reprehenderit .
                  </p>
                  <p>
                    is true as we experience the emotional sensation of stress
                    from our firs social rejec ridicule.We quickly learn to fear
                    and thus automatically. potentially stressful situation of
                    wlir ext quiert all kinds, including the most common of all.
                  </p>
                  <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                    <Tags />
                    <SocialShare />
                  </div>
                  {/* <!-- /.bottom-widget --> */}
                </article>
                {/* <!-- /.blog-details-content --> */}

                <div className="blog-comment-area">
                  <h3 className="blog-inner-title pb-15">2 Comments</h3>
                  <BlogComments />
                </div>
                {/* <!-- /.blog-comment-area --> */}

                <div className="blog-comment-form ">
                  <h3 className="blog-inner-title">Leave A Comment</h3>
                  <p>
                    Sign in to post your comment or signup if you dont have any
                    account.
                  </p>
                  <CommentBox className="theme-btn-four" />
                </div>
                {/* <!-- /.blog-comment-form --> */}
              </div>
              {/* <!-- /.blog-meta-wrapper --> */}
            </div>
            {/* End .col-lg-8 */}
          </div>
        </div>
      </div>
      {/* <!-- /.blog-details-one --> */}

      {/* <!--
        =====================================================
         Footer
        =====================================================
        --> */}
      <div className="vcamp-footer-one">
        <div className="bg-wrapper bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="subscribe-area">
                  <FooterSubscribe className="title-black" />
                </div>
                {/* <!-- /.subscribe-area --> */}

                <div className="top-footer mt-90 md-mt-70">
                  <div className="row">
                    <div className="col-lg-4 col-md-2 d-flex justify-content-between flex-column">
                      <div className="logo">
                        <Link to="/">
                          <img
                            src={
                              require("../../../../assets/images/logo/vCamp_01.svg")
                                .default
                            }
                            alt="brand"
                            style={{ width: "127px" }}
                          />
                        </Link>
                      </div>
                    </div>
                    {/* End .col */}

                    <FooterMenuList />
                    {/* End Footer Menu list */}
                  </div>
                </div>
                {/* <!-- /.top-footer --> */}
              </div>
            </div>
          </div>
          {/* End .container */}
          <img src={footerImg} alt="shape" className="shapes illustration" />
        </div>
        {/* <!-- /.bg-wrapper --> */}

        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="bottom-footer">
                <CopyrightFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.vcamp-footer-one --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default BlogDetailsV3;
