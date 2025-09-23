"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const [features, setFeatures] = useState<any[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  // ✅ Load features from API
  const loadFeatures = async () => {
    try {
      const res = await fetch(
        "https://bexatm.com/ContentManageSys.php?contentId=S001"
      );
      if (!res.ok) throw new Error("Failed to fetch features");
      const data = await res.json();
      setFeatures(data);
    } catch (err) {
      console.error("Error loading features:", err);
    }
  };

  useEffect(() => {
    loadFeatures();
  }, []);

  // ✅ Handle text change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setFeatures((prev) =>
      prev.map((f, i) => (i === index ? { ...f, [name]: value } : f))
    );
  };

  // ✅ Handle image change
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const url = URL.createObjectURL(file);
      setPreview(url);
      setFeatures((prev) =>
        prev.map((f, i) =>
          i === index ? { ...f, image: `/images/${file.name}` } : f
        )
      );
    }
  };

  // ✅ Save changes
  const saveFeatures = async () => {
    await fetch("https://bexatm.com/ContentManageSys.php?contentId=S001", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(features),
    });
    uploadImage();
    alert("✅ Features saved!");
  };

  // ✅ Upload image
  const uploadImage = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("filePath", "/images/"); // 👈 store inside /images/
    const res = await fetch("/api/uploads", { method: "POST", body: formData });
    const data = await res.json();
    setPreview(data?.filePath);
  };

  if (!features.length) return null;

  return (
    <section className="relative overflow-hidden">
      {/* ✅ Heading with Background */}
      <div className="relative text-center mb-16 mt-12 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg">
        <div className="bg-black/50 rounded-2xl px-6 py-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
            Employee Self Service
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-200">
            Enablement of Employee Self Service in the Mobile App as well as
            Cloud, allowing employees to apply for Leave, On-duty, Overtime,
            and other requests seamlessly. This screen empowers users to manage
            their own attendance-related activities anytime, anywhere.
          </p>
        </div>
      </div>

      {/* ✅ Features */}
      <div className="container max-w-7xl mx-auto px-5 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
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
                    src={feature.image} // 👈 directly from /images/
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

      {/* <div className="absolute top-6 right-6 z-[9999]">
        <button
          onClick={() => router.push("/content/emp")}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
          title="Edit Back Office System"
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
      </div> */}

    </section>
  );
};

export default Selfservice;
