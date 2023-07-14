import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";
import Dummified from "./Routes/Dummified";

function App() {
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
