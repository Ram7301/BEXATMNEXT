"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const brands: string[] = [
    "/images/home/crea.png",
    "/images/home/electroflux.png",
    "/images/home/pss.png",
    "/images/home/trimurthi.png",
    "/images/home/trinity.png",
    "/images/home/yjelite.png",
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
                        TrailType: industry,
                        Description: "",
                        CompanyName: "",
                        PreferredDateTime: "",
                        OrganisationName: organisation,
                        CompanyVertical: "",
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
    relative w-full bg-cover bg-center
    pt-10 md:pt-12 pb-10 md:pb-12
    px-4 sm:px-6 md:px-20
    max-[900px]:bg-top
  "
                style={{
                    backgroundImage: "url('/images/home/mainbanner.webp')",
                    backgroundPositionY: "-15px",
                }}
            >
                {/* MOBILE ONLY DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/50 md:bg-transparent"></div>

                <div className="
    relative grid md:grid-cols-2
    gap-8 md:gap-10
    items-center
    max-[900px]:grid-cols-1
  ">

                    {/* LEFT CONTENT */}
                    <div className="text-white max-w-xl">

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
                            <div
                                className="
            w-full bg-[#0C4867] rounded-xl
            p-2 md:p-4
            shadow-lg
            flex flex-col md:flex-row
            justify-between items-center
            gap-2 md:gap-0
            max-w-[260px] sm:max-w-[320px] md:max-w-full
            mx-auto md:mx-0
          "
                            >

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
                                <Link href="/apartment-society-management-software" className="flex-1">
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

            <section className="w-screen bg-[#F5FBFA] py-12 md:py-16 overflow-hidden">

                {/* Heading */}
                <div className="text-center mb-6 md:mb-10 px-4">
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-4 leading-snug md:leading-tight"
                        style={{ color: "#003C71" }}
                    >
                        Trusted by Teams Across Startups, Construction Sites &amp;<br className="hidden md:block" />
                        Educational Institutions
                    </h2>

                    <p className="font-bold text-[#425466] text-sm md:text-base">
                        Empowering diverse teams with reliable tools to streamline projects,
                        people, and daily operations.
                    </p>
                </div>

                {/* Marquee (MOBILE + DESKTOP) */}
                <div className="relative w-full overflow-hidden mt-6 md:mt-20">
                    <div className="marquee-track">
                        {[...brands, ...brands, ...brands].map((logo, index) => (
                            <div key={index} className="marquee-item">
                                <Image
                                    src={logo}
                                    alt="Brand"
                                    width={260}
                                    height={90}
                                    className="
              object-contain
              w-[160px] h-[60px]
              md:w-[220px] md:h-[75px]
              lg:w-[260px] lg:h-[90px]
            "
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            <section className="py-10 px-6 md:px-20 bg-[#F8FAFC]">

                {/* TITLE + SUBTITLE */}
                <div className="text-center max-w-5xl mx-auto -mt-8 mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "#003C71" }}>
                        Solutions Tailored to Your Industry
                    </h2>

                    <p className="text-lg leading-relaxed" style={{ color: "#003C71" }}>
                        Whether you lead a startup, manage construction and facility teams, or operate an educational institution,
                        ATM aligns perfectly with your operational workflow
                    </p>
                </div>

                {/* 3 CARDS ROW */}

                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
                        }

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

                                {/* Title with exact blue color */}
                                <h3 className="text-xl font-bold mb-2" style={{ color: "#0A436A" }}>
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed" style={{ color: "#0A436A" }}>
                                    {card.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>


                {/* STATS ROW */}
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mt-16 text-center">

                    {/* 1 */}
                    <div className="flex items-center gap-3">
                        <h3 className="text-6xl font-extrabold" style={{ color: "#0A436A" }}>
                            <Counter end={20} />
                            +
                        </h3>
                        <p className="text-lg font-medium" style={{ color: "#0A436A" }}>
                            Powerful <br /> Modules
                        </p>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-[#0A436A]/30"></div>

                    {/* 2 */}
                    <div className="flex items-center gap-3">
                        <h3 className="text-6xl font-extrabold" style={{ color: "#0A436A" }}>
                            <Counter end={10} isK={true} />
                        </h3>
                        <p className="text-lg font-medium" style={{ color: "#0A436A" }}>
                            Task <br /> Tracked
                        </p>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-[#0A436A]/30"></div>

                    {/* 3 */}
                    <div className="flex items-center gap-3">
                        <h3 className="text-6xl font-extrabold" style={{ color: "#0A436A" }}>
                            <Counter end={99} />%
                        </h3>
                        <p className="text-lg font-medium" style={{ color: "#0A436A" }}>
                            Faster <br /> Approval
                        </p>
                    </div>

                    <div className="hidden md:block h-10 w-px bg-[#0A436A]/30"></div>

                    {/* 4 */}
                    <div className="flex items-center gap-3">
                        <h3 className="text-6xl font-extrabold" style={{ color: "#0A436A" }}>
                            <Counter end={15} />+
                        </h3>
                        <p className="text-lg font-medium" style={{ color: "#0A436A" }}>
                            Industry <br /> Served
                        </p>
                    </div>

                </div>
            </section>

            <section className="py-10 px-6 md:px-20 max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT CIRCULAR GRAPHIC */}
                    <div className="flex justify-center lg:justify-start lg:-mt-20 lg:-ml-20">
                        <img
                            src="/images/home/whybexatm1.webp"
                            alt="BexATM Left Graphic"
                            className="w-[750px] sm:w-[900px] md:w-[1050px] lg:w-[1150px] xl:w-[1300px] max-w-none"
                        />
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:-ml-45">

                        {/* CENTER CONTENT */}
                        <div className="space-y-20 w-full">

                            <div className="flex items-start gap-3 lg:-ml-15">
                                <div className="w-2 h-18 bg-green-500 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold text-lg">Unified System for All Operations</h3>
                                    <p className="text-gray-700">Manage projects, attendance, and HR from one connected platform.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-2 h-18 bg-blue-500 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold text-lg">Real-Time Attendance</h3>
                                    <p className="text-gray-700">Every check-in updates task progress and team availability instantly.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-2 h-18 bg-yellow-500 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold text-lg">End-to-End Visibility & Control</h3>
                                    <p className="text-gray-700">Track work, teams, and projects in real time for faster decisions.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 lg:-ml-15">
                                <div className="w-2 h-18 bg-orange-500 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold text-lg">Built for Field, Office & Hybrid Teams</h3>
                                    <p className="text-gray-700">Seamless for on-site crews, remote staff, and multi-location teams.</p>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT SMALL PANEL */}
                        <div className="flex flex-col items-start ml-5 space-y-6 w-full max-w-xs">

                            <h2 className="text-3xl md:text-6xl lg:-mt-15 font-bold text-[#003C71]">
                                Why ATM?
                            </h2>

                            <img
                                src="/images/home/whybexatm2.webp"
                                alt="Team working"
                                className="rounded-xl shadow-md w-full h-64 object-cover"
                            />

                            <p className="text-sm md:text-base text-black font-bold leading-snug lg:-mt-5">
                                The only platform that combines Project Management + Time Tracking + HR Operations.
                            </p>

                            <p className="text-gray-700 leading-relaxed lg:-mt-5">
                                Unlike traditional project tools, ATM<br />
                                connects your project work with real on-ground<br />
                                workforce data — ensuring complete visibility,<br />
                                accountability, and productivity.
                            </p>

                            <Link href="/demo">
                                <button className="px-6 py-3 bg-[#003C71] text-white rounded-xl shadow hover:bg-[#002B52] transition">
                                    Let&apos;s Start – It&apos;s FREE
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-10 px-6 lg:px-12">

                {/* Section Title */}
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl lg:text-6xl font-bold text-[#003C71]">
                        Core Modules of ATM
                    </h2>
                    <p className="text-black-100 mt-3 font-bold">
                        Powerful Modules for Complete Operational Control
                    </p>
                </div>

                {/* MODULE GRID */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                    {/* 1 — Agile Task & Sprint Management */}
                    <div className="bg-white rounded-xl shadow border transition-all duration-300 
                hover:border-[#167F8C] hover:bg-gray-50 hover:shadow-lg 
                hover:-translate-y-1 hover:scale-[1.01] group">

                        <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl 
                    flex items-center gap-3">

                            <Image
                                src="/images/startups/icons/clients.png"
                                width={45}
                                height={45}
                                alt=""
                                className="transition-all duration-300 group-hover:-translate-y-[3px]"
                            />

                            <h3 className="font-semibold text-[14px]">Human Resources</h3>
                        </div>

                        <p className="p-4 text-gray-700 text-sm leading-relaxed">
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
            </section>

            <section className="bg-white py-10 px-6 lg:px-12">
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

            <section className="w-full py-6 px-4 md:px-6 flex flex-col items-center text-center bg-white">

                {/* HEADING */}
                <div className="mt-4 md:mt-8 space-y-2 px-2">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#003C71] leading-snug md:leading-tight">
                        A Simple, Powerful Workflow That Connects <br className="hidden md:block" />
                        Your Entire Team
                    </h2>
                </div>

                {/* FULL-WIDTH IMAGE */}
                <div className="w-full flex justify-center mt-6">
                    <img
                        src="/images/home/infographic.webp"
                        alt="Section Image"
                        className="w-full max-w-[1400px] object-contain md:object-cover"
                    />
                </div>

                {/* BUTTONS */}
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">

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

            <footer className="bg-black text-white pt-14 px-4 md:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">

                    {/* 1 — LOGO + DESCRIPTION */}
                    <div className="col-span-1 lg:col-span-1">
                        <Image
                            src="/images/header/bexatm2.png"
                            alt="ATM Logo"
                            width={150}
                            height={65}
                            className="object-contain mb-4"
                        />

                        <p className="text-sm leading-relaxed opacity-80 mb-5 pr-0 md:pr-2 max-w-full md:max-w-sm">
                            ATM is an all-in-one platform for project management, team productivity, and workforce tracking.
                            It offers integrated tools for tasks, attendance, HR, Agile Project Management, and AI-powered workflows,
                            helping startups, construction teams, and resident communities operate smarter and achieve results faster.
                        </p>

                        <h3 className="text-base font-semibold mb-2">Follow Us</h3>
                        <div className="flex gap-4 sm:gap-3">
                            <a href="https://linkedin.com" target="_blank" className="hover:scale-110 transition">
                                <FaLinkedinIn size={24} color="#0077B5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" className="hover:scale-110 transition">
                                <FaInstagram size={24} color="#E1306C" />
                            </a>
                            <a href="https://youtube.com" target="_blank" className="hover:scale-110 transition">
                                <FaYoutube size={24} color="#FF0000" />
                            </a>
                        </div>
                    </div>

                    {/* 2 — PRODUCTS */}
                    <div>
                        <h3 className="text-xl font-semibold mb-1">Our Products</h3>
                        <div className="w-10 h-1 bg-[#00D0D0] mb-3"></div>
                        <ul className="space-y-1 text-sm opacity-80 list-disc ml-3">
                            <li>AI Project Management for Startups</li>
                            <li>Construction Project Management</li>
                            <li>Apartment Society Management</li>
                        </ul>
                    </div>

                    {/* 3 — FEATURES */}
                    <div>
                        <h3 className="text-xl font-semibold mb-1">Key Features</h3>
                        <div className="w-10 h-1 bg-[#00D0D0] mb-3"></div>
                        <ul className="space-y-1 text-sm opacity-80 list-disc ml-3">
                            <li>Agile Project Management</li>
                            <li>Task & Workflow</li>
                            <li>Back Office (HRM)</li>
                            <li>Time & Attendance</li>
                            <li>Geo Attendance</li>
                            <li>Employee Self Service</li>
                            <li>Manager Desk</li>
                            <li>Assessment System</li>
                            <li>Cost & Budget</li>
                            <li>AI Insights & Dashboards</li>
                            <li>Dashboard</li>
                        </ul>
                    </div>

                    {/* 4 — QUICK LINKS */}
                    <div>
                        <h3 className="text-xl font-semibold mb-1">Quick Links</h3>
                        <div className="w-10 h-1 bg-[#00D0D0] mb-3"></div>

                        <ul className="space-y-1 text-sm opacity-80 list-disc ml-3">
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Pricing</li>
                            <li>Case Studies</li>
                            <li className="font-semibold">Customer Support</li>
                            <li className="font-semibold">Start Free Plan</li>
                            <li>Blog Post</li>
                        </ul>

                        <button
                            onClick={() => setShowPopup(true)}
                            className="bg-[#F6A800] text-black text-sm px-5 py-1.5 mt-14 rounded-full font-semibold whitespace-nowrap mx-auto md:mx-10 block"
                        >
                            Book a Demo
                        </button>
                    </div>

                    {/* 5 — CONTACT */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold mb-1">Contact Us</h3>
                        <div className="w-10 h-1 bg-[#00D0D0] mb-3"></div>

                        <p className="text-sm opacity-80 leading-relaxed mb-10 break-words">
                            #25/31, Lakshmi Nagar II Main Road,<br />
                            Porur, Chennai, <br />
                            Tamil Nadu - 600116
                        </p>

                        <p className="text-sm font-semibold text-[#F6A800] mb-4 break-words">
                            Email: contact@bexatm.com
                        </p>

                        <p className="text-sm font-semibold text-[#F6A800] mb-3 break-words">
                            Phone: (+91)94444 08804
                        </p>

                        <div className="flex flex-wrap gap-3 mt-2">
                            <Button
                                asChild
                                variant="outline"
                                className="border border-[#F6A800] text-[#F6A800] text-sm px-5 py-1.5 mt-9 rounded-full font-semibold whitespace-nowrap mx-auto md:mx-0 md:-ml-20"
                            >
                                <a
                                    href="https://wa.me/919444408804"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Say Hi To Our Expert:
                                    <span className="ml-2 font-bold">(+91) 94444 08804</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Cyan Bar */}
                <div className="w-screen bg-[#00D0D0] h-4 mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"></div>

                {/* Copyright */}
                <div className="text-center py-4 text-xs opacity-70 bg-black">
                    © 2025 Beyondex Solutions Pvt Ltd.
                </div>
            </footer>

        </main>
    );
}

