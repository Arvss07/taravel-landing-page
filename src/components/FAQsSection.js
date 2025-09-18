"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FAQsSection() {
  const [openId, setOpenId] = useState(null);
  // GSAP animations
  useGSAP(() => {
    // Animate FAQ items
    gsap.fromTo(
      ".faq-item",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faqs-container",
          start: "top 80%",
        },
      }
    );

    // Animate section header
    gsap.fromTo(
      ".faq-header",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-header",
          start: "top 85%",
        },
      }
    );

    // Animate floating blobs
    gsap.to(".floating-blob", {
      y: -20,
      x: 10,
      rotation: 5,
      duration: 8,
      ease: "sine.inOut",
      stagger: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  const faqs = [
    {
      id: 1,
      question: "What is Tara-Vel and how does it work?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
      id: 2,
      question: "Is Tara-Vel completely free to use?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
      id: 3,
      question: "How accurate is the real-time GPS tracking?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
      id: 4,
      question:
        "Can I store my Student ID, PWD ID, or Senior ID for discounts?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
      id: 5,
      question: "What types of vehicles are tracked on Tara-Vel?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
      id: 6,
      question: "How can I contact the Tara-Vel team for support?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
  ];

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        {/* Floating SVG Blobs */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
        >
          {/* FAQ theme blobs */}
          <path
            d="M200 100C200 50 250 0 300 0C350 0 400 50 400 100C400 150 350 200 300 200C250 200 200 150 200 100Z"
            fill="url(#faqGradient1)"
            className="floating-blob opacity-20"
          />

          <path
            d="M800 150C800 100 850 50 900 50C950 50 1000 100 1000 150C1000 200 950 250 900 250C850 250 800 200 800 150Z"
            fill="url(#faqGradient2)"
            className="floating-blob opacity-25"
          />

          <path
            d="M100 400C100 350 150 300 200 300C250 300 300 350 300 400C300 450 250 500 200 500C150 500 100 450 100 400Z"
            fill="url(#faqGradient3)"
            className="floating-blob opacity-15"
          />

          <path
            d="M900 500C900 450 950 400 1000 400C1050 400 1100 450 1100 500C1100 550 1050 600 1000 600C950 600 900 550 900 500Z"
            fill="url(#faqGradient4)"
            className="floating-blob opacity-30"
          />

          {/* Gradients */}
          <defs>
            <linearGradient
              id="faqGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="faqGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#BE185D" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="faqGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="faqGradient4"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="faq-header text-center mb-16">
          <h2 className="text-clamp-4xl font-bold mb-6 text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-clamp-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed">
            Got questions about Tara-Vel? Find answers to the most common
            questions from our community of Cagayan Valley commuters.
          </p>
        </div>

        {/* FAQs Container */}
        <div className="faqs-container max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="faq-item">
                  <div
                    className={`collapse collapse-arrow bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20 hover:border-primary/40 p-4 ${
                      isOpen ? "collapse-open" : ""
                    }`}
                    tabIndex={0}
                    role="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpenId(isOpen ? null : faq.id);
                      }
                    }}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setOpenId(null);
                      }
                    }}
                  >
                    <div className="collapse-title text-clamp-lg font-bold text-base-content grid grid-cols-[1fr_auto] items-center gap-3">
                      <div className="flex items-center gap-3 ml-4">
                        <span>{faq.question}</span>
                      </div>
                      <div className="w-6"></div>
                    </div>
                    <div className="collapse-content">
                      <div className="pt-4 flex items-start gap-3">
                        <p className="text-clamp-sm text-base-content/80 leading-relaxed flex-1">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
