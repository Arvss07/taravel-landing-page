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
