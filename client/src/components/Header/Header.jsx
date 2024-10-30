import React, { useState } from "react";
import logo from "../../assets/PhysioBuddies Logo.jpg";
import bg from '../../assets/BG.jpg';
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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
    <div className={`h-20 flex justify-between px-6 lg:px-40 items-center relative z-10`}>
      {/* Logo */}
      <h1 className="text-white font-extrabold text-xl lg:text-2xl cursor-pointer" onClick={() => navigate("/")}>
        Physio <span className="text-black">Buddies</span>
      </h1>

      {/* Desktop and Tablet Navigation */}
      <ul className="hidden lg:flex items-center gap-8 text-white font-semibold">
        {navItems.map(({ name, src }) => (
          <li key={name}>
            <Link to={src}>{name.toUpperCase()}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-6">
        {/* Login Button - Always Visible */}
        <button className="px-6 sm:px-12 py-2 bg-lime-400 font-semibold">
          Login
        </button>

        {/* Mobile and Tablet Menu Icon */}
        <div className="lg:hidden text-white" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile and Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#016068] flex flex-col items-center py-4 lg:hidden">
          <ul className="flex flex-col items-center gap-4 text-white font-semibold">
            {navItems.map(({ name, src }) => (
              <li key={name} className="hover:bg-green-500">
                <Link to={src} onClick={toggleMobileMenu}>
                  {name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
