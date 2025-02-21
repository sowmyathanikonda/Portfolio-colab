import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
      {/* Image */}
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1496484805162-42c00f79cdce?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          alt="Handshake"
          className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-8"
        />
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">
        Tell me about your next<br />project
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 text-sm sm:text-base">
          <Mail size={16} />
          Email Me
        </button>
        <button className="bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 text-sm sm:text-base">
          <MessageSquare size={16} />
          WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Contact;