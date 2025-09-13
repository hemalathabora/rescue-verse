import React, { useState } from "react";

function Communication() {
  const [messages, setMessages] = useState([
    { user: "Victim", text: "We need water at City A" },
    { user: "Volunteer", text: "We’re sending supplies shortly" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { user: "You", text: input }]);
    setInput("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-2xl w-full bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Victim & Volunteer Communication
        </h2>

        {/* Messages Box */}
        <div className="h-64 overflow-y-auto border border-gray-600 p-4 rounded-lg mb-4 bg-gray-800 text-gray-100">
          {messages.map((msg, index) => (
            <p key={index} className="mb-2">
              <span className="font-semibold text-indigo-400">{msg.user}:</span>{" "}
              {msg.text}
            </p>
          ))}
        </div>

        {/* Input Box */}
        <form onSubmit={sendMessage} className="flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-3 border border-gray-600 rounded-l-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:scale-[1.02] transition-transform duration-300"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 rounded-r-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Communication;
