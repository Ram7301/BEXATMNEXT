import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Management Software for Startups & Small Business", // your page title
  description: "Scale faster and collaborate smarter with BexATM’s AI-powered project management software for startups and small business teams", // your page description
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
