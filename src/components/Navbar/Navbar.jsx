import React from 'react';
import logo from '../../assets/logo.png'
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 backdrop-blur-xl">
            <nav className="w-[94%] md:w-[95%] lg:w-[85%] mx-auto min-h-[82px] flex justify-between items-center gap-4">

                {/* Logo */}
                <div className="flex items-center gap-2.5 shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                        <img
                            className="w-8 h-8 object-contain"
                            src={logo}
                            alt="AI Hub Logo"
                        />
                    </div>

                    <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900">
                        AI <span className="text-red-600">Hub</span>
                    </h1>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center">
                    <ul className="flex items-center gap-1 text-[15px] font-medium text-slate-500">
                        <li>
                            <a
                                className="px-5 py-2.5 rounded-full bg-red-50 text-red-600 font-semibold"
                                href="#"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                className="px-5 py-2.5 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                                href="#about"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                className="px-5 py-2.5 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                                href="#services"
                            >
                                Services
                            </a>
                        </li>

                        <li>
                            <a
                                className="px-5 py-2.5 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                                href="#contact"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 shrink-0">
                    <button
                        type="button"
                        aria-label="Shopping cart"
                        className="relative w-11 h-11 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:border-red-200 hover:text-red-600 hover:bg-red-50 transition-all duration-200"
                    >
                        <ShoppingCart size={19} strokeWidth={1.8} />
                    </button>

                    <a
                        href="#contact"
                        className="hidden sm:inline-flex items-center px-5 md:px-6 py-3 rounded-full bg-red-600 text-white text-sm font-semibold shadow-md shadow-red-600/15 hover:bg-red-700 transition-colors duration-200"
                    >
                        Get in Touch
                    </a>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;