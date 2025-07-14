"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sun,
  Lightbulb,
  Zap,
  Save,
  Shield,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";
// Fallback Button if not found in project
const Button = ({ children, ...props }: any) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
      props.className || ""
    }`}
  >
    {children}
  </button>
);

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "FACEBOOK ADS ACCOUNT",
      subtitle: "FOR RENT",
      description:
        "Professional Facebook advertising accounts ready for your campaigns",
    },
    {
      title: "INSTAGRAM ADS",
      subtitle: "PREMIUM SERVICE",
      description:
        "High-quality Instagram advertising solutions for your business",
    },
    {
      title: "GOOGLE ADS",
      subtitle: "EXPERT MANAGEMENT",
      description:
        "Maximize your ROI with our Google Ads account rental service",
    },
  ];

  const features = [
    {
      icon: Lightbulb,
      title: "Creative",
      description: "Innovative ad strategies",
    },
    { icon: Zap, title: "Fast", description: "Quick setup & delivery" },
    { icon: Save, title: "Save", description: "Cost-effective solutions" },
    { icon: Shield, title: "Security", description: "100% safe & secure" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const patternSvg =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Subtle dotted background pattern */}
        <div
          className="absolute inset-0 animate-pulse"
          style={{ backgroundImage: `url(\"${patternSvg}\")` }}
        />
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Navigation Arrows */}
      <Button
        type="button"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        type="button"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white p-4 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <Sun className="h-8 w-8 text-yellow-500" />
                  <span className="text-blue-600 font-bold text-lg">
                    SUNNY AGENCY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Contact */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-orange-500 px-4 py-2 rounded-full">
              <span className="text-white font-bold">CONTACT US:</span>
              <a
                href="https://t.me/sunny_agencyy"
                className="text-white hover:text-yellow-200 transition-colors"
              >
                https://t.me/sunny_agencyy
              </a>
            </div>
            <div className="flex space-x-2">
              <Button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                className="bg-pink-600 hover:bg-pink-700 rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                className="bg-cyan-500 hover:bg-cyan-600 rounded-full"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)] px-6">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Text */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-pulse">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 bg-clip-text text-transparent">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              type="button"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Now
            </Button>
            <Button
              type="button"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-cyan-400 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Facebook Ads Mockup */}
        <div className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="flex items-center space-x-2 mb-4">
              <Facebook className="h-6 w-6 text-blue-500" />
              <span className="text-white font-semibold">
                Facebook Ads Manager
              </span>
            </div>
            <div className="space-y-3">
              <div className="bg-green-500/20 rounded-lg p-3">
                <div className="text-green-400 text-sm font-semibold">
                  Active Campaign
                </div>
                <div className="text-white text-lg">$2,450 Spent</div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-3">
                <div className="text-blue-400 text-sm font-semibold">Reach</div>
                <div className="text-white text-lg">125,000 People</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-3">
                <div className="text-purple-400 text-sm font-semibold">
                  Conversions
                </div>
                <div className="text-white text-lg">1,250 Actions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 bg-gradient-to-r from-cyan-500/90 to-blue-600/90 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white/20 backdrop-blur-lg rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                  {(() => {
                    const Icon = feature.icon;
                    return <Icon className="h-10 w-10 text-white" />;
                  })()}
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
