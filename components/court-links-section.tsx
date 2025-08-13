"use client";

import Link from "next/link";
import Image from "next/image";

export default function CourtLinksSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/supreme-court-building.jpg"
          alt="Supreme Court Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl   font-bold mb-4 !text-white">
            Daily Legal Updates
          </h2>
          {/* <h3 className="text-2xl md:text-3xl lg:text-4xl   font-bold !text-white">
            and Judgments
          </h3> */}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          <Link
            href="https://main.sci.gov.in/dailyorder"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-[#CBA135] hover:bg-[#CBA135]/90 !text-white hover:!text-[#0C2340] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto text-center"
          >
            <span className="relative z-10 !text-white hover:!text-[#0C2340]">
              SUPREME COURT
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>

          <Link
            href="https://delhihighcourt.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-[#CBA135] hover:bg-[#CBA135]/90 !text-white hover:!text-[#0C2340] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto text-center"
          >
            <span className="relative z-10 !text-white hover:!text-[#0C2340]">
              HIGH COURT
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
        </div>
      </div>
    </section>
  );
}
