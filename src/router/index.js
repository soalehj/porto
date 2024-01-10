import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../View/Home";
import About from "../View/About";
import Contact from "../View/Contact";
import PageNotFound from "../Error/PageNotFound";

function Router(props) {
  return (
    <Routes>
      <Route exct path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
