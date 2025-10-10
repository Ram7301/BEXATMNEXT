"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContentManage } from "@/app/context/ContentManageContext";
import Head from "next/head";
import Script from "next/script";

const Managerdesk: React.FC = () => {
  const router = useRouter();
  const [features, setFeatures] = useState<any>({});
  const { user } = useContentManage();

  // Load features
  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const res = await fetch(
          "https://bexatm.com/ContentManageSys.php?contentId=CON1007"
        );
        const data = await res.json();
        console.log(data, "managerdesk"); // Check API response
        setFeatures(data); // Set features to the API response
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };
    loadFeatures();
  }, []);

  if (!Object.keys(features).length) return null;

  return (
    <>
      <Head>
        <title>Manager Desk | BexATM</title>
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
              "url": "https://bexatm.com/managerdesk",
              "name": "Manager Desk",
              "description": "Contact BexATM for support, questions or free trial."
            }),
          }}
        />



        <link rel="canonical" href="https://bexatm.com/managerdesk" />
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
        {/* ✅ Heading with Background */}
        <div className="relative text-center mb-16 mt-12 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg">
          <div className="bg-black/70 rounded-2xl px-6 py-6 relative">
            <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
              {features.CON1001026}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1007&contentTextID=CON1001026&contentType=T")}
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
              {features.CON1001027}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1007&contentTextID=CON1001027&contentType=T")}
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
                <Icon icon={features.CON100110} className="text-2xl text-primary" />
                {features.CON100101}
                {user?.isAdmin && (
                  <button
                    onClick={() =>
                      router.push("/content/cms?contentID=CON1007&contentTextID=CON100101&contentType=T")
                    }
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
                )}
              </p>

              <h2 className="lg:text-3xl text-2xl mt-2 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
                {features.CON100102}
                {user?.isAdmin && (
                  <button
                    onClick={() =>
                      router.push("/content/cms?contentID=CON1007&contentTextID=CON100102&contentType=T")
                    }
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
                )}
              </h2>

              <p className="text-dark/50 dark:text-white/50 text-lg leading-[1.3]">
                {features.CON100103}
                {user?.isAdmin && (
                  <button
                    onClick={() =>
                      router.push("/content/cms?contentID=CON1007&contentTextID=CON100103&contentType=T")
                    }
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
                )}
              </p>

              {/* Icons Section */}
              <div className="flex gap-2.5 mt-4">
                {features.CON100106 && <Icon icon={features.CON100106} className="text-2xl text-primary" />}
                {features.CON100107 && <Icon icon={features.CON100107} className="text-2xl text-primary" />}
                {features.CON100108 && <Icon icon={features.CON100108} className="text-2xl text-primary" />}
                {features.CON100109 && <Icon icon={features.CON100109} className="text-2xl text-primary" />}
              </div>
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
                  {user?.isAdmin && (
                    <button
                      onClick={() =>
                        router.push("/content/cms?contentID=CON1007&contentTextID=CON100104&contentType=T")
                      }
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
                  )}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-2xl">{features.CON1001015}</h3>
                    {user?.isAdmin && (
                      <button
                        onClick={() =>
                          router.push("/content/cms?contentID=CON1007&contentTextID=CON1001015&contentType=T")
                        }
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
                    )}
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
                <Icon icon={features.CON1001016} className="text-2xl text-primary" />
                {features.CON1001011}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1007&contentTextID=CON1001011&contentType=T")}
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
                {features.CON1001012}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1007&contentTextID=CON1001012&contentType=T")}
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
              <p className="text-dark/50 dark:text-white/50 text-lg leading-[1.3]">
                {features.CON1001013}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1007&contentTextID=CON1001013&contentType=T")}
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
                    src={`https://bexatm.com${features.CON1001014}`}
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
                      onClick={() => router.push("/content/cms?contentID=CON1007&contentTextID=CON1001014&contentType=T")}
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
                    <h3 className="text-white text-2xl">{features.CON1001015}</h3>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1007&contentTextID=CON100106&contentType=T")}
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
                <Icon icon={features.CON1001022} className="text-2xl text-primary" />
                {features.CON1001017}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1007&contentTextID=CON1001017&contentType=T")}
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
                {features.CON1001018}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1007&contentTextID=CON1001018&contentType=T")}
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
              <p className="text-dark/50 dark:text-white/50 text-lg leading-[1.3]">
                {features.CON1001019}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1007&contentTextID=CON1001019&contentType=T")}
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
                    src={`https://bexatm.com${features.CON1001020}`}
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
                      onClick={() => router.push("/content/cms?contentID=CON1007&contentTextID=CON1001020&contentType=T")}
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
                    <h3 className="text-white text-2xl">{features.CON1001021}</h3>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1007&contentTextID=CON1001021&contentType=T")}
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

export default Managerdesk;
