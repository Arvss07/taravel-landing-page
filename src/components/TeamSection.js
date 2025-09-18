'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {

  // GSAP animations
  useGSAP(() => {
    // Animate team cards
    gsap.fromTo('.team-card', 
      { 
        y: 60, 
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.team-grid',
          start: 'top 80%'
        }
      }
    );

    // Animate profile images
    gsap.fromTo('.profile-image',
      {
        scale: 0,
        rotation: -180
      },
      {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.75)',
        scrollTrigger: {
          trigger: '.team-grid',
          start: 'top 80%'
        }
      }
    );

    // Animate floating blobs
    gsap.to('.floating-blob', {
      y: -20,
      x: 10,
      rotation: 5,
      duration: 6,
      ease: 'sine.inOut',
      stagger: 1,
      repeat: -1,
      yoyo: true
    });
  });

  const teamMembers = [
    {
      id: 1,
      name: 'Jake Russel Agcanas',
      role: 'UI/UX Designer',
      email: 'juniorlazarooo.jr@gmail.com',
      image: '/assets/member-pictures/jake.jpg',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 2,
      name: 'Arvy Aggabao',
      role: 'Web Developer',
      email: 'aggabaoarvy072004@gmail.com',
      image: '/assets/member-pictures/arvy.png',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 3,
      name: 'Jirehvestre Domingo',
      role: 'Mobile Developer',
      email: 'jirehvestre25434@gmail.com',
      image: '/assets/member-pictures/jv.jpg',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 4,
      name: 'Carl Angelo Obordo',
      role: 'Mobile Developer',
      email: 'carlobordoangelo@gmail.com',
      image: '/assets/member-pictures/carl.jpg',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      id: 5,
      name: 'Abiel Roj Parungao',
      role: 'Mobile Developer',
      email: 'abielparungao31@gmail.com',
      image: '/assets/member-pictures/abiel.jpg',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    }
  ];

  return (
    <section id="team" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        
        {/* Floating SVG Blobs */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Team theme blobs */}
          <path 
            d="M200 150C200 100 250 50 300 50C350 50 400 100 400 150C400 200 350 250 300 250C250 250 200 200 200 150Z" 
            fill="url(#teamGradient1)" 
            className="floating-blob opacity-20"
          />
          
          <path 
            d="M800 200C800 150 850 100 900 100C950 100 1000 150 1000 200C1000 250 950 300 900 300C850 300 800 250 800 200Z" 
            fill="url(#teamGradient2)" 
            className="floating-blob opacity-25"
          />
          
          <path 
            d="M400 500C400 450 450 400 500 400C550 400 600 450 600 500C600 550 550 600 500 600C450 600 400 550 400 500Z" 
            fill="url(#teamGradient3)" 
            className="floating-blob opacity-15"
          />
          
          <path 
            d="M100 600C100 550 150 500 200 500C250 500 300 550 300 600C300 650 250 700 200 700C150 700 100 650 100 600Z" 
            fill="url(#teamGradient4)" 
            className="floating-blob opacity-30"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="teamGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="teamGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#BE185D" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="teamGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#059669" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="teamGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1"/>
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
            Meet Our Team
          </h2>
          <p className="text-clamp-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            The passionate developers behind Tara-Vel, working together to revolutionize transportation in Cagayan Valley.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8 mb-16 max-w-8xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card group">
              <div className={`card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full border ${member.borderColor} hover:border-opacity-50`}>
                <div className="card-body p-4 sm:p-6 lg:p-8 text-center">
                  {/* Profile Image */}
                  <div className="relative mb-4 lg:mb-6">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 ${member.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        width={512}
                        height={512}
                        className="profile-image w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-2 border-base-100 shadow-md"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-base-content mb-2 lg:mb-3">
                    {member.name}
                  </h3>
                  <p className={`text-xs sm:text-sm lg:text-base ${member.color} font-semibold mb-4 lg:mb-6`}>
                    {member.role}
                  </p>
                  
                  {/* Email Contact */}
                  <div className="mt-auto">
                    <a 
                      href={`mailto:${member.email}`}
                      className={`btn btn-xs sm:btn-sm lg:btn-md btn-outline ${member.color.replace('text-', 'btn-')} hover:text-black transition-all duration-300 w-full`}
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      <span className="hidden sm:inline">Contact</span>
                      <span className="sm:hidden">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
