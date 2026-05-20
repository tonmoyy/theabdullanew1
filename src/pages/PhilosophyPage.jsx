// src/pages/PhilosophyPage.jsx
import React from 'react';
import PhilosophyImage from '../assets/images/4.1 Investment Philosophy Right Side Photo.jpg';
import PhilosophyBG from '../assets/images/4 Our Philosophy Page BG.jpg';

const PhilosophyPage = () => {
    const imageContainerStyle = {
        minHeight: '500px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        border: '1px solid rgba(184,152,106,0.25)',
        background: '#1a1a2e',
    };

    const reliableImageUrl = 'https://picsum.photos/id/104/800/1000?grayscale';

    return (
        <>
            {/* Hero – with full‑bleed background image (exactly like AboutPage) */}
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
                    src={PhilosophyBG}
                    alt="Philosophy Background"
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
                        How We Think
                    </span>
                    <h1 className="h1-display on-dark" style={{ maxWidth: '580px' }}>
                        The principles that guide<br /><em>everything we do.</em>
                    </h1>
                    <div style={{ width: '50px', height: '2px', background: 'var(--gold)', marginTop: '20px' }}></div>
                    <p className="body-copy light" style={{ maxWidth: '580px', marginTop: '16px' }}>
                        Philosophy is not a page on a website. It is the reason decisions get made the way they do — when the pressure is on, when the deal is complex, when the easy path and the right path diverge.
                    </p>
                </div>
            </section>

            {/* Investment Philosophy */}
            <section style={{ padding: 0 }}>
                <div className="layout-split" style={{ gridTemplateColumns: '3fr 2fr', border: '1px solid var(--light-gray)' }}>
                    <div className="text-block" style={{ padding: '50px 40px' }}>
                        <span className="overline">Investment Philosophy</span>
                        <h2 className="h2-section">We invest where we understand.</h2>
                        <p className="body-copy">
                            We do not spread capital thinly across every sector. Our investments and advisory mandates are concentrated in areas where we have real expertise — sports, private markets, luxury assets, and family wealth. Concentration is not a risk; shallow generalisation is.
                        </p>
                        <div className="philosophy-item" style={{ marginTop: '20px' }}>
                            <h4>We prefer quality over quantity.</h4>
                            <p className="body-copy" style={{ fontSize: '12.5px' }}>
                                We take fewer mandates, not more. This discipline allows us to go deeper on every engagement, to know our clients and their markets thoroughly, and to deliver outcomes that generic firms simply cannot.
                            </p>
                        </div>
                        <div className="philosophy-item">
                            <h4>We value asymmetry.</h4>
                            <p className="body-copy" style={{ fontSize: '12.5px' }}>
                                The best opportunities are rarely obvious at the outset. We look for situations where the risk is well-defined and limited, and the upside is disproportionate — whether in a private equity stake, a sports transaction, or a luxury asset financing structure.
                            </p>
                        </div>
                        <div className="philosophy-item" style={{ borderBottom: 'none' }}>
                            <h4>We think in years, not quarters.</h4>
                            <p className="body-copy" style={{ fontSize: '12.5px' }}>
                                Abdulla Capital is a long-term firm. This is reflected in how we structure deals, how we build relationships, and how we define success. We are not motivated by short-term transaction fees — we are motivated by building a reputation that endures.
                            </p>
                        </div>
                    </div>
                    <div className="wf-image-box" style={imageContainerStyle}>
                        <img
                            src={PhilosophyImage}
                            alt="Contemplative landscape – timeless and strategic"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                e.target.parentNode.style.background = 'linear-gradient(135deg, #1e2a3a 0%, #0f172a 100%)';
                                e.target.parentNode.innerHTML = '<div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.6); font-family:serif; font-size:14px; text-align:center; padding:20px;">Timeless perspective<br/>Abdulla Capital</div>';
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ═══ Capital Discipline (Dark Band) ═══ */}
            <section className="dark-band" style={{ padding: '60px 40px' }}>
                <div className="layout-split" style={{ gridTemplateColumns: '2fr 3fr', gap: '60px', alignItems: 'center' }}>
                    <div className="pull-quote on-dark" style={{ fontSize: '26px', borderLeft: '4px solid var(--gold)' }}>
                        "Capital deployed without discipline is not investment — it is speculation."
                    </div>
                    <div>
                        <span className="overline" style={{ color: 'var(--gold-light)' }}>Capital Discipline</span>
                        <p className="body-copy light">
                            We believe in protecting downside before capturing upside. Our due diligence standards are uncompromising. Before any commitment is made — financial, advisory, or otherwise — we conduct thorough analysis: financial modelling, commercial assessment, regulatory review, and independent verification.
                        </p>
                        <p className="body-copy light" style={{ marginTop: '12px' }}>
                            We are not in a hurry to close. We are in the business of getting it right. Where we advise, we apply the same standards as if the capital were our own. Our clients deserve nothing less.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ Sector Preferences (Cream, Three Columns) ═══ */}
            <section className="cream-band" style={{ padding: '60px 30px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span className="overline">Where We Focus</span>
                    <div className="h2-section">Sector Preferences</div>
                </div>
                <div className="layout-3col">
                    <div className="col-block" style={{ borderRight: '1px solid var(--border)', textAlign: 'center' }}>
                        <div style={{ fontSize: '32px', marginBottom: '12px' }}>📈</div>
                        <div className="h3-sub">Private Markets</div>
                        <p className="body-copy" style={{ fontSize: '12.5px' }}>
                            Growth-stage private companies, cross-border M&A, and co-investment opportunities with institutional partners.
                        </p>
                    </div>
                    <div className="col-block" style={{ borderRight: '1px solid var(--border)', textAlign: 'center' }}>
                        <div style={{ fontSize: '32px', marginBottom: '12px' }}>🏛️</div>
                        <div className="h3-sub">Family Wealth</div>
                        <p className="body-copy" style={{ fontSize: '12.5px' }}>
                            Multigenerational wealth structuring, estate planning, and the institutional management of private family capital.
                        </p>
                    </div>
                    <div className="col-block" style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '32px', marginBottom: '12px' }}>💎</div>
                        <div className="h3-sub">Luxury Assets</div>
                        <p className="body-copy" style={{ fontSize: '12.5px' }}>
                            Tangible and investment-grade luxury assets where value requires expert understanding and specialist financing structures.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ How We Evaluate Opportunities (Split Layout) ═══ */}
            <section style={{ padding: 0 }}>
                <div className="layout-split" style={{ gridTemplateColumns: '2fr 3fr', gap: 0, border: '1px solid #ddd' }}>
                    <div className="text-block" style={{ padding: '50px 40px', background: 'var(--section-bg)', borderRight: '1px solid var(--light-gray)' }}>
                        <span className="overline">Our Framework</span>
                        <div className="h2-section">How We Evaluate Opportunities</div>
                        <p className="body-copy" style={{ marginTop: '16px' }}>
                            Every opportunity — whether an investment, an advisory mandate, or a financing engagement — is evaluated through the same lens. Five questions. No exceptions.
                        </p>
                    </div>
                    <div style={{ padding: '30px 40px' }}>
                        {[
                            { title: 'Do we understand the sector?', text: 'If we do not have genuine expertise in a sector, we do not take the mandate. We refer, or we partner — but we do not pretend.' },
                            { title: 'Is the team or ownership credible?', text: 'We invest in people as much as in assets. The quality of management, the integrity of principals, and the strength of governance are non-negotiable criteria.' },
                            { title: 'Is the value creation path clear?', text: 'We need to see — with specificity — how value is created, protected, and ultimately realised. Narrative alone does not satisfy our evaluation process.' },
                            { title: 'Is the structure right?', text: 'Good ideas in bad structures produce bad outcomes. We pay as much attention to how a deal is structured as to the underlying opportunity itself.' },
                            { title: 'Does it meet our long-term standard?', text: 'Would we be comfortable with this commitment over a five- to ten-year horizon? If the answer is yes, we proceed. If not, we do not — regardless of short-term pressure.' }
                        ].map((item, idx) => (
                            <div key={idx} className="eval-item" style={{ borderBottom: idx === 4 ? 'none' : '1px solid var(--light-gray)' }}>
                                <div className="eval-num">{idx + 1}</div>
                                <div>
                                    <strong style={{ fontSize: '13px', color: 'var(--navy)' }}>{item.title}</strong>
                                    <p className="body-copy" style={{ fontSize: '12px', marginTop: '4px' }}>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PhilosophyPage;