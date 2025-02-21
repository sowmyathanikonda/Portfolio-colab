import React from "react";
import { Copy, FileText } from "lucide-react";

const Header = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("keenan@design@gmail.com");
  };

  return (
    <header className="w-full h-auto sm:h-16 px-6 py-4 sm:py-2 flex flex-col sm:flex-row justify-between items-center bg-white shadow-md fixed top-0 left-0 z-50">
      {/* Left Side: Email & Buttons */}
      <div className="flex items-center gap-4">
        {/* Email */}
        <span className="text-sm sm:text-base text-gray-600">
          keenan@design@gmail.com
        </span>

        {/* Copy & CV Buttons */}
        <div className="flex gap-2">
          <button
            onClick={copyEmail}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center gap-2 text-sm sm:text-base transition-all"
          >
            <Copy size={16} />
            <span>Copy</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center gap-2 text-sm sm:text-base transition-all">
            <FileText size={16} />
            <span>CV</span>
          </button>
        </div>
      </div>

      {/* Right Side: Navigation Links */}
      <nav className="flex gap-4">
        <a
          href="#"
          className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-all"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-all"
        >
          Dribbble
        </a>
        <a
          href="#"
          className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-all"
        >
          Instagram
        </a>
      </nav>
    </header>
  );
};

export default Header;
