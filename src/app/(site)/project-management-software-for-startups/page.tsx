"use client";

import { motion, useMotionValue } from "framer-motion";
import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Script from "next/script";


export default function ProjectManagementForStartups() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    companyName: "",
    email: "",
    phone: "",
    preferredDateTime: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, jobTitle, email, phone, companyName, preferredDateTime } = formData;

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
        "https://bexatm.com/api/TrailMailRequestInsertControllerV1.php",
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
            CompanyName: companyName,
            PreferredDateTime: formatted
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
                "Contact BexATM for support, questions or free trial.",
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
                      name="companyName"
                      value={formData.companyName}
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
    relative
    bg-cover bg-center sm:bg-[center_top]
    bg-no-repeat
    text-white
    min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh]
    flex items-end
  "
          style={{ backgroundImage: "url('/images/startups/mainbanner.webp')" }}
        >
          {/* MOBILE OVERLAY (readability only) */}
          <div className="absolute inset-0 bg-black/40 sm:bg-transparent"></div>

          {/* Content wrapper */}
          <div
            className="
      relative z-10
      w-full
      max-w-7xl mx-auto
      px-4 sm:px-6 lg:px-12
      pb-10 sm:pb-16 lg:pb-24
    "
          >
            {/* LEFT CONTENT */}
            <div
              className="
        max-w-xl
        space-y-4 sm:space-y-5 lg:space-y-6

        /* MOBILE glass */
        bg-black/30 backdrop-blur-sm
        p-4 sm:p-6
        rounded-xl

        /* TABLET / DESKTOP reset */
        md:bg-transparent md:backdrop-blur-0
        md:p-0 md:rounded-none
      "
            >
              <h1 className="text-base sm:text-2xl lg:text-3xl font-bold leading-tight">
                AI Powered
              </h1>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Project Management Software for Startups & Small Business
              </h2>

              <p className="text-[#3FC4C8] text-sm sm:text-lg leading-relaxed">
                Run Your Startup Smarter — Manage Projects, Teams & Tasks 3X Faster with AI
              </p>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                ATM is the all-in-one Project Management Software for Startups & Small
                Businesses, helping teams plan projects, track tasks, automate workflows,
                collaborate better, and execute faster — without spreadsheets and chaos.
              </p>

              <Button
                onClick={scrollToForm}
                className="
          bg-[#F6B200]
          text-black
          font-bold
          px-6 py-3
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
          className="relative bg-cover bg-center bg-no-repeat py-28 px-8 lg:px-24"
          style={{ backgroundImage: "url('/images/startups/problembanner.webp')" }}
        >
          <div className="relative max-w-7xl mx-auto">

            {/* TITLE + SUBTITLE */}
            <h2 className="text-[42px] font-extrabold text-[#0A1A2F] mb-3">
              Growing a Startup Isn’t Easy
            </h2>

            <p className="text-gray-600 text-lg mb-16">
              These challenges slow down your growth — ATM fixes that.
            </p>

            {/* GRID + CROSS LINES */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-y-14 px-6 py-10">

              {/* Center Vertical Line */}
              <div className="hidden sm:block absolute inset-y-0 left-1/2 w-[1px] bg-[#CFCFCF]"></div>

              {/* Center Horizontal Line */}
              <div className="hidden sm:block absolute left-1/2 top-1/2 h-[1px] w-[600px] -translate-x-1/2 bg-[#CFCFCF]"></div>

              {/* Left Top */}
              <div className="flex flex-col gap-3 pr-10">
                <Image src="/images/startups/icons/manual.png" alt="" width={80} height={80} />
                <h3 className="text-[#0A1A2F] font-bold text-xl">Manual Task Allocation</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">
                  Manual task allocation causes confusion and uneven workload,
                  leading to delays and reduced productivity.
                </p>
              </div>

              {/* Right Top */}
              <div className="flex flex-col gap-3 pl-5">
                <Image src="/images/startups/icons/visibility.png" alt="" width={80} height={80} />
                <h3 className="text-[#0A1A2F] font-bold text-xl">No Project Visibility</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">
                  Lack of visibility keeps teams unaware of progress, creating misalignment.
                </p>
              </div>

              {/* Left Bottom */}
              <div className="flex flex-col gap-3 pr-10">
                <Image src="/images/startups/icons/deadlines.png" alt="" width={80} height={80} />
                <h3 className="text-[#0A1A2F] font-bold text-xl">Team Deadlines Slip</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">
                  Missed deadlines stack up when tracking and coordination rely on manual updates.
                </p>
              </div>

              {/* Right Bottom */}
              <div className="flex flex-col gap-3 pl-5">
                <Image src="/images/startups/icons/scattered.png" alt="" width={80} height={80} />
                <h3 className="text-[#0A1A2F] font-bold text-xl">Scattered Communication</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">
                  Conversations spread across tools lead to missed information.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section
          className="
    relative 
    bg-contain bg-top 
    sm:bg-cover sm:bg-center 
    bg-no-repeat 
    pt-10 pb-24 
    px-6 lg:px-20
  "
          style={{ backgroundImage: "url('/images/startups/meetbanner.webp')" }}
        >

          {/* Stronger mobile overlay only */}
          <div className="absolute inset-0 bg-black/40 lg:bg-transparent"></div>

          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-start">

            {/* LEFT (empty on desktop, hidden on mobile) */}
            <div className="hidden lg:block"></div>

            {/* RIGHT CONTENT */}
            <div className="text-left lg:pl-20 flex flex-col justify-start relative z-10 text-white lg:text-black">

              <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1A2F] mb-3">
                Meet ATM
              </h2>

              <h1 className="text-[17px] font-extrabold mb-4">
                The Best Project Management Software for Startups & Small Business
              </h1>

              <h1 className="text-[15px] font-extrabold mb-4">
                AI-Powered Task & Project Automation
              </h1>

              <p className="mb-10 text-[15px] leading-relaxed max-w-lg">
                ATM AI-powered project engine helps startups automate workflows,
                plan projects, track tasks, and collaborate efficiently without spreadsheets and chaos.
              </p>

              {/* Accordion List */}
              <div className="space-y-6">

                {[
                  {
                    title: "Smart Deadline Alerts & Reminders",
                    desc: "ATM AI engine automates your workflow by suggesting the right tasks..."
                  },
                  {
                    title: "Team Collaboration Hub",
                    desc: "Stay on track with intelligent reminders..."
                  },
                  {
                    title: "Performance & Productivity Tracking",
                    desc: "Bring your team together in one workspace..."
                  },
                  {
                    title: "Project Documentation & File Management",
                    desc: "Get a clear overview of workload and bottlenecks..."
                  },
                  {
                    title: "AI Powered Reports",
                    desc: "Keep every document organized with centralized storage..."
                  },
                  {
                    title: "AI Powered Reports",
                    desc: "Save hours every week with auto-generated project reports..."
                  }
                ].map((item, i) => (
                  <div key={i} className="mb-6">

                    {/* Header */}
                    <div
                      className="flex items-start gap-4 cursor-pointer"
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                      <span className="font-bold text-2xl leading-none select-none">
                        {openIndex === i ? "–" : "+"}
                      </span>

                      <p className="font-medium text-[15px]">
                        {item.title}
                      </p>
                    </div>

                    {/* Expanded Content */}
                    {openIndex === i && (
                      <p className="ml-10 mt-2 text-[14px] leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        <section className="bg-white py-20 px-6 lg:px-12">
          {/* Section Title */}
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1A2F]">
              Core Modules of ATM
            </h2>
            <p className="text-gray-600 mt-3 font-medium">
              ATM End-to-End Feature Suite
            </p>
          </div>

          {/* MODULE GRID */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

            {/* 1 — Agile Task & Sprint Management */}
            <div className="bg-white rounded-xl shadow border">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                <Image src="/images/startups/icons/agiletask.png" width={45} height={45} alt="" />
                <h3 className="font-semibold text-[15px]">Agile Task & Sprint Management</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Empower your team with agile workflows, including backlogs, sprints, and task boards that help startups plan efficiently and deliver projects faster.
              </p>
            </div>

            {/* 2 — Remote Team Attendance */}
            <div className="bg-white rounded-xl shadow border">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                <Image src="/images/startups/icons/remoteteam.png" width={45} height={45} alt="" />
                <h3 className="font-semibold text-[15px]">Remote Team Attendance</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Manage remote & hybrid teams with mobile attendance, geolocation verification, and timesheet tracking that keeps productivity transparent.
              </p>
            </div>

            {/* 3 — Projects & Client Deliverables */}
            <div className="bg-white rounded-xl shadow border">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                <Image src="/images/startups/icons/clients.png" width={45} height={45} alt="" />
                <h3 className="font-semibold text-[15px]">Projects & Client Deliverables</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Organize client projects with milestones, tasks, and timelines ensuring smooth execution and on-time delivery.
              </p>
            </div>

            {/* 4 — Timesheet-Based Billing */}
            <div className="bg-white rounded-xl shadow border">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                <Image src="/images/startups/icons/timesheet.png" width={45} height={45} alt="" />
                <h3 className="font-semibold text-[15px]">Timesheet-Based Billing</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Enable accurate billing by capturing employee effort across tasks & projects, making invoicing transparent for clients & agencies.
              </p>
            </div>

            {/* 5 — Employee Self-Service */}
            <div className="bg-white rounded-xl shadow border">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                <Image src="/images/startups/icons/selfservice.png" width={45} height={45} alt="" />
                <h3 className="font-semibold text-[15px]">Employee Self-Service</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Allow team members to request leave, apply for on-duty, correct attendance, and submit expenses through a self-service interface.
              </p>
            </div>

            {/* 6 — Resource Allocation for Small Teams */}
            <div className="bg-white rounded-xl shadow border">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                <Image src="/images/startups/icons/resource.png" width={45} height={45} alt="" />
                <h3 className="font-semibold text-[15px]">Resource Allocation<br />for Small Teams</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Allocate tasks based on skills & workload to ensure balanced resource use and avoid team burnout.
              </p>
            </div>

            {/* 7 — Founder & Manager Dashboards */}
            <div className="bg-white rounded-xl shadow border">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                <Image src="/images/startups/icons/managerdashboards.png" width={45} height={45} alt="" />
                <h3 className="font-semibold text-[15px]">Founder & Manager Dashboards</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Get real-time insights into productivity, project progress, attendance, and bottlenecks at a glance.
              </p>
            </div>

            {/* 8 — Escalation Management */}
            <div className="bg-white rounded-xl shadow border">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                <Image src="/images/startups/icons/escalationmanagement.png" width={45} height={45} alt="" />
                <h3 className="font-semibold text-[15px]">Escalation Management</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Reduce delays by flagging stuck tasks, missed deadlines, and dependencies needing managerial attention.
              </p>
            </div>

            {/* 9 — HR & Payroll Alignment */}
            <div className="bg-white rounded-xl shadow border">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                <Image src="/images/startups/icons/hrpayroll.png" width={45} height={45} alt="" />
                <h3 className="font-semibold text-[15px]">HR & Payroll Alignment</h3>
              </div>
              <p className="p-4 text-gray-700 text-sm leading-relaxed">
                Sync employee data, attendance, leave & salary processing using unified workflows.
              </p>
            </div>

            {/* 10 — Integrations for Modern Startups */}
            <div className="bg-white rounded-xl shadow border">
              <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                <Image src="/images/startups/icons/integrations.png" width={45} height={45} alt="" />
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
          className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
          style={{
            backgroundImage: "url('/images/startups/whybexatm.webp')",
          }}
        >
          {/* Dark Overlay for Mobile Readability */}
          <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>

          {/* Why ATM - Top Right */}
          <h2 className="absolute top-6 right-6 md:top-10 md:right-20 text-3xl md:text-5xl font-extrabold text-[#0A2A45] z-10">
            Why ATM?
          </h2>

          {/* Right Content (becomes full width on mobile) */}
          <div className="relative z-10 w-full md:w-1/2 ml-auto px-6 md:px-20 py-24 md:py-0">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2A45] mb-6">
              AI Advantages
            </h2>

            {/* Bullet List */}
            <ul className="space-y-4 text-gray-900 font-medium">
              {[
                "Predictive project timelines",
                "Next-step suggestions",
                "Load balancing for teams",
                "Smart summaries",
                "Automated reminders",
                "Real-time progress intelligence",
              ].map((item, index) => (
                <li key={index} className="flex items-start text-lg md:text-xl leading-tight">
                  <span className="text-[#0057A8] font-bold mr-2 text-xl md:text-2xl">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Center Text */}
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] text-center text-xl md:text-3xl font-extrabold text-gray-900 z-10">
            ATM connecting tasks → teams → deadlines → reports
          </p>
        </section>

        <section className="relative w-full py-24 bg-[#F4F7FA] overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6">

            {/* Headings */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-[#0A2A45]">
              Business Benefits
            </h2>
            <p className="text-xl lg:text-2xl font-semibold text-center text-gray-700 mt-2 mb-12">
              Get Results That Matter
            </p>

            {/* Circles */}
            <div ref={sectionRef} className="flex justify-center mt-20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* CIRCLE 1 */}
                <div
                  className="w-48 h-48 rounded-full flex flex-col items-center justify-center text-white text-center shadow-xl"
                  style={{
                    background: "radial-gradient(circle at 70% 30%, #0F2F40, #0E4A55)",
                  }}
                >
                  <h3 className="text-3xl font-extrabold">{count30}%</h3>
                  <p className="text-sm font-semibold mt-1">Faster Delivery</p>
                </div>

                {/* CIRCLE 2 */}
                <div
                  className="w-48 h-48 rounded-full flex flex-col items-center justify-center text-white text-center shadow-xl"
                  style={{
                    background: "radial-gradient(circle at 70% 30%, #0F2F40, #0E4A55)",
                  }}
                >
                  <h3 className="text-3xl font-extrabold">{count45}%</h3>
                  <p className="text-sm font-semibold mt-1">
                    More Visibility <br /> Across Teams
                  </p>
                </div>

                {/* CIRCLE 3 */}
                <div
                  className="w-48 h-48 rounded-full flex flex-col items-center justify-center text-white text-center shadow-xl"
                  style={{
                    background: "radial-gradient(circle at 70% 30%, #0F2F40, #0E4A55)",
                  }}
                >
                  <h3 className="text-3xl font-extrabold">{count2}X</h3>
                  <p className="text-sm font-semibold mt-1">
                    Productivity with <br /> AI Automation
                  </p>
                </div>

                {/* CIRCLE 4 */}
                <div
                  className="w-48 h-48 rounded-full flex flex-col items-center justify-center text-white text-center shadow-xl"
                  style={{
                    background: "radial-gradient(circle at 70% 30%, #0F2F40, #0E4A55)",
                  }}
                >
                  <h3 className="text-xl font-extrabold">0%</h3>
                  <p className="text-sm font-semibold mt-1">
                    Manual Follow-ups <br /> & Paperwork
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section className="py-20 md:py-24 mt-0 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900">What Our Users Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {/* Card 1 */}
            <div className="bg-white p-10 rounded-xl shadow-md border border-gray-200 relative">
              <span className="text-[#F6B200] text-4xl font-bold">“</span>
              <h2>“ATM brought complete structure to our sprints.”</h2>
              <p className="mt-4 text-gray-700 italic leading-relaxed">
                Before using ATM, our product team struggled with scattered tasks and delays. The AI suggestions and predictive timelines helped us deliver faster and stay organized. Our sprint completion rate improved by 90% within weeks.
              </p>

              <div className="mt-6">
                <p className="font-bold text-gray-900">— Naveen S, Co-Founder, XorbTech</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-xl shadow-md border border-gray-200 relative">
              <span className="text-[#F6B200] text-4xl font-bold">“</span>
              <h2>“Perfect for small teams managing multiple clients.”</h2>
              <p className="mt-4 text-gray-700 italic leading-relaxed">
                ATM reduced our WhatsApp clutter, improved deadlines, and made client reporting effortless. We now handle more projects with the same team and deliver work on time consistently.
              </p>

              <div className="mt-6">
                <p className="font-bold text-gray-900">— Ananya D, Founder, BrandCove Media</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-xl shadow-md border border-gray-200 relative">
              <span className="text-[#F6B200] text-4xl font-bold">“</span>
              <p className="mt-4 text-gray-700 italic leading-relaxed">
                <h2>“We finally have full visibility of our daily operations.”</h2>
                Task tracking, staff coordination, and reporting became seamless with ATM. The AI summaries save us hours every week, and team accountability has noticeably improved.
              </p>

              <div className="mt-6">
                <p className="font-bold text-gray-900"> — Ramesh K, MD, SwiftLogistics</p>
              </div>
            </div>

          </div>
        </section>

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
            <div ref={formRef} className="bg-white shadow-lg rounded-md p-8 w-full">
              <h2 className="text-xl md:text-2xl font-bold text-black-800">
                Ready to Build Smarter with ATM?
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
                    Job title<span className="text-red-500">*</span>
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
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
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
                    className="w-full border border-[#F6B200] rounded-md p-2 text-sm focus:ring-2 focus:ring-[#F6B200] focus:outline-none"
                  />
                </div>

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

        <footer className="bg-black text-white py-8 px-4 text-center space-y-6">
          {/* Heading + Subtext */}
          <div>
            <h3 className="text-lg font-semibold">
              Start Managing Smarter with <span className="text-yellow-400">ATM</span> — Powered by AI
            </h3>
            <p className="text-sm text-gray-300 mt-2 max-w-sm mx-auto">
              Join 800+ startups who’ve automated workflows and grown faster with ATM.
            </p>
          </div>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Book Demo Button */}
            <button
              onClick={() => setIsDemoPopupOpen(true)}
              className="bg-yellow-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
            >
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
                Say Hi To Our Expert:{" "}
                <span className="ml-2 font-bold">+91 944 440 8804</span>
              </a>
            </Button>
          </div>

          {/* Footer Bottom Text */}
          <p className="text-xs text-gray-400 pt-4 border-t border-gray-800">
            © {new Date().getFullYear()} ATM. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
