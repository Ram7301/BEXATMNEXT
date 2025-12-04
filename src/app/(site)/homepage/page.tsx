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
                style={{ backgroundImage: "url('/images/home/mainbanner.png')" }}
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
                            img: "/images/home/Startup.png",
                        },
                        {
                            title: "Community Management Software",
                            desc: "Resident services, staff attendance, maintenance tracking & committee dashboards.",
                            img: "/images/home/Community.png",
                        },
                        {
                            title: "Construction Project Management",
                            desc: "Site attendance, contractor tracking, DPR tasks & milestone-based progress.",
                            img: "/images/home/Construction.png",
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
                            src="/images/home/whybexatm.png"
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
                                src="/images/home/whybexatm2.png"
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
                                Let's Start – It's FREE
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
                        src="/images/home/infographic.png"
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



        </main>
    );
}
