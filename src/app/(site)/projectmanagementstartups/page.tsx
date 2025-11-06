"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

export default function ProjectManagementForStartups() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  // 🔹 Form state
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    company: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🔹 Scroll function
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔹 Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, jobTitle, company, email, phone } = formData;

    if (!name || !email || !phone || !jobTitle || !company) {
      setMessage("❌ Please fill all required fields.");
      return;
    }

    if (!/^[0-9]{10,15}$/.test(phone)) {
      setMessage("❌ Please enter a valid phone number (with or without country code).");
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
            TrailType: "R",
            Description: `Job Title: ${jobTitle}, Company: ${company}`,
          }),
        }
      );

      const result = await response.json();

      if (result.Status === "Y") {
        setMessage("✅ Demo request sent successfully!");
        setFormData({
          name: "",
          jobTitle: "",
          company: "",
          email: "",
          phone: "",
        });
      } else {
        setMessage(`❌ Failed: ${result.Msg || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Request error:", error);
      setMessage("⚠️ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 md:px-20 text-white overflow-hidden min-h-[70vh]">
        <div className="absolute inset-0 bg-[#1E1E1E]"></div>

        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/.png')" }}></div>

        <div className="absolute top-0 left-10 z-20 flex items-center space-x-2">
          <Image
            src="/images/header/bexx1.png"
            alt="BexATM Logo"
            width={248}
            height={248}
            className="rounded-md"
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto mt-5">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Your AI-Powered Project Partner for Startup Success
          </h1>

          <p className="text-base sm:text-lg text-blue-100 mb-5 leading-relaxed">
            BexATM helps startups and small businesses manage tasks, deadlines, and
            growth effortlessly — powered by AI automation, insights, and collaboration tools.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-5">
            <Button
              onClick={scrollToForm}
              className="bg-[#F6B200] text-black font-semibold hover:bg-yellow-400 px-6 py-3 rounded-md transition-all duration-300"
            >
              Book a Demo
            </Button>

            <Button
              variant="outline"
              className="border border-[#F6B200] text-[#F6B200] hover:bg-[#F6B200] hover:text-black px-6 py-3 rounded-md transition-all duration-300"
            >
              See Live Dashboard
            </Button>
          </div>

          <p className="text-blue-100 text-sm italic -mb-3">
            Trusted by fast-growing startups across India & beyond
          </p>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="relative py-20 px-6 md:px-20 text-gray-800 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        {/* Optional texture overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/large.png')" }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Growing a Startup Isn’t Easy
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                text: "Manual task tracking and endless spreadsheets waste hours.",
                icon: "/images/icons/17.png", // Spreadsheet icon
              },
              {
                text: "Team deadlines slip through the cracks.",
                icon: "/images/icons/18.png", // Calendar/Deadline icon
              },
              {
                text: "No clear project visibility or accountability.",
                icon: "/images/icons/19.png", // Eye/Visibility icon
              },
              {
                text: "Communication gets scattered across emails and chats.",
                icon: "/images/icons/20.png", // Chat icon
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={item.icon}
                  alt="Problem Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-10 font-medium">
            These challenges slow down your growth — BexATM fixes that.
          </p>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20 px-6 md:px-20 bg-white flex flex-col lg:flex-row items-center justify-between">
        {/* Left: Text */}
        <div className="lg:w-1/2 text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet BexATM: Your Smart Project Engine
          </h2>
          <h3 className="text-lg font-semibold text-gray-700">
            All-in-One Project Management for Agile Teams
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 pt-6">
            {[
              "AI-Powered Task Prioritization",
              "Smart Deadline Alerts",
              "Team Communication Hub",
              "Performance & Productivity Analytics",
              "Automated Progress Reports",
              "Integration with Google Drive, Slack & Mail",
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 bg-gray-50 border rounded-lg text-sm font-medium hover:shadow-md transition"
              >
                {item}
              </div>
            ))}
          </div>
          <Button className="bg-[#F6B200] text-black font-semibold px-6 py-3 mt-6 rounded-md hover:bg-yellow-400 transition-all duration-300">
            Start Free Trial →
          </Button>

        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <Image
            src="/images/image8.png"
            alt="Startup Dashboard Preview"
            width={500}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* USE CASES */}
      <section className="relative py-20 px-6 md:px-20 text-gray-800 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

        {/* Optional texture overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/large.png')" }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Perfect for Every Type of Startup
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                text: "Manage sprints, releases, and QA cycles.",
                icon: "/images/icons/17.png", // Spreadsheet icon
              },
              {
                text: "Track client deliverables and deadlines.",
                icon: "/images/icons/18.png", // Calendar/Deadline icon
              },
              {
                text: "Collaborate on campaigns and analytics.",
                icon: "/images/icons/19.png", // Eye/Visibility icon
              },
              {
                text: "Streamline daily operations and staff tasks.",
                icon: "/images/icons/20.png", // Chat icon
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={item.icon}
                  alt="Problem Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-10 font-medium">
            These challenges slow down your growth — BexATM fixes that.
          </p>
        </div>
      </section>

      {/* AI ADVANTAGE */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-[#F6F8FF] to-[#EAF3FF] text-center overflow-hidden">
        {/* Decorative radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,178,0,0.12)_0%,transparent_70%)] pointer-events-none"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 relative z-10">
          Let AI Handle the Busy Work — While You Focus on Growth
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 relative z-10 max-w-6xl mx-auto">
          {[
            {
              icon: "/images/icons/22.png",
              text: "Auto task suggestions & next-step reminders",
            },
            {
              icon: "/images/icons/23.png",
              text: "Predictive project completion timeline",
            },
            {
              icon: "/images/icons/24.png",
              text: "Real-time progress summaries",
            },
            {
              icon: "/images/icons/25.png",
              text: "Team workload optimization insights",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-md border border-[#F6B200]/30 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#F6B200]/10 rounded-full group-hover:bg-[#F6B200]/20 transition">
                  <Image
                    src={item.icon}
                    alt="AI Feature Icon"
                    width={48}
                    height={48}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <p className="text-gray-700 font-medium text-base">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-500 mt-12 text-sm italic">
          Smarter automation, better efficiency, faster growth 🚀
        </p>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-gray-900">
          How Does BexATM Benefit Your Business?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { text: "30% Faster Task Delivery", icon: "⚡" },
            { text: "45% More Project Visibility", icon: "📊" },
            { text: "2x Team Efficiency", icon: "👥" },
            { text: "Paperless Operations & Smart Reporting", icon: "📄" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 border border-[#F6B200]/40 rounded-2xl bg-white transition-all duration-300 hover:shadow-[0_0_25px_#F6B200]/50 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{item.text}</h3>
            </div>
          ))}
        </div>

        <p className="text-gray-600 mt-10 text-lg">
          More control, fewer errors, faster execution.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 px-6 md:px-20 bg-gradient-to-b from-white to-gray-50 text-center overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,178,0,0.12)_0%,transparent_80%)]"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-14 relative z-10 text-gray-900">
          Loved by Founders & Teams Alike
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10">
          {[
            {
              name: "Karthik V",
              title: "Co-founder @CodeCrate Labs",
              quote:
                "BexATM turned our chaos into clarity. Our delivery rate improved 40% in just two months.",
            },
            {
              name: "Ananya D",
              title: "Founder @BrandCove",
              quote:
                "For a 5-member team like ours, BexATM acts like an extra project manager.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-[#F6B200] text-5xl leading-none mb-4">“</div>
              <p className="text-gray-700 italic mb-6">{t.quote}</p>
              <h3 className="font-semibold text-gray-900">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.title}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-500 mt-12 text-sm italic relative z-10">
          Empowering teams across industries with smarter project management.
        </p>
      </section>

      {/* DEMO + FAQ */}
      <section
        ref={formRef}
        className="relative py-20 px-6 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/demo-bg.png')" }}
      >
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
                <div key={i} className="bg-white border border-[#F6B200] rounded-md shadow-sm">
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

          {/* ✅ Book a Demo Form (full functional) */}
          <div className="bg-white shadow-lg rounded-md p-8 w-full">
            <h2 className="text-xl md:text-2xl font-bold text-black-800">
              Ready to Build Smarter with BexATM?
            </h2>
            <p className="text-black-600 mb-6 text-sm">Book Your Free Demo Now</p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#F6B200] rounded-md p-2 text-sm focus:ring-2 focus:ring-[#F6B200] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Job Title<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#F6B200] rounded-md p-2 text-sm focus:ring-2 focus:ring-[#F6B200] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Company Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#F6B200] rounded-md p-2 text-sm focus:ring-2 focus:ring-[#F6B200] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Work Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#F6B200] rounded-md p-2 text-sm focus:ring-2 focus:ring-[#F6B200] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="With country code"
                  className="w-full border border-[#F6B200] rounded-md p-2 text-sm focus:ring-2 focus:ring-[#F6B200] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F6B200] hover:bg-yellow-400 text-black font-semibold py-2 rounded-md mt-4 transition-all duration-300"
              >
                {loading ? "Sending..." : "Book a Demo"}
              </button>

              {message && (
                <p className="text-center text-sm mt-3 text-gray-700">{message}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-center py-12 border-t border-gray-800">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
          Start Managing Smarter with <span className="text-[#F6B200]">BexATM</span> — Powered by AI
        </h2>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join 500+ startups who’ve automated workflows and grown faster with BexATM.
        </p>

        <div className="flex justify-center gap-4">
          <Button className="bg-[#F6B200] text-black font-semibold hover:bg-yellow-400 px-6 py-3 rounded-md transition-all duration-300">
            Book a Demo
          </Button>
          <Button
            variant="outline"
            className="border border-[#F6B200] text-[#F6B200] hover:bg-[#F6B200] hover:text-black px-6 py-3 font-semibold rounded-md transition-all duration-300"
          >
            Contact Sales
          </Button>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} BexATM. All rights reserved.
        </p>
      </footer>



    </main>
  );
}
