'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DownloadSection() {
  // GSAP animations
  useGSAP(() => {
    // Animate download cards
    gsap.fromTo('.download-card', 
      { 
        y: 80, 
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.download-grid',
          start: 'top 80%',
          end: 'bottom 20%'
        }
      }
    );

    // Animate QR code
    gsap.fromTo('.qr-code',
      {
        scale: 0,
        rotation: -180
      },
      {
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.75)',
        scrollTrigger: {
          trigger: '.qr-code',
          start: 'top 85%'
        }
      }
    );

    // Float animation for icons
    gsap.to('.download-icon', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.4
    });

    // Animate SVG blobs
    gsap.to('.floating-blob', {
      y: -15,
      x: 8,
      rotation: 3,
      duration: 5,
      ease: 'sine.inOut',
      stagger: 0.6,
      repeat: -1,
      yoyo: true
    });
  });

  return (
    <section id="download" className="relative min-h-screen overflow-hidden pt-24">
      {/* Animated SVG Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        
        {/* SVG Blob Shapes */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Blob 1 */}
          <path
            className="blob-1"
            d="M300,200 C400,150 500,250 450,350 C400,450 300,400 200,350 C100,300 150,200 300,200Z"
            fill="url(#gradient1)"
            opacity="0.6"
          />
          
          {/* Blob 2 */}
          <path
            className="blob-2"
            d="M800,100 C900,80 1000,180 950,280 C900,380 800,350 700,280 C600,210 650,120 800,100Z"
            fill="url(#gradient2)"
            opacity="0.5"
          />
          
          {/* Blob 3 */}
          <path
            className="blob-3"
            d="M1000,500 C1100,450 1150,550 1100,650 C1050,750 950,700 900,650 C850,600 900,500 1000,500Z"
            fill="url(#gradient3)"
            opacity="0.4"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="downloadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.04"/>
            </linearGradient>
            <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="#059669" stopOpacity="0.04"/>
            </linearGradient>
            <linearGradient id="qrGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.04"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating ping elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-accent/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-success/30 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Download Tara-Vel
          </h2>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Get early access to the future of transportation in Cagayan Valley. 
            Join our beta testing community and be among the first to experience hassle-free travel.
          </p>
        </div>

        {/* Download Grid */}
        <div className="download-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Android Download Card */}
          <div className="download-card card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-success/30">
            <div className="card-body p-8 text-center">
              <div className="w-20 h-20 border-2 border-success/30 rounded-2xl flex items-center justify-center mx-auto mb-6 download-icon group-hover:scale-110 transition-transform">
                <i className="fa-brands fa-android" style={{color: '#63E6BE', fontSize: '3rem'}}></i>
              </div>
              <h3 className="text-2xl font-bold text-base-content mb-4">Android</h3>
              <p className="text-base-content/70 mb-6">
                Coming soon to Google Play Store. Get notified when it&apos;s available.
              </p>
              <div className="space-y-3">
                <a
                  href="https://youtu.be/dQw4w9WgXcQ?list=RDdQw4w9WgXcQ"
                  className="btn btn-lg w-full flex items-center justify-center border border-success text-success bg-transparent hover:bg-success hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download APK
                  <i className="fas fa-download ml-2"></i>
                </a>
                <div className="badge badge-success badge-outline">Beta Version</div>
              </div>
            </div>
          </div>

          {/* iOS Download Card */}
          <div className="download-card card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-primary/30">
            <div className="card-body p-8 text-center">
              <div className="w-20 h-20 border-2 border-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-6 download-icon group-hover:scale-110 transition-transform">
                <i className="fa-brands fa-apple" style={{color: '#9f9d9d', fontSize: '3rem'}}></i>
              </div>
              <h3 className="text-2xl font-bold text-base-content mb-4">iOS</h3>
              <p className="text-base-content/70 mb-6">
                Currently in development. Stay tuned for App Store release.
              </p>
              <div className="space-y-3">
                <button className="btn btn-primary btn-lg w-full" disabled>
                  <i className="fa-brands fa-app-store mr-2"></i>
                  Coming Soon
                </button>
                <div className="badge badge-primary badge-outline">In Development</div>
              </div>
            </div>
          </div>

          {/* QR Code Card */}
          <div className="download-card card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-accent/30 md:col-span-2 lg:col-span-1">
            <div className="card-body p-8 text-center">
              <div className="w-20 h-20 border-2 border-accent/30 rounded-2xl flex items-center justify-center mx-auto mb-6 download-icon group-hover:scale-110 transition-transform">
                <i className="fa-sharp fa-solid fa-qrcode" style={{fontSize: '3rem'}}></i>
              </div>
              <h3 className="text-2xl font-bold text-base-content mb-4">Quick Access</h3>
              <p className="text-base-content/70 mb-6">
                Scan QR code for instant access to download the app on android.
              </p>
              
              {/* QR Code Placeholder */}
              <div className="qr-code bg-base-200 border-2 border-accent/30 rounded-2xl p-4 mx-auto mb-4 w-32 h-32 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-1 w-24 h-24">
                  {/* QR Code Pattern Placeholder */}
                  <div className="bg-base-content rounded-sm"></div>
                  <div className="bg-base-300 rounded-sm"></div>
                  <div className="bg-base-content rounded-sm"></div>
                  <div className="bg-base-300 rounded-sm"></div>
                  <div className="bg-base-300 rounded-sm"></div>
                  <div className="bg-base-content rounded-sm"></div>
                  <div className="bg-base-300 rounded-sm"></div>
                  <div className="bg-base-content rounded-sm"></div>
                  <div className="bg-base-content rounded-sm"></div>
                  <div className="bg-base-300 rounded-sm"></div>
                  <div className="bg-base-content rounded-sm"></div>
                  <div className="bg-base-300 rounded-sm"></div>
                  <div className="bg-base-300 rounded-sm"></div>
                  <div className="bg-base-content rounded-sm"></div>
                  <div className="bg-base-300 rounded-sm"></div>
                  <div className="bg-base-content rounded-sm"></div>
                </div>
              </div>
              
              <div className="text-xs text-base-content/50">
                TODO: Replace with actual QR code
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
