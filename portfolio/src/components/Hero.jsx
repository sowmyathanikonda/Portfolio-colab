import React from 'react';
import "./style.css";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen w-full px-6 sm:px-12 lg:px-24 py-12 mt-16 sm:mt-20"> {/* Added margin-top */}
      {/* Profile Image - Positioned properly */}
      <div className="relative mt-12 sm:mt-16 md:mt-20 flex justify-center">
        <div className="bg-gray-100 rounded-lg p-4 sm:p-5 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
            alt="Profile"
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="absolute -right-6 -top-6 bg-black text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium shadow-lg transform transition duration-300 hover:scale-105">
          <span className="block">🔥 Keenan Ahmed</span>
          <span className="text-gray-300 text-xs">Creative Developer '24</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rotate-45"></div>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-4xl mt-8 sm:mt-12 text-black">
        Building digital <br className="hidden sm:block" />
        products, brands, and <br className="hidden sm:block" />
        experiences.
      </h1>

      {/* Button */}
      <button className="mt-8 bg-black text-white px-6 py-3 rounded-full inline-flex items-center gap-2 mx-auto hover:bg-gray-800 text-base sm:text-lg md:text-xl">
        Latest Shots
        <span className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center text-sm">
          ↗
        </span>
      </button>

      {/* Logos Grid - White background with rounded smooth corners */}
      <div className="bg-gray-100 mt-20\\
       sm:mt-4 rounded-lg p-6 sm:p-8 shadow-sm w-full max-w-6xl">
        <div className="bg-gray-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-10 items-center opacity-80">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="h-10 sm:h-12 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="h-10 sm:h-12 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
            alt="LinkedIn"
            className="h-10 sm:h-12 pl-4 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="h-10 sm:h-12 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            className="h-10 sm:h-12 object-contain"
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png"
            alt="Nike"
            className="h-10 sm:h-12 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
