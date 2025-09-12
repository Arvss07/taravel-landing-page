import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <>
      {/* Navigation Component */}
      <Navigation />
      
      {/* Main Content */}
      <main className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <section id="hero" className="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 pt-20">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              {/* TODO: Replace with actual Tara-Vel branding content */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
                Tara-Vel
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-base-content/80 max-w-2xl mx-auto">
                Your Smart Public Transportation Companion for Cagayan Valley
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn btn-primary btn-lg">
                  Get Early Access
                </button>
                <button className="btn btn-outline btn-lg">
                  Learn More
                </button>
              </div>
              
              {/* TODO: Add device mockups here */}
              <div className="mt-12">
                <div className="mockup-phone bg-primary">
                  <div className="camera"></div>
                  <div className="display">
                    <div className="artboard artboard-demo phone-1 bg-base-100">
                      <div className="p-4 text-center">
                        <h3 className="font-bold text-lg mb-2">Tara-Vel App</h3>
                        <p className="text-sm opacity-70">Real-time tracking interface</p>
                        <div className="mt-4 space-y-2">
                          <div className="h-3 bg-primary/20 rounded"></div>
                          <div className="h-3 bg-primary/20 rounded w-3/4"></div>
                          <div className="h-3 bg-primary/20 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder sections for future development */}
        <section id="about" className="min-h-96 bg-base-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Section</h2>
            <p>Problem & Solution content will go here</p>
          </div>
        </section>

        <section id="features" className="min-h-96 bg-base-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Features Section</h2>
            <p>Key features content will go here</p>
          </div>
        </section>

        <section id="download" className="min-h-96 bg-base-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Download Section</h2>
            <p>Download links and QR code will go here</p>
          </div>
        </section>

        <section id="team" className="min-h-96 bg-base-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Team Section</h2>
            <p>Developer team cards will go here</p>
          </div>
        </section>

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