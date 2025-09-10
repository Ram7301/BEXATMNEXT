"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import contentData from "../../../Mock.db/T001.json"; // ✅ load JSON

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

const Timemanagement: React.FC = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [features, setFeatures] = useState<any>(contentData);
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    // const data: Feature[] = contentData as Feature[];
    // setFeatures(data);
    // setPreviews(data.map((f) => f.image));
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviews((prev) => prev.map((p, i) => (i === index ? url : p)));
    setFeatures((prev) =>
      prev.map((f, i) => (i === index ? { ...f, image: url } : f))
    );
  };

  const saveFeatures = async () => {
    console.log("Saving features:", features);
    alert("Features saved (mock). Replace with API call!");
  };

  if (!features.length) return null;

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="relative text-center mb-16 mt-12 bg-[url('/images/biometric.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg">
        <div className="bg-black/50 rounded-2xl px-6 py-16">
          <h2 className="text-40 lg:text-52 font-medium text-white tracking-tight leading-11">
            Time Management Features
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-200">
            Manage employee attendance, work hours, and productivity with dedicated
            check-in, check-out, task tracking, and reporting screens.
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
            <div className="lg:w-1/2">
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex items-center gap-2.5">
                {feature.icon && (
                  <Icon
                    icon={feature.icon}
                    className="text-2xl text-primary flex-shrink-0"
                  />
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

            {feature.image && (
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden group shadow-lg">
                  <Link href={feature.href}>
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
                    href={feature.href}
                    className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-end pl-10 pb-10 group-hover:top-0 duration-500"
                  >
                    <h3 className="text-white text-2xl">{feature.badge}</h3>
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Edit Button */}
      <div className="flex justify-end mt-10">
        <button
          onClick={() => setShowEditor(true)}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
          title="Edit Features"
        >
          <Icon icon="mdi:pencil" className="w-5 h-5" />
        </button>
      </div>

      {/* Edit Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center">
          <div className="bg-white dark:bg-dark w-full h-full max-w-4xl mx-auto p-8 overflow-auto relative rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Time Management Features</h2>

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

                  <label className="block mb-2 text-sm font-medium">Subtitle</label>
                  <input
                    type="text"
                    name="subtitle"
                    value={feature.subtitle}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded"
                  />

                  <label className="block mb-2 text-sm font-medium">Description</label>
                  <textarea
                    name="description"
                    value={feature.description}
                    onChange={(e) => handleChange(e, index)}
                    className="w-full mb-4 p-2 border rounded"
                  />

                  <label className="block mb-2 text-sm font-medium">Image</label>
                  {previews[index] && (
                    <div className="mb-4">
                      <Image
                        src={previews[index]}
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

export default Timemanagement;
