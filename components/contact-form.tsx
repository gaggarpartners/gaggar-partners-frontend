"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="bg-[#0C2340] text-[white] backdrop-blur-sm rounded-2xl shadow-md p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 md:mb-6 text-white">Send Us a Message</h3>

      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-4 md:mb-6 text-sm md:text-base">
          Thank you for your message! We will get back to you soon.
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm md:text-base">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="text-sm md:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm md:text-base">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="text-sm md:text-base"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm md:text-base">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="text-sm md:text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm md:text-base">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Legal Consultation"
              required
              className="text-sm md:text-base"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm md:text-base">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            rows={5}
            required
            className="text-sm md:text-base"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#CBA135] text-[#0C2340] hover:bg-[#CBA135]/90 font-medium text-sm md:text-base py-2 md:py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  )
}
