"use client";

import { useEffect, useState } from "react";
import { useContentManage } from "@/app/context/ContentManageContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import contentData from "../../../Mock.db/C001.json";
import ContentData from '../../../Mock.db/C001.json';

const Hero: React.FC = () => {
  const router = useRouter();
  const [pages, setPages] = useState<any>(ContentData);
  const { user } = useContentManage();

  const loadPages = async () => {
    try {
      // const res = await fetch("/api/content-manage?contentId=C001");
      const res = await fetch(
        "https://bexatm.com/ContentManageSys.php?contentId=C001"
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
    // loadPages();
  }, []);

  return (
    <section className="!py-0 relative">
      {/* Edit Button moved to top-right */}
      {user?.isAdmin ? (
        <button
          onClick={() => router.push("/content/hero")}
          className="absolute top-5 right-5 z-50 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-opacity-80 transition"
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
              {pages?.title}
            </h1>
            <div className="flex flex-col xs:flex-row justify-center md:justify-start gap-4">
              <Link
                href="/contactus"
                className="px-8 py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-white text-base font-semibold rounded-full hover:cursor-pointer"
              >
                {pages?.Button1}
              </Link>
            </div>
          </div>

          <div className="hidden md:block absolute top-18 -right-15">
            {pages?.image && (
              <Image
                src={`https://bexatm.com${pages?.image || null}`}
                alt="heroImg"
                width={882}
                height={816}
                unoptimized
              />
            )}
          </div>
        </div>

        {/* Bottom feature icons */}
        <div className="md:absolute bottom-0 md:right-0 xl:-right-1 bg-white dark:bg-black py-12 px-8 mobile:px-16 md:pl-16 md:pr-[95px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-24">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center dark:text-white text-black">
            {pages &&
              pages?.lables?.map((item, i) => (
                <div key={i} className="flex flex-col sm:items-center gap-2">
                  <Image
                    src={`https://bexatm.com${item.src}`}
                    alt={item.label}
                    width={35}
                    height={35}
                    className="block dark:hidden"
                    unoptimized
                  />
                  <Image
                    src={`https://bexatm.com${item.src}`}
                    alt={item.label}
                    width={35}
                    height={35}
                    className="hidden dark:block"
                    unoptimized
                  />
                  <p className="text-sm sm:text-base font-normal text-inherit">
                    {item.label}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
