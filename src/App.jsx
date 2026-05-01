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
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;