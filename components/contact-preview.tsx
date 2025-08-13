import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"

export default function ContactPreview() {
  return (
    <section className="py-16 bg-legal-pattern-subtle rounded-3xl mx-4 my-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl   font-bold mb-6 text-[#0C2340]">GET IN TOUCH</h2>
          <p className="text-lg text-gray-700">
            Interested in working with us? Let us know a bit about yourself and your project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="group bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-[#CBA135]/30 hover:-translate-y-2 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 rounded-lg bg-[#0C2340]/5 flex items-center justify-center mb-4 group-hover:bg-[#CBA135]/10 group-hover:scale-110 transition-all duration-300">
              <MapPin size={20} className="text-[#CBA135] group-hover:animate-pulse" strokeWidth="1.5" />
            </div>
            <h3 className="text-lg   font-medium mb-2 text-[#0C2340] group-hover:text-[#CBA135] transition-colors">
              Our Office
            </h3>
            <p className="text-gray-600 text-sm text-center">E-14/13, First Floor, Vasant Vihar, New Delhi – 110057</p>
          </div>

          <div className="group bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-[#CBA135]/30 hover:-translate-y-2 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 rounded-lg bg-[#0C2340]/5 flex items-center justify-center mb-4 group-hover:bg-[#CBA135]/10 group-hover:scale-110 transition-all duration-300">
              <Phone size={20} className="text-[#CBA135] group-hover:animate-pulse" strokeWidth="1.5" />
            </div>
            <h3 className="text-lg   font-medium mb-2 text-[#0C2340] group-hover:text-[#CBA135] transition-colors">
              Phone
            </h3>
            <p className="text-gray-600 text-sm text-center">+91-11-49093382, 011-49404826</p>
          </div>

          <div className="group bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-[#CBA135]/30 hover:-translate-y-2 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 rounded-lg bg-[#0C2340]/5 flex items-center justify-center mb-4 group-hover:bg-[#CBA135]/10 group-hover:scale-110 transition-all duration-300">
              <Mail size={20} className="text-[#CBA135] group-hover:animate-pulse" strokeWidth="1.5" />
            </div>
            <h3 className="text-lg   font-medium mb-2 text-[#0C2340] group-hover:text-[#CBA135] transition-colors">
              Email
            </h3>
            <p className="text-gray-600 text-sm text-center">connect@gaggarpartners.com</p>
          </div>
        </div>

        <div className="text-center mt-8 -mb-2">
          <Button
            asChild
            className="bg-[#0C2340] hover:bg-[#0C2340]/90 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <Link href="/contact-us" className="flex items-center">
              Contact Us
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
