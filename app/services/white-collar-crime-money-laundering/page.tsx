import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Search, FileText, Scale } from "lucide-react";

export default function WhiteCollarCrimeMoneyLaundering() {
  const keyServices = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "White Collar Crime Defense",
      description:
        "Expert defense against financial crimes and corporate misconduct charges",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Money Laundering Cases",
      description:
        "Specialized representation in anti-money laundering investigations and prosecutions",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Regulatory Compliance",
      description:
        "Compliance guidance for financial institutions and businesses",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Corporate Investigations",
      description: "Internal investigations and corporate compliance matters",
    },
  ];

  const crimeTypes = [
    "Financial Fraud",
    "Money Laundering",
    "Embezzlement",
    "Securities Fraud",
    "Tax Evasion",
    "Bribery & Corruption",
    "Cyber Crimes",
    "Corporate Fraud",
    "Banking Violations",
    "Regulatory Offenses",
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
            <Shield size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            White Collar Crime / Money Laundering
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Specialized Defense for Financial and Corporate Crime Matters
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                We are one of the few firms having a dedicated team looking into
                White Collar cases spanning across Banking Frauds, CBI
                Investigations, SFIO & Police Investigations, Cyber-Crimes,
                Corporate & Governmental Scams, Money Laundering, etc.
              </p>

              <p className="text-lg leading-relaxed">
                We regularly advise our clients, including multinational
                companies, private equity investors and their Indian portfolio
                companies on matters pertaining to Anti-corruption and Ethical
                practices.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Our White Collar Crime Services
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

          {/* Crime Types */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Areas of Expertise
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {crimeTypes.map((type, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-4 text-[#0C2340]">
                Need Defense for White Collar Charges?
              </h3>
              <p className="text-gray-700 mb-6">
                Get experienced legal representation for financial crime and
                money laundering matters.
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
