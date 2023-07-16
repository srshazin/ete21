import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";
import Dummified from "./Routes/Dummified";
import { useEffect } from "react";
import About_ETE from "./Routes/About_ETE";
import About_DEV from "./Routes/About_DEV";
import PageNotFound from "./Routes/404";

function App() {
  useEffect(() => {
    if (localStorage.theme == "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dummified" element={<Dummified />} />
        <Route path="/:slug" element={<Profile />} />
        <Route path="/about_ete" element={<About_ETE />} />
        <Route path="/about_dev" element={<About_DEV />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
