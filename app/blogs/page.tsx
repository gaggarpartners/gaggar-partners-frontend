"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight, Mail } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Gaming Laws in India: A Comprehensive Guide",
    excerpt:
      "Explore the evolving landscape of gaming regulations in India, including recent amendments and their impact on the gaming industry.",
    author: "Vaibhav Gaggar",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Gaming Law",
    image: "/images/hero/business-solutions.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Corporate Restructuring: Legal Framework and Best Practices",
    excerpt:
      "A detailed analysis of corporate restructuring processes, legal requirements, and strategic considerations for businesses.",
    author: "Mithun Rebello",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Corporate Law",
    image: "/images/hero/legal-office.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "RERA Compliance: What Homebuyers Need to Know",
    excerpt:
      "Essential information about RERA regulations, homebuyer rights, and how to navigate property disputes effectively.",
    author: "Mithun Rebello",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Real Estate",
    image: "/images/hero/collaboration.png",
    featured: false,
  },
  {
    id: 4,
    title: "Intellectual Property Protection in the Digital Age",
    excerpt:
      "Strategies for protecting intellectual property rights in an increasingly digital world, including trademark and copyright considerations.",
    author: "Monika Lakhanpal",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "IP Law",
    image: "/images/hero/monitoring-center.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Arbitration vs Litigation: Choosing the Right Path",
    excerpt: "Compare arbitration and litigation processes to help you make informed decisions for dispute resolution.",
    author: "Aradhana Syal",
    date: "2023-12-20",
    readTime: "7 min read",
    category: "Dispute Resolution",
    image: "/images/hero/strategic-solutions.png",
    featured: false,
  },
  {
    id: 6,
    title: "Environmental Compliance for Modern Businesses",
    excerpt:
      "Navigate environmental regulations and compliance requirements to ensure sustainable business operations.",
    author: "Aradhana Syal",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Environmental Law",
    image: "/images/legal-scales-banner.png",
    featured: false,
  },
]

const categories = [
  "All",
  "Gaming Law",
  "Corporate Law",
  "Real Estate",
  "IP Law",
  "Dispute Resolution",
  "Environmental Law",
]

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [email, setEmail] = useState("")

  // Filter posts based on selected category
  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  // Separate featured and regular posts
  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
    alert("Thank you for subscribing to our newsletter!")
  }

  return (
    <div className="bg-legal-pattern min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2340]/90 to-[#0C2340]/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl   font-bold text-white mb-6">
            Legal Insights & Updates
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our latest articles on legal developments, industry insights, and expert analysis.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-[#CBA135] text-white shadow-lg"
                    : "bg-white text-[#0C2340] border border-[#CBA135]/30 hover:bg-[#CBA135] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl   font-bold text-[#0C2340] mb-8 text-center">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#CBA135] text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <span className="inline-block px-2 py-1 bg-[#0C2340]/10 text-[#0C2340] text-xs font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl   font-bold text-[#0C2340] mb-3 group-hover:text-[#CBA135] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>
                    <Link
                      href={`/blogs/${post.id}`}
                      className="inline-flex items-center text-[#CBA135] hover:text-[#0C2340] font-medium transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl   font-bold text-[#0C2340] mb-8 text-center">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <span className="inline-block px-2 py-1 bg-[#CBA135]/10 text-[#CBA135] text-xs font-medium rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-lg   font-bold text-[#0C2340] mb-2 group-hover:text-[#CBA135] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                    <Link
                      href={`/blogs/${post.id}`}
                      className="text-[#CBA135] hover:text-[#0C2340] text-sm font-medium transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#0C2340]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl   font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest legal insights and updates delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#CBA135]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#CBA135] text-white rounded-lg hover:bg-[#CBA135]/90 transition-colors font-medium flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
