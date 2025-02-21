import React, { useState } from "react";
import { Copy, FileText, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("keenan@design@gmail.com");
  };

  return (
    <header className="w-full px-4 sm:px-6 py-3 flex justify-between items-center bg-white shadow-md fixed top-0 left-0 z-50">
      {/* Left Side: Logo & Email & Buttons */}
      <div className="flex items-center gap-6"> {/* Increased gap here */}
        {/* Logo with white background and rounded smooth corners */}
        <div className="bg-white rounded-lg p-2 sm:p-3 flex items-center shadow-sm">
          <span className="text-sm sm:text-base font-bold text-gray-700">
            Logo
          </span>
        </div>

        {/* Profile section with light gray background and rounded edges */}
        <div className="bg-gray-100 rounded-lg p-2 sm:p-3 flex items-center gap-4 shadow-sm">
          <span className="text-sm sm:text-base text-gray-600 truncate">
            keenan@design@gmail.com
          </span>

          <div className="flex gap-2">
            <button
              onClick={copyEmail}
              className="px-3 sm:px-4 py-2 bg-white hover:bg-gray-200 rounded-full flex items-center gap-2 text-xs sm:text-sm transition-all shadow-sm"
            >
              <Copy size={14} />
              <span>Copy</span>
            </button>
            <button className="px-3 sm:px-4 py-2 bg-white hover:bg-gray-200 rounded-full flex items-center gap-2 text-xs sm:text-sm transition-all shadow-sm">
              <FileText size={14} />
              <span>CV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="sm:hidden text-gray-600"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Links */}
      <nav
        className={`absolute sm:static top-16 left-0 w-full sm:w-auto bg-white shadow-md sm:shadow-none flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 sm:p-0 text-center transition-all duration-300 ${menuOpen ? "block" : "hidden sm:flex"}`}
      >
        <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-all">
          LinkedIn
        </a>
        <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-all">
          Dribbble
        </a>
        <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-all">
          Instagram
        </a>
      </nav>
    </header>
  );
};

export default Header;