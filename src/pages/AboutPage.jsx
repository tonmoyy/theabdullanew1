// src/pages/AboutPage.jsx
import React from 'react';
import GlobalPresence from '../assets/images/Global Presence, Regional Intelligence Right Side.jpg';
import ChairmanPortrait from '../assets/images/Abdulla_Salem.jpeg';

const AboutPage = () => {
    return (
        <>
            {/* Hero – identical placement to EngagementPage */}
            <section
                style={{
                    position: 'relative',
                    height: '50vh',
                    minHeight: '320px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
                    alt="Modern glass architecture"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1,
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 2,
                    }}
                />
                <div
                    style={{
                        position: 'relative',
                        zIndex: 3,
                        padding: '60px 40px',
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
                    <div
                        style={{
                            minHeight: '380px',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(184,152,106,0.25)',
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
                            alt="Aerial night view of a global city – connectivity and ambition"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
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

                <div className="layout-4col" style={{ marginTop: '36px' }}>
                    {[
                        { icon: '', title: 'Real Estate', desc: 'Trophy assets across primary markets' },
                        { icon: '', title: 'Sports Assets', desc: 'Clubs, academies, and sports infrastructure' },
                        { icon: '', title: 'Commercial Ventures', desc: 'Diversified business interests and partnerships' },
                        { icon: '', title: 'Family Investments', desc: 'Multi‑generational capital across asset classes' },
                    ].map((item, idx) => (
                        <div key={idx} style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(184,152,106,0.2)',
                            padding: '20px 24px',
                            borderTop: '2px solid var(--gold)',
                            textAlign: 'center',
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
                    <div
                        style={{
                            minHeight: '500px',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(184,152,106,0.25)',
                        }}
                    >
                        <img
                            src={ChairmanPortrait}
                            alt="Chairman's portrait – formal, high resolution, neutral studio background"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                    <div className="text-block" style={{ padding: '50px 40px' }}>
                        <span className="overline">Leadership</span>
                        <h2 className="h2-section">Abdulla Salem</h2>
                        <div style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 600 }}>
                            Founder &amp; Chairman, Abdulla Capital
                        </div>
                        <div className="pull-quote" style={{ fontSize: '18px' }}>
                            “The firm reflects the values of the man who built it.”
                        </div>
                        <p className="body-copy">
                            Abdulla Salem has spent [X] years at the intersection of private capital, sports investment, and strategic advisory. His career has taken him across [relevant geographies and sectors], and through each chapter, one principle has remained constant: capital works best when it is patient, purposeful, and backed by deep knowledge of the sector it enters.
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
                    <div
                        style={{
                            minHeight: '280px',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                            border: '1px solid rgba(184,152,106,0.25)',
                        }}
                    >
                        <img
                            src={GlobalPresence}
                            alt="Polished stylised world map with glowing golden network connections"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;