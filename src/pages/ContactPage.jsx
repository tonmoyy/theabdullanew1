// src/pages/ContactPage.jsx
import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        organisation: '',
        subject: '',
        message: '',
        preferredContact: '',
        howHeard: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }
        if (!formData.subject) newErrors.subject = 'Please select a subject.';
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        if (!formData.preferredContact) newErrors.preferredContact = 'Please select a contact method.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        // Simulate form submission (replace with actual API call)
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    // Reset form for a new enquiry
    const handleReset = () => {
        setFormData({
            fullName: '',
            email: '',
            organisation: '',
            subject: '',
            message: '',
            preferredContact: '',
            howHeard: '',
        });
        setSubmitted(false);
        setErrors({});
    };

    return (
        <>
            {/* Page Header – "Contact" */}
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
                    Contact
                </h2>
            </div>

            {/* Hero – Minimal */}
            <section
                style={{
                    background: 'var(--navy)',
                    padding: '60px 40px',
                    position: 'relative',
                }}
            >
        <span className="overline" style={{ color: 'var(--gold-light)' }}>
          Contact
        </span>
                <h1 className="h1-display on-dark">We respond to every serious enquiry.</h1>
                <p className="body-copy light" style={{ maxWidth: '500px', marginTop: '16px' }}>
                    Whether you are seeking advisory support, exploring an investment
                    opportunity, or simply wish to introduce yourself — we welcome the
                    conversation. All enquiries are acknowledged within two business days.
                </p>
            </section>

            {/* Contact Form + Details */}
            <section style={{ padding: 0 }}>
                <div
                    className="layout-split"
                    style={{
                        gridTemplateColumns: '3fr 2fr',
                        gap: 0,
                        border: '1px solid var(--light-gray)',
                        alignItems: 'start',
                    }}
                >
                    {/* Left – Form */}
                    <div style={{ padding: '40px', borderRight: '1px solid var(--light-gray)' }}>
                        <span className="overline">Send an Enquiry</span>

                        {!submitted ? (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="form-field" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <label style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        style={{
                                            width: '100%',
                                            border: 'none',
                                            background: 'transparent',
                                            outline: 'none',
                                            fontSize: '14px',
                                            color: '#333',
                                        }}
                                    />
                                    {errors.fullName && (
                                        <span style={{ fontSize: '10px', color: '#c0392b', marginTop: '4px' }}>{errors.fullName}</span>
                                    )}
                                </div>

                                <div className="form-field" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <label style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        style={{
                                            width: '100%',
                                            border: 'none',
                                            background: 'transparent',
                                            outline: 'none',
                                            fontSize: '14px',
                                            color: '#333',
                                        }}
                                    />
                                    {errors.email && (
                                        <span style={{ fontSize: '10px', color: '#c0392b', marginTop: '4px' }}>{errors.email}</span>
                                    )}
                                </div>

                                <div className="form-field" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <label style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>Organisation / Company</label>
                                    <input
                                        type="text"
                                        name="organisation"
                                        value={formData.organisation}
                                        onChange={handleChange}
                                        placeholder="Your company (optional)"
                                        style={{
                                            width: '100%',
                                            border: 'none',
                                            background: 'transparent',
                                            outline: 'none',
                                            fontSize: '14px',
                                            color: '#333',
                                        }}
                                    />
                                </div>

                                <div className="form-field" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <label style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>Subject / Nature of Enquiry *</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            border: 'none',
                                            background: 'transparent',
                                            outline: 'none',
                                            fontSize: '14px',
                                            color: '#333',
                                            padding: '2px 0',
                                        }}
                                    >
                                        <option value="">-- Please select --</option>
                                        <option value="Advisory">Advisory</option>
                                        <option value="Private Equity">Private Equity</option>
                                        <option value="Family Office">Family Office</option>
                                        <option value="Luxury Finance">Luxury Finance</option>
                                        <option value="General">General</option>
                                    </select>
                                    {errors.subject && (
                                        <span style={{ fontSize: '10px', color: '#c0392b', marginTop: '4px' }}>{errors.subject}</span>
                                    )}
                                </div>

                                <div className="form-field" style={{ flexDirection: 'column', alignItems: 'flex-start', minHeight: '100px' }}>
                                    <label style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Please describe your enquiry..."
                                        rows={4}
                                        style={{
                                            width: '100%',
                                            border: 'none',
                                            background: 'transparent',
                                            outline: 'none',
                                            fontSize: '14px',
                                            color: '#333',
                                            resize: 'vertical',
                                            flex: 1,
                                        }}
                                    />
                                    {errors.message && (
                                        <span style={{ fontSize: '10px', color: '#c0392b', marginTop: '4px' }}>{errors.message}</span>
                                    )}
                                </div>

                                <div className="form-field" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <label style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>Preferred Contact Method *</label>
                                    <select
                                        name="preferredContact"
                                        value={formData.preferredContact}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            border: 'none',
                                            background: 'transparent',
                                            outline: 'none',
                                            fontSize: '14px',
                                            color: '#333',
                                            padding: '2px 0',
                                        }}
                                    >
                                        <option value="">-- Please select --</option>
                                        <option value="Email">Email</option>
                                        <option value="Phone">Phone</option>
                                        <option value="Either">Either</option>
                                    </select>
                                    {errors.preferredContact && (
                                        <span style={{ fontSize: '10px', color: '#c0392b', marginTop: '4px' }}>{errors.preferredContact}</span>
                                    )}
                                </div>

                                <div className="form-field" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <label style={{ fontSize: '12px', color: '#555', marginBottom: '4px' }}>How Did You Hear About Us?</label>
                                    <select
                                        name="howHeard"
                                        value={formData.howHeard}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            border: 'none',
                                            background: 'transparent',
                                            outline: 'none',
                                            fontSize: '14px',
                                            color: '#333',
                                            padding: '2px 0',
                                        }}
                                    >
                                        <option value="">-- Please select --</option>
                                        <option value="Referral">Referral</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="Event">Event</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div style={{ marginTop: '20px' }}>
                                    <button type="submit" className="btn btn-primary" style={{ display: 'inline-block' }}>
                                        Submit Enquiry
                                    </button>
                                </div>
                                <p
                                    style={{
                                        fontSize: '10.5px',
                                        color: 'var(--mid-gray)',
                                        marginTop: '16px',
                                        lineHeight: 1.7,
                                    }}
                                >
                                    Your enquiry will be treated with complete confidentiality. We do not
                                    share personal data with third parties without your consent. Please
                                    refer to our Privacy Policy for full details.
                                </p>
                            </form>
                        ) : (
                            /* Confirmation Message */
                            <div style={{ background: 'var(--navy)', padding: '30px', marginTop: '20px', borderRadius: '4px' }}>
                                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <p
                                    style={{
                                        fontSize: '14px',
                                        color: 'rgba(255,255,255,0.85)',
                                        lineHeight: 1.7,
                                        textAlign: 'center',
                                        fontStyle: 'italic',
                                    }}
                                >
                                    Thank you for reaching out to Abdulla Capital. A member of our team will be in
                                    touch within two business days.
                                </p>
                                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                    <button
                                        onClick={handleReset}
                                        className="btn btn-outline"
                                        style={{ display: 'inline-block' }}
                                    >
                                        Send Another Enquiry
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right – Contact Details */}
                    <div style={{ padding: '40px' }}>
                        <span className="overline">Contact Details</span>

                        <div
                            className="commitment-row"
                            style={{
                                borderBottom: '1px solid var(--light-gray)',
                                padding: '14px 0',
                                gridTemplateColumns: '130px 1fr',
                            }}
                        >
                            <div className="label">General Enquiries</div>
                            <div style={{ fontSize: '12.5px', color: '#3a4250' }}>
                                info@abdullacapital.com
                                <br />
                                <span style={{ color: 'var(--mid-gray)', fontSize: '11px' }}>
                  [To be confirmed]
                </span>
                            </div>
                        </div>

                        <div
                            className="commitment-row"
                            style={{
                                borderBottom: '1px solid var(--light-gray)',
                                padding: '14px 0',
                                gridTemplateColumns: '130px 1fr',
                            }}
                        >
                            <div className="label">LinkedIn</div>
                            <div style={{ fontSize: '12.5px', color: '#3a4250' }}>
                                [LinkedIn URL — to be confirmed]
                            </div>
                        </div>

                        <div
                            className="commitment-row"
                            style={{
                                borderBottom: '1px solid var(--light-gray)',
                                padding: '14px 0',
                                gridTemplateColumns: '130px 1fr',
                            }}
                        >
                            <div className="label">Registered Office</div>
                            <div style={{ fontSize: '12.5px', color: '#3a4250' }}>
                                [Address — to be confirmed by client]
                            </div>
                        </div>

                        <div
                            className="commitment-row"
                            style={{ padding: '14px 0', gridTemplateColumns: '130px 1fr' }}
                        >
                            <div className="label">Operating Markets</div>
                            <div>
                                <span className="inline-tag">South Asia</span>
                                <span className="inline-tag">GCC</span>
                                <span className="inline-tag">W. Europe</span>
                            </div>
                        </div>

                        {/* Response Commitment */}
                        <div
                            style={{
                                background: 'var(--section-bg)',
                                border: '1px solid var(--border)',
                                padding: '20px',
                                marginTop: '24px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '10px',
                                    fontWeight: 700,
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    color: 'var(--navy)',
                                    marginBottom: '8px',
                                }}
                            >
                                Response Commitment
                            </div>
                            <p style={{ fontSize: '12px', color: '#5a6270', lineHeight: 1.7 }}>
                                All enquiries are acknowledged within <strong>two business days</strong>. Serious
                                enquiries receive a response from a senior member of our team directly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;