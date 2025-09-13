import React, { useState } from "react";

function DisasterReport() {
  const [form, setForm] = useState({ type: "", location: "", description: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    // After successful report
    const prev = JSON.parse(localStorage.getItem("reportedDisasters") || "[]");
    localStorage.setItem("reportedDisasters", JSON.stringify([...prev, form]));
    setForm({ type: "", location: "", description: "" });
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-lg w-full bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Report a Disaster
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Disaster Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Disaster Type
            </label>
            <input
              name="type"
              placeholder="Flood, Fire, Earthquake, etc."
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:scale-[1.02] transition-transform duration-300"
              value={form.type}
              onChange={handleChange}
              required
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Location
            </label>
            <input
              name="location"
              placeholder="Enter affected location"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:scale-[1.02] transition-transform duration-300"
              value={form.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Provide detailed description of the disaster"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:scale-[1.02] transition-transform duration-300"
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition duration-300"
          >
            Submit Report
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div
            className="rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-fadeInUp"
            style={{
              background: "linear-gradient(135deg, #1e293b 60%, #2563eb 100%)",
              color: "#fff",
              border: "2px solid #2563eb",
            }}
          >
            <div className="text-4xl mb-4 text-green-400">✅</div>
            <h3 className="text-2xl font-bold mb-2">Report Submitted!</h3>
            <p className="mb-6">
              Thank you for reporting. <br />
              <span className="font-semibold text-blue-300">Our team will reach out to help you soon.</span>
            </p>
            <button
              onClick={closePopup}
              className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          .animate-fadeInUp {
            animation: fadeInUp 0.7s;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
}

export default DisasterReport;