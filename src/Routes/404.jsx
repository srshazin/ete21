import Footer from "../Components/Children/Footer";
import Header from "../Components/Children/Header";
import AnimatedRoute from "../Components/Layout/AnimatedRoute";

const PageNotFound = () => {
  return (
    <AnimatedRoute>
      <Header />
      <div className="dummified">
        <div className="404_head">404 Page Not Found</div>
        <div className="dumBody">
          Oops! Seems like the page you are trying to browse is not correct.
          Please check your url.
        </div>
      </div>{" "}
      <Footer />
    </AnimatedRoute>
  );
};

export default PageNotFound;
