"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContentManage } from "@/app/context/ContentManageContext";

interface FeatureItem {
  name: string;
  description?: string;
}

import ContentData from '../../../Mock.db/C002.json';

interface Feature {
  title: string;
  icon: string;
  description: string;
  detail: string;
  image: string;
  badge: string;
  reverse: boolean;
  features?: (string | FeatureItem)[];
  isBullet?: boolean;
  name1?: string;
  description1?: string;
  name2?: string;
  description2?: string;
  name3?: string;
  description3?: string;
  name4?: string;
  description4?: string;
  name5?: string;
  description5?: string;
  name6?: string;
  description6?: string;
  name7?: string;
  description7?: string;
  name8?: string;
  description8?: string;
}

const Categories = () => {
<<<<<<< HEAD
  const [features, setFeatures] = useState<Feature[]>(ContentData);
  const [showEditor, setShowEditor] = useState(false);
=======
  const router = useRouter();
  const [features, setFeatures] = useState<Feature[]>([]);
  const { user } = useContentManage();
>>>>>>> b7284a74710eace5f9dad38a4fd851592e729613
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  // Load features
  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const res = await fetch(
          "https://bexatm.com/ContentManageSys.php?contentId=C002"
        );
        const data = await res.json();
        setFeatures(data);
        setPreview(data.image);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };
    // loadFeatures();
  }, []);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setFeatures((prev) =>
      prev.map((f, i) => (i === index ? { ...f, [name]: value } : f))
    );
  };

  // Handle image change
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setFeatures((prev) =>
        prev.map((f, i) =>
          i === index ? { ...f, image: `/images/categories/${file.name}` } : f
        )
      );
    }
  };

  // Save features
  const saveFeatures = async () => {
    await fetch("https://bexatm.com/ContentManageSys.php?contentId=C002", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(features),
    });
    uploadImage();
    alert("Services updated!");
  };

  // Upload image
  const uploadImage = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("filePath", "/images/categories/");
    await fetch("/api/uploads", { method: "POST", body: formData });
  };

  if (!features.length) return null;

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
            Key Features
          </h2>

          {/* Edit Button on Right */}
          {user?.isAdmin ? (
            <button
              onClick={() => router.push("/content/services")}
              className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
              title="Edit Services Section"
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
            <div className="w-10"></div> // keeps layout balanced if no button
          )}
        </div>

        {/* Feature Cards */}
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
                <Icon icon={feature.icon} className="text-2xl text-primary" />
                {feature.title}
              </p>
              <h2 className="lg:text-42 text-40 mt-4 mb-2 font-medium leading-[1.2] text-dark dark:text-white">
                {feature.description}
              </h2>
              <p className="text-dark/50 dark:text-white/50 text-lg leading-[1.3]">
                {feature.detail}
              </p>

              {feature.isBullet && (
                <ul className="mt-4 list-disc list-inside text-dark/70 dark:text-white/70 text-base space-y-2">
                  {feature.name1 && (
                    <li>
                      <strong>{feature.name1}</strong>
                      {feature.description1 && ` – ${feature.description1}`}
                    </li>
                  )}
                  {feature.name2 && (
                    <li>
                      <strong>{feature.name2}</strong>
                      {feature.description2 && ` – ${feature.description2}`}
                    </li>
                  )}
                  {feature.name3 && (
                    <li>
                      <strong>{feature.name3}</strong>
                      {feature.description3 && ` – ${feature.description3}`}
                    </li>
                  )}
                  {feature.name4 && (
                    <li>
                      <strong>{feature.name4}</strong>
                      {feature.description4 && ` – ${feature.description4}`}
                    </li>
                  )}
                  {feature.name5 && (
                    <li>
                      <strong>{feature.name5}</strong>
                      {feature.description5 && ` – ${feature.description5}`}
                    </li>
                  )}
                  {feature.name6 && (
                    <li>
                      <strong>{feature.name6}</strong>
                      {feature.description6 && ` – ${feature.description6}`}
                    </li>
                  )}
                  {feature.name7 && (
                    <li>
                      <strong>{feature.name7}</strong>
                      {feature.description7 && ` – ${feature.description7}`}
                    </li>
                  )}
                  {feature.name8 && (
                    <li>
                      <strong>{feature.name8}</strong>
                      {feature.description8 && ` – ${feature.description8}`}
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
                    src={`https://bexatm.com/${feature.image}`}
                    alt={feature.title}
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

export default Categories;
