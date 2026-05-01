// src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
    return (
        <>
            {/* ═══════════════════════════════════════
          Page Header – "About Abdulla Capital"
          (subtle gold lines above and below)
          ═══════════════════════════════════════ */}
            <div
                style={{
                    background: 'var(--navy)',
                    color: 'var(--white)',
                    padding: '20px 40px 20px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    borderTop: '1px solid rgba(184,152,106,0.15)',
                    borderBottom: '1px solid rgba(184,152,106,0.15)',
                }}
            >
                <h2
                    style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '24px',
                        fontWeight: 400,
                        letterSpacing: '0.04em',
                        margin: 0,
                    }}
                >
                    About Abdulla Capital
                </h2>
            </div>

            {/* ═══ Hero – Interior ═══ */}
            <section
                style={{
                    background: 'var(--navy)',
                    padding: '60px 40px',
                    position: 'relative',
                }}
            >
        <span className="overline" style={{ color: 'var(--gold-light)' }}>
          The Firm
        </span>
                <h1 className="h1-display on-dark" style={{ maxWidth: '600px' }}>
                    Founded on Belief.
                    <br />
                    <em>Built on Discipline.</em>
                </h1>
                <div style={{ width: '50px', height: '2px', background: 'var(--gold)', marginTop: '20px' }}></div>
            </section>

            {/* ═══ Opening Statement – Two‑column ═══ */}
            <section style={{ padding: '0' }}>
                <div className="layout-split" style={{ gridTemplateColumns: '3fr 2fr', border: '1px solid var(--light-gray)' }}>
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
                    <div style={{
                        background: 'var(--navy)',
                        padding: '40px 30px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                        <div className="pull-quote on-dark">
                            “We are selective by design. Our engagements are limited so that every client receives our full attention. We do not chase volume — we pursue excellence.”
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ The Platform – Image Right ═══ */}
            <section className="cream-band" style={{ padding: 0 }}>
                <div className="layout-split img-right" style={{ gridTemplateColumns: '3fr 2fr' }}>
                    <div className="text-block" style={{ padding: '50px 40px' }}>
                        <span className="overline">The Platform</span>
                        <h2 className="h2-section">More than an Advisory Firm. A Platform.</h2>
                        <p className="body-copy">
                            Abdulla Capital is a platform that connects capital with opportunity, and opportunity with the expertise to realise it.
                        </p>
                        <p className="body-copy">
                            Whether we are advising on a cross‑border acquisition, structuring a private equity investment, managing a family's generational wealth, or financing a high‑value asset — our approach is consistent: thorough, disciplined, and built on trust.
                        </p>
                    </div>
                    <div className="wf-image-box" style={{ minHeight: '380px' }}>
                        <span className="icon">🌐</span>
                        <span>Abstract network / connectivity visual<br />Premium boardroom, or aerial city view.<br />Portrait crop preferred.</span>
                    </div>
                </div>
            </section>

            {/* ═══ Holding Company & Ecosystem – Dark Band ═══ */}
            <section className="dark-band" style={{ padding: '60px 40px' }}>
                <span className="overline" style={{ color: 'var(--gold-light)' }}>The Ecosystem</span>
                <h2 className="h2-section" style={{ color: 'var(--white)', maxWidth: '600px', marginBottom: '20px' }}>
                    Part of a Broader Platform
                </h2>
                <p className="body-copy light" style={{ maxWidth: '680px' }}>
                    Abdulla Capital operates as the principal advisory and investment arm within a broader holding group. The group's interests span real estate, sports assets, commercial ventures, and family investments across multiple markets.
                </p>
                <p className="body-copy light" style={{ maxWidth: '680px', marginTop: '12px' }}>
                    This positioning gives our clients a rare advantage: access not just to our advisory services, but to a network of affiliated principals, investment relationships, and market intelligence that most standalone firms cannot offer.
                </p>

                <div style={{ display: 'flex', gap: '24px', marginTop: '36px', flexWrap: 'wrap' }}>
                    {[
                        { icon: '🏢', title: 'Real Estate', desc: 'Trophy assets across primary markets' },
                        { icon: '⚽', title: 'Sports Assets', desc: 'Clubs, academies, and sports infrastructure' },
                        { icon: '🤝', title: 'Commercial Ventures', desc: 'Diversified business interests and partnerships' },
                        { icon: '👨‍👩‍👧', title: 'Family Investments', desc: 'Multi‑generational capital across asset classes' },
                    ].map((item, idx) => (
                        <div key={idx} style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(184,152,106,0.2)',
                            padding: '20px 24px',
                            flex: 1,
                            minWidth: '180px',
                            borderTop: '2px solid var(--gold)',
                        }}>
                            <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
                            <div style={{
                                fontFamily: "'Cormorant Garamond', serif",
                                fontSize: '16px',
                                color: 'var(--gold-light)',
                                marginBottom: '6px',
                            }}>{item.title}</div>
                            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══ The Chairman – Image Left, Text Right ═══ */}
            <section style={{ padding: 0 }}>
                <div className="layout-split img-left">
                    <div className="wf-image-box" style={{ minHeight: '500px', background: '#1a2535' }}>
                        <span className="icon" style={{ fontSize: '60px', opacity: 0.3 }}>👤</span>
                        <span style={{ color: 'rgba(255,255,255,0.6)' }}>
              Formal portrait of Chairman.<br />High resolution, aspirational.<br />Dark or neutral studio background.
            </span>
                    </div>
                    <div className="text-block" style={{ padding: '50px 40px' }}>
                        <span className="overline">Leadership</span>
                        <h2 className="h2-section">[Chairman Name]</h2>
                        <div style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 600 }}>
                            Founder &amp; Chairman, Abdulla Capital
                        </div>
                        <div className="pull-quote" style={{ fontSize: '18px' }}>
                            “The firm reflects the values of the man who built it.”
                        </div>
                        <p className="body-copy">
                            [Chairman Name] has spent [X] years at the intersection of private capital, sports investment, and strategic advisory. His career has taken him across [relevant geographies and sectors], and through each chapter, one principle has remained constant: capital works best when it is patient, purposeful, and backed by deep knowledge of the sector it enters.
                        </p>
                        <p className="body-copy">
                            He founded Abdulla Capital with a clear mandate — to create a firm that combines the reach of a global institution with the conviction of a private investor. A firm that would advise the way a principal would invest: carefully, selectively, and always with the long view in mind.
                        </p>
                        <p className="body-copy" style={{ color: 'var(--mid-gray)', fontSize: '12px', fontStyle: 'italic' }}>
                            [Additional biographical detail to be provided by client — achievements, education, affiliations, board positions.]
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ Our Presence – Data Table + Map ═══ */}
            <section className="cream-band" style={{ padding: '50px 30px' }}>
                <div className="layout-split" style={{ gridTemplateColumns: '3fr 2fr', gap: '40px', alignItems: 'start' }}>
                    <div>
                        <span className="overline">Our Reach</span>
                        <h2 className="h2-section" style={{ marginBottom: '24px' }}>
                            Global Presence, Regional Intelligence
                        </h2>
                        <div className="presence-row">
                            <div className="key">Primary Markets</div>
                            <div>
                                <span className="inline-tag">South Asia</span>
                                <span className="inline-tag">GCC</span>
                                <span className="inline-tag">Western Europe</span>
                            </div>
                        </div>
                        <div className="presence-row">
                            <div className="key">Sectors of Focus</div>
                            <div>Private Equity · Family Wealth · Luxury Assets · Strategic Advisory (Sports)</div>
                        </div>
                        <div className="presence-row">
                            <div className="key">Operational Model</div>
                            <div>Asset‑light, relationship‑driven, remote‑first infrastructure</div>
                        </div>
                        <div className="presence-row" style={{ borderBottom: 'none' }}>
                            <div className="key">Investor Network</div>
                            <div>PE/VC funds · Institutional investors · UHNW family offices · Sovereign‑aligned entities</div>
                        </div>
                    </div>
                    <div className="wf-image-box" style={{ minHeight: '280px' }}>
                        <span className="icon">🗺️</span>
                        <span>Stylised world map highlighting<br />South Asia, GCC, W. Europe.<br />Gold accent on active regions.</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;