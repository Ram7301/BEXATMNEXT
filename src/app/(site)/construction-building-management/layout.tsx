import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction & Building Management Software | Smart Project Control",
  description:
    "Streamline construction and building management with intelligent software. Manage projects, track progress, control costs, and collaborate efficiently from planning to completion.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
