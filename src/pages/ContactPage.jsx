// src/pages/ContactPage.jsx
import React, { useState, memo } from 'react';
import ContactBG from '../assets/images/Contact Page.jpg';
import '../styles/DealForm.css';

/* ================================================================== */
/*   Top‑level components & data                                      */
/* ================================================================== */

const ArrowSvg = () => (
    <svg viewBox="0 0 24 24">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const StepBar = ({ num, title }) => (
    <div className="sec-bar">
        <div className="sec-step">{num}</div>
        <div className="sec-title">{title}</div>
    </div>
);

/* ---------- Progress Indicator (golden bars) ---------- */
const ProgressIndicator = ({ currentStep, totalSteps }) => {
    return (
        <div className="progress-indicator">
            {Array.from({ length: totalSteps }, (_, i) => (
                <div
                    key={i}
                    className={`progress-bar ${i < currentStep ? 'filled' : ''} ${i === currentStep ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};

const Field = memo(({
                        name, label, required, type = 'text', placeholder,
                        hint, error, value, onChange, options, select, full, ...rest
                    }) => {
    const hasError = Boolean(error);
    const wrapClass = `fieldwrap${full ? ' full' : ''}${hasError ? '' : ' valid'}`;

    if (select) {
        return (
            <div className={wrapClass}>
                <label className="flabel">
                    {label} {required && <span className="star">*</span>}
                </label>
                {hint && <div className="hint">{hint}</div>}
                <select className="fld" name={name} value={value} onChange={onChange}>
                    {options.map(o => (
                        <option key={o} value={o}>{o}</option>
                    ))}
                </select>
                {hasError && <div className="errmsg" style={{ display: 'block' }}>{error}</div>}
            </div>
        );
    }

    if (type === 'textarea') {
        return (
            <div className={wrapClass}>
                <label className="flabel">
                    {label} {required && <span className="star">*</span>}
                </label>
                {hint && <div className="hint">{hint}</div>}
                <textarea
                    className="fld"
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    maxLength={rest.maxLength}
                    rows={4}
                />
                <div className="charcount">
                    <span className="cc">{value.length}</span>/{rest.maxLength}
                </div>
                {hasError && <div className="errmsg" style={{ display: 'block' }}>{error}</div>}
            </div>
        );
    }

    return (
        <div className={wrapClass}>
            <label className="flabel">
                {label} {required && <span className="star">*</span>}
            </label>
            {hint && <div className="hint">{hint}</div>}
            <input
                className="fld"
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                {...rest}
            />
            {hasError && <div className="errmsg" style={{ display: 'block' }}>{error}</div>}
        </div>
    );
});

const DocItem = memo(({ idx, doc, state, errors, onCheck, onFile }) => {
    const hasError = Boolean(errors[`doc_${idx}`]);
    return (
        <div className={`doc-item${doc.required ? ' required' : ''}${hasError ? ' doc-error' : ''}`}>
            <input
                type="checkbox"
                className="doc-cb"
                checked={state.checked}
                onChange={() => onCheck(idx)}
            />
            <div className="doc-main">
                <div className="doc-head">
                    <span className="doc-name">{doc.name}</span>
                    <span className={`doc-tag ${doc.required ? 'req' : 'opt'}`}>
                        {doc.required ? 'Required' : 'Optional'}
                    </span>
                </div>
                <div className="doc-desc">{doc.desc}</div>
                {hasError && (
                    <div className="doc-errmsg">{errors[`doc_${idx}`]}</div>
                )}
            </div>
            <div className="doc-attach">
                <label className="attach-btn">
                    <svg viewBox="0 0 24 24">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                    Attach
                    <input
                        type="file"
                        onChange={e => onFile(idx, e)}
                        accept={doc.accept}
                    />
                </label>
                <span className="file-name">{state.name}</span>
            </div>
        </div>
    );
});

/* ------------------- Static data ------------------- */
const documents = [
    { name: 'Investor / Pitch Deck', desc: 'Company overview, business model, team, market, traction, and ask. Max 20 slides.', required: true, accept: '.pdf,.ppt,.pptx,.key' },
    { name: 'Last 3 Years Financials', desc: 'P&L, Balance Sheet, Cash Flow — audited preferred, management accounts accepted.', required: true, accept: '.pdf,.xls,.xlsx,.csv' },
    { name: 'Current Year Budget / Forecast', desc: 'Current-year projection or internal budget with assumptions.', required: true, accept: '.pdf,.xls,.xlsx,.csv' },
    { name: 'Cap Table', desc: 'Current ownership structure — shareholders, %, any options or warrants.', required: false, accept: '.pdf,.xls,.xlsx,.csv' },
    { name: 'Corporate Structure / Legal Overview', desc: 'Group structure chart, jurisdiction, holding entities, subsidiaries.', required: false, accept: '.pdf,.doc,.docx' },
    { name: 'Any Additional Supporting Material', desc: 'Market research, key contracts, awards, press — anything relevant.', required: false, accept: '' },
];

const countries = [
    'Select…','Afghanistan','Albania','Algeria','Andorra','Angola','Argentina','Armenia',
    'Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus',
    'Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil',
    'Brunei','Bulgaria','Burkina Faso','Cambodia','Cameroon','Canada','Chile','China','Colombia',
    'Costa Rica','Croatia','Cyprus','Czechia','Denmark','Djibouti','Dominican Republic','Ecuador',
    'Egypt','El Salvador','Estonia','Ethiopia','Fiji','Finland','France','Gabon','Georgia',
    'Germany','Ghana','Greece','Guatemala','Guinea','Guyana','Honduras','Hong Kong','Hungary',
    'Iceland','India','Indonesia','Iraq','Ireland','Israel','Italy','Ivory Coast','Jamaica',
    'Japan','Jordan','Kazakhstan','Kenya','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon',
    'Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau','Madagascar','Malawi',
    'Malaysia','Maldives','Mali','Malta','Mauritania','Mauritius','Mexico','Moldova','Monaco',
    'Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nepal','Netherlands',
    'New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway','Oman','Pakistan',
    'Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar',
    'Romania','Rwanda','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore',
    'Slovakia','Slovenia','Somalia','South Africa','South Korea','Spain','Sri Lanka','Sudan',
    'Sweden','Switzerland','Taiwan','Tajikistan','Tanzania','Thailand','Togo',
    'Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Uganda','Ukraine',
    'United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan',
    'Venezuela','Vietnam','Yemen','Zambia','Zimbabwe','Other',
];

const industries = [
    'Select…','Agriculture & Agritech','Automotive','Aviation & Aerospace',
    'Construction & Engineering','Consumer Goods & FMCG','E-commerce & Retail',
    'Education & EdTech','Energy & Utilities','Financial Services & FinTech',
    'Food & Beverage','Healthcare & Pharma','Hospitality & Tourism',
    'Industrials & Manufacturing','Infrastructure','Insurance',
    'Logistics & Supply Chain','Luxury Goods','Media & Entertainment',
    'Mining & Resources','Oil & Gas','Professional Services',
    'Real Estate & PropTech','Renewable Energy','Software / SaaS',
    'Technology & Telecoms','Transportation','Other',
];

/* ================================================================== */
/*   ContactPage (main component)                                      */
/* ================================================================== */

const initialFormState = {
    full_name: '', role: '', email: '', phone: '', source: '',
    company: '', country: '', founded: '', industry: '', website: '', business: '',
    currency: 'USD — US Dollar',
    rev_0: '', ebitda_0: '', growth_0: '',
    rev_1: '', ebitda_1: '', growth_1: '',
    rev_2: '', ebitda_2: '', growth_2: '',
    stake: '', valuation: '', capital: '', timeline: '', why: '', intent: '', intent_other: '',
    folder_link: '',
};

const initialFileStates = Array(6).fill(null).map(() => ({
    file: null, name: '', checked: false,
}));

const TOTAL_STEPS = 5;

const ContactPage = () => {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState(initialFormState);
    const [fileStates, setFileStates] = useState(initialFileStates);
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [completedSteps, setCompletedSteps] = useState(0);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const onFileChange = (idx, e) => {
        const file = e.target.files[0];
        if (file) {
            setFileStates(prev => {
                const updated = [...prev];
                updated[idx] = { ...updated[idx], file, name: file.name };
                return updated;
            });
            if (errors[`doc_${idx}`]) setErrors(prev => ({ ...prev, [`doc_${idx}`]: '' }));
        }
    };

    const toggleDocCheck = idx => {
        setFileStates(prev => {
            const updated = [...prev];
            updated[idx] = { ...updated[idx], checked: !updated[idx].checked };
            return updated;
        });
        if (errors[`doc_${idx}`]) setErrors(prev => ({ ...prev, [`doc_${idx}`]: '' }));
    };

    const handleIntent = value => {
        setForm(prev => ({ ...prev, intent: value, intent_other: value === 'Other' ? prev.intent_other : '' }));
        if (errors.intent) setErrors(prev => ({ ...prev, intent: '' }));
    };

    const validateStep = (step) => {
        const e = {};
        switch (step) {
            case 0:
                if (!form.full_name.trim()) e.full_name = 'Please enter your full name.';
                if (!form.role.trim()) e.role = 'Please enter your role or title.';
                if (!form.email.trim()) e.email = 'Please enter a valid email address.';
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
                break;
            case 1:
                if (!form.company.trim()) e.company = 'Please enter the company name.';
                if (!form.country || form.country === 'Select…') e.country = 'Please select a country.';
                if (!form.industry || form.industry === 'Select…') e.industry = 'Please select an industry.';
                if (!form.business.trim() || form.business.trim().length < 40) e.business = 'Please give us at least a sentence or two (40+ characters).';
                break;
            case 2: break;
            case 3:
                if (!form.stake || form.stake === 'Select…') e.stake = 'Please select a stake.';
                if (!form.why.trim() || form.why.trim().length < 30) e.why = "Please tell us why you're raising now (30+ characters).";
                if (!form.intent) e.intent = 'Please select your intent.';
                break;
            case 4:
                [0, 1, 2].forEach(i => {
                    if (!fileStates[i].checked) e[`doc_${i}`] = 'This document is required. Please confirm you have attached it.';
                    else if (!fileStates[i].file) e[`doc_${i}`] = 'Please attach a file for this required document.';
                });
                if (!consent) e.consent = 'Please confirm before submitting.';
                break;
        }
        return e;
    };

    const nextStep = () => {
        const stepErrors = validateStep(step);
        if (Object.keys(stepErrors).length) {
            setErrors(stepErrors);
            return;
        }
        setErrors({});
        const newStep = step + 1;
        if (newStep < TOTAL_STEPS) {
            setStep(newStep);
            setCompletedSteps(prev => Math.max(prev, newStep));
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const prevStep = () => {
        setErrors({});
        if (step > 0) setStep(s => s - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const submitForm = async () => {
        const stepErrors = validateStep(4);
        if (Object.keys(stepErrors).length) {
            setErrors(stepErrors);
            return;
        }
        setIsSubmitting(true);
        try {
            const fd = new FormData();
            Object.entries(form).forEach(([k, v]) => fd.append(k, v));
            fileStates.forEach((f, i) => {
                if (f.file) fd.append(`file_${i}`, f.file, f.name || f.file.name);
            });
            fd.append('consent', consent);

            const res = await fetch('/.netlify/functions/submit-deal', { method: 'POST', body: fd });
            if (!res.ok) throw new Error(`Server error: ${res.status}`);
            setSubmitted(true);
        } catch (err) {
            console.error(err);
            alert('Sorry, something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setForm(initialFormState);
        setFileStates(initialFileStates);
        setConsent(false);
        setErrors({});
        setSubmitted(false);
        setStep(0);
        setCompletedSteps(0);
    };

    return (
        <>
            {/* ───── HERO SECTION WITH BACKGROUND IMAGE ───── */}
            <section style={{ position: 'relative', height: '50vh', minHeight: 320, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <img src={ContactBG} alt="Contact background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2 }} />
                <div style={{ position: 'relative', zIndex: 3, padding: '60px 40px', maxWidth: '800px' }}>
                    <span className="overline" style={{ color: 'var(--gold-light)' }}>Begin a Conversation</span>
                    <h1 className="h1-display on-dark" style={{ maxWidth: 600 }}>We work with the <em>committed</em>,<br />not the curious.</h1>
                    <div style={{ width: 50, height: 2, background: 'var(--gold)', marginTop: 20, marginBottom: 24 }} />
                    {/* No paragraphs here – only the heading and divider */}
                </div>
            </section>

            {/* ───── NAVY SECTION WITH REMAINING TEXT ───── */}
            <div
                className="preview-section"
                style={{
                    background: 'var(--navy)',
                    color: '#fff',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    padding: '46px 50px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                }}
            >
                <div style={{ maxWidth: 700, fontSize: 14, lineHeight: 1.7, marginTop: 20 }}>
                    <p style={{ marginBottom: 16, color: 'rgba(255,255,255,0.7)' }}>
                        Abdulla Capital is a selective firm. We commit our time, our network, and the full depth of our expertise to a limited number of mandates — and that selectivity begins here. We are not seeking window‑shoppers or speculative enquiries; we are seeking principals, founders, and partners who are genuinely committed to one of the disciplines we practise.
                    </p>
                    <p style={{ marginBottom: 16, color: 'rgba(255,255,255,0.7)' }}>
                        If you are serious about working with us — whether in private equity, M&amp;A advisory, family office, or luxury finance — we ask that you complete the form below in full. The detail you provide is not a formality. It is how we assess fit, prepare properly, and respond with substance rather than a holding reply.
                    </p>
                    <p style={{ marginBottom: 0, color: 'rgba(255,255,255,0.7)' }}>
                        <strong style={{ color: '#ffffff', fontWeight: 600 }}>
                            Complete the form, and our team will review your submission and respond within five business days where there is a fit.
                        </strong>{' '}
                        Every enquiry is treated in the strictest confidence.
                    </p>
                </div>
            </div>

            {/* Contact Form + Details */}
            <section style={{ padding: 0 }}>
                <div className="layout-split contact-mobile-grid" style={{ gap: 0, border: '1px solid var(--light-gray)', alignItems: 'start' }}>
                    {/* LEFT – Multi‑step form */}
                    <div className="contact-left-col" style={{ borderRight: '1px solid var(--light-gray)' }}>
                        <span className="overline">Submit a Deal</span>

                        {!submitted ? (
                            <>
                                <ProgressIndicator currentStep={step} totalSteps={TOTAL_STEPS} />
                                <form className="form-body" id="dealForm" noValidate onSubmit={e => e.preventDefault()}>
                                    {/* ... all step content remains unchanged ... */}
                                    {/* STEP 1 */}
                                    {step === 0 && (
                                        <div className="fs active" data-step="0">
                                            <StepBar num={1} title="Your Contact Details" />
                                            <div className="sec-inner">
                                                <div className="sec-lead">Tell us who you are. Fields marked with a gold <span className="req-key">*</span> are required.</div>
                                                <div className="row">
                                                    <Field name="full_name" label="Full Name" required placeholder="e.g. Ahmed Al-Rashid" hint="Your full legal name, as you'd like us to address you." value={form.full_name} onChange={handleChange} error={errors.full_name} />
                                                    <Field name="role" label="Role / Title" required placeholder="e.g. Founder & CEO" hint="Your position. We prioritise enquiries from decision-makers." value={form.role} onChange={handleChange} error={errors.role} />
                                                </div>
                                                <div className="row">
                                                    <Field name="email" label="Email" required type="email" placeholder="you@company.com" hint="A business email is preferred. This is where we'll reply." value={form.email} onChange={handleChange} error={errors.email} />
                                                    <Field name="phone" label="Phone / WhatsApp" type="tel" placeholder="+971 50 000 0000" hint="Optional. Include country code for a faster response." value={form.phone} onChange={handleChange} />
                                                </div>
                                                <div className="row">
                                                    <Field name="source" label="How did you hear about us?" select full options={['Select…','Referral / personal introduction','Existing client or partner','Website / search','LinkedIn','Event or conference','Press / publication','Other']} hint="Optional — helps us understand how you found us." value={form.source} onChange={handleChange} />
                                                </div>
                                                <div className="fnav">
                                                    <span className="confnote">All information is held in strict confidence.</span>
                                                    <button type="button" className="btn btn-next" onClick={nextStep}>Continue <ArrowSvg /></button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 2 */}
                                    {step === 1 && (
                                        <div className="fs active" data-step="1">
                                            <StepBar num={2} title="Company Snapshot" />
                                            <div className="sec-inner">
                                                <div className="sec-lead">A clear picture of the business behind the opportunity.</div>
                                                <div className="row">
                                                    <Field name="company" label="Company Name" required full placeholder="Legal registered name" hint="The full legal registered name of the entity." value={form.company} onChange={handleChange} error={errors.company} />
                                                </div>
                                                <div className="row">
                                                    <Field name="country" label="Country" required select options={countries} hint="Where the company is incorporated / headquartered." value={form.country} onChange={handleChange} error={errors.country} />
                                                    <Field name="founded" label="Year Founded" type="number" placeholder="e.g. 2015" hint="Optional. Four-digit year, e.g. 2015." value={form.founded} onChange={handleChange} min="1800" max="2030" />
                                                </div>
                                                <div className="row">
                                                    <Field name="industry" label="Industry / Sector" required select options={industries} hint="Pick the closest fit. Choose 'Other' if none apply." value={form.industry} onChange={handleChange} error={errors.industry} />
                                                    <Field name="website" label="Website" type="url" placeholder="https://" hint="Optional. Include https://" value={form.website} onChange={handleChange} />
                                                </div>
                                                <div className="row">
                                                    <Field name="business" label="What does the company do & how does it make money?" required type="textarea" full placeholder="2–3 sentences: product/service, customer type, revenue model" hint="2–3 sentences: product or service, customer type, and revenue model." value={form.business} onChange={handleChange} error={errors.business} maxLength={600} />
                                                </div>
                                                <div className="fnav">
                                                    <button type="button" className="btn btn-back" onClick={prevStep}>Back</button>
                                                    <button type="button" className="btn btn-next" onClick={nextStep}>Continue <ArrowSvg /></button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 3 */}
                                    {step === 2 && (
                                        <div className="fs active" data-step="2">
                                            <StepBar num={3} title="Key Financials" />
                                            <div className="sec-inner">
                                                <div className="sec-lead">Last three financial years. Approximate figures are fine — exact numbers can follow in diligence.</div>
                                                <div className="row">
                                                    <Field name="currency" label="Reporting Currency" select options={['USD — US Dollar','EUR — Euro','GBP — British Pound','AED — UAE Dirham','SAR — Saudi Riyal','QAR — Qatari Riyal','KWD — Kuwaiti Dinar','BHD — Bahraini Dinar','OMR — Omani Rial','PKR — Pakistani Rupee','INR — Indian Rupee','CHF — Swiss Franc','SGD — Singapore Dollar','Other']} hint="The currency your figures below are stated in." value={form.currency} onChange={handleChange} />
                                                </div>
                                                <div className="hint" style={{ marginBottom: 10 }}>Optional, but the latest year's revenue is one of the strongest signals of fit. Use figures like "10M" or "1.4M".</div>
                                                <table className="fin-table">
                                                    <thead><tr><th></th><th>Revenue</th><th>EBITDA</th><th>Growth %</th></tr></thead>
                                                    <tbody>
                                                    {[0,1,2].map(i => (
                                                        <tr key={i}>
                                                            <td className="yr">{`FY ${2022+i}`}</td>
                                                            <td><input type="text" name={`rev_${i}`} placeholder="e.g. 10M" value={form[`rev_${i}`]} onChange={handleChange} /></td>
                                                            <td><input type="text" name={`ebitda_${i}`} placeholder="e.g. 2M" value={form[`ebitda_${i}`]} onChange={handleChange} /></td>
                                                            <td><input type="text" name={`growth_${i}`} placeholder="e.g. 20%" value={form[`growth_${i}`]} onChange={handleChange} /></td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                                <div className="fnav">
                                                    <button type="button" className="btn btn-back" onClick={prevStep}>Back</button>
                                                    <button type="button" className="btn btn-next" onClick={nextStep}>Continue <ArrowSvg /></button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 4 */}
                                    {step === 3 && (
                                        <div className="fs active" data-step="3">
                                            <StepBar num={4} title="Deal Overview" />
                                            <div className="sec-inner">
                                                <div className="sec-lead">The shape of what you're looking for. This is what tells us whether we can help.</div>
                                                <div className="row">
                                                    <Field name="stake" label="Stake on Offer" required select options={['Select…','Minority (under 25%)','Significant minority (25–49%)','Majority (50–74%)','Controlling (75–99%)','Full sale (100%)','Flexible / open to discussion','Not yet decided']} hint="How much of the company is on the table." value={form.stake} onChange={handleChange} error={errors.stake} />
                                                    <Field name="valuation" label="Asking Valuation" placeholder="e.g. $50M EV" hint="Optional. Enterprise value or equity value, if you have one in mind." value={form.valuation} onChange={handleChange} />
                                                </div>
                                                <div className="row">
                                                    <Field name="capital" label="Capital Sought" placeholder="e.g. $15M" hint="Optional. The amount of investment you're raising, if applicable." value={form.capital} onChange={handleChange} />
                                                    <Field name="timeline" label="Ideal Timeline" select options={['Select…','Immediate (0–3 months)','Near-term (3–6 months)','This year (6–12 months)','Exploratory / no fixed timeline']} hint="Optional. When you'd ideally like to transact." value={form.timeline} onChange={handleChange} />
                                                </div>
                                                <div className="row">
                                                    <Field name="why" label="Why are you seeking investment now?" required type="textarea" full placeholder="Growth capital, exit, succession, restructuring…" hint="Be specific — this is the single most important answer. Growth capital, exit, succession, restructuring, etc." value={form.why} onChange={handleChange} error={errors.why} maxLength={700} />
                                                </div>
                                                <div className={`fieldwrap full${errors.intent ? '' : ' valid'}`}>
                                                    <label className="flabel">Seller's Intent <span className="star">*</span></label>
                                                    <div className="hint">Choose the option that best describes your goal.</div>
                                                    <div className="chips">
                                                        {['Growth capital','Full / partial exit','Succession','Operational support','Other'].map(opt => (
                                                            <label key={opt} className={`chip${form.intent === opt ? ' active' : ''}`}>
                                                                <input type="radio" name="intent" value={opt} checked={form.intent === opt} onChange={() => handleIntent(opt)} />
                                                                <span>{opt}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                    {errors.intent && <div className="errmsg" style={{ display: 'block', marginTop: 8 }}>{errors.intent}</div>}
                                                </div>
                                                {form.intent === 'Other' && (
                                                    <div className="fieldwrap full valid" style={{ marginTop: 16 }}>
                                                        <label className="flabel">Please specify</label>
                                                        <input className="fld" name="intent_other" type="text" placeholder="Briefly describe your intent" value={form.intent_other} onChange={handleChange} />
                                                    </div>
                                                )}
                                                <div className="fnav">
                                                    <button type="button" className="btn btn-back" onClick={prevStep}>Back</button>
                                                    <button type="button" className="btn btn-next" onClick={nextStep}>Continue <ArrowSvg /></button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 5 */}
                                    {step === 4 && (
                                        <div className="fs active" data-step="4">
                                            <StepBar num={5} title="Required Documents — Round 1" />
                                            <div className="sec-inner">
                                                <div className="docnote">Please attach the documents below. Items marked <span className="req-word">Required</span> must be submitted to proceed. Optional items strengthen your submission. Accepted formats: PDF, Excel, PowerPoint, Word · max 25 MB per file.</div>
                                                {documents.map((doc, idx) => (
                                                    <DocItem key={idx} idx={idx} doc={doc} state={fileStates[idx]} errors={errors} onCheck={toggleDocCheck} onFile={onFileChange} />
                                                ))}
                                                <div className="folder-note">Can't attach files right now? You can also share a Google Drive, Dropbox or WeTransfer link:</div>
                                                <Field name="folder_link" label="Document Folder Link" type="url" full placeholder="https://drive.google.com/… or Dropbox / WeTransfer link" value={form.folder_link} onChange={handleChange} error={errors.folder_link} />
                                                <div className="consent">
                                                    <input type="checkbox" id="consent" checked={consent} onChange={e => { setConsent(e.target.checked); if (errors.consent) setErrors(prev => ({ ...prev, consent: '' })); }} />
                                                    <label htmlFor="consent"><span>I confirm the information provided is accurate and consent to Abdulla Capital reviewing this submission in confidence in line with its <a href="#">Privacy Policy</a>.</span></label>
                                                </div>
                                                {errors.consent && <div className="errmsg" style={{ display: 'block', marginTop: 6 }}>{errors.consent}</div>}
                                                <div className="fnav">
                                                    <button type="button" className="btn btn-back" onClick={prevStep}>Back</button>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                                                        <span className="confnote">Submission creates no obligation on either party. We respond within 5 business days.</span>
                                                        <button type="button" className="btn btn-submit" onClick={submitForm} disabled={isSubmitting}>
                                                            {isSubmitting ? 'Submitting…' : 'Submit for Round 1 Review'} <ArrowSvg />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </>
                        ) : (
                            <div className="success" style={{ padding: '40px 0' }}>
                                <div className="success-ic"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
                                <h2>Submission received.</h2>
                                <p>Thank you. Your deal has been submitted for first-round review. Our team will assess it carefully and respond within five business days where there is a fit.</p>
                                <p>Everything you've shared is held in the strictest confidence.</p>
                                <div style={{ textAlign: 'center', marginTop: 20 }}>
                                    <button onClick={resetForm} className="btn btn-outline">Submit Another Deal</button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT – Contact Details (unchanged) */}
                    <div className="contact-right-col">
                        <span className="overline">Contact Details</span>
                        <div className="commitment-row" style={{ borderBottom: '1px solid var(--light-gray)', padding: '14px 0', gridTemplateColumns: '130px 1fr' }}>
                            <div className="label">General Enquiries</div>
                            <div style={{ fontSize: '12.5px', color: '#3a4250' }}>
                                info@abdullacapital.com<br />
                            </div>
                        </div>
                        <div className="commitment-row" style={{ borderBottom: '1px solid var(--light-gray)', padding: '14px 0', gridTemplateColumns: '130px 1fr' }}>
                            <div className="label">LinkedIn</div>
                            <div style={{ fontSize: '12.5px', color: '#3a4250' }}><a href="https://www.linkedin.com/company/abdullacapital/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/company/abdullacapital/</a></div>
                        </div>
                        <div className="commitment-row" style={{ borderBottom: '1px solid var(--light-gray)', padding: '14px 0', gridTemplateColumns: '130px 1fr' }}>
                            <div className="label">Registered Office</div>
                            <div style={{ fontSize: '12.5px', color: '#3a4250' }}>United Arab Emirates</div>
                        </div>
                        <div style={{ background: 'var(--section-bg)', border: '1px solid var(--border)', padding: 20, marginTop: 24 }}>
                            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: 8, fontFamily: "'Montserrat', sans-serif" }}>
                                Response Commitment
                            </div>
                            <p style={{ fontSize: 12, color: '#5a6270', lineHeight: 1.7, margin: 0, fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                                All enquiries are acknowledged within <strong>two business days</strong>. Serious enquiries receive a response from a senior member of our team directly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;