"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ContentData from '../../../Mock.db/FOOTER001.json';
import { useRouter } from "next/navigation";
import { useContentManage } from "@/app/context/ContentManageContext";
import { FaAt } from "react-icons/fa";

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
  // const [footerData, setFooterData] = useState<FooterData | null>(ContentData);
  const [showEditor, setShowEditor] = useState(false);
  const router = useRouter();
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const { user } = useContentManage();

  // Load footer data
  const loadFooter = async () => {
    try {
      const res = await fetch(
        "https://bexatm.com/ContentManageSys.php?contentId=FOOTER001"
      );
      if (!res.ok) throw new Error("Failed to fetch footer data");
      const data = await res.json();
      setFooterData(data);
    } catch (error) {
      console.error("Error loading footer:", error);
    }
  };

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
    // loadFooterData();
    loadFooter();
  }, []);

  if (!footerData) return null;

  const { topCta, contactInfo, links } = footerData;

  return (
    <footer className="bg-dark text-white relative">
      {/* Edit Button moved to top-right */}
      {user?.isAdmin ? (
        <button
          onClick={() => router.push("/content/footer")}
          className="absolute top-1 right-5 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition"
          title="Edit Footer Section"
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
      ) : null}

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        {/* Top CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-3">
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

        {/* Main Content */}
        <div className="py1 border-b border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Address */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold mb-1">Address:</h2>
              {contactInfo.address.map((line, idx) => (
                <p key={idx} className="text-white/80 mb-1">
                  {line}
                </p>
              ))}

              <h2 className="text-2xl font-semibold mb-1">Email:</h2>
              <Link
                href="/email"
                className="flex items-center text-white/80 hover:text-[#00B56A] transition-colors mb-1"
              >
                contact<FaAt className="inline align-middle" />bexatm.com
              </Link>
              <h2 className="text-2xl font-semibold mb-1">Phone:</h2>
              <p className="text-white/80 mb-1">{contactInfo.phone}</p>

              <h2 className="text-2xl font-semibold mb-1">Mobile:</h2>
              <p className="text-white/80">{contactInfo.mobile}</p>
            </div>

            {/* Links Column 1 */}
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

            {/* Links Column 2 */}
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
        <div className="flex justify-between items-center pt-2">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Beyondexs. All Rights Reserved
          </p>
          <div className="flex gap-6">
            <Link
              href="/terms&policy"
              className="text-white/40 hover:text-white text-sm transition"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-white/40 hover:text-white text-sm transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
