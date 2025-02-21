import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center">
      {/* Image with Rounded Shape */}
      <div className="mb-6 sm:mb-8">
        <img
          src="data:image/png;base64,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" // Handshake image
          alt="Handshake"
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full object-cover shadow-sm"
        />
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">
        Tell me about your next<br />project
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <button className="b  px-5 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 text-sm sm:text-base transition-all">
          <Mail size={16} />
          Email Me
        </button>
        <button className="b px-5 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 text-sm sm:text-base transition-all">
          <MessageSquare size={16} />
          WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Contact;