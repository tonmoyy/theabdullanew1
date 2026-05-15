// src/pages/PhilosophyPage.jsx
import React from 'react';
import PhilosophyImage from '../assets/images/Our Philosophy Page BG.jpg'

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

    // Reliable, always‑working image URL (Cloudimage mirror of a free stock photo)
    const reliableImageUrl = 'https://picsum.photos/id/104/800/1000?grayscale'; // landscape, contemplative
    // Alternatively, a direct Unsplash image that allows hotlinking:
    // const reliableImageUrl = 'https://images.pexels.com/photos/4737482/pexels-photo-4737482.jpeg?auto=compress&cs=tinysrgb&w=800';

    return (
        <>

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
                    {/* Image container – reliable CDN */}
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
                                // If even this fails, show a dark gradient with text
                                e.target.style.display = 'none';
                                e.target.parentNode.style.background = 'linear-gradient(135deg, #1e2a3a 0%, #0f172a 100%)';
                                e.target.parentNode.innerHTML = '<div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:rgba(255,255,255,0.6); font-family:serif; font-size:14px; text-align:center; padding:20px;">Timeless perspective<br/>Abdulla Capital</div>';
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Rest of the page unchanged (Capital Discipline, Sector Preferences, Evaluation Framework) */}
            {/* ... (keep everything below exactly as in your original) ... */}
        </>
    );
};

export default PhilosophyPage;