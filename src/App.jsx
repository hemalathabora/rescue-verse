import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DisasterReport from "./pages/DisasterReport";
import FoodForm from "./pages/FoodForm";
import MedicineForm from "./pages/MedicineForm";
import VictimRequests from "./pages/VictimRequests";
import CommunityOffers from "./pages/CommunityOffers";
import Communication from "./pages/Communication";
import VolunteersDashboard from "./pages/VolunteersDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/report" element={<DisasterReport />} />
        <Route path="/resources/food" element={<FoodForm />} />
        <Route path="/resources/medicine" element={<MedicineForm />} />
        <Route path="/victims" element={<VictimRequests />} />
        <Route path="/community" element={<CommunityOffers />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/volunteers" element={<VolunteersDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
