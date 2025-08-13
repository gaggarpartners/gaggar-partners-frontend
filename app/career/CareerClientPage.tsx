"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Heart,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
  Upload,
  CheckCircle,
  AlertCircle,
  Cloud,
} from "lucide-react";
import { GoogleIcon } from "@/components/icons/google-icon";

const benefits = [
  {
    icon: Users,
    title: "Collaborative Environment",
    description:
      "Work alongside experienced legal professionals in a supportive team environment.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Clear advancement paths and opportunities for professional development.",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description:
      "Performance-based recognition and competitive compensation packages.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Access to training programs, workshops, and legal education opportunities.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "Flexible working arrangements and emphasis on employee well-being.",
  },
  {
    icon: Globe,
    title: "Diverse Practice Areas",
    description: "Exposure to various legal domains and high-profile cases.",
  },
];

export default function CareerClientPage() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });
  const [isGoogleAuthed, setIsGoogleAuthed] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [cvFile, setCvFile] = useState<{
    id: string;
    name: string;
    webViewLink: string;
  } | null>(null);
  const [isUploadingCV, setIsUploadingCV] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Check for OAuth callback
  useEffect(() => {
    const accessToken = searchParams.get("access_token");
    const refreshToken = searchParams.get("refresh_token");
    const error = searchParams.get("error");

    if (accessToken) {
      setAccessToken(accessToken);
      setRefreshToken(refreshToken || "");
      setIsGoogleAuthed(true);
      setUploadMessage("Google Drive connected successfully!");
      setIsUploadSuccess(true);

      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    if (error) {
      setUploadMessage("Google Drive authentication failed. Please try again.");
      setIsUploadSuccess(false);
    }
  }, [searchParams]);

  const handleGoogleAuth = async () => {
    try {
      const response = await fetch("/api/google-drive/auth");
      const data = await response.json();

      if (data.authUrl) {
        window.location.href = data.authUrl;
      }
    } catch (error) {
      console.error("Error initiating Google auth:", error);
      setUploadMessage("Failed to start Google Drive authentication");
      setIsUploadSuccess(false);
    }
  };

  const handleCVUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!isGoogleAuthed) {
      setUploadMessage("Please authenticate with Google Drive first");
      setIsUploadSuccess(false);
      return;
    }

    setIsUploadingCV(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);
      uploadFormData.append("accessToken", accessToken);
      uploadFormData.append("refreshToken", refreshToken);
      uploadFormData.append("applicantName", formData.name || "Unknown");
      uploadFormData.append("fileType", "cv");

      const response = await fetch("/api/google-drive/upload", {
        method: "POST",
        body: uploadFormData,
      });

      const data = await response.json();

      if (data.success) {
        setCvFile(data.file);
        setUploadMessage("CV uploaded successfully!");
        setIsUploadSuccess(true);
      } else {
        throw new Error(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Error uploading CV:", error);
      setUploadMessage("Failed to upload CV");
      setIsUploadSuccess(false);
    } finally {
      setIsUploadingCV(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      // Add CV file info if available
      if (cvFile) {
        formData.append("CV-File-Name", cvFile.name);
        formData.append("CV-GoogleDrive", cvFile.webViewLink);
        // formData.append('cv_file_id', cvFile.id);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          message: "",
        });
        setCvFile(null);
        setIsGoogleAuthed(false);
        setUploadMessage("");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-legal-pattern min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2340]/90 to-[#0C2340]/70" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl    font-bold text-white mb-6">
            Build Your Legal Career
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join our team of dedicated legal professionals and make a meaningful
            impact in the legal industry.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl    font-bold text-[#0C2340] mb-4">
              Why Join Gaggar & Partners?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We offer more than just a job – we provide a platform for
              professional growth and excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#CBA135]/10 rounded-lg mb-4 group-hover:bg-[#CBA135] transition-colors">
                  <benefit.icon className="w-6 h-6 text-[#CBA135] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl    font-bold text-[#0C2340] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-16 md:py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl    font-bold text-[#0C2340] mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore our available positions and find the perfect opportunity
              to advance your legal career.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-[#CBA135]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#CBA135]" />
              </div>
              <h3 className="text-2xl    font-bold text-[#0C2340] mb-4">
                No Current Openings
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                While we don't have any open positions at the moment, we're
                always interested in connecting with talented legal
                professionals. We encourage you to submit your resume for future
                opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@gaggarpartners.com"
                  className="inline-flex items-center px-6 py-3 bg-[#CBA135] text-white rounded-lg hover:bg-[#CBA135]/90 transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Your Resume
                </a>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center px-6 py-3 border-2 border-[#0C2340] text-[#0C2340] rounded-lg hover:bg-[#0C2340] hover:text-white transition-colors font-medium"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl    font-bold text-[#0C2340] mb-4">
                Interested in Joining Us?
              </h2>
              <p className="text-lg text-gray-700">
                Fill out the form below and we'll get back to you about
                potential opportunities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="hidden"
                    name="access_key"
                    value="1fc164cb-d2a8-4e32-9275-ae9c69f1d971"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#0C2340] mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CBA135] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#0C2340] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CBA135] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#0C2340] mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CBA135] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="position"
                        className="block text-sm font-medium text-[#0C2340] mb-2"
                      >
                        Position of Interest
                      </label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CBA135] focus:border-transparent"
                      >
                        <option value="">Select Position</option>
                        <option value="associate">Associate</option>
                        <option value="senior-associate">
                          Senior Associate
                        </option>
                        <option value="partner">Partner</option>
                        <option value="paralegal">Paralegal</option>
                        <option value="intern">Intern</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-[#0C2340] mb-2"
                    >
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CBA135] focus:border-transparent"
                    >
                      <option value="">Select Experience</option>
                      <option value="intern">Intern</option>
                      <option value="0-1">0-1 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  {/* CV Upload Section */}
                  <div className="space-y-4">
                    <label className="text-sm font-medium text-[#0C2340] mb-2 flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Upload CV/Resume
                    </label>

                    {/* Upload Message */}
                    {uploadMessage && (
                      <div
                        className={`p-3 rounded-lg flex items-center gap-2 ${
                          isUploadSuccess
                            ? "bg-green-50 border border-green-200"
                            : "bg-red-50 border border-red-200"
                        }`}
                      >
                        {isUploadSuccess ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-red-600" />
                        )}
                        <p
                          className={`text-sm ${
                            isUploadSuccess ? "text-green-800" : "text-red-800"
                          }`}
                        >
                          {uploadMessage}
                        </p>
                      </div>
                    )}

                    {!isGoogleAuthed ? (
                      <button
                        type="button"
                        onClick={handleGoogleAuth}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                      >
                        <GoogleIcon size={16} />
                        Connect to Google Drive
                      </button>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-green-600 text-sm">
                          <CheckCircle className="h-4 w-4" />
                          Google Drive Connected
                        </div>

                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleCVUpload}
                          disabled={isUploadingCV}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CBA135] focus:border-transparent"
                        />

                        {isUploadingCV && (
                          <p className="text-blue-600 text-sm flex items-center gap-2">
                            <Cloud className="h-4 w-4 animate-pulse" />
                            Uploading CV to Google Drive...
                          </p>
                        )}

                        {cvFile && (
                          <div className="flex items-center gap-2 text-green-600 text-sm">
                            <CheckCircle className="h-4 w-4" />
                            CV uploaded: {cvFile.name}
                            <a
                              href={cvFile.webViewLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 underline"
                            >
                              View
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#0C2340] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CBA135] focus:border-transparent resize-none"
                      placeholder="Tell us about yourself and why you're interested in joining our team..."
                    />
                  </div>

                  <input
                    type="hidden"
                    name="subject"
                    value="Career Application - Gaggar & Partners"
                  />
                  <input
                    type="hidden"
                    name="from_name"
                    value="Gaggar & Partners Career Portal"
                  />

                  {isSubmitted ? (
                    <div className="w-full bg-green-100 border border-green-300 text-green-800 py-3 px-6 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Application Submitted Successfully!
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#CBA135] text-white py-3 px-6 rounded-lg hover:bg-[#CBA135]/90 transition-colors font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Application
                        </>
                      )}
                    </button>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-[#0C2340] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl    font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-[#CBA135] mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Office Address</p>
                        <p className="text-white/80 text-sm">
                          E-14/13, First Floor, Vasant Vihar, New Delhi – 110057
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-[#CBA135] mr-3" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-white/80 text-sm">
                          +91-11-49093382, 011-49404826
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-[#CBA135] mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-white/80 text-sm">
                          connect@gaggarpartners.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl    font-bold text-[#0C2340] mb-4">
                    Application Process
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#CBA135] text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                        1
                      </div>
                      <p>Submit your application through our form or email</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#CBA135] text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                        2
                      </div>
                      <p>Initial screening and review of qualifications</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#CBA135] text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                        3
                      </div>
                      <p>Interview process with our team</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[#CBA135] text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                        4
                      </div>
                      <p>Final decision and offer discussion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
