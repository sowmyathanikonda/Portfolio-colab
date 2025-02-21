import React, { useState } from "react";
import { Monitor, Smartphone, Palette, Code } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Reset animation after 300ms
  };

  return (
    <div
      className={`text-center p-4 sm:p-6 cursor-pointer transition-all duration-300 border border-gray-200 rounded-2xl hover:border-blue-200 hover:shadow-lg ${
        isClicked ? "animate-jumble" : ""
      }`}
      onClick={handleClick}
    >
      {/* Icon Container with Smooth Rounded Borders */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm hover:shadow-md transition-shadow">
        <Icon size={24} className="text-black" /> {/* Black Icon Color */}
      </div>
      <h3 className="font-semibold text-sm sm:text-base mb-2">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16"> {/* Adjusted padding for mobile */}
      <h2 className="text-black text-4xl sm:text-5xl font-bold text-center mb-10 sm:mb-12 mt-35">
        Collaborate with brands and agencies<br />to create impactful results.
      </h2>

      {/* Services Button */}
      <div className="mb-6 sm:mb-12 flex justify-center">
        <button className="bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base hover:bg-gray-200 transition-all">
          Services
        </button>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        <ServiceCard
          icon={Monitor}
          title="UX & UI"
          description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
        />
        <ServiceCard
          icon={Smartphone}
          title="Web & Mobile App"
          description="Transforming ideas into exceptional web and mobile experiences."
        />
        <ServiceCard
          icon={Palette}
          title="Design & Creative"
          description="Crafting visually stunning designs that connect with your audience."
        />
        <ServiceCard
          icon={Code}
          title="Development"
          description="Bringing visions to life with the latest technology and design trends."
        />
      </div>
    </section>
  );
};

export default Services;