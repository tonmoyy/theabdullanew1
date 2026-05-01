import React from 'react';

const PhilosophyPage = () => {
    return (
        <>
            {/* Page Header */}
            <div style={{
                background: 'var(--navy)',
                color: 'var(--white)',
                padding: '20px 40px 20px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                borderTop: '1px solid rgba(184,152,106,0.15)',
                borderBottom: '1px solid rgba(184,152,106,0.15)',
            }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', fontWeight: 400, letterSpacing: '0.04em', margin: 0 }}>
                    Our Philosophy
                </h2>
            </div>

            {/* Hero – Interior */}
            <section style={{ background: 'var(--navy)', padding: '60px 40px', position: 'relative' }}>
                <span className="overline" style={{ color: 'var(--gold-light)' }}>How We Think</span>
                <h1 className="h1-display on-dark" style={{ maxWidth: '580px' }}>
                    The principles that guide<br /><em>everything we do.</em>
                </h1>
                <p className="body-copy light" style={{ maxWidth: '580px', marginTop: '16px' }}>
                    Philosophy is not a page on a website. It is the reason decisions get made the way they do — when the pressure is on, when the deal is complex, when the easy path and the right path diverge.
                </p>
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
                    <div className="wf-image-box" style={{ minHeight: '500px' }}>
                        <span className="icon">⏳</span>
                        <span>Timeless, contemplative visual. Compass, chess piece, or long‑exposure light trails. Monochromatic preferred.</span>
                    </div>
                </div>
            </section>

            {/* Capital Discipline – Dark Band */}
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

            {/* Sector Preferences – Cream Band */}
            <section className="cream-band" style={{ padding: '60px 30px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span className="overline">Where We Focus</span>
                    <h2 className="h2-section">Sector Preferences</h2>
                </div>
                <div className="layout-3col">
                    {[
                        { title: 'Private Markets', desc: 'Growth‑stage private companies, cross‑border M&A, and co‑investment opportunities with institutional partners.', icon: '📈' },
                        { title: 'Family Wealth', desc: 'Multigenerational wealth structuring, estate planning, and the institutional management of private family capital.', icon: '🏛️' },
                        { title: 'Luxury Assets', desc: 'Tangible and investment‑grade luxury assets where value requires expert understanding and specialist financing structures.', icon: '💎' }
                    ].map((item, idx) => (
                        <div key={idx} className="col-block" style={{ borderRight: idx < 2 ? '1px solid var(--border)' : 'none', textAlign: 'center' }}>
                            <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                            <h3 className="h3-sub">{item.title}</h3>
                            <p className="body-copy" style={{ fontSize: '12.5px' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Evaluation Framework */}
            <section style={{ padding: 0 }}>
                <div className="layout-split" style={{ gridTemplateColumns: '2fr 3fr', border: '1px solid var(--light-gray)' }}>
                    <div className="text-block" style={{ padding: '50px 40px', background: 'var(--section-bg)', borderRight: '1px solid var(--light-gray)' }}>
                        <span className="overline">Our Framework</span>
                        <h2 className="h2-section">How We Evaluate Opportunities</h2>
                        <p className="body-copy" style={{ marginTop: '16px' }}>
                            Every opportunity — whether an investment, an advisory mandate, or a financing engagement — is evaluated through the same lens. Five questions. No exceptions.
                        </p>
                    </div>
                    <div style={{ padding: '30px 40px' }}>
                        {[
                            { num: '1', title: 'Do we understand the sector?', text: 'If we do not have genuine expertise in a sector, we do not take the mandate. We refer, or we partner — but we do not pretend.' },
                            { num: '2', title: 'Is the team or ownership credible?', text: 'We invest in people as much as in assets. The quality of management, the integrity of principals, and the strength of governance are non‑negotiable criteria.' },
                            { num: '3', title: 'Is the value creation path clear?', text: 'We need to see — with specificity — how value is created, protected, and ultimately realised. Narrative alone does not satisfy our evaluation process.' },
                            { num: '4', title: 'Is the structure right?', text: 'Good ideas in bad structures produce bad outcomes. We pay as much attention to how a deal is structured as to the underlying opportunity itself.' },
                            { num: '5', title: 'Does it meet our long‑term standard?', text: 'Would we be comfortable with this commitment over a five‑ to ten‑year horizon? If the answer is yes, we proceed. If not, we do not — regardless of short‑term pressure.' }
                        ].map((e, i) => (
                            <div key={i} className="eval-item" style={{ borderBottom: i < 4 ? '1px solid var(--light-gray)' : 'none' }}>
                                <div className="eval-num">{e.num}</div>
                                <div>
                                    <strong style={{ fontSize: '13px', color: 'var(--navy)' }}>{e.title}</strong>
                                    <p className="body-copy" style={{ fontSize: '12px', marginTop: '4px' }}>{e.text}</p>
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