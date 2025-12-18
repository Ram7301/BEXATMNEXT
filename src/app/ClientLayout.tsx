"use client";

import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { ContentManageProvider } from "@/app/context/ContentManageContext";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Suspense } from "react";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideHeaderFooter = pathname.startsWith("/content");
  const SininPage = pathname.startsWith("/signin");

  const projectManagementPage =
    pathname === "/project-management-software-for-startups" ||
    pathname === "/construction-project-management-software" ||
    pathname === "/apartment-society-management-software" ||
    pathname === "/construction-building-management" ||
    pathname === "/";  // Add this line

  const enableRecaptchaForThisPage =
    pathname === "/construction-project-management-software";

  return (
    <>
      {/* Google Analytics */}
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

      <NextTopLoader color="#07be8a" />

      {enableRecaptchaForThisPage ? (
        <GoogleReCaptchaProvider
          reCaptchaKey="6LeVCwosAAAAANW4-sjSjlKzdUv_CtSay9NPgR9P"
          scriptProps={{
            async: true,
            defer: true,
            appendTo: "head",
          }}
        >
          <LayoutChildren
            hideHeaderFooter={hideHeaderFooter}
            SininPage={SininPage}
            projectManagementPage={projectManagementPage}
          >
            {children}
          </LayoutChildren>
        </GoogleReCaptchaProvider>
      ) : (
        <LayoutChildren
          hideHeaderFooter={hideHeaderFooter}
          SininPage={SininPage}
          projectManagementPage={projectManagementPage}
        >
          {children}
        </LayoutChildren>
      )}
    </>
  );
}

function LayoutChildren({
  children,
  hideHeaderFooter,
  SininPage,
  projectManagementPage,
}: {
  children: React.ReactNode;
  hideHeaderFooter: boolean;
  SininPage: boolean;
  projectManagementPage: boolean;
}) {
  return (
    <ContentManageProvider>
      {/* SessionProviderComp no longer expects session prop */}
      <SessionProviderComp>
        <Suspense>
          <ThemeProvider attribute="class" enableSystem defaultTheme="light">
            {!hideHeaderFooter && !SininPage && <Header />}

            {children}

            {!hideHeaderFooter &&
              !SininPage &&
              !projectManagementPage && <Footer />}
          </ThemeProvider>
        </Suspense>
      </SessionProviderComp>
    </ContentManageProvider>
  );
}
