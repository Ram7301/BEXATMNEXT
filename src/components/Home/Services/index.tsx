"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

import ContentData from '../../../Mock.db/C002.json';

interface Feature {
  title: string;
  icon: string;
  description: string;
  detail: string;
  image: string;
  badge: string;
  reverse: boolean;
}

const Categories = () => {
  const [features, setFeatures] = useState<Feature[]>(ContentData);
  const [showEditor, setShowEditor] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  // Load features
  useEffect(() => {
    const loadFeatures = async () => {
      try {
        const res = await fetch("/api/content-manage?contentId=C002");
        const data = await res.json();
        setFeatures(data);
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
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
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
    await fetch("/api/content-manage?contentId=C002", {
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
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-40 lg:text-52 font-medium text-black dark:text-white tracking-tight leading-11">
            Key Features
          </h2>
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
            </div>

            {/* Image Block */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden group">
                <Link href="#">
                  <Image
                    src={feature.image}
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

    {/* Edit Button (below section, right side, same as Properties) */}
<div className="flex justify-end mt-10">
  <button
    onClick={() => setShowEditor(true)}
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
</div>
</div>



      {/* Edit Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center">
          <div className="bg-white dark:bg-dark w-full h-full max-w-4xl mx-auto p-8 overflow-auto relative rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Services Section</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveFeatures();
              }}
            >
              {features.map((feature, index) => (
                <div key={index} className="mb-8 border-b pb-6">
                  <label className="block mb-2 text-sm font-medium">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={feature.title}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded"
                  />

                  <label className="block mb-2 text-sm font-medium">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={feature.description}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded"
                  />

                  <label className="block mb-2 text-sm font-medium">
                    Detail
                  </label>
                  <textarea
                    name="detail"
                    value={feature.detail}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded"
                  />

                  <label className="block mb-2 text-sm font-medium">
                    Image
                  </label>
                  {preview && (
                    <div className="mb-4">
                      <Image
                        src={preview}
                        alt="Preview"
                        width={200}
                        height={150}
                        unoptimized
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, index)}
                    className="mb-4"
                  />
                </div>
              ))}

              <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
                Save
              </button>
            </form>

            {/* Close */}
            <button
              className="absolute top-4 right-6 text-gray-500 hover:text-black dark:hover:text-white text-3xl"
              onClick={() => setShowEditor(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Categories;
