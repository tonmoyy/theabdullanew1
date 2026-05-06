// src/sections/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIntro from './HomeIntro';
import VerticalsSnapshot from './VerticalsSnapshot';
import WhyAbdulla from './WhyAbdulla';
import HomeCTA from './HomeCTA';

const Homepage = () => {
    // Navbar content height (without the golden line, because the line is absolutely positioned)
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
                        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
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

            {/* Remaining sections */}
            <HomeIntro />
            <VerticalsSnapshot />
            <WhyAbdulla />
            <HomeCTA />
        </div>
    );
};

export default Homepage;