import Footer from "../Components/Children/Footer";
import Header from "../Components/Children/Header";
import AnimatedRoute from "../Components/Layout/AnimatedRoute";

const Dummified = () => {
  return (
    <AnimatedRoute>
      <Header />
      <div className="dummified">
        <div className="dumHeader">
          WHoops! Seams Like you have been dummified! Why did you click tho?
        </div>
        <div className="dumBody">
          So why did you click the square button? Even though you don't even
          know what it does . Then Why did you do it man? You are such a fool
        </div>
      </div>{" "}
      <Footer />
    </AnimatedRoute>
  );
};

export default Dummified;
