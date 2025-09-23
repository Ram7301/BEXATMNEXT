"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

interface WHYATMItem {
    question: string;
    answer: string;
    icon?: string;
}

const Whyatm: React.FC = () => {
    const [faqs, setFaqs] = useState<WHYATMItem[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const router = useRouter();

    useEffect(() => {
        const data: WHYATMItem[] = [
            {
                question: "Limited Project Visibility",
                answer:
                    "Lack of real-time progress tracking, causing delays in meeting project timelines and staying within budget. \nSolution: The comprehensive Project Manager Dashboard and escalation system allow for better visibility and timely alerts for Managers and Stakeholders.",
                icon: "mdi:check-decagram",
            },
            {
                question: "Redundant Data Entry",
                answer:
                    "Teams struggle with repeated data entry, often using Excel or spreadsheets, leading to inefficiency. \nSolution: The system eliminates redundant data entry by capturing task data through Self, Manager, and sprint task modules, ensuring streamlined workflow.",
                icon: "mdi:check-decagram",
            },
            {
                question: "Unclear Role Assignments",
                answer:
                    "Poor role-based task allocation leads to confusion and low productivity. \nSolution: The system ensures clear role-based task visualization from the planning stage to execution, reducing confusion and improving efficiency.",
                icon: "mdi:check-decagram",
            },
            {
                question: "No Employee Drill-Down View",
                answer:
                    "Managers find it hard to track individual employee contributions. \nSolution: Managers can drill down into employee performance using dashboards and detailed reports, improving task allocation and performance monitoring.",
                icon: "mdi:check-decagram",
            },
            {
                question: "Cumbersome Approval Process",
                answer:
                    "Rigid, delayed, and complex approval processes slow down decision-making. \nSolution: Simplifies the approval process through integration with cloud, mobile apps, email and even WhatsApp, making approvals more seamless.",
                icon: "mdi:check-decagram",
            },
            {
                question: "Absence of Cost Tracking",
                answer:
                    "Lack of visibility into the project’s budget and costing. \nSolution: Provides in-depth cost tracking through the Project Manager Dashboard, ensuring projects stay within budget from the start to the end.",
                icon: "mdi:check-decagram",
            },
            {
                question: "Lack of Real-Time Tracking",
                answer:
                    "Difficulty tracking work hours and task statuses (backlogs, to-dos, and completed tasks). \nSolution: Real-time task status updates and scrum meetings provide Managers with up-to-date visibility, allowing them to make adjustments as needed.",
                icon: "mdi:check-decagram",
            },
            {
                question: "Inefficient Task Rescheduling",
                answer:
                    "Bottlenecks and unfinished tasks are hard to identify and resolve. \nSolution: Helps managers track task dependencies and reschedule efficiently, preventing delays and ensuring smooth project execution.",
                icon: "mdi:check-decagram",
            },
            {
                question: "Onsite Activity with Limited Connectivity",
                answer:
                    "Onsite activities are often difficult to track due to poor connectivity. \nSolution: Integrates features like voice recognition, image uploads, and camera capture, making it easier to manage onsite activities, even with limited connectivity.",
                icon: "mdi:check-decagram",
            },
        ];

        setFaqs(data);
    }, []);

    if (!faqs.length) return null;

    return (
        <section className="relative overflow-hidden">
            {/* ✅ Heading with background */}
            <div className="relative text-center mb-16 mt-12 bg-[url('/images/whyatm.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg">
                <div className="bg-black/50 rounded-2xl px-6 py-16 relative">
                    <h2 className="text-40 lg:text-52 font-medium text-white tracking-tight leading-11">
                        Why ATM
                    </h2>
                    <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-200">
                        Provides organizations with smarter project and task management by addressing common
                        challenges such as limited visibility, redundant data entry, unclear role assignments, and
                        inefficient approvals. With real-time tracking, drill-down dashboards, cost monitoring, and
                        seamless integrations, it ensures projects stay on schedule, within budget, and aligned with
                        organizational goals.
                    </p>
                </div>
            </div>

            {/* ✅ FAQ Accordion */}
            <div className="container max-w-4xl mx-auto px-5 space-y-6">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm"
                        >
                            <button
                                className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-medium text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                aria-expanded={isOpen}
                            >
                                <div className="flex items-center gap-3">
                                    <span>{faq.question}</span>
                                </div>
                                <Icon
                                    icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
                                    className="text-xl text-gray-600 dark:text-gray-300"
                                />
                            </button>

                            {isOpen && (
                                <div className="px-5 pb-4 text-dark/70 dark:text-white/70 text-base leading-relaxed whitespace-pre-line">
                                    {faq.answer.includes("Solution:") ? (
                                        <>
                                            {/* 🔴 Problem Statement */}
                                            <p className="mb-3">
                                                <span className="font-bold text-red-600">Problem Statement: </span>
                                                {faq.answer.split("Solution:")[0]}
                                            </p>
                                            {/* ✅ Solution part */}
                                            <div className="flex items-start gap-2">
                                                <Icon
                                                    icon="mdi:check-circle"
                                                    className="text-green-600 text-xl flex-shrink-0"
                                                />
                                                <p>{faq.answer.split("Solution:")[1]}</p>
                                            </div>
                                        </>
                                    ) : (
                                        faq.answer
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Whyatm;
