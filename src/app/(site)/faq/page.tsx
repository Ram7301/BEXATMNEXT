"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import Head from "next/head";
// export const metadata = {
//   title: "FAQ & Workflow | BexATM ",
//   description: "Try BexATM's Bitcoin ATM free for 28 days...",
// };
interface FAQItem {
  question: string;
  answer: string;
  icon?: string;
}

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();

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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      }
    }))
  };

  return (
    <>
      <Head>
        <title>FAQ & Workflow | Employee Dashboard</title>
        <meta name="description" content="Explore frequently asked questions about employee work hours, leave, attendance, and assessments." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <link rel="canonical" href="https://bexatm.com/faq" />
      </Head>

      {/* ✅ Google Analytics */}
    <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DVX38ML9PE"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DVX38ML9PE', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

      {/* ✅ Facebook Pixel Code */}
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

      <section className="relative overflow-hidden">
        {/* ✅ Heading with background */}
        <div className="relative text-center mb-16 mt-12 bg-[url('/images/faq.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg">
          <div className="bg-black/50 rounded-2xl px-6 py-16 relative">
            {/* ✅ Edit Button */}
            {/* <div className="absolute top-6 right-6 z-[9999]">
            <button
              onClick={() => router.push("/content/agile")}
              className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
              title="Edit Agile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"
                />
              </svg>
            </button>
          </div> */}

            <h2 className="text-40 lg:text-52 font-medium text-white tracking-tight leading-11">
              FAQ & Workflow
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-200">
              Explore frequently asked questions about employee work hours, leave,
              attendance, and assessments.
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
    </>
  );
};

export default FAQ;
