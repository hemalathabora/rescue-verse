import React, { useEffect, useState } from "react";

// Helper to get victim requests from localStorage
function getVictimRequests() {
  const stored = localStorage.getItem("victimRequests");
  return stored ? JSON.parse(stored) : [];
}

// Helper to get recent signup user name
function getRecentUserName() {
  const stored = localStorage.getItem("recentSignup");
  return stored ? stored : "Hemalatha";
}

function VictimRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests(getVictimRequests());
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-400">
          Victim Requests
        </h1>
        <div className="space-y-6">
          {requests.length === 0 ? (
            <div className="text-center text-blue-400 text-lg">
              No requests yet.
            </div>
          ) : (
            requests.map((req, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-xl shadow-lg p-6 border border-blue-500 hover:shadow-blue-500/50 transition"
              >
                <div className="font-bold text-blue-400 text-xl mb-2">
                  {req.name || getRecentUserName()}
                </div>
                {req.medicineName && (
                  <div className="text-gray-300 mb-1">
                    <span className="font-semibold text-blue-300">Medicine:</span>{" "}
                    {req.medicineName}
                  </div>
                )}
                <div className="text-gray-300 mb-1">
                  <span className="font-semibold text-blue-300">Type:</span> {req.type}
                </div>
                <div className="text-gray-300 mb-1">
                  <span className="font-semibold text-blue-300">Location:</span>{" "}
                  {req.location}
                </div>
                <div className="text-gray-300 mb-1">
                  <span className="font-semibold text-blue-300">Description:</span>{" "}
                  {req.description}
                </div>
                <div className="text-gray-500 text-sm mt-2">
                  Requested by: {req.name || getRecentUserName()}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default VictimRequests;
