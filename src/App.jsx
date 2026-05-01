// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/AbdullaWireframe.css';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

import Homepage from './sections/HomePage';
import AboutPage from './pages/AboutPage';
import VerticalsPage from './pages/VerticalsPage';
import PhilosophyPage from './pages/PhilosophyPage';
import EngagementPage from './pages/EngagementPage';
import ContactPage from './pages/ContactPage';
import GovernancePage from "@/pages/GovernancePage.jsx";
import DisclaimerPage from "@/pages/DisclaimerPage.jsx";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage.jsx";
import CookiePolicyPage from "@/pages/CookiePolicyPage.jsx";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />

            <div className="main-wrapper" style={{ paddingTop: '70px' }}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/verticals" element={<VerticalsPage />} />
                    <Route path="/verticals/:section" element={<VerticalsPage />} />
                    <Route path="/philosophy" element={<PhilosophyPage />} />
                    <Route path="/engagement" element={<EngagementPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/governance" element={<GovernancePage />} />
                    <Route path="/disclaimer" element={<DisclaimerPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;