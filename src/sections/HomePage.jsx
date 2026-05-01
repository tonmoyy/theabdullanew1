// src/sections/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIntro from './HomeIntro';
import VerticalsSnapshot from './VerticalsSnapshot';
import WhyAbdulla from './WhyAbdulla';
import HomeCTA from './HomeCTA';

const Homepage = () => {
    return (
        <>
            {/* ═══ Title Bar (3D Banner) ═══ */}
            <div
                style={{
                    backgroundColor: 'var(--navy)',
                    paddingTop: '65px',                 // ← raised higher
                    paddingBottom: 0,
                    marginBottom: 0,
                    lineHeight: 0,
                    border: 'none',
                    outline: 'none',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.2)',  // 3D lift
                    borderBottom: '3px solid var(--gold)',                               // gold underline
                }}
            >
                <div
                    style={{
                        width: '100%',
                        padding: '14px 2rem 14px',       // ← text moved left (was 5rem)
                        lineHeight: 'normal',
                        display: 'block',
                        margin: 0,
                        border: 'none',
                        boxShadow: 'none',
                        backgroundColor: 'transparent',   // inherits navy from parent
                    }}
                >
                    <span
                        style={{
                            color: '#ffffff',
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            fontFamily: "'Cormorant Garamond', serif",
                            letterSpacing: '0.03em',
                        }}
                    >
                        Home
                    </span>
                </div>
            </div>

            {/* ═══ Hero Section ═══ */}
            <section
                id="ta-home-page-hero-block"
                className="ta-home-page-hero align-full ta-section-element"
                style={{
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--navy)',
                    margin: 0,
                    padding: 0,
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                    overflow: 'hidden',
                }}
            >
                {/* Background image */}
                <div
                    className="ta-home-page-hero__media"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 1,
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
                        alt="Dark city skyline architectural hero"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />
                    {/* 55% dark overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.55)',
                            zIndex: 2,
                        }}
                    />
                </div>

                {/* Text block */}
                <div
                    className="ta-container-wide js-container"
                    style={{
                        position: 'relative',
                        zIndex: 3,
                        textAlign: 'center',
                        width: '100%',
                        padding: '0 2rem',
                    }}
                >
                    <span
                        className="overline"
                        style={{ color: 'var(--gold-light)', marginBottom: '1rem', display: 'block' }}
                    >
                        Private Investment &amp; Strategic Advisory
                    </span>

                    <h1
                        className="h1-display on-dark"
                        style={{ fontSize: '56px', margin: '0 auto 20px', maxWidth: '700px' }}
                    >
                        Capital with Conviction.
                        <br />
                        <em style={{ color: 'var(--gold-light)' }}>Advisory with Purpose.</em>
                    </h1>

                    <p
                        className="body-copy light"
                        style={{ maxWidth: '560px', margin: '0 auto 30px', fontSize: '1.125rem' }}
                    >
                        Abdulla Capital is a multi‑vertical private investment and advisory firm,
                        built on disciplined capital, long‑term thinking, and a deep understanding
                        of the sectors we serve.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                        <Link to="/verticals" className="btn btn-primary">
                            Explore Our Verticals
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Page sections */}
            <HomeIntro />
            <VerticalsSnapshot />
            <WhyAbdulla />
            <HomeCTA />
        </>
    );
};

export default Homepage;