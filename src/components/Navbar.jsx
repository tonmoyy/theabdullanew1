// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [verticalsOpen, setVerticalsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setVerticalsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMobile = () => setMobileOpen(prev => !prev);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        // ✅ Always navy — no more transparent flicker at page top
        background: 'var(--navy)',
        transition: 'background-color 0.4s',
        border: 'none',
        borderBottom: 'none',
        boxShadow: 'none',
        outline: 'none',
    };

    const verticals = [
        { label: 'Private Equity', to: '/verticals/private-equity' },
        { label: 'Advisory',       to: '/verticals/advisory'       },
        { label: 'Family Office',  to: '/verticals/family-office'  },
        { label: 'Luxury Finance', to: '/verticals/luxury-finance' },
    ];

    return (
        <>
            {/* ═══ WIREFRAME NAV BAR ═══ */}
            <nav className="nav-bar" style={navStyle}>
                <Link
                    to="/"
                    className="nav-logo"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    ABDULLA <span>CAPITAL</span>
                </Link>

                {/* Desktop links — 200px gap after logo, uniform gap between items */}
                <div
                    className="nav-links"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '200px',   /* ✅ 200px gap after Abdulla Capital */
                        gap: '50px',           /* ✅ uniform gap between all nav items */
                    }}
                >
                    <Link to="/about">About</Link>

                    {/* ── Verticals dropdown ── */}
                    <div
                        ref={dropdownRef}
                        style={{ position: 'relative' }}
                        onMouseEnter={() => setVerticalsOpen(true)}
                        onMouseLeave={() => setVerticalsOpen(false)}
                    >
                        <button
                            onClick={() => setVerticalsOpen(prev => !prev)}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                padding: 0,
                                color: 'rgba(255,255,255,0.65)',
                                font: 'inherit',
                                fontSize: '13px',
                                fontWeight: 500,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                            }}
                        >
                            Verticals
                            <svg
                                width="11" height="11" viewBox="0 0 12 12"
                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    transition: 'transform 0.2s',
                                    transform: verticalsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    opacity: 0.7,
                                }}
                            >
                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: verticalsOpen
                                    ? 'translateX(-50%) translateY(0)'
                                    : 'translateX(-50%) translateY(-6px)',
                                backgroundColor: 'var(--navy)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '6px',
                                minWidth: '190px',
                                padding: '8px 0',
                                boxShadow: '0 12px 32px rgba(0,0,0,0.35)',
                                zIndex: 100,
                                opacity: verticalsOpen ? 1 : 0,
                                pointerEvents: verticalsOpen ? 'all' : 'none',
                                transition: 'opacity 0.2s ease, transform 0.2s ease',
                            }}
                        >
                            {verticals.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setVerticalsOpen(false)}
                                    style={{
                                        display: 'block',
                                        padding: '10px 20px',
                                        color: 'rgba(255,255,255,0.75)',
                                        fontSize: '12px',
                                        fontWeight: 500,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        textDecoration: 'none',
                                        whiteSpace: 'nowrap',
                                        transition: 'color 0.2s, background 0.2s',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.color = 'var(--gold-light)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link to="/philosophy">Philosophy</Link>
                    <Link to="/engagement">Engagement</Link>
                </div>

                {/* CTA button – pushed to right */}
                <div style={{ marginLeft: 'auto' }}>
                    <Link to="/contact" className="nav-cta">
                        Contact Us
                    </Link>
                </div>

                {/* Hamburger (visible on mobile only) */}
                <button
                    className="ta-header__open-menu"
                    onClick={toggleMobile}
                    aria-label="Toggle menu"
                    style={{ display: 'none' }}
                >
                    <span></span>
                </button>
            </nav>

            {/* ═══ MOBILE OVERLAY ═══ */}
            <div className={`ta-mobile-header ${mobileOpen ? 'open' : ''}`}>
                <div className="ta-container-wide">
                    <nav className="ta-mobile-header__menu">
                        <li><Link to="/about" onClick={toggleMobile}>About</Link></li>
                        <li><Link to="/verticals" onClick={toggleMobile}>Verticals</Link></li>
                        {verticals.map((item) => (
                            <li key={item.to} style={{ paddingLeft: '1rem' }}>
                                <Link to={item.to} onClick={toggleMobile}>{item.label}</Link>
                            </li>
                        ))}
                        <li><Link to="/philosophy" onClick={toggleMobile}>Philosophy</Link></li>
                        <li><Link to="/engagement" onClick={toggleMobile}>Engagement</Link></li>
                        <li>
                            <Link to="/contact" onClick={toggleMobile} className="nav-cta" style={{ display: 'inline-block' }}>
                                Contact Us
                            </Link>
                        </li>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;