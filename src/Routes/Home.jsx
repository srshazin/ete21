import { Helmet } from "react-helmet";
import Feed from "../Components/Children/Feed";
import Footer from "../Components/Children/Footer";
import Header from "../Components/Children/Header";

import TechnicalStacks from "../Components/Widgets/TechnicalStack";

const Home = () => {
  return (
    <div className="Home">
      <Helmet>
        <title>ETE-21 Family</title>
      </Helmet>
      <Header />
      <Feed />
      <TechnicalStacks />
      <Footer />
    </div>
  );
};

export default Home;
