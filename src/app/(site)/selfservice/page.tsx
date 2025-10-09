"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContentManage } from "@/app/context/ContentManageContext";
import Head from "next/head";
import Script from "next/script";



const Selfservice: React.FC = () => {
  const router = useRouter();
  const [features, setFeatures] = useState<any>({});
  const { user } = useContentManage();

  // Load features
  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const res = await fetch(
          "https://bexatm.com/ContentManageSys.php?contentId=CON1006"
        );
        const data = await res.json();
        console.log(data, "employeeselfservice"); // Check API response
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
        <title>Employee Self Service | BexATM</title>
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
              "url": "https://bexatm.com/selfservice",
              "name": "Employee Self Service",
              "description": "Contact BexATM for support, questions or free trial."
            }),
          }}
        />



        <link rel="canonical" href="https://bexatm.com/selfservice" />
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
        {/* ✅ Heading with Background */}
        <div className="relative text-center mb-16 mt-12 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg">
          <div className="bg-black/70 rounded-2xl px-6 py-6 relative">
            <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
              {features.CON100143}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100143&contentType=T")}
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

            <p className="mt-2 max-w-4xl mx-auto text-md text-gray-200 leading-relaxed">
              {features.CON100144}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100144&contentType=T")}
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

        <div className="container max-w-7xl mx-auto px-5 mt-10">


          <div
            className={`flex flex-col ${features.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 mb-24`}
          >
            {/* Text Block */}
            <div className="lg:w-1/2">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
                <Icon icon={features.CON100106} className="text-2xl text-primary" />
                {features.CON100101}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100101&contentType=T")}
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
              <h2 className="lg:text-3xl text-2xl mt-2 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
                {features.CON100102}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100102&contentType=T")}
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
              <p className="text-dark/50 dark:text-white/50 text-base leading-snug whitespace-pre-line">
                {features.CON100103}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100103&contentType=T")}
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

            {/* Image Block */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href="#">
                  <Image
                    src={`https://bexatm.com${features.CON100104}`}
                    alt={features.title}
                    width={680}
                    height={386}
                    unoptimized
                  />
                </Link>
                <Link
                  href="#"
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
                >
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100104&contentType=T")}
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
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-2xl">{features.CON100106}</h3>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100106&contentType=T")}
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
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col ${true ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 mb-24`}
          >
            {/* Text Block */}
            <div className="lg:w-1/2">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
                <Icon icon={features.CON100112} className="text-2xl text-primary" />
                {features.CON100107}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100107&contentType=T")}
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
              <h2 className="lg:text-3xl text-2xl mt-2 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
                {features.CON100108}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100108&contentType=T")}
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
              <p className="text-dark/50 dark:text-white/50 text-base leading-snug whitespace-pre-line">
                {features.CON100109}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100109&contentType=T")}
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

            {/* Image Block */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href="#">
                  <Image
                    src={`https://bexatm.com${features.CON100110}`}
                    alt={features.title}
                    width={680}
                    height={386}
                    unoptimized
                  />
                </Link>
                <Link
                  href="#"
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
                >
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100110&contentType=T")}
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
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-2xl">{features.CON100111}</h3>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100111&contentType=T")}
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
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col ${features.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 mb-24`}
          >
            {/* Text Block */}
            <div className="lg:w-1/2">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
                <Icon icon={features.CON100118} className="text-2xl text-primary" />
                {features.CON100113}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100113&contentType=T")}
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
              <h2 className="lg:text-3xl text-2xl mt-2 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
                {features.CON100114}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100114&contentType=T")}
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
              <p className="text-dark/50 dark:text-white/50 text-base leading-snug whitespace-pre-line">
                {features.CON100115}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100115&contentType=T")}
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

            {/* Image Block */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href="#">
                  <Image
                    src={`https://bexatm.com${features.CON100116}`}
                    alt={features.title}
                    width={680}
                    height={386}
                    unoptimized
                  />
                </Link>
                <Link
                  href="#"
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
                >
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100116&contentType=T")}
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
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-2xl">{features.CON100117}</h3>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100117&contentType=T")}
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
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col ${true ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 mb-24`}
          >
            {/* Text Block */}
            <div className="lg:w-1/2">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
                <Icon icon={features.CON100124} className="text-2xl text-primary" />
                {features.CON100119}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100119&contentType=T")}
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
              <h2 className="lg:text-3xl text-2xl mt-2 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
                {features.CON100120}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100120&contentType=T")}
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
              <p className="text-dark/50 dark:text-white/50 text-base leading-snug whitespace-pre-line">
                {features.CON100121}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100121&contentType=T")}
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

            {/* Image Block */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href="#">
                  <Image
                    src={`https://bexatm.com${features.CON100122}`}
                    alt={features.title}
                    width={680}
                    height={386}
                    unoptimized
                  />
                </Link>
                <Link
                  href="#"
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
                >
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100122&contentType=T")}
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
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-2xl">{features.CON100123}</h3>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100123&contentType=T")}
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
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col ${features.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 mb-24`}
          >
            {/* Text Block */}
            <div className="lg:w-1/2">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
                <Icon icon={features.CON100130} className="text-2xl text-primary" />
                {features.CON100125}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100125&contentType=T")}
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
              <h2 className="lg:text-3xl text-2xl mt-2 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
                {features.CON100126}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100126&contentType=T")}
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
              <p className="text-dark/50 dark:text-white/50 text-base leading-snug whitespace-pre-line">
                {features.CON100127}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100127&contentType=T")}
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

            {/* Image Block */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href="#">
                  <Image
                    src={`https://bexatm.com${features.CON100128}`}
                    alt={features.title}
                    width={680}
                    height={386}
                    unoptimized
                  />
                </Link>
                <Link
                  href="#"
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
                >
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100128&contentType=T")}
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
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-2xl">{features.CON100129}</h3>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100129&contentType=T")}
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
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col ${true ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 mb-24`}
          >
            {/* Text Block */}
            <div className="lg:w-1/2">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
                <Icon icon={features.CON100136} className="text-2xl text-primary" />
                {features.CON100131}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100131&contentType=T")}
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
              <h2 className="lg:text-3xl text-2xl mt-2 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
                {features.CON100132}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100132&contentType=T")}
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
              <p className="text-dark/50 dark:text-white/50 text-base leading-snug whitespace-pre-line">
                {features.CON100133}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100133&contentType=T")}
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

            {/* Image Block */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href="#">
                  <Image
                    src={`https://bexatm.com${features.CON100134}`}
                    alt={features.title}
                    width={680}
                    height={386}
                    unoptimized
                  />
                </Link>
                <Link
                  href="#"
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
                >
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100134&contentType=T")}
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
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-2xl">{features.CON100135}</h3>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100135&contentType=T")}
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
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col ${features.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-10 mb-24`}
          >
            {/* Text Block */}
            <div className="lg:w-1/2">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
                <Icon icon={features.CON100142} className="text-2xl text-primary" />
                {features.CON100137}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100137&contentType=T")}
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
              <h2 className="lg:text-3xl text-2xl mt-2 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
                {features.CON100138}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100138&contentType=T")}
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
              <p className="text-dark/50 dark:text-white/50 text-base leading-snug whitespace-pre-line">
                {features.CON100139}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100139&contentType=T")}
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

            {/* Image Block */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href="#">
                  <Image
                    src={`https://bexatm.com${features.CON100140}`}
                    alt={features.title}
                    width={680}
                    height={386}
                    unoptimized
                  />
                </Link>
                <Link
                  href="#"
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
                >
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100140&contentType=T")}
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
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-2xl">{features.CON100141}</h3>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1006&contentTextID=CON100141&contentType=T")}
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
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Selfservice;
