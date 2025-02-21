import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
      {/* Profile Image */}
      <div className="relative inline-block mb-8">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
          alt="Profile"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
        />
        <span className="absolute -right-2 -top-2 bg-black text-white text-xs px-2 py-1 rounded-full">
          Keenan Ahmed '24
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
        Building digital<br />products, brands, and<br />experience.
      </h1>

      {/* Button */}
      <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-800 text-sm sm:text-base">
        Latest Shots <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">2</span>
      </button>

      {/* Logos Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8 items-center opacity-50">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg" alt="BMW" className="h-6 sm:h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" alt="Coca-Cola" className="h-6 sm:h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Adobe_logo.svg" alt="Adobe" className="h-6 sm:h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Codecademy_logo.svg" alt="Codecademy" className="h-6 sm:h-8" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg" alt="Subway" className="h-6 sm:h-8" />
      </div>
    </section>
  );
};

export default Hero;