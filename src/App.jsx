// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global CSS – contains all wireframe styles (colours, typography, layout, components)
import './styles/AbdullaWireframe.css';

// Global navigation bar (appears on every page)
import Navbar from './components/Navbar';

// Page components
import Homepage from "@/sections/HomePage.jsx";
import AboutPage from './pages/AboutPage';
import Footer from "@/components/Footer.jsx";
import ScrollToTop from "@/components/ScrollToTop.jsx";

function App() {
    return (
        <Router>
            {/* Fixed / sticky navbar */}
            <ScrollToTop />
            <Navbar />

            {/* Main content wrapper – adds top padding to avoid navbar overlap (if needed) */}
            <div className="main-wrapper" style={{ paddingTop: '70px' }}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<AboutPage />} />

                    {/* Future routes – uncomment and build as needed */}
                    {/*
          <Route path="/verticals" element={<VerticalsPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/engagement" element={<EngagementPage />} />
          <Route path="/contact" element={<ContactPage />} />
          */}
                </Routes>
                <AboutPage />
                <Footer />
            </div>
        </Router>
    );
}

export default App;