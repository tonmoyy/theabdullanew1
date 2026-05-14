// src/sections/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// HomeIntro removed to eliminate duplicate "Who We Are"
import VerticalsSnapshot from './VerticalsSnapshot';
import WhyAbdulla from './WhyAbdulla';
import HomeCTA from './HomeCTA';
import HomePage from '../assets/images/Homepage.jpg'


const Homepage = () => {
    const navbarHeight = 5; // Adjust to match your navbar's actual content height

    return (
        <div style={{ paddingTop: `${navbarHeight}px`, backgroundColor: 'var(--navy)' }}>
            {/* Hero section starts directly below navbar */}
            <section
                id="ta-home-page-hero-block"
                className="ta-home-page-hero align-full ta-section-element"
                style={{
                    position: 'relative',
                    minHeight: `calc(100vh - ${navbarHeight}px)`,
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
                        src={HomePage}


                        alt="Dark city skyline architectural hero"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />
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

            {/* ═══ Who We Are – Two‑column (both sides background #F5F0E8) ═══ */}
            <section style={{ padding: 0, backgroundColor: '#F5F0E8' }}>
                <div className="layout-split" style={{ gridTemplateColumns: '3fr 2fr', border: '1px solid var(--light-gray)' }}>
                    {/* Left text block */}
                    <div className="text-block" style={{ padding: '50px 40px' }}>
                        <span className="overline">Who We Are</span>
                        <h2 className="h2-section">
                            Founded not on ambition alone — but on a belief that capital, deployed with care, changes the trajectory of institutions and industries.
                        </h2>
                        <p className="body-copy" style={{ marginTop: '16px' }}>
                            Abdulla Capital is a private investment and advisory firm operating across four distinct verticals: private equity, advisory, family office, and luxury finance. The firm was established to fill a specific gap in the market — between the generic advice offered by large consulting houses, and the limited reach of smaller boutique firms.
                        </p>
                        <p className="body-copy">
                            We bring together deep sector expertise, a global investor network, and a commitment to long‑term value, offering clients not just a service, but a genuine strategic partnership.
                        </p>
                    </div>

                    {/* Right pull‑quote – now also #F5F0E8 with dark text */}
                    <div style={{
                        backgroundColor: '#F5F0E8',  // changed from var(--navy)
                        padding: '40px 30px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <div style={{
                            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                            fontFamily: "'Cormorant Garamond', serif",
                            fontWeight: 500,
                            lineHeight: 1.4,
                            color: 'var(--navy)',  // dark text on light background
                            borderLeft: '3px solid var(--gold)',
                            paddingLeft: '1.5rem',
                            fontStyle: 'italic',
                        }}>
                            “We are selective by design. Our engagements are limited so that every client receives our full attention. We do not chase volume — we pursue excellence.”
                        </div>
                    </div>
                </div>
            </section>

            {/* Remaining original sections (HomeIntro removed) */}
            <VerticalsSnapshot />
            <WhyAbdulla />
            <HomeCTA />
        </div>
    );
};

export default Homepage;