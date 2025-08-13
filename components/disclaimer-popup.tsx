"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function DisclaimerPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show disclaimer popup on every app open
    setIsVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gaggar-disclaimer-accepted", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Redirect away from the website
    window.location.href = "https://www.google.com";
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#0C2340] rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#CBA135"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0C2340]">
                Legal Disclaimer
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 mb-8 text-gray-700">
            <p className="text-lg font-medium text-[#0C2340]">
              Important Notice - Please Read Carefully
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              The information provided on this website is for general
              informational purposes only and does not constitute legal advice.
              The content on this site should not be relied upon as a substitute
              for professional legal counsel.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-[#0C2340] mb-2">Key Points:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#CBA135] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  No attorney-client relationship is established by accessing
                  this website
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#CBA135] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Information may not reflect the most current legal
                  developments
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#CBA135] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Confidential information should not be transmitted through
                  this website
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#CBA135] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Prior results do not guarantee similar outcomes in future
                  cases
                </li>
              </ul>
            </div>

            <p className="text-sm md:text-base leading-relaxed">
              By continuing to use this website, you acknowledge that you have
              read and understood this disclaimer. For specific legal advice
              regarding your situation, please contact our office directly to
              schedule a consultation.
            </p>

            <div className="bg-[#0C2340]/5 p-4 rounded-lg border-l-4 border-[#CBA135]">
              <p className="text-sm font-medium text-[#0C2340]">
                <strong>Professional Legal Advice Required:</strong> Every legal
                situation is unique. We strongly recommend consulting with a
                qualified attorney before making any legal decisions.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              onClick={handleAccept}
              className="flex-1 bg-[#0C2340] hover:bg-[#0C2340]/90 text-white py-3 text-base font-medium rounded-full hover:scale-105 transition-all duration-300"
            >
              I Understand & Accept
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 text-base font-medium rounded-full hover:scale-105 transition-all duration-300"
            >
              Decline & Exit
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            This disclaimer was last updated on{" "}
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
