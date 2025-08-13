"use client";

import Image from "next/image";
import { MemberCard } from "@/components/member-card";
import { useState, useEffect } from "react";

export default function AboutUs() {
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const members = [
    {
      name: "Monika Lakhanpal",
      position: "Managing Partner",
      bio: "With over 23 years of experience, Monika Lakhanpal is renowned for her strategic and business-aligned approach, having built a formidable reputation in private client practice, real estate and infrastructure, IPR, and competition law, alongside significant experience in policy and regulatory domains, and is a certified POSH trainer and advisor. As a pioneer in India's private client practice, she offers bespoke legal advice to HNWIs, ultra-HNWIs, and industrialist families on sensitive and high-stake matters, including family settlements, real estate and property disputes, estate and succession planning, and matrimonial disputes, combining legal insight with discretion and strategic counsel. Her formidable reputation in the law diaspora extends to advising on complex transactions, joint ventures, mergers, land acquisitions, regulatory compliance, and commercial contract structuring, with her work defined by a keen commercial understanding and commitment to delivering legally sound yet practical solutions.",
      image: "/images/team/monika-lakhanpal.jpeg",
    },
    {
      name: "Gaurav Gaggar",
      position: "Senior Director",
      bio: 'A distinguished Chartered Accountant and Investment Banker, Gaurav super heads the Financial and Advisory Arm (FAAA) at Gaggar & Partners. He specializes in transaction advisory, valuations, fund syndication, and complex financial structuring/restructuring, with prior roles at Deloitte Touche Tohmatsu and the Citi Group. A key aspect of Gaurav\'s professional approach is his ability to develop innovative, "out-of-the-box" solutions to address intricate challenges and drive client success. His strategic mindset is evident in his successful track record of incubating businesses across diverse sectors, including Gaming, Healthcare, and Intelligence & Research. This experience demonstrates his capacity to identify and capitalize on emerging market opportunities. Mr. Gaggar has founded a venture studio to incubate startups and is a qualified Independent Director serving on the boards of multiple companies.',
      image: "/images/team/gaurav-gaggar.png",
    },
    {
      name: "Mithun Rebbello",
      position: "Partner",
      bio: "An experienced and seasoned legal professional with over two decades of experience, Mithun specializes in Gaming, Technology, Corporate Structuring, Regulatory Compliance, and Foreign Investment laws. Mithun has extensive experience advising corporates across a broad spectrum of domestic and cross-border commercial transactions. His expertise includes drafting and negotiating complex documentation such as Share Purchase Agreements (SPAs), Escrow Agreements (including structuring and execution), Joint Venture Agreements, Commission and Fee Protection Agreements, Mandate Agreements, NCNDAs, and Joint Cooperation Agreements. He is well-versed in logistics and trade-related documentation across various modes of transport, including FOB, CIF, DDP, and DAP terms. In the context of international trade, he is proficient in the legal structuring and review of banking instruments. His commercial acumen and detailed understanding of transactional documentation make him a trusted advisor for corporates navigating complex business arrangements. Mithun's extensive experience includes strategic and legal leadership roles in technology and gaming companies, where he has provided pragmatic and high-quality legal assistance. His in-depth sectoral knowledge and understanding of legal procedures enable him to deliver prompt and effective solutions to clients. He is a 2003 graduate of ILS Law College, Pune, and his expertise aligns with a commitment to our clients in providing innovative and holistic legal services across various sectors.",
      image: "/images/team/mithun-rebello.jpeg",
    },
    {
      name: "Aradhana Syal",
      position: "Partner",
      bio: 'A highly regarded corporate and transactional lawyer with almost two decades of experience. Aradhana specializes in mergers and acquisitions, private equity and venture capital transactions, joint ventures, and strategic corporate advisory. She has successfully led numerous high-value, cross-border transactions across a broad range of industries. Aradhana has been recognized as one of India\'s "Super 50 Lawyers" by Asian Legal Business (2021) and was named at the 6th Annual Legal Era as one of the winners of "40 Under 40 Rising Star Awards" in 2021. She has been further awarded as an "Exceptional Women of Excellence" by the Women Economic Forum, December 2022. A graduate of Symbiosis Law School and a postgraduate in Business Law from the National Law School of India University (NLSIU), Bangalore, Aradhana blends academic distinction with business acumen. Renowned for her end-to-end deal execution capabilities, Aradhana manages every stage of a transaction—from structuring and negotiating term sheets to drafting definitive documentation, overseeing regulatory approvals, and ensuring post-closing compliance. She plays a key role in advising international businesses on India\'s entry strategies, foreign direct investment, FEMA compliance, and corporate governance, while helping Indian enterprises scale through capital raising, partnerships, and strategic expansions.',
      image: "/images/team/aradhana-syal.jpeg",
    },
  ];

  return (
    <div className="bg-legal-pattern min-h-screen rounded-3xl mx-4 my-8">
      <div className="container mx-auto py-8 sm:py-12 px-4 md:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl    font-bold text-center mb-6 sm:mb-8 text-[#0C2340]">
          About Us
        </h1>

        {/* Welcome Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl mb-12 sm:mb-16 p-4 sm:p-6 md:p-8 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl    font-bold mb-3 sm:mb-4 text-[#0C2340]">
                WELCOME TO GAGGAR & PARTNERS
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                Our expertise lies in strategy and innovation. We understand
                your universe and the way the new age economy is unravelling. We
                are ideally poised to partner with our clients foraying in the
                future and are committed to building a long lasting relationship
                founded on the bedrock of trust.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="group flex flex-col items-center p-3 sm:p-4 border border-[#CBA135]/30 rounded-lg hover:border-[#CBA135] hover:-translate-y-1 transition-all duration-300 transform hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#0C2340] flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#CBA135"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:animate-pulse"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-lg    font-semibold text-[#0C2340] group-hover:text-[#CBA135] transition-colors text-center">
                    Understanding the Client
                  </h3>
                </div>
                <div className="group flex flex-col items-center p-3 sm:p-4 border border-[#CBA135]/30 rounded-lg hover:border-[#CBA135] hover:-translate-y-1 transition-all duration-300 transform hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#0C2340] flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#CBA135"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:animate-pulse"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <path d="M9 18h6" />
                      <path d="M10 22h4" />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-lg    font-semibold text-[#0C2340] group-hover:text-[#CBA135] transition-colors text-center">
                    Innovative Solution
                  </h3>
                </div>
                <div className="group flex flex-col items-center p-3 sm:p-4 border border-[#CBA135]/30 rounded-lg hover:border-[#CBA135] hover:-translate-y-1 transition-all duration-300 transform hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#0C2340] flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#CBA135"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:animate-pulse"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-lg    font-semibold text-[#0C2340] group-hover:text-[#CBA135] transition-colors text-center">
                    Holistic Perspective
                  </h3>
                </div>
                <div className="group flex flex-col items-center p-3 sm:p-4 border border-[#CBA135]/30 rounded-lg hover:border-[#CBA135] hover:-translate-y-1 transition-all duration-300 transform hover:scale-105">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#0C2340] flex items-center justify-center mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#CBA135"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:animate-pulse"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-lg    font-semibold text-[#0C2340] group-hover:text-[#CBA135] transition-colors text-center">
                    Trusted Advisor
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white">
              <div
                className={`relative transition-all duration-500 cursor-pointer ${
                  logoHovered ? "scale-105" : "scale-100"
                }`}
                onMouseEnter={() => setLogoHovered(true)}
                onMouseLeave={() => setLogoHovered(false)}
                onClick={() => window.open("/", "_self")}
              >
                <Image
                  src="/images/gaggar-emblem-shield.png"
                  alt="Gaggar & Partners Eagle Emblem"
                  width={450}
                  height={450}
                  className={`drop-shadow-xl transition-all duration-500 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] ${
                    logoHovered ? "filter-none" : "filter drop-shadow-2xl"
                  }`}
                />

                {/* Professional glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    logoHovered
                      ? "shadow-[0_0_40px_15px_rgba(203,161,53,0.3)]"
                      : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl    font-bold mb-6 sm:mb-8 text-[#0C2340] text-center">
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="group bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg hover:bg-white hover:-translate-y-2 transition-all duration-300 shadow-sm transform hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0C2340]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CBA135"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-6 sm:h-6 group-hover:animate-pulse"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl    font-semibold mb-2 sm:mb-3 text-[#0C2340] group-hover:text-[#CBA135] transition-colors">
                Excellence
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We strive for excellence in every aspect of our practice,
                delivering high-quality legal services that exceed client
                expectations.
              </p>
            </div>
            <div className="group bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg hover:bg-white hover:-translate-y-2 transition-all duration-300 shadow-sm transform hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0C2340]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CBA135"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-6 sm:h-6 group-hover:animate-pulse"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl    font-semibold mb-2 sm:mb-3 text-[#0C2340] group-hover:text-[#CBA135] transition-colors">
                Integrity
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We maintain the highest standards of professional integrity and
                ethical conduct in all our dealings.
              </p>
            </div>
            <div className="group bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg hover:bg-white hover:-translate-y-2 transition-all duration-300 shadow-sm sm:col-span-2 lg:col-span-1 sm:mx-auto lg:mx-0 max-w-sm sm:max-w-none transform hover:scale-105">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#0C2340]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CBA135"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-6 sm:h-6 group-hover:animate-pulse"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl    font-semibold mb-2 sm:mb-3 text-[#0C2340] group-hover:text-[#CBA135] transition-colors">
                Innovation
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We embrace innovative approaches and cutting-edge solutions to
                address complex legal challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Key Members Section */}
        {/* <div id="key-members" className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl    font-bold mb-6 sm:mb-8 text-[#0C2340] text-center">
            Our Key Members
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            The firm has a cutting edge team of professional experts to deliver
            high quality, in-time, professional and business prudent advice
            keeping client's interest ahead.
          </p>
          <div className="space-y-6 sm:space-y-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <MemberCard
                  name={member.name}
                  position={member.position}
                  bio={member.bio}
                  image={member.image}
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Our Commitment */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl md:text-3xl    font-bold mb-4 sm:mb-6 text-[#0C2340] text-center">
            Our Commitment
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
                At Gaggar & Partners, we are committed to providing exceptional
                legal services that drive results for our clients. Our team
                combines deep legal expertise with practical business acumen to
                deliver solutions that are both legally sound and commercially
                viable.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#CBA135] flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10 sm:w-20 sm:h-20 lg:w-5 lg:h-5"
                    >
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700">
                    Client-focused approach with personalized attention
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#CBA135] flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10 sm:w-20 sm:h-20 lg:w-5 lg:h-5"
                    >
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700">
                    Comprehensive legal solutions across multiple practice areas
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#CBA135] flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10 sm:w-20 sm:h-20 lg:w-5 lg:h-5"
                    >
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700">
                    Proven track record of successful outcomes
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/comittment.jpeg"
                alt="Awards and Recognition Display"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
