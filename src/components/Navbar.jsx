import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md px-6 py-3 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="font-bold text-xl">RescueVerse</h1>

      {/* Hamburger Icon (3 lines) */}
      <button
        className="md:hidden flex items-center justify-center focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Always show 3 lines for closed, X for open */}
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <>
              <line
                x1="4"
                y1="7"
                x2="20"
                y2="7"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="4"
                y1="17"
                x2="20"
                y2="17"
                stroke="currentColor"
                strokeWidth="2"
              />
            </>
          )}
        </svg>
      </button>

      {/* Navbar Links */}
      <div className="hidden md:flex">
        <Link className="mx-2 hover:text-gray-200 transition" to="/">
          Home
        </Link>
        <Link className="mx-2 hover:text-gray-200 transition" to="/report">
          Report
        </Link>
        <Link className="mx-2 hover:text-gray-200 transition" to="/victims">
          Victims
        </Link>
        <Link className="mx-2 hover:text-gray-200 transition" to="/community">
          Community
        </Link>
        <Link className="mx-2 hover:text-gray-200 transition" to="/communication">
          Chat
        </Link>
        <Link className="mx-2 hover:text-gray-200 transition" to="/login">
          Login
        </Link>
        <Link className="mx-2 hover:text-gray-200 transition" to="/register">
          Register
        </Link>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg md:hidden z-50 animate-fadeIn">
          <div className="flex flex-col py-3 px-6">
            <Link
              className="py-2 hover:text-gray-200 transition"
              to="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              className="py-2 hover:text-gray-200 transition"
              to="/report"
              onClick={() => setOpen(false)}
            >
              Report
            </Link>
            <Link
              className="py-2 hover:text-gray-200 transition"
              to="/victims"
              onClick={() => setOpen(false)}
            >
              Victims
            </Link>
            <Link
              className="py-2 hover:text-gray-200 transition"
              to="/community"
              onClick={() => setOpen(false)}
            >
              Community
            </Link>
            <Link
              className="py-2 hover:text-gray-200 transition"
              to="/communication"
              onClick={() => setOpen(false)}
            >
              Chat
            </Link>
            <Link
              className="py-2 hover:text-gray-200 transition"
              to="/login"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              className="py-2 hover:text-gray-200 transition"
              to="/register"
              onClick={() => setOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      )}

      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.3s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
