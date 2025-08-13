import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function KeyMembersPreview() {
  const members = [
    {
      name: "Monika Lakhanpal",
      position: "Managing Partner",
      image: "/images/team/monika-lakhanpal.png",
      shortBio:
        "Deep understanding of business needs with rich experience in complex cases and transactions across verticals.",
    },
    {
      name: "Gaurav Gaggar",
      position: "Senior Director",
      image: "/images/team/gaurav-gaggar.png",
      shortBio:
        "Seasoned Chartered Accountant and Investment Banker with expertise in transaction advisory and valuations.",
    },
    {
      name: "Mithun Rebello",
      position: "Partner",
      image: "/images/team/mithun-rebello.jpeg",
      shortBio:
        "Over two decades of experience specializing in Gaming, Technology, Corporate Structuring, and Regulatory Compliances.",
    },
    {
      name: "Aradhana Syal",
      position: "Partner",
      image: "/images/team/aradhana-syal.png",
      shortBio:
        "Master's in business law with expertise in M&As, joint ventures, private equity, and corporate advisory.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 rounded-3xl mx-4 my-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl   font-bold mb-6 text-[#0C2340]">OUR KEY MEMBERS</h2>
          <p className="text-lg text-gray-700">
            The firm has a cutting edge team of professional experts to deliver high quality, in-time, professional and
            business prudent advice keeping client's interest ahead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative h-48">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg   font-semibold mb-1 text-[#0C2340] group-hover:text-[#CBA135] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#CBA135] text-sm font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{member.shortBio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center -mt-2">
          <Button
            asChild
            variant="outline"
            className="border-[#0C2340] text-[#0C2340] hover:bg-[#0C2340] hover:text-white hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <Link href="/about-us#key-members" className="flex items-center">
              Know More
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
