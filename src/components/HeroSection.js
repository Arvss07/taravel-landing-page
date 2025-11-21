"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  // Calculate responsive phone dimensions
  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Compute phone dimensions based on screen size
  const getPhoneDimensions = () => {
    const baseWidth = 280; // Base width for desktop
    const baseHeight = 560; // Base height for desktop

    // Mobile adjustments
    if (screenSize.width < 640) {
      // sm breakpoint
      const scaleFactor = Math.min(screenSize.width * 0.25, 0.75); // Max 75% scale on mobile
      return {
        width: Math.max(baseWidth * scaleFactor, 200), // Minimum 200px width
        height: Math.max(baseHeight * scaleFactor, 400), // Minimum 400px height
      };
    }

    // Tablet adjustments
    if (screenSize.width < 1024) {
      // lg breakpoint
      const scaleFactor = 0.85;
      return {
        width: baseWidth * scaleFactor,
        height: baseHeight * scaleFactor,
      };
    }

    // Desktop - base size
    return { width: baseWidth, height: baseHeight };
  };

  const phoneDimensions = getPhoneDimensions();

  // GSAP Animation for background blobs
  useGSAP(() => {
    // Animate the main blobs
    gsap.to(".blob-1", {
      x: 100,
      y: 50,
      scale: 1.2,
      rotation: 360,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".blob-2", {
      x: -80,
      y: -40,
      scale: 0.8,
      rotation: -270,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".blob-3", {
      x: 60,
      y: -100,
      scale: 1.1,
      rotation: 180,
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animate floating elements
    gsap.to(".floating-circle", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5,
    });
  });

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        {/* SVG Blob Shapes */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
        >
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
            <radialGradient id="gradient1" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor="oklch(48% 0.243 264.376)"
                stopOpacity="0.8"
              />
              <stop
                offset="100%"
                stopColor="oklch(48% 0.243 264.376)"
                stopOpacity="0.2"
              />
            </radialGradient>
            <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor="oklch(37% 0.146 265.522)"
                stopOpacity="0.7"
              />
              <stop
                offset="100%"
                stopColor="oklch(37% 0.146 265.522)"
                stopOpacity="0.1"
              />
            </radialGradient>
            <radialGradient id="gradient3" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                stopColor="oklch(60% 0.126 221.723)"
                stopOpacity="0.6"
              />
              <stop
                offset="100%"
                stopColor="oklch(60% 0.126 221.723)"
                stopOpacity="0.1"
              />
            </radialGradient>
          </defs>
        </svg>

        {/* Floating Circles */}
        <div className="floating-circle absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full"></div>
        <div className="floating-circle absolute top-40 right-20 w-6 h-6 bg-secondary/25 rounded-full"></div>
        <div className="floating-circle absolute bottom-32 left-1/4 w-3 h-3 bg-accent/35 rounded-full"></div>
        <div className="floating-circle absolute top-60 left-1/3 w-5 h-5 bg-primary/20 rounded-full"></div>
        <div className="floating-circle absolute bottom-20 right-1/3 w-4 h-4 bg-secondary/30 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-16 mb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="badge badge-success badge-lg gap-2 px-4 py-3 animate-pulse">
                <i className="fas fa-check-circle text-white"></i>
                <span className="font-bold text-white">AVAILABLE NOW</span>
              </div>
              <div className="badge badge-outline badge-lg">
                <span className="text-xs">Version 1.0</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-primary">
              Tara-vel
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-base-content/80">
              Hassle free on a traveling spree
            </p>
            <p className="text-lg mb-6 text-base-content/60 max-w-lg mx-auto lg:mx-0">
              Your Smart Public Transportation Companion for Cagayan Valley
            </p>

            {/* Alpha Tester Invitation */}
            <div className="bg-primary/10 border border-primary/30 rounded-2xl p-4 mb-8 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start gap-3">
                <i className="fas fa-sparkles text-accent text-xl mt-1"></i>
                <div className="text-left">
                  <p className="font-semibold text-base-content mb-1">
                    Want to try Tara-vel first?
                  </p>
                  <p className="text-sm text-base-content/70">
                    Secure your spot as an early tester and help shape the #1 public transport app in Cagayan Valley!
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a
                href="#download"
                className="btn btn-primary btn-lg group px-8 py-4"
              >
                <span className="text-lg font-semibold text-white">Download Now</span>
                <i className="fas fa-arrow-down ml-2 group-hover:translate-y-1 transition-transform text-white"></i>
              </a>
              <a
                href="#features"
                className="btn btn-outline btn-lg"
              >
                <span>Learn More</span>
                <i className="fas fa-info-circle ml-2"></i>
              </a>
            </div>
          </div>

          {/* Right Side - 3D Floating Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* 3D Phone Container */}
              <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-300">
                {/* Shadow */}
                <div className="absolute inset-0 bg-black/20 rounded-[3rem] transform translate-x-4 translate-y-4 blur-xl"></div>

                {/* Phone Frame */}
                <div className="relative bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[3rem] p-4 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-base-100 rounded-[2.5rem] overflow-hidden relative">
                    {/* TODO: Replace with actual Tara-vel app interface from SVG */}
                    <div
                      className="relative"
                      style={{
                        width: `${phoneDimensions.width}px`,
                        height: `${phoneDimensions.height}px`,
                      }}
                    >
                      <Image
                        src="/mockup-page-only.svg"
                        alt="Tara-vel App Interface"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Screen Overlay for 3D Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
                  </div>

                  {/* Phone Details */}

                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                    <div className="w-3 h-3 bg-neutral-900 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-12 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute top-1/2 -right-12 w-8 h-8 bg-accent/30 rounded-full blur-sm animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
