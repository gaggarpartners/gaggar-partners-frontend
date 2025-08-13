import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, Briefcase, Globe, Shield } from "lucide-react";

export default function BusinessCorporateLaws() {
  const keyServices = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Investment & Funding Transactions",
      description:
        "Structuring, negotiating, and documenting equity and debt investments, including seed, venture, and growth-stage funding, convertible instruments, and promoter funding structures",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Multi-Jurisdictional Corporate Transactions",
      description:
        "Legal advice and coordination on cross-border transactions involving intricate structuring, compliance with international and Indian regulatory frameworks, and seamless execution",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Corporate Governance & Advisory",
      description:
        "Ongoing advisory on corporate structuring, governance best practices, shareholder matters, board advisory, policy drafting, and compliance under the Companies Act 2013",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Private Equity & Venture Capital",
      description:
        "End-to-end counsel to funds and portfolio companies on PE/VC transactions, term sheet negotiations, investment documentation, structuring, and exit mechanisms",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Mergers & Acquisitions",
      description:
        "Comprehensive legal support on share and asset acquisitions, business transfers, mergers, and strategic buyouts, including due diligence, documentation, and closing assistance",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Joint Ventures & Strategic Alliances",
      description:
        "Advisory and documentation for structuring joint ventures, collaborations, and entry strategies for foreign entities, including incorporation and operational compliance",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Regulatory Compliance & Due Diligence",
      description:
        "Statutory and regulatory compliance, risk identification through legal audits, and due diligence for M&A, investment, and restructuring transactions",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Commercial Contract Advisory",
      description:
        "Full-spectrum support on commercial agreements including supply, distribution, franchise, licensing, service, consultancy, manufacturing, and technology contracts",
    },
  ];

  const industries = [
    "Telecom",
    "E-commerce",
    "Technology",
    "IT Services",
    "Power",
    "Healthcare",
    "Real Estate",
    "Defense",
    "Retail",
    "Pharmaceuticals",
    "Education",
    "Infrastructure",
    "Media",
    "Automobile",
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
            <Building size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-6 text-[#0C2340]">
            Business & Corporate Laws
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            End-to-End Corporate Legal Solutions for Strategic Growth
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
                for pivotal corporate transactions, from strategic structuring
                aligned with commercial and regulatory imperatives to adeptly
                leading negotiations and meticulously drafting crucial
                transactional instruments.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                From high-value investments and acquisitions to day-to-day
                corporate matters, we offer tailored, proactive legal support
                that mitigates risk, unlocks opportunities, and drives business
                growth. Whether it is the boardroom or the courtroom, we bring
                the same level of clarity, insight, and confidence to the table.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our team provides focused counsel on general corporate
                compliance, helping both domestic and international clients
                navigate investment regulations, sectoral limits, and complex
                regulatory frameworks with ease. We understand the unique
                challenges and opportunities across diverse sectors, delivering
                tailored strategies to help businesses thrive in evolving
                regulatory environments.
              </p>

              <p className="text-lg leading-relaxed">
                Our comprehensive approach encompasses everything from FDI and
                FEMA compliances for foreign entities entering the Indian market
                to sophisticated exit mechanisms for private equity
                transactions, ensuring seamless execution at every stage of your
                business journey.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl  font-bold mb-8 text-[#0C2340] text-center">
              Our Comprehensive Legal Services
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
            <h2 className="text-2xl md:text-3xl  font-bold mb-8 text-[#0C2340] text-center">
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
              <h3 className="text-xl md:text-2xl  font-bold mb-4 text-[#0C2340]">
                Ready to Grow Your Business?
              </h3>
              <p className="text-gray-700 mb-6">
                Let our experienced corporate law team guide your business
                through complex legal challenges.
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
