// src/sections/HomeCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomeCTA = () => (
    <section style={{ backgroundColor: 'var(--navy)', padding: '5rem 2rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Overline */}
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

            {/* Heading */}
            <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: '2.2rem',
                color: 'var(--white)',
                marginBottom: '1rem',
            }}>
                Explore What We Do
            </h2>

            {/* Description */}
            <p style={{
                fontFamily: "'Montserrat', sans-serif",
                color: 'rgba(255,255,255,0.75)',
                maxWidth: '500px',
                margin: '0 auto 2rem',
                lineHeight: 1.8,
            }}>
                From private equity to strategic advisory, every vertical of Abdulla Capital is built with the same founding discipline.
            </p>

            {/* CTA Buttons */}
            <Link
                to="/verticals"
                className="btn btn-primary"   // uses wireframe classes (gold bg, navy text)
                style={{ marginRight: '16px' }}
            >
                View Our Verticals
            </Link>
            <Link
                to="/contact"
                className="btn btn-outline"   // transparent with white border
            >
                Contact Us
            </Link>
        </div>
    </section>
);

export default HomeCTA;