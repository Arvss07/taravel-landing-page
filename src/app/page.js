import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ProblemSolutionSection from "../components/ProblemSolutionSection";
import FeaturesSection from "../components/FeaturesSection";
import CommuterGuide from "../components/CommuterGuide";
import DownloadSection from "../components/DownloadSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import FAQsSection from "../components/FAQsSection";
import Footer from "../components/Footer";
import { safeJsonStringify } from "@/utils/security";

export const metadata = {
  title: "Tara-vel - Smart Public Transportation App for Cagayan Valley",
  description:
    "Tara-vel is a smart public transportation companion app for Cagayan Valley. Download now for hassle-free commuting with real-time bus tracking, route planning, and transportation updates.",
  openGraph: {
    title: "Tara-vel - Smart Public Transportation App for Cagayan Valley",
    description:
      "Your smart public transportation companion for Cagayan Valley. Download now for hassle-free commuting with real-time bus tracking and route planning.",
  },
};

export default function Home() {
  const baseUrl = "https://www.taravel.app";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tara-vel",
    url: baseUrl,
    description:
      "Smart public transportation companion app for Cagayan Valley",
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tara-vel",
    url: baseUrl,
    logo: `${baseUrl}/taravel.png`,
    description:
      "Tara-vel provides smart public transportation solutions for Cagayan Valley commuters",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: `${baseUrl}/#contact`,
    },
    sameAs: ["https://www.facebook.com/share/17DB8fhPL9/"],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Cagayan Valley",
      containedIn: {
        "@type": "Country",
        name: "Philippines",
      },
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tara-vel",
    applicationCategory: "TravelApplication",
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PHP",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1",
    },
    description:
      "Smart public transportation companion app for Cagayan Valley. Real-time bus tracking, route planning, and hassle-free commuting.",
    featureList: [
      "Real-time bus tracking",
      "Route planning",
      "Transportation updates",
      "Easy navigation",
      "Cagayan Valley coverage",
    ],
    screenshot: `${baseUrl}/mockup-page-only.svg`,
    softwareVersion: "1.0",
    releaseNotes:
      "Initial release of Tara-vel - Your smart public transportation companion for Cagayan Valley",
    url: `${baseUrl}/#download`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${baseUrl}/#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Features",
        item: `${baseUrl}/#features`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Download",
        item: `${baseUrl}/#download`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Tara-vel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tara-vel is a smart public transportation companion app designed for Cagayan Valley commuters. It provides real-time bus tracking, route planning, and transportation updates to make your commute hassle-free.",
        },
      },
      {
        "@type": "Question",
        name: "Is Tara-vel available on iOS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tara-vel is currently available on Android. iOS version is coming soon.",
        },
      },
      {
        "@type": "Question",
        name: "Is Tara-vel free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Tara-vel is completely free to download and use.",
        },
      },
      {
        "@type": "Question",
        name: "What areas does Tara-vel cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tara-vel currently covers the Cagayan Valley region in the Philippines.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonStringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonStringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonStringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonStringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonStringify(faqSchema),
        }}
      />
      {/* Navigation Component */}
      <Navigation />

      {/* Main Content */}
      <main className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <HeroSection />

        {/* Problem & Solution Section */}
        <ProblemSolutionSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Commuter Guide Section */}
        <CommuterGuide />

        {/* Download Section */}
        <DownloadSection />

        {/* Team Section */}
        <TeamSection />

        {/* Contact Section */}
        <ContactSection />

        {/* FAQs Section */}
        <FAQsSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
