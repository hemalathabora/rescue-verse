import React from "react";

function CommunityOffers() {
  const offers = [
    { id: 1, name: "Alekhya Volunteer", offer: "50 food packets", location: "Kurnool" },
    { id: 2, name: "Medical Team", offer: "Basic medicines", location: "Chennai" },
    { id: 3, name: "Rescue Squad", offer: "Emergency supplies", location: "Vijayawada" },
    { id: 4, name: "Local NGO", offer: "Temporary shelter", location: "Hyderabad" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6">
      <div className="max-w-4xl mx-auto pt-10">
        <div className="bg-gradient-to-br from-slate-800/80 to-blue-900/60 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-blue-500/20 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Community Offers
          </h2>
          <div className="space-y-6">
            {offers.map((offer, index) => (
              <div 
                key={offer.id} 
                className="p-6 bg-gradient-to-r from-slate-700/50 to-blue-800/30 backdrop-blur-sm border border-blue-500/30 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-[1.02] hover:from-slate-600/50 hover:to-blue-700/40 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-bold text-white text-xl mb-2 group-hover:text-green-200 transition-colors">{offer.name}</p>
                    <p className="text-green-300 font-semibold text-lg mb-3">Offering: {offer.offer}</p>
                    <p className="text-slate-300 flex items-center text-sm">
                      <span className="mr-2 text-lg">📍</span>
                      {offer.location}
                    </p>
                  </div>
                  <div className="text-right flex flex-col items-center">
                    <span className="inline-block w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
                    <p className="text-xs text-green-300 mt-2 font-medium">Available</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityOffers;