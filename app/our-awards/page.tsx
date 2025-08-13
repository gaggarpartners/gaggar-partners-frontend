import Image from "next/image"

export default function OurAwards() {
  const awards = [
    {
      title: "Winner of Sports & Gaming 2025 category by the Indian Business Law Journal",
      image: "/images/awards/iblj-2025-sports-gaming.png",
      year: "2025",
      category: "Sports & Gaming",
    },
    {
      title:
        "Highly recommended by Benchmark Litigation for expertise in Competition/Antitrust, Constructions, and Commercial matters",
      image: "/images/awards/benchmark-litigation-2022.png",
      year: "2022",
      category: "Competition Law",
    },
    {
      title: "Winner of Sports & Gaming 2022 category by the Indian Business Law Journal",
      image: "/images/awards/iblj-2022-sports-gaming.png",
      year: "2022",
      category: "Sports & Gaming",
    },
    {
      title:
        "Most Innovative Anti-Trust and Competition Law Firm 2018 – India at the Global Excellence Awards by Acquisition International",
      image: "/images/awards/acquisition-international-2018.png",
      year: "2018",
      category: "Competition Law",
    },
    {
      title: "Competition Law Firm of the Year – India 2018 by Lawyers World Global",
      image: "/images/awards/lawyers-global-2018.png",
      year: "2018",
      category: "Competition Law",
    },
    {
      title: "India's Competition Law Firm of the Year 2018 by Dealmakers-Monthly",
      image: "/images/awards/dealmaker-2018.png",
      year: "2018",
      category: "Competition Law",
    },
    {
      title: "Competition Law Firm of the Year 2018 India by Inter Continental Finance and Law Magazine",
      image: "/images/awards/intercontinental-2018.png",
      year: "2018",
      category: "Competition Law",
    },
    {
      title: "Competition Law Firm of the Year in India - 2018 by Global Law Experts",
      image: "/images/awards/global-law-experts.png",
      year: "2018",
      category: "Competition Law",
    },
    {
      title: "Anti-Money Laundering Law Firm of the Year 2018 by Finance Monthly",
      image: "/images/awards/finance-monthly-2018.png",
      year: "2018",
      category: "Financial Law",
    },
    {
      title: "Innovative Lawyers 2018 Award by Lawyers Worldwide Award Magazine",
      image: "/images/awards/lawyers-worldwide-2018.png",
      year: "2018",
      category: "Innovation",
    },
    {
      title: "Corporate INTL Global Awards 2017 – Best Competition Law Firm of the Year in India",
      image: "/images/awards/corporate-intl-2017.png",
      year: "2017",
      category: "Competition Law",
    },
    {
      title: "Leadership Excellence Awards 2017 – Tomorrow's Leader's Award",
      image: "/images/awards/leadership-excellence-2017.png",
      year: "2017",
      category: "Leadership",
    },
    {
      title: "LawyerIssue Awards 2017 – Vaibhav Gaggar won the Lawyer of the Year – Commercial Award",
      image: "/images/awards/lawyer-issue-2017.png",
      year: "2017",
      category: "Commercial Law",
    },
    {
      title: "Innovative Law Firm of the 2016 – ACQ5 Global Awards",
      image: "/images/awards/acq5-innovative-2016.jpeg",
      year: "2016",
      category: "Innovation",
    },
    {
      title: "Innovative Law Firm of the Year 2016 – Worldwide Financial Advisor Awards Magazine",
      image: "/images/awards/financial-advisor-2016.jpeg",
      year: "2016",
      category: "Innovation",
    },
    {
      title: "The International Advisory Experts Awards 2016 – IAE Commercial Law Award",
      image: "/images/awards/iae-commercial-2016.jpeg",
      year: "2016",
      category: "Commercial Law",
    },
    {
      title: "Gamechanger of the Year 2016 – ACQ5 Global Awards",
      image: "/images/awards/acq5-gamechanger-2016.jpeg",
      year: "2016",
      category: "Innovation",
    },
  ]

  // Group awards by year for better organization
  const awardsByYear = awards.reduce(
    (acc, award) => {
      if (!acc[award.year]) {
        acc[award.year] = []
      }
      acc[award.year].push(award)
      return acc
    },
    {} as Record<string, typeof awards>,
  )

  const years = Object.keys(awardsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  return (
    <div className="bg-legal-pattern min-h-screen rounded-3xl mx-4 my-8">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-6 md:mb-8 text-[#0C2340]">
          Our Awards
        </h1>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These awards reflect our commitment to excellence and innovation in the legal field. We are honored to be
              recognized for our dedication to providing exceptional legal services to our clients.
            </p>
          </div>

          {/* Awards by Year */}
          {years.map((year) => (
            <div key={year} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-[#0C2340] text-center">
                {year} Awards
              </h2>
              <div className="grid gap-4 md:gap-6">
                {awardsByYear[year].map((award, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-start md:items-center p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                  >
                    <div className="w-full md:w-48 h-32 md:h-24 flex-shrink-0 mb-4 md:mb-0 md:mr-6 relative bg-white rounded-lg border border-gray-100">
                      <Image
                        src={award.image || "/placeholder.svg"}
                        alt={award.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start">
                        <div className="mr-3 md:mr-4 text-[#CBA135] flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 md:w-8 md:h-8"
                          >
                            <circle cx="12" cy="8" r="6" />
                            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="inline-block px-3 py-1 text-xs font-medium bg-[#CBA135]/10 text-[#CBA135] rounded-full">
                              {award.category}
                            </span>
                            <span className="inline-block px-3 py-1 text-xs font-medium bg-[#0C2340]/10 text-[#0C2340] rounded-full">
                              {award.year}
                            </span>
                          </div>
                          <p className="text-sm md:text-lg font-medium leading-relaxed">{award.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold mb-6 text-[#0C2340] text-center">
            Recognition of Excellence
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="flex flex-col items-center p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="text-[#CBA135] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-12 md:h-12"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-serif font-semibold mb-2 text-[#0C2340]">Excellence</h3>
              <p className="text-center text-sm md:text-base leading-relaxed">
                Recognized for our commitment to excellence in legal services
              </p>
            </div>
            <div className="flex flex-col items-center p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
              <div className="text-[#CBA135] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-12 md:h-12"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-serif font-semibold mb-2 text-[#0C2340]">Innovation</h3>
              <p className="text-center text-sm md:text-base leading-relaxed">
                Awarded for our innovative approaches to legal challenges
              </p>
            </div>
            <div className="flex flex-col items-center p-4 md:p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <div className="text-[#CBA135] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-12 md:h-12"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-serif font-semibold mb-2 text-[#0C2340]">Leadership</h3>
              <p className="text-center text-sm md:text-base leading-relaxed">
                Recognized for our leadership in the legal industry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
