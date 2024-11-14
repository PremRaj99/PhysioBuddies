import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Human from "./pages/Human/Human";
import Services from "./components/Home/Services"

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
        <Human/>
      <Footer />
    </Router>
  );
}
