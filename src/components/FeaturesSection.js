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
        y: 60, 
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.features-container',
          start: 'top 80%'
        }
      }
    );

    // Animate icons
    gsap.fromTo('.feature-icon',
      {
        scale: 0,
        rotation: -180
      },
      {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.features-container',
          start: 'top 80%'
        }
      }
    );

  });

  const features = [
    {
      id: 'gps-tracking',
      title: 'Real-Time GPS Tracking',
      description: 'Know exactly where your ride is and when it\'s passing over your pin location.',
      icon: 'fas fa-map-marker-alt',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'id-storage',
      title: 'ID Storage',
      description: 'Securely store your Student, PWD, or Senior ID and get verified for a respective discount.',
      icon: 'fas fa-id-card',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      id: 'route-info',
      title: 'Route Information',
      description: 'View detailed route taken by the vehicle so you can choose what\'s convenient for you.',
      icon: 'fas fa-route',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      id: 'passenger-count',
      title: 'Passenger Count Display',
      description: 'Check how full a vehicle is before boarding to avoid overcrowding.',
      icon: 'fas fa-users',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'user-friendly',
      title: 'User-Friendly Interface',
      description: 'Intuitive design that\'s easy to use for all ages, from students to seniors.',
      icon: 'fas fa-heart',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    },
    {
      id: 'free-to-use',
      title: 'Completely Free',
      description: 'No subscriptions, no hidden fees. Accessible transportation for everyone.',
      icon: 'fas fa-gift',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* SVG Blob Shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        
        {/* SVG Blob Shapes */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Blue blob */}
          <path 
            d="M200 150C200 100 250 50 300 50C350 50 400 100 400 150C400 200 350 250 300 250C250 250 200 200 200 150Z" 
            fill="url(#featureGradient1)" 
            className="floating-blob opacity-20"
          />
          
          {/* Pink blob */}
          <path 
            d="M800 100C800 60 840 20 880 20C920 20 960 60 960 100C960 140 920 180 880 180C840 180 800 140 800 100Z" 
            fill="url(#featureGradient2)" 
            className="floating-blob opacity-25"
          />
          
          {/* Orange blob */}
          <path 
            d="M100 500C100 450 150 400 200 400C250 400 300 450 300 500C300 550 250 600 200 600C150 600 100 550 100 500Z" 
            fill="url(#featureGradient3)" 
            className="floating-blob opacity-15"
          />
          
          {/* Purple blob */}
          <path 
            d="M900 400C900 360 940 320 980 320C1020 320 1060 360 1060 400C1060 440 1020 480 980 480C940 480 900 440 900 400Z" 
            fill="url(#featureGradient4)" 
            className="floating-blob opacity-30"
          />
          
          {/* Teal blob */}
          <path 
            d="M500 300C500 250 550 200 600 200C650 200 700 250 700 300C700 350 650 400 600 400C550 400 500 350 500 300Z" 
            fill="url(#featureGradient5)" 
            className="floating-blob opacity-20"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="featureGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="featureGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#BE185D" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="featureGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="featureGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="featureGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#0D9488" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-clamp-4xl font-bold mb-6 text-primary">
            Key Features
          </h2>
          <p className="text-clamp-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Discover the powerful features that make Tara-Vel the ultimate public transportation companion for Cagayan Valley commuters.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={feature.id} className="feature-card group">
                <div className={`card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full border ${feature.borderColor} hover:border-opacity-50`}>
                  <div className="card-body p-6 text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${feature.icon} ${feature.color} text-2xl feature-icon`}></i>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-clamp-lg font-bold text-base-content mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-clamp-sm text-base-content/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
