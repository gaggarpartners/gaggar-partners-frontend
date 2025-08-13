"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const handleServiceNavigation = (href: string) => {
    window.location.href = href;
  };

  return (
    <footer className="bg-[#0C2340] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center flex-col">
              <div className="flex items-center mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gaggar-logo-ZAOCCUajc99OXwXovUcDUAXQuDs5gm.png"
                  alt="Gaggar & Partners Logo"
                  width={160}
                  height={160}
                  className="mr-2"
                />
              </div>
              <p className="text-sm text-center text-gray-300 mb-6">
                Our expertise lies in strategy and innovation. We understand
                your universe and the way the new age economy is unravelling.
              </p>
            </div>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-[#CBA135] hover:scale-110 transition-all duration-200"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#CBA135] hover:scale-110 transition-all duration-200"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#CBA135] hover:scale-110 transition-all duration-200"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-[#CBA135] hover:scale-110 transition-all duration-200"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg   font-bold mb-6 text-[#CBA135]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services"
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/our-awards"
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Our Awards
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg   font-bold mb-6 text-[#CBA135]">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() =>
                    handleServiceNavigation("/services/anti-trust-competition")
                  }
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left"
                >
                  Anti-Trust / Competition
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleServiceNavigation("/services/business-corporate-laws")
                  }
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left"
                >
                  Business & Corporate Laws
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleServiceNavigation("/services/claims-disputes")
                  }
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left"
                >
                  Claims & Disputes
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleServiceNavigation("/services/gaming-sports-laws")
                  }
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left"
                >
                  Gaming & Sports Laws
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleServiceNavigation("/services/real-estate")
                  }
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left"
                >
                  Real Estate
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleServiceNavigation("/services/environment-laws")
                  }
                  className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left"
                >
                  Environment Laws
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg   font-bold mb-6 text-[#CBA135]">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CBA135"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-sm text-gray-300">
                  E-14/13, First Floor, Vasant Vihar, New Delhi – 110057
                </span>
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CBA135"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm text-gray-300">
                  +91-11-49093382, 011-49404826
                </span>
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CBA135"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 flex-shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm text-gray-300">
                  connect@gaggarpartners.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Gaggar & Partners. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
