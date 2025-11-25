import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Powered Construction Project Management Software for Your Team", // your page title
  description: "Empower your construction team with BexATM’s AI-powered software. Track tasks, manage resources and deliver projects on time with our construction project management solution", // your page description
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
