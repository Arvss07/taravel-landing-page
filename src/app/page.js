import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ProblemSolutionSection from "../components/ProblemSolutionSection";
import FeaturesSection from "../components/FeaturesSection";
import DownloadSection from "../components/DownloadSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import FAQsSection from "../components/FAQsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Taravel",
            url: "https://www.taravel.app",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.taravel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Taravel",
            url: "https://www.taravel.app",
            logo: "https://www.taravel.app/taravel.svg",
            sameAs: [
              "https://www.facebook.com/share/17DB8fhPL9/",
            ],
          }),
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
