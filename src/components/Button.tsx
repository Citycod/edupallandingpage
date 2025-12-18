import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    className?: string;
}

export default function Button({
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles =
        "font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2";

    const variants = {
        primary:
            "bg-secondary hover:bg-secondary-600 text-white hover:shadow-lg",
        secondary:
            "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary",
        outline:
            "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
    };

    const sizes = {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-base",
        lg: "py-4 px-8 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
