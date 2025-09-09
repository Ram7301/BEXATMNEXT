"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  // Load footer data
  const loadFooter = async () => {
    try {
      const res = await fetch(
        "https://bexatm.com/ContentManageSys.php?contentId=FOOTER001"
      );
      if (!res.ok) throw new Error("Failed to fetch footer");
      const data = await res.json();
      setFooterData(data);
    } catch (err) {
      console.error("Error loading footer:", err);
    }
  };

  useEffect(() => {
    loadFooter();
  }, []);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    path: string
  ) => {
    const { value } = e.target;
    setFooterData((prev) => {
      if (!prev) return prev;
      const copy: any = { ...prev };
      const keys = path.split(".");
      let obj = copy;
      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return copy;
    });
  };

  // Save footer
  const saveFooter = async () => {
    if (!footerData) return;
    await fetch("https://bexatm.com/ContentManageSys.php?contentId=FOOTER001", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(footerData),
    });
    alert("Footer updated!");
    router.back();
  };

  if (!footerData) return null;

  return (
    <section className="!py-0 relative">
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
        <div className="bg-white dark:bg-dark w-full h-full max-w-4xl mx-auto p-8 overflow-auto relative rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Edit Footer Section</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveFooter();
            }}
          >
            {/* Top CTA */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Top CTA</h3>
              <input
                type="text"
                placeholder="Title"
                value={footerData.topCta.title}
                onChange={(e) => handleChange(e, "topCta.title")}
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Subtitle"
                value={footerData.topCta.subtitle}
                onChange={(e) => handleChange(e, "topCta.subtitle")}
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="CTA Label"
                value={footerData.topCta.ctaLink.label}
                onChange={(e) => handleChange(e, "topCta.ctaLink.label")}
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="CTA Link"
                value={footerData.topCta.ctaLink.href}
                onChange={(e) => handleChange(e, "topCta.ctaLink.href")}
                className="w-full mb-3 p-2 border rounded"
              />
            </div>

            {/* Contact Info */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
              {footerData.contactInfo.address.map((line, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Address line ${i + 1}`}
                  value={line}
                  onChange={(e) => {
                    const newAddress = [...footerData.contactInfo.address];
                    newAddress[i] = e.target.value;
                    setFooterData((prev) =>
                      prev
                        ? {
                            ...prev,
                            contactInfo: { ...prev.contactInfo, address: newAddress },
                          }
                        : prev
                    );
                  }}
                  className="w-full mb-3 p-2 border rounded"
                />
              ))}
              <input
                type="text"
                placeholder="Email"
                value={footerData.contactInfo.email}
                onChange={(e) => handleChange(e, "contactInfo.email")}
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Phone"
                value={footerData.contactInfo.phone}
                onChange={(e) => handleChange(e, "contactInfo.phone")}
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Mobile"
                value={footerData.contactInfo.mobile}
                onChange={(e) => handleChange(e, "contactInfo.mobile")}
                className="w-full mb-3 p-2 border rounded"
              />
            </div>

            {/* Links */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Footer Links</h3>
              {footerData.links.map((link, i) => (
                <div key={i} className="flex gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Label"
                    value={link.label}
                    onChange={(e) => {
                      const newLinks = [...footerData.links];
                      newLinks[i].label = e.target.value;
                      setFooterData((prev) =>
                        prev ? { ...prev, links: newLinks } : prev
                      );
                    }}
                    className="flex-1 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Href"
                    value={link.href}
                    onChange={(e) => {
                      const newLinks = [...footerData.links];
                      newLinks[i].href = e.target.value;
                      setFooterData((prev) =>
                        prev ? { ...prev, links: newLinks } : prev
                      );
                    }}
                    className="flex-1 p-2 border rounded"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90"
            >
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
    </section>
  );
};

export default Footer;
