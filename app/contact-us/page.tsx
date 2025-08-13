import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="bg-legal-pattern min-h-screen rounded-3xl mx-4 my-8">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-6 md:mb-8 text-[#0C2340]">
          Contact Us
        </h1>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold mb-4 md:mb-6 text-[#0C2340]">
                Get In Touch
              </h2>
              <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Interested in working with us? Let us know a bit about yourself
                and your project. Our team will get back to you as soon as
                possible.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="mr-3 md:mr-4 text-[#CBA135] flex-shrink-0">
                    <MapPin size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg mb-1">
                      Our Office
                    </h3>
                    <p className="text-sm md:text-base">
                      E-14/13, First Floor, Vasant Vihar, New Delhi – 110057
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 md:mr-4 text-[#CBA135] flex-shrink-0">
                    <Phone size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg mb-1">
                      Phone
                    </h3>
                    <p className="text-sm md:text-base">
                      +91-11-49093382, 011-49404826
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 md:mr-4 text-[#CBA135] flex-shrink-0">
                    <Mail size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg mb-1">
                      Email
                    </h3>
                    <p className="text-sm md:text-base">
                      connect@gaggarpartners.com
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <div className="mr-3 md:mr-4 text-[#CBA135] flex-shrink-0">
                    <Clock size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base md:text-lg mb-1">Working Hours</h3>
                    <p className="text-sm md:text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm md:text-base">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div> */}
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
