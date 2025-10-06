"use client";

import { useEffect, useState } from "react";
import { useContentManage } from "@/app/context/ContentManageContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import contentData from "../../../Mock.db/C001.json";

const Hero: React.FC = () => {
  const router = useRouter();
  const [pages, setPages] = useState<any>({});
  const { user } = useContentManage();

  const loadPages = async () => {
    try {
      // const res = await fetch("/api/content-manage?contentId=C001");
      const res = await fetch(
        "https://bexatm.com/ContentManageSys.php?contentId=CON1001"
      );
      if (!res.ok) throw new Error("Failed to fetch pages");
      const data = await res.json();
      console.log(data, "333333333333333333");
      setPages(data);
    } catch (err) {
      console.error("Error loading pages:", err);
    }
  };

  useEffect(() => {
    loadPages();
  }, []);

  return (
    <section className="!py-0 relative">
      {/* Edit Button moved to top-right */}
      {user?.isAdmin ? (
        <button
          onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100103&contentType=I")}
          className="absolute top-5 right-5 z-50 bg-primary text-white p-1 rounded-full shadow-lg hover:bg-opacity-80 transition"
          title="Edit Hero Section"
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

      {/* Main Hero Content */}
      <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative">
        <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68">
          <div className="relative text-white dark:text-dark text-center md:text-start z-10">
            <h1 className="text-inherit text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6">
              {pages?.CON100101}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100101&contentType=T")}
                  className="absolute  z-50 bg-primary text-white p-1 rounded-full shadow-lg hover:bg-opacity-80 transition"
                  title="Edit Hero Section"
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
            </h1>

            <div className="flex flex-col xs:flex-row justify-center md:justify-start gap-4">
              <Link
                href="/contactus"
                className="px-8 py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-white text-base font-semibold rounded-full hover:cursor-pointer"
              >
                {pages?.CON100102}
              </Link>
              {user?.isAdmin ? (
                <button
                  onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100102&contentType=T")}
                  className="absolute  z-50 bg-primary text-white p-1 rounded-full shadow-lg hover:bg-opacity-80 transition"
                  title="Edit Hero Section"
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
          </div>

          <div className="hidden md:block absolute top-18 -right-15">
            {pages?.CON100103 && (
              <>
                <Image
                  src={`https://bexatm.com${pages?.CON100103 || null}`}
                  alt="heroImg"
                  width={882}
                  height={816}
                  unoptimized
                />

                {/* Edit Button */}
                {user?.isAdmin ? (
                  <button
                    onClick={() => router.push("/content/hero")}
                    className="absolute top-2 right-2 z-50 bg-primary text-white p-1 rounded-full shadow-lg hover:bg-opacity-80 transition"
                    title="Edit Hero Section"
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
              </>
            )}
          </div>

        </div>

        {/* Bottom feature icons */}
        <div className="md:absolute bottom-0 md:right-0 xl:-right-1 bg-white dark:bg-black py-12 px-8 mobile:px-16 md:pl-16 md:pr-[95px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-24">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-center">

            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-full">
                <Image
                  src={`https://bexatm.com${pages?.CON100104}`}
                  alt={pages?.CON100105}
                  width={35}
                  height={35}
                  className="block dark:hidden"
                  unoptimized
                />

                {/* Edit Button on right side */}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100104&contentType=I")}
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


              <div className="flex items-center gap-2 whitespace-nowrap">
                {/* Left Icon */}
                {/* Text */}
                <p className="text-sm sm:text-base font-normal text-inherit">
                  {pages?.CON100105 || "Back Office System"}
                </p>

                {/* Edit Button (for admin only) */}
                {user?.isAdmin && (
                  <button
                    onClick={() =>
                      router.push(
                        "/content/cms?contentID=CON1001&contentTextID=CON100105&contentType=T"
                      )
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
            </div>


            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-full">
                <Image
                  src={`https://bexatm.com${pages?.CON100106}`}
                  alt={pages?.CON100107}
                  width={35}
                  height={35}
                  className="block dark:hidden"
                  unoptimized
                />

                {/* Edit Button on right side */}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100106&contentType=I")}
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

              <p className="text-sm sm:text-base font-normal text-inherit flex items-center gap-1 whitespace-nowrap">
                {pages?.CON100107}
                {user?.isAdmin ? (
                  <button
                    onClick={() =>
                      router.push(
                        "/content/cms?contentID=CON1001&contentTextID=CON100107&contentType=T"
                      )
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
                ) : null}
              </p>

            </div>


            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-full">
                <Image
                  src={`https://bexatm.com${pages?.CON100108}`}
                  alt={pages?.CON100109}
                  width={35}
                  height={35}
                  className="block dark:hidden"
                  unoptimized
                />

                {/* Edit Button on right side */}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100108&contentType=I")}
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

              <p className="text-sm sm:text-base font-normal text-inherit flex items-center gap-1 whitespace-nowrap">
                {pages?.CON100109}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100109&contentType=T")}
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

            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-full">
                <Image
                  src={`https://bexatm.com${pages?.CON100110}`}
                  alt={pages?.CON100111}
                  width={35}
                  height={35}
                  className="block dark:hidden"
                  unoptimized
                />

                {/* Edit Button on right side */}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100110&contentType=I")}
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

              <p className="text-sm sm:text-base font-normal text-inherit flex items-center gap-1 whitespace-nowrap">
                {pages?.CON100111}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100111&contentType=T")}
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


            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-full">
                <Image
                  src={`https://bexatm.com${pages?.CON100112}`}
                  alt={pages?.CON100113}
                  width={35}
                  height={35}
                  className="block dark:hidden"
                  unoptimized
                />

                {/* Edit Button on right side */}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100112&contentType=I")}
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

              <p className="text-sm sm:text-base font-normal text-inherit flex items-center gap-1 whitespace-nowrap">
                {pages?.CON100113}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100113&contentType=T")}
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


            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-full">
                <Image
                  src={`https://bexatm.com${pages?.CON100115}`}
                  alt={pages?.CON100114}
                  width={35}
                  height={35}
                  className="block dark:hidden"
                  unoptimized
                />

                {/* Edit Button on right side */}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100115&contentType=I")}
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

              <p className="text-sm sm:text-base font-normal text-inherit flex items-center gap-1 whitespace-nowrap">
                {pages?.CON100114}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100114&contentType=T")}
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


            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-full">
                <Image
                  src={`https://bexatm.com${pages?.CON100117}`}
                  alt={pages?.CON100116}
                  width={35}
                  height={35}
                  className="block dark:hidden"
                  unoptimized
                />

                {/* Edit Button on right side */}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100117&contentType=I")}
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

              <p className="text-sm sm:text-base font-normal text-inherit flex items-center gap-1 whitespace-nowrap">
                {pages?.CON100116}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100116&contentType=T")}
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


            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-full">
                <Image
                  src={`https://bexatm.com${pages?.CON100119}`}
                  alt={pages?.CON100118}
                  width={35}
                  height={35}
                  className="block dark:hidden"
                  unoptimized
                />

                {/* Edit Button on right side */}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100119&contentType=I")}
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

              <p className="text-sm sm:text-base font-normal text-inherit flex items-center gap-2 whitespace-nowrap">
                {pages?.CON100118}
                {user?.isAdmin ? (

                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1001&contentTextID=CON100118&contentType=T")}
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
