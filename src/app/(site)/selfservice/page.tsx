"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import contentData from "../../../Mock.db/S001.json"; // <-- Import JSON

interface Feature {
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
  const [showEditor, setShowEditor] = useState(false);
  const [features, setFeatures] = useState<any>(contentData);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  // Load features data from JSON
  const loadFeatures = () => {
    // setFeatures(featuresData as Feature[]);
  };

  useEffect(() => {
    // loadFeatures();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setFeatures((prev) =>
      prev.map((f, i) => (i === index ? { ...f, [name]: value } : f))
    );
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    const url = URL.createObjectURL(file);
    setPreview(url);
    setFeatures((prev) =>
      prev.map((f, i) => (i === index ? { ...f, image: url } : f))
    );
  };

  const saveFeatures = () => {
    console.log("Saved features:", features);
    alert("Features saved (mock). Replace with API call!");
  };

  if (!features.length) return null;

  return (
    <section className="relative overflow-hidden">
      {/* Heading */}
      <div className="relative text-center mb-16 mt-12 bg-[url('/images/background.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg">
        <div className="bg-black/50 rounded-2xl px-6 py-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
            Self Service
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-200">
            Enablement of Employee Self Service in the Mobile App as well as
            Cloud, allowing employees to apply for Leave, On-duty, Overtime,
            and other requests seamlessly. This screen empowers users to manage
            their own attendance-related activities anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
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
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5 items-center">
                {feature.icon && (
                  <Icon icon={feature.icon} className="text-2xl text-primary" />
                )}
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
              <div className="relative rounded-2xl overflow-hidden group shadow-lg">
                <Link href={feature.href}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
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

      {/* Edit Button */}
      <button
        onClick={() => router.push("/content/blogs")}
        className="absolute bottom-5 right-5 z-50 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-opacity-80 transition"
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

      {/* Edit Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center">
          <div className="bg-white dark:bg-dark w-full h-full max-w-4xl mx-auto p-8 overflow-auto relative rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Edit Self Service Features
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveFeatures();
              }}
            >
              {features.map((feature, index) => (
                <div key={index} className="mb-8 border-b pb-6">
                  <label className="block mb-2 text-sm font-medium">Title</label>
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
                    className="w-full mb-4 p-2 border rounded"
                  />

                  <label className="block mb-2 text-sm font-medium">Image</label>
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

              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Save Features
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Selfservice;
