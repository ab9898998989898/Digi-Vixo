"use client";

import { ArrowRight, Star } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SuccessStories() {
    const containerRef = useRef(null);
    const stories = [
        {
            brand: "Enterprise FinTech Client",
            metric: "99.9%",
            timeframe: "Up-time achieved",
            quote: "Digivixo re-engineered our core platform architecture, allowing us to handle 10x our previous user load with zero performance degradation.",
            founder: "Chief Technology Officer",
            role: "Confidential Partner"
        },
        {
            brand: "Global Logistics Firm",
            metric: "65%",
            timeframe: "Efficiency Increase",
            quote: "The custom automation workflows implemented by Digivixo eliminated months of manual data processing, letting our team focus on strategic growth.",
            founder: "Managing Director",
            role: "Confidential Partner"
        },
        {
            brand: "International SaaS Provider",
            metric: "4",
            timeframe: "Global Regions Scaled",
            quote: "Their UI/UX design and scalable web infrastructure allowed us to localize our digital presence across four continents with complete brand consistency.",
            founder: "Head of Digital Product",
            role: "Confidential Partner"
        }
    ];

    useGSAP(() => {
        gsap.from(".story-card", {
            scrollTrigger: {
                trigger: containerRef.current,

                start: "top 70%",
            },

            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-accent">Success Stories</h2>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Legends of Scale.</h3>
                </div>
                <a href="/services" className="px-8 py-4 rounded-full border border-neutral-800 hover:bg-neutral-900 transition-colors flex items-center gap-2 group">
                    Read Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stories.map((story, i) => (
                    <div key={i} className="story-card p-10 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-accent/50 transition-colors group flex flex-col justify-between h-full">
                        <div className="space-y-8">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-gold text-gold" />)}
                            </div>
                            <blockquote className="text-xl leading-relaxed text-neutral-300">
                                "{story.quote}"
                            </blockquote>
                        </div>

                        <div className="mt-12 pt-8 border-t border-neutral-800 flex justify-between items-end">
                            <div>
                                <div className="text-3xl font-bold text-foreground mb-1">{story.metric}</div>
                                <div className="text-sm text-neutral-500 uppercase tracking-wide">{story.timeframe}</div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold">{story.brand}</div>
                                <div className="text-sm text-neutral-500">{story.founder}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
