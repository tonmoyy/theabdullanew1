import React from 'react';

const DisclaimerPage = () => {
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
                    Disclaimer
                </h2>
            </div>

            <div style={{ padding: '30px' }}>
                <span className="overline">Legal</span>
                <h2 className="h2-section">Disclaimer</h2>
                <p className="body-copy" style={{ marginTop: '8px', color: 'var(--mid-gray)', fontSize: '12px' }}>
                    Important legal notices regarding the use of this website. Please read carefully.
                </p>
                <hr className="gold-line" />

                <div style={{ display: 'grid', gap: '20px', fontSize: '12.5px', color: '#4a5568', lineHeight: 1.8, marginTop: '20px' }}>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>General Information Only</strong><br />
                        The content on this website is provided for general informational purposes only. It does not constitute financial, investment, legal, or any other form of professional advice.
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>No Offer or Solicitation</strong><br />
                        Nothing on this website constitutes an offer, invitation, or solicitation to buy or sell any financial instrument, security, or investment product.
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>Accuracy of Information</strong><br />
                        While Abdulla Capital endeavours to ensure that website information is accurate, we make no representations regarding completeness, accuracy, reliability, or suitability. We reserve the right to update or remove content at any time without notice.
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>Third-Party Content & Links</strong><br />
                        This website may include links to third-party websites for convenience only. Abdulla Capital does not endorse or take responsibility for any third-party content.
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>Jurisdiction & Regulatory Notice</strong><br />
                        The information on this website is not directed at persons in any jurisdiction where such use would be contrary to law or regulation. <span style={{ color: 'var(--mid-gray)', fontStyle: 'italic' }}>[Insert jurisdiction-specific language — UAE, UK, India — once confirmed with legal counsel.]</span>
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>Limitation of Liability</strong><br />
                        To the fullest extent permitted by law, Abdulla Capital, its principals, employees, contractors, and advisors shall not be liable for any loss or damage arising from reliance on website content.
                    </div>
                    <div style={{ background: 'var(--section-bg)', border: '1px solid var(--border)', padding: '16px' }}>
                        <strong style={{ color: 'var(--navy)' }}>Legal Enquiries:</strong> legal@abdullacapital.com <span style={{ color: 'var(--mid-gray)' }}>[to be confirmed]</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DisclaimerPage;