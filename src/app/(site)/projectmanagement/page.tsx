"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function ProjectManagementPage() {
const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white text-black-800">
      {/* Hero Section */}
<section className="flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-20 bg-[#2b2b2b] text-white">
  {/* Left Content */}
  <div className="text-center md:text-left max-w-xl md:max-w-lg">
    

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
      AI-Powered Project Management <br /> for Construction Teams
    </h1>

    <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
      Plan smarter, execute faster, and deliver projects on time — every time.
      <br />
      <span className="text-gray-400">
        BexATM helps construction companies streamline site progress, track
        resources, and eliminate delays with AI-driven insights.
      </span>
    </p>

    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      <Button className="bg-[#F6B200] text-black font-semibold hover:bg-yellow-400 px-6 py-3 rounded-md transition-all duration-300">
        Book a Demo
      </Button>
      <Button
        variant="outline"
        className="border border-[#F6B200] text-[#F6B200] hover:bg-[#F6B200] hover:text-black px-6 py-3 rounded-md transition-all duration-300"
      >
        How it Works
      </Button>
    </div>
  </div>

  {/* Right Image */}
  <div className="mt-12 md:mt-0 md:ml-12 flex justify-center md:justify-end">
    <Image
      src="/images/Banner.png" // 👈 replace with your final transparent version (from the 2nd image you uploaded)
      alt="Laptop Banner Mockup"
      width={550}
      height={400}
      className="object-contain drop-shadow-2xl transition-all duration-500"
      priority
    />
  </div>
</section>





      {/* Pain Points Section */}
     <section className="flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-20 bg-white">
  {/* Left Content */}
  <div className="md:w-1/2 space-y-6">
    <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
      Construction Projects Often <br /> Go Off-Track — Here’s Why
    </h2>

    <div className="space-y-6 mt-8 text-left">
  {/* Point 1 */}
  <div className="flex items-center space-x-4">
    <img
      src="/images/icons/1.png"  // 🖼 replace with your actual image path
      alt="Missed Deadlines"
      className="w-12 h-12"
    />
    <p className="text-lg font-semibold text-gray-800">
      Missed Deadlines due to poor communication
    </p>
  </div>

  {/* Point 2 */}
  <div className="flex items-center space-x-4">
    <img
      src="/images/icons/2.png"  // 🖼 replace with your actual image path
      alt="Cost Overruns"
      className="w-12 h-12"
    />
    <p className="text-lg font-semibold text-gray-800">
      Material & labor cost overruns
    </p>
  </div>

  {/* Point 3 */}
  <div className="flex items-center space-x-4">
    <img
      src="/images/icons/3.png"  // 🖼 replace with your actual image path
      alt="Real-Time Visibility"
      className="w-12 h-12"
    />
    <p className="text-lg font-semibold text-gray-800">
      Lack of real-time visibility between site & office
    </p>
  </div>
</div>

  </div>

  {/* Right Image */}
  <div className="md:w-1/2 mt-12 md:mt-0 relative">
    <img
      src="/images/Before.png"
      alt="Before BexATM"
      className="w-full"
    />
    <p className="absolute bottom-4 right-4 text-gray-600 text-sm">Before BexATM</p>
  </div>
</section>


      {/* Before BexATM */}
      <section className="py-20 px-6 md:px-20 bg-white flex flex-col lg:flex-row items-center justify-between">
  {/* Left Content */}
  <div className="lg:w-1/2 text-left space-y-6">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
      Manage Everything in One <br />
      <span className="text-blue-600">AI Powered Platform</span>
    </h1>
    <h2 className="text-lg font-semibold text-gray-800">
      From Site Planning to Completion
    </h2>
    <p className="text-gray-600 max-w-lg">
      BexATM centralizes all your project data, communication, and progress tracking powered by AI recommendations
    </p>

    {/* Feature Boxes */}
   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
  {/* Card 1 */}
  <div className="p-6 bg-white border rounded-xl text-center shadow-sm hover:shadow-md transition">
    <img
      src="images/icons/4.png" // replace with your icon path
      alt="AI-Powered Task Management"
      className="mx-auto mb-3 h-10 w-10"
    />
    <h3 className="font-semibold text-gray-800 mb-1">
      AI-Powered Task Management
    </h3>
    <p className="text-gray-600 text-sm">
      Predict delays and auto-adjust timelines.
    </p>
  </div>

  {/* Card 2 */}
  <div className="p-6 bg-white border rounded-xl text-center shadow-sm hover:shadow-md transition">
    <img
      src="images/icons/5.png"
      alt="Task & Resource Management"
      className="mx-auto mb-3 h-10 w-10"
    />
    <h3 className="font-semibold text-gray-800 mb-1">
      Task & Resource Management
    </h3>
    <p className="text-gray-600 text-sm">
      Assign tasks, track material usage, and monitor site progress.
    </p>
  </div>

  {/* Card 3 */}
  <div className="p-6 bg-white border rounded-xl text-center shadow-sm hover:shadow-md transition">
    <img
      src="images/icons/6.png"
      alt="Budget Tracking"
      className="mx-auto mb-3 h-10 w-10"
    />
    <h3 className="font-semibold text-gray-800 mb-1">
      Budget Tracking
    </h3>
    <p className="text-gray-600 text-sm">
      Stay within budget with real-time expense insights.
    </p>
  </div>

  {/* Card 4 */}
  <div className="p-6 bg-white border rounded-xl text-center shadow-sm hover:shadow-md transition">
    <img
      src="images/icons/7.png"
      alt="Doc Workflow & Approval"
      className="mx-auto mb-3 h-10 w-10"
    />
    <h3 className="font-semibold text-gray-800 mb-1">
      Doc Workflow & Approval
    </h3>
    <p className="text-gray-600 text-sm">
      Share site plans, blueprints, and approvals easily.
    </p>
  </div>

  {/* Card 5 */}
  <div className="p-6 bg-white border rounded-xl text-center shadow-sm hover:shadow-md transition">
    <img
      src="images/icons/8.png"
      alt="Progress Dashboards"
      className="mx-auto mb-3 h-10 w-10"
    />
    <h3 className="font-semibold text-gray-800 mb-1">
      Progress Dashboards
    </h3>
    <p className="text-gray-600 text-sm">
      Visualize milestones, pending tasks, and site reports.
    </p>
  </div>

  {/* Card 6 */}
  <div className="p-6 bg-white border rounded-xl text-center shadow-sm hover:shadow-md transition">
    <img
      src="images/icons/9.png"
      alt="Mobile Access for Site Teams"
      className="mx-auto mb-3 h-10 w-10"
    />
    <h3 className="font-semibold text-gray-800 mb-1">
      Mobile Access for Site Teams
    </h3>
    <p className="text-gray-600 text-sm">
      Update status or upload photos right from the site.
    </p>
  </div>
</div>

  </div>

  {/* Right Side Image */}
  <div className="lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center">
    <img
      src="/images/With.png" // replace with your uploaded image
      alt="AI dashboard visualization"
      className="rounded-xl shadow-lg"
    />
    <p className="absolute bottom-0 right-0 text-sm text-gray-500">
      With BexATM
    </p>
  </div>
</section>

      {/* With BexATM */}
 <section
    className="relative py-20 px-6 md:px-20 text-center bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: "url('/images/Benefits.png')" }}
>
  {/* White overlay for clarity */}
  <div className="absolute inset-0 bg-white/10"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-black-900 mb-4">
      How Does BexATM Benefit Your Business?
    </h2>
    <p className="text-black-700 mb-12 max-w-2xl mx-auto">
      Beyond managing projects, BexATM boosts efficiency, saves cost, and builds client trust.
    </p>

    {/* Benefit Cards */}
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 justify-items-center">
      {/* 1 */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition transform -translate-y-4">
        <img
          src="images/icons/10.png"
          alt="30% Faster Project Delivery"
          className="mx-auto mb-4 h-12 w-12"
        />
        <h3 className="text-black-900 font-semibold text-lg">
          30% Faster Project Delivery
        </h3>
      </div>

      {/* 2 */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition transform translate-y-4">
        <img
          src="images/icons/11.png"
          alt="20% Cost Savings Through AI Insights"
          className="mx-auto mb-4 h-12 w-12"
        />
        <h3 className="text-black-900 font-semibold text-lg">
          20% Cost Savings Through AI Insights
        </h3>
      </div>

      {/* 3 */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition transform -translate-y-4">
        <img
          src="images/icons/12.png"
          alt="Real-Time Collaboration Across Teams"
          className="mx-auto mb-4 h-12 w-12"
        />
        <h3 className="text-black-900 font-semibold text-lg">
          Real-Time Collaboration Across Teams
        </h3>
      </div>

      {/* 4 */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition transform translate-y-4">
        <img
          src="images/icons/13.png"
          alt="Improved Client Reporting & Transparency"
          className="mx-auto mb-4 h-12 w-12"
        />
        <h3 className="text-black-900 font-semibold text-lg">
          Improved Client Reporting & Transparency
        </h3>
      </div>
    </div>
  </div>
</section>



      {/* Built for Every Type of Project */}
 <section
  className="relative py-20 px-6 md:px-20 text-white bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/images/Industry2.png')" }} // background image
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content Wrapper */}
  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
      Built for Every Type of Construction Project
    </h2>

    {/* Project Type Cards */}
    <div className="flex flex-wrap justify-center gap-8 mb-16">
      {/* Residential */}
      <div className="bg-white text-gray-900 rounded-xl p-6 shadow-md w-72 hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/icons/14.png"
            alt="Residential Projects"
            className="h-12 mb-4"
          />
          <h3 className="font-semibold text-lg">Residential Projects</h3>
          <p className="text-sm text-black-600 mt-1">
            Simplify progress updates & client reporting.
          </p>
        </div>
      </div>

      {/* Commercial */}
      <div className="bg-white text-gray-900 rounded-xl p-6 shadow-md w-72 hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/icons/15.png"
            alt="Commercial Buildings"
            className="h-12 mb-4"
          />
          <h3 className="font-semibold text-lg">Commercial Buildings</h3>
          <p className="text-sm text-black-600 mt-1">
            Manage large teams & multi-site workflows.
          </p>
        </div>
      </div>

      {/* Infrastructure */}
      <div className="bg-white text-gray-900 rounded-xl p-6 shadow-md w-72 hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <img
            src="/images/icons/16.png"
            alt="Infrastructure Projects"
            className="h-12 mb-4"
          />
          <h3 className="font-semibold text-lg">Infrastructure Projects</h3>
          <p className="text-sm text-black-600 mt-1">
            Stay compliant & track massive resource flows.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="grid lg:grid-cols-2 items-center gap-10">
      {/* Left Image */}
      <div className="flex justify-center lg:justify-end">
        <img
          src="/images/Industry.png"
          alt="AI Dashboard"
          className="w-full max-w-lg object-contain"
        />
      </div>

      {/* Right Text */}
      <div className="text-left lg:pl-6">
        <h3 className="text-2xl font-semibold mb-5">
          Your AI Co-Manager on Every Construction Site
        </h3>
        <ul className="space-y-3 text-black-200 text-base leading-relaxed">
          <li>• AI predicts delays and suggests preventive actions</li>
          <li>• Auto-generated project reports for clients & management</li>
          <li>• Smart reminders to keep every site activity on time</li>
          <li>• Risk analysis based on project patterns</li>
        </ul>
      </div>
    </div>
  </div>
</section>




      {/* AI Co-Manager */}
     <section className="py-20 px-6 md:px-20 bg-black-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Client Reviews</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Review 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-4 rounded-lg overflow-hidden">
            <Image
              src="/images/pic1.png"
              alt="Mamtha Bansal"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg text-black-800">
            MAMTHA BANSAL
          </h3>
          <div className="w-6 h-1 bg-lime-400 my-2"></div>
          <p className="text-black-600 text-sm max-w-xs">
            TESTIMONIALS ARE SHORT QUOTES FROM PEOPLE WHO LOVE YOUR BRAND.
          </p>
        </div>

        {/* Review 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-4 rounded-lg overflow-hidden">
            <Image
              src="/images/pic2.png"
              alt="Ria Kumaran"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg text-black-800">
            RIA KUMARAN
          </h3>
          <div className="w-6 h-1 bg-lime-400 my-2"></div>
          <p className="text-black-600 text-sm max-w-xs">
            IT’S A GREAT WAY TO CONVINCE CUSTOMERS TO TRY YOUR SERVICES.
          </p>
        </div>

        {/* Review 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-4 rounded-lg overflow-hidden">
            <Image
              src="/images/pic3.png"
              alt="Arvind Paras"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-semibold text-lg text-black-800">
            ARVIND PARAS
          </h3>
          <div className="w-6 h-1 bg-lime-400 my-2"></div>
          <p className="text-black-600 text-sm max-w-xs">
            TESTIMONIALS ARE SHORT QUOTES FROM PEOPLE WHO LOVE YOUR BRAND.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ + Book a Demo Section */}
<section
  className="relative py-20 px-6 md:px-20 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/Form2.png')" }}
>
  {/* White Overlay */}
  <div className="absolute inset-0 bg-white/10"></div>

  <div className="relative grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
    {/* Left: FAQ Section */}
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black-800">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {[
          "How is BexATM different from other project management tools?",
          "Can BexATM handle multiple sites at once?",
          "Is my project data secure?",
          "Does it integrate with accounting or ERP systems?",
          "How is BexATM different from other project management tools?",
        ].map((question, index) => (
          <div
            key={index}
            className="bg-white border rounded-md shadow-sm"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center text-left p-4 font-medium text-black-800"
            >
              <span>{question}</span>
              <span className="text-lime-500 text-2xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="px-4 pb-4 text-black-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Right: Book a Demo Form */}
    <div className="bg-white shadow-lg rounded-md p-8 w-full">
      <h2 className="text-xl md:text-2xl font-bold text-black-800">
        Ready to Build Smarter with BexATM?
      </h2>
      <p className="text-black-600 mb-6 text-sm">
        Book Your Free Demo Now
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Job title<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Company Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Work Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="With country code"
            className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-lime-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 rounded-md mt-4 transition"
        >
          Book a Demo
        </button>
      </form>
    </div>
  </div>
</section>


    </main>
  );
}
