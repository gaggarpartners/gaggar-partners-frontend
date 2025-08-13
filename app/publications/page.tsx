"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Publications() {
  const publications = [
    // {
    //   title:
    //     "Here's how delayed housing projects can now be completed by the builders",
    //   source: "Business Insider",
    //   date: "2023",
    //   category: "Real Estate",
    //   url: "https://www.businessinsider.in/Heres-how-delayed-housing-projects-can-now-be-completed-by-the-builders/articleshow/54265104.cms",
    // },
    // {
    //   title: "Compat quashes Rs1,773 crore CCI penalty on Coal India",
    //   source: "Live Mint",
    //   date: "2023",
    //   category: "Competition Law",
    //   url: "https://www.livemint.com/Politics/jaIPhAXXPmMXRPWzOuGpoL/Compat-quashes-Rs1773-crore-CCI-penalty-on-Coal-India.html",
    // },
    // {
    //   title: "Litigation to be now 'affordable' for homebuyers",
    //   source: "Hindustan Times",
    //   date: "2023",
    //   category: "Real Estate",
    //   url: "https://www.hindustantimes.com/real-estate/litigation-to-be-now-affordable-for-homebuyers/story-vbacric2HlWmSTY1tQy8hI.html",
    // },
    // {
    //   title: "Service charges: To pay or not to pay, that is the question",
    //   source: "Money Control",
    //   date: "2023",
    //   category: "Consumer Law",
    //   url: "http://www.moneycontrol.com/news/business/companies/service-charges-to-pay-or-not-to-pay-that-isquestion-942522.html",
    // },
    // {
    //   title: "Delhi HC asks CCI to reconsider probe against Google",
    //   source: "Live Mint",
    //   date: "2023",
    //   category: "Competition Law",
    //   url: "https://www.livemint.com/Companies/ni2hyknfSN23lHSyZqMAPO/Delhi-HC-asks-CCI-to-reconsider-probe-against-Google.html",
    // },
    // {
    //   title: "High Court, Consumer court cases galore against Unitech Ltd.",
    //   source: "Economic Times",
    //   date: "2023",
    //   category: "Real Estate",
    //   url: "https://economictimes.indiatimes.com/wealth/real-estate/high-court-consumer-court-cases-galore-against-unitech-ltd-/articleshow/54039765.cms",
    // },
    // {
    //   title:
    //     "Middle class home buyers can now move SC against builders at a low cost",
    //   source: "Economic Times",
    //   date: "2023",
    //   category: "Real Estate",
    //   url: "https://realty.economictimes.indiatimes.com/news/regulatory/middle-class-home-buyers-can-now-move-sc-against-builders-at-a-low-cost/57484415",
    // },
    // {
    //   title: "Compat finds Ford, Nissan, Toyota in violation of antitrust law",
    //   source: "Live Mint",
    //   date: "2023",
    //   category: "Competition Law",
    //   url: "https://www.livemint.com/Industry/eqxlftqlnSNQc5bu6xwBqN/Compat-finds-Ford-Nissan-Toyota-in-violation-of-antitrust.html",
    // },
    // {
    //   title: "WTO -ANTI DUMPING DEFENSES",
    //   source: "LinkedIn",
    //   date: "2023",
    //   category: "Trade Law",
    //   url: "https://www.linkedin.com/pulse/wto-anti-dumping-defenses-vaibhav-gaggar/",
    // },
    // {
    //   title:
    //     "ANTITRUST – COMPETITION – THE LENIENCY DILEMMA – TO FILE OR NOT TO FILE",
    //   source: "LinkedIn",
    //   date: "2023",
    //   category: "Competition Law",
    //   url: "https://www.linkedin.com/pulse/leniency-dilemma-file-vaibhav-gaggar/",
    // },
    // {
    //   title: "ANTI – TRUST / COMPETITION ISSUES IN TECH SPACE – PART II",
    //   source: "LinkedIn",
    //   date: "2023",
    //   category: "Technology Law",
    //   url: "https://www.linkedin.com/pulse/anti-trust-competition-issues-tech-space-part-ii-vaibhav-gaggar/",
    // },
    // {
    //   title: "E / MOBILE WALLETS AND COMPETITION LAW – A BIRDS EYE VIEW",
    //   source: "LinkedIn",
    //   date: "2023",
    //   category: "Technology Law",
    //   url: "https://www.linkedin.com/pulse/e-mobile-wallets-competition-law-birds-eye-view-vaibhav-gaggar/",
    // },
  ];

  const conferences = [
    {
      title: "Workshop on Competition Law and Policy in India",
      description:
        "Expert panel discussion on competition law frameworks and policy developments in India",
      date: "April 10, 2017",
      location: "Faculty of Law, University of Delhi",
      images: ["/images/conferences/image_720.png"],
    },
    {
      title: "International Conference on India Gaming Industry, New Delhi",
      description:
        "Comprehensive discussion on gaming industry regulations and future prospects in India",
      date: "February 2-5, 2017",
      location: "New Delhi",
      images: ["/images/conferences/download.jpeg"],
    },
  ];

  const mediaAppearances = [
    {
      title: "Mera Ghar Mera Haq",
      description: "Discussion on homebuyer rights and legal remedies",
      thumbnail: "/images/media/mera-ghar-mera-haq.png",
      url: "https://www.youtube.com/watch?v=lgcNE8P4EgI",
    },
    {
      title: "Car Consumers Know Your Rights",
      description: "Consumer protection in automotive sector",
      thumbnail: "/images/media/car-consumers-rights.png",
      url: "https://www.youtube.com/watch?v=aNv_5MqK4ZA",
    },
    {
      title: "Behaal Homebuyer",
      description: "Legal solutions for distressed homebuyers",
      thumbnail: "/images/media/behaal-homebuyer.png",
      url: "https://www.youtube.com/watch?v=DlsjltpDRBM",
    },
    {
      title: "Pehredaar- RERA Special",
      description: "RERA implementation and homebuyer protection",
      thumbnail: "/images/media/rera-special.png",
      url: "https://www.youtube.com/watch?v=qSR6N_z2W1E",
      featured: true,
    },
    {
      title: "Law Panel Suggests To Make Gambling Legal",
      description: "Legal framework for gambling regulation",
      thumbnail: "/images/media/gambling-legal.png",
      url: "https://www.youtube.com/watch?v=uMoNIBTzFog",
      featured: true,
    },
  ];

  const categories = [
    "All",
    "Corporate",
    "Litigation",
    "Others",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter publications based on selected category
  const filteredPublications =
    selectedCategory === "All"
      ? publications
      : publications.filter((pub) => pub.category === selectedCategory);

  // Separate featured and regular media appearances
  const featuredAppearances = mediaAppearances.filter((item) => item.featured);
  const regularAppearances = mediaAppearances.filter((item) => !item.featured);

  return (
    <div className="bg-legal-pattern min-h-screen rounded-3xl mx-4 my-8">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl   font-bold text-center mb-6 md:mb-8 text-[#0C2340]">
          Publications
        </h1>

        {/* Articles & Publications Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl   font-bold mb-6 md:mb-8 text-[#0C2340]">
            Articles & Publications
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 text-xs md:text-sm rounded-full border transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-[#CBA135] text-white border-[#CBA135]"
                    : "border-[#CBA135]/30 text-[#0C2340] hover:bg-[#CBA135] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Publications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPublications.map((publication, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 p-4 hover:shadow-md hover:border-[#CBA135]/30 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-[#CBA135]/10 text-[#CBA135] rounded-full">
                    {publication.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {publication.date}
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-medium mb-2 text-[#0C2340] line-clamp-2 group-hover:text-[#CBA135] transition-colors leading-tight">
                  {publication.title}
                </h3>
                {/* <p className="text-xs text-gray-600 mb-3">Source: {publication.source}</p> */}
                <Link
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs md:text-sm text-[#CBA135] hover:text-[#0C2340] transition-colors group"
                >
                  Read Article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 group-hover:translate-x-1 transition-transform md:w-3 md:h-3"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#0C2340] mb-2">
                Publications Coming Soon
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We are currently updating our publications in this category. Please check back soon or explore other categories.
              </p>
            </div>
          )}
        </div>

        {/* Conferences & Workshops Section */}
        {/* <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl   font-bold mb-6 md:mb-8 text-[#0C2340] text-center">
            Conferences & Workshops
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {conferences.map((conference, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-[#CBA135]/30 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="relative aspect-video bg-gray-100">
                  <Image
                    src={conference.images[0] || "/placeholder.svg"}
                    alt={conference.title}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[#0C2340]/10 text-[#0C2340] rounded-full">
                      Conference
                    </span>
                    <span className="text-xs text-gray-500">
                      {conference.date}
                    </span>
                  </div>

                  <h3 className="text-lg   font-semibold mb-3 text-[#0C2340] leading-tight">
                    {conference.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {conference.description}
                  </p>

                  <div className="flex items-center text-xs text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {conference.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Media Appearances Section */}
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-4 text-[#0C2340] text-center">
            Media Appearances
          </h2>

          <div className="text-center mb-8">
            <p className="text-sm md:text-base text-gray-600 font-medium italic">
              *Media appearance by Vaibhav Gaggar Ex managing partner, now
              senior advocate at high court
            </p>
          </div> */}

          {/* Regular Media Appearances */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {regularAppearances.map((appearance, index) => (
              <Link
                key={index}
                href={appearance.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-[#CBA135]/30 transition-all duration-200 hover:-translate-y-1 block"
              >
                <div className="relative aspect-video bg-gradient-to-br from-[#0C2340] to-[#0C2340]/80 overflow-hidden">
                  <Image
                    src={appearance.thumbnail || "/placeholder.svg"}
                    alt={appearance.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                        stroke="none"
                        className="md:w-6 md:h-6 ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    YouTube
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg font-medium mb-2 text-[#0C2340] group-hover:text-[#CBA135] transition-colors leading-tight">
                    {appearance.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-3 leading-relaxed">
                    {appearance.description}
                  </p>
                  <div className="inline-flex items-center text-xs md:text-sm text-[#CBA135] hover:text-[#0C2340] transition-colors">
                    Watch on YouTube
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 group-hover:translate-x-1 transition-transform md:w-3 md:h-3"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div> */}

          {/* Featured Media Appearances - Centered */}
          {/* <div className="flex justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {featuredAppearances.map((appearance, index) => (
              <Link
                key={index}
                href={appearance.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-[#CBA135]/30 transition-all duration-200 hover:-translate-y-1 block flex-1 max-w-sm"
              >
                <div className="relative aspect-video bg-gradient-to-br from-[#0C2340] to-[#0C2340]/80 overflow-hidden">
                  <Image
                    src={appearance.thumbnail || "/placeholder.svg"}
                    alt={appearance.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="white"
                        stroke="none"
                        className="md:w-6 md:h-6 ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                    YouTube
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-base md:text-lg font-medium mb-2 text-[#0C2340] group-hover:text-[#CBA135] transition-colors leading-tight">
                    {appearance.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-3 leading-relaxed">
                    {appearance.description}
                  </p>
                  <div className="inline-flex items-center text-xs md:text-sm text-[#CBA135] hover:text-[#0C2340] transition-colors">
                    Watch on YouTube
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 group-hover:translate-x-1 transition-transform md:w-3 md:h-3"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
