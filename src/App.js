import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import ScrollToTop from "./components/elements/ScrollToTop";
import { store } from "./redux/store";
import AllRoutes from "./router/AllRoutes";

function App() {
   // aos animation activation
   useEffect(() => {
      AOS.init({
         duration: 1200,
      });
   }, []);

   return (
      <Provider store={store}>
         <div className="h-100">
            <AllRoutes />
            <ScrollToTop />
            <ToastContainer />
         </div>
      </Provider>
   );
}

export default App;
