import React from "react";
import BlogComments from "./BlogComments";
import CommentBox from "./CommentBox";
import SocialShare from "./SocialShare";
import Tags from "./Tags";
import img1 from "../../../../../assets/images/blog/blog_img_18.jpg";
import img2 from "../../../../../assets/images/blog/blog_img_19.jpg";

const Index = () => {
  return (
    <div className="blog-meta-wrapper pe-xxl-5">
      <article className="blog-details-content">
        <img src={img1} alt="blog post" className="image-meta w-100" />
        <p>
          Tomfoolery crikey bits and bobs brilliant bamboozled down the pub
          amongst brolly hanky panky, cack bonnet arse over tit burke bugger all
          mate bodge. cillum dolore eu fugiat pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.Suspendisse interdum consectetur libero id faucibu
          nisl. Lacus vel facilisis volutpat est velit egestas.
        </p>
        <p>
          Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.
          Sit amet ris nullam eget felis. Enim praesent elementum facilisis leo.
          Ultricies leo integer.
        </p>
        <img src={img2} alt="blog post" className="image-meta w-100" />
        <h4>
          This response is important for our ability to from mistakes but it
          alsogives rise to self-criticism.
        </h4>
        <p>
          One touch of a red-hot stove is usually all we need to avoid that kind
          of discomfort in future The same is true as we experienc the emotional
          of stress from our instances. We are quickly learn to fear and thus
          automatically. Lorem ipsum dolor sit amet, consectetur adipis elit
          quis extraction labore.
        </p>
        <h2>Work Harder & Gain Succsess</h2>
        <p>
          One touch of a red-hot stove is usually all we need to avoid that kind
          of discomfort in quis elit future. The same Duis aute irure dolor in
          reprehenderit .
        </p>
        <p>
          is true as we experience the emotional sensation of stress from our
          firs social rejec ridicule.We quickly learn to fear and thus
          automatically. potentially stressful situation of wlir ext quiert all
          kinds, including the most common of all.
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

      <div className="blog-comment-form bg-color">
        <h3 className="blog-inner-title">Leave A Comment</h3>
        <p>
          Sign in to post your comment or signup if you dont have any account.
        </p>
        <CommentBox />
      </div>
      {/* <!-- /.blog-comment-form --> */}
    </div>
  );
};

export default Index;
