import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserShield,
  FaGlobeAsia,
  FaHandsHelping,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBolt,
} from "react-icons/fa";

// Helper to get reported disasters from localStorage
function getReportedDisasters() {
  const stored = localStorage.getItem("reportedDisasters");
  return stored ? JSON.parse(stored) : [];
}

const LandingPage = () => {
  const [updates, setUpdates] = useState([
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
        <div
          className="w-full py-2 overflow-hidden bg-gradient-to-r from-gray-900 to-blue-800"
        >
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

      {/* ... rest of your sections (Live Updates, Mission, etc.) remain unchanged ... */}

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
              <div className="flex space-x-4">
                <a
                  href="/"
                  role="button"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-xl transform hover:scale-110"
                >
                  <FaFacebook />
                </a>
                <a
                  href="/"
                  role="button"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-xl transform hover:scale-110"
                >
                  <FaTwitter />
                </a>
                <a
                  href="/"
                  role="button"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-violet-400 transition-colors duration-300 text-xl transform hover:scale-110"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </Link>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy
                </Link>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
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
