import Link from "next/link";
import { IoSchoolOutline, IoGlobeOutline, IoMailOutline, IoShareSocialOutline } from "react-icons/io5";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: "Home", href: "#" },
        { name: "Features", href: "#features" },
        { name: "FAQ", href: "#faq" },
        { name: "Waitlist", href: "#waitlist" },
    ];

    return (
        <footer className="w-full bg-[#0d1812] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Logo & Tagline */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2">
                        <div className="size-6 text-primary flex items-center justify-center">
                            <IoSchoolOutline className="text-xl" />
                        </div>
                        <span className="text-xl font-bold text-white">EduPal</span>
                    </div>
                    <p className="text-slate-400 text-sm">Learn. Share. Pass. Together.</p>
                </div>

                {/* Navigation Links */}
                <div className="flex gap-8 text-sm font-medium text-slate-400">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <a
                        href="#"
                        className="size-10 rounded-full bg-white/5 hover:bg-primary hover:text-background-dark flex items-center justify-center transition-all text-white"
                    >
                        <IoGlobeOutline className="text-lg" />
                    </a>
                    <a
                        href="mailto:contact@edupal.app"
                        className="size-10 rounded-full bg-white/5 hover:bg-primary hover:text-background-dark flex items-center justify-center transition-all text-white"
                    >
                        <IoMailOutline className="text-lg" />
                    </a>
                    <a
                        href="#"
                        className="size-10 rounded-full bg-white/5 hover:bg-primary hover:text-background-dark flex items-center justify-center transition-all text-white"
                    >
                        <IoShareSocialOutline className="text-lg" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/5 py-6 text-center text-xs text-white/40">
                <p>© {currentYear} EduPal. All rights reserved.</p>
                <p className="mt-1">Contact: contact@edupal.app</p>
            </div>
        </footer>
    );
}
