"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
  preview?: string;
}

const BackOfficeSystemEdit: React.FC = () => {
  const router = useRouter();
  const [features, setFeatures] = useState<Feature[]>([]);
  const [image, setImage] = useState<File | null>(null);

  // Load features from API
  const loadFeatures = async () => {
    try {
      const res = await fetch(
        "https://bexatm.com/ContentManageSys.php?contentId=B001"
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
    const { name, value } = e.target;
    setFeatures((prev) =>
      prev.map((f, i) => (i === index ? { ...f, [name]: value } : f))
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
      formData.append("filePath", "/images/");

      await fetch("https://bexatm.com/ImageUpload.php", {
        method: "POST",
        body: formData,
      });

      setFeatures((prev) =>
        prev.map((f, i) =>
          i === index
            ? { ...f, image: `/images/${file.name}`, preview: URL.createObjectURL(file) }
            : f
        )
      );
      setImage(file);
    }
  };

  // Save features
  const saveFeatures = async () => {
    try {
      await fetch("https://bexatm.com/ContentManageSys.php?contentId=B001", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(features),
      });
      alert("Back Office System features updated!");
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
          <div className="bg-white dark:bg-dark w-full h-full max-w-4xl mx-auto p-8 overflow-auto relative rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Edit Back Office System
            </h2>

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
                    Subtitle
                  </label>
                  <input
                    type="text"
                    name="subtitle"
                    value={feature.subtitle}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded"
                  />

                  <label className="block mb-2 text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={feature.description}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded h-24"
                  />

                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">
                      Image
                    </label>
                    <Image
                      src={feature.preview || `https://bexatm.com${feature.image}`}
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

            {/* Close Button */}
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

export default BackOfficeSystemEdit;
