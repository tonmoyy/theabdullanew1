import React from 'react';

const CookiePolicyPage = () => {
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
                    Cookie Policy
                </h2>
            </div>

            <div style={{ padding: '30px' }}>
                <span className="overline">Legal</span>
                <h2 className="h2-section">Cookie Policy</h2>
                <p style={{ fontSize: '11px', color: 'var(--mid-gray)', margin: '6px 0 20px' }}>Last updated: [Date — to be inserted before publishing]</p>
                <p className="body-copy">
                    This Cookie Policy explains what cookies are, how Abdulla Capital uses them on this website, and how you can manage your preferences.
                </p>
                <hr className="gold-line" />

                <div style={{ marginBottom: '20px', fontSize: '12.5px', color: '#4a5568', lineHeight: 1.8 }}>
                    <strong style={{ color: 'var(--navy)' }}>What Are Cookies?</strong><br />
                    Cookies are small text files placed on your device when you visit a website. They allow the site to remember preferences and actions over time.
                </div>

                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '12px' }}>Types of Cookies We Use</div>

                <table className="cookie-table">
                    <tbody>
                    <tr>
                        <th>Cookie Type</th>
                        <th>Purpose</th>
                        <th>Required?</th>
                    </tr>
                    <tr>
                        <td><strong>Strictly Necessary</strong></td>
                        <td>Essential for website function — page navigation, secure area access. Cannot be disabled.</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td><strong>Analytics & Performance</strong></td>
                        <td>Count visits, measure traffic, understand site interaction. All data anonymised.</td>
                        <td>Optional</td>
                    </tr>
                    <tr>
                        <td><strong>Functional</strong></td>
                        <td>Remember choices (e.g., language preferences) for a more personalised experience.</td>
                        <td>Optional</td>
                    </tr>
                    <tr>
                        <td><strong>Marketing</strong></td>
                        <td>Not currently used. If this changes, this policy will be updated accordingly.</td>
                        <td>N/A</td>
                    </tr>
                    </tbody>
                </table>

                <div style={{ marginTop: '20px', fontSize: '12.5px', color: '#4a5568', lineHeight: 1.8, display: 'grid', gap: '16px' }}>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>Third-Party Cookies</strong><br />
                        We may use Google Analytics, which sets its own cookies for analytics purposes, subject to Google's own privacy and cookie policies.
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>Managing Your Preferences</strong><br />
                        A cookie consent banner will appear on your first visit. You can update preferences at any time via the Cookie Settings link in the footer. Cookies may also be managed directly through browser settings. Note: disabling certain cookies may affect website functionality.
                    </div>
                    <div>
                        <strong style={{ color: 'var(--navy)' }}>Contact</strong><br />
                        privacy@abdullacapital.com <span style={{ color: 'var(--mid-gray)' }}>[to be confirmed]</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CookiePolicyPage;