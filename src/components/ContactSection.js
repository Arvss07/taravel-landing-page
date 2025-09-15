'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  useGSAP(() => {
    // Animate contact cards entrance
    gsap.fromTo('.contact-card', 
      { 
        opacity: 0, 
        y: 50, 
        scale: 0.9 
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.contact-cards',
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate QR code
    gsap.fromTo('.qr-code', 
      { 
        opacity: 0, 
        scale: 0.5,
        rotation: -10
      },
      { 
        opacity: 1, 
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: '.qr-code',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate floating elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    // Animate contact icons
    gsap.fromTo('.contact-icon', 
      { 
        scale: 0,
        rotation: -180
      },
      { 
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: '.contact-cards',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate background blobs
    gsap.to('.contact-blob', {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1
    });

    gsap.to('.contact-blob-2', {
      rotation: -360,
      duration: 25,
      ease: "none",
      repeat: -1
    });
  });

  return (
    <section id="contact" className="relative py-20 min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        
        {/* Animated SVG Blobs */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Primary blob */}
          <path 
            d="M200 100C200 50 250 0 300 0C350 0 400 50 400 100C400 150 350 200 300 200C250 200 200 150 200 100Z" 
            fill="url(#contactGradient1)" 
            className="contact-blob opacity-20"
          />
          
          {/* Secondary blob */}
          <path 
            d="M800 600C800 550 850 500 900 500C950 500 1000 550 1000 600C1000 650 950 700 900 700C850 700 800 650 800 600Z" 
            fill="url(#contactGradient2)" 
            className="contact-blob-2 opacity-15"
          />
          
          {/* Accent blob */}
          <path 
            d="M1000 200C1000 150 1050 100 1100 100C1150 100 1200 150 1200 200C1200 250 1150 300 1100 300C1050 300 1000 250 1000 200Z" 
            fill="url(#contactGradient3)" 
            className="contact-blob opacity-10"
          />
          
          {/* Small decorative blob */}
          <path 
            d="M100 500C100 480 120 460 140 460C160 460 180 480 180 500C180 520 160 540 140 540C120 540 100 520 100 500Z" 
            fill="url(#contactGradient4)" 
            className="contact-blob-2 opacity-25"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="contactGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="contactGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <linearGradient id="contactGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="contactGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating elements */}
        <div className="floating-element absolute top-20 left-20 w-4 h-4 bg-primary/20 rounded-full"></div>
        <div className="floating-element absolute top-40 right-32 w-6 h-6 bg-secondary/20 rounded-full"></div>
        <div className="floating-element absolute bottom-40 left-32 w-3 h-3 bg-accent/30 rounded-full"></div>
        <div className="floating-element absolute bottom-20 right-20 w-5 h-5 bg-primary/15 rounded-full"></div>
        <div className="floating-element absolute top-1/2 left-1/4 w-2 h-2 bg-secondary/25 rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Have questions about Tara-Vel? We&apos;d love to hear from you! 
            Connect with us through any of these channels.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Facebook Messenger Card */}
          <div className="contact-card card bg-base-100 shadow-2xl hover:shadow-3xl transition-all duration-300 group border-2 border-blue-500/30 hover:border-blue-500/60">
            <div className="card-body p-8 text-center">
              <div className="contact-icon w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform">
                <i className="fab fa-facebook-messenger text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-base-content mb-4">Facebook Messenger</h3>
              <p className="text-base-content/70 mb-6 text-lg">Chat with us instantly for quick support and updates</p>
              <a 
                href="https://m.me/782638274929840" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary btn-lg w-full group-hover:scale-105 transition-transform hover:text-white"
              >
                Message Us
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="contact-card card bg-base-100 shadow-2xl hover:shadow-3xl transition-all duration-300 group border-2 border-green-500/30 hover:border-green-500/60">
            <div className="card-body p-8 text-center">
              <div className="contact-icon w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform">
                <i className="fas fa-envelope text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-base-content mb-4">Email Us</h3>
              <p className="text-base-content/70 mb-6 text-lg">Send us detailed inquiries and feedback</p>
              <a 
                href="mailto:taravelofficial.ph@gmail.com"
                className="btn btn-outline btn-success btn-lg w-full group-hover:scale-105 transition-transform border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white flex items-center justify-center"
              >
                <i className="fas fa-envelope mr-2 text-green-600 group-hover:text-white"></i>
                <span className="font-semibold">Send Email</span>
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="contact-card card bg-base-100 shadow-2xl hover:shadow-3xl transition-all duration-300 group border-2 border-purple-500/30 hover:border-purple-500/60">
            <div className="card-body p-8 text-center">
              <div className="contact-icon w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform">
                <i className="fas fa-phone text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-base-content mb-4">Call Us</h3>
              <p className="text-base-content/70 mb-6 text-lg">Speak directly with our team</p>
              <a 
                href="tel:+639052327405"
                className="btn btn-outline btn-primary btn-lg w-full group-hover:scale-105 transition-transform"
              >
                <i className="fas fa-phone mr-2"></i>
                +63 905 232 7405
              </a>
            </div>
          </div>

          {/* QR Code Card - Spans all 3 columns */}
          <div className="contact-card card bg-gradient-to-r from-primary/10 to-accent/10 shadow-2xl border border-primary/20 col-span-1 md:col-span-2 lg:col-span-3">
            <div className="card-body p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Side - QR Code */}
                <div className="flex flex-col items-center">
                  <div className="qr-code bg-base-100 border-4 border-primary/30 rounded-3xl p-6 w-48 h-48 lg:w-64 lg:h-64 flex items-center justify-center shadow-xl">
                    <Image 
                      src="/taravel-fb-page.svg" 
                      alt="Tara-Vel Facebook Page QR Code" 
                      width={256}
                      height={256}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm lg:text-base text-base-content/60 mt-4">
                    Scan with your phone camera or QR code reader
                  </p>
                </div>
                
                {/* Right Side - Text Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    Scan to Follow Our Journey
                  </h3>
                  <p className="text-base-content/80 mb-6 text-lg">
                    Scan this QR code to instantly follow our Facebook page and stay updated with Tara-Vel&apos;s latest developments!
                  </p>
                  <a 
                    href="https://www.facebook.com/share/17DB8fhPL9/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg text-white"
                  >
                    Or Click Here to Visit Our Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
