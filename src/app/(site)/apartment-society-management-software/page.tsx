"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function BexAtmPdfPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    company: "",
    email: "",
    phone: "",
    datetime: "",

  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);


  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, jobTitle, company, email, phone, datetime } = formData;

    if (!name || !email || !phone || !jobTitle || !company) {
      setMessage("❌ Please fill all required fields.");
      return;
    }

    if (!/^[0-9]{10,15}$/.test(phone)) {
      setMessage("❌ Please enter a valid phone number.");
      return;
    }

    if (!datetime) {
      setMessage("❌ Please select preferred date & time.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://bexatm.com/api/TrailMailRequestInsertController.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cGUiOiJKV1QifQ.eyJzdWIiOiJCZXhAMTIzIiwibmFtZSI6IkJleCIsImFkbWluIjp0cnVlLCJleHAiOjE2Njk5ODQzNDl9.uxE3r3X4lqV_WKrRKRPXd-Jub9BnVcCXqCtLL4I0fpU",
          },
          body: JSON.stringify({
            RecordID: "",
            MailID: email,
            Name: name,
            MobileNumber: phone,
            TrailType: "C",
            Description: `Job Title: ${jobTitle}, Company: ${company}, Preferred Date & Time: ${datetime}`,
          }),
        }
      );

      const result = await response.json();

      if (result.Status === "Y") {
        setMessage("✅ Demo request sent successfully! Check your email.");
        setFormData({
          name: "",
          jobTitle: "",
          company: "",
          email: "",
          phone: "",
          datetime: "",

        });
      } else {
        setMessage(`❌ Failed: ${result.Msg || "Unknown error"}`);
      }
    } catch (error) {
      setMessage("⚠️ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDemoPopupOpen(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-black">


      {isDemoPopupOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsDemoPopupOpen(false)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-2xl p-8 relative shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsDemoPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Book a Demo
            </h2>

            {/* Updated Beautiful Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Phone Number *</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  required
                />
              </div>

              {/* Two Column Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Job Title */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Job Title</label>
                  <input
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Manager, CEO, Developer..."
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  />
                </div>

                {/* Company Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Company Name</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  name="datetime"
                  value={formData.datetime}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F6B200] hover:bg-yellow-400 text-black py-3 rounded-xl text-lg font-semibold shadow-md"
              >
                {loading ? "Submitting..." : "Book Demo"}
              </Button>
            </form>

            {message && (
              <p className="text-center mt-4 text-sm text-red-600">{message}</p>
            )}
          </div>
        </div>
      )}


      {/* HERO */}
      <section
        className="relative flex flex-col md:flex-row items-center 
  justify-center md:justify-between w-full min-h-screen px-6 md:px-20 text-white overflow-hidden"
      >
        {/* ✅ Full Background Image */}
        <img
          src="/images/community4.webp"
          alt="Community"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ✅ Optional overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* ✅ Text Content */}
        <div className="text-center md:text-left max-w-xl md:max-w-lg 
    mt-0 md:mt-10 md:ml-4 relative z-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Smart Project Management for Apartment Communities
          </h1>

          <p className="text-base sm:text-lg text-gray-200 font-medium mb-6 leading-relaxed">
            BexATM brings residents, facility teams, and committees together on one
            AI-powered platform — for transparent, organized, and stress-free community management.
          </p>

          <Button
            onClick={scrollToForm}
            className="bg-[#F6B200] text-black font-semibold hover:bg-yellow-400 px-8 py-3 rounded-md transition-all duration-300"
          >
            Book a Demo
          </Button>
        </div>
      </section>



      {/* PROBLEM SECTION */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between 
  py-10 md:py-24 px-6 md:px-20 mt-0 md:mt-0 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/community5.webp')" }}
      >

        <div className="container mx-auto px-6 lg:px-12">

          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Managing Communities Is Harder Than It Looks
            </h2>
          </div>

          <div className="flex justify-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[850px] mr-auto">
              {[
                ["4.png", "Missed maintenance schedules"],
                ["5.png", "Poor communication between residents & management"],
                ["6.png", "Budget mismanagement & fund disputes"],
                ["7.png", "Manual complaint tracking causes delays"],
              ].map(([img, text]) => (
                <div
                  key={text}
                  className="p-4 bg-white border rounded-2xl text-center shadow-sm max-w-[260px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
                >
                  <img src={`images/icons/${img}`} className="mx-auto mb-2 h-15" />
                  <h3 className="font-semibold text-gray-800 text-sm">{text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ONE PLATFORM SECTION */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between py-20 md:py-24 px-6 mb-0 md:-mb mt-0 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/community6.webp')",
        }}
      >
        <div className="container mx-auto px-6 lg:px-12">

          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              From Maintenance to Meetings Manage It All Seamlessly
            </h2>

          </div>

          <div className="flex justify-start">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[850px] mr-auto">
              {/* cards */}
              {[
                ["4.png", "AI-Powered Task Management", "Predict delays and auto-adjust timelines."],
                ["5.png", "Task & Resource Management", "Assign tasks, track usage, monitor progress."],
                ["6.png", "Budget Tracking", "Real-time expense insights."],
                ["7.png", "Doc Workflow & Approval", "Share plans, blueprints & approvals."],
                ["8.png", "Progress Dashboards", "Visualize milestones & reports."],
                ["9.png", "Mobile Access for Site Teams", "Upload photos or status from site."],
              ].map(([img, title, desc]) => (
                <div
                  key={title}
                  className="p-4 bg-white border rounded-2xl text-center shadow-sm max-w-[260px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg"
                >
                  <img src={`images/icons/${img}`} className="mx-auto mb-2 h-15" />
                  <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
                  <p className="text-gray-600 text-xs mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY TYPES + AI SECTION */}
      <section className="relative py-20 md:py-24 px-6 md:px-20 mt-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/community7.webp')] bg-cover bg-center pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <div className="space-y-14">

            {/* Use Cases Section */}
            <div className="mt-12">


              {/* 4 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {[
                  "Apartment Associations",
                  "Gated Communities",
                  "Co-living Spaces",
                  "Commercial Complexes",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="backdrop-blur-sm bg-white/60 p-6 rounded-2xl shadow-sm border hover:shadow-md transition"
                  >
                    <h4 className="text-xl font-semibold text-gray-800">{item}</h4>
                  </div>
                ))}
              </div>
            </div>



            {/* AI Advantage */}
            <div className="border-l-4 border-[#F6B200] pl-8">
              <h4 className="text-2xl md:text-3xl font-semibold mb-4">
                Your AI-Powered Community Manager
              </h4>
              <ul className="space-y-4 text-lg text-gray-700">
                {[
                  "Predictive maintenance alerts",
                  "AI-powered complaint routing",
                  "Automated budget summaries",
                  "Engagement insights for committees",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#F6B200] text-xl mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 md:py-24 mt-0">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-gray-900">
            How Does BexATM Benefit Your Community?
          </h3>


          <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: "40% Faster", t: "Issue Resolution" },
              { v: "100% Transparent", t: "Fund Tracking" },
              { v: "Stronger", t: "Community Engagement" },
              { v: "Paperless", t: "Operations" },
            ].map((b, i) => (
              <div
                key={b.t}
                className={`p-8 bg-white rounded-xl shadow-md border transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-xl ${i % 2 === 1 ? "mt-6" : "mb-6"
                  }`}
              >
                <div className="text-2xl font-extrabold">{b.v}</div>
                <div className="text-gray-600 mt-1">{b.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-24 mt-0 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900">What Our Users Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* Card 1 */}
          <div className="bg-white p-10 rounded-xl shadow-md border border-gray-200 relative">
            <span className="text-[#F6B200] text-4xl font-bold">“</span>
            <p className="mt-4 text-gray-700 italic leading-relaxed">
              Before BexATM, our community office was buried in paperwork and missed follow-ups.
              Ever since we switched to BexATM, task allocation has become effortless and transparent.
              The ticketing system is so clear that our response time has improved by nearly 60%.
              Residents are happier, and our team feels more organized than ever.
              Truly a game-changer for any society management team.
            </p>

            <div className="mt-6">
              <p className="font-bold text-gray-900">Facility Manager</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 rounded-xl shadow-md border border-gray-200 relative">
            <span className="text-[#F6B200] text-4xl font-bold">“</span>
            <p className="mt-4 text-gray-700 italic leading-relaxed">
              BexATM has brought a new level of professionalism to our community.
              From maintenance updates to vendor management, everything is available in one clean dashboard.
              The transparency it offers has increased trust among residents, and we receive far fewer complaints.
              The budgeting and expense tracking tools are incredibly helpful for decision-making.
              Highly recommended for any gated community.
            </p>

            <div className="mt-6">
              <p className="font-bold text-gray-900">President, Resident Welfare Association (RWA)</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-xl shadow-md border border-gray-200 relative">
            <span className="text-[#F6B200] text-4xl font-bold">“</span>
            <p className="mt-4 text-gray-700 italic leading-relaxed">
              As a company handling multiple apartment complexes, BexATM is exactly what we needed.
              The software ensures smooth coordination across teams, and the automated reminders prevent delays.
              Our clients appreciate the organized reporting and real-time updates.
              BexATM doesn’t just simplify work—it helps us deliver better service every day.
            </p>

            <div className="mt-6">
              <p className="font-bold text-gray-900">Property Management Company</p>
            </div>
          </div>

        </div>
      </section>

      {/* DEMO FORM */}
      <section
        ref={formRef}
        className="relative py-20 md:py-24 px-6 md:px-20 mt-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/demo-bg.png')" }}
      >
        <div className="absolute inset-0 bg-white/75"></div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Questions */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black-800">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {[
                {
                  q: "What is BexATM Community Management Software?",
                  a: "BexATM is a cloud-based community and apartment management software that helps RWAs, property managers, and facility teams streamline operations. It includes features like task allocation, maintenance ticketing, budgeting, vendor management, staff monitoring, announcements, and real-time reports—all in one platform."
                },
                {
                  q: "Who can use BexATM?",
                  a: "BexATM is designed for Apartment societies & gated communities, Resident Welfare Associations (RWAs), Facility management teams, Property management companies, Builders & developers managing multiple projects. Anyone looking to simplify society operations can use it effectively."
                },
                {
                  q: "How does BexATM help improve community management?",
                  a: "BexATM reduces manual work, eliminates paperwork, and improves transparency. It streamlines complaint management, automates reminders, tracks staff productivity, manages budgets, and offers real-time insights for faster decision-making — improving resident satisfaction."
                },
                {
                  q: "Does BexATM have a maintenance & ticketing system?",
                  a: "Yes. BexATM includes a robust maintenance ticketing system where residents can raise complaints, and managers can assign, monitor, and close tasks effortlessly. It also sends notifications and updates at every stage."
                },
                {
                  q: "Can BexATM help track budgets and expenses?",
                  a: "Absolutely. BexATM provides a financial module to track community budgets, expenses, vendor payments, and reports. This ensures transparency and accurate financial planning for RWAs."
                },
                {
                  q: "Is the software easy for staff and residents to use?",
                  a: "Yes. BexATM has a simple, user-friendly interface designed for all age groups. Even non-technical staff can use the system with minimal training."
                },
                {
                  q: "Is my data safe with BexATM?",
                  a: "Yes. BexATM uses secure cloud infrastructure, encrypted data storage, and role-based access control to ensure complete data privacy and protection."
                },
                {
                  q: "Can BexATM be used on mobile phones?",
                  a: "Yes. BexATM is accessible on both mobile and desktop browsers. A mobile app version is also available for managers, staff, and residents for easier on-the-go access."
                },
                {
                  q: "Does BexATM support vendor and staff management?",
                  a: "Yes. BexATM allows you to add vendors, track contracts, assign work, monitor staff attendance, track shifts, and get performance reports."
                },
                {
                  q: "Can BexATM help with community announcements and updates?",
                  a: "Yes. You can instantly send announcements, event updates, notices, and emergency alerts to all residents through the dashboard or mobile app."
                },
                {
                  q: "Can BexATM handle multiple communities or properties?",
                  a: "Yes. Property management companies can manage multiple societies from a single dashboard with individual reporting and control."
                },
                {
                  q: "What makes BexATM different from other community management software?",
                  a: "BexATM stands out for its simple UI, fast performance, complete automation, real-time monitoring, strong reporting tools, customizable modules, and responsive support — making community management seamless and burden-free."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#F6B200] rounded-md shadow-sm"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center text-left p-4 font-medium text-black-800"
                  >
                    <span>{item.q}</span>
                    <span className="text-[#F6B200] text-2xl font-bold">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {openIndex === index && (
                    <p className="px-4 pb-4 text-black-600 text-sm">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>




          {/* Form */}
          <div className="bg-white shadow-lg p-8 rounded-md">
            <h3 className="text-xl font-bold mb-4">Request a Free Demo</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {[
                ["name", "Name"],
                ["jobTitle", "Job Title"],
                ["company", "Company Name"],
                ["email", "Work Email"],
                ["phone", "Phone Number"],
              ].map(([key, label]) => (
                <div key={key}>
                  <label className="text-sm font-semibold">{label} *</label>
                  <input
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full border border-[#F6B200] rounded-md p-2 mt-1 text-sm"
                    required
                  />
                </div>
              ))}

              {/* ✅ Preferred Date & Time */}
              <div>
                <label className="text-sm font-semibold">Preferred Date & Time *</label>
                <input
                  type="datetime-local"
                  name="datetime"
                  value={formData.datetime}
                  onChange={handleChange}
                  className="w-full border border-[#F6B200] rounded-md p-2 mt-1 text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F6B200] hover:bg-yellow-400 text-black font-semibold py-2 rounded-md"
              >
                {loading ? "Sending..." : "Book Demo"}
              </button>

              {message && <p className="text-center text-sm mt-3">{message}</p>}
            </form>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 px-4 text-center space-y-6">
        {/* Heading + Subtext */}
        <div>
          <h3 className="text-lg font-semibold">
            Start Managing Smarter with <span className="text-yellow-400">BexATM</span> — Powered by AI
          </h3>
          <p className="text-sm text-gray-300 mt-2 max-w-sm mx-auto">
            Join 800+ communities who’ve automated workflows and grown faster with BexATM.
          </p>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Book Demo Button */}
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-300 transition">
            Book a Demo
          </button>

          {/* WhatsApp Chat Button */}
          <Button
            asChild
            variant="outline"
            className="border border-[#F6B200] text-[#F6B200] hover:bg-[#F6B200] hover:text-black px-6 py-3 font-semibold rounded-md transition-all duration-300"
          >
            <a
              href="https://wa.me/919444408804"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with Our Expert:{" "}
              <span className="ml-2 font-bold">+91 944 440 8804</span>
            </a>
          </Button>
        </div>

        {/* Footer Bottom Text */}
        <p className="text-xs text-gray-400 pt-4 border-t border-gray-800">
          © {new Date().getFullYear()} BexATM. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
