import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 border-t">
      <span className="text-xs sm:text-sm text-gray-600">© 2024 All rights reserved.</span>

      {/* Navigation Links */}
      <nav className="flex gap-4">
        <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900">LinkedIn</a>
        <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900">Dribbble</a>
        <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900">Instagram</a>
      </nav>
    </footer>
  );
};

export default Footer;