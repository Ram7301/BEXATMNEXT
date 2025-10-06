"use client";

import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-24">
      <div className="bg-white shadow-2xl rounded-2xl max-w-6xl w-full grid md:grid-cols-2 overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start p-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-black">
            Let’s Talk!
          </h1>
          <p className="mb-6 text-lg text-gray-600 max-w-md">
            Drop us a message, we’d love to hear from you. To know more{" "}
           
          </p>

          {/* Coffee section removed */}
          {/*
          <div className="flex items-center gap-3 mb-8">
            <img
              src="/coffee-icon.png"
              alt="Coffee"
              className="w-8 h-8 object-contain"
            />
            <span className="text-gray-700 font-medium">Coffee</span>
          </div>

          <p className="flex items-center gap-2 text-sm text-gray-600">
            <Icon icon="mdi:coffee" className="w-5 h-5 text-[#00B56A]" />
            Let’s grab a virtual coffee together!
          </p>
          */}
        </div>

        {/* Right Section */}
        <div className="p-10 bg-white">
          <h2 className="text-2xl font-semibold text-[#00B56A] mb-6">
            Fill in Your Details
          </h2>
          <form className="space-y-5">
         
            <input
              type="text"
              placeholder="Name *"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B56A] placeholder-gray-400 text-gray-700"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B56A] placeholder-gray-400 text-gray-700"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B56A] placeholder-gray-400 text-gray-700"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B56A] placeholder-gray-400 text-gray-700"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#00B56A] hover:bg-[#00995B] text-white py-3 rounded-xl font-medium text-lg shadow-md transition-all"
            >
              🚀 Send Message
            </button>
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
