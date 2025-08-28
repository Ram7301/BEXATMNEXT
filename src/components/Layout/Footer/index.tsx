"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterData {
  topCta: {
    title: string;
    subtitle: string;
    ctaLink: FooterLink;
  };
  contactInfo: {
    address: string[];
    email: string;
    phone: string;
    mobile: string;
  };
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  // Load Footer Data
  useEffect(() => {
    const loadFooterData = async () => {
      try {
        const res = await fetch("/api/content-manage?contentId=FOOTER001");
        const data = await res.json();
        setFooterData(data);
      } catch (error) {
        console.error("Error loading footer data:", error);
      }
    };
    loadFooterData();
  }, []);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: string,
    key?: string,
    index?: number
  ) => {
    const { value } = e.target;

    setFooterData((prev) => {
      if (!prev) return prev;

      if (section === "topCta" && key) {
        return { ...prev, topCta: { ...prev.topCta, [key]: value } };
      }

      if (section === "ctaLink" && key) {
        return {
          ...prev,
          topCta: {
            ...prev.topCta,
            ctaLink: { ...prev.topCta.ctaLink, [key]: value },
          },
        };
      }

      if (section === "contactInfo" && key) {
        return {
          ...prev,
          contactInfo: { ...prev.contactInfo, [key]: value },
        };
      }

      if (section === "address" && typeof index === "number") {
        const updated = [...prev.contactInfo.address];
        updated[index] = value;
        return {
          ...prev,
          contactInfo: { ...prev.contactInfo, address: updated },
        };
      }

      if (section === "links" && typeof index === "number" && key) {
        const updated = [...prev.links];
        updated[index] = { ...updated[index], [key]: value };
        return { ...prev, links: updated };
      }

      return prev;
    });
  };

  // Save Footer Data
  const saveFooter = async () => {
    await fetch("/api/content-manage?contentId=FOOTER001", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(footerData),
    });
    alert("Footer updated!");
    setShowEditor(false);
  };

  if (!footerData) return null;

  const { topCta, contactInfo, links } = footerData;

  return (
    <footer className="bg-dark text-white relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Call-to-Action */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-8">
          <div className="text-center md:text-left">
            <p className="text-3xl font-semibold">{topCta.title}</p>
            <p className="text-white/70 text-lg mt-1">{topCta.subtitle}</p>
          </div>
          <Link
            href={topCta.ctaLink.href}
            className="bg-primary text-white font-bold text-lg py-3 px-8 rounded-full hover:bg-white hover:text-dark duration-300"
          >
            {topCta.ctaLink.label}
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 border-b border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Address Section */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold mb-4">Address:</h2>
              {contactInfo.address.map((line, idx) => (
                <p key={idx} className="text-white/80 mb-2">{line}</p>
              ))}

              <h2 className="text-2xl font-semibold mb-2">Email:</h2>
              <p className="text-white/80 mb-4">{contactInfo.email}</p>

              <h2 className="text-2xl font-semibold mb-2">Phone:</h2>
              <p className="text-white/80 mb-4">{contactInfo.phone}</p>

              <h2 className="text-2xl font-semibold mb-2">Mobile:</h2>
              <p className="text-white/80">{contactInfo.mobile}</p>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="flex flex-col gap-3">
                {links.slice(0, 4).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white/40 hover:text-white text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="flex flex-col gap-3">
                {links.slice(4, 8).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white/40 hover:text-white text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Beyondexs. All Rights Reserved
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/40 hover:text-primary text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/40 hover:text-primary text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>

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
      {showEditor && footerData && (
        <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center">
          <div className="bg-white dark:bg-dark w-full max-w-4xl max-h-[90vh] mx-auto p-8 overflow-auto relative rounded-lg shadow-lg text-black dark:text-white">
            <h2 className="text-2xl font-bold mb-4">Edit Footer Section</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveFooter();
              }}
            >
              {/* Top CTA */}
              <h3 className="text-lg font-semibold mb-2">Top CTA</h3>
              <input
                type="text"
                name="title"
                value={footerData.topCta.title}
                onChange={(e) => handleChange(e, "topCta", "title")}
                className="w-full mb-4 p-2 border rounded text-black"
              />
              <input
                type="text"
                name="subtitle"
                value={footerData.topCta.subtitle}
                onChange={(e) => handleChange(e, "topCta", "subtitle")}
                className="w-full mb-4 p-2 border rounded text-black"
              />
              <input
                type="text"
                name="label"
                value={footerData.topCta.ctaLink.label}
                onChange={(e) => handleChange(e, "ctaLink", "label")}
                className="w-full mb-4 p-2 border rounded text-black"
              />
              <input
                type="text"
                name="href"
                value={footerData.topCta.ctaLink.href}
                onChange={(e) => handleChange(e, "ctaLink", "href")}
                className="w-full mb-4 p-2 border rounded text-black"
              />

              {/* Contact Info */}
              <h3 className="text-lg font-semibold mb-2 mt-4">Contact Info</h3>
              {footerData.contactInfo.address.map((line, idx) => (
                <input
                  key={idx}
                  type="text"
                  value={line}
                  onChange={(e) => handleChange(e, "address", "", idx)}
                  className="w-full mb-2 p-2 border rounded text-black"
                />
              ))}
              <input
                type="text"
                value={footerData.contactInfo.email}
                onChange={(e) => handleChange(e, "contactInfo", "email")}
                className="w-full mb-4 p-2 border rounded text-black"
              />
              <input
                type="text"
                value={footerData.contactInfo.phone}
                onChange={(e) => handleChange(e, "contactInfo", "phone")}
                className="w-full mb-4 p-2 border rounded text-black"
              />
              <input
                type="text"
                value={footerData.contactInfo.mobile}
                onChange={(e) => handleChange(e, "contactInfo", "mobile")}
                className="w-full mb-4 p-2 border rounded text-black"
              />

              {/* Links */}
              <h3 className="text-lg font-semibold mb-2 mt-4">Footer Links</h3>
              {footerData.links.map((link, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={link.label}
                    onChange={(e) => handleChange(e, "links", "label", idx)}
                    className="flex-1 p-2 border rounded text-black"
                  />
                  <input
                    type="text"
                    value={link.href}
                    onChange={(e) => handleChange(e, "links", "href", idx)}
                    className="flex-1 p-2 border rounded text-black"
                  />
                </div>
              ))}

              <button className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 mt-4">
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
    </footer>
  );
};

export default Footer;
