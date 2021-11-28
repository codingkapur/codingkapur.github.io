import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Error from "./components/Error";
//Pages
import About from "./pages/About";
import Work from "./pages/Work";
import Connect from "./pages/Connect";

function App() {
  return (
    <div className="app__container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/connect" element={<Connect />}></Route>
          <Route exact path="*" element={<Error />}></Route>
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
