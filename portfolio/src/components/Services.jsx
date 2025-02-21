import React from 'react';
import { Monitor, Smartphone, Palette, Code } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="text-center p-4 sm:p-6">
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
      <Icon size={20} className="sm:w-6 sm:h-6" />
    </div>
    <h3 className="font-semibold text-sm sm:text-base mb-2">{title}</h3>
    <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 mt-30">
      <h2 className="text-black text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        Collaborate with brands and agencies<br />to create impactful results.
      </h2>

      {/* Services Button */}
      <div className="mb-8 sm:mb-12 flex justify-center">
        <button className="bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base">
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