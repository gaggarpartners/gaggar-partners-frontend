import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Home, Users, Shield } from "lucide-react";

export default function FamilyLawMatters() {
  const keyServices = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Matrimonial Disputes",
      description: "Sensitive handling of divorce, separation, and matrimonial property matters",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Child Custody & Support",
      description: "Protecting children's interests in custody, visitation, and support arrangements",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family Mediation",
      description: "Alternative dispute resolution for family conflicts and relationship issues",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Domestic Violence",
      description: "Legal protection and representation in domestic violence cases",
    },
  ];

  const familyMatters = [
    "Divorce & Separation",
    "Child Custody",
    "Maintenance & Alimony",
    "Property Division",
    "Adoption Procedures",
    "Domestic Violence",
    "Family Mediation",
    "Guardianship",
    "Inheritance Disputes",
    "Marriage Registration",
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
            <Heart size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            Family Law Matters
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Compassionate Legal Support for Family Issues
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Our firm specializes in family law litigation, offering dedicated and assertive representation for clients facing complex domestic disputes. We understand the sensitive nature of family matters and are committed to navigating court proceedings with strategic advocacy, comprehensive legal knowledge in areas like divorce, child custody, and domestic violence, and a client-centered approach that prioritizes clear communication and ethical practice.
              </p>

              <p className="text-lg leading-relaxed">
                While we explore amicable resolutions, our seasoned litigators are always prepared to vigorously protect your interests in court, ensuring you receive both robust legal excellence and empathetic support during challenging times.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Our Family Law Services
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

          {/* Family Matters */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Areas of Practice
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {familyMatters.map((matter, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm font-medium"
                  >
                    {matter}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-4 text-[#0C2340]">
                Need Family Law Assistance?
              </h3>
              <p className="text-gray-700 mb-6">
                Get compassionate and professional legal support for your family matters.
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
