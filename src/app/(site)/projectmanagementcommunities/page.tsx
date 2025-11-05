"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * Drop this file into: app/bexatm/page.jsx
 * Ensure TailwindCSS is configured in your Next.js project.
 * Replace images under /public/images/ as needed.
 */

export default function BexAtmPdfPage() {
const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      {/* <header className="sticky top-0 z-40 bg-white/60 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-indigo-600 to-rose-500 flex items-center justify-center text-white font-bold">BA</div>
            <div>
              <h1 className="text-lg font-semibold">BexATM</h1>
              <p className="text-xs text-gray-500">Project Management for Communities</p>
            </div>
          </div>

          <nav className="flex items-center gap-3">
            <a href="#book-demo" className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm shadow">Book Demo</a>
            <a href="#features" className="px-3 py-2 rounded-md border border-gray-200 text-sm">Features</a>
          </nav>
        </div>
      </header> */}

      {/* Hero */}
  <section className="relative bg-black text-white">
  {/* 🔹 Top-left logo */}
  <div className="absolute top-0 left-10 z-20 flex items-center space-x-2">
    <Image
      src="/images/header/bexx1.png"
      alt="BexATM Logo"
      width={248}
      height={248}
      className="rounded-md"
    />
  </div>

  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
    {/* Left content */}
    <div className="space-y-6 mt-10 md:mt-0">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
        Smart Project Management for Apartment Communities
      </h2>
      <p className="text-gray-300 max-w-xl">
        BexATM brings residents, facility teams, and committees together on one AI-powered platform — 
        for transparent, organized, and stress-free community management.
      </p>

      <div className="flex gap-4 mt-6">
        <a
          className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-500 transition-all duration-300"
          href="#book-demo"
        >
          Book Demo
        </a>
      </div>
    </div>

    {/* Right visual */}
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-700 p-6">
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xs text-gray-400">Open Tickets</div>
            <div className="text-2xl font-semibold mt-1 text-yellow-400">18</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Budget Available</div>
            <div className="text-2xl font-semibold mt-1 text-yellow-400">₹1.2M</div>
          </div>
        </div>
        <div className="mt-4 text-xs text-gray-400">
          Visual: Dashboard showing maintenance tickets, budgets, and community calendar
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Problem / Before */}
     <section className="relative bg-white text-black py-20 px-6 md:px-20 overflow-hidden">
  {/* Soft background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(246,178,0,0.18),transparent_60%)] pointer-events-none"></div>

  <div className="max-w-6xl mx-auto relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left leading-tight">
      Managing Communities Is Harder Than It Looks
    </h2>

    <p className="text-gray-600 mt-4 max-w-2xl text-center md:text-left">
      Community operations involve complex coordination. Small missteps turn into big problems.
    </p>

    {/* Improved Grid */}
    <div className="grid sm:grid-cols-2 gap-8 mt-14">
      {[
        { img: "/images/icons/1.png", text: "Missed maintenance schedules" },
        { img: "/images/icons/2.png", text: "Poor communication between residents & management" },
        { img: "/images/icons/3.png", text: "Budget mismanagement & fund disputes" },
        { img: "/images/icons/4.png", text: "Manual complaint tracking causes delays" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white"
        >
          <div className="shrink-0 bg-[#F6B200]/10 p-3 rounded-lg">
            <img src={item.img} className="w-10 h-10" alt={item.text} />
          </div>
          <p className="text-lg font-medium text-gray-800 leading-snug">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* One Platform / Features */}
  <section id="features" className="bg-gradient-to-b from-white to-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Section Heading */}
    <div className="max-w-2xl mx-auto mb-12">
      <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight">
        One Platform for a Smarter Community
      </h3>
      <p className="mt-3 text-lg text-gray-600">
        From maintenance to meetings — manage it all seamlessly with AI-powered simplicity.
      </p>
      <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full"></div>
    </div>

    {/* Feature Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          t: "AI Task Tracking",
          d: "Predict delays, assign priorities, and automate scheduling.",
          icon: "/images/icons/1.png",
        },
        {
          t: "Complaint & Ticket Management",
          d: "Track and resolve complaints efficiently with transparent status updates.",
          icon: "/images/icons/2.png",
        },
        {
          t: "Budget & Expense Dashboard",
          d: "Visualize expenses, track collections, and ensure 100% transparency.",
          icon: "/images/icons/3.png",
        },
        {
          t: "Resident Communication Board",
          d: "Post announcements, conduct polls, and engage your community effortlessly.",
          icon: "/images/icons/4.png",
        },
        {
          t: "Event & Facility Booking",
          d: "Book halls, gyms, or events with real-time availability tracking.",
          icon: "/images/icons/5.png",
        },
        {
          t: "Automated Reports",
          d: "Generate insightful AI-based monthly reports automatically.",
          icon: "/images/icons/6.png",
        },
      ].map((f) => (
        <div
          key={f.t}
          className="group bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center space-y-5">
            {/* Larger icon, no background */}
            <img
              src={f.icon}
              alt={f.t}
              className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <h4 className="font-semibold text-lg text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
              {f.t}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">{f.d}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Types of Communities & AI Manager */}
   <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
  {/* Background texture */}
  <div
    className="absolute inset-0 bg-[url('/images/pattern-light.png')] opacity-10 bg-cover bg-center pointer-events-none"
  ></div>

  <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    {/* Left content */}
    <div className="space-y-10">
      {/* Use Case Section */}
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Perfect for All Types of Communities
        </h3>
        <ul className="space-y-3 text-lg text-gray-700 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-[#F6B200] text-xl">•</span> Apartment Associations
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#F6B200] text-xl">•</span> Gated Communities
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#F6B200] text-xl">•</span> Co-living Spaces
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#F6B200] text-xl">•</span> Commercial Complexes
          </li>
        </ul>
      </div>

      {/* AI Advantage Section */}
      <div className="border-l-4 border-[#F6B200] pl-6">
        <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Your AI-Powered Community Manager
        </h4>
        <ul className="space-y-3 text-lg text-gray-700 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-[#F6B200] text-xl">•</span> Predictive maintenance alerts
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#F6B200] text-xl">•</span> AI-powered complaint routing
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#F6B200] text-xl">•</span> Automated community budget summaries
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#F6B200] text-xl">•</span> Engagement insights for committees
          </li>
        </ul>
      </div>
    </div>

{/* Right Image with Floating Icons */}
<div className="flex justify-center">
  <div className="relative w-full max-w-md">

    {/* Main Dashboard Image */}
    <img
      src="/images/board2.png"
      alt="AI Dashboard with Community Members"
      className="w-full rounded-2xl shadow-xl ring-1 ring-gray-200"
    />

    {/* Floating Avatars */}
    <img
      src="/images/icons/26.png"
      className="w-20 h-20 rounded-full shadow-lg absolute -top-8 left-6 bg-white ring-2 ring-white"
      alt="avatar"
    />
    <img
      src="/images/icons/27.png"
      className="w-20 h-20 rounded-full shadow-lg absolute -top-8 right-6 bg-white ring-2 ring-white"
      alt="avatar"
    />
    <img
      src="/images/icons/26.png"
      className="w-20 h-20 rounded-full shadow-lg absolute bottom-6 -left-8 bg-white ring-2 ring-white"
      alt="avatar"
    />
    <img
      src="/images/icons/28.png"
      className="w-20 h-20 rounded-full shadow-lg absolute bottom-6 -right-8 bg-white ring-2 ring-white"
      alt="avatar"
    />

  </div>
</div>


  </div>
</section>



      {/* Benefits / Metrics */}
<section className="bg-gradient-to-br from-white to-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h3 className="text-4xl font-bold text-gray-900">
      How Does BexATM Benefit Your Community?
    </h3>
    <p className="mt-3 text-lg text-gray-600">
      Beyond day-to-day operations — real, measurable impact.
    </p>

    <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { v: "40% Faster", t: "Issue Resolution" },
        { v: "100% Transparent", t: "Fund Tracking" },
        { v: "Stronger", t: "Community Engagement" },
        { v: "Paperless", t: "Operations" },
      ].map((b) => (
        <div
          key={b.t}
          className="p-8 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
        >
          <div className="text-2xl font-extrabold text-gray-900">{b.v}</div>
          <div className="text-gray-600 mt-1">{b.t}</div>
        </div>
      ))}
    </div>
  </div>
</section>

    {/* Testimonials */}
<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h3 className="text-4xl font-bold text-gray-900">
      What Our Users Say
    </h3>
  </div>

  <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
    <blockquote className="p-8 bg-gray-50 border-l-4 border-[#F6B200] rounded-lg shadow-sm">
      <p className="text-lg text-gray-800 leading-relaxed italic">
        “Our apartment committee reduced complaints backlog by <span className="font-semibold text-[#F6B200]">70%</span> after switching to BexATM.”
      </p>
      <footer className="mt-4 text-sm font-medium text-gray-700">
        — Ravi Menon, Secretary, GreenPark Apartments
      </footer>
    </blockquote>

    <blockquote className="p-8 bg-gray-50 border-l-4 border-[#F6B200] rounded-lg shadow-sm">
      <p className="text-lg text-gray-800 leading-relaxed italic">
        “Budget transparency improved resident trust dramatically!”
      </p>
      <footer className="mt-4 text-sm font-medium text-gray-700">
        — Aishwarya Rao, Treasurer, Sunrise Enclave
      </footer>
    </blockquote>
  </div>
</section>


    {/* Book a Free Demo + FAQ Combined Section */}
<section
        className="relative py-20 px-6 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/demo-bg.png')" }}
      >
        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="relative grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* FAQ */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black-800">
              Got Questions? We’ve Got You Covered.
            </h2>

            <div className="space-y-3">
              {[
                "Does BexATM work for remote teams?",
                "Can I integrate it with Google Workspace or Slack?",
                "How secure is my company data?",
                "What’s the pricing model for startups?",
              ].map((q, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#F6B200] rounded-md shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center text-left p-4 font-medium text-black-800"
                  >
                    <span>{q}</span>
                    <span className="text-[#F6B200] text-2xl font-bold">
                      {openIndex === i ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === i && (
                    <p className="px-4 pb-4 text-sm text-black-600">
                      Yes — BexATM is built for distributed and hybrid teams with secure cloud access.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white shadow-lg rounded-md p-8 w-full">
            <h2 className="text-xl md:text-2xl font-bold text-black-800">
              Let’s Build Smarter Together
            </h2>
            <p className="text-black-600 mb-6 text-sm">
              Book your free demo now — no credit card needed.
            </p>

            <form className="space-y-4">
              {["Name", "Job Title", "Company Name", "Work Email", "Phone Number"].map(
                (field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-semibold mb-1">
                      {field}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={
                        field.includes("Email")
                          ? "email"
                          : field.includes("Phone")
                            ? "tel"
                            : "text"
                      }
                      placeholder={field}
                      className="w-full border border-[#F6B200] rounded-md p-2 text-sm focus:ring-2 focus:ring-[#F6B200] focus:outline-none"
                    />
                  </div>
                )
              )}
              <button
                type="submit"
                className="w-full bg-[#F6B200] hover:bg-yellow-400 text-black font-semibold py-2 rounded-md mt-4 transition-all duration-300"
              >
                Book My Free Demo
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-8">© {new Date().getFullYear()} BexATM</footer>
    </main>
  );
}
