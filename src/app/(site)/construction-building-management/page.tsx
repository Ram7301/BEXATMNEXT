"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { motion, useMotionValue, animate } from 'framer-motion';
import Head from "next/head";
import Script from "next/script";




export default function ConstructionBuildingManagement() {
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


    return (
        <>
            <Head>
                <title>Construction Building Management| ATM</title>
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
                            "url": "https://bexatm.com//construction-building-management",
                            "name": "Startups",
                            "description":
                                "Contact ATM for support, questions or free trial.",
                        }),
                    }}
                />
                <link rel="canonical" href="https://bexatm.com//construction-building-management" />
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

                {/* HERO SECTION */}
                <section
                    className="
    relative w-full bg-cover
    bg-[center_-50%] md:bg-[center_0%]
 md:bg-[center_0%]
    pt-10 md:pt-12 pb-10 md:pb-12
    px-4 sm:px-6 md:px-20
    overflow-hidden
  "
                    style={{
                        backgroundImage: "url('/images/home/newbanner.webp')",
                    }}
                >
                    {/* MOBILE ONLY DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/50 md:bg-transparent"></div>

                    <div
                        className="
    relative grid grid-cols-1 md:grid-cols-2
    gap-8 md:gap-10 md:ml-20

    items-center
  "
                    >
                        {/* LEFT CONTENT */}
                        <div className="text-white max-w-xl mx-auto md:mx-0 text-center md:text-left">
                            {/* Heading */}
                            <h1 className="text-3xl md:text-7xl font-extrabold leading-tight mt-4 md:mt-15 mb-2">
                                SIMPLIFY YOUR
                            </h1>

                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mt-1 md:mt-5 mb-6 md:mb-7">
                                Construction & Building <br className="hidden sm:block" />
                                Management Tasks
                            </h2>

                            {/* Paragraph */}
                            <p className="text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed mb-8 md:mb-35 text-white/90">
                                Track site activities, workforce attendance <br className="hidden sm:block" />
                                maintenance tasks, approvals, and daily <br className="hidden sm:block" />
                                operations — In Real Time.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                                <button
                                    className="
            bg-[#F6A800] hover:bg-[#d99000]
            transition text-black
            text-sm px-6 py-2
            rounded-full font-semibold
            w-full sm:w-auto
          "
                                >
                                    Start Free Plan
                                </button>

                                <button
                                    onClick={() => setIsDemoPopupOpen(true)}
                                    className="
    bg-[#F6A800] hover:bg-[#d99000]
    transition text-black
    text-sm px-6 py-2
    rounded-full font-semibold
    w-full sm:w-auto
  "
                                >
                                    Book a Demo
                                </button>

                            </div>
                        </div>

                        {/* RIGHT TOP TEXT – DESKTOP ONLY */}
                        <div className="absolute right-5 top-9 md:right-15 md:top-5 hidden md:block z-20 max-w-xl">
                            <p className="leading-snug drop-shadow-md">
                                <span className="block text-2xl">
                                    <span className="text-[#1f4f8b] font-medium">ONE </span>
                                    <span className="text-[#0b3a6f] font-bold">PLATFORM </span>
                                    <span className="text-[#1f4f8b] font-medium">
                                        BUILT FOR CONSTRUCTION &
                                    </span>
                                </span>

                                <span className="block text-center text-2xl mt-1">
                                    <span className="text-[#0b3a6f] font-bold">
                                        BUILDING MAINTENANCE TEAMS
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className="
    relative w-full
    min-h-[700px] md:h-[800px] lg:h-[900px]
    bg-cover
    bg-[center_80%] md:bg-center
    flex flex-col items-center justify-start
    pt-16 md:pt-24
    pb-20 md:pb-0
    overflow-hidden
  "
                    style={{ backgroundImage: "url('/images/home/solutionfor.webp')" }}
                >
                    {/* MOBILE ONLY OVERLAY FOR READABILITY */}
                    <div className="absolute inset-0 bg-white/40 md:bg-transparent"></div>

                    {/* CONTENT WRAPPER */}
                    <div className="relative z-10 w-full flex flex-col items-center">
                        {/* Heading */}
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1f4f8b] text-center px-4">
                            ATM Solution is Designed
                        </h1>

                        <p className="mt-4 text-lg md:text-xl text-[#1f4f8b] text-center px-4 max-w-3xl">
                            ATM is purpose-built for teams managing physical infrastructure, people,
                        </p>

                        <p className="mt-1 text-lg md:text-xl text-[#1f4f8b] text-center px-4">
                            and daily operations.
                        </p>

                        {/* LEFT & RIGHT CONTENT */}
                        <div
                            className="
        relative mt-12 md:mt-12 w-full max-w-7xl
        grid grid-cols-1 lg:grid-cols-2
        px-4 md:px-6
        text-white
        gap-16 lg:gap-0
      "
                        >
                            {/* LEFT CONTENT */}
                            <div
                                className="
          relative
          text-center lg:text-left space-y-2
          mt-6 md:mt-14 lg:mt-[270px]
          lg:ml-[-60px]
        "
                            >
                                <img
                                    src="/images/home/icons/construction.png"
                                    alt="Construction Icon"
                                    className="
            absolute
            -top-12 md:-top-15
            left-1/2 lg:right-15 lg:left-auto
            -translate-x-1/2 lg:translate-x-0
            w-12 h-12 md:w-14 md:h-14
          "
                                />

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#1f4f8b] lg:text-white">
                                    Construction Teams
                                </h2>

                                <ul className="list-disc list-inside space-y-1 text-base md:text-lg text-[#1f4f8b] lg:text-white">
                                    <li>Builders & Developers</li>
                                    <li>Civil, Electrical & MEP Contractors</li>
                                    <li>Project Engineers & Site Supervisors</li>
                                    <li>Infrastructure & Maintenance Contractors</li>
                                </ul>
                            </div>

                            {/* RIGHT CONTENT */}
                            <div
                                className="
          relative
          text-center lg:text-left space-y-2
          mt-6 md:mt-14 lg:mt-[270px]
          lg:ml-[100px]
        "
                            >
                                <img
                                    src="/images/home/icons/CRM.png"
                                    alt="Building Icon"
                                    className="
            absolute
            -top-12 md:-top-15
            left-1/2 lg:-right-30 lg:left-auto
            -translate-x-1/2 lg:translate-x-0
            w-12 h-12 md:w-14 md:h-14
          "
                                />

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-[#1f4f8b] lg:text-white">
                                    Building Management
                                </h2>

                                <ul className="list-disc list-inside space-y-1 text-base md:text-lg text-[#1f4f8b] lg:text-white">
                                    <li>Associations & Welfare Committees</li>
                                    <li>Facility & Property Management Teams</li>
                                    <li>Residential Building Admin Teams</li>
                                    <li>Maintenance & Security Supervisors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="
    relative w-full
    min-h-[700px] md:h-[800px] lg:h-[900px]
    bg-cover
    bg-[center_80%] md:bg-center
    flex items-start
    pt-16 md:pt-24
    pb-20 md:pb-0
    overflow-hidden
  "
                    style={{ backgroundImage: "url('/images/home/choosebexatm.webp')" }}
                >
                    {/* MOBILE ONLY OVERLAY FOR READABILITY */}
                    <div className="absolute inset-0 bg-white/50 md:bg-transparent"></div>

                    {/* LEFT CONTENT */}
                    <div className="relative z-10 w-full pl-4 md:pl-8 lg:pl-25 pr-4">
                        <div className="max-w-[520px] mx-auto md:mx-0">

                            {/* Heading */}
                            <h2 className="text-[#0A4C6A] text-[36px] sm:text-[42px] md:text-[55px] font-bold mb-10 md:mb-12 leading-tight text-center md:text-left">
                                Why Choose ATM ?
                            </h2>

                            {/* Item 1 */}
                            <div className="flex items-start gap-4 md:gap-5 mb-8 md:mb-9">
                                <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-full bg-[#0A4C6A] flex items-center justify-center text-white text-[30px] md:text-[35px] font-semibold shrink-0">
                                    ↗
                                </div>
                                <div>
                                    <h4 className="text-[#0A4C6A] font-bold text-[20px] md:text-[25px] mb-1 leading-snug">
                                        Built for On-Ground Operations
                                    </h4>
                                    <p className="text-[#4A4A4A] text-[14px] md:text-[15px] leading-[1.6]">
                                        Track what’s happening on-site or in the building – not just on spreadsheets.
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex items-start gap-4 md:gap-5 mb-8 md:mb-9">
                                <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-full bg-[#0A4C6A] flex items-center justify-center text-white text-[30px] md:text-[35px] font-semibold shrink-0">
                                    ↗
                                </div>
                                <div>
                                    <h4 className="text-[#0A4C6A] font-semibold text-[20px] md:text-[25px] mb-1 leading-snug">
                                        Attendance + Work Linked Together
                                    </h4>
                                    <p className="text-[#4A4A4A] text-[14px] md:text-[15px] leading-[1.6]">
                                        Know who is present, what work is done, and where delays occur.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex items-start gap-4 md:gap-5 mb-8 md:mb-9">
                                <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-full bg-[#0A4C6A] flex items-center justify-center text-white text-[30px] md:text-[35px] font-semibold shrink-0">
                                    ↗
                                </div>
                                <div>
                                    <h4 className="text-[#0A4C6A] font-semibold text-[20px] md:text-[25px] mb-1 leading-snug">
                                        Reduce Manual Coordination
                                    </h4>
                                    <p className="text-[#4A4A4A] text-[14px] md:text-[15px] leading-[1.6]">
                                        Replace WhatsApp groups, registers, and Excel sheets with one system.
                                    </p>
                                </div>
                            </div>

                            {/* Item 4 */}
                            <div className="flex items-start gap-4 md:gap-5">
                                <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-full bg-[#0A4C6A] flex items-center justify-center text-white text-[30px] md:text-[35px] font-semibold shrink-0">
                                    ↗
                                </div>
                                <div>
                                    <h4 className="text-[#0A4C6A] font-semibold text-[20px] md:text-[25px] mb-1 leading-snug">
                                        Full Visibility for Management
                                    </h4>
                                    <p className="text-[#4A4A4A] text-[14px] md:text-[15px] leading-[1.6]">
                                        From daily work updates to escalations and approvals – everything is tracked.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="w-full">
                    {/* ================= MOBILE VIEW ================= */}
                    <div className="block md:hidden px-4 pt-8 text-center">
                        {/* TEXT FIRST */}
                        <h1 className="text-2xl font-bold text-[#1f4f8b]">
                            How ATM Improves Your Operations
                        </h1>

                        <p className="mt-2 text-base text-[#1f4f8b]">
                            ATM solves these challenges with real-time tracking, automation, and smart dashboards.
                        </p>

                        {/* IMAGE FULLY VISIBLE */}
                        <img
                            src="/images/home/howatm.webp"
                            alt="How ATM Improves Your Operations"
                            className="mt-6 w-full h-auto object-contain"
                        />
                    </div>

                    {/* ================= DESKTOP VIEW (UNCHANGED DESIGN) ================= */}
                    <div
                        className="
      hidden md:flex
      relative w-full
      h-[800px] lg:h-[900px]
      bg-cover bg-center
      justify-center items-start
      pt-12
      text-center
    "
                        style={{ backgroundImage: "url('/images/home/howatm.webp')" }}
                    >
                        <div className="px-4">
                            <h1 className="text-4xl font-bold text-[#1f4f8b]">
                                How ATM Improves Your Operations
                            </h1>

                            <p className="mt-2 text-xl text-[#1f4f8b]">
                                ATM solves these challenges with real-time tracking, automation, and smart dashboards.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    className="
    relative w-full
    min-h-screen md:h-[800px] lg:h-[900px]
    bg-cover
    bg-top md:bg-center
    flex flex-col items-center
    pt-12
    pb-20 md:pb-0
    overflow-hidden
  "
                    style={{ backgroundImage: "url('/images/home/.webp')" }}
                >
                    {/* MOBILE ONLY LIGHT OVERLAY (optional but recommended for clarity) */}
                    <div className="absolute inset-0 bg-white/70 md:bg-transparent"></div>

                    {/* CONTENT WRAPPER */}
                    <div className="relative z-10 w-full">
                        {/* Section Title Card */}
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#003C71]">
                                Core Modules of ATM
                            </h2>
                            <p className="text-gray-900 mt-2 sm:mt-3 font-semibold text-sm sm:text-lg md:text-xl">
                                Powerful Modules for Complete Operational Control
                            </p>
                        </div>

                        {/* MODULE GRID */}
                        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 px-4 md:px-0">
                            {/* Example Module Card */}
                            <div className="bg-white rounded-xl shadow border transition-all duration-300 
      hover:border-[#167F8C] hover:bg-gray-50 hover:shadow-lg 
      hover:-translate-y-1 hover:scale-[1.01] group
      flex flex-col"
                            >
                                <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-3 sm:p-4 rounded-t-xl flex items-center gap-2 justify-center sm:gap-3">
                                    <Image
                                        src="/images/startups/icons/clients.png"
                                        width={40} // smaller on mobile
                                        height={40}
                                        alt=""
                                        className="transition-all duration-300 group-hover:-translate-y-[3px]"
                                    />
                                    <h3 className="font-semibold text-[12px] sm:text-[14px] text-center">
                                        Human Resources
                                    </h3>
                                </div>
                                <p className="p-3 sm:p-4 text-gray-700 text-xs sm:text-sm leading-relaxed text-center">
                                    Centralize employee records, leave policies, attendance data, and payroll-ready
                                    reports in one place, ensuring smooth HR operations with minimal manual work.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow border transition-all duration-300 
                           hover:border-[#167F8C] hover:bg-gray-50 hover:shadow-lg 
                           hover:-translate-y-1 hover:scale-[1.01] group">

                                <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl 
                               flex items-center gap-3">
                                    <Image
                                        src="/images/startups/icons/remoteteam.png"
                                        width={45}
                                        height={45}
                                        alt=""
                                        className="transition-all duration-300 group-hover:-translate-y-[3px]"
                                    />

                                    <h3 className="font-semibold text-[14px] leading-tight">
                                        Smart Time & Attendance
                                    </h3>
                                </div>

                                <p className="p-4 text-gray-700 text-sm leading-relaxed">
                                    Track attendance accurately with biometrics, geofencing,
                                    mobile check-ins, and shift-based logging — eliminating
                                    time fraud and boosting workforce transparency.
                                </p>
                            </div>

                            {/* 3 — Projects & Client Deliverables */}
                            <div className="bg-white rounded-xl shadow border transition-all duration-300 
                           hover:border-[#167F8C] hover:bg-gray-50 hover:shadow-lg 
                           hover:-translate-y-1 hover:scale-[1.01] group">

                                <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl 
                               flex items-center gap-3">

                                    <Image
                                        src="/images/startups/icons/agiletask.png"
                                        width={45}
                                        height={45}
                                        alt=""
                                        className="transition-all duration-300 group-hover:-translate-y-[3px]"
                                    />

                                    <h3 className="font-semibold text-[14px] leading-tight">
                                        Agile Project & Task Management
                                    </h3>
                                </div>

                                <p className="p-4 text-gray-700 text-sm leading-relaxed">
                                    Plan sprints, assign tasks, organize milestones, and
                                    monitor real-time progress using weightage-based
                                    tracking for precise project completion insights.
                                </p>
                            </div>

                            {/* 4 — Timesheet-Based Billing */}
                            <div className="bg-white rounded-xl shadow border transition-all duration-300 
                           hover:border-[#167F8C] hover:bg-gray-50 hover:shadow-lg 
                           hover:-translate-y-1 hover:scale-[1.01] group">

                                <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl 
                               flex items-center gap-3">

                                    <Image
                                        src="/images/startups/icons/timesheet.png"
                                        width={45}
                                        height={45}
                                        alt=""
                                        className="transition-all duration-300 group-hover:-translate-y-[3px]"
                                    />

                                    <h3 className="font-semibold text-[14px] leading-tight">
                                        Employee Self-Service (ESS)
                                    </h3>
                                </div>

                                <p className="p-4 text-gray-700 text-sm leading-relaxed">
                                    Let employees manage leave, on-duty, overtime, expenses,
                                    and attendance corrections directly from mobile or web,
                                    reducing dependency on HR and managers.
                                </p>
                            </div>

                            {/* 5 — Employee Self-Service */}
                            <div className="bg-white rounded-xl shadow border transition-all duration-300 
                           hover:border-[#167F8C] hover:bg-gray-50 hover:shadow-lg 
                           hover:-translate-y-1 hover:scale-[1.01] group">

                                <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl 
                               flex items-center gap-3">

                                    <Image
                                        src="/images/startups/icons/selfservice.png"
                                        width={45}
                                        height={45}
                                        alt=""
                                        className="transition-all duration-300 group-hover:-translate-y-[3px]"
                                    />

                                    <h3 className="font-semibold text-[14px] leading-tight">
                                        Manager Command Center
                                    </h3>
                                </div>

                                <p className="p-4 text-gray-700 text-sm leading-relaxed">
                                    A unified approval hub where managers can review tasks,
                                    timesheets, leave, overtime, and expenses, supported by
                                    real-time team insights and notifications.
                                </p>
                            </div>

                            {/* 6 — Resource Allocation for Small Teams */}
                            <div className="bg-white rounded-xl shadow border transition-all duration-300 
                           hover:border-[#167F8C] hover:bg-gray-50 hover:shadow-lg 
                           hover:-translate-y-1 hover:scale-[1.01] group">

                                <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl 
                               flex items-center gap-3">

                                    <Image
                                        src="/images/startups/icons/resource.png"
                                        width={45}
                                        height={45}
                                        alt=""
                                        className="transition-all duration-300 group-hover:-translate-y-[3px]"
                                    />

                                    <h3 className="font-semibold text-[14px] leading-tight">
                                        Competency & Assessment Suite
                                    </h3>
                                </div>

                                <p className="p-4 text-gray-700 text-sm leading-relaxed">
                                    Create structured assessments with categories, question
                                    groups, pass criteria, and scored evaluations to measure
                                    employee skills, performance, and growth paths.
                                </p>
                            </div>

                            {/* 7 — Founder & Manager Dashboards */}
                            <div className="bg-white rounded-xl shadow border transition-all duration-300 
                           hover:border-[#167F8C] hover:bg-gray-50 hover:shadow-lg 
                           hover:-translate-y-1 hover:scale-[1.01] group">

                                <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl 
                               flex items-center gap-3">

                                    <Image
                                        src="/images/startups/icons/hrpayroll.png"
                                        width={45}
                                        height={45}
                                        alt=""
                                        className="transition-all duration-300 group-hover:-translate-y-[3px]"
                                    />

                                    <h3 className="font-semibold text-[14px] leading-tight">
                                        Resource Allocation & Workload Planning
                                    </h3>
                                </div>

                                <p className="p-4 text-gray-700 text-sm leading-relaxed">
                                    Assign employees to tasks or projects based on skills,
                                    availability, and workload distribution to balance
                                    responsibilities and improve delivery efficiency.
                                </p>
                            </div>

                            {/* 8 — Escalation Management */}
                            <div className="bg-white rounded-xl shadow border transition-all duration-300 
                           hover:border-[#167F8C] hover:bg-gray-50 hover:shadow-lg 
                           hover:-translate-y-1 hover:scale-[1.01] group">

                                <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl 
                               flex items-center gap-3">

                                    <Image
                                        src="/images/startups/icons/escalationmanagement.png"
                                        width={45}
                                        height={45}
                                        alt=""
                                        className="transition-all duration-300 group-hover:-translate-y-[3px]"
                                    />

                                    <h3 className="font-semibold text-[14px] leading-tight">
                                        Escalation & Issue Management
                                    </h3>
                                </div>

                                <p className="p-4 text-gray-700 text-sm leading-relaxed">
                                    Automatically flag delays, bottlenecks, and unresolved
                                    issues to higher management using escalation rules that
                                    maintain accountability and project momentum.
                                </p>
                            </div>

                            {/* 9 — HR & Payroll Alignment */}
                            <div className="bg-white rounded-xl shadow border transition-all duration-300 
                           hover:border-[#167F8C] hover:bg-gray-50 hover:shadow-lg 
                           hover:-translate-y-1 hover:scale-[1.01] group">

                                <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl 
                               flex items-center gap-3">

                                    <Image
                                        src="/images/startups/icons/managerdashboards.png"
                                        width={45}
                                        height={45}
                                        alt=""
                                        className="transition-all duration-300 group-hover:-translate-y-[3px]"
                                    />

                                    <h3 className="font-semibold text-[14px] leading-tight">
                                        Dashboards & Insights
                                    </h3>
                                </div>

                                <p className="p-4 text-gray-700 text-sm leading-relaxed">
                                    Get real-time, role-based dashboards for employees,
                                    managers, and project heads, giving a clear view of tasks,
                                    attendance, timelines, and productivity metrics.
                                </p>
                            </div>

                            {/* 10 — Integrations for Modern Startups */}
                            <div className="bg-white rounded-xl shadow border transition-all duration-300 
                           hover:border-[#167F8C] hover:bg-gray-50 hover:shadow-lg 
                           hover:-translate-y-1 hover:scale-[1.01] group">

                                <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl 
                               flex items-center gap-3">

                                    <Image
                                        src="/images/startups/icons/integrations.png"
                                        width={45}
                                        height={45}
                                        alt=""
                                        className="transition-all duration-300 group-hover:-translate-y-[3px]"
                                    />

                                    <h3 className="font-semibold text-[14px] leading-tight">
                                        Reports, Exports & Integrations
                                    </h3>
                                </div>

                                <p className="p-4 text-gray-700 text-sm leading-relaxed">
                                    Download payroll-ready attendance files, timesheets,
                                    project reports, and connect ATM with your existing
                                    systems through seamless API integrations.
                                </p>
                            </div>

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
                                <button
                                    type="button"
                                    onClick={() => setIsDemoPopupOpen(true)}
                                    className="
    bg-[#F6A800] text-black
    w-[140px] h-[38px]
    rounded-full font-semibold text-xs
    flex items-center justify-center
  "
                                >
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

