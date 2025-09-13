import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "", role: "victim" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    alert(`Logged in as ${form.role}`);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Sign In
        </h2>

        {error && (
          <div className="mb-4 text-red-400 bg-red-900 border border-red-700 px-4 py-2 rounded text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
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
              autoComplete="email"
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
              autoComplete="current-password"
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:from-indigo-600 hover:to-purple-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-6 text-center text-sm text-gray-400">
          Forgot your password?{" "}
          <Link
            to="/reset-password"
            className="text-indigo-400 font-semibold hover:underline"
          >
            Reset
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
