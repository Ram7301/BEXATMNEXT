"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";


/* ================= HOME PAGE ================= */

export default function BexATMHome() {
    const [showPopup, setShowPopup] = useState(false);
    const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-white text-black">


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
      gap-8 md:gap-10
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
    );
}

