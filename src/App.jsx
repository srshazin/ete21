import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
