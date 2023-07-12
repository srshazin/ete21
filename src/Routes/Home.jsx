import Feed from "../Components/Children/Feed";
import Footer from "../Components/Children/Footer";
import Header from "../Components/Children/Header";
import AnimatedRoute from "../Components/Layout/AnimatedRoute";
import TechnicalStacks from "../Components/Widgets/TechnicalStack";

const Home = () => {
  return (
    <AnimatedRoute>
      <div className="Home">
        <Header />
        <Feed />
        <TechnicalStacks />
        <Footer />
      </div>
    </AnimatedRoute>
  );
};

export default Home;
