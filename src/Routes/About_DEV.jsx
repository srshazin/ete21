import Footer from "../Components/Children/Footer";
import Header from "../Components/Children/Header";
import AnimatedRoute from "../Components/Layout/AnimatedRoute";

const About_DEV = () => {
  return (
    <AnimatedRoute>
      <Header />
      <div className="dummified">
        <div className="dumHeader">About Shazin</div>
        <div className="dumBody">
          Well, there is nothing to share about the Developer. You can go back
          to the main page now. Bye
        </div>
      </div>{" "}
      <Footer />
    </AnimatedRoute>
  );
};

export default About_DEV;
