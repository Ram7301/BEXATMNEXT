"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";


function Counter({ end, duration = 2000, isK = false }) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const [count, setCount] = useState(0);
    const animRef = useRef<number | null>(null);

    const startAnimation = () => {
        let start = 0;
        const step = () => {
            start += end / (duration / 16);

            if (start < end) {
                setCount(Math.floor(start));
                animRef.current = requestAnimationFrame(step);
            } else {
                setCount(end);
                cancelAnimationFrame(animRef.current!);
            }
        };
        step();
    };

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Start from 0 every time you scroll into view
                    setCount(0);
                    startAnimation();
                } else {
                    // Reset when it goes out of view
                    setCount(0);
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <span ref={ref}>
            {isK ? `${count}K` : count}
        </span>
    );
}

export default function BexATMHome() {
    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-white text-black">
            {/* HERO SECTION */}
            <section
                className="relative w-full bg-cover bg-center pt-32 pb-20 px-6 md:px-20"
                style={{ backgroundImage: "url('/images/home/mainbanner.webp')" }}
            >
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div className="text-white max-w-xl">

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-10 mb-1">
                            ONE PLATFORM<br />TO MANAGE YOUR
                        </h1>

                        {/* Sub-heading */}
                        <div className="bg-white text-gray-900 inline-block px-[25px] py-[10px] rounded-lg font-semibold mb-6 shadow-md">
                            Projects – People – Budget
                        </div>



                        {/* Paragraph */}
                        <p className="text-lg leading-relaxed mb-8">
                            Empower your teams with an end-to-end system for project execution, attendance, workforce management,
                            and real-time insights — built for
                            <span className="text-blue-400 font-semibold"> Startups</span>,
                            <span className="text-blue-400 font-semibold"> Communities</span>, and
                            <span className="text-blue-400 font-semibold"> Construction teams</span>.
                        </p>

                        {/* Industry Image */}
                        <div className="mt-10">
                            <Image
                                src="/images/home/industryicon.png"
                                alt="Industries"
                                width={800}
                                height={300}
                                className="mx-auto"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-10">
                            <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg">
                                Book a Free Demo
                            </button>
                            <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg">
                                Explore Use Cases
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-20 bg-[#F8FAFC]">
                {/* TITLE + SUBTITLE */}
                <div className="text-center max-w-5xl mx-auto -mt-8 mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: "#003C71" }}>
                        Solutions Tailored to Your Industry
                    </h2>

                    <p className="text-lg leading-relaxed" style={{ color: "#003C71" }}>
                        Whether you run a fast-growing startup, manage a residential community, or operate
                        multiple construction sites — BexATM adapts to your workflow
                    </p>
                </div>


                {/* 3 CARDS ROW */}
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {[
                        {
                            title: "Project Management for Startups & SMBs",
                            desc: "Agile workflows, team productivity, remote attendance & client deliverables.",
                            img: "/images/home/Startup.webp",
                        },
                        {
                            title: "Community Management Software",
                            desc: "Resident services, staff attendance, maintenance tracking & committee dashboards.",
                            img: "/images/home/Community.webp",
                        },
                        {
                            title: "Construction Project Management",
                            desc: "Site attendance, contractor tracking, DPR tasks & milestone-based progress.",
                            img: "/images/home/Construction.webp",
                        },
                    ].map((card, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition text-center"
                        >
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full rounded-xl mb-5 h-48 object-cover"
                            />

                            {/* Title with exact blue color */}
                            <h3
                                className="text-xl font-bold mb-2"
                                style={{ color: "#0A436A" }}
                            >
                                {card.title}
                            </h3>

                            {/* Description with same blue from subtitle */}
                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: "#0A436A" }}
                            >
                                {card.desc}
                            </p>
                        </div>
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

            <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">

                {/* 2 columns: left (image) + right (center + right stacked) */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT CIRCULAR GRAPHIC */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src="/images/home/whybexatm.webp"
                            alt="BexATM Left Graphic"
                            className="w-[500px] sm:w-[600px] md:w-[700px] lg:w-[750px] xl:w-[820px] max-w-none"
                        />
                    </div>

                    {/* RIGHT SECTION (center + right stacked horizontally on desktop) */}
                    <div className="flex flex-col -ml-45 lg:flex-row gap-12">

                        {/* CENTER CONTENT */}
                        <div className="space-y-10 w-full">

                            <div className="flex items-start gap-3 -ml-7">
                                <div className="w-2 h-10 bg-green-500 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold text-lg">Unified System for All Operations</h3>
                                    <p className="text-gray-700">Manage projects, attendance, and HR from one connected platform.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-2 h-10 bg-blue-500 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold text-lg">Real-Time Attendance</h3>
                                    <p className="text-gray-700">Every check-in updates task progress and team availability instantly.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-2 h-10 bg-yellow-500 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold text-lg">End-to-End Visibility & Control</h3>
                                    <p className="text-gray-700">Track work, teams, and projects in real time for faster decisions.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 -ml-7">
                                <div className="w-2 h-10 bg-orange-500 rounded-full"></div>
                                <div>
                                    <h3 className="font-semibold text-lg">Built for Field, Office & Hybrid Teams</h3>
                                    <p className="text-gray-700">Seamless for on-site crews, remote staff, and multi-location teams.</p>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT SMALL PANEL */}
                        <div className="flex flex-col items-start ml-5 space-y-6 w-full max-w-xs">

                            <h2 className="text-3xl md:text-4xl font-bold text-[#003C71]">
                                Why BexATM?
                            </h2>

                            <img
                                src="/images/home/whybexatm2.webp"
                                alt="Team working"
                                className="rounded-xl shadow-md w-full h-64 object-cover"
                            />

                            <p className="text-black-700 font-bold">
                                The only platform that combines Project Management + Time Tracking + HR Operations.
                            </p>

                            <p className="text-black-700 font-semibold leading-relaxed">
                                Unlike traditional project tools, BexATM<br />
                                connects your project work with real on-ground<br />
                                workforce data — ensuring complete visibility,<br />
                                accountability, and productivity.
                            </p>

                            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
                                Let&apos;s Start – It&apos;s FREE
                            </button>


                        </div>


                    </div>

                </div>
            </section>

            <section className="bg-white py-20 px-6 lg:px-12">
                {/* Section Title */}
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl lg:text-6xl font-bold text-[#003C71]">
                        Core Modules of BexATM
                    </h2>
                    <p className="text-black-100 mt-3 font-bold">
                        Powerful Modules for Complete Operational Control
                    </p>
                </div>

                {/* MODULE GRID */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                    {/* 1 — Agile Task & Sprint Management */}
                    <div className="bg-white rounded-xl shadow border">
                        <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                            <Image src="/images/startups/icons/clients.png" width={45} height={45} alt="" />
                            <h3 className="font-semibold text-[15px]">HR & Payroll
                                Hub</h3>
                        </div>
                        <p className="p-4 text-gray-700 text-sm leading-relaxed">
                            Centralize employee records,
                            leave policies, attendance
                            data, and payroll-ready
                            reports in one place, ensuring
                            smooth HR operations with
                            minimal manual work.
                        </p>
                    </div>

                    {/* 2 — Remote Team Attendance */}
                    <div className="bg-white rounded-xl shadow border">
                        <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                            <Image src="/images/startups/icons/remoteteam.png" width={45} height={45} alt="" />
                            <h3 className="font-semibold text-[15px]">Smart Time &
                                Attendance</h3>
                        </div>
                        <p className="p-4 text-gray-700 text-sm leading-relaxed">
                            Track attendance accurately
                            with biometrics, geofencing,

                            mobile check-ins, and shift-
                            based logging — eliminating

                            time fraud and boosting
                            workforce transparency.
                        </p>
                    </div>

                    {/* 3 — Projects & Client Deliverables */}
                    <div className="bg-white rounded-xl shadow border">
                        <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                            <Image src="/images/startups/icons/agiletask.png" width={45} height={45} alt="" />
                            <h3 className="font-semibold text-[15px]">Agile Project &
                                Task Management</h3>
                        </div>
                        <p className="p-4 text-gray-700 text-sm leading-relaxed">
                            Plan sprints, assign tasks,
                            organize milestones, and
                            monitor real-time progress
                            using weightage-based
                            tracking for precise project
                            completion insights.
                        </p>
                    </div>

                    {/* 4 — Timesheet-Based Billing */}
                    <div className="bg-white rounded-xl shadow border">
                        <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                            <Image src="/images/startups/icons/timesheet.png" width={45} height={45} alt="" />
                            <h3 className="font-semibold text-[15px]">Employee Self-
                                Service (ESS)</h3>
                        </div>
                        <p className="p-4 text-gray-700 text-sm leading-relaxed">
                            Let employees manage leave,
                            on-duty, overtime, expenses,
                            and attendance corrections
                            directly from mobile or web,
                            reducing dependency on HR
                            and managers.
                        </p>
                    </div>

                    {/* 5 — Employee Self-Service */}
                    <div className="bg-white rounded-xl shadow border">
                        <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                            <Image src="/images/startups/icons/selfservice.png" width={45} height={45} alt="" />
                            <h3 className="font-semibold text-[15px]">Manager
                                Command Center</h3>
                        </div>
                        <p className="p-4 text-gray-700 text-sm leading-relaxed">
                            A unified approval hub where
                            managers can review tasks,
                            timesheets, leave, overtime,
                            and expenses, supported by
                            real-time team insights and
                            notifications.
                        </p>
                    </div>

                    {/* 6 — Resource Allocation for Small Teams */}
                    <div className="bg-white rounded-xl shadow border">
                        <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                            <Image src="/images/startups/icons/resource.png" width={45} height={45} alt="" />
                            <h3 className="font-semibold text-[15px]">Competency &
                                Assessment Suite</h3>
                        </div>
                        <p className="p-4 text-gray-700 text-sm leading-relaxed">
                            Create structured assessments
                            with categories, question
                            groups, pass criteria, and
                            scored evaluations to measure
                            employee skills, performance,
                            and growth paths.
                        </p>
                    </div>

                    {/* 7 — Founder & Manager Dashboards */}
                    <div className="bg-white rounded-xl shadow border">
                        <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                            <Image src="/images/startups/icons/hrpayroll.png" width={45} height={45} alt="" />
                            <h3 className="font-semibold text-[15px]">Resource Allocation
                                & Workload Planning</h3>
                        </div>
                        <p className="p-4 text-gray-700 text-sm leading-relaxed">
                            Assign employees to tasks or
                            projects based on skills,
                            availability, and workload
                            distribution to balance
                            responsibilities and improve
                            delivery efficiency.
                        </p>
                    </div>

                    {/* 8 — Escalation Management */}
                    <div className="bg-white rounded-xl shadow border">
                        <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                            <Image src="/images/startups/icons/escalationmanagement.png" width={45} height={45} alt="" />
                            <h3 className="font-semibold text-[15px]">Escalation & Issue
                                Management</h3>
                        </div>
                        <p className="p-4 text-gray-700 text-sm leading-relaxed">
                            Automatically flag delays,
                            bottlenecks, and unresolved
                            issues to higher management
                            using escalation rules that
                            maintain accountability and
                            project momentum.
                        </p>
                    </div>

                    {/* 9 — HR & Payroll Alignment */}
                    <div className="bg-white rounded-xl shadow border">
                        <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                            <Image src="/images/startups/icons/managerdashboards.png" width={45} height={45} alt="" />
                            <h3 className="font-semibold text-[15px]">Dashboards &
                                Insights</h3>
                        </div>
                        <p className="p-4 text-gray-700 text-sm leading-relaxed">
                            Get real-time, role-based
                            dashboards for employees,
                            managers, and project heads,
                            giving a clear view of tasks,
                            attendance, timelines, and
                            productivity metrics.
                        </p>
                    </div>

                    {/* 10 — Integrations for Modern Startups */}
                    <div className="bg-white rounded-xl shadow border">
                        <div className="bg-gradient-to-r from-[#0A485E] to-[#167F8C] text-white p-4 rounded-t-xl flex items-center gap-3">
                            <Image src="/images/startups/icons/integrations.png" width={45} height={45} alt="" />
                            <h3 className="font-semibold text-[15px]">Reports, Exports &
                                Integrations</h3>
                        </div>
                        <p className="p-4 text-gray-700 text-sm leading-relaxed">
                            Download payroll-ready
                            attendance files, timesheets,
                            project reports, and connect
                            BexATM with your existing
                            systems through seamless API
                            integrations.
                        </p>
                    </div>

                </div>
            </section>

            <section className="w-full py-16 px-6 flex flex-col items-center text-center bg-white">

                {/* HEADING */}
                <div className="mt-8 space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003C71]">
                        A Simple, Powerful Workflow That Connects <br /> Your Entire Team
                    </h2>

                </div>

                {/* FULL-WIDTH IMAGE */}
                <div className="w-full flex justify-center mt-6">
                    <img
                        src="/images/home/infographic.webp"
                        alt="Section Image"
                        className="w-full max-w-[1400px] object-cover"
                    />
                </div>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                    <button className="px-6 py-3 bg-[#003C71] text-white rounded-xl shadow hover:bg-[#002B52] transition">
                        Talk to Our EXPERT
                    </button>

                    <button className="px-6 py-3 border-2 border-[#003C71] text-[#003C71] rounded-xl shadow hover:bg-[#003C71] hover:text-white transition">
                        Book a Demo
                    </button>
                </div>
            </section>

            {/* FOOTER SECTION */}
            <footer className="bg-black text-white pt-20 px-6 md:px-20">

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-14">

                    {/* 1 — LOGO + DESCRIPTION */}
                    <div className="col-span-2 lg:col-span-1">
                        <Image
                            src="/images/header/bexatm2.png"
                            alt="ATM Logo"
                            width={170}
                            height={75}
                            className="object-contain mb-5"
                        />

                        <p className="text-sm leading-relaxed opacity-85 mb-7 pr-4">
                            ATM is an all-in-one platform for managing projects, boosting team
                            productivity, and tracking workforce activities. It provides smart
                            solutions for startups, construction teams, and residential
                            communities. With integrated tools for tasks, attendance, HR, Agile
                            workflows, and AI-powered insights, BexATM helps organizations work
                            smarter and deliver results faster.
                        </p>

                        <h3 className="text-base font-semibold mb-3">Follow Us</h3>

                        <div className="flex gap-4">
                            <Image src="/icons/linkedin.png" width={30} height={30} alt="LinkedIn" />
                            <Image src="/icons/instagram.png" width={30} height={30} alt="Instagram" />
                            <Image src="/icons/youtube.png" width={30} height={30} alt="YouTube" />
                        </div>
                    </div>

                    {/* 2 — PRODUCTS */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Our Products</h3>
                        <div className="w-12 h-1 bg-[#00D0D0] mb-4"></div>

                        <ul className="space-y-0 text-sm opacity-85 list-disc ml-4">
                            <li>AI Project Management for Startups</li>
                            <li>Construction Project Management</li>
                            <li>Apartment Society Management</li>
                        </ul>
                    </div>

                    {/* 3 — FEATURES */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
                        <div className="w-12 h-1 bg-[#00D0D0] mb-4"></div>

                        <ul className="space-y-0 text-sm opacity-85 list-disc ml-4">
                            <li>Agile Management</li>
                            <li>Task & Workflow</li>
                            <li>Back Office (HRM)</li>
                            <li>Time & Attendance</li>
                            <li>Geo Attendance</li>
                            <li>Employee Self Service</li>
                            <li>Manager Desk</li>
                            <li>Assessment System</li>
                            <li>Cost & Budget</li>
                            <li>AI Insights</li>
                        </ul>
                    </div>

                    {/* 4 — QUICK LINKS */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
                        <div className="w-12 h-1 bg-[#00D0D0] mb-4"></div>

                        <ul className="space-y-2 text-sm opacity-85 list-disc ml-4">
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Pricing</li>
                            <li>Case Studies</li>
                            <li className="font-semibold">Customer Support</li>
                            <li className="font-semibold">Start Free Plan</li>
                            <li>Blog Post</li>
                        </ul>
                    </div>

                    {/* 5 — CONTACT */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
                        <div className="w-12 h-1 bg-[#00D0D0] mb-4"></div>

                        <p className="text-sm opacity-85 leading-relaxed mb-4">
                            #25/31, Lakshmi Nagar II Main Road,<br />
                            Porur, Chennai, Tamil Nadu - 600116
                        </p>

                        <p className="text-sm font-semibold text-[#00D0D0] mb-2">
                            Email: contact@bexatm.com
                        </p>

                        <p className="text-sm font-semibold text-[#F6A800] mb-6">
                            Phone: (+91)94444 08804
                        </p>

                        <button className="bg-[#F6A800] text-black text-sm px-5 py-2 rounded-full font-semibold mb-3">
                            Book a Demo
                        </button>

                        <button className="bg-[#F6A800] text-black text-sm px-5 py-2 rounded-full font-semibold block">
                            Chat with Our Expert: (+91)94444 08804
                        </button>
                    </div>

                </div>

                <div className="w-full bg-[#00D0D0] h-5 mt-14"></div>

                <div className="text-center py-5 text-sm opacity-75 bg-black">
                    © 2025 Beyondex Solutions Pvt Ltd.
                </div>

            </footer>




        </main>
    );
}

