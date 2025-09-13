import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MedicineForm() {
  const [form, setForm] = useState({
    type: "Medicine",
    medicineName: "",
    location: "",
    description: "",
  });
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
    alert("Medicine request submitted!");
    navigate("/victims");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "radial-gradient(circle at 20% 80%, #232946 0%, #16182c 100%)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-[#16182c] rounded-2xl shadow-2xl p-8 max-w-md w-full border border-[#232946] flex flex-col items-center"
        style={{
          boxShadow: "0 8px 32px 0 rgba(44, 62, 80, 0.37)",
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Request Medicine
        </h2>
        <div className="mb-4 w-full">
          <label className="block text-white font-semibold mb-2">
            Medicine Type / Category / Name
          </label>
          <input
            name="medicineName"
            type="text"
            value={form.medicineName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-[#232946] rounded-lg focus:outline-none bg-[#232946] text-white placeholder-gray-400"
            placeholder="e.g. Paracetamol, Antibiotics, etc."
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
            placeholder="Describe your medical needs"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white py-3 rounded-lg font-semibold hover:from-[#6d28d9] hover:to-[#8b5cf6] transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default MedicineForm;