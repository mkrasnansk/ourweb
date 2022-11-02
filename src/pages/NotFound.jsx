import notFoundImg from "../assets/images/svg/wrongWay.svg";
import { Link } from "react-router-dom";
import Seo from "../components/common/seo/Seo";

function NotFound() {
   return (
      <>
         <Seo title="404 " />
         {/* End Seo Related data */}

         <div className="bg-deep-cyan error-page d-flex align-items-end justify-content-center ">
            <div className="content-wrapper hero-banner-eight">
               <div className="d-flex justify-content-center">
                  <img src={notFoundImg} alt="" className="img-fluid w-50" />
               </div>

               <h6 className="text-center text-sm-start">404</h6>
               <h1 className="hero-heading text-center text-sm-start">Page Not Found </h1>
               <p className="hero-sub-heading text-lg text-center text-sm-start">
                  Publishing industries for previewing layouts & <br /> visual mockups used.
               </p>
               <div className="d-flex justify-content-center justify-content-sm-start">
                  <Link to="/" className="theme-btn-nine ">
                     GO BACK
                  </Link>
               </div>
            </div>
            {/* <!-- /.content-wrapper --> */}
         </div>
         {/* <!-- /.error-page --> */}
      </>
   );
}

export default NotFound;
