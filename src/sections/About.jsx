// About.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AS, Abdulla1, visionBackground, invphil1 } from "../assets";

const About = () => {
    // ========== REFS & SCROLL ANIMATIONS ==========
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40]);

    // ========== ANIMATION VARIANTS ==========
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                ease: "easeOut",
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95, x: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2,
            },
        },
    };

    // ========== TAB STATE ==========
    const [activeTab, setActiveTab] = useState("long-term-investment");

    const tabs = [
        {
            id: "long-term-investment",
            title: "Long‑term investment mindset",
            description:
                "We prioritize sustainable value creation over short-term gains, focusing on investments that compound value over decades.",
            image: invphil1,
        },
        {
            id: "governance-driven",
            title: "Governance‑driven decision making",
            description:
                "Our decisions are guided by robust governance frameworks that ensure transparency, accountability, and alignment with stakeholder interests.",
            image: invphil1,
        },
        {
            id: "strategic-partnerships",
            title: "Strategic partnerships over speculation",
            description:
                "We build lasting partnerships based on trust and mutual value creation, avoiding speculative approaches that compromise long‑term stability.",
            image: invphil1,
        },
        {
            id: "sustainable-value",
            title: "Focus on sustainable value creation",
            description:
                "Environmental, social, and governance factors are integrated into our investment process to drive resilient, long‑term returns.",
            image: invphil1,
        },
    ];

    // ========== LEADERSHIP DATA ==========
    const leadershipData = {
        name: "Abdulla Salem",
        description:
            "Abdulla Salem – Entrepreneur, investor, and strategic operator building ventures across the sports and investment ecosystem.",
        imageUrl: Abdulla1,
    };

    // ========== ANIMATED TEXT COMPONENT ==========
    const AnimatedText = ({ text, className, delay = 0 }) => {
        const words = text.split(" ");
        return (
            <motion.div
                className={className}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.08,
                            delayChildren: delay,
                        },
                    },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {words.map((word, idx) => (
                    <motion.span
                        key={idx}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4, ease: "easeOut" },
                            },
                        }}
                        style={{ display: "inline-block", marginRight: "0.25em" }}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    // ========== INTERSECTION OBSERVER FOR REVEAL ==========
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <motion.div
            ref={sectionRef}
            style={{ opacity, y }}
            className="relative overflow-hidden bg-[#FCF9F5]"
        >
            {/* ========== PREMIUM BACKGROUND ELEMENTS ========== */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 -right-40 w-80 h-80 bg-stone-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -left-40 w-96 h-96 bg-stone-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-stone-400/3 to-stone-500/3 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_100%]" />
            </div>

            {/* ========== SECTION 1 – MULTI‑DISCIPLINARY PLATFORM ========== */}
            <motion.section
                id="about-us"
                className="relative min-h-screen flex items-center py-24 lg:py-32"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Left Image – moved 25% right */}
                            <motion.div
                                variants={imageVariants}
                                className="relative lg:ml-[25%]"
                            >
                                <div className="relative">
                                    <motion.div
                                        className="absolute -top-10 -right-10 w-40 h-40 border border-stone-200 rounded-full"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1.1, opacity: 0.6 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    />
                                    <motion.div
                                        className="absolute -bottom-10 -left-10 w-32 h-32 border border-stone-300/30 rounded-full"
                                        initial={{ scale: 0.6, opacity: 0 }}
                                        whileInView={{ scale: 1.2, opacity: 0.3 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        viewport={{ once: true }}
                                    />
                                    <div className="relative overflow-hidden shadow-2xl">
                                        <img
                                            src={AS}
                                            alt="Multi‑disciplinary platform"
                                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#FCF9F5] via-[#FCF9F5]/20 to-transparent" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Content – moved right, sub‑content constrained */}
                            <motion.div
                                variants={itemVariants}
                                className="lg:ml-[25%]"
                            >
                                <div className="space-y-8 max-w-xl">
                                    <motion.div variants={itemVariants}>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-stone-500" />
                                            <span className="text-stone-500 text-xs uppercase tracking-[0.3em] font-medium">
                                                About Us
                                            </span>
                                            <div className="w-12 h-px bg-gradient-to-l from-transparent to-stone-500" />
                                        </div>
                                    </motion.div>

                                    <motion.h2
                                        variants={itemVariants}
                                        className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-stone-900 tracking-tight leading-[1.1]"
                                    >
                                        A Multi‑Disciplinary
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stone-800 via-stone-700 to-stone-600 font-medium">
                                            Capital Platform
                                        </span>
                                    </motion.h2>

                                    <motion.div
                                        variants={itemVariants}
                                        className="w-16 h-px bg-gradient-to-r from-stone-400 to-transparent"
                                    />

                                    <motion.p
                                        variants={itemVariants}
                                        className="text-stone-600 font-light leading-relaxed text-base lg:text-lg"
                                    >
                                        Abdulla Capital operates at the intersection of private
                                        investment, strategic advisory and equity participation.
                                        The platform is designed to preserve capital, assess
                                        opportunity and create enduring value across sectors,
                                        markets and long‑term partnerships.
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-400/30 to-transparent" />
        </motion.div>
    );
};

export default About;