"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Script from "next/script";
import { useContentManage } from "@/app/context/ContentManageContext";

const Whyatm: React.FC = () => {
  const router = useRouter();
  const [features, setFeatures] = useState<any>({});
  const { user } = useContentManage();

  // ✅ Fix: added missing state
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Load features
  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const res = await fetch(
          "https://bexatm.com/ContentManageSys.php?contentId=CON1011"
        );
        const data = await res.json();
        console.log(data, "whyatm"); // Check API response
        setFeatures(data); // Set features to the API response
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };
    loadFeatures();
  }, []);

  // Check if features object has keys, if not, return null
  if (!Object.keys(features).length) return null;

  return (
    <>
      <Head>
        <title>Why ATM?</title>
        <meta
          name="description"
          content="Try BexATM's Bitcoin ATM free for 28 days. Contact us for setup, support, or more info via phone, email, or online form."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "url": "https://bexatm.com/whyatm",
              "name": "Why ATM?",
              "description":
                "Contact BexATM for support, questions or free trial."
            }),
          }}
        />

        <link rel="canonical" href="https://bexatm.com/whyatm" />
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
              gtag('config', 'G-DVX38ML9PE');
            `}
      </Script>

      <section className="relative overflow-hidden">
        {/* ✅ Heading with background */}
        <div
          className="relative text-center mb-16 mt-12 bg-[url('/images/whyatm.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
        >
          <div className="bg-black/50 rounded-2xl px-6 py-16 relative">
            <h2 className="text-40 lg:text-52 font-medium text-white tracking-tight leading-11">
              {features.CON100101}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1011&contentTextID=CON100101&contentType=T")}
                  className="bg-primary text-white p-1 rounded-full shadow-lg hover:bg-opacity-80 transition"
                  title="Edit Section"
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
              ) : null}
            </h2>
            <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-200">
              {features.CON100103}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1011&contentTextID=CON100103&contentType=T")}
                  className="bg-primary text-white p-1 rounded-full shadow-lg hover:bg-opacity-80 transition"
                  title="Edit Section"
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
              ) : null}
            </p>
          </div>
        </div>

        {/* ✅ Accordion Style Cards */}
        <div className="container max-w-4xl mx-auto px-5 space-y-6">
          {[
            {
              title: features.CON100104,
              desc: features.CON100105,
              icon: features.CON100106,
              // button: user?.isAdmin ? (
              //   <button
              //     onClick={() =>
              //       router.push(
              //         "/content/cms?contentID=CON1005&contentTextID=CON100101&contentType=T"
              //       )
              //     }
              //     className="bg-primary text-white p-1 rounded-full shadow-lg hover:bg-opacity-80 transition"
              //     title="Edit Section"
              //   >
              //     <svg
              //       xmlns="http://www.w3.org/2000/svg"
              //       className="w-5 h-5"
              //       fill="none"
              //       viewBox="0 0 24 24"
              //       stroke="currentColor"
              //       strokeWidth={2}
              //     >
              //       <path
              //         strokeLinecap="round"
              //         strokeLinejoin="round"
              //         d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"
              //       />
              //     </svg>
              //   </button>
              // ) : null,
            },

            {
              title: features.CON100107,
              desc: features.CON100108,
              icon: features.CON100109,
            },
            {
              title: features.CON100110,
              desc: features.CON100111,
              icon: features.CON100112,
            },
            {
              title: features.CON100113,
              desc: features.CON100114,
              icon: features.CON100115,
            },
            {
              title: features.CON100116,
              desc: features.CON100117,
              icon: features.CON100118,
            },
            {
              title: features.CON100119,
              desc: features.CON100120,
              icon: features.CON100121,
            },
            {
              title: features.CON100122,
              desc: features.CON100123,
              icon: features.CON100124,
            },
            {
              title: features.CON100125,
              desc: features.CON100126,
              icon: features.CON100127,
            },
            {
              title: features.CON100128,
              desc: features.CON100129,
              icon: features.CON100130,
            },
          ].map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm"
              >
                {/* Button header */}
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-medium text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
                      <Icon icon={item.icon} className="text-primary text-xl" />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <Icon
                    icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
                    className="text-xl text-gray-600 dark:text-gray-300"
                  />
                </button>

                {/* Open content */}
                {isOpen && (
                  <div className="px-5 pb-4 text-dark/70 dark:text-white/70 text-base leading-relaxed whitespace-pre-line">
                    {item.desc.includes("Solution:") ? (
                      <>
                        {/* 🔴 Problem Statement */}
                        <p className="mb-3">
                          <span className="font-bold text-red-600">
                            Problem Statement:{" "}
                          </span>
                          {item.desc.split("Solution:")[0]}
                        </p>
                        {/* ✅ Solution part */}
                        <div className="flex items-start gap-2">
                          <Icon
                            icon="mdi:check-circle"
                            className="text-green-600 text-xl flex-shrink-0"
                          />
                          <p>{item.desc.split("Solution:")[1]}</p>
                        </div>
                      </>
                    ) : (
                      item.desc
                    )}
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

export default Whyatm;
