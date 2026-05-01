import React, { useState } from 'react';

const sections = [
    { id: 'organisational-structure', label: 'Organisational Structure' },
    { id: 'conflict-of-interest', label: 'Conflict of Interest Policy' },
    { id: 'confidentiality', label: 'Confidentiality' },
    { id: 'professional-standards', label: 'Professional Standards' },
    { id: 'regulatory-compliance', label: 'Regulatory Compliance' },
    { id: 'anti-bribery', label: 'Anti-Bribery & Anti-Corruption' },
    { id: 'governance-enquiries', label: 'Governance Enquiries' },
];

const GovernancePage = () => {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    return (
        <>
            {/* Page Header */}
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
                    Governance
                </h2>
            </div>

            {/* Main layout – left sidebar, right content */}
            <div className="layout-split" style={{ gridTemplateColumns: '220px 1fr', border: '1px solid var(--light-gray)', alignItems: 'start' }}>
                {/* Left sidebar */}
                <div style={{ background: 'var(--section-bg)', padding: '30px 20px', borderRight: '1px solid var(--light-gray)', minHeight: '600px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '16px' }}>Contents</div>
                    <ul style={{ listStyle: 'none', fontSize: '12px', color: 'var(--mid-gray)', lineHeight: 2.4 }}>
                        {sections.map((sec) => (
                            <li
                                key={sec.id}
                                onClick={() => setActiveSection(sec.id)}
                                style={{
                                    cursor: 'pointer',
                                    color: activeSection === sec.id ? 'var(--gold)' : 'var(--mid-gray)',
                                    fontWeight: activeSection === sec.id ? 600 : 400,
                                    transition: 'color 0.2s',
                                }}
                            >
                                {activeSection === sec.id ? '→ ' : ''}{sec.label}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right content area */}
                <div style={{ padding: '40px' }}>
                    <span className="overline">Governance</span>
                    <h2 className="h2-section">Our Standards for How We Operate</h2>
                    <p className="body-copy" style={{ marginTop: '14px' }}>
                        Abdulla Capital is committed to the highest standards of governance, ethics, and professional conduct across all its verticals and client relationships.
                    </p>

                    <hr className="gold-line" style={{ margin: '24px 0' }} />

                    {activeSection === 'organisational-structure' && (
                        <div style={{ marginBottom: '20px' }}>
                            <h3 className="h3-sub">Organisational Structure</h3>
                            <p className="body-copy" style={{ fontSize: '12.5px' }}>
                                Abdulla Capital operates under the oversight of its Chairman and founding principal, who retains ultimate accountability for all strategic decisions, mandates, and client relationships.
                            </p>
                        </div>
                    )}

                    {activeSection === 'conflict-of-interest' && (
                        <div style={{ marginBottom: '20px' }}>
                            <h3 className="h3-sub">Conflict of Interest Policy</h3>
                            <p className="body-copy" style={{ fontSize: '12.5px' }}>
                                We are committed to identifying and managing conflicts of interest at all times. Where a potential conflict arises, we disclose this to all affected parties promptly and take appropriate steps to resolve or manage it. We do not accept undisclosed commissions or referral fees.
                            </p>
                        </div>
                    )}

                    {activeSection === 'confidentiality' && (
                        <div style={{ marginBottom: '20px' }}>
                            <h3 className="h3-sub">Confidentiality</h3>
                            <p className="body-copy" style={{ fontSize: '12.5px' }}>
                                All client information, mandate details, and commercially sensitive data shared with Abdulla Capital are treated as strictly confidential. This obligation applies to all members of our team and to contracted experts and third-party advisors.
                            </p>
                        </div>
                    )}

                    {activeSection === 'professional-standards' && (
                        <div style={{ marginBottom: '20px' }}>
                            <h3 className="h3-sub">Professional Standards</h3>
                            <p className="body-copy" style={{ fontSize: '12.5px' }}>
                                Abdulla Capital expects all parties representing or working with the firm to adhere to the highest professional and ethical standards: honest representation of qualifications, transparent communication with clients, and full compliance with applicable laws and regulations.
                            </p>
                        </div>
                    )}

                    {activeSection === 'regulatory-compliance' && (
                        <div style={{ marginBottom: '20px' }}>
                            <h3 className="h3-sub">Regulatory Compliance</h3>
                            <p className="body-copy" style={{ fontSize: '12.5px' }}>
                                Abdulla Capital operates in compliance with applicable laws and regulations across all jurisdictions in which it advises. Where specific regulatory requirements apply, the firm engages qualified legal and regulatory partners to ensure full compliance.
                            </p>
                        </div>
                    )}

                    {activeSection === 'anti-bribery' && (
                        <div style={{ marginBottom: '20px' }}>
                            <h3 className="h3-sub">Anti-Bribery & Anti-Corruption</h3>
                            <p className="body-copy" style={{ fontSize: '12.5px' }}>
                                Abdulla Capital maintains a zero-tolerance policy towards bribery, corruption, and any form of improper payment. All business is conducted on the basis of merit, reputation, and transparent commercial terms.
                            </p>
                        </div>
                    )}

                    {activeSection === 'governance-enquiries' && (
                        <div style={{ background: 'var(--section-bg)', border: '1px solid var(--border)', padding: '20px', marginBottom: '20px' }}>
                            <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '8px' }}>Governance Enquiries</div>
                            <p style={{ fontSize: '12px', color: '#5a6270' }}>
                                governance@abdullacapital.com <span style={{ color: 'var(--mid-gray)' }}>[to be confirmed]</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default GovernancePage;