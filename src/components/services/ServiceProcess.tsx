"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServiceProcess() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".sp-step", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        {
            num: "01",
            title: "Consultation",
            text: "We analyze your niche and volume requirements."
        },
        {
            num: "02",
            title: "Sourcing",
            text: "We identify the best factories from our network of 500+ partners."
        },
        {
            num: "03",
            title: "Sampling",
            text: "You receive physical prototypes to verify quality before bulk production."
        },
        {
            num: "04",
            title: "Fulfillment",
            text: "Orders sync automatically and ship within 24-48 hours."
        }
    ];

    return (
        <section ref={containerRef} className="py-24 px-6 bg-neutral-900 text-white">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-tighter mb-4">How It Works</h2>
                    <p className="text-neutral-400">Streamlined workflow for maximum efficiency.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="sp-step p-8 rounded-2xl bg-neutral-800 border border-neutral-700 relative overflow-hidden group hover:bg-neutral-700 transition-colors">
                            <span className="text-6xl font-bold text-neutral-800 group-hover:text-neutral-600 transition-colors absolute -top-4 -right-4 select-none">{step.num}</span>
                            <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed relative z-10">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
