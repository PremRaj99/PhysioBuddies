import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png"
import AppointmentButton from "../Common/AppointmentButton";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", src: "/" },
    { name: "About", src: "/about" },
    { name: "Services", src: "/services" },
    { name: "Doctors", src: "/doctors" },
    { name: "Contact", src: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-green-50 shadow-md  w-full  z-10">
      {/*top-0 fixed*/}
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="h-16 hover:cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="h-full"/>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.src}
              className="text-gray-700 hover:text-green-700 hover:underline "
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <AppointmentButton/>
        

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="flex flex-col md:hidden bg-green-50 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.src}
              className="text-gray-700 hover:text-green-600"
              onClick={toggleMobileMenu} // Close menu on click
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
