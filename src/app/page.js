import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ProblemSolutionSection from '../components/ProblemSolutionSection';
import FeaturesSection from '../components/FeaturesSection';
import DownloadSection from '../components/DownloadSection';
import TeamSection from '../components/TeamSection';

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

        <section id="contact" className="min-h-96 bg-base-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Section</h2>
            <p>Contact information will go here</p>
          </div>
        </section>

        <section id="faq" className="min-h-96 bg-base-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">FAQ Section</h2>
            <p>Frequently asked questions will go here</p>
          </div>
        </section>

        {/* Footer placeholder */}
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
          <div>
            <p className="font-bold">Tara-Vel</p>
            <p>Copyright © 2024 - All rights reserved</p>
          </div>
        </footer>
      </main>
    </>
  );
}