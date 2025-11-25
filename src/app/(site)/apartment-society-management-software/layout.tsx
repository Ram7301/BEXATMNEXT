import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartment Society Management Software", // your page title
  description: "Manage tasks, complaints, billing, and facility operations with BexATM—an AI-powered apartment society management software for RWAs and residential communities", // your page description
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
