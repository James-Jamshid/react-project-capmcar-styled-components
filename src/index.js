import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurStory from "./components/LinkPage/NavbarPage/OurStory/OurStory";
import Blog from "./components/LinkPage/NavbarPage/Blog/Blog";
import Contact from "./components/LinkPage/NavbarPage/Contact/Contact";
import Pricing from "./components/LinkPage/NavbarPage/Pricing/Pricing";
import LogIn from "./components/LinkPage/NavbarPage/LoginPage/LogIn";
import TryIt from "./components/LinkPage/NavbarPage/TryItPage/TryIt";
import NavbarPage from "./components/HomePage/NavbarPage/NavbarPage";
// import Allpages from "./components/LinkPage/Allpages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NavbarPage />
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/OurStory" element={<OurStory />}></Route>
      <Route path="/Blog" element={<Blog />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Pricing" element={<Pricing />}></Route>
      <Route path="/Login" element={<LogIn />}></Route>
      <Route path="/TryIt" element={<TryIt />}></Route>
      {/* <Route path="/btn" element={<Allpages />}></Route> */}
    </Routes>
  </BrowserRouter>
);
