"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const brands: string[] = [
    "/images/home/Crea.png",
    "/images/home/Electro.png",
    "/images/home/PSS.png",
    "/images/home/Trimurthi.png",
    "/images/home/LWG.png",
    "/images/home/EliteAcademy.png",
    "/images/home/plymouth.png",
];


/* ================= COUNTER COMPONENT ================= */
function Counter({ end, duration = 2000, isK = false }) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!ref.current) return;

        let start = 0;
        const step = () => {
            start += end / (duration / 16);
            if (start < end) {
                setCount(Math.floor(start));
                requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCount(0);
                    step();
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={ref}>{isK ? `${count}K` : count}</span>;
}

/* ================= HOME PAGE ================= */

export default function BexATMHome() {
    const [showPopup, setShowPopup] = useState(false);
    const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

    /* ---------- FORM STATE ---------- */
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        organisation: "",
        industry: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, phone, organisation, industry } = formData;

        if (!name || !email || !phone || !industry) {
            setMessage("❌ Please fill all required fields");
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            setMessage("❌ Enter valid 10-digit mobile number");
            return;
        }

        setLoading(true);
        setMessage("");

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
                        TrailType: industry,
                        Description: "",
                        CompanyName: "",
                        PreferredDateTime: "",
                        OrganisationName: organisation,
                        CompanyVertical: "",
                        JobTitle: "",
                        ProspectStatus: "FV"
                    }),
                }
            );

            const result = await response.json();

            if (result.Status === "Y") {
                setMessage("✅ Free plan activated successfully!");
                setTimeout(() => setShowPopup(false), 2000);
            } else {
                setMessage(`❌ ${result.Msg || "Submission failed"}`);
            }
        } catch (error) {
            setMessage("⚠️ Server error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000); // 5 seconds

        return () => clearTimeout(timer);
    }, []);


    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-white text-black">
            {/* ================= POPUP ================= */}
            {showPopup && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4">
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2">

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-3 right-3 md:top-4 md:right-4 z-10 text-gray-400 hover:text-black text-2xl"
                        >
                            ×
                        </button>

                        {/* LEFT IMAGE (Desktop only) */}
                        <div className="hidden md:block">
                            <img
                                src="/images/home/Popupimage.webp"
                                alt="Popup"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* RIGHT FORM */}
                        <div className="p-4 sm:p-6 md:p-10">

                            {/* TITLE */}
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A] leading-tight">
                                Get Started with ATM — <br />
                                <span className="text-blue-600">100% FREE Plan</span>
                            </h2>

                            {/* SUBTITLE */}
                            <p className="text-sm text-gray-500 mt-3 mb-5">
                                Experience ATM’s powerful tools for Startups, Construction Teams,
                                and Educational Institutions. No credit card required.
                            </p>

                            {/* FORM */}
                            <form
                                onSubmit={handleSubmit}
                                className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
                            >
                                <div>
                                    <label className="text-xs text-gray-500">Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Full Name"
                                        required
                                        className="w-full mt-1 border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gray-500">Work Email</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="john@company.com"
                                        required
                                        className="w-full mt-1 border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gray-500">Phone Number</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="+91 90555-00123"
                                        required
                                        className="w-full mt-1 border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="text-xs text-gray-500">Organization Name</label>
                                    <input
                                        name="organisation"
                                        value={formData.organisation}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Company or Institution Name"
                                        required
                                        className="w-full mt-1 border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="text-xs text-gray-500">Select Industry</label>
                                    <select
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        required
                                        className="w-full mt-1 border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    >
                                        <option value="">Select Industry</option>
                                        <option value="Startups">Startup</option>
                                        <option value="Construction">Construction</option>
                                        <option value="Institution">Institution</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="md:col-span-2 mt-3 sm:mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full shadow-lg transition w-full"
                                >
                                    {loading ? "Submitting..." : "Start Free Plan"}
                                </button>

                                {message && (
                                    <p className="md:col-span-2 text-center text-sm mt-2">
                                        {message}
                                    </p>
                                )}
                            </form>


                            {/* FOOTER */}
                            <div className="flex flex-wrap justify-center sm:justify-between text-xs text-gray-500 mt-5 gap-3">
                                <span>✔ Free Forever Plan</span>
                                <span>✔ Upgrade Anytime</span>
                                <span>✔ Secure & Encrypted</span>
                            </div>

                        </div>
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
                    backgroundImage: "url('/images/home/mainbanner.webp')",
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
                    <div className="text-white max-w-xl mx-0 lg:-ml-12 xl:-ml-20">

                        {/* Heading */}
                        <h1 className="
        text-3xl md:text-5xl
        font-extrabold leading-tight
        mt-4 md:mt-10 mb-2
      ">
                            ONE PLATFORM<br />TO MANAGE YOUR
                        </h1>

                        {/* Subheading */}
                        <div className="
        bg-white text-gray-900 inline-block
        px-4 md:px-25 py-2
        rounded-lg font-semibold
        mb-4 shadow-md
        text-sm md:text-lg
      ">
                            Projects – People – Budget
                        </div>

                        {/* Paragraph */}
                        <p className="
        text-sm md:text-lg
        leading-relaxed
        mb-4 text-white/90
      ">
                            Empower your teams with an end-to-end system for project execution,
                            attendance, workforce management, and real-time insights — built for
                            Startups & SMB, Construction & Building Mgmt, and Schools & Institutions.
                            <span className="text-blue-400 font-semibold"> Startups</span>,
                            <span className="text-blue-400 font-semibold"> Communities</span>, and
                            <span className="text-blue-400 font-semibold"> Construction teams</span>.
                        </p>

                        {/* INDUSTRY ICONS */}
                        <div className="mt-3">
                            <div className="
          w-full bg-[#0C4867] rounded-xl
          p-2 md:p-4
          shadow-lg
          flex flex-col md:flex-row
          justify-between items-center
          gap-2 md:gap-0
          max-w-[260px] sm:max-w-[320px] md:max-w-full
          mx-auto md:mx-0
        ">

                                {/* Startups */}
                                <Link href="/project-management-software-for-startups" className="flex-1">
                                    <div className="
              flex flex-col items-center
              text-white p-1 md:p-2
              rounded-md cursor-pointer
              transition-all duration-300
              hover:bg-white/10 hover:scale-105
            ">
                                        <img
                                            src="/images/home/icons/startup.png"
                                            className="w-6 h-6 md:w-12 md:h-12 mb-1"
                                            alt="Startups & SMBs"
                                        />
                                        <p className="
                text-center
                text-[10px] md:text-sm
                font-medium leading-tight
              ">
                                            Startups &<br /> Small Business
                                        </p>
                                    </div>
                                </Link>

                                <div className="hidden md:block w-px bg-white/20 h-14"></div>

                                {/* Community */}
                                <Link href="/construction-building-management" className="flex-1">
                                    <div className="
              flex flex-col items-center
              text-white p-1 md:p-2
              rounded-md cursor-pointer
              transition-all duration-300
              hover:bg-white/10 hover:scale-105
            ">
                                        <img
                                            src="/images/home/icons/community.png"
                                            className="w-6 h-6 md:w-12 md:h-12 mb-1"
                                            alt="Community"
                                        />
                                        <p className="
                text-center
                text-[10px] md:text-sm
                font-medium leading-tight
              ">
                                            Construction /<br /> Building Management
                                        </p>
                                    </div>
                                </Link>

                                <div className="hidden md:block w-px bg-white/20 h-14"></div>

                                {/* Construction */}
                                <Link href="/construction-project-management-software" className="flex-1">
                                    <div className="
              flex flex-col items-center
              text-white p-1 md:p-2
              rounded-md cursor-pointer
              transition-all duration-300
              hover:bg-white/10 hover:scale-105
            ">
                                        <img
                                            src="/images/home/icons/construction.png"
                                            className="w-6 h-6 md:w-12 md:h-12 mb-1"
                                            alt="Construction Teams"
                                        />
                                        <p className="
                text-center
                text-[10px] md:text-sm
                font-medium leading-tight
              ">
                                            Schools /<br /> Institutions
                                        </p>
                                    </div>
                                </Link>

                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <button
                                onClick={() => setShowPopup(true)}
                                className="
            bg-[#F6A800] hover:bg-[#d99000]
            transition text-black
            text-sm px-6 py-2
            rounded-full font-semibold
          "
                            >
                                Get Start Free
                            </button>
                        </div>

                    </div>

                </div>
            </section>

            <section
                className="
    relative w-full
    min-h-auto
    md:min-h-[460px] lg:min-h-[520px]
    bg-cover
    bg-[center_80%] md:bg-center
    flex flex-col items-center justify-start
    mt-0
    pt-0 sm:pt-12 md:pt-16
    pb-10 sm:pb-12
    overflow-hidden
  "
            >



                {/* Heading */}
                <div className="w-full max-w-6xl text-center mb-4 sm:mb-6 px-4 sm:px-6">
                    <h2
                        className="
        text-2xl sm:text-3xl md:text-5xl
        font-bold
        mb-3
        leading-snug md:leading-tight
        text-center
        line-clamp-2
      "
                        style={{ color: '#003C71' }}
                    >
                        Trusted by Teams Across Startups, Construction Sites & Educational Institutions
                    </h2>

                    <p className="font-bold text-[#425466] text-sm sm:text-base">
                        Empowering diverse teams with reliable tools to streamline projects,
                        people, and daily operations.
                    </p>
                </div>

                {/* Marquee */}
                <div className="relative w-full overflow-hidden mt-6 sm:mt-8 md:mt-12">
                    <div className="marquee-track flex items-center">
                        {[...brands, ...brands, ...brands].map((logo, index) => (
                            <div
                                key={index}
                                className="marquee-item flex items-center justify-center px-4 sm:px-6"
                            >
                                <Image
                                    src={logo}
                                    alt="Brand"
                                    width={260}
                                    height={90}
                                    className="
              object-contain
              w-[140px] h-[50px]
              sm:w-[160px] sm:h-[60px]
              md:w-[220px] md:h-[75px]
              lg:w-[260px] lg:h-[90px]
            "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="
    relative w-full
    min-h-[700px] md:min-h-[800px] lg:min-h-[900px]
    bg-cover
    bg-[center_80%] md:bg-center
    flex flex-col items-center justify-start
    pt-12 sm:pt-16 md:pt-24
    pb-16 sm:pb-20
    overflow-hidden
  "
            >
                {/* TITLE + SUBTITLE */}
                <div className="text-center max-w-5xl mx-auto -mt-6 sm:-mt-8 mb-10 sm:mb-16 px-4">
                    <h2
                        className="
        text-2xl sm:text-3xl md:text-5xl lg:text-6xl
        font-bold mb-4
      "
                        style={{ color: "#003C71" }}
                    >
                        Solutions Tailored to Your Industry
                    </h2>

                    <p
                        className="
        text-sm sm:text-base md:text-lg
        leading-relaxed
      "
                        style={{ color: "#003C71" }}
                    >
                        Whether you lead a startup, manage construction and facility teams, or operate an educational institution,
                        ATM aligns perfectly with your operational workflow
                    </p>
                </div>

                {/* 3 CARDS ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto px-4">
                    {[
                        {
                            title: "Project Management for Startups & SMBs",
                            desc: "Agile workflows, team productivity, remote attendance & client deliverables.",
                            img: "/images/home/Startup.webp",
                            href: "/project-management-software-for-startups",
                        },
                        {
                            title: "Construction & Building Management",
                            desc: "Manage site activities, track workforce, monitor project milestones, and streamline construction workflows efficiently.",
                            img: "/images/home/construction&facilitymanagement.webp",
                            href: "/construction-building-management-software",
                        },
                        {
                            title: "School & Institution",
                            desc: "Manage attendance, track student performance, handle assignments, and monitor milestones for academic progress seamlessly.",
                            img: "/images/home/school.webp",
                            href: "/school-management-software",
                        },
                    ].map((card, i) => (
                        <Link key={i} href={card.href}>
                            <div className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-2xl hover:scale-105 transform transition cursor-pointer text-center">
                                <div className="aspect-[4/3] w-full mb-5 overflow-hidden rounded-xl">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-2" style={{ color: "#0A436A" }}>
                                    {card.title}
                                </h3>

                                <p className="text-sm leading-relaxed" style={{ color: "#0A436A" }}>
                                    {card.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* STATS ROW */}
                <div
                    className="
      flex flex-wrap justify-center items-center
      gap-8 sm:gap-10 md:gap-16
      mt-12 sm:mt-16
      text-center
      px-4
    "
                >
                    {/* 1 */}
                    <div className="flex items-center gap-3">
                        <h3
                            className="text-3xl sm:text-4xl md:text-6xl font-extrabold"
                            style={{ color: "#0A436A" }}
                        >
                            <Counter end={20} />+
                        </h3>
                        <p className="text-base sm:text-lg font-medium" style={{ color: "#0A436A" }}>
                            Powerful <br /> Modules
                        </p>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-[#0A436A]/30"></div>

                    {/* 2 */}
                    <div className="flex items-center gap-3">
                        <h3
                            className="text-3xl sm:text-4xl md:text-6xl font-extrabold"
                            style={{ color: "#0A436A" }}
                        >
                            <Counter end={10} isK={true} />
                        </h3>
                        <p className="text-base sm:text-lg font-medium" style={{ color: "#0A436A" }}>
                            Task <br /> Tracked
                        </p>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-[#0A436A]/30"></div>

                    {/* 3 */}
                    <div className="flex items-center gap-3">
                        <h3
                            className="text-3xl sm:text-4xl md:text-6xl font-extrabold"
                            style={{ color: "#0A436A" }}
                        >
                            <Counter end={99} />%
                        </h3>
                        <p className="text-base sm:text-lg font-medium" style={{ color: "#0A436A" }}>
                            Faster <br /> Approval
                        </p>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-[#0A436A]/30"></div>

                    {/* 4 */}
                    <div className="flex items-center gap-3">
                        <h3
                            className="text-3xl sm:text-4xl md:text-6xl font-extrabold"
                            style={{ color: "#0A436A" }}
                        >
                            <Counter end={15} />+
                        </h3>
                        <p className="text-base sm:text-lg font-medium" style={{ color: "#0A436A" }}>
                            Industry <br /> Served
                        </p>
                    </div>
                </div>
            </section>

            <section
                className="
    relative w-full
    min-h-[700px] md:h-[800px] lg:h-[900px]
    bg-cover bg-[center_80%] md:bg-center
    flex flex-col items-center justify-start
    pt-16 md:pt-24
    pb-20 md:pb-0
    overflow-hidden
  "
            >
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT CIRCULAR GRAPHIC */}
                        <div className="flex justify-center lg:justify-start lg:-mt-20 lg:-ml-20">
                            <img
                                src="/images/home/whybexatm1.webp"
                                alt="BexATM Left Graphic"
                                className="
            w-[520px]
            sm:w-[700px]
            md:w-[900px]
            lg:w-[1150px]
            xl:w-[1300px]
            max-w-none
          "
                            />
                        </div>

                        {/* RIGHT SECTION */}
                        <div className="flex flex-col lg:flex-row gap-12 lg:-ml-72">

                            {/* CENTER CONTENT */}
                            <div className="space-y-20 w-full">

                                <div className="flex items-start gap-3 lg:-ml-14">
                                    <div className="w-2 h-18 bg-green-500 rounded-full" />
                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            Unified System for All Operations
                                        </h3>
                                        <p className="text-gray-700">
                                            Manage projects, attendance, and HR from one connected platform.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-18 bg-blue-500 rounded-full" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Real-Time Attendance</h3>
                                        <p className="text-gray-700">
                                            Every check-in updates task progress and team availability instantly.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-2 h-18 bg-yellow-500 rounded-full" />
                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            End-to-End Visibility & Control
                                        </h3>
                                        <p className="text-gray-700">
                                            Track work, teams, and projects in real time for faster decisions.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 lg:-ml-14">
                                    <div className="w-2 h-18 bg-orange-500 rounded-full" />
                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            Built for Field, Office & Hybrid Teams
                                        </h3>
                                        <p className="text-gray-700">
                                            Seamless for on-site crews, remote staff, and multi-location teams.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* RIGHT SMALL PANEL */}
                            <div className="flex flex-col items-start space-y-6 w-full max-w-xs lg:ml-6">

                                <h2 className="text-3xl md:text-6xl lg:-mt-14 font-bold text-[#003C71]">
                                    Why ATM?
                                </h2>

                                <img
                                    src="/images/home/whybexatm2.webp"
                                    alt="Team working"
                                    className="rounded-xl shadow-md w-full h-64 object-cover"
                                />

                                <p className="text-sm md:text-base text-black font-bold leading-snug">
                                    The only platform that combines Project Management + Time Tracking + HR Operations.
                                </p>

                                <p className="text-gray-700 leading-relaxed">
                                    Unlike traditional project tools, ATM<br />
                                    connects your project work with real on-ground<br />
                                    workforce data — ensuring complete visibility,<br />
                                    accountability, and productivity.
                                </p>

                                <Link href="" onClick={(e) => e.preventDefault()}>
                                    <button
                                        type="button"
                                        onClick={() => setShowPopup(true)}
                                        className="px-6 py-3 bg-[#003C71] text-white rounded-xl shadow hover:bg-[#002B52] transition"
                                    >
                                        Let&apos;s Start – It&apos;s FREE
                                    </button>
                                </Link>



                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="
    relative w-full
    min-h-[700px] md:min-h-[800px] lg:min-h-[900px]
    bg-cover
    bg-[center_80%] md:bg-center
    flex flex-col items-center justify-start
    pt-12 sm:pt-16 md:pt-24
    pb-16 sm:pb-20
    overflow-hidden
  "
            >
                {/* Section Title */}
                <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12 px-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#003C71]">
                        Core Modules of ATM
                    </h2>
                    <p className="text-black-100 mt-3 font-bold text-sm sm:text-base">
                        Powerful Modules for Complete Operational Control
                    </p>
                </div>

                {/* MODULE GRID */}
                <div
                    className="
      max-w-7xl mx-auto
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5
      gap-5 sm:gap-6
      px-4
    "
                >
                    {[
                        {
                            title: "Human Resources",
                            desc: "Centralize employee records, leave policies, attendance data, and payroll-ready reports in one place, ensuring smooth HR operations with minimal manual work.",
                            img: "/images/startups/icons/clients.png",
                        },
                        {
                            title: "Smart Time & Attendance",
                            desc: "Track attendance accurately with biometrics, geofencing, mobile check-ins, and shift-based logging — eliminating time fraud and boosting workforce transparency.",
                            img: "/images/startups/icons/remoteteam.png",
                        },
                        {
                            title: "Agile Project & Task Management",
                            desc: "Plan sprints, assign tasks, organize milestones, and monitor real-time progress using weightage-based tracking for precise project completion insights.",
                            img: "/images/startups/icons/agiletask.png",
                        },
                        {
                            title: "Employee Self-Service (ESS)",
                            desc: "Let employees manage leave, on-duty, overtime, expenses, and attendance corrections directly from mobile or web, reducing dependency on HR and managers.",
                            img: "/images/startups/icons/timesheet.png",
                        },
                        {
                            title: "Manager Command Center",
                            desc: "A unified approval hub where managers can review tasks, timesheets, leave, overtime, and expenses, supported by real-time team insights and notifications.",
                            img: "/images/startups/icons/selfservice.png",
                        },
                        {
                            title: "Competency & Assessment Suite",
                            desc: "Create structured assessments with categories, question groups, pass criteria, and scored evaluations to measure employee skills, performance, and growth paths.",
                            img: "/images/startups/icons/resource.png",
                        },
                        {
                            title: "Resource Allocation & Workload Planning",
                            desc: "Assign employees to tasks or projects based on skills, availability, and workload distribution to balance responsibilities and improve delivery efficiency.",
                            img: "/images/startups/icons/hrpayroll.png",
                        },
                        {
                            title: "Escalation & Issue Management",
                            desc: "Automatically flag delays, bottlenecks, and unresolved issues to higher management using escalation rules that maintain accountability and project momentum.",
                            img: "/images/startups/icons/escalationmanagement.png",
                        },
                        {
                            title: "Dashboards & Insights",
                            desc: "Get real-time, role-based dashboards for employees, managers, and project heads, giving a clear view of tasks, attendance, timelines, and productivity metrics.",
                            img: "/images/startups/icons/managerdashboards.png",
                        },
                        {
                            title: "Reports, Exports & Integrations",
                            desc: "Download payroll-ready attendance files, timesheets, project reports, and connect ATM with your existing systems through seamless API integrations.",
                            img: "/images/startups/icons/integrations.png",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="
          bg-white rounded-xl shadow border
          transition-all duration-300
          hover:border-[#167F8C] hover:bg-gray-50 hover:shadow-lg
          hover:-translate-y-1 hover:scale-[1.01]
          group
        "
                        >
                            <div
                                className="
            bg-gradient-to-r from-[#0A485E] to-[#167F8C]
            text-white p-4 rounded-t-xl
            flex items-center gap-3
          "
                            >
                                <Image
                                    src={item.img}
                                    width={45}
                                    height={45}
                                    alt=""
                                    className="transition-all duration-300 group-hover:-translate-y-[3px]"
                                />
                                <h3 className="font-semibold text-[14px] leading-tight">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="p-4 text-gray-700 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
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
  ">
                {/* Section Title */}
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl lg:text-6xl font-bold text-[#003C71]">
                        Tiny Mobile Apps
                    </h2>
                    <p className="text-black-100 mt-3 font-bold">
                        Lightweight solutions for faster workflows
                    </p>
                </div>

                {/* MAIN FLEX CONTAINER — LEFT IMAGES + RIGHT GRID */}
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                    {/* LEFT SIDE — IMAGES */}
                    <div className="flex flex-col items-center mt-5 gap-10 lg:w-1/4">
                        <img
                            src="/images/home/Tinyapps0.png"
                            alt="App Screenshot 1"
                            className="rounded-xl shadow-md border w-[180px] h-auto"
                        />
                        <img
                            src="/images/home/tinyapps.png"
                            alt="App Screenshot 2"
                            className="rounded-xl shadow-md border w-[180px] h-auto"
                        />
                    </div>

                    {/* RIGHT SIDE — 10 CARD GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:w-5/2">

                        {/* CARD 1 */}
                        <div className="group relative rounded-3xl p-7 bg-[#F8FAFC] border border-gray-200
shadow-[10px_10px_25px_rgba(0,0,0,0.08),-10px_-10px_25px_rgba(255,255,255,0.9)]
transition-all duration-500 ease-out
hover:shadow-[0_0_40px_rgba(22,127,140,0.35)]
hover:-translate-y-4 hover:scale-[1.05]">

                            {/* Floating icon circle */}
                            <div className="mx-auto -mt-12 w-24 h-24 rounded-3xl 
    bg-gradient-to-br from-[#0A485E] to-[#167F8C]
    flex items-center justify-center shadow-xl shadow-[#0A485E]/40 border border-white/20
    transition-all duration-500 ease-out
    group-hover:-translate-y-2 group-hover:scale-[1.08] group-hover:shadow-[0_0_25px_rgba(22,127,140,0.6)]">

                                <Image
                                    src="/images/home/icons/Enterprise.png"
                                    width={45}
                                    height={45}
                                    alt="ATM Enterprise Icon"
                                    className="drop-shadow-lg"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <h3 className="text-[20px] font-semibold text-[#003C71] tracking-wide">
                                    Enterprise
                                </h3>

                                <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                                    Manage company-wide operations with centralized tools and real-time insights.
                                </p>
                            </div>
                        </div>


                        <div className="group relative rounded-3xl p-7 bg-[#F8FAFC] border border-gray-200
shadow-[10px_10px_25px_rgba(0,0,0,0.08),-10px_-10px_25px_rgba(255,255,255,0.9)]
transition-all duration-500 ease-out
hover:shadow-[0_0_40px_rgba(22,127,140,0.35)]
hover:-translate-y-4 hover:scale-[1.05]">

                            {/* Floating icon circle */}
                            <div className="mx-auto -mt-12 w-24 h-24 rounded-3xl 
    bg-gradient-to-br from-[#0A485E] to-[#167F8C]
    flex items-center justify-center shadow-xl shadow-[#0A485E]/40 border border-white/20
    transition-all duration-500 ease-out
    group-hover:-translate-y-2 group-hover:scale-[1.08] group-hover:shadow-[0_0_25px_rgba(22,127,140,0.6)]">
                                <Image
                                    src="/images/home/icons/TeamActivity.png"
                                    width={45}
                                    height={45}
                                    alt="ATM Team Activities Icon"
                                    className="drop-shadow-lg"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <h3 className="text-[20px] font-semibold text-[#003C71] tracking-wide whitespace-nowrap">
                                    Team<br /> Activities
                                </h3>

                                <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                                    Track team schedules, tasks, events, and activity reports in one place.
                                </p>
                            </div>
                        </div>

                        <div className="group relative rounded-3xl p-7 bg-[#F8FAFC] border border-gray-200
shadow-[10px_10px_25px_rgba(0,0,0,0.08),-10px_-10px_25px_rgba(255,255,255,0.9)]
transition-all duration-500 ease-out
hover:shadow-[0_0_40px_rgba(22,127,140,0.35)]
hover:-translate-y-4 hover:scale-[1.05]">

                            {/* Floating icon circle */}
                            <div className="mx-auto -mt-12 w-24 h-24 rounded-3xl 
    bg-gradient-to-br from-[#0A485E] to-[#167F8C]
    flex items-center justify-center shadow-xl shadow-[#0A485E]/40 border border-white/20
    transition-all duration-500 ease-out
    group-hover:-translate-y-2 group-hover:scale-[1.08] group-hover:shadow-[0_0_25px_rgba(22,127,140,0.6)]">
                                <Image
                                    src="/images/home/icons/CRM.png"
                                    width={45}
                                    height={45}
                                    alt="ATM CRM Icon"
                                    className="drop-shadow-lg"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <h3 className="text-[20px] font-semibold text-[#003C71] tracking-wide">
                                    CRM
                                </h3>

                                <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                                    Manage leads, customers, interactions, and follow-ups with an easy CRM workflow.
                                </p>
                            </div>
                        </div>

                        <div className="group relative rounded-3xl p-7 bg-[#F8FAFC] border border-gray-200
shadow-[10px_10px_25px_rgba(0,0,0,0.08),-10px_-10px_25px_rgba(255,255,255,0.9)]
transition-all duration-500 ease-out
hover:shadow-[0_0_40px_rgba(22,127,140,0.35)]
hover:-translate-y-4 hover:scale-[1.05]">

                            {/* Floating icon circle */}
                            <div className="mx-auto -mt-12 w-24 h-24 rounded-3xl 
    bg-gradient-to-br from-[#0A485E] to-[#167F8C]
    flex items-center justify-center shadow-xl shadow-[#0A485E]/40 border border-white/20
    transition-all duration-500 ease-out
    group-hover:-translate-y-2 group-hover:scale-[1.08] group-hover:shadow-[0_0_25px_rgba(22,127,140,0.6)]">
                                <Image
                                    src="/images/home/icons/Task.png"
                                    width={45}
                                    height={45}
                                    alt="ATM Task Icon"
                                    className="drop-shadow-lg"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <h3 className="text-[20px] font-semibold text-[#003C71] tracking-wide">
                                    Task
                                </h3>

                                <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                                    Create, assign, and monitor tasks to keep teams aligned and productive.
                                </p>
                            </div>
                        </div>

                        <div className="group relative rounded-3xl p-7 bg-[#F8FAFC] border border-gray-200
shadow-[10px_10px_25px_rgba(0,0,0,0.08),-10px_-10px_25px_rgba(255,255,255,0.9)]
transition-all duration-500 ease-out
hover:shadow-[0_0_40px_rgba(22,127,140,0.35)]
hover:-translate-y-4 hover:scale-[1.05]">

                            {/* Floating icon circle */}
                            <div className="mx-auto -mt-12 w-24 h-24 rounded-3xl 
    bg-gradient-to-br from-[#0A485E] to-[#167F8C]
    flex items-center justify-center shadow-xl shadow-[#0A485E]/40 border border-white/20
    transition-all duration-500 ease-out
    group-hover:-translate-y-2 group-hover:scale-[1.08] group-hover:shadow-[0_0_25px_rgba(22,127,140,0.6)]">
                                <Image
                                    src="/images/home/icons/School.png"
                                    width={45}
                                    height={45}
                                    alt="ATM School Icon"
                                    className="drop-shadow-lg"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <h3 className="text-[20px] font-semibold text-[#003C71] tracking-wide">
                                    School
                                </h3>

                                <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                                    Centralized training modules and knowledge resources for your entire team.
                                </p>
                            </div>
                        </div>

                        <div className="group relative rounded-3xl p-7 bg-[#F8FAFC] border border-gray-200
shadow-[10px_10px_25px_rgba(0,0,0,0.08),-10px_-10px_25px_rgba(255,255,255,0.9)]
transition-all duration-500 ease-out
hover:shadow-[0_0_40px_rgba(22,127,140,0.35)]
hover:-translate-y-4 hover:scale-[1.05]">

                            {/* Floating icon circle */}
                            <div className="mx-auto -mt-12 w-24 h-24 rounded-3xl 
    bg-gradient-to-br from-[#0A485E] to-[#167F8C]
    flex items-center justify-center shadow-xl shadow-[#0A485E]/40 border border-white/20
    transition-all duration-500 ease-out
    group-hover:-translate-y-2 group-hover:scale-[1.08] group-hover:shadow-[0_0_25px_rgba(22,127,140,0.6)]">
                                <Image
                                    src="/images/home/icons/CRM.png"
                                    width={45}
                                    height={45}
                                    alt="ATM Request Icon"
                                    className="drop-shadow-lg"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <h3 className="text-[20px] font-semibold text-[#003C71] tracking-wide">
                                    Request
                                </h3>

                                <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                                    Submit and approve internal requests with a fast and organized workflow.
                                </p>
                            </div>
                        </div>

                        <div className="group relative rounded-3xl p-7 bg-[#F8FAFC] border border-gray-200
shadow-[10px_10px_25px_rgba(0,0,0,0.08),-10px_-10px_25px_rgba(255,255,255,0.9)]
transition-all duration-500 ease-out
hover:shadow-[0_0_40px_rgba(22,127,140,0.35)]
hover:-translate-y-4 hover:scale-[1.05]">

                            {/* Floating icon circle */}
                            <div className="mx-auto -mt-12 w-24 h-24 rounded-3xl 
    bg-gradient-to-br from-[#0A485E] to-[#167F8C]
    flex items-center justify-center shadow-xl shadow-[#0A485E]/40 border border-white/20
    transition-all duration-500 ease-out
    group-hover:-translate-y-2 group-hover:scale-[1.08] group-hover:shadow-[0_0_25px_rgba(22,127,140,0.6)]">
                                <Image
                                    src="/images/home/icons/PriceCatalog.png"
                                    width={45}
                                    height={45}
                                    alt="ATM Price Catalog Icon"
                                    className="drop-shadow-lg"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <h3 className="text-[20px] font-semibold text-[#003C71] tracking-wide">
                                    Price Catalog
                                </h3>

                                <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                                    Access up-to-date product and service pricing anytime.
                                </p>
                            </div>
                        </div>

                        <div className="group relative rounded-3xl p-7 bg-[#F8FAFC] border border-gray-200
shadow-[10px_10px_25px_rgba(0,0,0,0.08),-10px_-10px_25px_rgba(255,255,255,0.9)]
transition-all duration-500 ease-out
hover:shadow-[0_0_40px_rgba(22,127,140,0.35)]
hover:-translate-y-4 hover:scale-[1.05]">

                            {/* Floating icon circle */}
                            <div className="mx-auto -mt-12 w-24 h-24 rounded-3xl 
    bg-gradient-to-br from-[#0A485E] to-[#167F8C]
    flex items-center justify-center shadow-xl shadow-[#0A485E]/40 border border-white/20
    transition-all duration-500 ease-out
    group-hover:-translate-y-2 group-hover:scale-[1.08] group-hover:shadow-[0_0_25px_rgba(22,127,140,0.6)]">
                                <Image
                                    src="/images/home/icons/StockTake.png"
                                    width={45}
                                    height={45}
                                    alt="ATM Stock Take Icon"
                                    className="drop-shadow-lg"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <h3 className="text-[20px] font-semibold text-[#003C71] tracking-wide">
                                    Stock Take
                                </h3>

                                <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                                    Track inventory levels, perform stock counts, and maintain accurate warehouse data.
                                </p>
                            </div>
                        </div>

                        <div className="group relative rounded-3xl p-7 bg-[#F8FAFC] border border-gray-200
shadow-[10px_10px_25px_rgba(0,0,0,0.08),-10px_-10px_25px_rgba(255,255,255,0.9)]
transition-all duration-500 ease-out
hover:shadow-[0_0_40px_rgba(22,127,140,0.35)]
hover:-translate-y-4 hover:scale-[1.05]">

                            {/* Floating icon circle */}
                            <div className="mx-auto -mt-12 w-24 h-24 rounded-3xl 
    bg-gradient-to-br from-[#0A485E] to-[#167F8C]
    flex items-center justify-center shadow-xl shadow-[#0A485E]/40 border border-white/20
    transition-all duration-500 ease-out
    group-hover:-translate-y-2 group-hover:scale-[1.08] group-hover:shadow-[0_0_25px_rgba(22,127,140,0.6)]">
                                <Image
                                    src="/images/home/icons/Tickets.png"
                                    width={45}
                                    height={45}
                                    alt="ATM Scrab Icon"
                                    className="drop-shadow-lg"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <h3 className="text-[20px] font-semibold text-[#003C71] tracking-wide">
                                    Tickets
                                </h3>

                                <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                                    Efficiently track and resolve all ATM-related issues with a streamlined ticketing system.
                                </p>
                            </div>
                        </div>

                        <div className="group relative rounded-3xl p-7 bg-[#F8FAFC] border border-gray-200
shadow-[10px_10px_25px_rgba(0,0,0,0.08),-10px_-10px_25px_rgba(255,255,255,0.9)]
transition-all duration-500 ease-out
hover:shadow-[0_0_40px_rgba(22,127,140,0.35)]
hover:-translate-y-4 hover:scale-[1.05]">

                            {/* Floating icon circle */}
                            <div className="mx-auto -mt-12 w-24 h-24 rounded-3xl 
    bg-gradient-to-br from-[#0A485E] to-[#167F8C]
    flex items-center justify-center shadow-xl shadow-[#0A485E]/40 border border-white/20
    transition-all duration-500 ease-out
    group-hover:-translate-y-2 group-hover:scale-[1.08] group-hover:shadow-[0_0_25px_rgba(22,127,140,0.6)]">
                                <Image
                                    src="/images/home/icons/PettyCash.png"
                                    width={45}
                                    height={45}
                                    alt="Petty Cash Icon"
                                    className="drop-shadow-lg"
                                />
                            </div>

                            <div className="mt-6 text-center">
                                <h3 className="text-[20px] font-semibold text-[#003C71] tracking-wide">
                                    Petty Cash
                                </h3>

                                <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">
                                    Manage small expenses with a simple and transparent petty cash system.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section
                className="
    relative w-full
    min-h-[700px] md:min-h-[800px] lg:min-h-[900px]
    bg-cover
    bg-[center_80%] md:bg-center
    flex flex-col items-center justify-start
    pt-16 md:pt-24
    pb-20 md:pb-0
    overflow-hidden
  "
            >
                {/* HEADING */}
                <div className="mt-4 md:mt-8 px-4 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#003C71] leading-snug md:leading-tight">
                        <span className="block">
                            A Simple, Powerful Workflow That Connects
                        </span>
                        <span className="block mx-auto">
                            Your Entire Team
                        </span>
                    </h2>
                </div>

                {/* FULL-WIDTH IMAGE */}
                <div className="w-full flex justify-center mt-6 px-4">
                    <img
                        src="/images/home/infographic.webp"
                        alt="Section Image"
                        className="w-full max-w-[1400px] object-contain md:object-cover"
                    />
                </div>

                {/* BUTTONS */}
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto px-4">
                    <Link href="/demo" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-5 py-2.5 md:px-6 md:py-3 bg-[#003C71] text-white rounded-xl shadow hover:bg-[#002B52] transition text-sm md:text-base">
                            Talk to Our EXPERT
                        </button>
                    </Link>

                    <button
                        onClick={() => setShowPopup(true)}
                        className="w-full sm:w-auto px-5 py-2.5 md:px-6 md:py-3 bg-[#003C71] text-white rounded-xl shadow hover:bg-[#002B52] transition text-sm md:text-base"
                    >
                        Book a Free Demo
                    </button>
                </div>
            </section>

            <section
                className="
    relative w-full
    min-h-[650px] md:min-h-[750px] lg:min-h-[850px]
    bg-cover
    bg-[center_80%] md:bg-center
    flex flex-col items-center justify-start
    pt-12 sm:pt-16 md:pt-24
    pb-16 sm:pb-20
    overflow-hidden
  "
            >
                {/* Subtle glow backdrop */}
                <div
                    className="
      absolute -top-40 sm:-top-32
      left-1/2 -translate-x-1/2
      w-[280px] sm:w-[360px] md:w-[460px] lg:w-[520px]
      h-[280px] sm:h-[360px] md:h-[460px] lg:h-[520px]
      bg-yellow-100/30
      rounded-full blur-3xl
      pointer-events-none
    "
                />

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-14 relative z-10 text-gray-900 text-center px-4">
                    Client Reviews
                </h2>

                {/* Reviews Grid */}
                <div
                    className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-5 md:gap-6 lg:gap-8
      max-w-7xl
      w-full
      mx-auto
      relative z-10
      px-4
      items-stretch
    "
                >

                    {/* ================= Review 1 ================= */}
                    <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md border border-yellow-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <div className="text-[#F6B200] text-4xl sm:text-5xl leading-none mb-3">“</div>

                        <p className="text-gray-700 italic leading-relaxed space-y-2 flex-grow text-sm">
                            <span className="block font-medium text-gray-800">
                                A Wonderful Experience Working With Beyondex
                            </span>

                            <span className="block">
                                Working with Beyondex on the development of the CREA app, the CREA web application, and the Reflux landing page has been one of the most seamless and rewarding experiences for us.
                            </span>

                            <span className="block">
                                From the very beginning, Govee, the Founder & MD, has been the guiding star of this entire journey. His clarity, patience, and leadership created an environment where every challenge felt manageable and every idea felt valued.
                            </span>

                            <span className="block">
                                A very special mention goes to Neelakrishna. He has been a constant pillar throughout the entire development process — guiding the team with calm confidence, taking on countless changes without hesitation, and ensuring everything stayed on track.
                            </span>

                            <span className="block">
                                Our heartfelt appreciation also goes to Kabilan, Keerthana, Sathish, Mughesh, Safin, and the rest of the talented Beyondex team.
                            </span>

                            <span className="block">
                                Thank you, Beyondex, for bringing CREA and Reflux to life with such dedication and heart.
                            </span>
                        </p>

                        <h3 className="mt-4 font-semibold text-gray-900 border-t pt-3 text-sm">
                            CREA Team
                        </h3>
                    </div>

                    {/* ================= Review 2 ================= */}
                    <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md border border-yellow-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <div className="text-[#F6B200] text-4xl sm:text-5xl leading-none mb-3">“</div>

                        <p className="text-gray-700 italic leading-relaxed space-y-2 flex-grow text-sm">
                            <span className="block">
                                We partnered with Beyondex Solutions Pvt. Ltd to develop a custom web application tailored to our business needs, and the experience was very positive.
                            </span>

                            <span className="block">
                                The development work was solid and well executed, and the team demonstrated strong technical expertise and a clear understanding of our requirements.
                            </span>

                            <span className="block">
                                During the later stages of the project, we identified several issues that required additional testing and rounds of fixes.
                            </span>

                            <span className="block">
                                Beyondex handled this constructively, working closely with us to resolve the problems and refine the solution.
                            </span>

                            <span className="block">
                                Overall, Beyondex Solutions proved to be a capable and reliable partner for custom development.
                            </span>
                        </p>

                        <h3 className="mt-4 font-semibold text-gray-900 border-t pt-3 text-sm">
                            Plymouth
                        </h3>
                    </div>

                    {/* ================= Review 3 ================= */}
                    <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md border border-yellow-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <div className="text-[#F6B200] text-4xl sm:text-5xl leading-none mb-3">“</div>

                        <p className="text-gray-700 italic leading-relaxed space-y-2 flex-grow text-sm">
                            <span className="block">
                                Beyondex Solutions Pvt. Ltd. delivered a powerful and well-structured Leather Industry Software that seamlessly aligns with our operational workflows.
                            </span>

                            <span className="block">
                                The application is stable, efficient, and easy for our teams to adopt, significantly improving day-to-day process management.
                            </span>

                            <span className="block">
                                Their team showed deep technical capability and a strong understanding of industry-specific challenges.
                            </span>

                            <span className="block">
                                The collaboration was smooth, with consistent communication and timely support throughout the project lifecycle.
                            </span>

                            <span className="block">
                                We consider Beyondex a reliable technology partner capable of delivering high-quality, business-focused software solutions.
                            </span>
                        </p>

                        <h3 className="mt-4 font-semibold text-gray-900 border-t pt-3 text-sm">
                            Vamse PJ
                        </h3>
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
                            {/* Book a Demo */}
                            <button
                                onClick={() => setShowPopup(true)}
                                className="bg-[#F6A800] text-black w-[140px] h-[38px] rounded-full font-semibold text-xs flex items-center justify-center"
                            >
                                Book a Demo
                            </button>


                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/919444408804"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-[#F6A800] text-[#F6A800] w-[260px] h-[38px] rounded-full font-semibold text-xs flex items-center justify-center whitespace-nowrap hover:bg-[#F6A800] hover:text-black transition"
                            >
                                Say Hi To Our Expert: +91 94444 08804
                            </a>
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
    );
}

