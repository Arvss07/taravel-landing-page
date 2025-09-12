'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSolutionSection() {
  // GSAP animations
  useGSAP(() => {
    // Animate statistics cards
    gsap.fromTo('.stat-card', 
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stats-container',
          start: 'top 80%',
          end: 'bottom 20%'
        }
      }
    );

    // Animate problem/solution content
    gsap.fromTo('.content-card',
      {
        x: -30,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.content-container',
          start: 'top 75%'
        }
      }
    );
  });

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        {/* SVG Blob Shapes */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Problem-themed blob */}
          <path
            className="animate-pulse"
            d="M150,300 C250,280 350,380 300,480 C250,580 150,530 50,480 C-50,430 0,320 150,300Z"
            fill="url(#problemGradient)"
            opacity="0.3"
          />
          
          {/* Solution-themed blob */}
          <path
            className="animate-pulse"
            d="M900,150 C1000,130 1100,230 1050,330 C1000,430 900,380 800,330 C700,280 750,170 900,150Z"
            fill="url(#solutionGradient)"
            opacity="0.4"
            style={{ animationDelay: '2s' }}
          />
          
          {/* Central blob */}
          <path
            className="animate-pulse"
            d="M600,450 C700,420 750,520 700,620 C650,720 550,670 500,620 C450,570 500,480 600,450Z"
            fill="url(#centralGradient)"
            opacity="0.2"
            style={{ animationDelay: '4s' }}
          />

          {/* Gradients */}
          <defs>
            <radialGradient id="problemGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(71.76% 0.221 22.18)" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="oklch(71.76% 0.221 22.18)" stopOpacity="0.1"/>
            </radialGradient>
            <radialGradient id="solutionGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(64.8% 0.15 160)" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="oklch(64.8% 0.15 160)" stopOpacity="0.1"/>
            </radialGradient>
            <radialGradient id="centralGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(48% 0.243 264.376)" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="oklch(48% 0.243 264.376)" stopOpacity="0.1"/>
            </radialGradient>
          </defs>
        </svg>

        {/* Floating Elements */}
        <div className="absolute top-32 left-16 w-3 h-3 bg-error/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-48 right-24 w-4 h-4 bg-success/25 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-64 left-1/2 w-5 h-5 bg-secondary/20 rounded-full animate-bounce" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-accent/25 rounded-full animate-bounce" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            The Reality of Public Transport in Cagayan Valley
          </h2>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Our market research reveals significant challenges that commuters face daily. 
            Tara-Vel was created to solve these real problems.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="stats-container mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Overcrowding Stat */}
            <div className="stat-card card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl md:text-5xl font-bold text-error mb-4">
                  55.8%
                </div>
                <h3 className="text-xl font-semibold mb-2">Face Overcrowding</h3>
                <p className="text-base-content/70">
                  Of 95 surveyed individuals experience frequent overcrowding issues
                </p>
              </div>
            </div>

            {/* Wait Time Stat */}
            <div className="stat-card card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-4xl md:text-5xl font-bold text-warning mb-4">
                <span>15</span>
                <span className="mx-2">–</span>
                <span>30</span>
                  <span className="text-lg font-normal ml-1">minutes</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Average Wait Time</h3>
                <p className="text-base-content/70">
                  Commuters typically wait 15 to 30 minutes without knowing when their ride will arrive
                </p>
              </div>
            </div>


            {/* Survey Size */}
            <div className="stat-card card bg-base-100 shadow-xl md:col-span-2 lg:col-span-1">
              <div className="card-body text-center">
                <div className="text-4xl md:text-5xl font-bold text-info mb-4">
                  95
                  <span className="text-lg font-normal ml-1">people</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Survey Respondents</h3>
                <p className="text-base-content/70">
                  Comprehensive market validation from real Cagayan Valley commuters
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Problem & Solution Content */}
        <div className="content-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Problem Card */}
            <div className="content-card card bg-base-100 border border-error/30 shadow-lg">
              <div className="card-body p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-error/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-error">The Problem</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Frequent Overcrowding</h4>
                    <p className="text-base-content/70 text-sm">
                      55.8% regularly encounter overcrowded vehicles.
                    </p>
                  </div>

                  <div className='mt-2 text-xl'>
                    <h4 className="font-semibold mb-1 text-sm">Uncertain Wait Times</h4>
                    <p className="text-base-content/70 text-sm">
                      Commuters face 15 to 30 minute waits with no information about arrival times.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Essential Travel Challenges</h4>
                    <p className="text-base-content/70 text-sm">
                      Unreliable transport affects education and work commutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Card */}
            <div className="content-card card bg-base-100 border border-success/30 shadow-lg">
              <div className="card-body p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-success">Our Solution</h3>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-primary mb-2">What is Tara-Vel?</h4>
                  <p className="text-base-content/80 text-sm leading-relaxed">
                    A mobile app designed to ease public transportation in Cagayan Valley with real-time insights and inclusive features.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Real-Time Tracking</h4>
                    <p className="text-base-content/70 text-sm">
                      Know exactly where your ride is and when it's arriving.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Passenger Count Display</h4>
                    <p className="text-base-content/70 text-sm">
                      Check vehicle capacity before boarding.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Inclusive & Accessible</h4>
                    <p className="text-base-content/70 text-sm">
                      Digital ID storage for discount verification.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Card */}
            <div className="content-card card bg-base-100 border border-primary/30 shadow-lg">
              <div className="card-body p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Why Tara-Vel?</h3>
                </div>

                <p className="text-base-content/80 text-sm leading-relaxed">
                  Commuters face uncertainty with missed rides, unclear routes, and overcrowded vehicles. Tara-Vel bridges that gap, providing reliable information and inclusive tools tailored to Tuguegarao's commuting public.
                </p>

                <div className="mt-4">
                  <p className="text-center text-secondary/80 text-md font-bold">
                    Making public transport more humane, predictable, and user-friendly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
