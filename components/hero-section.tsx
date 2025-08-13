"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const slides = [
    {
      title:
        "We understand the core of your business and craft solutions that fit.",
      description:
        "Our approach begins with deep insight tailoring strategies that align with your unique goals.",
      image: "/images/hero/image.png",
    },
    {
      title: "A full spectrum of legal support, under one roof.",
      description:
        "From advisory to litigation, compliance to structuring, we deliver comprehensive legal services across industries.",
      image: "/images/hero/legal-office.jpg",
    },
    {
      title: "True collaboration drives better outcomes.",
      description:
        "We work alongside you, not just for you, partnering at every step to drive clarity, confidence, and results.",
      image: "/images/hero/collaboration.png",
    },
    {
      title: "We anticipate challenges before they emerge.",
      description:
        "By thinking forward, we help you stay prepared, adaptive, and ahead in a shifting landscape.",
      image: "/images/hero/monitoring-center.jpg",
    },
    {
      title: "Strategic and complete solutions from start to scale.",
      description:
        "Whether you are navigating complexity or pursuing growth, we offer seamless, end to end legal and business guidance.",
      image: "/images/hero/strategic-solutions.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-br from-[#1a365d] via-[#0C2340] to-[#2c5282] text-white overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-80" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/85 via-[#0C2340]/90 to-[#2c5282]/85"></div>
        </div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile/Tablet Layout (up to lg) */}
          <div className="lg:hidden">
            {/* Image Section - Top on mobile/tablet */}
            {/* Increased sm:pt-24 and md:pt-28 for more clearance */}
            <div className="flex justify-center mb-6 sm:mb-8 pt-20 sm:pt-24 md:pt-28">
              <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/gaggar-emblem-shield.png"
                    alt="Gaggar & Partners - Professional Legal Services"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                  />
                </div>
              </div>
            </div>

            {/* Content Section - Below image on mobile/tablet */}
            <div className="text-center">
              <div className="relative min-h-[160px] sm:min-h-[180px] md:min-h-[200px] flex items-center justify-center">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center transition-all duration-1000 ${
                      index === currentSlide
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-4 pointer-events-none"
                    }`}
                  >
                    <h1 className="text-lg sm:text-xl md:text-2xl   font-bold mb-3 sm:mb-4 text-white leading-tight drop-shadow-2xl px-2">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl mx-auto px-4 mb-4 sm:mb-6">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                <Button
                  asChild
                  className="w-full sm:w-auto sm:min-w-[140px] bg-white hover:bg-gray-100 text-[#0C2340] px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <Link href="/contact-us">Get In Touch</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto sm:min-w-[140px] border-2 border-white/50 text-white hover:bg-white/10 hover:text-white hover:border-white/70 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-full hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm transform hover:-translate-y-1"
                >
                  <Link href="/our-services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Layout (lg and up) */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12 items-center max-w-6xl mx-auto">
            {/* Content Side */}
            <div className="text-left">
              <div className="relative min-h-[280px] xl:min-h-[320px] flex items-center">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center transition-all duration-1000 ${
                      index === currentSlide
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-4 pointer-events-none"
                    }`}
                  >
                    <h1 className="text-3xl xl:text-4xl   font-bold mb-4 xl:mb-6 text-white leading-tight drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    <p className="text-lg xl:text-xl mb-6 xl:mb-8 text-white/90 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 items-center">
                <Button
                  asChild
                  className="bg-white hover:bg-gray-100 text-[#0C2340] px-6 py-3 text-base font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <Link href="/contact-us">Get In Touch</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white/50 text-white hover:bg-white/10 hover:text-white hover:border-white/70 px-6 py-3 text-base font-medium rounded-full hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm transform hover:-translate-y-1"
                >
                  <Link href="/our-services">Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Image Side */}
            <div className="flex justify-end mt-20">
              <div className="relative w-full max-w-md xl:max-w-lg">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/gaggar-emblem-shield.png"
                    alt="Gaggar & Partners - Professional Legal Services"
                    fill
                    className="object-contain drop-shadow-2xl hover:drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 400px, 500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
