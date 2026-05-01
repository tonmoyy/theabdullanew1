import React from 'react';

const PrivacyPolicyPage = () => {
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
                    Privacy Policy
                </h2>
            </div>

            <div style={{ padding: '30px' }}>
                <span className="overline">Legal</span>
                <h2 className="h2-section">Privacy Policy</h2>
                <p style={{ fontSize: '11px', color: 'var(--mid-gray)', margin: '6px 0 20px' }}>Last updated: [Date — to be inserted before publishing]</p>
                <p className="body-copy">Abdulla Capital is committed to protecting the privacy and personal data of individuals who interact with this website or with our firm.</p>
                <hr className="gold-line" />

                <div style={{ display: 'grid', gap: '20px', fontSize: '12.5px', color: '#4a5568', lineHeight: 1.8, marginTop: '20px' }}>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>1. Who We Are</strong><br />
                        Abdulla Capital is the data controller in respect of personal data collected through this website. <span style={{ fontStyle: 'italic', color: '#8a7000' }}>[Registered address and company number to be confirmed.]</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>2. Data We Collect</strong><br />
                        Contact information (name, email, phone, organisation), enquiry data, technical data (IP, browser, device, pages visited), referral information.
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>3. How We Use Your Data</strong><br />
                        To respond to enquiries, assess engagement suitability, comply with legal obligations, and improve website performance via anonymised analytics. We do not use data for unsolicited marketing or sell data to third parties.
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>4. Legal Basis for Processing</strong><br />
                        Consent, performance of a contract or pre-contractual steps, compliance with legal obligation, or our legitimate interests.
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>5. Data Sharing</strong><br />
                        We do not share personal data with third parties except where necessary to deliver a requested service, required by law, or shared with advisors bound by confidentiality obligations.
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>6. Data Retention</strong><br />
                        Retained only as long as necessary for purposes described, or as required by law. Typically 12–24 months after conclusion of potential engagement. <span style={{ color: 'var(--mid-gray)', fontStyle: 'italic' }}>[To be confirmed with legal counsel.]</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>7. Your Rights</strong><br />
                        You may have the right to access, correct, delete, restrict processing, object to processing, or request portability of your data. Contact: privacy@abdullacapital.com <span style={{ color: 'var(--mid-gray)' }}>[to be confirmed]</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>8. Security</strong><br />
                        We implement appropriate technical and organisational measures to protect personal data. Our website uses industry-standard TLS/HTTPS encryption.
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>9. Changes to This Policy</strong><br />
                        We may update this Privacy Policy from time to time. The revised version will be published on this page with an updated effective date.
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicyPage;