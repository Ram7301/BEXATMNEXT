"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Heading {
  title: string;
  description: string;
  background: string;
}

interface Feature {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  badge: string;
  reverse: boolean;
  icon?: string;
}

const Selfservice: React.FC = () => {
  const router = useRouter();
  const [heading, setHeading] = useState<Heading | null>(null);
  const [features, setFeatures] = useState<Feature[]>([]);

  // ✅ Load from JSON/API
  const loadData = async () => {
    try {
      const res = await fetch("/data/selfservice.json"); // 👈 or API
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setHeading(data.heading);
      setFeatures(data.features);
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!heading || !features.length) return null;

  return (
    <section className="relative overflow-hidden">
      {/* ✅ Dynamic Heading */}
      <div
        className="relative text-center mb-16 mt-12 bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
        style={{ backgroundImage: `url(${heading.background})` }}
      >
        <div className="bg-black/50 rounded-2xl px-6 py-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
            {heading.title}
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-200">
            {heading.description}
          </p>
        </div>
      </div>

      {/* ✅ Features */}
      <div className="container max-w-7xl mx-auto px-5 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-10 mb-24`}
          >
            {/* Text Block */}
            <div className="lg:w-1/2">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
                {feature.icon && (
                  <Icon icon={feature.icon} className="text-2xl text-primary" />
                )}
                {feature.title}
              </p>
              <h2 className="lg:text-42 text-40 mt-4 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
                {feature.subtitle}
              </h2>
              <p className="text-dark/50 dark:text-white/50 text-base leading-snug whitespace-pre-line">
                {feature.description}
              </p>
            </div>

            {/* Image Block */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden group shadow-lg">
                <Link href={feature.href}>
                  <Image
                    src={feature.image}
                    alt={`${feature.title} illustration`}
                    width={680}
                    height={386}
                    unoptimized
                  />
                </Link>
                <Link
                  href={feature.href}
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-end pl-10 pb-10 group-hover:top-0 duration-500"
                >
                  <h3 className="text-white text-2xl">{feature.badge}</h3>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Edit Button */}
      <div className="flex justify-end mt-10">
        <button
          onClick={() => router.push("/content/emp")}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
          title="Edit Self Service"
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
      </div>
    </section>
  );
};

export default Selfservice;
