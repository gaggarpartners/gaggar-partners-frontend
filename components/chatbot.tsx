"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const parseResponse = (text: string) => {
    return text.replace(/【[^】]*】/g, "").trim();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chatInput: inputValue }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: parseResponse(
          data.output ||
            data.response ||
            data.message ||
            "I'm sorry, I couldn't process your request. Please feel free to contact our office directly for immediate assistance."
        ),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize for the technical difficulty. For immediate legal assistance, please contact Gaggar & Partners directly at our office.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 rounded-[100px] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-[#0C2340] to-[#1a365d] hover:from-[#1a365d] hover:to-[#0C2340] border-2 border-[#CBA135]/20 hover:border-[#CBA135]/40 hover:scale-110 group overflow-visible"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-16 md:w-16 text-white group-hover:text-[#CBA135] transition-colors duration-300" />
      </Button>
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`
        fixed z-50 transition-all duration-300 ease-in-out

        inset-x-0 bottom-0 top-0 mx-0 my-0 rounded-none

        sm:inset-x-4 sm:bottom-4 sm:top-4 sm:mx-0 sm:my-0 sm:rounded-2xl

        md:inset-auto md:bottom-6 md:right-6 md:top-auto md:left-auto
        md:w-[400px] md:h-[600px]

        lg:w-[450px] lg:h-[650px]
        xl:w-[500px] xl:h-[700px]
      `}
      >
        <Card className="w-full h-full shadow-2xl border-0 bg-white rounded-none sm:rounded-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <CardHeader className="flex-shrink-0 flex flex-row items-center justify-between p-3 sm:p-4 md:p-5 bg-gradient-to-r from-[#0C2340] to-[#1a365d] text-white">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="/images/gaggar-emblem.png"
                alt="Gaggar & Partners"
                className="h-4 w-4 sm:h-4 sm:w-4 md:h-10 md:w-14"
              />
              <div>
                {/* <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl   font-bold text-white">
                  Legal Assistant
                </CardTitle> */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl   font-bold text-white">
                  Gaggar & Partners
                </p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              // size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9 text-white hover:bg-white/10 hover:text-[#CBA135] transition-all duration-200 rounded-[100px] flex-shrink-0"
            >
              <X className="h-4 w-4 sm:h-10 sm:w-10" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 bg-gradient-to-b from-white to-gray-50/30 min-h-0">
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start space-x-[3px] max-w-[85%] sm:max-w-[80%] ${
                      message.isUser ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 rounded-[100px] flex items-center justify-center shadow-md ${
                        message.isUser
                          ? "bg-gradient-to-br from-[#0C2340] to-[#1a365d] w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                          : ""
                      }`}
                    >
                      {message.isUser ? (
                        <User className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                      ) : (
                        <img
                          src="/images/gaggar-emblem.png"
                          alt="Gaggar & Partners"
                          className="h-4 w-4 sm:h-4 sm:w-4 md:h-10 md:w-12"
                        />
                      )}
                    </div>
                    <div
                      className={`px-3 py-2 sm:px-4 sm:py-3 rounded-2xl text-sm sm:text-base shadow-sm ${
                        message.isUser
                          ? "bg-gradient-to-br from-[#0C2340] to-[#1a365d] text-white rounded-br-md"
                          : "bg-white text-gray-800 rounded-bl-md border border-gray-100"
                      }`}
                    >
                      <p className="leading-relaxed break-words ">
                        {message.text}
                      </p>
                      <div
                        className={`text-xs mt-1 sm:mt-2 ${
                          message.isUser ? "text-white/70 " : "text-gray-500"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 sm:space-x-3 max-w-[85%]">
                    <div className="flex-shrink-0 rounded-[100px] flex items-center justify-center shadow-md">
                      <img
                        src="/images/gaggar-emblem.png"
                        alt="Gaggar & Partners"
                        className="h-4 w-4 sm:h-4 sm:w-4 md:h-10 md:w-12"
                      />
                    </div>
                    <div className="px-3 py-2 sm:px-4 sm:py-3 rounded-2xl bg-white text-gray-800 rounded-bl-md border border-gray-100 shadow-sm">
                      <div className="flex space-x-1 sm:space-x-2">
                        <div className="w-2 h-2 bg-[#CBA135] rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-[#CBA135] rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-[#CBA135] rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Fixed at bottom */}
            <div className="flex-shrink-0 border-t border-gray-200 p-3 sm:p-4 md:p-5 bg-white">
              <div className="flex space-x-2 sm:space-x-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about legal services..."
                  disabled={isLoading}
                  className="flex-1 text-sm sm:text-base border-gray-200 focus:border-[#CBA135] focus:ring-[#CBA135]/20 rounded-xl px-3 py-2 sm:px-4 sm:py-3 bg-gray-50/50 min-h-[40px] sm:min-h-[44px]"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="icon"
                  className="bg-gradient-to-br from-[#0C2340] to-[#1a365d] hover:from-[#1a365d] hover:to-[#0C2340] w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-[100px] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex-shrink-0"
                >
                  <Send className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center hidden sm:block">
                For urgent legal matters, please contact our office directly
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
