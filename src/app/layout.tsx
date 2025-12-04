import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Agile Task Manager",
  description: "Your site description",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
