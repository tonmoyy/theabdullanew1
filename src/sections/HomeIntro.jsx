// src/sections/HomeIntro.jsx
import React from 'react';

const HomeIntro = () => (
    <section style={{ padding: 0 }}>
        <div
            className="layout-split"
            style={{ gridTemplateColumns: '3fr 2fr', border: '1px solid var(--light-gray)' }}
        >
            {/* Left text block */}
            <div className="text-block" style={{ padding: '50px 40px' }}>
                <span className="overline">Who We Are</span>
                <h2 className="h2-section">
                    Founded not on ambition alone — but on a belief that capital, deployed
                    with care, changes the trajectory of institutions and industries.
                </h2>
                <p className="body-copy" style={{ marginTop: '16px' }}>
                    Abdulla Capital is a private investment and advisory firm operating
                    across four distinct verticals: private equity, advisory, family
                    office, and luxury finance. The firm was established to fill a
                    specific gap in the market — between the generic advice offered by
                    large consulting houses, and the limited reach of smaller boutique
                    firms.
                </p>
                <p className="body-copy">
                    We bring together deep sector expertise, a global investor network,
                    and a commitment to long‑term value, offering clients not just a
                    service, but a genuine strategic partnership.
                </p>
            </div>

            {/* Right pull‑quote */}
            <div
                style={{
                    background: 'var(--navy)',
                    padding: '40px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <div className="pull-quote on-dark">
                    “We are selective by design. Our engagements are limited so that every
                    client receives our full attention. We do not chase volume — we pursue
                    excellence.”
                </div>
            </div>
        </div>
    </section>
);

export default HomeIntro;