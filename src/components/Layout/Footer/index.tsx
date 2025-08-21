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

  if (!footerData) return null;

  const { topCta, contactInfo, links } = footerData;

  return (
    <footer className="bg-dark text-white">
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
      </div>
    </footer>
  );
};

export default Footer;
