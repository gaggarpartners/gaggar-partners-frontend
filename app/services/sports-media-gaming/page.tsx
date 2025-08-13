import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy, Tv, Gamepad2, Users } from "lucide-react";

export default function SportsMediaGaming() {
  const keyServices = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Sponsorship Agreements & Broadcasting Rights",
      description: "Comprehensive negotiation, drafting, and finalization of sponsorship agreements and broadcasting rights deals, ensuring optimal commercial outcomes",
    },
    {
      icon: <Tv className="w-6 h-6" />,
      title: "Talent Contracts & IP Protection",
      description: "Meticulous talent contract negotiations and robust intellectual property protection strategies for athletes, entertainers, and content creators",
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Commercial Agreements & Regulatory Compliance",
      description: "Expert handling of commercial agreements alongside critical regulatory compliance, ensuring adherence to industry-specific regulations and best practices",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Corporate Transactions & Joint Ventures",
      description: "Seamless intersection with corporate services for transactions involving sports teams or media companies, and establishing joint ventures for content production or distribution",
    },
  ];

  const industrySpecialties = [
    "Professional Sports",
    "Sports Teams & Leagues",
    "Media Companies",
    "Broadcasting & Streaming",
    "Film & Television Production",
    "Music & Entertainment",
    "Video Gaming & E-sports",
    "Digital Content Creation",
    "Sports Marketing & Sponsorship",
    "Talent Representation",
    "Event Management",
    "Content Distribution",
    "Fantasy Sports Platforms",
    "Social Media Influencers",
    "Sports Technology",
    "Gaming Platforms & Publishers",
  ];

  return (
    <div className="bg-legal-pattern min-h-screen rounded-3xl mx-4 my-8">
      <div className="container mx-auto py-12 px-4 md:px-6">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            asChild
            variant="outline"
            className="border-[#0C2340] text-[#0C2340] hover:bg-[#0C2340] hover:text-white"
          >
            <Link href="/our-services" className="flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-full bg-[#0C2340] flex items-center justify-center mx-auto mb-6">
            <Trophy size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            Sports, Media & Gaming Law
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Specialized Expertise in Dynamic Sports, Media & Gaming Industries
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                We offer specialized expertise in Sports, Media & Gaming Law, adeptly addressing the unique legal challenges and opportunities within these dynamic and evolving industries. Our practice combines deep sector knowledge with comprehensive legal solutions.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We advise clients on a comprehensive range of issues, including sponsorship agreements, broadcasting rights, talent contracts, and robust intellectual property protection. Our approach ensures strategic alignment with commercial objectives while maintaining legal compliance.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our services encompass meticulous negotiation, drafting, and finalization of commercial agreements, alongside critical regulatory compliance. We provide expert guidance on industry-specific regulations and best practices, ensuring comprehensive legal coverage.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                This specialized practice seamlessly intersects with our corporate services for transactions involving sports teams or media companies, and establishing joint ventures for content production or distribution. We ensure adherence to industry-specific regulations while facilitating complex business arrangements.
              </p>

              <p className="text-lg leading-relaxed">
                Our comprehensive legal support enables clients to achieve their objectives across the full spectrum of sports, media, and gaming industries, from traditional entertainment formats to emerging digital platforms and innovative content delivery mechanisms.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Our Specialized Sports, Media & Gaming Legal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-[#0C2340]/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <div className="text-[#CBA135]">{service.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#0C2340]">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Specialties */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Sports, Media & Gaming Industry Specialties
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {industrySpecialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Legal Expertise Areas */}
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-6 text-[#0C2340] text-center">
                Comprehensive Legal Expertise Areas
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Commercial Agreements</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Sponsorship agreement negotiation and drafting</li>
                    <li>• Broadcasting rights and media licensing</li>
                    <li>• Talent contracts and representation agreements</li>
                    <li>• Content production and distribution deals</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Corporate Transactions</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Sports team acquisitions and investments</li>
                    <li>• Media company mergers and joint ventures</li>
                    <li>• Gaming company transactions</li>
                    <li>• Content production partnerships</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Regulatory & IP Protection</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Industry-specific regulatory compliance</li>
                    <li>• Intellectual property protection strategies</li>
                    <li>• Gaming regulations and licensing</li>
                    <li>• Broadcasting and media regulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-4 text-[#0C2340]">
                Ready to Navigate Dynamic Industry Challenges?
              </h3>
              <p className="text-gray-700 mb-6">
                Experience specialized legal expertise that addresses unique challenges and opportunities in sports, media, and gaming industries.
              </p>
              <Button asChild className="bg-[#0C2340] hover:bg-[#0C2340]/90">
                <Link href="/contact-us">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
