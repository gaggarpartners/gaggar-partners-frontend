"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceCategories = {
    corporate: {
      name: "Corporate",
      services: [
        {
          name: "Business & Commercial Laws",
          href: "/services/business-corporate-laws",
        },
        {
          name: "International Trade & Transaction Advisory",
          href: "/services/international-trade-advisory",
        },
        {
          name: "Projects & Infrastructure",
          href: "/services/projects-infrastructure",
        },
        {
          name: "Start-Up Legal Advisory",
          href: "/services/startup-legal-advisory",
        },
        {
          name: "Private Client Practice Advisory",
          href: "/services/private-client-advisory",
        },
        {
          name: "Artificial Intelligence & Machine Learning",
          href: "/services/ai-machine-learning",
        },
        {
          name: "Banking & Finance",
          href: "/services/banking-finance",
        },
        {
          name: "Sports, Media & Gaming Law",
          href: "/services/sports-media-gaming",
        },
        {
          name: "Regulatory & Compliance",
          href: "/services/regulatory-compliance",
        },
        {
          name: "Intellectual Property Advisory",
          href: "/services/intellectual-property-advisory",
        },
        {
          name: "Real Estate & Property Law",
          href: "/services/real-estate-property",
        },
        {
          name: "E-Commerce & Retail",
          href: "/services/ecommerce-retail",
        },
      ],
    },
    litigation: {
      name: "Litigation",
      services: [
        {
          name: "Anti-Trust / Competition",
          href: "/services/anti-trust-competition",
        },
        { name: "Family Law Matters", href: "/services/family-law-matters" },
        {
          name: "Property Disputes / Builder Buyer Dispute",
          href: "/services/property-disputes-builder-buyer",
        },
        { name: "Claims & Disputes", href: "/services/claims-disputes" },
        {
          name: "White Collar Crime / Money Laundering",
          href: "/services/white-collar-crime-money-laundering",
        },
      ],
    },
    others: {
      name: "Others",
      services: [
        {
          name: "Regulatory & Compliance",
          href: "/services/regulatory-compliance",
        },
        {
          name: "Private Client Practice Advisory",
          href: "/services/private-client-advisory",
        },
        {
          name: "Intellectual Property Advisory",
          href: "/services/intellectual-property-advisory",
        },
        {
          name: "Real Estate & Property Law Advisory",
          href: "/services/real-estate-property",
        },
        {
          name: "Financial And Advisory Arm (FAAA)",
          href: "/services/financial-advisory-arm",
        },
        {
          name: "Sports, Media & Gaming Law",
          href: "/services/sports-media-gaming",
        },
      ],
    },
  };

  const resources = [
    { name: "Legal Insights & Updates", href: "/blogs" },
    { name: "Publications", href: "/publications" },
  ];

  const isHomePage = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? scrolled
            ? "bg-[#0C2340]/90 backdrop-blur-md shadow-lg"
            : "backdrop-blur-sm"
          : "bg-[#0C2340]/90 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="container mx-auto px-2 md:px-0">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gaggar-logo-ZAOCCUajc99OXwXovUcDUAXQuDs5gm.png"
              alt="Gaggar & Partners Logo"
              width={120}
              height={120}
              className="h-12 w-auto md:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-6">
            <Link
              href="/"
              className="text-white hover:text-[#CBA135] transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-white hover:text-[#CBA135] transition-colors duration-200 font-medium"
            >
              Who We Are
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => {
                setIsServicesOpen(true);
                setActiveCategory(null);
              }}
              onMouseLeave={() => {
                setIsServicesOpen(false);
                setActiveCategory(null);
              }}
            >
              <button className="flex items-center text-white hover:text-[#CBA135] transition-colors duration-200 font-medium">
                What We Do
                <ChevronDown size={16} className="ml-1" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {Object.entries(serviceCategories).map(
                      ([key, category]) => (
                        <div
                          key={key}
                          className="relative"
                          onMouseEnter={() => setActiveCategory(key)}
                        >
                          <div className="flex items-center justify-between px-4 py-2 text-sm text-[#0C2340] hover:text-[#CBA135] hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                            {category.name}
                            <ChevronDown
                              size={14}
                              className="rotate-[-90deg]"
                            />
                          </div>

                          {activeCategory === key && (
                            <div className="absolute left-full top-0 -ml-2 w-72 z-60 pl-2">
                              <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                                {category.services.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    className="block px-4 py-2 text-sm text-[#0C2340] hover:text-[#CBA135] hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/key-members"
              className="text-white hover:text-[#CBA135] transition-colors duration-200 font-medium"
            >
              Our Key People
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button className="flex items-center text-white hover:text-[#CBA135] transition-colors duration-200 font-medium">
                Resources
                <ChevronDown size={16} className="ml-1" />
              </button>

              {isResourcesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {resources.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="block px-4 py-2 text-sm text-[#0C2340] hover:text-[#CBA135] hover:bg-gray-50 transition-colors duration-200"
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/career"
              className="text-white hover:text-[#CBA135] transition-colors duration-200 font-medium"
            >
              Career
            </Link>
          </div>

          {/* Contact Us Button */}
          <Button
            asChild
            className="hidden rounded-[100px] lg:flex items-center justify-center bg-[#CBA135] text-[#0C2340] hover:bg-[#CBA135]/90 hover:scale-105 transition-all duration-300 font-medium"
          >
            <Link href="/contact-us">Contact Us</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-[#CBA135] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link
                href="/"
                className="block px-3 py-2 text-[#0C2340] hover:text-[#CBA135] hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="block px-3 py-2 text-[#0C2340] hover:text-[#CBA135] hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Who We Are
              </Link>
              {/* Mobile Services */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-[#0C2340] font-medium">
                  What We Do
                </div>
                {Object.entries(serviceCategories).map(([key, category]) => (
                  <div key={key} className="ml-4 space-y-1">
                    <div className="px-3 py-1 text-sm font-medium text-[#CBA135]">
                      {category.name}
                    </div>
                    {category.services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-6 py-1 text-sm text-[#0C2340] hover:text-[#CBA135] hover:bg-gray-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <Link
                href="/key-members"
                className="block px-3 py-2 text-[#0C2340] hover:text-[#CBA135] hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Our Key People
              </Link>
              <Link
                href="/blogs"
                className="block px-3 py-2 text-[#0C2340] hover:text-[#CBA135] hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/publications"
                className="block px-3 py-2 text-[#0C2340] hover:text-[#CBA135] hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Publications
              </Link>
              <Link
                href="/career"
                className="block px-3 py-2 text-[#0C2340] hover:text-[#CBA135] hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Career
              </Link>

              {/* Mobile Contact Us Button */}
              <div className="pt-4 pb-2">
                <Button
                  asChild
                  className="w-full bg-[#CBA135] rounded-[100px] text-[#0C2340] hover:bg-[#CBA135]/90 font-medium"
                >
                  <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
