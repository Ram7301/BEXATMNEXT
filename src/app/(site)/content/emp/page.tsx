"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Feature {
  id?: string;
  title: string;
  icon: string;
  description: string;
  detail: string;
  image: string;
  badge: string;
  reverse: boolean;
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
  preview?: string;
}

const CategoriesEdit: React.FC = () => {
  const router = useRouter();
  const [features, setFeatures] = useState<Feature[]>([]);
  const [image, setImage] = useState<File | null>(null);

  // Load features
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

  // Handle text change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value, type, checked } = e.target as any;
    setFeatures((prev) =>
      prev.map((f, i) =>
        i === index
          ? { ...f, [name]: type === "checkbox" ? checked : value }
          : f
      )
    );
  };

  // Handle image change
  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("filePath", "/images/categories/");

      await fetch("https://bexatm.com/ImageUpload.php", {
        method: "POST",
        body: formData,
      });

      setFeatures((prev) =>
        prev.map((f, i) =>
          i === index
            ? {
                ...f,
                image: `/images/categories/${file.name}`,
                preview: URL.createObjectURL(file),
              }
            : f
        )
      );
      setImage(file);
    }
  };

  // Save features
  const saveFeatures = async () => {
    try {
      await fetch("https://bexatm.com/ContentManageSys.php?contentId=S001", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(features),
      });
      alert("Categories updated!");
    } catch (err) {
      console.error(err);
      alert("Failed to save features");
    }
  };

  if (!features.length) return null;

  return (
    <section className="!py-0 relative">
      {features && (
        <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center">
          <div className="bg-white dark:bg-dark w-full h-full max-w-5xl mx-auto p-8 overflow-auto relative rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Categories</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveFeatures();
              }}
            >
              {features.map((feature, index) => (
                <div key={index} className="mb-10 border-b pb-6">
                  {/* Title */}
                  <label className="block mb-2 text-sm font-medium">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={feature.title}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded"
                  />

                  {/* Icon */}
                  <label className="block mb-2 text-sm font-medium">Icon</label>
                  <input
                    type="text"
                    name="icon"
                    value={feature.icon}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded"
                  />

                  {/* Description */}
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

                  {/* Detail */}
                  {/* <label className="block mb-2 text-sm font-medium">Detail</label>
                  <textarea
                    name="detail"
                    value={feature.detail}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded h-24"
                  /> */}

              

                  {/* Bullet Fields */}
                  {/* {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        name={`name${i + 1}`}
                        placeholder={`Bullet ${i + 1} Name`}
                        value={(feature as any)[`name${i + 1}`] || ""}
                        onChange={(e) => handleChange(e, index)}
                        className="w-1/3 p-2 border rounded"
                      />
                      <input
                        type="text"
                        name={`description${i + 1}`}
                        placeholder={`Bullet ${i + 1} Description`}
                        value={(feature as any)[`description${i + 1}`] || ""}
                        onChange={(e) => handleChange(e, index)}
                        className="flex-1 p-2 border rounded"
                      />
                    </div>
                  ))} */}

                  {/* Image */}
                  <div className="mb-4 mt-6">
                    <label className="block mb-2 text-sm font-medium">
                      Image
                    </label>
                    <Image
                      src={
                        feature.preview ||
                        `https://bexatm.com${feature.image}`
                      }
                      alt="Preview"
                      width={200}
                      height={150}
                      unoptimized
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, index)}
                      className="mt-2"
                    />
                  </div>
                </div>
              ))}

              <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">
                Save
              </button>
            </form>

            {/* Close */}
            <button
              className="absolute top-4 right-6 text-gray-500 hover:text-black dark:hover:text-white text-3xl"
              onClick={() => router.back()}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoriesEdit;
