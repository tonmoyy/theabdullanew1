import React from 'react'
import { dfm, CNN_International_logo, cnbc } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Using publicly available logo URLs — replace with local imports if you have them
const logos = [
    { src: CNN_International_logo, alt: "CNN International" },
    { src: cnbc, alt: "CNBC" },
    { src: dfm, alt: "DFM" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/320px-BBC_News_2019.svg.png", alt: "BBC News" },
    { src: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Al_Jazeera_Media_Network_Logo.svg/320px-Al_Jazeera_Media_Network_Logo.svg.png", alt: "Al Jazeera" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Fox_News_Channel_logo.svg/320px-Fox_News_Channel_logo.svg.png", alt: "Fox News" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/320px-NBC_logo.svg.png", alt: "NBC" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Reuters_logo.svg/320px-Reuters_logo.svg.png", alt: "Reuters" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bloomberg_Logo.svg/320px-Bloomberg_Logo.svg.png", alt: "Bloomberg" },
];

const Featured = () => {
    return (
        <div>
            {/* ── Logos Showcase ── */}
           

            {/* ── "Here to Help" Banner ── */}
            <section
                className="ta-background-image align-full ta-section-element ta-background-image_text-left-cta-right"
            >
                <div
                    className="ta-background-image__overlay"
                    style={{ opacity: "0.7" }}
                />
                <div className="ta-background-image__container">
                    <div className="ta-background-image__content">
                        <h2>
                            We're <em>here to help</em>
                        </h2>
                        <p>Get to know our team and how we can partner with you.</p>
                    </div>
                    <div className="ta-background-image__btn">
                        <a
                            className="ta-btn ta-btn_orange"
                            href="contact-us/index.html"
                            aria-label="Contact Us"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;