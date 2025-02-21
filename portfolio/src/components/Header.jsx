import React, { useState } from "react";
import { Copy, FileText, Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("keenan@design@gmail.com").then(() => {
      alert("Email copied to clipboard!"); // Optional: Notify the user
    });
  };

  const downloadCV = () => {
    // Replace this URL with the actual URL of your CV file
    const cvUrl = "https://example.com/path/to/cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Keenan_Ahmed_CV.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="w-full px-4 sm:px-6 py-3 flex justify-between items-center bg-white shadow-md fixed top-0 left-0 z-50">
      {/* Left Side: Logo & Email & Buttons */}
      <div className="flex items-center gap-6">
        {/* Small Black Bird Logo with Fade-In Animation */}
        <div className="bg-white rounded-lg p-2 sm:p-3 flex items-center shadow-sm animate-fade-in">
  <img
    src="https://t4.ftcdn.net/jpg/10/74/70/15/240_F_1074701502_f1oTt80nfldfHyv9Y8oLmyU3Er4in2Y0.jpg" // Black bird logo
    alt="Logo"
    className="w-10 h-10 sm:w-10 sm:h-10 object-contain" // Increased size
  />
</div>

        {/* Profile section with light gray background and rounded edges */}
        <div className="bg-gray-100 rounded-lg p-2 sm:p-3 flex items-center gap-4 shadow-sm">
          <span className="text-sm sm:text-base text-gray-600 truncate">
            keenan@design@gmail.com
          </span>

          <div className="flex gap-2">
            <button
              onClick={copyEmail}
              className="px-3 sm:px-4 py-2 bg-white hover:bg-gray-200 rounded-full flex items-center gap-2 text-xs sm:text-sm transition-all shadow-sm hover:scale-105"
            >
              <Copy size={14} />
              <span>Copy</span>
            </button>
            <button
              onClick={downloadCV}
              className="px-3 sm:px-4 py-2 bg-white hover:bg-gray-200 rounded-full flex items-center gap-2 text-xs sm:text-sm transition-all shadow-sm hover:scale-105"
            >
              <FileText size={14} />
              <span>CV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="sm:hidden text-gray-600 hover:text-gray-900 transition-all"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Links with Slide-In Animation */}
      <nav
        className={`absolute sm:static top-16 left-0 w-full sm:w-auto bg-white shadow-md sm:shadow-none flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 sm:p-0 text-center transition-all duration-300 ease-in-out ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 sm:translate-x-0 sm:opacity-100"} sm:flex`}
      >
        <a
          href="#"
          className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-all hover:underline hover:scale-105"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-all hover:underline hover:scale-105"
        >
          Dribbble
        </a>
        <a
          href="#"
          className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-all hover:underline hover:scale-105"
        >
          Instagram
        </a>
      </nav>
    </header>
  );
};

export default Header;