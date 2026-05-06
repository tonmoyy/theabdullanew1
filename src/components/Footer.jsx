// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Import the same SVG logo used in Navbar
import logo from '../assets/svg/Logo-AC-BG-Rmvd.svg';

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
                    <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={logo}
                            alt="Abdulla Capital Logo"
                            style={{ height: '32px', width: 'auto', display: 'block' }}
                        />
                    </Link>
                    <p style={{
                        fontSize: '12px',
                        color: 'rgba(255,255,255,0.4)',
                        lineHeight: 1.8,
                        maxWidth: '240px',
                        marginTop: '12px'
                    }}>
                        Private investment and advisory across four specialised verticals.
                        <br />
                        South Asia · GCC · Western Europe.
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

                {/* Column 4 – Engagement with social icons side by side */}
                <div>
                    <h5>Engagement</h5>
                    <ul className="footer-list-reset">
                        <li><Link to="/engagement">Working With Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>
                            <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    style={{ display: 'inline-block', lineHeight: 0 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.202 0 22.225 0z"/>
                                    </svg>
                                </a>
                                {/* Facebook */}
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    style={{ display: 'inline-block', lineHeight: 0 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                {/* Instagram */}
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    style={{ display: 'inline-block', lineHeight: 0 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072c-1.95.089-3.663.567-5.038 1.942C.639 3.389.161 5.102.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.089 1.95.567 3.663 1.942 5.038 1.375 1.375 3.088 1.853 5.038 1.942 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 1.95-.089 3.663-.567 5.038-1.942 1.375-1.375 1.853-3.088 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.089-1.95-.567-3.663-1.942-5.038-1.375-1.375-3.088-1.853-5.038-1.942C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                    </svg>
                                </a>
                            </div>
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