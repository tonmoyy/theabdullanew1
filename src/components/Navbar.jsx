// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/Logo-AC-BG-Rmvd.svg';

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
        background: 'var(--navy)',
        transition: 'background-color 0.4s',
        border: 'none',
        boxShadow: 'none',
        outline: 'none',
    };

    const verticals = [
        { label: 'Private Equity', to: '/verticals/private-equity' },
        { label: 'M&A Advisory',       to: '/verticals/advisory'       },
        { label: 'Family Office',  to: '/verticals/family-office'  },
        { label: 'Luxury Finance', to: '/verticals/luxury-finance' },
    ];

    return (
        <>
            {/* ── Desktop Navbar (unchanged) ── */}
            <nav className="nav-bar" style={navStyle}>
                <Link
                    to="/"
                    className="nav-logo"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ display: 'flex', alignItems: 'center' }}
                >
                    <img
                        src={logo}
                        alt="Abdulla Capital Logo"
                        style={{ height: '40px', width: 'auto', display: 'block' }}
                    />
                </Link>

                <div
                    className="nav-links"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '200px',
                        gap: '50px',
                    }}
                >
                    <Link to="/about">About</Link>

                    {/* Vertical Dropdown (unchanged) */}
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
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 style={{
                                     transition: 'transform 0.2s',
                                     transform: verticalsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                     opacity: 0.7,
                                 }}>
                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        {/* Dropdown panel (unchanged) */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: verticalsOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-6px)',
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

                <div style={{ marginLeft: 'auto' }}>
                    <Link
                        to="/contact"
                        className="nav-cta"
                        style={{
                            color: '#ffffff',
                            textShadow: '0 0 8px rgba(255,200,100,0.6), 0 0 16px rgba(255,180,50,0.4)',
                        }}
                    >
                        Contact Us
                    </Link>
                </div>

                <button
                    className="ta-header__open-menu"
                    onClick={toggleMobile}
                    aria-label="Toggle menu"
                    style={{ display: 'none' }}
                >
                    <span></span>
                </button>

                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'var(--gold)',
                        transition: 'opacity 0.3s ease',
                        opacity: scrolled ? 0 : 1,
                        pointerEvents: 'none',
                    }}
                />
            </nav>

            {/* ══════════ MODERN MOBILE MENU ══════════ */}
            <div className={`ta-mobile-header ${mobileOpen ? 'open' : ''}`}
                 style={{
                     position: 'fixed',
                     top: 0,
                     left: 0,
                     width: '100%',
                     height: '100vh',
                     backgroundColor: 'rgba(10, 14, 20, 0.95)',
                     backdropFilter: 'blur(12px)',
                     zIndex: 999,
                     display: mobileOpen ? 'flex' : 'none',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center',
                     transition: 'opacity 0.3s ease',
                 }}
            >
                <button
                    onClick={toggleMobile}
                    aria-label="Close menu"
                    style={{
                        position: 'absolute',
                        top: 24,
                        right: 24,
                        background: 'none',
                        border: 'none',
                        fontSize: '28px',
                        color: 'var(--white)',
                        cursor: 'pointer',
                        lineHeight: 1,
                    }}
                >
                    ✕
                </button>

                <nav style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'clamp(24px, 6vh, 40px)',  /* dynamic spacing */
                    width: '100%',
                    padding: '0 20px',
                }}>
                    {/* Main Links */}
                    <Link to="/about" onClick={toggleMobile}
                          style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: 'clamp(28px, 6vw, 36px)',
                              color: 'var(--white)',
                              textDecoration: 'none',
                              fontWeight: 300,
                              letterSpacing: '0.05em',
                              transition: 'color 0.2s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
                          onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}
                    >
                        About
                    </Link>

                    {/* Verticals Section with Sub-links */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                    }}>
                        <Link to="/verticals" onClick={toggleMobile}
                              style={{
                                  fontFamily: "'Cormorant Garamond', serif",
                                  fontSize: 'clamp(28px, 6vw, 36px)',
                                  color: 'var(--white)',
                                  textDecoration: 'none',
                                  fontWeight: 300,
                                  letterSpacing: '0.05em',
                                  transition: 'color 0.2s',
                              }}
                              onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
                              onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}
                        >
                            Verticals
                        </Link>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px',
                            marginTop: '4px',
                        }}>
                            {verticals.map(v => (
                                <Link key={v.to} to={v.to} onClick={toggleMobile}
                                      style={{
                                          fontFamily: "'Montserrat', sans-serif",
                                          fontSize: '13px',
                                          fontWeight: 500,
                                          color: 'rgba(255,255,255,0.7)',
                                          textDecoration: 'none',
                                          letterSpacing: '0.1em',
                                          textTransform: 'uppercase',
                                          transition: 'color 0.2s',
                                      }}
                                      onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                                >
                                    {v.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link to="/philosophy" onClick={toggleMobile}
                          style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: 'clamp(28px, 6vw, 36px)',
                              color: 'var(--white)',
                              textDecoration: 'none',
                              fontWeight: 300,
                              letterSpacing: '0.05em',
                              transition: 'color 0.2s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
                          onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}
                    >
                        Philosophy
                    </Link>

                    <Link to="/engagement" onClick={toggleMobile}
                          style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontSize: 'clamp(28px, 6vw, 36px)',
                              color: 'var(--white)',
                              textDecoration: 'none',
                              fontWeight: 300,
                              letterSpacing: '0.05em',
                              transition: 'color 0.2s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
                          onMouseLeave={e => e.currentTarget.style.color = 'var(--white)'}
                    >
                        Engagement
                    </Link>

                    {/* Contact CTA */}
                    <Link to="/contact" onClick={toggleMobile}
                          className="nav-cta"
                          style={{
                              marginTop: 'clamp(20px, 4vh, 32px)',
                              background: 'var(--gold)',
                              color: 'var(--navy)',
                              padding: '14px 32px',
                              fontSize: '13px',
                              fontWeight: 700,
                              letterSpacing: '0.14em',
                              textTransform: 'uppercase',
                              textDecoration: 'none',
                              borderRadius: '2px',
                              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                              transition: 'background 0.3s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
                    >
                        Contact Us
                    </Link>
                </nav>
            </div>
        </>
    );
};

export default Navbar;