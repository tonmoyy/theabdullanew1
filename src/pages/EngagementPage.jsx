// src/pages/EngagementPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EngagementPage = () => {
    return (
        <>
            {/* Page Header – "Working With Us" */}
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
                    Working With Us
                </h2>
            </div>

            {/* Hero – Interior (50vh) */}
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
                {/* Background image – abstract / dark texture */}
                <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
                    alt="Dark abstract background"
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
                {/* Dark overlay 50% */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 2,
                    }}
                />
                {/* Content */}
                <div
                    style={{
                        position: 'relative',
                        zIndex: 3,
                        padding: '60px 40px',
                    }}
                >
          <span className="overline" style={{ color: 'var(--gold-light)' }}>
            Engagement
          </span>
                    <h1 className="h1-display on-dark">Working With Us</h1>
                    <p className="body-copy light" style={{ maxWidth: '580px', marginTop: '16px' }}>
                        Abdulla Capital is not a firm that works with everyone. This is a deliberate choice — not an exclusionary one. Our clients receive our full attention, our full network, and the full depth of our expertise. That is only possible when we are selective.
                    </p>
                </div>
            </section>

            {/* Who We Work With – Three Cards */}
            <section className="cream-band" style={{ padding: '60px 30px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span className="overline">Our Clients</span>
                    <h2 className="h2-section">Who We Work With</h2>
                </div>
                <div className="layout-3col">
                    <div className="card" style={{ margin: '0 8px' }}>
                        <div className="card-icon">🏦</div>
                        <h4>Investors & PE/VC Funds</h4>
                        <p>
                            Institutional and private investors seeking sports, private equity, or luxury asset opportunities — we provide buy‑side advisory, target identification, due diligence, and deal structuring.
                        </p>
                    </div>
                    <div className="card" style={{ margin: '0 8px' }}>
                        <div className="card-icon">👨‍👩‍👧‍👦</div>
                        <h4>Ultra‑High‑Net‑Worth Individuals & Families</h4>
                        <p>
                            Principals and families requiring bespoke wealth management, succession planning, or private market investment advisory — with total discretion and deep personalisation.
                        </p>
                    </div>
                    <div className="card" style={{ margin: '0 8px' }}>
                        <div className="card-icon">🎨</div>
                        <h4>Luxury Asset Holders & Collectors</h4>
                        <p>
                            Private individuals and estates requiring specialist financing solutions for high‑value collections, trophy assets, or luxury lifestyle investments.
                        </p>
                    </div>
                </div>
            </section>

            {/* How the Process Works – 5 Steps */}
            <section style={{ padding: 0 }}>
                <div className="layout-split" style={{ gridTemplateColumns: '2fr 3fr', gap: 0, border: '1px solid var(--light-gray)' }}>
                    {/* Left side – navy panel */}
                    <div className="text-block" style={{ padding: '50px 40px', background: 'var(--navy)' }}>
                        <span className="overline" style={{ color: 'var(--gold-light)' }}>The Process</span>
                        <h2 className="h2-section" style={{ color: 'var(--white)' }}>
                            A Direct, Transparent, and Efficient Engagement Process.
                        </h2>
                        <p className="body-copy light" style={{ marginTop: '16px' }}>
                            All enquiries are treated with complete confidentiality. We believe both parties should understand — clearly and early — whether there is a genuine fit.
                        </p>
                    </div>
                    {/* Right side – 5 steps */}
                    <div style={{ padding: '30px 40px' }}>
                        {[
                            { num: '01', title: 'Initial Enquiry', text: 'All engagements begin with a direct introduction — through our Contact page or via a mutual contact. Provide a brief overview of your situation and what you are seeking from an advisory relationship.' },
                            { num: '02', title: 'Preliminary Conversation', text: 'A member of our team will respond to arrange an initial conversation. This is not a sales process — it is an opportunity for both parties to understand whether there is a genuine fit.' },
                            { num: '03', title: 'Mandate Assessment', text: 'If there is mutual interest, we conduct a structured assessment: sector fit, complexity, scope, and timeline. We are direct about what we can and cannot deliver.' },
                            { num: '04', title: 'Formal Engagement', text: 'Engagements are formalised through a clear and transparent advisory agreement. Terms, scope, deliverables, and timelines are agreed in writing before work begins.' },
                            { num: '05', title: 'Ongoing Partnership', text: 'We do not disappear after signing. Our clients receive regular updates, honest communication, and consistent access to our team and network throughout the mandate — and beyond.' }
                        ].map((step, i) => (
                            <div key={i} className="step-block" style={{ borderBottom: i < 4 ? '1px solid var(--light-gray)' : 'none' }}>
                                <div className="step-num">{step.num}</div>
                                <div>
                                    <strong style={{ color: 'var(--navy)', fontSize: '14px' }}>{step.title}</strong>
                                    <p className="body-copy" style={{ fontSize: '12.5px', marginTop: '6px' }}>
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Commitments – Dark Band */}
            <section className="dark-band" style={{ padding: '60px 40px' }}>
                <span className="overline" style={{ color: 'var(--gold-light)' }}>Our Commitments</span>
                <h2 className="h2-section" style={{ color: 'var(--white)', marginBottom: '30px' }}>
                    What You Can Expect From Us
                </h2>
                <div style={{ borderTop: '1px solid rgba(184,152,106,0.2)' }}>
                    {[
                        { label: 'Confidentiality', text: 'All enquiries and engagements are treated with absolute discretion. We do not disclose client identities or mandate details without explicit consent.' },
                        { label: 'Independence', text: 'We provide advice in the interest of our clients alone. We do not take undisclosed commissions or referral fees that could compromise our independence.' },
                        { label: 'Transparency', text: 'We are honest about what we know, what we do not know, and what we can realistically deliver. Overpromising is not in our vocabulary.' },
                        { label: 'Responsiveness', text: 'Our clients have direct access to senior leadership — not intermediaries. We respond promptly and we keep our commitments.' },
                        { label: 'Quality', text: 'Every deliverable we produce — every report, model, or recommendation — meets the standard we would apply if the capital were our own.' }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="commitment-row"
                            style={{
                                borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                                padding: '18px 0'
                            }}
                        >
                            <div className="label" style={{ color: 'var(--gold)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em' }}>
                                {item.label}
                            </div>
                            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner">
                <span className="overline" style={{ color: 'var(--gold-light)' }}>Get in Touch</span>
                <h2 className="h2-section" style={{ color: 'var(--white)', marginBottom: '12px' }}>
                    Begin a Conversation
                </h2>
                <p className="body-copy light" style={{ maxWidth: '500px', margin: '0 auto 24px' }}>
                    If you have an opportunity to explore, or are seeking a strategic partner with the expertise and reach to make a meaningful difference — we would like to hear from you.
                </p>
                <Link to="/contact" className="btn btn-primary">
                    Contact Us
                </Link>
            </section>
        </>
    );
};

export default EngagementPage;