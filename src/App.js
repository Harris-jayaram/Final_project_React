// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutUs from './pages/AboutUs';
import Patient from './pages/Patient'; 
import Appointment from './pages/Appointment';
import Profile from './components/Profile';
import Home from './pages/Home';
import HealthTips from './components/HealthTips';
import Dashboard from './components/Dashboard';
import ContactUs from './components/ContactUs';
import Logout from './components/Logout';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <div>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about us" element={<AboutUs />} />
          <Route path="/patient" element={<Patient />} /> {/* Updated component */}
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/healthtips" element={<HealthTips />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact us" element={<ContactUs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />

          {/* Other routes go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
