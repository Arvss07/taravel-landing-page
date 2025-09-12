'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Navigation items
  const navigationItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'download', label: 'Download' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' }
  ];

  // Calculate scroll progress and active section
  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    const handleActiveSection = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 150; // Increased offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleScroll = () => {
      calculateScrollProgress();
      handleActiveSection();
    };

    // Initial check
    handleActiveSection();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-base-300 z-50">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Bar */}
      <div className="fixed top-4 left-4 right-4 z-40">
        <div className="navbar bg-base-100/95 backdrop-blur-md shadow-lg rounded-2xl">
        {/* Mobile Menu Button & Logo */}
        <div className="navbar-start">
          <div className="lg:hidden">
            <button 
              className="btn btn-ghost"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h8m-8 6h16" 
                />
              </svg>
            </button>
          </div>
          
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="btn btn-ghost text-xl font-bold text-primary"
          >
            {/* TODO: Replace with actual Tara-Vel logo */}
            <Image
              src="/taravel.svg"
              alt="Tara-Vel Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="hidden sm:inline">Tara-Vel</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-primary bg-primary/10' 
                      : 'text-base-content hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="navbar-end">
          <button 
            onClick={() => scrollToSection('download')}
            className="btn btn-primary btn-sm text-white"
          >
            <i class="fa-solid fa-arrow-down text-white"></i>
            Download Now!
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-80 h-full bg-base-100 z-50 lg:hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-base-300">
              <div className="flex items-center gap-3">
                <Image
                  src="/taravel.svg"
                  alt="Tara-Vel Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold text-primary">Tara-Vel</span>
              </div>
              
              {/* Close Button */}
              <button 
                className="btn btn-ghost btn-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Menu */}
            <div className="p-6">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left p-3 rounded-lg font-medium transition-colors ${
                        activeSection === item.id 
                          ? 'text-primary bg-primary/10 border border-primary/20' 
                          : 'text-base-content hover:text-primary hover:bg-base-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          activeSection === item.id ? 'bg-primary' : 'bg-base-300'
                        }`} />
                        {item.label}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>

              {/* CTA Button in Sidebar */}
              <div className="mt-8">
                <button 
                  onClick={() => {
                    scrollToSection('download');
                    setIsMenuOpen(false);
                  }}
                  className="btn btn-primary w-full"
                >
                  Get Early Access
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
