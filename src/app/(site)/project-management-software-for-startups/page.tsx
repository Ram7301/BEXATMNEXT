"use client";

import { motion, useMotionValue } from "framer-motion";
import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Script from "next/script";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";



export default function ProjectManagementForStartups() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    organisationname: "",
    email: "",
    phone: "",
    preferredDateTime: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, jobTitle, email, phone, organisationname, preferredDateTime } = formData;

    // ✅ Basic validation
    if (!name || !email || !phone) {
      setMessage("❌ Please fill all required fields.");
      return;
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      setMessage("❌ Enter a valid 10-digit mobile number.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("❌ Invalid email address.");
      return;
    }
    // if (!executeRecaptcha) {
    //   console.log("Recaptcha not ready");
    //   return;
    // }

    if (!preferredDateTime) {
      setMessage("❌ Please select a preferred date and time.");
      return;
    }
    setLoading(true);
    setMessage("");
    const formatted = formData.preferredDateTime.replace("T", " ");


    try {
      const response = await fetch(
        "https://bexatm.com/api/TrailMailRequestInsertControllerV2.php",
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
            TrailType: "Startups",
            Description: jobTitle ? `Job Title: ${jobTitle}` : "",
            OrganisationName: organisationname,
            PreferredDateTime: formatted,
            JobTitle: "DB",
            ProspectStatus: "BD"
          })

        }
      );

      const result = await response.json();

      if (result.Status === "Y") {
        setMessage("✅  Demo request sent successfully! Please check your email for confirmation");



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

  // -------------------------------------------------------------------
  // ⭐ COUNTER ANIMATION + SCROLL TRIGGER
  // -------------------------------------------------------------------
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  // Counter logic
  const useCountOnView = (target: number, trigger: boolean) => {
    const motionVal = useMotionValue(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!trigger) {
        motionVal.set(0);
        setValue(0);
        return;
      }

      const controls = animate(motionVal, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setValue(Math.floor(latest));
        },
      });

      return controls.stop;
    }, [trigger, target]);

    return value;
  };

  // Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Animated counter values
  const count30 = useCountOnView(30, inView);
  const count45 = useCountOnView(45, inView);
  const count2 = useCountOnView(2, inView);

  // Scroll smoothly to form section
  const scrollToForm = () => {
    if (!formRef.current) return; // ✅ Prevents TypeScript error

    const headerHeight = 100; // adjust based on your header height

    const elementPosition = formRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDemoPopupOpen(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  // -------------------------------------------------------------------
  //  RETURN UI BELOW
  // -------------------------------------------------------------------


  return (
    <>
      <Head>
        <title>Project Management Software for Startups & Small Business| ATM</title>
        <meta
          name="description"
          content="Scale faster and collaborate smarter with BexATM’s AI-powered project management software for startups and small business teams."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "url": "https://bexatm.com//project-management-software-for-startups",
              "name": "Startups",
              "description":
                "Contact ATM for support, questions or free trial.",
            }),
          }}
        />
        <link rel="canonical" href="https://bexatm.com//project-management-software-for-startups" />
      </Head>

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-DVX38ML9PE"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-DVX38ML9PE');
              `}
      </Script>

      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '826986713605921');
                fbq('track', 'PageView');
              `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=826986713605921&ev=PageView&noscript=1"
        />
      </noscript>

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
                      name="organisationname"
                      value={formData.organisationname}
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
                    name="preferredDateTime"
                    value={formData.preferredDateTime}
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

        <section
          className="
    relative w-full
    min-h-[650px] sm:min-h-[750px] md:min-h-[850px] lg:min-h-[900px]
    bg-cover bg-center
    flex items-center
    text-white
    overflow-hidden
  "
          style={{ backgroundImage: "url('/images/startups/mainbanner.webp')" }}
        >
          {/* MOBILE OVERLAY (ONLY FOR READABILITY) */}
          <div className="absolute inset-0 bg-black/40 md:hidden"></div>

          {/* CONTENT */}
          <div
            className="
      relative z-10
      w-full
      max-w-7xl
      mx-auto
      px-4 sm:px-6 lg:px-12
      mt-0 sm:-mt-8 lg:-mt-20
      ml-0 sm:-ml-2 lg:ml-24
    "
          >
            <div className="max-w-xl space-y-4 sm:space-y-5 lg:space-y-6">

              {/* AI POWERED */}
              <p className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-wide">
                AI Powered
              </p>

              {/* MAIN HEADING */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Project Management Software for Startups & Small Business
              </h1>

              {/* HIGHLIGHT TEXT */}
              <p className="text-[#3FC4C8] text-sm sm:text-lg font-medium">
                Run Your Startup Smarter — Manage Projects, Teams & Tasks 3X Faster with AI
              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                ATM is the all-in-one Project Management Software for Startups & Small
                Businesses, helping teams plan projects, track tasks, automate workflows,
                collaborate better, and execute faster — without spreadsheets and chaos.
              </p>

              {/* CTA */}
              <Button
                onClick={scrollToForm}
                className="
          bg-[#F6B200]
          text-black
          font-bold
          px-7 py-3
          rounded-md
          shadow-md
          hover:brightness-105
          transition
          w-full sm:w-auto
        "
              >
                Book Free Demo
              </Button>

            </div>
          </div>
        </section>

        <section
          className="
    relative w-full
    min-h-auto md:h-[800px] lg:h-[900px]
    bg-cover
    bg-[center_80%] md:bg-center
    flex flex-col items-center justify-start
    pt-16 md:pt-24
    pb-20 md:pb-0
    overflow-hidden
  "
          style={{ backgroundImage: "url('/images/startups/problembanner.webp')" }}
        >
          <div className="relative max-w-7xl mx-auto md:ml-20 md:mr-auto px-4 md:px-6">

            {/* TITLE + SUBTITLE */}
            <h2
              className="
        text-[36px] sm:text-[44px] md:text-[62px]
        font-extrabold text-[#1f4f8b] mb-3
      "
            >
              Growing a Startup Isn’t Easy
            </h2>

            <p
              className="
        text-[16px] sm:text-[18px] md:text-[22px]
        text-gray-600 mb-10
      "
            >
              These challenges slow down your growth — ATM fixes that.
            </p>

            {/* GRID + CROSS LINES */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2">

              {/* Vertical center line */}
              <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#D0D0D0]" />

              {/* Horizontal center line */}
              <div className="hidden sm:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-[#D0D0D0]" />

              {/* Left Top */}
              <div className="flex flex-col gap-3 p-6 sm:p-10 sm:pr-14">
                <Image
                  src="/images/startups/icons/manual.png"
                  alt=""
                  width={80}
                  height={80}
                  className="w-14 h-14 sm:w-20 sm:h-20"
                />
                <h3 className="text-[#0A1A2F] font-bold text-xl">
                  Manual Task Allocation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-full sm:max-w-[280px]">
                  Manual task allocation causes
                  confusion and uneven workload,
                  leading to delays and reduced
                  team productivity
                </p>
              </div>

              {/* Right Top */}
              <div className="flex flex-col gap-3 p-6 sm:p-10 sm:pl-14">
                <Image
                  src="/images/startups/icons/visibility.png"
                  alt=""
                  width={80}
                  height={80}
                  className="w-14 h-14 sm:w-20 sm:h-20"
                />
                <h3 className="text-[#0A1A2F] font-bold text-xl">
                  No Project Visibility
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-full sm:max-w-[280px]">
                  Manual task allocation causes
                  confusion and uneven workload,
                  leading to delays and reduced
                  team productivity
                </p>
              </div>

              {/* Left Bottom */}
              <div className="flex flex-col gap-3 p-6 sm:p-10 sm:pr-14">
                <Image
                  src="/images/startups/icons/deadlines.png"
                  alt=""
                  width={80}
                  height={80}
                  className="w-14 h-14 sm:w-20 sm:h-20"
                />
                <h3 className="text-[#0A1A2F] font-bold text-xl">
                  Team Deadlines Slip
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-full sm:max-w-[280px]">
                  Manual task allocation causes
                  confusion and uneven workload,
                  leading to delays and reduced
                  team productivity
                </p>
              </div>

              {/* Right Bottom */}
              <div className="flex flex-col gap-3 p-6 sm:p-10 sm:pl-14">
                <Image
                  src="/images/startups/icons/scattered.png"
                  alt=""
                  width={80}
                  height={80}
                  className="w-14 h-14 sm:w-20 sm:h-20"
                />
                <h3 className="text-[#0A1A2F] font-bold text-xl">
                  Scattered Communication
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-full sm:max-w-[280px]">
                  Manual task allocation causes
                  confusion and uneven workload,
                  leading to delays and reduced
                  team productivity
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden">
          {/* ===== FIXED BACKGROUND LAYER ===== */}
          <div
            className="
      absolute inset-0
      bg-cover bg-center
      md:bg-center
      will-change-transform
    "
            style={{ backgroundImage: "url('/images/startups/meetbanner.webp')" }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 lg:bg-transparent"></div>

          {/* ===== CONTENT WRAPPER (CONTROLS HEIGHT) ===== */}
          <div
            className="
      relative z-10
      max-w-7xl mx-auto
      grid grid-cols-1 lg:grid-cols-2
      px-5 sm:px-6
      pt-14 sm:pt-20 md:pt-24
      pb-20
    "
          >
            {/* LEFT EMPTY COLUMN */}
            <div className="hidden lg:block"></div>

            {/* RIGHT CONTENT */}
            <div
              className="
        flex flex-col
        text-white lg:text-black
        lg:pl-20
        w-full
      "
            >
              <h2 className="text-3xl sm:text-4xl md:text-8xl font-bold text-[#1f4f8b] mb-3">
                Meet ATM
              </h2>

              <p className="text-[15px] sm:text-[18px] font-medium mb-8 sm:mb-10 max-w-xl">
                The Best Project Management Software for Startups & Small Business
              </p>

              {/* FIXED FIRST ITEM */}
              <div className="mb-6 max-w-xl">
                <h3 className="text-[15px] sm:text-[16px] font-semibold mb-2">
                  AI-Powered Task & Project Automation
                </h3>

                <p className="text-[14px] sm:text-[15px] text-gray-200 lg:text-gray-600 leading-relaxed">
                  BexATM’s AI engine automates your workflow by suggesting the right tasks,
                  predicting possible delays, guiding your team with next-step recommendations,
                  and generating instant project summaries to keep everyone aligned effortlessly.
                </p>
              </div>

              {/* ACCORDION */}
              <div className="w-full max-w-xl border-t border-gray-300">
                {[
                  {
                    title: "AI-Powered Task & Project Automation",
                    desc:
                      "BexATM’s AI engine automates your workflow by suggesting the right tasks, predicting possible delays, guiding your team with next-step recommendations, and generating instant project summaries to keep everyone aligned effortlessly."
                  },
                  {
                    title: "Smart Deadline Alerts & Reminders",
                    desc:
                      "Stay on track with intelligent reminders that notify your team before deadlines, highlight urgent tasks, and provide real-time status updates so nothing slips through the cracks."
                  },
                  {
                    title: "Team Collaboration Hub",
                    desc:
                      "Bring your team together in one organized workspace where you can assign tasks, share files, discuss updates, and eliminate scattered WhatsApp messages and email threads"
                  },
                  {
                    title: "Performance & Productivity Tracking",
                    desc:
                      "Get a clear overview of your team’s workload, identify bottlenecks early, and gain actionable insights into productivity to ensure smooth and efficient project execution."
                  },
                  {
                    title: "Project Documentation & File Management",
                    desc:
                      "Keep every document organized with centralized storage, seamless Google Drive integration, and built-in version history so your entire team always works from the latest file."
                  },
                  {
                    title: "AI Powered Reports",
                    desc:
                      "Save hours every week with auto-generated project reports that summarize progress, highlight pending tasks, and can be shared instantly with management or clients with a single click."
                  }
                ].map((item, i) => {
                  const isOpen = openIndex === i;

                  return (
                    <div key={i} className="border-b border-gray-300 py-4">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="w-full flex items-center justify-between text-left gap-4"
                      >
                        <span className="text-[15px] sm:text-[16px] font-semibold">
                          {item.title}
                        </span>

                        <span className="text-xl font-medium leading-none shrink-0">
                          {isOpen ? "×" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <p className="mt-4 text-[14px] sm:text-[15px] text-gray-200 lg:text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          className="
    relative w-full
    flex flex-col items-center justify-start
    py-16 md:py-24
    overflow-hidden
  "
        >
          {/* Section Title */}
          <div className="max-w-7xl mx-auto text-center mb-12 px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1A2F]">
              Core Modules of ATM
            </h2>
            <p className="text-gray-600 mt-3 font-medium">
              ATM End-to-End Feature Suite
            </p>
          </div>

          {/* MODULE GRID */}
          <div
            className="
      max-w-7xl mx-auto
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5
      gap-6
      px-4
    "
          >
            {/* CARD 1 */}
            <div className="group bg-white rounded-xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#167F8C]/20 hover:border-[#167F8C] md:hover:scale-[1.02]">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3 transition-opacity duration-300 group-hover:opacity-95">
                <Image src="/images/startups/icons/agiletask.png" width={45} height={45} alt="" className="transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-[15px]">Agile Task & Sprint Management</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Empower your team with agile workflows, including backlogs, sprints, and task boards that help startups plan efficiently and deliver projects faster.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group bg-white rounded-xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#167F8C]/20 hover:border-[#167F8C] md:hover:scale-[1.02]">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3 transition-opacity duration-300 group-hover:opacity-95">
                <Image src="/images/startups/icons/remoteteam.png" width={45} height={45} alt="" className="transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-[15px]">Remote Team Attendance</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Manage remote & hybrid teams with mobile attendance, geolocation verification, and timesheet tracking that keeps productivity transparent.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group bg-white rounded-xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#167F8C]/20 hover:border-[#167F8C] md:hover:scale-[1.02]">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3 transition-opacity duration-300 group-hover:opacity-95">
                <Image src="/images/startups/icons/clients.png" width={45} height={45} alt="" className="transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-[15px]">Projects & Client Deliverables</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Organize client projects with milestones, tasks, and timelines ensuring smooth execution and on-time delivery.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="group bg-white rounded-xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#167F8C]/20 hover:border-[#167F8C] md:hover:scale-[1.02]">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3 transition-opacity duration-300 group-hover:opacity-95">
                <Image src="/images/startups/icons/timesheet.png" width={45} height={45} alt="" className="transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-[15px]">Timesheet-Based Billing</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Enable accurate billing by capturing employee effort across tasks & projects, making invoicing transparent for clients & agencies.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="group bg-white rounded-xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#167F8C]/20 hover:border-[#167F8C] md:hover:scale-[1.02]">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3 transition-opacity duration-300 group-hover:opacity-95">
                <Image src="/images/startups/icons/selfservice.png" width={45} height={45} alt="" className="transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-[15px]">Employee Self-Service</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Allow team members to request leave, apply for on-duty, correct attendance, and submit expenses through a self-service interface.
              </p>
            </div>

            {/* CARD 6 */}
            <div className="group bg-white rounded-xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#167F8C]/20 hover:border-[#167F8C] md:hover:scale-[1.02]">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3 transition-opacity duration-300 group-hover:opacity-95">
                <Image src="/images/startups/icons/resource.png" width={45} height={45} alt="" className="transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-[15px]">
                  Resource Allocation<br />for Small Teams
                </h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Allocate tasks based on skills & workload to ensure balanced resource use and avoid team burnout.
              </p>
            </div>

            {/* CARD 7 */}
            <div className="group bg-white rounded-xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#167F8C]/20 hover:border-[#167F8C] md:hover:scale-[1.02]">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3 transition-opacity duration-300 group-hover:opacity-95">
                <Image src="/images/startups/icons/managerdashboards.png" width={45} height={45} alt="" className="transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-[15px]">Founder & Manager Dashboards</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Get real-time insights into productivity, project progress, attendance, and bottlenecks at a glance.
              </p>
            </div>

            {/* CARD 8 */}
            <div className="group bg-white rounded-xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#167F8C]/20 hover:border-[#167F8C] md:hover:scale-[1.02]">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3 transition-opacity duration-300 group-hover:opacity-95">
                <Image src="/images/startups/icons/escalationmanagement.png" width={45} height={45} alt="" className="transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-[15px]">Escalation Management</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Reduce delays by flagging stuck tasks, missed deadlines, and dependencies needing managerial attention.
              </p>
            </div>

            {/* CARD 9 */}
            <div className="group bg-white rounded-xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#167F8C]/20 hover:border-[#167F8C] md:hover:scale-[1.02]">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3 transition-opacity duration-300 group-hover:opacity-95">
                <Image src="/images/startups/icons/hrpayroll.png" width={45} height={45} alt="" className="transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-[15px]">HR & Payroll Alignment</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Sync employee data, attendance, leave & salary processing using unified workflows.
              </p>
            </div>

            {/* CARD 10 */}
            <div className="group bg-white rounded-xl border transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#167F8C]/20 hover:border-[#167F8C] md:hover:scale-[1.02]">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3 transition-opacity duration-300 group-hover:opacity-95">
                <Image src="/images/startups/icons/integrations.png" width={45} height={45} alt="" className="transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-semibold text-[15px]">Integrations for Modern Startups</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Sync calendars, export data, and connect tools with API-driven integrations built for modern teams.
              </p>
            </div>
          </div>
        </section>

        <section
          className="py-20 px-6 lg:px-12 bg-cover bg-center bg-no-repeat text-white"
          style={{ backgroundImage: "url('/images/startups/whobanner.webp')" }}
        >
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Who Is ATM For?</h2>
            <p className="text-gray-200 mt-3 text-lg">
              Perfect Project Management Software for Startups, Agencies & SMEs
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

            <div className="relative flex items-center w-full">
              {/* White pill box (does NOT move) */}
              <div className="bg-white rounded-full py-4 pl-32 pr-6 shadow-md w-full z-10">
                <h3 className="font-bold text-lg text-[#0A1A2F]">Tech Startups</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Manage sprints, releases, product tasks & bug tracking.
                </p>
              </div>

              {/* Big Circle Image - moves OVER the box */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden z-20">
                <img
                  src="/images/startups/icons/51.png"
                  alt="Tech Startups"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Marketing Teams */}
            <div className="relative flex items-center w-full">

              {/* White pill box (does NOT move) */}
              <div className="bg-white rounded-full py-4 pl-32 pr-6 shadow-md w-full z-10">
                <h3 className="font-bold text-lg text-[#0A1A2F]">Marketing Teams</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Plan campaigns, content calendars & analytics tasks.
                </p>
              </div>

              {/* Big Circle Image - moves OVER the box */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden z-20">
                <img
                  src="/images/startups/icons/52.png"
                  alt="Marketing Teams"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            <div className="relative flex items-center w-full">

              {/* White pill box (does NOT move) */}
              <div className="bg-white rounded-full py-4 pl-32 pr-6 shadow-md w-full z-10">
                <h3 className="font-bold text-lg text-[#0A1A2F]">Service Agencies</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Track client work, delivery deadlines & revisions.
                </p>
              </div>

              {/* Big Circle Image - moves OVER the box */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden z-20">
                <img
                  src="/images/startups/icons/53.png"
                  alt="Service Agencies"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            <div className="relative flex items-center w-full">

              {/* White pill box (does NOT move) */}
              <div className="bg-white rounded-full py-4 pl-32 pr-6 shadow-md w-full z-10">
                <h3 className="font-bold text-lg text-[#0A1A2F]">Small Businesses</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Assign staff tasks, monitor daily operations, and track output.
                </p>
              </div>

              {/* Big Circle Image - moves OVER the box */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden z-20">
                <img
                  src="/images/startups/icons/53.png"
                  alt="Service Agencies"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>





          </div>
        </section>

        <section
          className="
    relative w-full
    min-h-[700px] md:h-[800px] lg:h-[900px]
    bg-cover bg-center
    flex items-start md:items-center
    overflow-hidden
  "
          style={{
            backgroundImage: "url('/images/startups/whybexatm.webp')",
          }}
        >
          {/* Mobile readability overlay */}
          <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>

          {/* WHY BEXATM – Top Right */}
          <h2
            className="
      absolute top-5 right-4
      md:top-10 md:right-20
      text-[26px] md:text-[48px]
      font-extrabold
      text-[#0A2A45]
      z-10
      whitespace-nowrap
    "
          >
            Why BexATM?
          </h2>

          {/* Right Content Block */}
          <div
            className="
      relative z-10
      w-full md:w-1/2
      ml-0 md:ml-auto
      px-4 sm:px-6 md:px-20
      pt-28 md:pt-0
    "
          >
            {/* AI Advantages */}
            <h3
              className="
        text-[26px] sm:text-[32px] md:text-[46px]
        font-extrabold
        text-[#0A2A45]
        mb-6
      "
            >
              AI Advantages
            </h3>

            {/* Bullet List */}
            <ul className="space-y-4">
              {[
                "Predictive project timelines",
                "Next-step suggestions",
                "Load balancing for teams",
                "Smart summaries",
                "Automated reminders",
                "Real-time progress intelligence",
              ].map((item, index) => (
                <li
                  key={index}
                  className="
            flex items-start
            text-[17px] sm:text-[18px] md:text-[22px]
            text-[#0A2A45]
            font-medium
            leading-snug
          "
                >
                  <span
                    className="
              text-[#0A2A45]
              font-bold
              mr-3
              text-[20px] md:text-[22px]
              leading-none
            "
                  >
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Center Line */}
          <p
            className="
      absolute bottom-6 md:bottom-8
      left-1/2 -translate-x-1/2
      w-[94%] md:w-[95%]
      text-center
      text-[18px] sm:text-[22px] md:text-[32px]
      font-extrabold
      text-[#0A2A45]
      z-10
      leading-tight
    "
          >
            ATM connecting tasks → teams → deadlines → reports
          </p>
        </section>

        <section
          className="
    relative w-full
    bg-[#F3F6F8]
    flex flex-col items-center
    pt-16 md:pt-24
    pb-20
    overflow-hidden
  "
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

            {/* Headings */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-[#0A2A45]">
              Business Benefits
            </h2>

            <p className="text-xl lg:text-2xl font-semibold text-center text-gray-700 mt-2 mb-14">
              Get Results That Matter
            </p>

            {/* Circles */}
            <div
              ref={sectionRef}
              className="
        flex justify-center
      "
            >
              <div
                className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
        "
              >
                {/* CIRCLE 1 */}
                <div
                  className="
            w-48 h-48
            rounded-full
            flex flex-col
            items-center justify-center
            text-white text-center
            shadow-xl
            mx-auto
          "
                  style={{
                    background:
                      "radial-gradient(circle at 70% 30%, #0F2F40, #0E4A55)",
                  }}
                >
                  <h3 className="text-3xl font-extrabold">{count30}%</h3>
                  <p className="text-sm font-semibold mt-1">
                    Faster Project<br />Delivery
                  </p>
                </div>

                {/* CIRCLE 2 */}
                <div
                  className="
            w-48 h-48
            rounded-full
            flex flex-col
            items-center justify-center
            text-white text-center
            shadow-xl
            mx-auto
          "
                  style={{
                    background:
                      "radial-gradient(circle at 70% 30%, #0F2F40, #0E4A55)",
                  }}
                >
                  <h3 className="text-3xl font-extrabold">{count45}%</h3>
                  <p className="text-sm font-semibold mt-1">
                    More Visibility<br />Across Teams
                  </p>
                </div>

                {/* CIRCLE 3 */}
                <div
                  className="
            w-48 h-48
            rounded-full
            flex flex-col
            items-center justify-center
            text-white text-center
            shadow-xl
            mx-auto
          "
                  style={{
                    background:
                      "radial-gradient(circle at 70% 30%, #0F2F40, #0E4A55)",
                  }}
                >
                  <h3 className="text-3xl font-extrabold">{count2}X</h3>
                  <p className="text-sm font-semibold mt-1">
                    Productivity with<br />AI Automation
                  </p>
                </div>

                {/* CIRCLE 4 */}
                <div
                  className="
            w-48 h-48
            rounded-full
            flex flex-col
            items-center justify-center
            text-white text-center
            shadow-xl
            mx-auto
          "
                  style={{
                    background:
                      "radial-gradient(circle at 70% 30%, #0F2F40, #0E4A55)",
                  }}
                >
                  <h3 className="text-3xl font-extrabold">0%</h3>
                  <p className="text-sm font-semibold mt-1">
                    Manual Follow-ups<br />& Paperwork
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="
    relative w-full
    flex flex-col items-center
    pt-16 md:pt-24
    pb-20
    overflow-hidden
  "
        >
          {/* Section Heading */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              What Our Users Say
            </h3>
          </div>

          {/* Cards Grid */}
          <div
            className="
      grid grid-cols-1
      md:grid-cols-3
      gap-8 md:gap-10
      max-w-6xl
      mx-auto
      px-4 sm:px-6
    "
          >
            {/* Card 1 */}
            <div
              className="
        bg-white
        p-8 md:p-10
        rounded-xl
        border border-gray-200
        shadow-md
        relative
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-xl
      "
            >
              <span className="text-[#F6B200] text-4xl font-bold">“</span>

              <h2 className="mt-2 text-lg font-semibold text-gray-900">
                “ATM brought complete structure to our sprints.”
              </h2>

              <p className="mt-4 text-gray-700 italic leading-relaxed">
                Before using ATM, our product team struggled with scattered tasks and delays.
                The AI suggestions and predictive timelines helped us deliver faster and stay organized.
                Our sprint completion rate improved by 90% within weeks.
              </p>

              <div className="mt-6">
                <p className="font-bold text-gray-900">
                  — Naveen S, Co-Founder, XorbTech
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="
        bg-white
        p-8 md:p-10
        rounded-xl
        border border-gray-200
        shadow-md
        relative
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-xl
      "
            >
              <span className="text-[#F6B200] text-4xl font-bold">“</span>

              <h2 className="mt-2 text-lg font-semibold text-gray-900">
                “Perfect for small teams managing multiple clients.”
              </h2>

              <p className="mt-4 text-gray-700 italic leading-relaxed">
                ATM reduced our WhatsApp clutter, improved deadlines, and made client reporting effortless.
                We now handle more projects with the same team and deliver work on time consistently.
              </p>

              <div className="mt-6">
                <p className="font-bold text-gray-900">
                  — Ananya D, Founder, BrandCove Media
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="
        bg-white
        p-8 md:p-10
        rounded-xl
        border border-gray-200
        shadow-md
        relative
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-xl
      "
            >
              <span className="text-[#F6B200] text-4xl font-bold">“</span>

              <h2 className="mt-2 text-lg font-semibold text-gray-900">
                “We finally have full visibility of our daily operations.”
              </h2>

              <p className="mt-4 text-gray-700 italic leading-relaxed">
                Task tracking, staff coordination, and reporting became seamless with ATM.
                The AI summaries save us hours every week, and team accountability has noticeably improved.
              </p>

              <div className="mt-6">
                <p className="font-bold text-gray-900">
                  — Ramesh K, MD, SwiftLogistics
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={formRef}
          className="
    relative w-full
    bg-cover
    bg-[center_80%] md:bg-center
    flex flex-col items-center
    pt-16 md:pt-24
    pb-20
    overflow-hidden
  "
          style={{ backgroundImage: "url('/images/demo-bg.png')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/75"></div>

          {/* Content Wrapper */}
          <div
            className="
      relative
      max-w-6xl
      mx-auto
      grid grid-cols-1
      md:grid-cols-2
      gap-10 md:gap-12
      px-4 sm:px-6
    "
          >
            {/* FAQs */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black-800">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {[
                  {
                    q: "Is ATM suitable for early-stage startups with small teams?",
                    a: "Yes. ATM is designed specifically for small and fast-moving teams. Whether you have 3 people or 30, the platform helps you organize tasks, track progress, and manage projects without adding extra workload. As your startup grows, ATM scales with you effortlessly."
                  },
                  {
                    q: "Can ATM help us reduce dependency on WhatsApp, Excel, and scattered tools?",
                    a: "Absolutely. Startups often juggle multiple tools, which leads to confusion and lost information. ATM replaces Excel sheets, WhatsApp updates, and email follow-ups by bringing tasks, deadlines, files, and communication into one central dashboard."
                  },
                  {
                    q: "How does the AI in ATM help small businesses work more efficiently?",
                    a: "ATM AI analyzes team activity, tasks, and timelines to suggest next steps, predict delays, optimize workloads, and generate instant summaries. This helps small businesses save time, prevent bottlenecks, and maintain consistent productivity without constant supervision."
                  },
                  {
                    q: "Does ATM support remote or hybrid teams?",
                    a: "Yes. ATM is built for distributed teams. Members can update tasks, share files, and collaborate from anywhere. Real-time visibility ensures founders and managers always know what’s happening — even if the team works from different locations."
                  },
                  {
                    q: "Will ATM integrate with the tools my startup already uses?",
                    a: "Yes. ATM integrates with Google Drive, Slack, Gmail, and other essential tools used by startups and SMEs. This ensures your team can continue using their favorite apps while keeping all project data synced and organized."
                  },
                  {
                    q: "Is ATM affordable for small businesses and bootstrapped startups?",
                    a: "Definitely. ATM offers startup-friendly pricing with no hidden costs. You only pay for your team size, and you can start with a free demo or trial before committing. It’s designed to give maximum value without stretching your budget."
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#F6B200] rounded-md shadow-sm"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="
                w-full
                flex justify-between items-start
                text-left
                p-4
                font-medium
                text-black-800
                gap-4
              "
                    >
                      <span className="leading-snug">{item.q}</span>
                      <span className="text-[#F6B200] text-2xl font-bold shrink-0">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    {openIndex === index && (
                      <p className="px-4 pb-4 text-black-600 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div
              ref={formRef}
              className="
        bg-white
        shadow-lg
        rounded-md
        p-6 sm:p-8
        w-full
      "
            >
              <h2 className="text-xl md:text-2xl font-bold text-black-800">
                Ready to Build Smarter with ATM?
              </h2>
              <p className="text-black-600 mb-6 text-sm">
                Book Your Free Demo Now
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {[
                  { label: "Name", name: "name", type: "text" },
                  { label: "Job title", name: "jobTitle", type: "text" },
                  { label: "Company Name", name: "companyName", type: "text" },
                  { label: "Work Email", name: "email", type: "email" },
                  { label: "Phone Number", name: "phone", type: "tel" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-semibold mb-1">
                      {field.label}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="
                w-full
                border border-[#F6B200]
                rounded-md
                p-2
                text-sm
                focus:ring-2
                focus:ring-[#F6B200]
                focus:outline-none
              "
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Preferred Date & Time<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="preferredDateTime"
                    value={formData.preferredDateTime}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredDateTime: e.target.value })
                    }
                    required
                    className="
              w-full
              border border-[#F6B200]
              rounded-md
              p-2
              text-sm
              focus:ring-2
              focus:ring-[#F6B200]
              focus:outline-none
            "
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="
            w-full
            bg-[#F6B200]
            hover:bg-yellow-400
            text-black
            font-semibold
            py-2
            rounded-md
            mt-4
            transition-all duration-300
          "
                >
                  {loading ? "Sending..." : "Book a Demo"}
                </button>

                {message && (
                  <p className="text-center text-sm mt-3 text-gray-700">
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        <footer className="bg-black text-white">

          {/* MAIN FOOTER */}
          <div
            className="
      max-w-[1440px]
      mx-auto
      px-4 sm:px-6 md:px-8
      pt-8 sm:pt-10
      pb-6 sm:pb-8
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]
      gap-6 sm:gap-8
    "
          >
            {/* LOGO + ABOUT */}
            <div>
              <Image
                src="/images/header/bexatm2.png"
                alt="ATM"
                width={140}
                height={55}
                className="mb-3"
              />

              <p className="text-[13px] leading-[21px] text-[#C7C7C7] max-w-[360px]">
                BexATM is an all-in-one platform for project management, team productivity,
                and workforce tracking, offering powerful solutions for startups,
                construction teams, and resident associations communities. With integrated
                tools for tasks, attendance, HR, Agile Project Management, and AI-powered
                workflows, BexATM helps organizations operate smarter and deliver results
                faster.
              </p>

              <h4 className="mt-4 mb-2 font-semibold text-sm">Follow Us</h4>
              <div className="flex gap-3">
                <FaLinkedinIn size={20} className="text-[#0A66C2]" />
                <FaInstagram size={20} className="text-[#E1306C]" />
                <FaYoutube size={20} className="text-[#FF0000]" />
              </div>
            </div>

            {/* OUR PRODUCTS */}
            <div>
              <h3 className="font-semibold text-sm">Our Products</h3>
              <div className="w-9 h-[2px] bg-[#1FB5AE] mt-2 mb-2" />
              <ul className="text-[13px] text-[#C7C7C7] space-y-1.5 list-disc ml-4">
                <li><Link href="/project-management-software-for-startups">AI Powered Project Management Software for Startups & SME’s</Link></li>
                <li><Link href="/construction-project-management-software">Construction Project Management Software</Link></li>
                <li><Link href="/apartment-society-management-software">Apartment Society Management Software</Link></li>
              </ul>
            </div>

            {/* KEY FEATURES */}
            <div>
              <h3 className="font-semibold text-sm">Key Features</h3>
              <div className="w-9 h-[2px] bg-[#1FB5AE] mt-2 mb-2" />
              <ul className="text-[13px] text-[#C7C7C7] space-y-1.5 list-disc ml-4">
                <li><Link href="/features/agile-project-management">Agile Project Management</Link></li>
                <li><Link href="/features/task-workflow">Task & Workflow</Link></li>
                <li><Link href="/features/hrm">Back Office (HRM)</Link></li>
                <li><Link href="/features/time-attendance">Time & Attendance</Link></li>
                <li><Link href="/features/geo-attendance">Geo Attendance</Link></li>
                <li><Link href="/features/employee-self-service">Employee Self Service</Link></li>
                <li><Link href="/features/manager-desk">Manager Desk</Link></li>
                <li><Link href="/features/assessment-system">Assessment System</Link></li>
                <li><Link href="/features/cost-budget">Cost & Budget</Link></li>
                <li><Link href="/features/ai-insights">AI Insight & Dashboards</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold text-sm">Quick Links</h3>
              <div className="w-9 h-[2px] bg-[#1FB5AE] mt-2 mb-2" />
              <ul className="text-[13px] text-[#C7C7C7] space-y-1.5 list-disc ml-4">
                <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/support">Customer Support</Link></li>
                <li><Link href="/signup">Get Start Free Plan</Link></li>
                <li><Link href="/blog">Blog Post</Link></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-semibold text-sm">Contact us</h3>
              <div className="w-9 h-[2px] bg-[#1FB5AE] mt-2 mb-2" />

              <p className="text-[13px] leading-[21px] text-[#C7C7C7] mb-3">
                # 25/31, Lakshmi Nagar II Main Road,<br />
                Porur, Chennai,<br />
                Tamil Nadu - 600116
              </p>

              <p className="text-[13px] font-semibold text-[#F6A800] mb-1">
                Email: contact@bexatm.com
              </p>
              <p className="text-[13px] font-semibold text-[#F6A800] mb-3">
                Phone: (+91) 94444 08804
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-[#F6A800] text-black w-[140px] h-[38px] rounded-full font-semibold text-xs flex items-center justify-center">
                  Book a Demo
                </button>

                <button className="border border-[#F6A800] text-[#F6A800] w-[260px] h-[38px] rounded-full font-semibold text-xs flex items-center justify-center whitespace-nowrap">
                  Chat with Our Expert: +91 94444 08804
                </button>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="bg-[#1FB5AE] h-8 flex items-center justify-center px-4">
            <span className="text-black text-[11px] font-semibold text-center">
              Copyright © 2025 Beyondex solutions Pvt Ltd.
            </span>
          </div>

        </footer>

      </main>
    </>
  );
}


