import React from 'react';
import "./style.css";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen w-full px-6 sm:px-12 lg:px-24 py-12">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-4xl">
        Building digital <br className="hidden sm:block" />
        products, brands, and <br className="hidden sm:block" />
        experiences.
      </h1>

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

      {/* Button */}
      <button className="mt-8 bg-black text-white px-6 py-3 rounded-full inline-flex items-center gap-2 mx-auto hover:bg-gray-800 text-base sm:text-lg md:text-xl">
        Latest Shots
        <span className="bg-white text-black rounded-full w-7 h-7 flex items-center justify-center text-sm">
          ↗
        </span>
      </button>

      {/* Logos Grid - White background with rounded smooth corners */}
      <div className="bg-gray-100 mt-24 sm:mt-28 rounded-lg p-4 sm:p-6 shadow-sm w-full max-w-6xl mx-auto">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-center">
  
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="max-h-12 w-auto mx-auto object-contain filter brightness-0 saturate-100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="max-h-12 w-auto mx-auto object-contain filter brightness-0 saturate-100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" 
      className="max-h-12 w-auto mx-auto object-contain filter brightness-[0.3] contrast-100" />


    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="max-h-12 w-auto mx-auto object-contain filter brightness-3 saturate-100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="max-h-12 w-auto mx-auto object-contain filter brightness-0 saturate-100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" className="max-h-12 w-auto mx-auto object-contain filter brightness-0 saturate-100" />


  </div>
</div>


    </section>
  );
};

export default Hero;
