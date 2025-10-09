"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContentManage } from "@/app/context/ContentManageContext";
import { Metadata } from "next";




const Timemanagement = () => {
  const router = useRouter();
  const [features, setFeatures] = useState<any>({});
  const { user } = useContentManage();

  // Load features
  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const res = await fetch(
          "https://bexatm.com/ContentManageSys.php?contentId=CON1005"
        );
        const data = await res.json();
        console.log(data, "time"); // Check API response
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
    <section className="relative overflow-hidden">
      {/* ✅ Heading with Background */}
      <div className="relative text-center mb-16 mt-12 bg-[url('/images/biometric.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg">
        <div className="bg-black/70 rounded-2xl px-6 py-6 relative">
          <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
            {features.CON100171}
            {user?.isAdmin ? (

              <button
                onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100171&contentType=T")}
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
            {features.CON100172}
            {user?.isAdmin ? (

              <button
                onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100172&contentType=T")}
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
              <Icon icon={features.CON100107} className="text-2xl text-primary" />

              {features.CON100101}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100101&contentType=T")}
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
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100102&contentType=T")}
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
              {features.CON100103}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100103&contentType=T")}
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
                    onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100104&contentType=T")}
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
                      onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100106&contentType=T")}
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
              <Icon icon={features.CON100114} className="text-2xl text-primary" />

              {features.CON100108}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100108&contentType=T")}
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
              {features.CON100109}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100109&contentType=T")}
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
              {features.CON100110}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100110&contentType=T")}
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
                  src={`https://bexatm.com${features.CON100111}`}
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
                    onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100111&contentType=T")}
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
                  <h3 className="text-white text-2xl">{features.CON100113}</h3>
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100113&contentType=T")}
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
              <Icon icon={features.CON100121} className="text-2xl text-primary" />

              {features.CON100115}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100115&contentType=T")}
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
              {features.CON100116}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100116&contentType=T")}
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
              {features.CON100117}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100117&contentType=T")}
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
                  src={`https://bexatm.com${features.CON100118}`}
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
                    onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100118&contentType=T")}
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
                  <h3 className="text-white text-2xl">{features.CON100120}</h3>
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100120&contentType=T")}
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
              <Icon icon={features.CON100128} className="text-2xl text-primary" />

              {features.CON100122}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100122&contentType=T")}
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
              {features.CON100123}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100123&contentType=T")}
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
              {features.CON100124}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100124&contentType=T")}
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
                  src={`https://bexatm.com${features.CON100125}`}
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
                    onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100125&contentType=T")}
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
                  <h3 className="text-white text-2xl">{features.CON100127}</h3>
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100127&contentType=T")}
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
              <Icon icon={features.CON100135} className="text-2xl text-primary" />

              {features.CON100129}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100129&contentType=T")}
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
              {features.CON100130}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100130&contentType=T")}
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
              {features.CON100131}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100131&contentType=T")}
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
                  src={`https://bexatm.com${features.CON100132}`}
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
                    onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100132&contentType=T")}
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
                  <h3 className="text-white text-2xl">{features.CON100134}</h3>
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100134&contentType=T")}
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
              <Icon icon={features.CON100142} className="text-2xl text-primary" />

              {features.CON100136}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100136&contentType=T")}
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
              {features.CON100137}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100137&contentType=T")}
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
              {features.CON100138}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100138&contentType=T")}
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
                  src={`https://bexatm.com${features.CON100139}`}
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
                    onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100139&contentType=T")}
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
                      onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100141&contentType=T")}
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
              <Icon icon={features.CON100149} className="text-2xl text-primary" />

              {features.CON100143}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100143&contentType=T")}
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
              {features.CON100144}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100144&contentType=T")}
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
              {features.CON100145}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100145&contentType=T")}
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
                  src={`https://bexatm.com${features.CON100146}`}
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
                    onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100146&contentType=T")}
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
                  <h3 className="text-white text-2xl">{features.CON100148}</h3>
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100148&contentType=T")}
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
              <Icon icon={features.CON100156} className="text-2xl text-primary" />

              {features.CON100150}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100150&contentType=T")}
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
              {features.CON100151}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100151&contentType=T")}
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
              {features.CON100152}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100152&contentType=T")}
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
                  src={`https://bexatm.com${features.CON100153}`}
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
                    onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100153&contentType=T")}
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
                  <h3 className="text-white text-2xl">{features.CON100155}</h3>
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100155&contentType=T")}
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
              <Icon icon={features.CON100163} className="text-2xl text-primary" />

              {features.CON100157}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100157&contentType=T")}
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
              {features.CON100158}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100158&contentType=T")}
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
              {features.CON100159}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100159&contentType=T")}
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
                  src={`https://bexatm.com${features.CON100160}`}
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
                    onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100160&contentType=T")}
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
                  <h3 className="text-white text-2xl">{features.CON100162}</h3>
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100162&contentType=T")}
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
              <Icon icon={features.CON100170} className="text-2xl text-primary" />

              {features.CON100164}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100164&contentType=T")}
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
              {features.CON100165}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100165&contentType=T")}
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
              {features.CON100166}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1005&contentTextID=CON100166&contentType=T")}
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
                  src={`https://bexatm.com${features.CON100167}`}
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
                    onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100167&contentType=T")}
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
                  <h3 className="text-white text-2xl">{features.CON100169}</h3>
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100169&contentType=T")}
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
  );
};

export default Timemanagement;
