"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContentManage } from "@/app/context/ContentManageContext";


const EmployeeSelfService = () => {
  const router = useRouter();
  const [features, setFeatures] = useState<any>({});
  const { user } = useContentManage();
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  // const { user } = useContentManage();

  // Load features
  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const res = await fetch(
          "https://bexatm.com/ContentManageSys.php?contentId=CON1002"
        );
        const data = await res.json();
        console.log(data, "mahe");
        setFeatures(data);
        // setPreview(data.image);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };
    loadFeatures();
  }, []);

  if (!features) return null;

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized
        />
      </div>

      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10 pt-24 pb-10 -mt-45">
        {/* Heading with Centered Title & Right-Aligned Edit Button */}
        <div className="flex items-center justify-between mb-16">
          {/* Spacer for left alignment */}
          <div className="w-10"></div>

          {/* Centered Heading */}
          <h2 className="flex-1 text-center text-40 lg:text-52 font-medium text-black dark:text-white tracking-tight leading-11">
            {features.CON100170}
            {user?.isAdmin ? (

              <button
                onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100170&contentType=T")}
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
        </div>

        <div
          className={`flex flex-col  lg:flex-row
             items-center gap-10 mb-24`}
        >
          {/* Text Block */}
          <div className="lg:w-1/2">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">

              <Icon icon={features.CON100102} className="text-2xl text-primary" />

              {features.CON100101}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100101&contentType=T")}
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
              {features.CON100103}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100103&contentType=T")}
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
              {features.CON100104}
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

            </p>

            {features && (
              <ul className="mt-4 list-disc list-inside text-dark/70 dark:text-white/70 text-base space-y-2">
                {features.CON100107 && (
                  <li>
                    <strong>{features.CON100107}</strong>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100107&contentType=T")}
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
                    {features.CON100108 && ` – ${features.CON100108}`}
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100108&contentType=T")}
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
                  </li>
                )}
                {features.CON100109 && (
                  <li>
                    <strong>{features.CON100109}</strong>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100109&contentType=T")}
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
                    {features.CON100110 && ` – ${features.CON100110}`}
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100110&contentType=T")}
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
                  </li>
                )}
                {features.CON100111 && (
                  <li>
                    <strong>{features.CON100111}</strong>
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
                    {features.CON100112 && ` – ${features.CON100112}`}
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100112&contentType=T")}
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
                  </li>
                )}
                {features.CON100113 && (
                  <li>
                    <strong>{features.CON100113}</strong>
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
                    {features.CON100114 && ` – ${features.CON100114}`}
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100114&contentType=T")}
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
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* Image Block */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="#">
                <Image
                  src={`https://bexatm.com/${features.CON100105}`}
                  alt={features.title}
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized
                />
              </Link>
              <Link
                href="#"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                {user?.isAdmin ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      router.push("/content/cms?contentID=CON1002&contentTextID=CON100105&contentType=I");
                    }}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push("/content/cms?contentID=CON1002&contentTextID=CON100106&contentType=T");
                      }}
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
              <Icon icon={features.CON100116} className="text-2xl text-primary" />
              {features.CON100115}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100115&contentType=T")}
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
              {features.CON100117}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100117&contentType=T")}
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
              {features.CON100118}
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
            </p>
          </div>

          {/* Image Block */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="#">
                <Image
                  src={`https://bexatm.com/${features.CON100119}`}
                  alt={features.title}
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized
                />
              </Link>
              <Link
                href="#"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                {user?.isAdmin ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      router.push("/content/cms?contentID=CON1002&contentTextID=CON100119&contentType=I");
                    }}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push("/content/cms?contentID=CON1002&contentTextID=CON100120&contentType=T");
                      }}
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
          className={`flex flex-col  lg:flex-row
            } items-center gap-10 mb-24`}
        >
          {/* Text Block */}
          <div className="lg:w-1/2">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon icon={features.CON100122} className="text-2xl text-primary" />
              {features.CON100121}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON1001121&contentType=T")}
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
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100123&contentType=T")}
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
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100124&contentType=T")}
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
            {features && (
              <ul className="mt-4 list-disc list-inside text-dark/70 dark:text-white/70 text-base space-y-2">
                {features.CON100127 && (
                  <li>
                    <strong>{features.CON100127}</strong>
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
                    {features.CON100128 && ` – ${features.CON100128}`}
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100128&contentType=T")}
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
                  </li>
                )}
                {features.CON100129 && (
                  <li>
                    <strong>{features.CON100129}</strong>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100129&contentType=T")}
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
                    {features.CON100130 && ` – ${features.CON100130}`}
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100130&contentType=T")}
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
                  </li>
                )}
                {features.CON100131 && (
                  <li>
                    <strong>{features.CON100131}</strong>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100131&contentType=T")}
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
                    {features.CON100132 && ` – ${features.CON100132}`}
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
                  </li>
                )}
                {features.CON100133 && (
                  <li>
                    <strong>{features.CON100133}</strong>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100133&contentType=T")}
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
                    {features.CON100134 && ` – ${features.CON100134}`}
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
                  </li>
                )}
                {features.CON100135 && (
                  <li>
                    <strong>{features.CON100135}</strong>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100135&contentType=T")}
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
                    {features.CON100136 && ` – ${features.CON100136}`}
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100136&contentType=T")}
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
                  </li>
                )}
                {features.CON100137 && (
                  <li>
                    <strong>{features.CON100137}</strong>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100137&contentType=T")}
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
                    {features.CON100138 && ` – ${features.CON100138}`}
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100138&contentType=T")}
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
                  </li>
                )}
                {features.CON100139 && (
                  <li>
                    <strong>{features.CON100139}</strong>
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
                    {features.CON100140 && ` – ${features.CON100140}`}
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100140&contentType=T")}
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
                  </li>
                )}
                {features.CON100141 && (
                  <li>
                    <strong>{features.CON100141}</strong>
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
                    {features.CON100142 && ` – ${features.CON100142}`}
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100142&contentType=T")}
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
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* Image Block */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="#">
                <Image
                  src={`https://bexatm.com/${features.CON100125}`}
                  alt={features.title}
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized
                />
              </Link>
              <Link
                href="#"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                {user?.isAdmin ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      router.push("/content/cms?contentID=CON1002&contentTextID=CON100125&contentType=I");
                    }}
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
                  <h3 className="text-white text-2xl">{features.CON100126}</h3>
                  {user?.isAdmin ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push("/content/cms?contentID=CON1002&contentTextID=CON100126&contentType=T");
                      }}
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
              <Icon icon={features.CON100144} className="text-2xl text-primary" />
              {features.CON100143}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100143&contentType=T")}
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
              {features.CON100145}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100145&contentType=T")}
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
              {features.CON100146}
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
            </p>


          </div>

          {/* Image Block */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="#">
                <Image
                  src={`https://bexatm.com/${features.CON100147}`}
                  alt={features.title}
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized
                />
              </Link>
              <Link
                href="#"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                {user?.isAdmin ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      router.push("/content/cms?contentID=CON1002&contentTextID=CON100147&contentType=I");
                    }}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push("/content/cms?contentID=CON1002&contentTextID=CON100148&contentType=T");
                      }}
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
          className={`flex flex-col  lg:flex-row
           items-center gap-10 mb-24`}
        >
          {/* Text Block */}
          <div className="lg:w-1/2">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon icon={features.CON100150} className="text-2xl text-primary" />
              {features.CON100149}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100149&contentType=T")}
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
              {features.CON100152}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100152&contentType=T")}
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
              {features.CON100153}
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
            </p>
          </div>

          {/* Image Block */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="#">
                <Image
                  src={`https://bexatm.com/${features.CON100154}`}
                  alt={features.title}
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized
                />
              </Link>
              <Link
                href="#"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                {user?.isAdmin ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      router.push("/content/cms?contentID=CON1002&contentTextID=CON100154&contentType=I");
                    }}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push("/content/cms?contentID=CON1002&contentTextID=CON100155&contentType=T");
                      }}
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
          className={`flex flex-col ${true ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 mb-24`}
        >
          {/* Text Block */}
          <div className="lg:w-1/2">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon icon={features.CON100157} className="text-2xl text-primary" />
              {features.CON100156}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100156&contentType=T")}
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
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100158&contentType=T")}
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
                  onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100159&contentType=T")}
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

            {features && (
              <ul className="mt-4 list-disc list-inside text-dark/70 dark:text-white/70 text-base space-y-2">
                {features.CON100162 && (
                  <li>
                    <strong>{features.CON100162}</strong>
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
                    {features.CON100163 && ` – ${features.CON100163}`}
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100163&contentType=T")}
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
                  </li>
                )}
                {features.CON100164 && (
                  <li>
                    <strong>{features.CON100164}</strong>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100164&contentType=T")}
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
                    {features.CON100165 && ` – ${features.CON100165}`}
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100165&contentType=T")}
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
                  </li>
                )}
                {features.CON100166 && (
                  <li>
                    <strong>{features.CON100166}</strong>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100166&contentType=T")}
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
                    {features.CON100167 && ` – ${features.CON100167}`}
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
                  </li>
                )}
                {features.CON100168 && (
                  <li>
                    <strong>{features.CON100168}</strong>
                    {user?.isAdmin ? (

                      <button
                        onClick={() => router.push("/content/cms?contentID=CON1002&contentTextID=CON100168&contentType=T")}
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
                    {features.CON100169 && ` – ${features.CON100169}`}
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
                  </li>
                )}

              </ul>
            )}
          </div>



          {/* Image Block */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden group">
              <Link href="#">
                <Image
                  src={`https://bexatm.com/${features.CON100160}`}
                  alt={features.title}
                  width={680}
                  height={386}
                  className="w-full"
                  unoptimized
                />
              </Link>
              <Link
                href="#"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
              >
                {user?.isAdmin ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      router.push("/content/cms?contentID=CON1002&contentTextID=CON100160&contentType=I");
                    }}
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
                  <h3 className="text-white text-2xl">{features.CON100161}</h3>
                  {user?.isAdmin ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push("/content/cms?contentID=CON1002&contentTextID=CON100161&contentType=T");
                      }}
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

        {/* Feature Cards */}

      </div>
    </section>
  );
};

export default EmployeeSelfService;
