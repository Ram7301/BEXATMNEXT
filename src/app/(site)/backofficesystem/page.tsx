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

const BackOfficeSystem: React.FC = () => {
    const [showEditor, setShowEditor] = useState(false);
    const [features, setFeatures] = useState<Feature[]>([]);
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState("");

    const loadFeatures = async () => {
        const data: Feature[] = [
            {
                title: "Employee",
                subtitle: "Manage Profiles & Work Records",
                description: `
An employee is a person who is hired by an organization or company to perform specific tasks or duties in exchange for compensation, such as a salary or wages. Employees can be categorized based on their employment type and responsibilities:

• Probationary – Track performance and attendance during the probation period.  

• Confirmed – Maintain ongoing timesheet records and monitor productivity metrics.  

• In-sourced Staff – Manage internal teams with full visibility into work hours and deliverables.  

• Out-sourced Staff – Monitor attendance and output of contracted or third-party personnel.  

Apart from these categories and attendance records, an employee’s profile also includes contact details, list of skills, approval flows they are part of, reporting manager, and deployment information such as designation, location, project/product assignment, shift details, and weekly off schedule.  

The system also tracks how the employee records their check-in and check-out, which could be via biometric devices, mobile geofencing, cloud application, manager manual entry, or default present status.  

Additionally, it maintains leave configurations and the list of documents associated with the employee, ensuring comprehensive management of all employee-related information.
                `,
                image: "/images/employee.png",
                href: "#employee",
                badge: "Core",
                reverse: false,
                icon: "mdi:account-tie"
            },

            {
                title: "Manager Dashboard",
                subtitle: "Track Team Performance",
                description: `
The Manager Dashboard offers real-time visibility into team productivity, task progress, and resource utilization.  

It helps managers monitor workloads, identify bottlenecks, and make data-driven decisions to improve efficiency and achieve organizational goals.
                `,
                image: "/images/managerdash.png",
                href: "#managerdashboard",
                badge: "Core",
                reverse: false,
                icon: "mdi:account-tie",
            },

            {
                title: "Scrum Master Dashboard",
                subtitle: "Facilitate Agile Processes",
                description: `
The Scrum Master Dashboard provides visibility into sprint progress, task allocation, and team collaboration.  

It helps monitor agile workflows, remove impediments, and ensure the team follows best practices for delivering value consistently.
                `,
                image: "/images/scrummaster.png",
                href: "#scrummaster",
                badge: "Agile",
                reverse: true,
                icon: "mdi:chart-timeline",
            },

            {
                title: "Employee Dashboard",
                subtitle: "Track Personal Tasks & Goals",
                description: `
The Employee Dashboard provides a clear view of individual tasks, goals, and performance metrics.  

It helps employees monitor their progress, manage daily responsibilities, and stay aligned with team and organizational objectives.
                `,
                image: "/images/employeedash.png",
                href: "#employee",
                badge: "Core",
                reverse: false,
                icon: "mdi:account-circle",
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
            prev.map((f, i) => (i === index ? { ...f, [name as keyof Feature]: value } : f))
        );
    };

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
                    i === index ? { ...f, image: url } : f
                )
            );
        }
    };

    const saveFeatures = async () => {
        console.log("Saving features:", JSON.stringify(features, null, 2));
        alert("Features saved (mock). Replace with API call!");
    };

    if (!features.length) return null;

    return (
        <section className="relative overflow-hidden">
            {/* ✅ Heading with Background Image */}
            <div className="relative text-center mb-16 mt-12 bg-[url('/images/backoffice.png')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg">
                <div className="bg-black/70 rounded-2xl px-6 py-16">
                    <h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight">
                        Back Office System
                    </h2>
                    <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-200">
                        Back Office System is an internal platform that manages and supports a company’s administrative and operational functions, including HR, payroll, accounting, and data management. It ensures smooth workflows, accurate record-keeping, and provides managers and HR teams with insights for decision-making. The system also includes essential employee credentials and information such as Designation, Departments, Leave Types, Functions, Holiday List, Daily and Monthly Attendance, Attendance Register, and Timesheet, enabling employees to access and manage their records efficiently while helping HR maintain accurate data and monitor work activities.
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
                            <p className="text-dark/50 dark:text-white/50 text-lg leading-[1.6] whitespace-pre-line">
                                {feature.description}
                            </p>
                        </div>

                        {/* Image Block */}
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden group shadow-lg">
                                <Link href={feature.href}>
                                    <Image
                                        src={feature.image}
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

            {/* ✅ Edit Button */}
            <div className="flex justify-end mt-10">
                <button
                    onClick={() => setShowEditor(true)}
                    className="bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
                    title="Edit Features"
                >
                    ✎
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
                                        rows={6}
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

export default BackOfficeSystem;
