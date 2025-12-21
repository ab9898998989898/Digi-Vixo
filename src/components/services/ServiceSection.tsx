"use client";

import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ServiceSectionProps {
    id: string;
    title: string;
    description: string;
    features: string[];
    imageSrc?: string;
    reversed?: boolean;
}

export default function ServiceSection({ id, title, description, features, imageSrc, reversed }: ServiceSectionProps) {
    return (
        <section id={id} className={cn("py-24 px-6", reversed ? "bg-neutral-900" : "bg-black")}>
            <div className={cn("max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16", reversed && "md:flex-row-reverse")}>
                <div className="flex-1 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">{title}</h2>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                        {description}
                    </p>
                    <ul className="space-y-4">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-neutral-200">
                                <CheckCircle2 className="w-5 h-5 text-neutral-500" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 w-full aspect-square md:aspect-video bg-neutral-800 rounded-2xl overflow-hidden relative">
                    {imageSrc ? (
                        <Image src={imageSrc} alt={title} fill className="object-cover" />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                            {/* Optional: Add a subtle pattern or icon here if needed */}
                            <div className="w-16 h-16 rounded-full bg-neutral-700 opacity-20" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
