import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FoodForm() {
  const [form, setForm] = useState({
    type: "Food",
    foodName: "",
    location: "",
    description: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = localStorage.getItem("recentSignup") || "Unknown";
    const prev = JSON.parse(localStorage.getItem("victimRequests") || "[]");
    localStorage.setItem(
      "victimRequests",
      JSON.stringify([...prev, { ...form, name }])
    );
    setShowPopup(true);
    setForm({
      type: "Food",
      foodName: "",
      location: "",
      description: "",
    });
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate("/victims");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "radial-gradient(circle at 20% 80%, #232946 0%, #121629 100%)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-[#16182c] rounded-2xl shadow-2xl p-8 max-w-lg w-full border border-[#232946] flex flex-col items-center"
        style={{
          boxShadow: "0 8px 32px 0 rgba(44, 62, 80, 0.37)",
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Request Food
        </h2>
        <div className="mb-4 w-full">
          <label className="block text-white font-semibold mb-2">
            Food Type / Category / Name
          </label>
          <input
            name="foodName"
            type="text"
            value={form.foodName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-[#232946] rounded-lg focus:outline-none bg-[#232946] text-white placeholder-gray-400"
            placeholder="e.g. Rice, Bread, Milk, etc."
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-white font-semibold mb-2">
            Location
          </label>
          <input
            name="location"
            type="text"
            value={form.location}
            onChange={handleChange}
            required
            className="w-full p-3 border border-[#232946] rounded-lg focus:outline-none bg-[#232946] text-white placeholder-gray-400"
            placeholder="Enter your location"
          />
        </div>
        <div className="mb-6 w-full">
          <label className="block text-white font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            className="w-full p-3 border border-[#232946] rounded-lg focus:outline-none bg-[#232946] text-white placeholder-gray-400"
            placeholder="Describe your food needs"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white py-3 rounded-lg font-semibold hover:from-[#6d28d9] hover:to-[#8b5cf6] transition"
        >
          Submit Request
        </button>
      </form>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div
            className="rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center"
            style={{
              background: "linear-gradient(135deg, #232946 60%, #7c3aed 100%)",
              color: "#fff",
              border: "2px solid #7c3aed",
            }}
          >
            <div className="text-4xl mb-4 text-purple-300">✅</div>
            <h3 className="text-2xl font-bold mb-2">Request Submitted!</h3>
            <p className="mb-6">
              Thank you for your request.<br />
              <span className="font-semibold text-purple-200">We will process it soon.</span>
            </p>
            <button
              onClick={closePopup}
              className="px-6 py-2 bg-[#7c3aed] text-white rounded-lg font-semibold shadow hover:bg-[#6d28d9] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodForm;
