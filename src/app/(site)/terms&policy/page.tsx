"use client";

import { Icon } from "@iconify/react";
import Head from "next/head";
import Script from "next/script";

const TermsPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions - bexatm</title>
        <meta name="description" content="Read the Terms and Conditions of using our platform. It covers your rights and responsibilities while using the services." />
        <meta name="keywords" content="terms, terms and conditions, privacy policy, user agreement" />
        <meta name="robots" content="index, follow" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DVX38ML9PE"></script>
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-DVX38ML9PE');
            `}
        </script>
      </Head>
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
      <section className="relative overflow-hidden">
        {/* ✅ Heading Banner */}
        <div className="text-center py-12 bg-gray-50 border-b border-gray-200">
          <h1 className="text-3xl lg:text-4xl font-bold text-dark dark:text-white tracking-tight">
            TERMS AND CONDITIONS
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-sm lg:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            To cover the full scope for managing your account and services, we created
            certain add-ons that can be availed via online payment. Please read the
            Terms and Conditions carefully before using our platform.
          </p>
        </div>

        {/* ✅ Terms Content */}
        <div className="container max-w-4xl mx-auto px-5 py-12 space-y-10">
          {/* Introduction */}
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-dark dark:text-white mb-3">
              <Icon icon="mdi:checkbox-blank-circle-outline" className="text-blue-500 w-5 h-5" />
              Introduction
            </h2>
            <p className="text-base text-dark/70 dark:text-white/70 leading-relaxed">
              These Terms of Service are intended to make you aware of your legal rights
              and responsibilities when accessing or using our website, mobile
              application, or related services. By continuing to use the platform, you
              agree to be bound by these terms.
            </p>
          </div>

          {/* Use of Services */}
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-dark dark:text-white mb-3">
              <Icon icon="mdi:checkbox-blank-circle-outline" className="text-blue-500 w-5 h-5" />
              Use of Services
            </h2>
            <p className="text-base text-dark/70 dark:text-white/70 leading-relaxed">
              You may use our services only for lawful purposes. Any misuse, attempts to
              interfere with systems, or unauthorized access will result in suspension
              or termination of your account.
            </p>
          </div>

          {/* Privacy Policy */}
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-dark dark:text-white mb-3">
              <Icon icon="mdi:checkbox-blank-circle-outline" className="text-blue-500 w-5 h-5" />
              Privacy Policy
            </h2>
            <p className="text-base text-dark/70 dark:text-white/70 leading-relaxed">
              We respect your privacy. Data collected from you is handled as described
              in our Privacy Policy and is not shared with third parties without your
              consent, unless required by law.
            </p>
          </div>

          {/* User Responsibilities */}
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-dark dark:text-white mb-3">
              <Icon icon="mdi:checkbox-blank-circle-outline" className="text-blue-500 w-5 h-5" />
              User Responsibilities
            </h2>
            <p className="text-base text-dark/70 dark:text-white/70 leading-relaxed">
              You are responsible for keeping your account credentials secure. Notify us
              immediately if you suspect unauthorized access to your account.
            </p>
          </div>

          {/* Limitations of Liability */}
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-dark dark:text-white mb-3">
              <Icon icon="mdi:checkbox-blank-circle-outline" className="text-blue-500 w-5 h-5" />
              Limitations of Liability
            </h2>
            <p className="text-base text-dark/70 dark:text-white/70 leading-relaxed">
              Our services are provided on an “as-is” basis. We are not liable for
              indirect, incidental, or consequential damages resulting from use of our
              services.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-dark dark:text-white mb-3">
              <Icon icon="mdi:checkbox-blank-circle-outline" className="text-blue-500 w-5 h-5" />
              Changes to Terms
            </h2>
            <p className="text-base text-dark/70 dark:text-white/70 leading-relaxed">
              These terms may be updated from time to time. Continued use of the
              services after changes will constitute your acceptance of the revised
              terms.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-dark dark:text-white mb-3">
              <Icon icon="mdi:checkbox-blank-circle-outline" className="text-blue-500 w-5 h-5" />
              Contact Us
            </h2>
            <p className="text-base text-dark/70 dark:text-white/70 leading-relaxed">
              If you have any questions about these Terms, please reach out to us at{" "}
              <span className="font-medium">support@example.com</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPolicy;
