import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "victim",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    alert(`Registered as ${form.role}`);

    if (form.role === "volunteer") {
      const newVolunteer = {
        name: form.name,
        contact: form.email,
        skills: ["First Aid", "Medical Assistance"],
        status: "Available",
        location: "", // You can add a location field to your form if needed
      };
      const prev = JSON.parse(localStorage.getItem("volunteers") || "[]");
      localStorage.setItem("volunteers", JSON.stringify([...prev, newVolunteer]));
    }

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Create Account
        </h2>

        {error && (
          <div className="mb-4 text-red-400 bg-red-900 border border-red-700 px-4 py-2 rounded text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-800 text-gray-100 placeholder-gray-400 transition"
              onChange={handleChange}
              value={form.name}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-800 text-gray-100 placeholder-gray-400 transition"
              onChange={handleChange}
              value={form.email}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-800 text-gray-100 placeholder-gray-400 transition"
              onChange={handleChange}
              value={form.password}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-800 text-gray-100 placeholder-gray-400 transition"
              onChange={handleChange}
              value={form.confirmPassword}
              required
            />
          </div>

          {/* Role Selection */}
          <div className="flex justify-center gap-8 mb-2">
            <label className="flex items-center gap-2 text-gray-300 font-medium">
              <input
                type="radio"
                name="role"
                value="victim"
                checked={form.role === "victim"}
                onChange={handleChange}
                className="text-indigo-500 focus:ring-indigo-400 border-gray-600"
              />
              Victim
            </label>
            <label className="flex items-center gap-2 text-gray-300 font-medium">
              <input
                type="radio"
                name="role"
                value="volunteer"
                checked={form.role === "volunteer"}
                onChange={handleChange}
                className="text-indigo-500 focus:ring-indigo-400 border-gray-600"
              />
              Volunteer
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:from-indigo-600 hover:to-purple-700 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Already have account */}
        <div className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-400 font-semibold hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;