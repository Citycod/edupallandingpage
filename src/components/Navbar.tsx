"use client";

import { useState } from "react";
import Link from "next/link";
import { IoSchoolOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/5 backdrop-blur-md bg-background-dark/80 px-6 py-4 md:px-10 lg:px-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-8 text-primary">
                    <IoSchoolOutline className="text-3xl" />
                </div>
                <h2 className="text-white text-xl font-bold tracking-tight">EduPal</h2>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-slate-300 hover:text-primary transition-colors text-sm font-medium"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
                <button className="text-white hover:text-primary text-sm font-semibold transition-colors">
                    Log In
                </button>
                <Link
                    href="#waitlist"
                    className="flex cursor-pointer items-center justify-center rounded-full bg-white/10 hover:bg-white/20 h-10 px-5 text-white text-sm font-bold transition-all border border-white/5"
                >
                    Get Started
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? (
                    <IoCloseOutline className="text-2xl" />
                ) : (
                    <IoMenuOutline className="text-2xl" />
                )}
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed top-[73px] left-0 right-0 bg-background-dark/95 backdrop-blur-md border-b border-white/5 shadow-lg">
                    <div className="py-4 flex flex-col">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-primary hover:bg-white/5 font-medium py-3 px-6 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-2 px-6 pt-4 border-t border-white/5 mt-2">
                            <button className="text-white hover:text-primary text-sm font-semibold py-2">
                                Log In
                            </button>
                            <Link
                                href="#waitlist"
                                className="flex w-full cursor-pointer items-center justify-center rounded-full bg-primary hover:bg-primary-dark h-10 text-background-dark text-sm font-bold transition-all"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
