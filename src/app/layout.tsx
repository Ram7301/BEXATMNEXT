"use client";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { ContentManageProvider } from "@/app/context/ContentManageContext";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Script from "next/script";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: any;
}>) {
  const pathname = usePathname();

  const hideHeaderFooter = pathname.startsWith("/content");
  const SininPage = pathname.startsWith("/signin");

  const projectManagementPage =
    pathname === "/project-management-software-for-startups" ||
    pathname === "/construction-project-management-software" ||
    pathname === "/apartment-society-management-software";

  const enableRecaptchaForThisPage =
    pathname === "/construction-project-management-software";

  return (
    <html lang="en">
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        {/* ✅ Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DVX38ML9PE"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DVX38ML9PE');
          `}
        </Script>

        {enableRecaptchaForThisPage ? (
          <GoogleReCaptchaProvider
            reCaptchaKey="6LeVCwosAAAAANW4-sjSjlKzdUv_CtSay9NPgR9P"
            scriptProps={{
              async: true,
              defer: true,
              appendTo: "head",
            }}
          >
            <LayoutContent
              hideHeaderFooter={hideHeaderFooter}
              SininPage={SininPage}
              projectManagementPage={projectManagementPage}
              session={session}
            >
              {children}
            </LayoutContent>
          </GoogleReCaptchaProvider>
        ) : (
          <LayoutContent
            hideHeaderFooter={hideHeaderFooter}
            SininPage={SininPage}
            projectManagementPage={projectManagementPage}
            session={session}
          >
            {children}
          </LayoutContent>
        )}
      </body>
    </html>
  );
}

function LayoutContent({
  children,
  hideHeaderFooter,
  SininPage,
  projectManagementPage,
  session,
}: any) {
  return (
    <>
      <NextTopLoader color="#07be8a" />
      <ContentManageProvider>
        <SessionProviderComp session={session}>
          <Suspense>
            <ThemeProvider attribute="class" enableSystem defaultTheme="light">

              {/* ✅ HEADER stays visible on project pages */}
              {!hideHeaderFooter && !SininPage ? <Header /> : null}

              {children}

              {/* ✅ FOOTER hides only on project pages */}
              {!hideHeaderFooter && !SininPage && !projectManagementPage ? (
                <Footer />
              ) : null}

            </ThemeProvider>
          </Suspense>
        </SessionProviderComp>
      </ContentManageProvider>
    </>
  );
}
