import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Human from "./pages/Human/Human";
import Services from "./components/Home/Services";
import Blog from "./pages/Blog/Blog";
import BlogPreview from "./pages/Blog/BlogPreview";
import EditProfile from "./pages/Profile/EditProfile";
import TherapistList from "./pages/Therapist/TherapistList";
import ContactUs from "./pages/Contact/ContactUs";
import TherapistDetail from "./pages/Therapist/TherapistDetail";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ScrollToTop from "./components/ScrollToTop";
import AddBlog from "./pages/Blog/AddBlog";

export default function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/blog/:id" element={<BlogPreview />} />
        <Route path="/doctors" element={<TherapistList />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/doctors/preview" element={<TherapistDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<Login />} />
        <Route path="/dashboard/addblog" element={<AddBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}
