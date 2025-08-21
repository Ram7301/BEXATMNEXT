"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Properties: React.FC = () => {
  const [features, setFeatures] = useState<any[]>([]);

  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const res = await fetch("/api/content-manage?contentId=C003");
        const data = await res.json();
        setFeatures(data);
      } catch (error) {
        console.error("Error loading features:", error);
      }
    };
    loadFeatures();
  }, []);

  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 -mt-65">
        <div className="mb-16 flex flex-col gap-3 -mt-28">
          <h2 className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11">
            Enhancement Features
          </h2>
        </div>

        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-10 mb-24`}
          >
            {/* Text Content */}
            <div className="lg:w-1/2">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
                <Icon icon={feature.icon} className="text-2xl text-primary" />
                {feature.title}
              </p>
              <h2 className="lg:text-42 text-40 mt-4 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
                {feature.subtitle}
              </h2>
              <p className="text-dark/50 dark:text-white/50 text-lg leading-[1.3]">
                {feature.description}
              </p>
            </div>

            {/* Image Block */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href={feature.href}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={680}
                    height={386}
                    unoptimized={true}
                  />
                </Link>
                <Link
                  href={feature.href}
                  className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-10 pb-10 group-hover:top-0 duration-500"
                >
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-white text-2xl">{feature.badge}</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
