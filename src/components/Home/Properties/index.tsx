"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContentManage } from "@/app/context/ContentManageContext";

const Properties = () => {
  const router = useRouter();
  const [features, setFeatures] = useState<any>({});
  const { user } = useContentManage();
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");




  // Load features
  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const res = await fetch(
          "https://bexatm.com/ContentManageSys.php?contentId=CON1003"
        );
        const data = await res.json();
        console.log(data, "enhancement");
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
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 -mt-65">
        {/* Heading + Edit Button */}
        <div className="flex items-center justify-between mb-16 -mt-28">
          {/* Spacer for symmetry */}
          <div className="w-10"></div>

          <h2 className="flex-1 text-center text-40 lg:text-52 font-medium text-black dark:text-white tracking-tight leading-11">
            Enhancement Features
          </h2>

          {user?.isAdmin ? (
            <button
              onClick={() => router.push("/content/enhancement")}
              className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
              title="Edit Properties Section"
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
          ) : (
            <div className="w-10"></div>
          )}
        </div>

        <div
          className={`flex flex-col ${features.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-10 mb-24`}
        >
          {/* Text Content */}
          <div className="lg:w-1/2">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon icon={features.CON100107} className="text-2xl text-primary" />

              {features.CON100101}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1003&contentTextID=CON100101&contentType=T")}
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
            <h2 className="lg:text-42 text-40 mt-4 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
              {features.CON100102}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1003&contentTextID=CON100102&contentType=T")}
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
                  onClick={() => router.push("/content/cms?contentID=CON1003&contentTextID=CON100103&contentType=T")}
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
                    onClick={() => router.push("/content/cms?contentID=CON1003&contentTextID=CON100104&contentType=T")}
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
                  <h3 className="text-white text-2xl">{features.CON100105}</h3>
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1003&contentTextID=CON100105&contentType=T")}
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
            } items-center gap-10 mb-2`}
        >
          {/* Text Content */}
          <div className="lg:w-1/2">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon icon={features.CON100114} className="text-2xl text-primary" />
              {features.CON100108}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1003&contentTextID=CON100108&contentType=T")}
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
            <h2 className="lg:text-42 text-40 mt-4 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
              {features.CON100109}
              {user?.isAdmin ? (

                <button
                  onClick={() => router.push("/content/cms?contentID=CON1003&contentTextID=CON100109&contentType=T")}
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
                  onClick={() => router.push("/content/cms?contentID=CON1003&contentTextID=CON100110&contentType=T")}
                  className="bg-primary text-white p-1 rounded-full shadow-lg hover:bg-opacity-80 transition"
                  title="Edit Section"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 2`4 24"
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
                    onClick={() => router.push("/content/cms?contentID=CON1003&contentTextID=CON100111&contentType=T")}
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
                  <h3 className="text-white text-2xl">{features.CON100112}</h3>
                  {user?.isAdmin ? (

                    <button
                      onClick={() => router.push("/content/cms?contentID=CON1003&contentTextID=CON100112&contentType=T")}
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

export default Properties;
