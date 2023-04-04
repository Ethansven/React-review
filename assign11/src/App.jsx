import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { useEffect, useState } from "react";
import Admin from "./components/Admin";
import Profile from "./components/Profile";

function App() {
  const [userLogin, setUserLogin]=useState("false");
  function changeLog(e){
    setUserLogin(e)
  }
  useEffect(()=>{
    console.log(userLogin)  })
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home changeLog={changeLog} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:studentId" element={<Profile />} />
          <Route path="/admin" element={<Admin changeLog={changeLog} />} />
        </Routes>

        <nav>
          <NavLink className={"link"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"link"} to={"/about"}>
            About
          </NavLink>
          <NavLink className={"link"} to={"/contact"}>
            Contact
          </NavLink>
          <NavLink className={"link"} to={"/profile"}>
            Profile
          </NavLink>
          <NavLink className={"link"} to={userLogin ? "/admin" : "/"}>
            For Admin!!
          </NavLink>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
