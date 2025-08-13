import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, Shield, FileText, Users } from "lucide-react";

export default function AntiTrustCompetition() {
  const keyServices = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Competition Law Advisory",
      description:
        "Strategic guidance on competition regulations and anti-monopoly compliance",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Merger Control",
      description:
        "Comprehensive support for merger notifications and clearance procedures",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Anti-Trust Litigation",
      description:
        "Expert representation in competition disputes and regulatory proceedings",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Market Abuse Defense",
      description:
        "Defense against allegations of anti-competitive practices and market manipulation",
    },
  ];

  const industries = [
    "Technology",
    "Telecommunications",
    "Healthcare",
    "Financial Services",
    "Energy",
    "Retail",
    "Manufacturing",
    "Media",
    "Automotive",
    "Pharmaceuticals",
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
            <Scale size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            Anti-Trust / Competition
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Protecting Fair Competition and Market Integrity
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Gaggar & Partners possesses in-depth expertise in Indian
                Competition Law, handling the country's most complex anti-trust
                matters. We're recognized for shaping jurisprudence in cases
                involving cartels, IP interplay, and regulatory overlaps,
                including FRAND/SEP issues.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Having advised the Competition Commission of India, we represent
                global and domestic corporations in high-stakes prosecution and
                defense. Our team provides strategic advisory and structuring
                for complex deals.
              </p>

              <p className="text-lg leading-relaxed">
                We pride ourselves on leading the evolution of competition law
                in India, combining deep regulatory knowledge with practical
                business understanding to deliver strategic counsel that
                supports your commercial objectives.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl     font-bold mb-8 text-[#0C2340] text-center">
              Our Competition Law Services
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

          {/* Industries */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl     font-bold mb-8 text-[#0C2340] text-center">
              Industries We Serve
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm font-medium"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl     font-bold mb-4 text-[#0C2340]">
                Need Competition Law Guidance?
              </h3>
              <p className="text-gray-700 mb-6">
                Ensure your business practices comply with competition
                regulations while maintaining your competitive edge.
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
