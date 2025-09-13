// src/pages/LandingPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

// Helper to get reported disasters from localStorage
function getReportedDisasters() {
  const stored = localStorage.getItem("reportedDisasters");
  return stored ? JSON.parse(stored) : [];
}

const LandingPage = () => {
  const [updates] = useState([
    {
      id: 1,
      icon: "⚠️",
      text: "Flood Alert in Mumbai - Heavy rainfall expected, evacuations in progress.",
      time: "5 mins ago",
      severity: "high",
    },
    {
      id: 2,
      icon: "🔥",
      text: "Wildfire near California spreading fast, volunteers requested.",
      time: "12 mins ago",
      severity: "high",
    },
    {
      id: 3,
      icon: "🌪️",
      text: "Cyclone warning issued for Odisha coastline, stay alert.",
      time: "25 mins ago",
      severity: "medium",
    },
  ]);

  const [currentUpdate, setCurrentUpdate] = useState(0);
  const [reportedDisasters, setReportedDisasters] = useState([]);

  useEffect(() => {
    // Cycle through updates for floating notification
    const interval = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % updates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [updates.length]);

  useEffect(() => {
    // Get reported disasters from localStorage
    setReportedDisasters(getReportedDisasters());
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), 
              radial-gradient(circle at 80% 20%, rgba(79, 70, 229, 0.2) 0%, transparent 50%),
              linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)
            `,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-2 sm:px-6 max-w-6xl mx-auto w-full">
          <div className="animate-float">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 text-white drop-shadow-2xl">
              Rescue
              <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
                Verse
              </span>
              <span className="ml-2 sm:ml-4 text-3xl sm:text-5xl animate-pulse">
                🌍
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed animate-fade-in-up">
            A next-generation disaster management platform connecting{" "}
            <strong className="text-violet-400">victims</strong> and{" "}
            <strong className="text-violet-400">volunteers</strong> in real-time.
            Get instant disaster updates, request critical resources, and
            coordinate emergency response seamlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-scale-in">
            <Link
              to="/login"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-600 text-white rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 hover:bg-gray-700 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25"
            >
              Get Started
            </Link>
            <Link
              to="/register"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-purple-700 text-white rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 hover:from-violet-500 hover:to-purple-600 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/50"
            >
              Join RescueVerse
            </Link>
          </div>
        </div>

        {/* Floating notification */}
        <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-md px-2 animate-pulse">
          <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-gray-600">
            <div className="flex items-center space-x-3 text-white">
              <div className="text-red-400 text-xl">
                {updates[currentUpdate]?.icon}
              </div>
              <div className="flex-1">
                <p className="text-xs sm:text-sm font-medium">
                  {updates[currentUpdate]?.text}
                </p>
                <p className="text-xs text-gray-400">
                  {updates[currentUpdate]?.time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee replacement */}
      {reportedDisasters.length > 0 && (
        <div className="w-full py-2 overflow-hidden bg-gradient-to-r from-gray-900 to-blue-800">
          <div className="flex whitespace-nowrap animate-marquee text-white text-sm sm:text-base font-semibold tracking-wide">
            {reportedDisasters.map((d, idx) => (
              <span key={idx} className="mx-8 flex items-center">
                <span className="mr-2">🚨</span>
                <span>
                  <strong>{d.type}</strong> at <strong>{d.location}</strong>:{" "}
                  {d.description}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Live Updates Section */}
      <section className="py-10 sm:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Live Disaster Updates
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time information about ongoing emergencies and disaster
              response efforts
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8">
            {updates.map((update, index) => (
              <div
                key={update.id}
                className={`transform transition-all duration-500 hover:scale-102 rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-gray-700/50 backdrop-blur-sm border border-gray-600 ${
                  update.severity === "high"
                    ? "border-l-4 border-l-red-500 hover:shadow-red-500/20"
                    : update.severity === "medium"
                    ? "border-l-4 border-l-yellow-500 hover:shadow-yellow-500/20"
                    : "border-l-4 border-l-green-500 hover:shadow-green-500/20"
                } animate-slide-in-left hover:shadow-xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div
                      className={`text-xl sm:text-2xl ${
                        update.severity === "high"
                          ? "text-red-400"
                          : update.severity === "medium"
                          ? "text-yellow-400"
                          : "text-green-400"
                      }`}
                    >
                      {update.icon}
                    </div>
                    <div>
                      <p className="text-base sm:text-lg font-medium text-white">
                        {update.text}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {update.time}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold ${
                      update.severity === "high"
                        ? "bg-red-900/50 text-red-300 border border-red-600"
                        : update.severity === "medium"
                        ? "bg-yellow-900/50 text-yellow-300 border border-yellow-600"
                        : "bg-green-900/50 text-green-300 border border-green-600"
                    }`}
                  >
                    {update.severity.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 sm:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-2 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Why RescueVerse Exists
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every year, millions face disasters like{" "}
              <strong className="text-violet-400">
                floods, earthquakes, wildfires, and cyclones
              </strong>
              . During these critical moments, victims struggle to find food,
              medicines, shelter, and immediate help. RescueVerse bridges this
              gap, connecting{" "}
              <strong className="text-violet-400">those in need</strong> with{" "}
              <strong className="text-violet-400">those ready to help</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="transform transition-all duration-500 hover:scale-105 rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-600 border-t-4 border-t-red-500 shadow-xl hover:shadow-2xl hover:shadow-red-500/20">
              <div className="text-center">
                <FaUserShield className="text-4xl sm:text-5xl text-red-400 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-red-300">
                  🚨 The Problem
                </h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  Delayed emergency response, lack of real-time information, and
                  critical resource shortages during disasters cost lives every
                  day.
                </p>
              </div>
            </div>

            <div className="transform transition-all duration-500 hover:scale-105 rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-600 border-t-4 border-t-violet-500 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20">
              <div className="text-center">
                <FaGlobeAsia className="text-4xl sm:text-5xl text-violet-400 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-violet-300">
                  🌍 Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  To save lives by creating instant connections between victims,
                  volunteers, NGOs, and emergency responders worldwide.
                </p>
              </div>
            </div>

            <div className="transform transition-all duration-500 hover:scale-105 rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-600 border-t-4 border-t-green-500 shadow-xl hover:shadow-2xl hover:shadow-green-500/20">
              <div className="text-center">
                <FaHandsHelping className="text-4xl sm:text-5xl text-green-400 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-green-300">
                  🤝 Your Impact
                </h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  Whether you're affected by disaster or ready to help, your
                  participation builds stronger, more resilient communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Action Section */}
      <section className="py-10 sm:py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-2 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              How Will You Make a Difference?
            </h2>
            <p className="text-base sm:text-xl text-gray-300">
              Choose your role in building a safer, more connected world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="transform transition-all duration-500 hover:scale-105 rounded-2xl sm:rounded-3xl p-8 sm:p-10 bg-gray-700/50 backdrop-blur-sm border border-gray-600 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20">
              <div className="text-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-violet-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <FaUserShield className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-violet-300">
                  I Need Help
                </h3>
                <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-300 leading-relaxed">
                  Report emergencies, request essential supplies like food and
                  medicine, and connect with volunteers instantly during
                  disasters.
                </p>
                <Link
                  to="/report"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-purple-700 text-white rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 hover:from-violet-500 hover:to-purple-600 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
                >
                  🆘 Report Emergency
                </Link>
              </div>
            </div>

            <div className="transform transition-all duration-500 hover:scale-105 rounded-2xl sm:rounded-3xl p-8 sm:p-10 bg-gray-700/50 backdrop-blur-sm border border-gray-600 shadow-xl hover:shadow-2xl hover:shadow-gray-500/20">
              <div className="text-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <FaHandsHelping className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-200">
                  I Want to Help
                </h3>
                <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-300 leading-relaxed">
                  Offer resources, coordinate with victims, provide aid, and
                  help communities recover faster from disasters.
                </p>
                <Link
                  to="/volunteers"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 hover:from-gray-500 hover:to-gray-600 hover:scale-105 hover:shadow-xl hover:shadow-gray-500/30"
                >
                  🚀 Start Volunteering
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Food & Medicine Section */}
      <section className="py-10 sm:py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-2 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Request Food & Medicine
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              If you need urgent food or medical supplies, use the forms below
              to request help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {/* Food Form Card */}
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gray-800/60 backdrop-blur-sm border border-gray-600 shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-violet-600 to-purple-700 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <FaHandsHelping className="text-xl sm:text-2xl text-white" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 text-violet-300">
                  Request Food
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center text-sm sm:text-base">
                  Fill out the food request form if you or your community needs
                  urgent food supplies.
                </p>
                <Link
                  to="/resources/food"
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-violet-600 to-purple-700 text-white rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:from-violet-500 hover:to-purple-600 hover:scale-105 hover:shadow-lg"
                >
                  Go to Food Form
                </Link>
              </div>
            </div>
            {/* Medicine Form Card */}
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gray-800/60 backdrop-blur-sm border border-gray-600 shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-purple-700 to-violet-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <FaBolt className="text-xl sm:text-2xl text-white" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 text-purple-300">
                  Request Medicine
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center text-sm sm:text-base">
                  Fill out the medicine request form for urgent medical supplies
                  or assistance.
                </p>
                <Link
                  to="/resources/medicine"
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-700 to-violet-600 text-white rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:from-purple-600 hover:to-violet-500 hover:scale-105 hover:shadow-lg"
                >
                  Go to Medicine Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Footer */}
<footer className="py-8 sm:py-12 bg-black">
  <div className="max-w-7xl mx-auto px-2 sm:px-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
          <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
            RescueVerse
          </span>
        </h3>
        <p className="text-gray-400 text-xs sm:text-base">
          © 2025 RescueVerse. Saving lives through technology.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="javascript:void(0)"
            role="button"
            aria-label="Facebook"
            className="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-xl transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="javascript:void(0)"
            role="button"
            aria-label="Twitter"
            className="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-xl transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="javascript:void(0)"
            role="button"
            aria-label="Instagram"
            className="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-xl transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
          <Link
            to="/about"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Privacy
          </Link>
          <Link
            to="/contact"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  </div>
</footer>


      {/* Custom Styles */}
      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.3s both; }
        .animate-scale-in { animation: scale-in 0.8s ease-out 0.6s both; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out both; }
        .hover\\:scale-102:hover { transform: scale(1.02); }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 15s linear infinite;
        }
      `}
      </style>
    </div>
  );
};

export default LandingPage;
