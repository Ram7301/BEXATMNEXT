"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaAt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useContentManage } from "@/app/context/ContentManageContext";

const Footer: React.FC = () => {
  const router = useRouter();
  const [features, setFeatures] = useState<any>({});
  const { user } = useContentManage();

  // Load Footer Data
  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const res = await fetch(
          "https://bexatm.com/ContentManageSys.php?contentId=CON1014"
        );
        const data = await res.json();
        console.log("Footer Data:", data);
        setFeatures(data);
      } catch (error) {
        console.error("Error loading footer data:", error);
      }
    };
    loadFeatures();
  }, []);

  if (!Object.keys(features).length) return null;

  return (
    <footer className="bg-dark text-white relative">
      {/* Edit Button */}
      {/* {user?.isAdmin ? (
        <button
          onClick={() => router.push("/content/footer")}
          className="absolute top-1 right-5 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
          title="Edit Footer Section"
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
      ) : null} */}

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        {/* Top CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-3">
          <div className="text-center md:text-left">
            <p className="text-3xl font-semibold">{features.CON100101}
              {user?.isAdmin ? (
                <button
                  onClick={() => router.push("/content/cms?contentID=CON1014&contentTextID=CON100101&contentType=T")}
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
            </p>
            <p className="text-white/70 text-lg mt-1">{features.CON100102}
              {user?.isAdmin ? (
                <button
                  onClick={() => router.push("/content/cms?contentID=CON1014&contentTextID=CON100102&contentType=T")}
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
            </p>
          </div>
          <Link
            href={features.CON100104 || "#"}
            className="relative bg-primary text-white font-bold text-lg py-3 px-8 rounded-full hover:bg-white hover:text-dark duration-300 inline-flex items-center justify-center"
          >
            {features.CON100103}

            {/* {user?.isAdmin ? (
              <button
                onClick={(e) => {
                  e.preventDefault(); // prevent navigating when editing
                  router.push(
                    "/content/cms?contentID=CON1014&contentTextID=CON100102&contentType=T"
                  );
                }}
                className="absolute -top-2 -right-2 bg-primary text-white p-1.5 rounded-full shadow-lg hover:bg-opacity-80 transition"
                title="Edit CTA Section"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
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
            ) : null} */}
          </Link>

        </div>

        {/* Main Content */}
        <div className="py1 border-b border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Address Section */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold mb-1">Address:</h2>
              <p className="text-white/80 mb-1">{features.CON100105}
                {user?.isAdmin ? (
                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1014&contentTextID=CON100105&contentType=T")}
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
              </p>
              <p className="text-white/80 mb-1">{features.CON100106}
                {user?.isAdmin ? (
                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1014&contentTextID=CON100106&contentType=T")}
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
              </p>

              <h2 className="text-2xl font-semibold mb-1">Email:</h2>
              <Link
                href={`mailto:${features.CON100107}`}
                className="flex items-center gap-3 text-white/80 text-sm font-normal hover:text-[#00B56A] transition-colors mb-1"
              >
                <span className="flex items-center text-sm font-normal">
                  {features.CON100107}

                  {user?.isAdmin && (  
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(
                          "/content/cms?contentID=CON1014&contentTextID=CON100107&contentType=T"
                        );
                      }}
                      className="ml-2 bg-primary text-white p-1.5 rounded-full shadow-lg hover:bg-opacity-80 transition"
                      title="Edit Email"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5"
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
                </span>
              </Link>


              <h2 className="text-2xl font-semibold mb-1">Phone:</h2>
              <p className="text-white/80 mb-1">{features.CON100108}
                {user?.isAdmin ? (
                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1014&contentTextID=CON100108&contentType=T")}
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
              </p>

              {/* <h2 className="text-2xl font-semibold mb-1">Mobile:</h2>
              <p className="text-white/80">{features.CON100109}
                {user?.isAdmin ? (
                  <button
                    onClick={() => router.push("/content/cms?contentID=CON1014&contentTextID=CON100109&contentType=T")}
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
              </p> */}
            </div>

            {/* Links Column 1 */}
            {/* <div className="lg:col-span-3">
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-white/40 hover:text-white text-sm">
                  {features.CON100110}
                </Link>
                <Link href="/about" className="text-white/40 hover:text-white text-sm">
                  {features.CON100111}
                </Link>
                <Link href="/solutions" className="text-white/40 hover:text-white text-sm">
                  {features.CON100112}
                </Link>
                <Link href="/pricing" className="text-white/40 hover:text-white text-sm">
                  {features.CON100113}
                </Link>
              </div>
            </div> */}

            {/* Links Column 2 */}
            {/* <div className="lg:col-span-2">
              <div className="flex flex-col gap-3">
                <Link href="/blog" className="text-white/40 hover:text-white text-sm">
                  {features.CON100114}
                </Link>
                <Link href="/careers" className="text-white/40 hover:text-white text-sm">
                  {features.CON100115}
                </Link>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center pt-2">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Beyondexs. All Rights Reserved
          </p>
          <div className="flex gap-6">
            <Link
              href="/terms&policy"
              className="text-white/40 hover:text-white text-sm transition"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-white/40 hover:text-white text-sm transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
