// src/sections/WhyAbdulla.jsx
import React from 'react';

const differentiators = [
    {
        tag: 'Sector Depth',
        text: 'We do not advise on everything. We focus on the areas we understand most — and in those areas, we go deeper than anyone.',
    },
    {
        tag: 'Asset‑Light, Relationship‑Heavy',
        text: 'Our model is built for precision, not scale. We bring the right expertise to the right deal at the right moment.',
    },
    {
        tag: 'Global Reach, Regional Intelligence',
        text: 'With active engagement across Asia, the Middle East, and Europe, we combine a global investor network with the nuance of regional market knowledge.',
    },
    {
        tag: 'Long‑Term Orientation',
        text: 'We measure success in decades, not deal cycles. Every commitment we make reflects that view.',
    },
];

const WhyAbdulla = () => (
    <section className="cream-band" style={{ padding: '60px 30px' }}>
        <div className="layout-split" style={{ gridTemplateColumns: '2fr 3fr', gap: '60px' }}>
            {/* Left column – heading (40% width) */}
            <div style={{ padding: '20px 0' }}>
                <span className="overline">Our Edge</span>
                <h2 className="h2-section" style={{ fontSize: '38px', lineHeight: 1.15 }}>
                    Why
                    <br />
                    <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Abdulla Capital</em>
                </h2>
                <p className="body-copy" style={{ marginTop: '16px' }}>
                    We are selective by design. Our model is built for depth, not breadth — and our results reflect that.
                </p>
            </div>

            {/* Right column – differentiator items (60% width) */}
            <div>
                {differentiators.map((item, idx) => (
                    <div className="philosophy-item" key={idx}>
                        <span className="tag">{item.tag}</span>
                        <p className="body-copy">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default WhyAbdulla;