"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CommuterGuide() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Landing Page",
      description: "Start your journey with Tara-vel. Sign up or log in to begin.",
      image: "/assets/guides/Tara-Vel_s0.jpg",
    },
    {
      id: 1,
      title: "Registration",
      description:
        "Create your account by entering your information. Use a valid email address—you'll receive a verification email after signing up.",
      image: "/assets/guides/Tara-Vel_s1a.jpg",
    },
    {
      id: 2,
      title: "Login",
      description: "Sign in with your registered credentials to access the app.",
      image: "/assets/guides/Tara-Vel_s1b.jpg",
    },
    {
      id: 3,
      title: "Enable Location & Dashboard",
      description:
        "Enable location services to access the dashboard. View your current location and see vehicles passing by your area.",
      image: "/assets/guides/Tara-Vel_s2.jpg",
    },
    {
      id: 4,
      title: "Active Vehicle Routes",
      description:
        "When a vehicle is active, its route appears as a blue line on the map. An icon marks the vehicle's current position.",
      image: "/assets/guides/Tara-Vel_s3.jpg",
    },
    {
      id: 5,
      title: "View Nearby Vehicles",
      description:
        "Tap the vehicle icon in the bottom-right corner to see a list of vehicles near your location.",
      image: "/assets/guides/Tara-Vel_s4.jpg",
    },
    {
      id: 6,
      title: "Vehicle Details & Ping",
      description:
        "View vehicle details including destination, passenger count, waiting passengers, and fare matrix. Ping the vehicle to signal your intent to board.",
      image: "/assets/guides/Tara-Vel_s5.jpg",
    },
    {
      id: 7,
      title: "Select Vehicle & Passenger Count",
      description:
        "Tap 'Select Vehicle' to open the passenger screen. Enter how many passengers will board.",
      image: "/assets/guides/Tara-Vel_s6.jpg",
    },
    {
      id: 8,
      title: "Track Vehicle & ETA",
      description:
        "After entering passenger count, the map tracks the selected vehicle and shows the estimated arrival time at your location.",
      image: "/assets/guides/Tara-Vel_s7.jpg",
    },
    {
      id: 9,
      title: "Follow or Unselect Vehicle",
      description:
        "Tap the arrow icon to follow the vehicle on the map. Tap the red button to unselect the vehicle and choose a different one.",
      image: "/assets/guides/Tara-Vel_s8.jpg",
    },
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const goToStep = (index) => {
    setCurrentStep(index);
  };

  // Auto-slide functionality - loop every 3 seconds
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(autoSlideInterval);
  }, [steps.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight") {
        setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft") {
        setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [steps.length]);


  const currentStepData = steps[currentStep];

  return (
    <section id="guide" className="relative py-20 overflow-hidden">
      {/* SVG Blob Shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        
        {/* SVG Blob Shapes */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Blue blob */}
          <path 
            d="M200 150C200 100 250 50 300 50C350 50 400 100 400 150C400 200 350 250 300 250C250 250 200 200 200 150Z" 
            fill="url(#guideGradient1)" 
            className="floating-blob opacity-20"
          />
          
          {/* Pink blob */}
          <path 
            d="M800 100C800 60 840 20 880 20C920 20 960 60 960 100C960 140 920 180 880 180C840 180 800 140 800 100Z" 
            fill="url(#guideGradient2)" 
            className="floating-blob opacity-25"
          />
          
          {/* Orange blob */}
          <path 
            d="M100 500C100 450 150 400 200 400C250 400 300 450 300 500C300 550 250 600 200 600C150 600 100 550 100 500Z" 
            fill="url(#guideGradient3)" 
            className="floating-blob opacity-15"
          />
          
          {/* Purple blob */}
          <path 
            d="M900 400C900 360 940 320 980 320C1020 320 1060 360 1060 400C1060 440 1020 480 980 480C940 480 900 440 900 400Z" 
            fill="url(#guideGradient4)" 
            className="floating-blob opacity-30"
          />
          
          {/* Teal blob */}
          <path 
            d="M500 300C500 250 550 200 600 200C650 200 700 250 700 300C700 350 650 400 600 400C550 400 500 350 500 300Z" 
            fill="url(#guideGradient5)" 
            className="floating-blob opacity-20"
          />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="guideGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="guideGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#BE185D" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="guideGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="guideGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="guideGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
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
        <div className="text-center mb-12 guide-header">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            How to Use Tara-vel
          </h2>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Follow these simple steps to get started with Tara-vel and make your commute hassle-free.
          </p>
        </div>

        {/* Guide Card */}
        <div className="max-w-5xl mx-auto guide-card">
          <div className="card bg-base-100 shadow-2xl border border-base-300">
            <div className="card-body p-6 md:p-8">
              {/* Step Counter & Navigation */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="badge badge-primary badge-lg px-4 py-3 text-white">
                    Step {currentStep + 1} of {steps.length}
                  </div>
                  <div className="text-sm text-base-content/60">
                    {currentStepData.title}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="btn btn-circle btn-sm btn-outline disabled:btn-disabled"
                    aria-label="Previous step"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={currentStep === steps.length - 1}
                    className="btn btn-circle btn-sm btn-outline disabled:btn-disabled"
                    aria-label="Next step"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>

              {/* Image & Content */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Image */}
                <div className="mx-auto rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={currentStepData.image}
                    alt={`Step ${currentStep + 1}: ${currentStepData.title}`}
                    width={328}
                    height={660}
                    className="step-content w-auto h-auto"
                    priority={currentStep < 3}
                  />
                </div>

                {/* Description */}
                <div className="space-y-4 step-content">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-base-content mb-3">
                      {currentStepData.title}
                    </h3>
                    <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
                      {currentStepData.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step Indicators */}
              <div className="flex justify-center gap-2 mt-8 flex-wrap">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => goToStep(index)}
                    className={`btn btn-circle btn-sm ${
                      currentStep === index
                        ? "btn-primary"
                        : "btn-outline btn-ghost"
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-5xl mx-auto mt-6">
          <progress
            className="progress progress-primary w-full"
            value={((currentStep + 1) / steps.length) * 100}
            max="100"
          ></progress>
        </div>
      </div>
    </section>
  );
}
