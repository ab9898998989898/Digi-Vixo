"use client";

import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface ServiceSectionProps {
    id: string;
    title: string;
    description: string;
    features: string[];
    imageSrc?: string; // Placeholder for now
    reversed?: boolean;
}

export default function ServiceSection({ id, title, description, features, reversed }: ServiceSectionProps) {
    return (
        <section id={id} className={cn("py-24 px-6", reversed ? "bg-neutral-50 dark:bg-neutral-900" : "bg-white dark:bg-black")}>
            <div className={cn("max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16", reversed && "md:flex-row-reverse")}>
                <div className="flex-1 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{title}</h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {description}
                    </p>
                    <ul className="space-y-4">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200">
                                <CheckCircle2 className="w-5 h-5 text-neutral-500" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 w-full aspect-square md:aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-2xl animate-pulse">
                    {/* Image Placeholder */}
                </div>
            </div>
        </section>
    );
}
