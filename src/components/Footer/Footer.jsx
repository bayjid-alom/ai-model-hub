import React from 'react';
import footerLogo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="relative overflow-hidden border-t border-red-500/20 bg-zinc-950 pt-14 pb-8 text-zinc-400 md:pt-16 mt-13 md:mt-25">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-red-600/10 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-500/5 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-12 md:gap-8 lg:gap-12">

                    {/* Logo & Description */}
                    <div className="sm:col-span-2 md:col-span-4">
                        <a href="/" className="mb-5 inline-flex items-center gap-3">
                            <img
                                src={footerLogo}
                                alt="AI Hub Logo"
                                className="h-10 w-auto object-contain"
                            />
                            <h2 className="text-3xl font-extrabold tracking-tight text-white">
                                AI <span className="text-red-500">Hub</span>
                            </h2>
                        </a>

                        <p className="max-w-sm text-sm leading-7 text-zinc-400">
                            One subscription. Unlimited possibilities.
                            Access powerful frontier AI models through
                            one simple, unified platform.
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-3.5 py-2 text-xs font-medium text-zinc-300">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                            Your gateway to smarter AI
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="md:col-span-2">
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
                            Product
                        </h3>
                        <ul className="space-y-3.5 text-sm">
                            {["Models", "Pricing", "Features", "API"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={item === "Models" ? "#services" : "#"}
                                        className="inline-block transition-colors duration-200 hover:text-red-400"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="md:col-span-2">
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
                            Company
                        </h3>
                        <ul className="space-y-3.5 text-sm">
                            {["About Us", "Blog", "Careers", "Contact"].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="inline-block transition-colors duration-200 hover:text-red-400"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="md:col-span-3">
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
                            Legal
                        </h3>
                        <ul className="space-y-3.5 text-sm">
                            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="inline-block transition-colors duration-200 hover:text-red-400"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs sm:flex-row sm:text-left">
                    <p>
                        © {new Date().getFullYear()} AI Hub. All rights reserved.
                    </p>

                    <p className="text-zinc-500">
                        Built for the future of AI.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
