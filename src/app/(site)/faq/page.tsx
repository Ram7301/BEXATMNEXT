"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

interface FAQItem {
  question: string;
  answer: string;
  icon?: string;
}

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const data: FAQItem[] = [
      {
        question: "How can employees’ work hours be tracked effectively?",
        answer:
          "Work hours can be tracked using timesheets, attendance systems, or the employee dashboard, which allows monitoring of the time spent on each task accurately.",
        icon: "mdi:check-decagram",
      },
      {
        question: "How can Time Management improve productivity?",
        answer:
          "By allocating the right amount of time to tasks, avoiding distractions, and setting clear deadlines, you can complete work faster and more accurately.",
        icon: "mdi:check-decagram",
      },
      {
        question: "How can time be managed for multiple projects at once?",
        answer:
          "By using project/task management tools, scheduling tasks, and tracking deadlines, time can be managed across multiple projects effectively.",
        icon: "mdi:check-decagram",
      },
      {
        question: "What is the process for employees to log in to the ESS portal?",
        answer:
          "Employees can log in using their employee ID and password provided by HR or IT. Some portals may also support Single Sign-On (SSO) for secure access.",
        icon: "mdi:check-decagram",
      },
      {
        question: "How can leave be applied and leave balance checked?",
        answer:
          "In the Leave section, employees can submit leave requests for approval and view their current leave balance.",
        icon: "mdi:check-decagram",
      },
      {
        question: "How do employees track approval status for leave or timesheets?",
        answer:
          "Employees can check the status of submitted requests (approved, pending, or rejected) in the Leave or Timesheet sections.",
        icon: "mdi:check-decagram",
      },
      {
        question: "How are employees assigned to assessments?",
        answer:
          "Administrators can assign employees to specific assessments, ensuring that only the relevant individuals participate in the evaluation process.",
        icon: "mdi:check-decagram",
      },
      {
        question: "How is assessment performance tracked?",
        answer:
          "The system tracks scores, completion status, and individual question responses, allowing managers and HR to evaluate employee performance accurately.",
        icon: "mdi:check-decagram",
      },
      {
        question: "How frequently are assessments conducted?",
        answer:
          "The frequency of assessments depends on organizational policies, project requirements, or training programs, and can range from monthly, quarterly, or annually.",
        icon: "mdi:check-decagram",
      },
      {
        question: "How can approvers provide comments or feedback?",
        answer:
          "Approvers can add comments or notes in the system when approving, rejecting, or requesting additional information.",
        icon: "mdi:check-decagram",
      },
      {
        question: "How are late arrivals or early departures tracked?",
        answer:
          "The system logs exact check-in and check-out times, allowing managers to monitor punctuality and compliance with work schedules.",
        icon: "mdi:check-decagram",
      },
      {
        question: "Can attendance be corrected if there is an error?",
        answer:
          "Yes, employees can request corrections, which are then reviewed and approved by their manager or HR.",
        icon: "mdi:check-decagram",
      },
    ];
    setFaqs(data);
  }, []);

  if (!faqs.length) return null;

  return (
    <section className="relative overflow-hidden">
      {/* ✅ Heading */}
      <div className="relative text-center mb-16 mt-12 bg-[url('/images/faq.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg">
        <div className="bg-black/50 rounded-2xl px-6 py-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
            FAQ
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-200">
            Explore frequently asked questions about employee work hours, leave, attendance, and assessments.
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
                  {faq.icon && (
                    <Icon icon={faq.icon} className="text-xl text-primary" />
                  )}
                  <span>{faq.question}</span>
                </div>
                <Icon
                  icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
                  className="text-xl text-gray-600 dark:text-gray-300"
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-4 text-dark/70 dark:text-white/70 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
