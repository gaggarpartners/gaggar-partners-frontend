import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const keyMembers = [
  {
    id: 1,
    name: "Monika Lakhanpal",
    position: "Managing Partner",
    experience: "10+ Years",
    image: "/images/team/monika-lakhanpal.jpeg",
    education: "LLB, Punjab University | Certificate in Cyber Law",
    specializations: ["Cyber Law", "Intellectual Property", "Technology Law"],
    bio: "With over 23 years of experience, Monika Lakhanpal is renowned for her strategic and business-aligned approach, having built a formidable reputation in private client practice, real estate and infrastructure, IPR, and competition law, alongside significant experience in policy and regulatory domains, and is a certified POSH trainer and advisor. As a pioneer in India's private client practice, she offers bespoke legal advice to HNWIs, ultra-HNWIs, and industrialist families on sensitive and high-stake matters, including family settlements, real estate and property disputes, estate and succession planning, and matrimonial disputes, combining legal insight with discretion and strategic counsel. Her formidable reputation in the law diaspora extends to advising on complex transactions, joint ventures, mergers, land acquisitions, regulatory compliance, and commercial contract structuring, with her work defined by a keen commercial understanding and commitment to delivering legally sound yet practical solutions.",

    email: "monika@gaggarpartners.com",
    phone: "+91 98765 43212",
  },
  {
    id: 2,
    name: "Gaurav Gaggar",
    position: "Senior Director",
    experience: "15+ Years",
    image: "/images/team/gaurav-gaggar.png",
    education: "LLB, Delhi University | LLM, Harvard Law School",
    specializations: [
      "Competition Law",
      "Corporate Law",
      "Mergers & Acquisitions",
    ],
    bio: 'A distinguished Chartered Accountant and Investment Banker, Gaurav super heads the Financial and Advisory Arm (FAAA) at Gaggar & Partners. He specializes in transaction advisory, valuations, fund syndication, and complex financial structuring/restructuring, with prior roles at Deloitte Touche Tohmatsu and the Citi Group. A key aspect of Gaurav\'s professional approach is his ability to develop innovative, "out-of-the-box" solutions to address intricate challenges and drive client success. His strategic mindset is evident in his successful track record of incubating businesses across diverse sectors, including Gaming, Healthcare, and Intelligence & Research. This experience demonstrates his capacity to identify and capitalize on emerging market opportunities. Mr. Gaggar has founded a venture studio to incubate startups and is a qualified Independent Director serving on the boards of multiple companies.',
    email: "vaibhav@gaggarpartners.com",
    phone: "+91 98765 43210",
  },
  {
    id: 3,
    name: "Mithun Rebello",
    position: " Partner",
    experience: "12+ Years",
    image: "/images/team/mithun-rebello.jpeg",
    education: "LLB, Mumbai University | Diploma in International Law",
    specializations: [
      "Real Estate Law",
      "Property Disputes",
      "RERA Compliance",
    ],
    bio: "An experienced and seasoned legal professional with over two decades of experience, Mithun specializes in Gaming, Technology, Corporate Structuring, Regulatory Compliance, and Foreign Investment laws. Mithun has extensive experience advising corporates across a broad spectrum of domestic and cross-border commercial transactions. His expertise includes drafting and negotiating complex documentation such as Share Purchase Agreements (SPAs), Escrow Agreements (including structuring and execution), Joint Venture Agreements, Commission and Fee Protection Agreements, Mandate Agreements, NCNDAs, and Joint Cooperation Agreements. He is well-versed in logistics and trade-related documentation across various modes of transport, including FOB, CIF, DDP, and DAP terms. In the context of international trade, he is proficient in the legal structuring and review of banking instruments. His commercial acumen and detailed understanding of transactional documentation make him a trusted advisor for corporates navigating complex business arrangements. Mithun's extensive experience includes strategic and legal leadership roles in technology and gaming companies, where he has provided pragmatic and high-quality legal assistance. His in-depth sectoral knowledge and understanding of legal procedures enable him to deliver prompt and effective solutions to clients. He is a 2003 graduate of ILS Law College, Pune, and his expertise aligns with a commitment to our clients in providing innovative and holistic legal services across various sectors.",
    email: "mithun@gaggarpartners.com",
    phone: "+91 98765 43211",
  },
  {
    id: 4,
    name: "Aradhana Syal",
    position: "Partner",
    experience: "8+ Years",
    image: "/images/team/aradhana-syal.jpeg",
    education: "LLB, Delhi University | Certificate in Environmental Law",
    specializations: [
      "Environmental Law",
      "Regulatory Compliance",
      "Corporate Advisory",
    ],
    bio: 'A highly regarded corporate and transactional lawyer with almost two decades of experience. Aradhana specializes in mergers and acquisitions, private equity and venture capital transactions, joint ventures, and strategic corporate advisory. She has successfully led numerous high-value, cross-border transactions across a broad range of industries. Aradhana has been recognized as one of India\'s "Super 50 Lawyers" by Asian Legal Business (2021) and was named at the 6th Annual Legal Era as one of the winners of "40 Under 40 Rising Star Awards" in 2021. She has been further awarded as an "Exceptional Women of Excellence" by the Women Economic Forum, December 2022. A graduate of Symbiosis Law School and a postgraduate in Business Law from the National Law School of India University (NLSIU), Bangalore, Aradhana blends academic distinction with business acumen. Renowned for her end-to-end deal execution capabilities, Aradhana manages every stage of a transaction—from structuring and negotiating term sheets to drafting definitive documentation, overseeing regulatory approvals, and ensuring post-closing compliance. She plays a key role in advising international businesses on India\'s entry strategies, foreign direct investment, FEMA compliance, and corporate governance, while helping Indian enterprises scale through capital raising, partnerships, and strategic expansions.',

    email: "aradhana@gaggarpartners.com",
    phone: "+91 98765 43213",
  },
];

export default function KeyMembers() {
  return (
    <div className="bg-legal-pattern min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2340]/90 to-[#0C2340]/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl   font-bold text-white mb-6">
            Our Key People
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Meet the experienced legal professionals who drive our success and
            deliver exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* Key Members Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {keyMembers.map((member, index) => (
              <div
                key={member.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-16 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#CBA135]/20 to-[#0C2340]/20">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Floating Contact Card */}
                    {/* <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex flex-col space-y-2">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center text-sm text-[#0C2340] hover:text-[#CBA135] transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </a>
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center text-sm text-[#0C2340] hover:text-[#CBA135] transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl   font-bold text-[#0C2340] mb-2">
                      {member.name}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-xl text-[#CBA135] font-semibold">
                        {member.position}
                      </span>
                      {/* <span className="px-3 py-1 bg-[#CBA135]/10 text-[#CBA135] rounded-full text-sm font-medium">
                        {member.experience}
                      </span> */}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* <div>
                      <h3 className="text-lg font-semibold text-[#0C2340] mb-2">
                        Education
                      </h3>
                      <p className="text-gray-700">{member.education}</p>
                    </div> */}

                    <div>
                      <h3 className="text-lg font-semibold text-[#0C2340] mb-2">
                        About
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  {/* <div>
                    <h3 className="text-lg font-semibold text-[#0C2340] mb-2">
                      Specializations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#0C2340] text-[#0C2340] rounded-lg hover:bg-[#0C2340] hover:text-white transition-colors font-medium"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-[#0C2340] text-[#0C2340] rounded-lg hover:bg-[#0C2340] hover:text-white transition-colors font-medium"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#0C2340]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl   font-bold text-white mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our experienced legal professionals are here to provide you with
            expert guidance and representation.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center px-8 py-4 bg-[#CBA135] text-white rounded-lg hover:bg-[#CBA135]/90 transition-colors font-semibold text-lg"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
