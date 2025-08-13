"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      quote:
        "Gaggar & Partners provided exceptional legal counsel for our business. Their expertise in corporate law helped us navigate complex regulatory challenges with confidence.",
      author: "Rajiv Mehta",
      position: "CEO, Tech Innovations Ltd.",
    },
    {
      quote:
        "The team at Gaggar & Partners demonstrated remarkable knowledge and professionalism in handling our competition law case. Their strategic approach was instrumental in achieving a favorable outcome.",
      author: "Priya Sharma",
      position: "Legal Director, Global Enterprises",
    },
    {
      quote:
        "Working with Gaggar & Partners has been a game-changer for our company. Their comprehensive understanding of the legal landscape and proactive approach sets them apart from other firms.",
      author: "Vikram Singh",
      position: "Managing Director, Horizon Group",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50 rounded-3xl mx-4 my-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#0C2340]">
            WHAT PEOPLE SAY
          </h2>
          <p className="text-lg">
            Here are several testimonials from clients who were thoughtful
            enough to share with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className=" rounded-lg shadow-sm border border-gray-100 p-8 text-center bg-[#0C2340]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#CBA135"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mx-auto mb-6 opacity-60"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                    <p className="text-lg mb-6 text-white italic leading-relaxed text-center">
                      {testimonial.quote}
                    </p>
                    <div className="text-center">
                      <p className="font-semibold text-gray-200">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#0C2340] hover:bg-gray-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[#0C2340] hover:bg-gray-50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex ? "bg-[#CBA135]" : "bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
