import React from 'react';
import BannerImage from "../../assets/banner.png";

const Banner = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-white via-white to-red-50/70 mb-10 lg:mb-12 ">
            {/* Background Effects */}
            <div className="absolute top-10 right-0 w-80 h-80 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-[94%] md:w-[95%] lg:w-[85%] mx-auto min-h-[600px] lg:min-h-[650px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center py-14 md:py-20">

                {/* Left Content */}
                <div className="space-y-7 max-w-2xl">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-red-200 bg-white/80 px-4 py-2 text-sm font-semibold text-red-600 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-red-500" />
                        <span>Frontier AI Models</span>
                        <span className="text-red-300">✦</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl  md:text-[60px] font-extrabold leading-[1.12] tracking-tight text-slate-900">
                            One Subscription.
                            <span className="block mt-2 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                                All the AIs You Need.
                            </span>
                        </h1>

                        <p className="max-w-xl text-base md:text-lg leading-8 text-slate-600">
                            Experience the full spectrum of frontier intelligence. Access
                            powerful AI models through one simple, unified subscription.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4">
                        <button className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/25 md:px-6 md:py-3.5 md:text-base">
                            Get Unlimited Access
                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
                                →
                            </span>
                        </button>

                        <a
                            href="#services"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 md:px-6 md:py-3.5 md:text-base"
                        >
                            Explore Models
                        </a>
                    </div>


                    {/* Benefits */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200/80 pt-6 text-sm font-medium text-slate-600">
                        <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-50 text-xs text-red-600">
                                ✓
                            </span>
                            50+ Frontier Models
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-50 text-xs text-red-600">
                                ✓
                            </span>
                            Flexible Access
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-50 text-xs text-red-600">
                                ✓
                            </span>
                            Cancel Anytime
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="absolute inset-8 rounded-full bg-red-200/30 blur-3xl" />

                    <div className="relative w-full max-w-[520px]">
                        <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-red-100/60 to-orange-100/40 blur-xl" />

                        <img
                            className=" banner-image relative z-10 w-full max-h-[520px] object-contain drop-shadow-[0_24px_35px_rgba(127,29,29,0.12)]"
                            src={BannerImage}
                            alt="Explore AI models with AI Hub"
                        />

                        {/* Floating Label */}
                        <div className="absolute bottom-5 left-2 sm:bottom-8 sm:left-0 z-20 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-slate-900/5 backdrop-blur-md">
                            <p className="text-xs font-medium text-slate-500">
                                Your AI workspace
                            </p>
                            <p className="mt-1 text-sm font-bold text-slate-900">
                                One Hub. Endless Possibilities.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;