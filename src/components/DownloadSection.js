'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RateLimiter from '@/utils/rateLimiter';

gsap.registerPlugin(ScrollTrigger);

export default function DownloadSection() {
  const [commuterSource, setCommuterSource] = useState('vercel');
  const [driverSource, setDriverSource] = useState('vercel');
  const [loading, setLoading] = useState({
    commuter: { vercel: false, mega: false },
    driver: { vercel: false, mega: false }
  });
  const [disabled, setDisabled] = useState({
    commuter: { vercel: false, mega: false },
    driver: { vercel: false, mega: false }
  });

  const rateLimiter = useRef(new RateLimiter(5000)).current;

  // Download URLs
  const downloadUrls = {
    commuter: {
      vercel: 'https://piqohdefsahpbybs.public.blob.vercel-storage.com/Tara-Vel-release_v2.apk',
      mega: 'https://mega.nz/file/HYtyBaTY#qhQH7AUPVcuYAPottIv0LcAWg9cdhJ4m58bTB-1k7kY'
    },
    driver: {
      vercel: 'https://piqohdefsahpbybs.public.blob.vercel-storage.com/Tara-vel-driver_release_v1.apk',
      mega: 'https://mega.nz/file/WEFx0KqY#ZNT0HuZXMtxVF4wmu3SHSKng1PEJRrS5JpLl2VsU3YM'
    }
  };

  // Check and update disabled state for rate limiting
  useEffect(() => {
    const checkDisabled = () => {
      setDisabled({
        commuter: {
          vercel: rateLimiter.getRemainingMs('commuter-vercel') > 0,
          mega: rateLimiter.getRemainingMs('commuter-mega') > 0
        },
        driver: {
          vercel: rateLimiter.getRemainingMs('driver-vercel') > 0,
          mega: rateLimiter.getRemainingMs('driver-mega') > 0
        }
      });
    };

    checkDisabled();
    const interval = setInterval(checkDisabled, 100);

    return () => clearInterval(interval);
  }, [rateLimiter]);

  // Handle download with rate limiting and delay
  const handleDownload = async (type, source) => {
    const key = `${type}-${source}`;
    
    const { allowed } = rateLimiter.canExecute(key);
    if (!allowed) {
      return;
    }

    setLoading(prev => ({
      ...prev,
      [type]: { ...prev[type], [source]: true }
    }));

    await new Promise(resolve => setTimeout(resolve, 500));

    rateLimiter.execute(key, () => {
      const url = downloadUrls[type][source];
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      if (source === 'vercel') {
        link.download = url.split('/').pop();
      }
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    setLoading(prev => ({
      ...prev,
      [type]: { ...prev[type], [source]: false }
    }));
  };
  // GSAP animations
  useGSAP(() => {
    // Animate section header
    gsap.fromTo('.download-header', 
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#download',
          start: 'top 80%'
        }
      }
    );

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

    // Float animation for icons
    gsap.to('.download-icon', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.4
    });

    // Pulse animation for download buttons
    gsap.to('.download-btn', {
      scale: 1.02,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5
    });
  });

  return (
    <section id="download" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        
        {/* SVG Blob Shapes */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">          
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
          </defs>
        </svg>
        
        {/* Floating ping elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-accent/20 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-success/30 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 download-header">
          <div className="inline-block mb-6">
            <div className="badge badge-success badge-lg gap-2 px-5 py-3">
              <i className="fas fa-check-circle text-white"></i>
              <span className="font-semibold text-white">Ready to Download</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
            Download Tara-vel
          </h2>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Experience the future of transportation in Cagayan Valley. 
            Download now and start your hassle-free travel journey today.
          </p>
        </div>

        {/* Download Grid */}
        <div className="download-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Android Commuters Download Card */}
          <div className="download-card card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-success/30">
            <div className="card-body p-8 text-center">
              <div className="w-20 h-20 border-2 border-success/30 rounded-2xl flex items-center justify-center mx-auto mb-6 download-icon group-hover:scale-110 transition-transform">
                <i className="fa-brands fa-android" style={{color: '#63E6BE', fontSize: '3rem'}}></i>
              </div>
              <h3 className="text-2xl font-bold text-base-content mb-4">Android - Commuters</h3>
              <p className="text-base-content/70 mb-6">
                Perfect for passengers, the application enables users to track vans and buses in real-time and utilize the ping feature to signal drivers for a pickup within the service area.
              </p>
              
              {/* Download Source Selector */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-base-content/70 mb-3 block">
                  Choose Download Source:
                </label>
                <div className="flex gap-2 w-full">
                  <button
                    className={`btn flex-1 ${commuterSource === 'vercel' ? 'btn-primary text-white' : 'btn-outline'}`}
                    onClick={() => setCommuterSource('vercel')}
                  >
                    <i className={`fas fa-cloud mr-2 ${commuterSource === 'vercel' ? 'text-white' : ''}`}></i>
                    CDN
                  </button>
                  <button
                    className={`btn flex-1 ${commuterSource === 'mega' ? 'bg-error/20 text-error border-error/40 hover:bg-error/30' : 'btn-outline'}`}
                    onClick={() => setCommuterSource('mega')}
                  >
                    <Image 
                      src="/assets/mega.png" 
                      alt="MEGA" 
                      width={20} 
                      height={20} 
                      className="mr-2"
                    />
                    MEGA
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleDownload('commuter', commuterSource)}
                  disabled={disabled.commuter[commuterSource] || loading.commuter[commuterSource]}
                  className="btn btn-lg w-full flex items-center justify-center border border-success text-success bg-transparent hover:bg-success hover:text-white transition-colors download-btn disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading.commuter[commuterSource] ? (
                    <>
                      <span className="loading loading-spinner loading-sm mr-2"></span>
                      <span>Preparing...</span>
                    </>
                  ) : (
                    <>
                      <span>Download APK</span>
                      <i className="fas fa-download ml-2"></i>
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <div className="badge badge-success badge-outline">
                    <i className="fas fa-check mr-1"></i>
                    Version 1.0
                  </div>
                  <div className="badge badge-ghost text-xs">
                    {commuterSource === 'vercel' ? (
                      <>
                        <i className="fas fa-bolt mr-1"></i>
                        Fast CDN
                      </>
                    ) : (
                      <>
                        <i className="fas fa-cloud-download-alt mr-1"></i>
                        Alternative
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Android Driver App Download Card */}
          <div className="download-card card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-primary/30">
            <div className="card-body p-8 text-center">
              <div className="w-20 h-20 border-2 border-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-6 download-icon group-hover:scale-110 transition-transform">
                <i className="fa-brands fa-android" style={{color: '#3B82F6', fontSize: '3rem'}}></i>
              </div>
              <h3 className="text-2xl font-bold text-base-content mb-4">Android - Driver</h3>
              <p className="text-base-content/70 mb-6">
                Built for drivers and operators, the system facilitates trip optimization by displaying current vehicle passenger counts and pinpointing the location of commuters actively waiting on the map.
              </p>
              
              {/* Download Source Selector */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-base-content/70 mb-3 block">
                  Choose Download Source:
                </label>
                <div className="flex gap-2 w-full">
                  <button
                    className={`btn flex-1 ${driverSource === 'vercel' ? 'btn-primary text-white' : 'btn-outline'}`}
                    onClick={() => setDriverSource('vercel')}
                  >
                    <i className={`fas fa-cloud mr-2 ${driverSource === 'vercel' ? 'text-white' : ''}`}></i>
                    CND
                  </button>
                  <button
                    className={`btn flex-1 ${driverSource === 'mega' ? 'bg-error/20 text-error border-error/40 hover:bg-error/30' : 'btn-outline'}`}
                    onClick={() => setDriverSource('mega')}
                  >
                    <Image 
                      src="/assets/mega.png" 
                      alt="MEGA" 
                      width={20} 
                      height={20} 
                      className="mr-2"
                    />
                    MEGA
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleDownload('driver', driverSource)}
                  disabled={disabled.driver[driverSource] || loading.driver[driverSource]}
                  className="btn btn-lg w-full flex items-center justify-center border border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-colors download-btn disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading.driver[driverSource] ? (
                    <>
                      <span className="loading loading-spinner loading-sm mr-2"></span>
                      <span>Preparing...</span>
                    </>
                  ) : (
                    <>
                      <span>Download APK</span>
                      <i className="fas fa-download ml-2"></i>
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <div className="badge badge-primary badge-outline">
                    <i className="fas fa-check mr-1"></i>
                    Version 1.0
                  </div>
                  <div className="badge badge-ghost text-xs">
                    {driverSource === 'vercel' ? (
                      <>
                        <i className="fas fa-bolt mr-1"></i>
                        Fast CDN
                      </>
                    ) : (
                      <>
                        <i className="fas fa-cloud-download-alt mr-1"></i>
                        Alternative
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


