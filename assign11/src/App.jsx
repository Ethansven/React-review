import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { useEffect, useState } from "react";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { useParams } from "react-router";
function App() {
  const [userLogin, setUserLogin] = useState(false);
  function changeLog(e) {
    setUserLogin(e);
  }
  useEffect(() => {
    console.log(userLogin);
  });
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Border">
          <Routes>
            <Route path="/" element={<Home changeLog={changeLog} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile/:studentId" element={<Profile />} />
            <Route path="/admin" element={<Admin changeLog={changeLog} />} />
          </Routes>

          <nav className="border">
            <NavLink className={"link"} to={"/"}>
              Home
            </NavLink>
            <NavLink className={"link"} to={"/about"}>
              About
            </NavLink>
            <NavLink className={"link"} to={"/contact"}>
              Contact
            </NavLink>
            <NavLink className={"link"} to={"/profile/243"}>
              Profile
            </NavLink>
            <NavLink className={"link"} to={userLogin ? "/admin" : "/"}>
              For Admin!!
            </NavLink>
          </nav>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
