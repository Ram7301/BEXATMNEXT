"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Head from "next/head";
import Script from "next/script";

export default function ProjectManagementPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // Scroll reference for form section
  const formRef = useRef<HTMLDivElement | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
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
    if (!executeRecaptcha) {
      console.log("Recaptcha not ready");
      return;
    }

    if (!preferredDateTime) {
      setMessage("❌ Please select a preferred date and time.");
      return;
    }

    const token = await executeRecaptcha("contact_form");

    const res = await fetch("https://bexatm.com/api/captchaverify.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),  // ✅ Correct: stringified JSON
    });

    const data = await res.json();
    if (data.Status == 'N') {
      setMessage(data.error);
      return
    }
    // alert(data.status);
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
            TrailType: "Construction",
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


  return (
    <>
      <Head>
        <title>AI Powered Construction Project Management Software for Your Team| ATM</title>
        <meta
          name="description"
          content="Empower your construction team with BexATM’s AI-powered software. Track tasks, manage resources and deliver projects on time with our construction project management solution."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "url": "https://bexatm.com//construction-project-management-software",
              "name": "Construction",
              "description":
                "Contact BexATM for support, questions or free trial.",
            }),
          }}
        />
        <link rel="canonical" href="https://bexatm.com//construction-project-management-software" />
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
        {/* Hero Section */}
        <section
          className="relative flex flex-col md:flex-row items-center justify-between py-20 px-6 mb-0 md:-mb-24
 md:px-20 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/construction.webp')",
          }}
        >
          {/* 🔹 Left Content */}
          <div className="text-center md:text-left max-w-xl md:max-w-lg mt-16 md:mt-5 md:ml-4 relative z-10 text-black">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 mt-7 leading-tight text-black">
              AI-Powered Construction Project Management <br />  Software for Your Team
            </h1>

            <p className="text-base sm:text-lg text-gray-800 font-medium mb-4 leading-relaxed">
              Plan smarter, execute faster, and deliver projects on time — every time.
              <br />
              <span className="text-gray-700 font-normal">
                ATM helps construction companies streamline site progress, track
                resources, and eliminate delays with AI-driven insights.
              </span>
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button
                onClick={scrollToForm}
                className="bg-[#F6B200] text-black font-semibold hover:bg-yellow-400 px-8 py-3 rounded-md transition-all duration-300"
              >
                Book a Demo
              </Button>



              {/* ✅ How it Works button opens modal */}
              <Button
                variant="outline"
                onClick={() => setIsVideoOpen(true)}
                className="border border-[#F6B200] text-[#F6B200] font-semibold hover:bg-[#F6B200] hover:text-black px-6 py-3 rounded-md transition-all duration-300"
              >
                How it Works
              </Button>
            </div>
          </div>

          {/* ✅ Video Modal Overlay */}
          {/* ✅ Video Modal Overlay (Local Video) */}
          {/* -------- VIDEO MODAL (Optimized for vertical video) -------- */}
          {isVideoOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setIsVideoOpen(false)} // click outside closes modal
            >
              {/* Modal container */}
              <div
                className="relative bg-black rounded-2xl overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 text-lg transition"
                >
                  ✕
                </button>

                {/* Video container (vertical video) */}
                <div className="flex justify-center items-center bg-black">
                  <video
                    src="/videos/how-it-works.mp4" // your local reel video
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[80vh] w-auto rounded-lg"
                    style={{ aspectRatio: "9 / 16", objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          )}

        </section>

        {/* Pain Points Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-20 mb-0 md:-mb-24
 px-6 md:px-20 ">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black-900 leading-tight">
              Construction Projects Often <br /> Go Off-Track — Here’s Why
            </h2>

            <div className="space-y-6 mt-8 text-left">
              {/* Point 1 */}
              <div className="flex items-center space-x-4">
                <img
                  src="/images/icons/1.png"  // 🖼 replace with your actual image path
                  alt="Missed Deadlines"
                  className="w-12 h-12"
                />
                <p className="text-lg font-semibold text-gray-800">
                  Missed Deadlines due to poor communication
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex items-center space-x-4">
                <img
                  src="/images/icons/2.png"  // 🖼 replace with your actual image path
                  alt="Cost Overruns"
                  className="w-12 h-12"
                />
                <p className="text-lg font-semibold text-gray-800">
                  Material & labor cost overruns
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex items-center space-x-4">
                <img
                  src="/images/icons/3.png"  // 🖼 replace with your actual image path
                  alt="Real-Time Visibility"
                  className="w-12 h-12"
                />
                <p className="text-lg font-semibold text-gray-800">
                  Lack of real-time visibility between site & office
                </p>
              </div>
            </div>

          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <img
              src="/images/Before.webp"
              alt="Before ATM"
              className="w-full"
            />
            <p className="absolute bottom-4 right-4 text-gray-600 text-sm">Before ATM</p>
          </div>
        </section>

        {/* Before BexATM */}
        <section className="py-20 px-6 mb-0 md:-mb-24
 md:px-20  flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-left space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-black-900 leading-tight">
              Manage Everything in One <br />
              <span className="text-black-600">AI Powered Platform</span>
            </h1>
            <h2 className="text-lg font-semibold text-black-800">
              From Site Planning to Completion
            </h2>
            <p className="text-gray-600 max-w-lg">
              ATM centralizes all your project data, communication, and progress tracking powered by AI recommendations
            </p>

            {/* Feature Boxes */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {/* Card 1 */}
              <div className="p-6 bg-white border rounded-xl text-center shadow-sm hover:shadow-md transition transform hover:-translate-y-2 hover:scale-[1.02] duration-300">
                <img
                  src="images/icons/4.png"
                  alt="AI-Powered Task Management"
                  className="mx-auto mb-1 h-15 w-15"
                />
                <h3 className="font-semibold text-gray-800 mb-1">
                  AI-Powered Task Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Predict delays and auto-adjust timelines.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-white border rounded-xl text-center shadow-sm hover:shadow-md transition transform hover:-translate-y-2 hover:scale-[1.02] duration-300">
                <img
                  src="images/icons/5.png"
                  alt="Task & Resource Management"
                  className="mx-auto mb-1 h-15 w-15"
                />
                <h3 className="font-semibold text-gray-800 mb-1">
                  Task & Resource Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Assign tasks, track material usage, and monitor site progress.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-white border rounded-xl text-center shadow-sm hover:shadow-md transition transform hover:-translate-y-2 hover:scale-[1.02] duration-300">
                <img
                  src="images/icons/6.png"
                  alt="Budget Tracking"
                  className="mx-auto mb-1 h-15 w-15"
                />
                <h3 className="font-semibold text-gray-800 mb-1">
                  Budget Tracking
                </h3>
                <p className="text-gray-600 text-sm">
                  Stay within budget with real-time expense insights.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-white border rounded-xl text-center shadow-sm hover:shadow-md transition transform hover:-translate-y-2 hover:scale-[1.02] duration-300">
                <img
                  src="images/icons/7.png"
                  alt="Doc Workflow & Approval"
                  className="mx-auto mb-1 h-15 w-15"
                />
                <h3 className="font-semibold text-gray-800 mb-1">
                  Doc Workflow & Approval
                </h3>
                <p className="text-gray-600 text-sm">
                  Share site plans, blueprints, and approvals easily.
                </p>
              </div>

              {/* Card 5 */}
              <div className="p-6 bg-white border rounded-xl text-center shadow-sm hover:shadow-md transition transform hover:-translate-y-2 hover:scale-[1.02] duration-300">
                <img
                  src="images/icons/8.png"
                  alt="Progress Dashboards"
                  className="mx-auto mb-1 h-15 w-15"
                />
                <h3 className="font-semibold text-gray-800 mb-1">
                  Progress Dashboards
                </h3>
                <p className="text-gray-600 text-sm">
                  Visualize milestones, pending tasks, and site reports.
                </p>
              </div>

              {/* Card 6 */}
              <div className="p-6 bg-white border rounded-xl text-center shadow-sm hover:shadow-md transition transform hover:-translate-y-2 hover:scale-[1.02] duration-300">
                <img
                  src="images/icons/9.png"
                  alt="Mobile Access for Site Teams"
                  className="mx-auto mb-1 h-15 w-15"
                />
                <h3 className="font-semibold text-gray-800 mb-1">
                  Mobile Access for Site Teams
                </h3>
                <p className="text-gray-600 text-sm">
                  Update status or upload photos right from the site.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side Image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center">
            <img
              src="/images/WithBG1.webp" // replace with your uploaded image
              alt="AI dashboard visualization"
              className="rounded-xl shadow-lg"
            />
            <p className="absolute bottom-0 right-0 text-sm text-gray-500">
              With ATM
            </p>
          </div>
        </section>

        {/* With BexATM */}
        <section
          className="relative py-20 px-6 mb-0 md:mb-0
 md:px-20 text-center bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Benefits.webp')" }}
        >
          {/* White overlay for clarity */}

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black-900 mb-4">
              How Does ATM Benefit Your Business?
            </h2>
            <p className="text-black-700 mb-12 max-w-2xl mx-auto">
              Beyond managing projects, ATM boosts efficiency, saves cost, and builds client trust.
            </p>

            {/* Benefit Cards */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 justify-items-center">
              {/* 1 - Up */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition transform -translate-y-4 hover:-translate-y-6 hover:scale-[1.02] duration-300">
                <img
                  src="images/icons/10.png"
                  alt="30% Faster Project Delivery"
                  className="mx-auto mb-3 h-15 w-15"
                />
                <h3 className="text-black font-semibold text-lg">
                  30% Faster Project Delivery
                </h3>
              </div>

              {/* 2 - Down */}
              {/* 2 - Down */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition transform translate-y-4 hover:translate-y-2 hover:scale-[1.02] duration-300 mb-8 sm:mb-0">
                <img
                  src="images/icons/11.png"
                  alt="20% Cost Savings Through AI Insights"
                  className="mx-auto mb-3 h-15 w-15"
                />
                <h3 className="text-black font-semibold text-lg">
                  20% Cost Savings Through AI Insights
                </h3>
              </div>


              {/* 3 - Up */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition transform -translate-y-4 hover:-translate-y-6 hover:scale-[1.02] duration-300">
                <img
                  src="images/icons/12.png"
                  alt="Real-Time Collaboration Across Teams"
                  className="mx-auto mb-3 h-15 w-15"
                />
                <h3 className="text-black font-semibold text-lg">
                  Real-Time Collaboration Across Teams
                </h3>
              </div>

              {/* 4 - Down */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition transform translate-y-4 hover:translate-y-2 hover:scale-[1.02] duration-300">
                <img
                  src="images/icons/13.png"
                  alt="Improved Client Reporting & Transparency"
                  className="mx-auto mb-3 h-15 w-15"
                />
                <h3 className="text-black font-semibold text-lg">
                  Improved Client Reporting & Transparency
                </h3>
              </div>
            </div>

          </div>
        </section>

        {/* Built for Every Type of Project */}
        <section
          className="relative py-20 px-6 mb-0 md:-mb-24
 md:px-20 text-white bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/images/Industry2.webp')" }} // background image
        >
          {/* Dark overlay */}

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              Built for Every Type of Construction Project
            </h2>

            {/* Project Type Cards */}
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {/* Residential */}
              <div className="bg-white text-gray-900 rounded-xl p-6 shadow-md w-72 hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-[1.02] duration-300">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/images/icons/14.png"
                    alt="Residential Projects"
                    className="mx-auto mb-1 h-15 w-15"
                  />
                  <h3 className="font-semibold text-lg">Residential Projects</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Simplify progress updates & client reporting.
                  </p>
                </div>
              </div>

              {/* Commercial */}
              <div className="bg-white text-gray-900 rounded-xl p-6 shadow-md w-72 hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-[1.02] duration-300">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/images/icons/15.png"
                    alt="Commercial Buildings"
                    className="mx-auto mb-1 h-15 w-15"
                  />
                  <h3 className="font-semibold text-lg">Commercial Buildings</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Manage large teams & multi-site workflows.
                  </p>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="bg-white text-gray-900 rounded-xl p-6 shadow-md w-72 hover:shadow-xl transition-all transform hover:-translate-y-2 hover:scale-[1.02] duration-300">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="/images/icons/16.png"
                    alt="Infrastructure Projects"
                    className="mx-auto mb-1 h-15 w-15"
                  />
                  <h3 className="font-semibold text-lg">Infrastructure Projects</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Stay compliant & track massive resource flows.
                  </p>
                </div>
              </div>
            </div>


            {/* Bottom Section */}
            <div className="grid lg:grid-cols-2 items-center gap-10">
              {/* Left Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/images/WithBG2.png"
                  alt="AI Dashboard"
                  className="w-full max-w-2xl object-contain"
                />
              </div>


              {/* Right Text */}
              <div className="text-left lg:pl-6">
                <h3 className="text-2xl font-semibold mb-5">
                  Your AI Co-Manager on Every Construction Site
                </h3>
                <ul className="space-y-3 text-black-200 text-base leading-relaxed">
                  <li>• AI predicts delays and suggests preventive actions</li>
                  <li>• Auto-generated project reports for clients & management</li>
                  <li>• Smart reminders to keep every site activity on time</li>
                  <li>• Risk analysis based on project patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Co-Manager */}
        <section className="relative py-24 px-6 md:px-20 mb-0 md:-mb-24 bg-gradient-to-b from-white to-gray-50 text-center overflow-hidden">
          {/* 🔹 Glow Backdrop */}

          <h2 className="text-3xl md:text-4xl font-bold mb-14 relative z-10 text-gray-900">
            Client Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-[#F6B200] text-5xl leading-none mb-4">“</div>
              <p className="text-gray-700 italic mb-6">
                Before ATM, managing multiple sites was a nightmare — scattered updates,
                missed follow-ups, and constant calls. Now, I can see everything on one dashboard —
                progress, material status, team output — all in real time.
                <br />
                <br />
                ATM has reduced our project delays by almost 35% and improved coordination
                between our site engineers and head office.
              </p>
              <h3 className="font-semibold text-gray-900">
                Ramesh K.
              </h3>
              <p className="text-sm text-gray-500">
                Project Head, SK Line Builders, Chennai
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-[#F6B200] text-5xl leading-none mb-4">“</div>
              <p className="text-gray-700 italic mb-6">
                ATM makes site reporting effortless. I update progress photos and task completions
                right from my mobile, and the management sees it instantly. The daily summaries help
                me stay on track — no missed inspections or deadlines anymore.
              </p>
              <h3 className="font-semibold text-gray-900">
                Priya N.
              </h3>
              <p className="text-sm text-gray-500">
                Site Engineer, Deepak InfraWorks, Bangalore
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-yellow-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-[#F6B200] text-5xl leading-none mb-4">“</div>
              <p className="text-gray-700 italic mb-6">
                We’ve tried several project tracking tools before, but ATM is built for construction.
                It understands our workflows — from BOQ to billing. The platform helps us monitor
                manpower, costs, and timelines with unmatched clarity.
              </p>
              <h3 className="font-semibold text-gray-900">
                S. Ganesh
              </h3>
              <p className="text-sm text-gray-500">
                Managing Director, Y Stone Constructions
              </p>
            </div>
          </div>

          <p className="text-gray-500 mt-12 text-sm italic relative z-10">
            Empowering construction teams with real-time visibility and better project outcomes.
          </p>
        </section>

        {/* FAQ + Book a Demo Section */}
        <section
          className="relative py-20 px-6 mb-0 md:mb-0
 md:px-20 bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: "url('/images/Form2.webp')" }}
        >

          {/* White Overlay */}
          <div className="absolute inset-0 bg-white/10"></div>

          <div className="relative grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* 🔹 Left: FAQ Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black-800">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: "What kinds of construction projects can ATM handle?",
                    a: "ATM is built to support everything from residential buildings to large-scale infrastructure sites. Whether you’re managing one site or five simultaneous jobs, the platform scales with you — offering real-time visibility and control across all projects."
                  },
                  {
                    q: "How quickly can I deploy ATM for my construction team?",
                    a: "Most construction teams are up and running within a few days. We assist with importing project data, configuring site-specific workflows, and training your field engineers. You’ll be ready to start tracking progress and issues almost immediately."
                  },
                  {
                    q: "Will the on-site crew be able to update progress from the field?",
                    a: "Yes. ATM offers mobile and web access so field staff can upload photos, mark task status, and log issues directly on site. This keeps your office team informed in real time — no more waiting for end-of-day reports."
                  },
                  {
                    q: "How does ATM help in preventing project delays and cost overruns?",
                    a: "By combining task tracking, resource monitoring and AI insights, ATM alerts you to schedule risks, material bottlenecks or cost overruns before they become problems. This helps you stay on budget and on time."
                  },
                  {
                    q: "Can I track budgets, materials and labour in ATM?",
                    a: "Absolutely. The platform includes dedicated modules for budget tracking, expense monitoring, and material/labour usage — giving you a live view of your financials and resource consumption across site activities."
                  },
                  {
                    q: "Does ATM integrate with our existing tools (e.g., spreadsheets, drawings, ERPs)?",
                    a: "Yes. You can import data from Excel, attach project drawings and BOQs, and export results for other systems. ATM supports your workflows — it doesn’t force you to change everything."
                  },
                  {
                    q: "How secure is our project data and who has access to it?",
                    a: "Security is built-in. ATM uses role-based access controls, secure cloud storage and encrypted data transfer, so only authorised personnel see your project information. You get governance and compliance built-in."
                  },
                  {
                    q: "How do I get support and training for using ATM on construction projects?",
                    a: "We provide a dedicated onboarding programme, training tailored for site managers and office teams, plus ongoing support via chat, email and phone. Your team is supported every step of the way."
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

            {/* ✅ Right: Book a Demo Form */}
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
              Join 800+ construction who’ve automated workflows and grown faster with ATM.
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
                <span className="ml-2 font-bold">(+91)94444 08804</span>
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



