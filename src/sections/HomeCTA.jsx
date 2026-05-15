// src/sections/HomeCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomeCTA = () => (
    <section style={{ backgroundColor: 'var(--navy)', padding: '5rem 2rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Golden overline */}
            <div style={{
                width: '50px',
                height: '2px',
                background: 'var(--gold)',
                margin: '0 auto 14px',
            }}></div>

            <span style={{
                color: 'var(--gold-light)',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 600,
                display: 'block',
                marginBottom: '1rem',
            }}>
                Next Steps
            </span>

            <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: '2.2rem',
                color: 'var(--white)',
                marginBottom: '1rem',
            }}>
                Explore What We Do
            </h2>

            <p style={{
                fontFamily: "'Montserrat', sans-serif",
                color: 'rgba(255,255,255,0.75)',
                maxWidth: '500px',
                margin: '0 auto 2rem',
                lineHeight: 1.8,
            }}>
                From private equity to strategic advisory, every vertical of Abdulla Capital is built with the same founding discipline.
            </p>

            <Link
                to="/verticals"
                className="btn btn-primary"
                style={{ marginRight: '16px' }}
            >
                View Our Verticals
            </Link>
            <Link
                to="/contact"
                className="btn btn-outline"
            >
                Contact Us
            </Link>
        </div>
    </section>
);

export default HomeCTA;