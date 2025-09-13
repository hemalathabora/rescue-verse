import React, { useEffect, useState } from "react";

// Get volunteers from localStorage if present
function getStoredVolunteers() {
  const stored = localStorage.getItem("volunteers");
  return stored ? JSON.parse(stored) : [];
}

const mockVolunteers = [
  {
    id: 1,
    name: "Sowjanya Bodala",
    location: "Vijayanagaram",
    skills: ["First Aid", "Food Distribution"],
    contact: "sowji.bodala@email.com",
    status: "Available",
  },
  {
    id: 2,
    name: "SamyaDevi Bada",
    location: "Hyderabad",
    skills: ["Medical Assistance", "Shelter Management"],
    contact: "samya.bada@email.com",
    status: "On Mission",
  },
  {
    id: 3,
    name: "YogeshKumar Reddy",
    location: "Visakhapatnam",
    skills: ["Logistics", "Communication"],
    contact: "yogi.devil@email.com",
    status: "Available",
  },
  {
    id: 4,
    name: "Sweety",
    location: "Kurnool",
    skills: ["Logistics", "Communication"],
    contact: "Sweety@email.com",
    status: "On Mission",
  },
];

function VolunteersDashboard() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    // Load volunteers from localStorage and combine with mock data
    const storedVolunteers = getStoredVolunteers();
    setVolunteers([...mockVolunteers, ...storedVolunteers]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Volunteers Dashboard
        </h1>
        <p className="text-lg text-blue-200 text-center mb-12">
          Offer resources, coordinate with victims, provide aid, and help communities recover faster from disasters.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {volunteers.map((vol, idx) => (
            <div
              key={vol.id || idx}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-700 hover:scale-105 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-2">{vol.name}</h2>
              <div className="mb-2 text-gray-300">
                <span className="font-semibold">Location:</span> {vol.location || "Not Provided"}
              </div>
              <div className="mb-2 text-gray-300">
                <span className="font-semibold">Skills:</span> {vol.skills ? vol.skills.join(", ") : ""}
              </div>
              <div className="mb-2 text-gray-300">
                <span className="font-semibold">Contact:</span> {vol.contact}
              </div>
              <div className="mt-2">
                <span
                  className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                    vol.status === "Available"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-600 text-gray-200"
                  }`}
                >
                  {vol.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VolunteersDashboard;