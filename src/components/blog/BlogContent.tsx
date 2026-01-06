"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { BlogContentSection } from "@/data/blogData";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface BlogContentProps {
    sections: BlogContentSection[];
}

export default function BlogContent({ sections }: BlogContentProps) {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".content-section", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
        });

        gsap.from(".back-link", {
            x: -20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".back-link",
                start: "top 90%",
            },
        });
    }, { scope: containerRef });

    return (
        <article ref={containerRef} className="max-w-3xl mx-auto px-6 py-16 md:py-24">
            <div className="prose prose-invert prose-lg max-w-none">
                {sections.map((section, index) => (
                    <section key={index} className="content-section mb-12 last:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                            {section.heading}
                        </h2>
                        <p className="text-muted leading-relaxed text-base md:text-lg">
                            {section.body}
                        </p>
                    </section>
                ))}
            </div>

            {/* Back to Blog Link */}
            <div className="mt-16 pt-8 border-t border-border">
                <a
                    href="/blog"
                    className="back-link inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    Back to Blog
                </a>
            </div>
        </article>
    );
}
