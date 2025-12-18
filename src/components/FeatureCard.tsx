import { ReactNode } from "react";

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-accent/20 hover:border-accent/40">
            <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                <span className="text-3xl">{icon}</span>
            </div>
            <h3 className="font-poppins font-semibold text-xl text-charcoal mb-3">
                {title}
            </h3>
            <p className="text-charcoal/70 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
