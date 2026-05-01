// Footerr.jsx
import { logoabdulla6 } from "../assets";

const Footerr = () => {
    return (
        <>
            <style>
                {`
          /* Force remove bullets from footer lists – overrides global theme */
          .footer-list-reset,
          .footer-list-reset li {
            list-style: none !important;
            list-style-type: none !important;
            padding-left: 0 !important;
            margin-left: 0 !important;
          }
        `}
            </style>
            <footer className="bg-[#010127] text-[#fcf9f5] font-['Inter','Manrope',sans-serif]">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
                    {/* Top: Logo + Navigation */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a href="/" aria-label="home">
                                <img
                                    width={360}
                                    height={63}
                                    src={logoabdulla6}
                                    alt="TheAbdullaCapital"
                                    className="w-full max-w-[260px] lg:max-w-[300px] h-auto"
                                    loading="lazy"
                                />
                            </a>
                        </div>

                        {/* Navigation Columns */}
                        <div className="flex-1 flex justify-center">
                            <div className="flex flex-wrap gap-14 lg:gap-20">
                                {/* Company */}
                                <div>
                                    <h3 className="text-[0.7rem] uppercase tracking-[0.3em] font-medium text-white/40 mb-5">
                                        Company
                                    </h3>
                                    <ul className="footer-list-reset space-y-3">
                                        {["About", "Platform", "Investments", "Partnerships", "Insights", "Contact"].map((item) => (
                                            <li key={item}>
                                                <a
                                                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-all duration-200 text-sm font-light tracking-wide"
                                                >
                          <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-white/40">
                            →
                          </span>
                                                    <span>{item}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Legal */}
                                <div>
                                    <h3 className="text-[0.7rem] uppercase tracking-[0.3em] font-medium text-white/40 mb-5">
                                        Legal
                                    </h3>
                                    <ul className="footer-list-reset space-y-3">
                                        {["Governance", "Disclaimer", "Privacy Policy", "Cookie Settings"].map((item) => (
                                            <li key={item}>
                                                <a
                                                    href="#"
                                                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-all duration-200 text-sm font-light tracking-wide"
                                                >
                          <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-white/40">
                            →
                          </span>
                                                    <span>{item}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/10 my-8 lg:my-12" />

                    {/* Bottom: Social + Copyright */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                        <div className="flex items-center gap-5">
              <span className="text-white/30 text-[0.65rem] uppercase tracking-[0.25em] font-medium">
                Connect
              </span>
                            <div className="flex gap-3">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="group p-1.5 rounded-full hover:bg-white/10 transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-white transition-colors">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="group p-1.5 rounded-full hover:bg-white/10 transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-white transition-colors">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="group p-1.5 rounded-full hover:bg-white/10 transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-white transition-colors">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <p className="text-white/25 text-[0.65rem] font-light tracking-wider">
                            © 2026 TheAbdullaCapital. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footerr;