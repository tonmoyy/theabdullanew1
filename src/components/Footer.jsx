// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <style>
                {`
          /* Force remove bullets from footer lists */
          .footer-list-reset,
          .footer-list-reset li {
            list-style: none !important;
            list-style-type: none !important;
            padding-left: 0 !important;
            margin-left: 0 !important;
          }
        `}
            </style>

            {/* ═══ WIREFRAME GLOBAL FOOTER ═══ */}
            <footer className="footer-strip">
                {/* Column 1 – Logo + tagline + email */}
                <div>
                    <Link to="/" className="nav-logo" style={{ fontSize: '22px' }}>
                        ABDULLA <span>CAPITAL</span>
                    </Link>
                    <p style={{
                        fontSize: '12px',
                        color: 'rgba(255,255,255,0.4)',
                        lineHeight: 1.8,
                        maxWidth: '240px',
                        marginTop: '12px'
                    }}>
                        Private investment and advisory across four specialised verticals. South Asia · GCC · Western Europe.
                    </p>
                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '16px' }}>
                        info@abdullacapital.com
                    </p>
                </div>

                {/* Column 2 – The Firm */}
                <div>
                    <h5>The Firm</h5>
                    <ul className="footer-list-reset">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/leadership">Leadership</Link></li>
                        <li><Link to="/philosophy">Philosophy</Link></li>
                        <li><Link to="/governance">Governance</Link></li>
                    </ul>
                </div>

                {/* Column 3 – Our Verticals */}
                <div>
                    <h5>Our Verticals</h5>
                    <ul className="footer-list-reset">
                        <li><Link to="/verticals/private-equity">Private Equity</Link></li>
                        <li><Link to="/verticals/advisory">Advisory</Link></li>
                        <li><Link to="/verticals/family-office">Family Office</Link></li>
                        <li><Link to="/verticals/luxury-finance">Luxury Finance</Link></li>
                    </ul>
                </div>

                {/* Column 4 – Engagement */}
                <div>
                    <h5>Engagement</h5>
                    <ul className="footer-list-reset">
                        <li><Link to="/engagement">Working With Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

            {/* Bottom bar – copyright + legal links */}
            <div className="footer-bottom">
                <div>© 2025 Abdulla Capital. All rights reserved.</div>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <Link to="/governance">Governance</Link>
                    <Link to="/disclaimer">Disclaimer</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/cookie-policy">Cookie Policy</Link>
                    <Link to="/cookie-settings">Cookie Settings</Link>
                </div>
            </div>
        </>
    );
};

export default Footer;