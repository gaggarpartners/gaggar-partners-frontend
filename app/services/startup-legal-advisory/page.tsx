import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket, FileText, Users, TrendingUp } from "lucide-react";

export default function StartupLegalAdvisory() {
  const keyServices = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Entity Formation & Business Model Structuring",
      description:
        "Incisive business model structuring and precise documentation for entity formation, ensuring startups are built upon a formidable legal foundation from inception",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Regulatory Compliance & Licensing",
      description:
        "Advisory on licenses and approvals required with rigorous compliance to evolving regulatory and legal frameworks, mitigating inherent risks proactively",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Funding Pathways & Venture Capital",
      description:
        "Advising on optimal funding pathways, adeptly negotiating seed and venture capital financing agreements with strategic alignment to commercial imperatives",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Equity Arrangements & Exit Strategy",
      description:
        "Crafting tailored ownership and equity arrangements, from incorporation to successful exit, ensuring comprehensive end-to-end legal support throughout evolution",
    },
  ];

  const startupJourney = [
    "Idea Conceptualization",
    "Entity Formation",
    "MVP Development",
    "Regulatory Compliance",
    "Seed Funding",
    "Venture Capital Series A/B/C",
    "Market Expansion",
    "Strategic Partnerships",
    "Growth Capital",
    "Pre-IPO Preparation",
    "Successful Exit Strategy",
    "International Expansion",
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
            <Rocket size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            Start-Up Legal Advisory
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            End-to-End Legal Excellence from Incorporation to Successful Exit
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Corporate and Commercial practice is a cornerstone of Gaggar &
                Partners, reflecting our profound expertise in delivering
                incisive legal solutions across myriad industries and client
                profiles. We orchestrate comprehensive, end-to-end legal support
                for pivotal corporate transactions.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Gaggar & Partners provides comprehensive, end-to-end legal
                support meticulously tailored for startups and their founders,
                guiding them expertly through every critical stage of their
                evolution from incorporation to successful exit. Our services
                are strategically designed as a singular, cost-effective
                solution, underpinned by deep experience and specialized
                subject-matter expertise.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We ensure emerging businesses are unequivocally built upon a
                formidable legal foundation. We proactively assist with incisive
                business model structuring, precise documentation for entity
                formation, advisory on licenses and approvals required, and
                rigorous compliance with evolving regulatory and legal
                frameworks, aiming to mitigate inherent risks while empowering
                clients to achieve their ambitious business and growth
                objectives.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our practice extends to pivotal areas including advising on
                optimal funding pathways, adeptly negotiating seed and venture
                capital financing agreements, and crafting tailored ownership
                and equity arrangements, from strategic structuring aligned with
                commercial and regulatory imperatives to adeptly leading
                negotiations and meticulously drafting crucial transactional
                instruments.
              </p>

              <p className="text-lg leading-relaxed">
                From high-value investments and acquisitions to day-to-day
                corporate matters, we offer tailored, proactive legal support
                that mitigates risk, unlocks opportunities, and drives business
                growth throughout the entire startup journey from inception to
                successful exit.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl     font-bold mb-8 text-[#0C2340] text-center">
              Our Comprehensive Startup Legal Expertise
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

          {/* Startup Journey */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl     font-bold mb-8 text-[#0C2340] text-center">
              Complete Startup Journey Support
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {startupJourney.map((stage, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm font-medium"
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Specialized Services */}
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl     font-bold mb-6 text-[#0C2340] text-center">
                Specialized Startup Legal Services
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">
                    Incorporation to Exit
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Entity formation and structuring</li>
                    <li>• Founder agreements and equity allocation</li>
                    <li>• Employee stock option plans (ESOPs)</li>
                    <li>• Exit strategy planning and execution</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">
                    Funding & Investment
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Seed funding and angel investment</li>
                    <li>• Venture capital negotiations</li>
                    <li>• Term sheet drafting and review</li>
                    <li>• Due diligence and compliance</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">
                    Regulatory & Growth
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Regulatory compliance and licensing</li>
                    <li>• Intellectual property protection</li>
                    <li>• Commercial contracts and partnerships</li>
                    <li>• International expansion support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl     font-bold mb-4 text-[#0C2340]">
                Ready to Build Your Startup on a Formidable Legal Foundation?
              </h3>
              <p className="text-gray-700 mb-6">
                Experience comprehensive, cost-effective legal support designed
                specifically for startups, from incorporation to successful
                exit.
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
