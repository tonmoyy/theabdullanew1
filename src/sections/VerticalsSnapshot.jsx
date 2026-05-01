// src/sections/VerticalsSnapshot.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const cards = [
    {
        icon: '📈',
        title: 'Private Equity',
        desc: 'Direct investments in private businesses with strong fundamentals and long‑term value creation potential.',
    },
    {
        icon: '⚖️',
        title: 'Advisory',
        desc: 'Specialised M&A, transaction, and strategic advisory — with a dedicated focus on the global sports industry.',
    },
    {
        icon: '🏛️',
        title: 'Family Office',
        desc: 'Bespoke wealth structuring, preservation, and growth strategies for principals and ultra‑high‑net‑worth families.',
    },
    {
        icon: '💎',
        title: 'Luxury Finance',
        desc: 'Structured financing solutions for high‑value assets, collections, and lifestyle investments in the premium segment.',
    },
];

const VerticalsSnapshot = () => (
    <section className="dark-band" style={{ padding: '60px 30px' }}>
        {/* Section heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="overline" style={{ color: 'var(--gold-light)' }}>
                What We Do
            </span>
            <h2 className="h2-section" style={{ color: 'var(--white)' }}>
                Four Disciplines. One Philosophy.
            </h2>
        </div>

        {/* Four cards – responsive grid via layout-4col */}
        <div className="layout-4col">
            {cards.map((card, idx) => (
                <div
                    key={idx}
                    style={{
                        background: 'rgba(255,255,255,0.03)',
                        borderTop: '3px solid var(--gold)',
                        padding: '2.5rem 1.5rem',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                    }}
                >
                    <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{card.icon}</div>
                    <h3
                        style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            color: 'var(--gold-light)',
                            fontSize: '1.4rem',
                            fontWeight: 400,
                            marginBottom: '0.8rem',
                        }}
                    >
                        {card.title}
                    </h3>
                    <p
                        style={{
                            fontSize: '0.8rem',
                            color: 'rgba(255,255,255,0.6)',
                            lineHeight: 1.7,
                            marginBottom: '1.5rem',
                            flex: 1,
                        }}
                    >
                        {card.desc}
                    </p>
                    <Link
                        to="/verticals"
                        style={{
                            fontSize: '0.65rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--gold)',
                            fontWeight: 700,
                            textDecoration: 'none',
                            marginTop: 'auto',
                        }}
                    >
                        Explore →
                    </Link>
                </div>
            ))}
        </div>
    </section>
);

export default VerticalsSnapshot;