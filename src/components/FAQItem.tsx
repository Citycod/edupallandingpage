"use client";

import { useState } from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-charcoal/10 last:border-b-0">
            <button
                className="w-full py-5 flex items-center justify-between text-left group"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="font-poppins font-medium text-lg text-charcoal group-hover:text-primary transition-colors duration-200">
                    {question}
                </span>
                <span
                    className={`ml-4 flex-shrink-0 p-1 rounded-full transition-all duration-300 ${isOpen ? "bg-secondary text-white rotate-180" : "bg-accent/20 text-charcoal"
                        }`}
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"
                    }`}
            >
                <p className="text-charcoal/70 leading-relaxed pl-0 pr-8">
                    {answer}
                </p>
            </div>
        </div>
    );
}
