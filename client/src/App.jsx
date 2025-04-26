import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Settings from "./pages/Settings";
import UserDetails from "./pages/UserDetails";
import { CartProvider } from "./context/CartProvider.jsx"; // Ensure correct import
import FitnessTracker from "./pages/FitnessTracker";
import GymShaker from "./pages/GymShaker";
import WorkoutGloves from "./pages/WorkoutGloves";
import ProteinSupplement from "./pages/ProteinSupplement";
import ResistanceBand from "./pages/ResistanceBand";
import WorkoutTowel from "./pages/WorkoutTowel";
function App() {
  return (
    <CartProvider> {/* Wrap Routes inside CartProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userdetails" element={<UserDetails />} /> {/* ✅ New Route */}
          <Route path="/fitnessTracker" element={<FitnessTracker />} />
          <Route path="/gymShaker" element={<GymShaker />} />
          <Route path="/workoutGloves" element={<WorkoutGloves />} />
          <Route path="/proteinSupplement" element={<ProteinSupplement />} />
          <Route path="/resistanceBand" element={<ResistanceBand />} />
          {/* <Route path="/workoutTowel" element={<WorkoutTowel />} />
           */}
           <Route path="/workout-towel" element={<WorkoutTowel />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
