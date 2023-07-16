import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";
import Dummified from "./Routes/Dummified";
import { useEffect } from "react";

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
      </Routes>
    </div>
  );
}

export default App;
