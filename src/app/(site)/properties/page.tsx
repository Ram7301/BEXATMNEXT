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

const Timemanagement: React.FC = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const loadFeatures = async () => {
    const data: Feature[] = [
  {
    title: "Biometric",
    subtitle: "Secure Login & Accurate Records",
    description:
      "Using fingerprint and face recognition, biometrics helps in attendance tracking and secure access. Employees scan their fingerprint or face to log in, which ensures accurate records and better security.",
    image: "/images/control.png",
    href: "#checkin",
    badge: "Attendance",
    reverse: false,
    icon: "mdi:login",
  },
  {
    title: "Geofencing",
    subtitle: "Location-Based Attendance Control",
    description:
      "Geofencing uses latitude, longitude, and a set radius to create a virtual boundary around the office. Employees can mark attendance only when they are within this boundary, ensuring accurate records, controlled access, and improved security.",
    image: "/images/Geofencing.png",
    href: "#checkin",
    badge: "Attendance",
    reverse: true,
    icon: "mdi:map-marker-radius",
  },
  {
    title: "Door Access",
    subtitle: "Smart Entry with Keycards & Biometrics",
    description:
      "Door access systems ensure that only authorized employees can enter. Employees can use keycards, PINs, fingerprints, or face recognition to unlock doors. This helps maintain security and keeps a record of who enters and exits the office.",
    image: "/images/door1.png",
    href: "#checkin",
    badge: "Attendance",
    reverse: false,
    icon: "mdi:door",
  },
  {
    title: "Manager Manual",
    subtitle: "Manager-Assisted Attendance Logging",
    description:
      "Manager manual attendance allows a manager to record attendance on behalf of employees. This is used when employees are unable to mark their own attendance through biometrics, geofencing, or other automated systems, ensuring accurate records are maintained.",
    image: "/images/managermanual.png",
    href: "#checkin",
    badge: "Attendance",
    reverse: true,
    icon: "mdi:login-variant",
  },
  {
    title: "Default Present",
    subtitle: "Auto-Mark Presence for Employees",
    description:
      "Default present attendance automatically marks employees as present for the day. If an employee is absent or on leave, the system updates their record accordingly, helping maintain accurate attendance records.",
    image: "", // Optional: Empty image handled
    href: "#checkin",
    badge: "Attendance",
    reverse: false,
    icon: "mdi:login-variant",
  },
  {
    title: "Check-In",
    subtitle: "Start-of-Day Time Tracking",
    description:
      "The Check-In screen records when users begin their workday. It ensures attendance accuracy and punctuality tracking.",
    image: "/images/checkin.png",
    href: "#checkin",
    badge: "Attendance",
    reverse: true,
    icon: "mdi:login-variant",
  },
  {
    title: "Check-Out",
    subtitle: "End-of-Day Work Logging",
    description:
      "The Check-Out screen logs when employees end their workday, supporting shift and productivity monitoring.",
    image: "/images/checkout.png",
    href: "#checkout",
    badge: "Time Logs",
    reverse: false,
    icon: "mdi:logout",
  },
  {
    title: "Movements",
    subtitle: "Department & Location Transfers",
    description:
      "Monitor employee check-ins, check-outs, and movement between departments or locations for better transparency.",
    image: "/images/movements.png",
    href: "#movements",
    badge: "Workforce",
    reverse: true,
    icon: "mdi:map-marker-path",
  },
  {
    title: "Daily Attendance",
    subtitle: "Day-to-Day Attendance Overview",
    description:
      "Daily Attendance refers to the record of an employee’s presence, absence, or work status for each day. It shows whether an employee was present, absent, on leave, on duty, working from home, or on a holiday on a particular date. Daily attendance helps organizations track work hours, calculate payroll, monitor punctuality, and manage leave balances.",
    image: "/images/dailyattendance.png",
    href: "#daily-attendance",
    badge: "Productivity",
    reverse: false,
    icon: "mdi:calendar-check",
  },
  {
    title: "Monthly Attendance",
    subtitle: "Attendance Insights & Reports",
    description:
      "Monthly Attendance is a comprehensive record that captures an employee’s work presence and absence throughout the month, indicating days they were present, absent, on leave, on duty, working remotely, or on holiday. It allows organizations to monitor work habits, process salaries accurately, track punctuality, and manage leave balances. Typically generated from daily attendance data using biometric devices, geofencing, or attendance software, it gives managers and HR teams a clear overview of each employee’s monthly activity for reporting and administrative purposes.",
    image: "/images/monthlyAttendance.png",
    href: "#monthly-attendance",
    badge: "Analytics",
    reverse: true,
    icon: "mdi:calendar-month",
  },
];

    setFeatures(data);
    setPreviews(data.map((f) => f.image));
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
      <div
        className="relative text-center mb-16 mt-12 bg-[url('/images/biometric.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg"
      >
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
