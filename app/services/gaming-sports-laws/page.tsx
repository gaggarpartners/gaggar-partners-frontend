import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy, Users, FileText, Globe } from "lucide-react";

export default function GamingSportsLaws() {
  const keyServices = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Games of Skill Regulation",
      description:
        "Establishing regulated and licensed environments for skill-based gaming",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Sports Law Advisory",
      description:
        "Comprehensive legal support for sports professionals and organizations",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Compliance & Licensing",
      description:
        "Ensuring compliance with applicable gaming and sports regulations",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Industry Expertise",
      description:
        "Deep understanding of commercial dynamics in gaming and sports",
    },
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
            Gaming & Sports Laws
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive Legal Solutions for Gaming and Sports Industry
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                We offer a comprehensive range of services tailored for the
                gaming and sports industry. Our team works closely with
                corporations, sports professionals, clubs, and organizations to
                ensure compliance with applicable laws while helping them
                navigate legal risks effectively.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                With a forward looking mindset, we have developed a structured
                approach aimed at establishing a regulated and licensed
                environment for companies operating in the space of games of
                skill in India. This framework reflects our commitment to
                legitimacy and sustainable growth within the industry.
              </p>

              <p className="text-lg leading-relaxed">
                Our partners are frequently invited to speak at domestic and
                international conferences on topics such as esports, gaming,
                sports betting, casinos, and lotteries. Recognized as one of the
                few firms that truly understand the commercial dynamics of
                gaming and sports law, we have played a key role in shaping
                several pioneering ventures across this sector.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#0C2340] text-center">
              Our Specialized Services
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
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl     font-bold mb-4 text-[#0C2340]">
                Need Gaming or Sports Law Expertise?
              </h3>
              <p className="text-gray-700 mb-6">
                Connect with our specialized team for comprehensive legal
                solutions in gaming and sports.
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
