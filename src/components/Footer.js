'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  useGSAP(() => {
    // Animate footer elements entrance
    gsap.fromTo('.footer-element', 
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.footer-section',
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate floating elements
    gsap.to('.footer-floating', {
      y: -10,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });
  });

  return (
    <footer className="footer-section relative bottom-0 left-0 w-full overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/5"></div>
        
        {/* Floating elements */}
        <div className="footer-floating absolute top-10 left-10 w-3 h-3 bg-primary/20 rounded-full"></div>
        <div className="footer-floating absolute top-20 right-20 w-2 h-2 bg-secondary/30 rounded-full"></div>
        <div className="footer-floating absolute bottom-20 left-1/4 w-4 h-4 bg-accent/20 rounded-full"></div>
        <div className="footer-floating absolute bottom-10 right-1/3 w-2 h-2 bg-primary/25 rounded-full"></div>
      </div>

      <div className="relative z-10">
         {/* Main Footer Content */}
         <div className="container mx-auto px-4 py-8">
           <div className="footer-element flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
             
             {/* Brand Section */}
             <div className="flex items-center space-x-4">
               <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                 <Image 
                   src="/taravel.svg" 
                   alt="Tara-Vel Logo" 
                   width={32} 
                   height={32}
                   className="w-8 h-8"
                 />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-primary">Tara-Vel</h3>
                 <p className="text-base-content/70 text-sm">
                   Transforming public transportation in Cagayan Valley making your commute hassle-free.
                 </p>
               </div>
             </div>

             {/* Social Links */}
             <div className="flex space-x-4">
               <a 
                 href="https://www.facebook.com/share/17DB8fhPL9/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-xl flex items-center justify-center transition-colors group"
               >
                 <i className="fa-brands fa-facebook text-primary group-hover:scale-110 transition-transform"></i>
               </a>
               <a 
                 href="mailto:taravelofficial.ph@gmail.com"
                 className="w-10 h-10 bg-secondary/10 hover:bg-secondary/20 rounded-xl flex items-center justify-center transition-colors group"
               >
                 <i className="fas fa-envelope text-secondary group-hover:scale-110 transition-transform"></i>
               </a>
               <a 
                 href="tel:+639052327405"
                 className="w-10 h-10 bg-accent/10 hover:bg-accent/20 rounded-xl flex items-center justify-center transition-colors group"
               >
                 <i className="fas fa-phone text-accent group-hover:scale-110 transition-transform"></i>
               </a>
             </div>

             {/* Copyright */}
             <div className="text-center lg:text-right">
               <p className="text-base-content/70 text-sm">
                 © 2025 Tara-Vel. All rights reserved. Made with ❤️ for Cagayan Valley commuters.
               </p>
             </div>

           </div>
        </div>
      </div>
    </footer>
  );
}
