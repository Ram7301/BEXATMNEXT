"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

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

const Assesment: React.FC = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const loadFeatures = async () => {
    const data: Feature[] = [
      {
        title: "Category",
        subtitle: "Review and Manage Requests",
        description:
          "Category is a section that groups related evaluation criteria together. Each category focuses on a specific aspect of performance or skills, such as technical skills, communication, teamwork, productivity, or behaviour and attitude, helping make the assessment more structured and organized.",
        image: "/images/categories.png",
        href: "#approval",
        badge: "Core",
        reverse: true,
        icon: "mdi:check-decagram", // example icon
      },

      {
        title: "Assessment",
        subtitle: "Capture Real-Time Events",
        description:
          "In an assessment, you can define the number of questions, the minimum score required to pass, the number of attempts permitted, and the duration of the assessment (in days), allowing the system to structure and manage the evaluation effectively. ",
        image: "/images/assesmentlist.png",
        href: "#onsiteactivity",
        badge: "Core",
        reverse: false,
        icon: "mdi:map-marker",
      },
      {
        title: "Question Groups",
        subtitle: "Organize Evaluation Topics",
        description:
          "Question Groups are sets of related questions grouped under a specific topic or category. They help organize the assessment by focusing on particular skills, knowledge areas, or competencies, making it easier to evaluate employees in a structured and consistent way .",
        image: "/images/questiongroup.png",
        href: "#timesheet",
        badge: "Core",
        reverse: true,
        icon: "mdi:clock-time-eight",
      },
      {
        title: "Question & Answer",
        subtitle: "Capture Candidate Responses",
        description:
          "Question & Answer refer to the individual questions presented to candidates and the corresponding answers they provide. This component captures the candidates’ responses to evaluate skills, knowledge, or performance based on predefined criteria, allowing managers or the system to assess competencies accurately.",
        image: "/images/q&a.png",
        href: "#timesheet",
        badge: "Core",
        reverse: false,
        icon: "mdi:clock-time-eight",
      },
      {
        title: "Session",
        subtitle: "Log Work Hours & Tasks",
        description:
          "Within a session, documents can be uploaded for each category, and links to study materials on websites or YouTube can be provided, enabling participants to access relevant resources while taking the assessment. ",
        image: "/images/session.png",
        href: "#timesheet",
        badge: "Core",
        reverse: true,
        icon: "mdi:clock-time-eight",
      },



    ];
    setFeatures(data);
  };

  useEffect(() => {
    loadFeatures();
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
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setFeatures((prev) =>
        prev.map((f, i) =>
          i === index ? { ...f, image: URL.createObjectURL(file) } : f
        )
      );
    }
  };

  const saveFeatures = async () => {
    console.log("Saving features:", features);
    alert("Features saved (mock). Replace with API call!");
  };

  if (!features.length) return null;

  return (
    <section className="relative overflow-hidden">
      {/* ✅ Heading with Background Image */}
      <div className="relative text-center mb-16 mt-12 bg-[url('/images/assessment2.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg">
        <div className="bg-black/50 rounded-2xl px-6 py-16">
          <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
            Assessment
          </h2>
          <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-200">
            Assessment is a structured platform or process used to evaluate employees’ skills, knowledge, performance, and overall competencies against predefined standards. It helps organizations measure employee strengths and areas for improvement, provide constructive feedback, support training and development, and ensure fair performance evaluations. Such a system promotes accountability, improves productivity, and aligns employee growth with organizational goals.
          </p>
        </div>
      </div>

      {/* ✅ Feature Cards with Icons */}
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

      {/* ✅ Edit Button */}
      <div className="flex justify-end mt-10">
        <button
          onClick={() => setShowEditor(true)}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
          title="Edit Features"
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

      {/* ✅ Edit Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center">
          <div className="bg-white dark:bg-dark w-full h-full max-w-4xl mx-auto p-8 overflow-auto relative rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Manager Desk Features</h2>

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

              <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-opacity-90">
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

export default Assesment;
