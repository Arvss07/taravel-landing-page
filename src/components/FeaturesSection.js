'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {

  // GSAP animations
  useGSAP(() => {
    // Animate feature cards
    gsap.fromTo('.feature-card', 
      { 
        y: 80, 
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 80%',
          end: 'bottom 20%'
        }
      }
    );

    // Animate central feature
    gsap.fromTo('.central-feature',
      {
        scale: 0.5,
        opacity: 0,
        rotation: -10
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.75)',
        scrollTrigger: {
          trigger: '.central-feature',
          start: 'top 85%'
        }
      }
    );

    // Float animation for icons
    gsap.to('.feature-icon', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3
    });

    // Animate SVG blobs
    gsap.to('.floating-blob', {
      y: -20,
      x: 10,
      rotation: 5,
      duration: 4,
      ease: 'sine.inOut',
      stagger: 0.5,
      repeat: -1,
      yoyo: true
    });
  });

  const features = [
    {
      id: 'gps-tracking',
      title: 'Real-Time GPS Tracking',
      description: 'Know exactly where your ride is and when it\'s passing over your pin location.',
      faIcon: 'fas fa-map-marker-alt',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'id-storage',
      title: 'ID Storage',
      description: 'Securely store your Student, PWD, or Senior ID and get verified for a respective discount.',
      faIcon: 'fas fa-id-card',
      borderColor: 'border-pink-500/30'
    },
    {
      id: 'route-info',
      title: 'Route Information',
      description: 'View detailed route taken by the vehicle so you can choose what\'s convenient for you.',
      faIcon: 'fas fa-route',
      borderColor: 'border-orange-500/30'
    },
    {
      id: 'passenger-count',
      title: 'Passenger Count Display',
      description: 'Check how full a vehicle is before boarding to avoid overcrowding.',
      faIcon: 'fas fa-users',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'user-friendly',
      title: 'User-Friendly Interface',
      description: 'Intuitive design that\'s easy to use for all ages, from students to seniors.',
      faIcon: 'fas fa-heart',
      borderColor: 'border-teal-500/30'
    }
  ];

  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-base-100 to-base-200 overflow-hidden">
      {/* Animated SVG Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3"></div>
        
        {/* SVG Blobs */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Blue blob for GPS tracking */}
          <path 
            d="M200 150C200 100 250 50 300 50C350 50 400 100 400 150C400 200 350 250 300 250C250 250 200 200 200 150Z" 
            fill="url(#blueGradient)" 
            className="floating-blob"
            style={{animationDelay: '0s'}}
          />
          
          {/* Pink blob for ID storage */}
          <path 
            d="M800 100C800 60 840 20 880 20C920 20 960 60 960 100C960 140 920 180 880 180C840 180 800 140 800 100Z" 
            fill="url(#pinkGradient)" 
            className="floating-blob"
            style={{animationDelay: '1s'}}
          />
          
          {/* Orange blob for route info */}
          <path 
            d="M100 500C100 450 150 400 200 400C250 400 300 450 300 500C300 550 250 600 200 600C150 600 100 550 100 500Z" 
            fill="url(#orangeGradient)" 
            className="floating-blob"
            style={{animationDelay: '2s'}}
          />
          
          {/* Purple blob for passenger count */}
          <path 
            d="M900 400C900 360 940 320 980 320C1020 320 1060 360 1060 400C1060 440 1020 480 980 480C940 480 900 440 900 400Z" 
            fill="url(#purpleGradient)" 
            className="floating-blob"
            style={{animationDelay: '1.5s'}}
          />
          
          {/* Teal blob for user-friendly */}
          <path 
            d="M500 300C500 250 550 200 600 200C650 200 700 250 700 300C700 350 650 400 600 400C550 400 500 350 500 300Z" 
            fill="url(#tealGradient)" 
            className="floating-blob"
            style={{animationDelay: '0.5s'}}
          />
          
          {/* Green blob for free to use */}
          <path 
            d="M300 600C300 550 350 500 400 500C450 500 500 550 500 600C500 650 450 700 400 700C350 700 300 650 300 600Z" 
            fill="url(#greenGradient)" 
            className="floating-blob"
            style={{animationDelay: '2.5s'}}
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.05"/>
            </linearGradient>
            <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#BE185D" stopOpacity="0.05"/>
            </linearGradient>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.05"/>
            </linearGradient>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.05"/>
            </linearGradient>
            <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#0D9488" stopOpacity="0.05"/>
            </linearGradient>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#059669" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating ping elements */}
        <div className="absolute top-32 left-16 w-2 h-2 bg-primary/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-secondary/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Key Features
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Discover the powerful features that make Tara-Vel the ultimate public transportation companion for Cagayan Valley commuters.
          </p>
        </div>

        {/* Bento Box Layout */}
        <div className="max-w-7xl mx-auto">
          
          {/* Features Grid Container - Responsive Layout */}
          <div className="features-grid grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-4 mb-16 h-auto md:h-[600px] lg:h-[700px]">
            
            {/* Free to Use - div5: grid-area: 1 / 1 / 5 / 3 (Large Left Side) */}
            <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-5 card shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-green-500/30">
              <div className="card-body p-4 md:p-8 text-center flex flex-col justify-center h-full bg-base-100 rounded-2xl">
                <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-green-500/30 rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 feature-icon">
                  <i className="fas fa-dollar-sign text-2xl md:text-3xl text-green-600"></i>
                </div>
                <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-base-content">Free to Use</h3>
                <p className="leading-relaxed text-base-content/70 text-sm md:text-lg">
                  Tara-Vel is completely free. No subscriptions, no hidden fees. Accessible transportation for everyone.
                </p>
                <div className="inline-block border border-green-500/30 text-green-600 px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold text-xs md:text-sm mt-4 md:mt-6">100% Free</div>
              </div>
            </div>

            {/* User-Friendly - div6: grid-area: 1 / 3 / 3 / 7 (Top Wide) */}
            <div className={`md:col-start-3 md:col-end-7 md:row-start-1 md:row-end-3 card shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 ${features[4].borderColor}`}>
              <div className="card-body p-4 md:p-6 h-full flex flex-col bg-base-100 rounded-2xl">
                <div className={`w-12 h-12 md:w-14 md:h-14 border-2 ${features[4].borderColor} rounded-2xl flex items-center justify-center mb-3 md:mb-4 feature-icon group-hover:scale-110 transition-transform`}>
                  <i className={`${features[4].faIcon} text-lg md:text-xl text-teal-600`}></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-base-content mb-2 md:mb-3">{features[4].title}</h3>
                <p className="text-base-content/70 text-xs md:text-sm flex-1">{features[4].description}</p>
              </div>
            </div>

            {/* Real-Time GPS Tracking - div4: grid-area: 3 / 3 / 5 / 5 (Middle Square) */}
            <div className={`md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-5 card shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 ${features[0].borderColor}`}>
              <div className="card-body p-4 md:p-6 h-full flex flex-col bg-base-100 rounded-2xl">
                <div className={`w-12 h-12 md:w-14 md:h-14 border-2 ${features[0].borderColor} rounded-2xl flex items-center justify-center mb-3 md:mb-4 feature-icon group-hover:scale-110 transition-transform`}>
                  <i className={`${features[0].faIcon} text-lg md:text-xl text-blue-600`}></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-base-content mb-2 md:mb-3">{features[0].title}</h3>
                <p className="text-base-content/70 text-xs md:text-sm flex-1">{features[0].description}</p>
              </div>
            </div>

            {/* Passenger Count - div3: grid-area: 3 / 5 / 5 / 7 (Middle Right) */}
            <div className={`md:col-start-5 md:col-end-7 md:row-start-3 md:row-end-5 card shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 ${features[3].borderColor}`}>
              <div className="card-body p-4 md:p-6 h-full flex flex-col bg-base-100 rounded-2xl">
                <div className={`w-12 h-12 md:w-14 md:h-14 border-2 ${features[3].borderColor} rounded-2xl flex items-center justify-center mb-3 md:mb-4 feature-icon group-hover:scale-110 transition-transform`}>
                  <i className={`${features[3].faIcon} text-lg md:text-xl text-purple-600`}></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-base-content mb-2 md:mb-3">{features[3].title}</h3>
                <p className="text-base-content/70 text-xs md:text-sm flex-1">{features[3].description}</p>
              </div>
            </div>

            {/* Route Information - div1: grid-area: 5 / 1 / 7 / 5 (Bottom Wide Left) */}
            <div className={`md:col-start-1 md:col-end-5 md:row-start-5 md:row-end-7 card shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 ${features[2].borderColor}`}>
              <div className="card-body p-4 md:p-6 h-full flex flex-col bg-base-100 rounded-2xl">
                <div className={`w-12 h-12 md:w-14 md:h-14 border-2 ${features[2].borderColor} rounded-2xl flex items-center justify-center mb-3 md:mb-4 feature-icon group-hover:scale-110 transition-transform`}>
                  <i className={`${features[2].faIcon} text-lg md:text-xl text-orange-600`}></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-base-content mb-2 md:mb-3">{features[2].title}</h3>
                <p className="text-base-content/70 text-xs md:text-sm flex-1">{features[2].description}</p>
              </div>
            </div>

            {/* ID Storage - div2: grid-area: 5 / 5 / 7 / 7 (Bottom Right Small) */}
            <div className={`md:col-start-5 md:col-end-7 md:row-start-5 md:row-end-7 card shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 ${features[1].borderColor}`}>
              <div className="card-body p-4 md:p-6 h-full flex flex-col bg-base-100 rounded-2xl">
                <div className={`w-12 h-12 md:w-14 md:h-14 border-2 ${features[1].borderColor} rounded-2xl flex items-center justify-center mb-3 md:mb-4 feature-icon group-hover:scale-110 transition-transform`}>
                  <i className={`${features[1].faIcon} text-lg md:text-xl text-pink-600`}></i>
                </div>
                <h3 className="text-base md:text-lg font-bold text-base-content mb-2 md:mb-3">{features[1].title}</h3>
                <p className="text-base-content/70 text-xs md:text-sm flex-1">{features[1].description}</p>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="card bg-base-100 shadow-xl border border-primary/20 max-w-2xl mx-auto">
              <div className="card-body p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Ready to Transform Your Commute?
                </h3>
                <p className="text-base-content/80 mb-6">
                  Experience smarter, more reliable public transportation with Tara-Vel.
                </p>
                <button className="btn btn-primary btn-lg">
                  Download Now! 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
