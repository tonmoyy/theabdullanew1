// src/pages/VerticalsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const verticals = [
    {
        id: "private-equity",
        number: "01",
        title: "Private Equity",
        tagline: "We invest in businesses that others overlook — not because they are weak, but because they require patience to understand.",
        description: [
            "Our private equity practice focuses on direct investments in private companies across targeted sectors. We operate as a principal investor, committing capital alongside partners and co-investors with shared conviction.",
            "We look for businesses with durable fundamentals, capable management, and a clear pathway to value creation — businesses that reward long-term thinking and disciplined governance."
        ],
        structures: ["Private Buying", "Public Investing (IPO)", "Buy-Side M&A", "Minority / Majority Takeover"],
        approachCards: [
            { title: "Direct Investment", desc: "Growth or transition stage companies. Co-investment structures with aligned PE/VC partners globally." },
            { title: "Governance & Strategy", desc: "We take an active role in governance, strategy, and financial oversight — not passive capital." },
            { title: "Value Realisation", desc: "Trade sale, secondary, or structured IPO — always timed for maximum value, never for convenience." }
        ],
        partnerText: "We work with business founders seeking a strategic capital partner, PE funds seeking a co-investor with regional intelligence, and holding groups looking to professionalise and grow portfolio companies."
    },
    {
        id: "advisory",
        number: "02",
        title: "Advisory",
        tagline: "The best advice is not what clients want to hear — it is what they need to know.",
        intro: "Our advisory vertical is a specialist M&A and strategic consulting practice, with a leading focus on the global sports industry. We advise ventures and investors on the full lifecycle of a transaction — from initial valuation and mandate origination through to deal closure and post-transaction integration.",
        services: [
            { name: "Valuation of Sports Entities", desc: "Independent, rigorous valuations of sports clubs, academies, manufacturers, and sports-adjacent businesses. Methodologies: DCF, Comparable Market Multiples, Revenue-per-Athlete benchmarking, and Sponsorship Value analysis.", deliverable: "Independent valuation report — board-ready and investor-grade." },
            { name: "Sell-Side Advisory", desc: "We represent sports entities seeking to attract investors, sell a majority stake, or structure a joint venture. Full process: Information Memorandum, financial modelling, investor pitch deck, data room preparation, and targeted investor outreach.", deliverable: "End-to-end transaction management until closure." },
            { name: "Buy-Side Advisory", desc: "We represent investors, PE/VC funds, and high-net-worth individuals seeking to acquire sports-related businesses. Target identification, screening, financial due diligence, negotiation, and deal structuring.", deliverable: "Curated target shortlist and full acquisition support." },
            { name: "Sports-Specific Due Diligence", desc: "Contract review (player, sponsorship, vendor), regulatory compliance, and financial health analysis across all revenue streams — ticketing, broadcasting, sponsorship, and merchandising.", deliverable: "Due diligence report with red-flag summary and risk assessment." },
            { name: "Data Room Setup & Management", desc: "We build and manage secure, investor-ready virtual data rooms using institutional-grade platforms — structured for clarity, completeness, and full transparency.", deliverable: "Fully organised virtual data room, audit-ready." },
            { name: "Investment Asset Evaluation", desc: "Commercial, sporting, and financial assessments of sports assets — including brand value analysis, fan engagement metrics, sponsorship ecosystem mapping, and financial sustainability benchmarking.", deliverable: "Investment evaluation report and comparative benchmarking dashboard." },
            { name: "Business Strategy", desc: "Governance, long-term planning, joint ventures, and restructuring for sports organisations. Practical, implementable, and grounded in real-world market dynamics.", deliverable: "Strategic business plan and governance playbook." },
            { name: "Revenue Development & Financial Management", desc: "Digital monetisation, premium ticketing, sponsorship maximisation, and squad financial planning. Financial frameworks aligning commercial ambition with operational reality.", deliverable: "Financial plan with cash-flow optimisation roadmap." },
            { name: "Squad Planning & Recruitment Strategy", desc: "Data-driven perspective on squad building — player valuation, transfer market strategy, and multi-club ownership (MCO) pathway structuring.", deliverable: "Recruitment strategy report and transfer market analysis." },
            { name: "Academy Development & Geostrategies", desc: "Comprehensive academy blueprints — facility planning, talent identification frameworks, and regional scouting strategies. Sustainable grassroots infrastructure for clubs and investors.", deliverable: "Academy development blueprint with geographic scouting strategy." }
        ],
        also: {
            title: "International Youth Events & Workshops",
            desc: "We design and deliver international youth events — talent showcases, draft events, and technification programmes — alongside professional workshops for coaches, administrators, and sports executives.",
            deliverable: "Event execution plan and workshop curriculum."
        }
    },
    {
        id: "family-office",
        number: "03",
        title: "Family Office",
        tagline: "Preserving wealth is harder than creating it. We take that responsibility seriously.",
        description: [
            "Our family office vertical provides bespoke wealth management, structuring, and strategic advisory services to ultra-high-net-worth principals and multi-generational families. We act not as product sellers, but as trusted advisors."
        ],
        servicesList: [
            "Wealth structure design and governance frameworks",
            "Portfolio strategy and asset allocation across private and public markets",
            "Cross-border estate and succession planning",
            "Investment due diligence for private market opportunities",
            "Philanthropic structuring and legacy planning",
            "Coordination with legal, tax, and regulatory advisors globally"
        ],
        confidentiality: "Every family office engagement is deeply confidential, entirely bespoke, and built around a relationship — not a product."
    },
    {
        id: "luxury-finance",
        number: "04",
        title: "Luxury Finance",
        tagline: "High-value assets deserve high-conviction financing. We provide both.",
        description: [
            "Our luxury finance vertical offers structured financing solutions for high-value tangible and intangible assets. We work with clients across the luxury asset spectrum — from art and jewellery to classic automobiles, private aviation, superyachts, and prime real estate."
        ],
        approachList: [
            "Asset-backed lending structures against luxury and collectible assets",
            "Acquisition finance for high-value lifestyle and investment assets",
            "Portfolio-level financing across luxury asset classes",
            "Bridge and structured solutions for time-sensitive transactions",
            "Asset valuation, authentication, and provenance documentation"
        ],
        assetClasses: [
            { name: "Fine Art & Collectibles", desc: "Paintings, sculptures, rare books, and investment-grade collections" },
            { name: "Watches & Jewellery", desc: "Certified timepieces, rare stones, and estate jewellery" },
            { name: "Classic & Exotic Automobiles", desc: "Investment-grade vehicles, racing provenance, limited editions" },
            { name: "Private Aviation", desc: "Jet acquisition, fractional ownership, and sale-leaseback structures" },
            { name: "Superyachts", desc: "Purchase, financing, and structured disposition" },
            { name: "Prime Real Estate", desc: "Trophy residential, luxury commercial, and hospitality assets" }
        ]
    }
];

const VerticalsPage = () => {
    const { section } = useParams();
    const [activeTab, setActiveTab] = useState(
        section || verticals[0].id
    );

    useEffect(() => {
        if (section) {
            setActiveTab(section);
        }
    }, [section]);

    const currentVertical = verticals.find(v => v.id === activeTab);

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
                    Our Verticals
                </h2>
            </div>

            {/* Hero – Interior with long‑exposure dark city shot */}
            <section style={{
                position: 'relative',
                height: '50vh',
                minHeight: '320px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                <img
                    src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=1200"
                    alt="Long-exposure city lights at night"
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
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    zIndex: 2,
                }} />
                <div style={{
                    position: 'relative',
                    zIndex: 3,
                    padding: '60px 40px',
                }}>
                    <span className="overline" style={{ color: 'var(--gold-light)' }}>Our Verticals</span>
                    <h1 className="h1-display on-dark">Four Disciplines.<br /><em>One Philosophy.</em></h1>
                    <p className="body-copy light" style={{ maxWidth: '600px', marginTop: '16px' }}>
                        Abdulla Capital is structured around four specialised verticals, each operating with distinct expertise but sharing a unified foundation: disciplined capital, deep relationships, and long-term orientation.
                    </p>
                </div>
            </section>

            {/* Sticky Tab Navigation */}
            <div style={{
                position: 'sticky',
                top: '70px',
                zIndex: 10,
                background: '#f0ede8',
                display: 'flex',
                borderBottom: '2px solid var(--border)',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
            }}>
                {verticals.map(v => (
                    <div
                        key={v.id}
                        onClick={() => setActiveTab(v.id)}
                        style={{
                            padding: '16px 30px',
                            fontSize: '11px',
                            fontWeight: activeTab === v.id ? 700 : 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: activeTab === v.id ? 'var(--gold)' : 'var(--mid-gray)',
                            borderBottom: activeTab === v.id ? '3px solid var(--gold)' : '3px solid transparent',
                            cursor: 'pointer',
                            transition: 'color 0.2s, border-bottom 0.2s',
                        }}
                    >
                        {v.number} {v.title}
                    </div>
                ))}
            </div>

            {/* Vertical Content – changes based on active tab */}
            <div>
                {/* Private Equity */}
                {activeTab === 'private-equity' && (
                    <>
                        <section style={{ padding: 0 }}>
                            <div className="layout-split" style={{ gridTemplateColumns: '3fr 2fr', border: '1px solid var(--light-gray)' }}>
                                <div className="text-block" style={{ padding: '50px 40px' }}>
                                    <span className="tag">01 — Private Equity</span>
                                    <h2 className="h2-section">{currentVertical.tagline}</h2>
                                    {currentVertical.description.map((p, i) => (
                                        <p key={i} className="body-copy" style={{ marginTop: i === 0 ? '16px' : 0 }}>{p}</p>
                                    ))}
                                    <div style={{ marginTop: '20px' }}>
                                        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '10px' }}>Investment Structures</div>
                                        {currentVertical.structures.map(s => (
                                            <span key={s} className="inline-tag">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="wf-image-box" style={{ minHeight: '380px' }}>
                                    <span className="icon">📊</span>
                                    <span>Abstract finance visual, data screens, or city skyline.</span>
                                </div>
                            </div>
                        </section>

                        <section className="cream-band" style={{ padding: '30px' }}>
                            <div className="layout-3col">
                                {currentVertical.approachCards.map((card, i) => (
                                    <div key={i} className="col-block" style={{ borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}>
                                        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>
                                            {i === 0 ? 'Our Approach' : i === 1 ? 'Active Ownership' : 'Exit Discipline'}
                                        </div>
                                        <h3 className="h3-sub">{card.title}</h3>
                                        <p className="body-copy" style={{ fontSize: '12px' }}>{card.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div style={{ padding: '24px 30px', background: '#fff', borderTop: '1px solid var(--light-gray)' }}>
                            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '12px' }}>Who We Partner With</div>
                            <p className="body-copy">{currentVertical.partnerText}</p>
                        </div>
                    </>
                )}

                {/* Advisory */}
                {activeTab === 'advisory' && (
                    <>
                        <section className="dark-band" style={{ padding: '50px 40px' }}>
                            <span className="tag" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>02 — Advisory</span>
                            <h2 className="h2-section" style={{ color: 'var(--white)', margin: '16px 0 12px' }}>{currentVertical.tagline}</h2>
                            <p className="body-copy light" style={{ maxWidth: '680px' }}>{currentVertical.intro}</p>
                        </section>

                        <div style={{ padding: '30px', background: '#fff' }}>
                            <div className="service-grid">
                                {currentVertical.services.map((s, i) => (
                                    <div key={i} className="service-item">
                                        <h5>{s.name}</h5>
                                        <p>{s.desc}</p>
                                        <div className="deliverable">{s.deliverable}</div>
                                    </div>
                                ))}
                            </div>

                            {currentVertical.also && (
                                <div style={{ background: 'var(--section-bg)', border: '1px solid var(--border)', padding: '24px', marginTop: '20px' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '10px' }}>Also Within Advisory</div>
                                    <p className="body-copy" style={{ fontSize: '12px' }}><strong>{currentVertical.also.title}:</strong> {currentVertical.also.desc}</p>
                                    <p className="body-copy" style={{ fontSize: '12px', marginTop: '8px' }}><em>Deliverable: {currentVertical.also.deliverable}</em></p>
                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* Family Office */}
                {activeTab === 'family-office' && (
                    <section>
                        <div className="layout-split img-left" style={{ background: 'var(--cream)' }}>
                            <div className="wf-image-box" style={{ minHeight: '420px', background: '#2a3545' }}>
                                <span className="icon" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '50px' }}>🏛️</span>
                                <span style={{ color: 'rgba(255,255,255,0.55)' }}>Aspirational interior: library, estate, or family generational setting.</span>
                            </div>
                            <div className="text-block" style={{ padding: '50px 40px' }}>
                                <span className="tag">03 — Family Office</span>
                                <h2 className="h2-section">{currentVertical.tagline}</h2>
                                {currentVertical.description.map((p, i) => (
                                    <p key={i} className="body-copy" style={{ marginTop: i === 0 ? '14px' : 0 }}>{p}</p>
                                ))}
                                <hr className="gold-line" />
                                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '12px' }}>Services</div>
                                <ul style={{ listStyle: 'none', fontSize: '12.5px', color: '#4a5568', lineHeight: 2.1 }}>
                                    {currentVertical.servicesList.map(s => (
                                        <li key={s}>— {s}</li>
                                    ))}
                                </ul>
                                <hr className="gold-line" />
                                <p className="body-copy" style={{ fontSize: '12px', fontStyle: 'italic', color: 'var(--mid-gray)' }}>{currentVertical.confidentiality}</p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Luxury Finance */}
                {activeTab === 'luxury-finance' && (
                    <>
                        <section className="dark-band" style={{ padding: '50px 40px' }}>
                            <span className="tag" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>04 — Luxury Finance</span>
                            <div className="layout-split img-right" style={{ gridTemplateColumns: '3fr 2fr', gap: '40px', marginTop: '20px', alignItems: 'start' }}>
                                <div>
                                    <h2 className="h2-section" style={{ color: 'var(--white)' }}>{currentVertical.tagline}</h2>
                                    {currentVertical.description.map((p, i) => (
                                        <p key={i} className="body-copy light" style={{ marginTop: i === 0 ? '14px' : 0 }}>{p}</p>
                                    ))}
                                    <div style={{ marginTop: '24px' }}>
                                        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>Our Approach</div>
                                        <ul style={{ listStyle: 'none', fontSize: '12.5px', color: 'rgba(255,255,255,0.65)', lineHeight: 2.1 }}>
                                            {currentVertical.approachList.map(a => (
                                                <li key={a}>— {a}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="wf-image-box" style={{ minHeight: '320px', background: '#1a2535' }}>
                                    <span className="icon" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '44px' }}>💎</span>
                                    <span style={{ color: 'rgba(255,255,255,0.55)' }}>Luxury asset photography: watch, fine art, or classic car. Dark, moody, premium tone.</span>
                                </div>
                            </div>
                        </section>

                        <section style={{ padding: '30px' }}>
                            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '16px' }}>Asset Classes We Cover</div>
                            {currentVertical.assetClasses.map(a => (
                                <div key={a.name} className="asset-row">
                                    <div className="asset-type">{a.name}</div>
                                    <div>{a.desc}</div>
                                </div>
                            ))}
                        </section>
                    </>
                )}
            </div>
        </>
    );
};

export default VerticalsPage;